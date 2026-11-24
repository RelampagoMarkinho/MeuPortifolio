import { WHATSAPP, trabalhos, referencias, formacao } from "./data.js";
import { linkWhats, mensagemReferencia, MENSAGEM_CONTATO } from "./links.js";

const categoria = (t) => (t.tipo === "Site" ? "Site" : t.tipo === "Sistema" ? "Sistema" : "App");

function el(tag, attrs = {}, ...filhos) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else n.setAttribute(k, v);
  }
  for (const f of filhos) if (f != null) n.append(f);
  return n;
}

function botaoWhats(a, mensagem) {
  const url = linkWhats(WHATSAPP, mensagem);
  if (url) {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  } else {
    a.removeAttribute("href");
    a.setAttribute("aria-disabled", "true");
    a.classList.add("desligado");
    a.textContent = a.textContent.replace(/\s*\(em breve\)$/, "") + " (em breve)";
  }
}

function capa(t) {
  if (t.fotos.length) {
    const f = t.fotos[0];
    const botao = el(
      "button",
      { class: "capa-botao", type: "button", "aria-label": `Ver telas do ${t.nome}` },
      el("img", { class: "capa", src: f.src, alt: f.legenda, loading: "lazy", width: "640", height: "400" }),
      t.fotos.length > 1 ? el("span", { class: "capa-qtd" }, `${t.fotos.length} telas`) : null
    );
    botao.addEventListener("click", () => abrirGaleria(t, 0));
    return botao;
  }
  return el("div", { class: "capa capa-vazia", "aria-hidden": "true" }, el("span", {}, t.nome));
}

// Galeria
const galeria = document.getElementById("galeria");
const gImg = galeria.querySelector(".g-img");
const gLegenda = galeria.querySelector(".g-legenda");
const gTitulo = galeria.querySelector(".g-titulo");
const gContador = galeria.querySelector(".g-contador");
let gAtual = null;
let gIndice = 0;

function mostrar(i) {
  const n = gAtual.fotos.length;
  gIndice = (i + n) % n;
  const f = gAtual.fotos[gIndice];
  gImg.src = f.src;
  gImg.alt = f.legenda;
  gLegenda.textContent = f.legenda;
  gContador.textContent = `${gIndice + 1} / ${n}`;
  galeria.classList.toggle("unica", n === 1);
}

function abrirGaleria(t, i) {
  gAtual = t;
  gTitulo.textContent = t.nome;
  mostrar(i);
  galeria.showModal();
}

galeria.querySelector(".g-ant").addEventListener("click", () => mostrar(gIndice - 1));
galeria.querySelector(".g-prox").addEventListener("click", () => mostrar(gIndice + 1));
galeria.querySelector(".g-fechar").addEventListener("click", () => galeria.close());
galeria.addEventListener("click", (e) => { if (e.target === galeria) galeria.close(); });
galeria.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") mostrar(gIndice - 1);
  if (e.key === "ArrowRight") mostrar(gIndice + 1);
});
let toqueX = null;
gImg.addEventListener("touchstart", (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
gImg.addEventListener("touchend", (e) => {
  if (toqueX == null) return;
  const dx = e.changedTouches[0].clientX - toqueX;
  if (Math.abs(dx) > 40) mostrar(gIndice + (dx < 0 ? 1 : -1));
  toqueX = null;
});

function cartao(t) {
  const tags = el("ul", { class: "tags" }, ...t.tecnologias.map((x) => el("li", {}, x)));
  return el(
    "article",
    { class: "cartao", "data-cat": categoria(t) },
    capa(t),
    el(
      "div",
      { class: "cartao-corpo" },
      el("p", { class: "tipo" }, t.tipo),
      el("h3", {}, t.nome),
      t.cliente ? el("p", { class: "cliente" }, `Cliente: ${t.cliente}`) : null,
      el("p", { class: "resumo" }, t.resumo),
      t.tecnologias.length ? tags : null
    )
  );
}

function referencia(r) {
  const inicial = r.empresa.trim().charAt(0).toUpperCase();
  const btn = el("a", { class: "btn btn-ref" }, "Pedir contato");
  botaoWhats(btn, mensagemReferencia(r.empresa));
  return el(
    "li",
    { class: "ref" },
    el("span", { class: "ref-inicial", "aria-hidden": "true" }, inicial),
    el("div", { class: "ref-texto" }, el("strong", {}, r.empresa), el("span", {}, r.servico)),
    btn
  );
}

function itemFormacao(f) {
  const andamento = f.situacao !== "Concluído";
  return el(
    "li",
    { class: "form-item" },
    el("p", { class: "tipo" }, f.nivel),
    el("h3", {}, f.curso),
    el("p", { class: "form-inst" }, f.instituicao),
    el("span", { class: andamento ? "selo selo-andamento" : "selo" }, f.situacao)
  );
}

document.getElementById("lista-trabalhos").append(...trabalhos.map(cartao));
document.getElementById("lista-formacao").append(...formacao.map(itemFormacao));
document.getElementById("lista-referencias").append(...referencias.map(referencia));
document.getElementById("n-trabalhos").textContent = String(trabalhos.length);
document.querySelectorAll('[data-whats="contato"]').forEach((a) => botaoWhats(a, MENSAGEM_CONTATO));

const filtros = document.querySelectorAll(".filtro");
filtros.forEach((b) =>
  b.addEventListener("click", () => {
    filtros.forEach((x) => {
      x.classList.toggle("ativo", x === b);
      x.setAttribute("aria-selected", String(x === b));
    });
    const f = b.dataset.filtro;
    document.querySelectorAll(".cartao").forEach((c) => {
      c.hidden = f !== "todos" && c.dataset.cat !== f;
    });
  })
);
