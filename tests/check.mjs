import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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
}

console.log("ok");
