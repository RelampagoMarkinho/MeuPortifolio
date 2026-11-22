import { WHATSAPP, trabalhos, referencias } from "./data.js";
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
  if (t.img) {
    return el("img", { class: "capa", src: t.img, alt: `Tela do ${t.nome}`, loading: "lazy", width: "640", height: "400" });
  }
  return el("div", { class: "capa capa-vazia", "aria-hidden": "true" }, el("span", {}, t.nome));
}

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

document.getElementById("lista-trabalhos").append(...trabalhos.map(cartao));
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
