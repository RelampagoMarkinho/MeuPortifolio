export function linkWhats(numero, mensagem) {
  const n = String(numero || "").replace(/\D/g, "");
  if (!n) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(mensagem)}`;
}

export function mensagemReferencia(empresa) {
  return `Olá, vi seu portfólio e gostaria do contato da referência ${empresa}.`;
}

export const MENSAGEM_CONTATO = "Olá, vi seu portfólio e quero conversar sobre um sistema.";
