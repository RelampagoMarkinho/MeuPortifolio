// Número do WhatsApp do Marcos, só dígitos com 55 + DDD. Vazio = botões "em breve".
export const WHATSAPP = "5591992189157";

// Fotos: sempre as versões borradas em public/img (geradas por tools/ocultar.py).
export const trabalhos = [
  {
    id: "natehcia",
    nome: "Sistema de Advocacia",
    cliente: "Nathércia Jansen Advocacia",
    tipo: "Sistema",
    resumo:
      "Gestão completa do escritório: clientes, processos, prazos, corretores e financeiro com parcelamentos. Gera contratos e declarações já preenchidos com os dados do cliente.",
    tecnologias: ["Sistema web", "Editor de documentos", "PDF"],
    fotos: [
      { src: "img/nathercia/dashboard.webp", legenda: "Painel com honorários, processos, prazos e aniversariantes" },
      { src: "img/nathercia/clientes.webp", legenda: "Clientes por situação, área e corretor" },
      { src: "img/nathercia/financeiro.webp", legenda: "Financeiro: receitas, despesas e parcelamentos" },
      { src: "img/nathercia/documentos.webp", legenda: "Modelos de contratos e declarações" },
      { src: "img/nathercia/editor.webp", legenda: "Editor de modelo com campos preenchidos automaticamente" },
    ],
  },
  {
    id: "rotex",
    nome: "Rotex",
    cliente: "Cooperativa de Transporte Complementar de Vigia de Nazaré",
    tipo: "Sistema",
    resumo:
      "Sistema de passagens para terminais rodoviários: venda e impressão de passagens, gratuidades, caixa do dia, vários terminais ligados e permissões por perfil. Continua funcionando sem internet e sincroniza depois.",
    tecnologias: ["Sistema web", "Funciona offline", "Vários terminais"],
    fotos: [
      { src: "img/rotex/login.webp", legenda: "Acesso por terminal ou por empresa" },
      { src: "img/rotex/dashboard.webp", legenda: "Resumo do dia de todos os terminais" },
      { src: "img/rotex/operador.webp", legenda: "Tela do operador com as viagens do dia" },
      { src: "img/rotex/passagens.webp", legenda: "Emissão de passagens" },
      { src: "img/rotex/relatorio.webp", legenda: "Relatórios com receita por dia e por viagem" },
      { src: "img/rotex/terminais.webp", legenda: "Cadastro dos terminais da cooperativa" },
      { src: "img/rotex/permissoes.webp", legenda: "Permissões por perfil de usuário" },
    ],
  },
  {
    id: "azulao",
    nome: "RB Azulão",
    cliente: "RB Azulão",
    tipo: "Sistema",
    resumo:
      "Sistema de distribuidora de água: PDV rápido por produto, entregas acompanhadas no mapa em tempo real, estoque com alerta e relatórios de vendas.",
    tecnologias: ["Sistema web", "Mapa em tempo real", "PDV"],
    fotos: [
      { src: "img/azulao/dashboard.webp", legenda: "Resumo do dia: vendas, caixa e estoque crítico" },
      { src: "img/azulao/pdv.webp", legenda: "PDV com os produtos e o carrinho" },
      { src: "img/azulao/pdv-entregas.webp", legenda: "Entregas: aguardando, a caminho e concluídas" },
      { src: "img/azulao/entregas.webp", legenda: "Entregadores no mapa em tempo real" },
      { src: "img/azulao/relatorio.webp", legenda: "Relatório de vendas por produto" },
    ],
  },
  {
    id: "juca",
    nome: "Juca Depósito de Água",
    cliente: "Juca Depósito de Água",
    tipo: "Site",
    resumo: "Site da empresa para apresentar os produtos e facilitar o pedido de água mineral.",
    tecnologias: ["HTML", "CSS", "Firebase Hosting"],
    fotos: [{ src: "img/juca.webp", legenda: "Página inicial do site" }],
  },
  {
    id: "encomendafacil",
    nome: "EncomendaFácil",
    tipo: "App + site",
    resumo:
      "Registro de encomendas em agências de transporte. Imprime a etiqueta na hora por impressora Bluetooth e faz o fechamento do dia com a cobrança automática.",
    tecnologias: ["Flutter", "Firebase", "PWA", "Impressão Bluetooth"],
    fotos: [],
  },
  {
    id: "vemtebora",
    nome: "Vemtebora",
    tipo: "Plataforma",
    resumo:
      "Plataforma de viagens de van no modelo Uber: app do passageiro com horário marcado, app do dono e do motorista, painel de aprovação e site.",
    tecnologias: ["Flutter", "Next.js", "Firebase"],
    fotos: [],
  },
  {
    id: "copan",
    nome: "Copan",
    tipo: "Sistema",
    resumo:
      "Sistema da colônia de pescadores, reescrito do zero a partir de um sistema antigo, com os dados migrados e acesso pela nuvem.",
    tecnologias: ["Flutter", "Firebase"],
    fotos: [],
  },
  {
    id: "cm-vigia",
    nome: "CM System Vigia",
    cliente: "Centro de Monitoramento de Vigia",
    tipo: "Sistema",
    resumo:
      "Controle do centro de monitoramento: boletins de ocorrência, relatórios, sistema de vídeo, postos de serviço e controle de usuários.",
    tecnologias: ["Delphi", "Windows"],
    fotos: [],
  },
  {
    id: "abacaxi",
    nome: "Sistema da empresa do abacaxi",
    cliente: "Empresa do abacaxi (nome a confirmar)",
    tipo: "Sistema",
    resumo: "Descrição a confirmar.",
    tecnologias: [],
    fotos: [],
  },
  {
    id: "ataav",
    nome: "ATAAV",
    tipo: "Sistema",
    resumo:
      "Sistema do terminal rodoviário de Vigia: encomendas, pagamentos e fechamento do dia, com relatórios impressos.",
    tecnologias: ["Delphi", "Windows"],
    fotos: [],
  },
  {
    id: "coopsalgado",
    nome: "CoopSalgado",
    tipo: "Sistema",
    resumo: "Controle da cooperativa de transporte: embarque, carros, passageiros isentos e fechamento do dia.",
    tecnologias: ["Delphi", "Windows"],
    fotos: [],
  },
  {
    id: "f5rodoviario",
    nome: "F5 Rodoviário",
    tipo: "Sistema",
    resumo: "Emissão de passagens e gerenciamento da rodoviária, com visual moderno e fácil de usar.",
    tecnologias: ["Delphi", "Windows"],
    fotos: [],
  },
  {
    id: "senha",
    nome: "Senha de Atendimento",
    tipo: "Sistema",
    resumo: "Gera senhas comuns e prioritárias e chama na tela de atendimento, com segunda chamada.",
    tecnologias: ["Delphi", "Windows"],
    fotos: [],
  },
];

export const formacao = [
  {
    curso: "Análise e Desenvolvimento de Sistemas",
    nivel: "Graduação",
    instituicao: "UniFael",
    situacao: "Formando",
  },
  {
    curso: "Técnico em Informática",
    nivel: "Curso técnico",
    instituicao: "IFPA, Campus Avançado Vigia",
    situacao: "Concluído",
  },
  {
    curso: "Técnico em Meio Ambiente",
    nivel: "Curso técnico",
    instituicao: "EETEPA, Vigia",
    situacao: "Concluído",
  },
];

export const referencias = [
  { empresa: "Juca Depósito de Água", servico: "Site da empresa" },
  { empresa: "Nathércia Jansen Advocacia", servico: "Sistema de gestão do escritório" },
  { empresa: "Cooperativa de Transporte Complementar de Vigia de Nazaré", servico: "Rotex, sistema de passagens" },
  { empresa: "RB Azulão", servico: "Sistema de vendas e entregas" },
  { empresa: "Centro de Monitoramento de Vigia", servico: "Sistema de monitoramento e ocorrências" },
  { empresa: "Empresa do abacaxi (nome a confirmar)", servico: "Sistema" },
];
