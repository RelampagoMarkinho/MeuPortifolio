import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { linkWhats, mensagemReferencia } from "../public/links.js";
import { WHATSAPP, trabalhos, referencias, formacao } from "../public/data.js";

// formação
assert.equal(formacao.length, 3);
for (const f of formacao) {
  assert.ok(f.curso && f.instituicao && f.situacao, `formação incompleta: ${f.curso}`);
}
assert.equal(formacao[0].curso, "Análise e Desenvolvimento de Sistemas");

// links
assert.equal(
  linkWhats("5591999999999", "Olá & tal"),
  "https://wa.me/5591999999999?text=Ol%C3%A1%20%26%20tal"
);
assert.equal(linkWhats("", "x"), null);
assert.equal(linkWhats("  ", "x"), null);
assert.equal(
  mensagemReferencia("Natehcia Advocacia"),
  "Olá, vi seu portfólio e gostaria do contato da referência Natehcia Advocacia."
);

// WhatsApp do Marcos: vazio ou só dígitos com DDI
assert.ok(WHATSAPP === "" || /^55\d{10,11}$/.test(WHATSAPP), "WHATSAPP inválido");

// referências: só empresa e serviço, nada de contato
assert.ok(referencias.length >= 4);
for (const r of referencias) {
  assert.deepEqual(Object.keys(r).sort(), ["empresa", "servico"]);
}
const fonte = readFileSync(fileURLToPath(new URL("../public/data.js", import.meta.url)), "utf8")
  .replace(/WHATSAPP\s*=\s*"[^"]*"/, "");
assert.ok(!/\(?\d{2}\)?\s?9?\d{4}-?\d{4}/.test(fonte), "data.js contém algo parecido com telefone");
assert.ok(!/@[a-z0-9-]+\./i.test(fonte), "data.js contém algo parecido com e-mail");

// trabalhos
assert.ok(trabalhos.length >= 10);
const ids = trabalhos.map((t) => t.id);
assert.equal(new Set(ids).size, ids.length, "id repetido");
for (const t of trabalhos) {
  assert.ok(t.nome && t.resumo && Array.isArray(t.tecnologias), `trabalho incompleto: ${t.id}`);
  assert.ok(Array.isArray(t.fotos), `fotos deve ser lista: ${t.id}`);
  for (const f of t.fotos) {
    assert.ok(f.src && f.legenda, `foto sem src/legenda em ${t.id}`);
    assert.ok(existsSync(fileURLToPath(new URL(`../public/${f.src}`, import.meta.url))), `foto não existe: ${f.src}`);
    assert.ok(!f.src.startsWith("assets"), `foto original sem borrão: ${f.src}`);
  }
}
const porId = Object.fromEntries(trabalhos.map((t) => [t.id, t]));
assert.equal(porId.natehcia.cliente, "Nathércia Jansen Advocacia");
assert.equal(porId.natehcia.fotos.length, 5);
assert.equal(porId.azulao.fotos.length, 5);
assert.equal(porId.rotex.fotos.length, 7);

console.log("ok");
