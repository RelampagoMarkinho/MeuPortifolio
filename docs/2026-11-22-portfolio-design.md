# Portfólio — Marcos Soluções Tecnológicas (design)

## Para que serve
Link que o Marcos manda para um cliente em potencial que pede portfólio. O cliente abre no celular,
vê em pouco tempo o que o Marcos já fez, vê empresas que confiam nele e chama no WhatsApp.

## Objetivos
- Mostrar os trabalhos com o problema que cada um resolve, em linguagem de cliente (não de programador).
- Mostrar referências reais: **só nome do cliente e empresa**, com botão "Pedir contato desta referência"
  que abre o WhatsApp do Marcos com mensagem pronta ("Olá, vi seu portfólio e gostaria do contato da referência X").
- Botão de WhatsApp sempre à mão.

## Não-objetivos
- Não mostrar telefone/e-mail dos clientes de referência.
- Sem login, painel ou blog. Sem página separada por trabalho.

## Anti-objetivos (seria fracasso)
- Ficar pesado/lento no celular.
- Parecer modelo genérico.
- Expor dados dos clientes ou das telas (nomes de pessoas, CPF etc. nos prints).

## Abordagens consideradas
- **A) Página única estática no Firebase Hosting** — escolhida. Rápida, grátis, leve; atualizar = publicar de novo.
- B) Next.js no App Hosting via GitHub — mais escalável, mais trabalho para pouco ganho agora.
- C) PDF — não tem botão de WhatsApp vivo e fica desatualizado.

## Conteúdo
Marca: **MJR Softwares** (logo redonda azul-marinho/azul, em `public/img/logo-mjr.webp`).
Atualizado em 22/11: o Marcos trocou a marca de "Marcos Soluções Tecnológicas" para MJR Softwares.

Seções, de cima para baixo:
1. Topo: logo, frase curta do que faz (sistemas, apps e sites sob medida), botão WhatsApp.
2. Trabalhos (cartões com print + 1–2 frases + tecnologias em etiqueta):
   EncomendaFácil, Vemtebora, Copan, Juca Depósito de Água, Natehcia Advocacia,
   Centro de Monitoramento de Vigia, ATAAV (Terminal Rodoviário de Vigia), CoopSalgado,
   F5 Rodoviário, SenhaAtendimento, empresa do abacaxi (nome a confirmar). RotexPrint só se o Marcos descrever.
3. Referências: Juca Depósito de Água, Natehcia Advocacia, Centro de Monitoramento de Vigia,
   empresa do abacaxi — nome + empresa + o que foi feito + botão "Pedir contato".
4. Rodapé: contato.

## Restrições
- Hospedagem: novo site de Hosting no mesmo projeto Firebase da Água Juca (techGuardian),
  deploy só com alvo próprio (`hosting:<site-do-portfolio>`) para não mexer em outros sites.
- HTML/CSS/JS puro, imagens otimizadas (WebP), funciona bem em 360px de largura.

## Deixado para quem constrói
- Visual (cores, tipografia), respeitando a identidade preto/branco do logo.
- Textos dos cartões (Marcos revisa).
- Prints: o site da Juca pode ser capturado direto; dos sistemas desktop/apps o Marcos manda os prints,
  e nomes/dados pessoais visíveis são borrados.

## Pendências do Marcos
- Número de WhatsApp para os botões.
- Nome da empresa do abacaxi e o que foi feito para ela.
- Prints dos sistemas.
