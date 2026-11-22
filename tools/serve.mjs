// Servidor local só para testar a página: node tools/serve.mjs [porta]
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = fileURLToPath(new URL("../public/", import.meta.url));
const porta = Number(process.argv[2] || 5180);
const tipos = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml" };

createServer(async (req, res) => {
  let caminho = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (caminho.endsWith("/")) caminho += "index.html";
  const arquivo = normalize(join(raiz, caminho));
  if (!arquivo.startsWith(normalize(raiz))) { res.writeHead(403).end(); return; }
  try {
    const dados = await readFile(arquivo);
    res.writeHead(200, { "Content-Type": tipos[extname(arquivo)] || "application/octet-stream" }).end(dados);
  } catch {
    res.writeHead(404).end("não encontrado");
  }
}).listen(porta, () => console.log(`http://localhost:${porta}`));
