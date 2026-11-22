# Portfólio Marcos Soluções Tecnológicas — Plano de construção

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Página única do portfólio, com cartões dos trabalhos, referências (só nome + empresa) e WhatsApp, publicada no Firebase Hosting.

**Architecture:** HTML/CSS/JS estático em `Portfolio/public`. O conteúdo fica em `data.js` (lista de trabalhos e referências) e `app.js` monta os cartões e os links de WhatsApp. Um script Node verifica os dados e os links. O deploy usa um site próprio no projeto Firebase `cadas-otuduy`.

**Tech Stack:** HTML, CSS, JS puro (módulos ES), Node 20 (só para o teste), Firebase CLI.

**Spec:** `Portfolio/docs/2026-11-22-portfolio-design.md`

## Global Constraints
- Marca: "Marcos Soluções Tecnológicas"; logo copiado de `MarcosTecnologicas/Imgs/logo.png`.
- Referências: nunca telefone/e-mail de cliente no HTML nem em `data.js`.
- Mensagem do botão de referência: `Olá, vi seu portfólio e gostaria do contato da referência {empresa}.`
- Layout tem que funcionar a partir de 360px de largura, sem rolagem horizontal.
- Imagens em WebP, até ~150 KB cada.
- Deploy só com `firebase deploy --only hosting:portfolio` (alvo próprio); nunca mexer no `agua-juca-proposta`.
- Deploy publica na internet: perguntar ao Marcos antes de rodar.
- Sem acesso a dados reais: enquanto não houver número de WhatsApp, usar `WHATSAPP = ""` e o botão aparece desabilitado.

## Review Focus
- Trabalho sem print → cartão mostra um bloco com o nome do sistema, sem imagem quebrada.
- Nome de empresa com acento/`&` → link do WhatsApp continua válido (encodeURIComponent).
- WhatsApp vazio → botões desabilitados com texto "em breve", sem link `wa.me/` quebrado.
- Celular de 360px → nenhum elemento passa da largura da tela.
- Print com dados pessoais → borrado antes de entrar em `img/` (checagem manual na Task 3).

---

### Task 1: Dados e lógica dos links

**Files:**
- Create: `Portfolio/public/data.js`
- Create: `Portfolio/public/links.js`
- Test: `Portfolio/tests/check.mjs`

**Interfaces:**
- Produces: `data.js` exporta `WHATSAPP: string` (só dígitos com DDI, ex.: `"5591..."`), `trabalhos: Array<{id, nome, cliente?, resumo, tecnologias: string[], img?: string}>`, `referencias: Array<{empresa, servico}>`.
- Produces: `links.js` exporta `linkWhats(numero: string, mensagem: string): string | null` e `mensagemReferencia(empresa: string): string`.

- [ ] **Step 1: Escrever o teste** `check.mjs` (usa `node:assert`):
  - `linkWhats("5591999999999", "Olá & tal")` === `"https://wa.me/5591999999999?text=Ol%C3%A1%20%26%20tal"`
  - `linkWhats("", "x")` === `null`
  - `mensagemReferencia("Natehcia Advocacia")` === `"Olá, vi seu portfólio e gostaria do contato da referência Natehcia Advocacia."`
  - Nenhuma referência tem campo além de `empresa` e `servico`; nenhum texto em `data.js` casa com `/\(?\d{2}\)?\s?9?\d{4}-?\d{4}/` (telefone).
  - `trabalhos.length >= 10`; todo `id` é único.
- [ ] **Step 2:** `node Portfolio/tests/check.mjs` → falha (módulos não existem).
- [ ] **Step 3:** Implementar `links.js` e `data.js` com os 11 trabalhos e 4 referências do spec (empresa do abacaxi = `"Empresa do abacaxi (nome a confirmar)"` até o Marcos informar; RotexPrint fica fora).
- [ ] **Step 4:** `node Portfolio/tests/check.mjs` → sai sem erro, imprime `ok`.

### Task 2: Página e visual

**Files:**
- Create: `Portfolio/public/index.html`, `Portfolio/public/styles.css`, `Portfolio/public/app.js`, `Portfolio/public/img/logo.png`

**Interfaces:**
- Consumes: `data.js` e `links.js` da Task 1.
- Produces: `app.js` renderiza em `#trabalhos` e `#referencias`; botões com `data-whats`.

- [ ] **Step 1:** Seções do spec: topo (logo, frase, botão WhatsApp), Trabalhos, "Quem confia no meu trabalho", rodapé. Visual preto/branco do logo + uma cor de destaque; tipografia do Google Fonts.
- [ ] **Step 2:** Cartão sem `img` mostra bloco com o nome; WhatsApp vazio → botão `disabled` com "em breve".
- [ ] **Step 3:** Abrir no navegador (pane) em desktop e 360px: sem erros no console, sem rolagem horizontal (`document.documentElement.scrollWidth <= innerWidth`), cartões e referências aparecem.

### Task 3: Prints

**Files:**
- Create: `Portfolio/public/img/*.webp`

- [ ] **Step 1:** Capturar o site da Juca (agua-juca-proposta.web.app) no navegador e salvar em WebP.
- [ ] **Step 2:** Converter os prints que o Marcos mandar para WebP (≤150 KB), borrando nomes/CPF/telefones visíveis; conferir cada um olhando a imagem.
- [ ] **Step 3:** Preencher `img` em `data.js`; rodar `check.mjs` e conferir a página de novo.

### Task 4: Publicação

**Files:**
- Create: `Portfolio/firebase.json`, `Portfolio/.firebaserc`

- [ ] **Step 1:** `.firebaserc` com projeto `cadas-otuduy` e alvo `portfolio` → site novo (`firebase hosting:sites:create <nome>` — nome a confirmar com o Marcos, sugestão `marcos-solucoes`); `firebase.json` com `"target": "portfolio"`, `"public": "public"`, ignorando `tests` e `docs`.
- [ ] **Step 2:** Pedir ok do Marcos; `firebase deploy --only hosting:portfolio`.
- [ ] **Step 3:** Abrir a URL publicada no celular (360px) e conferir botões e imagens.
