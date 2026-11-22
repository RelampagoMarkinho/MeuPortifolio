// Número do WhatsApp do Marcos, só dígitos com 55 + DDD. Vazio = botões "em breve".
export const WHATSAPP = "5591992189157";

export const trabalhos = [
  {
    id: "encomendafacil",
    nome: "EncomendaFácil",
    tipo: "App + site",
    resumo:
      "Registro de encomendas em agências de transporte. Imprime a etiqueta na hora por impressora Bluetooth e faz o fechamento do dia com a cobrança automática.",
    tecnologias: ["Flutter", "Firebase", "PWA", "Impressão Bluetooth"],
    img: "",
  },
  {
    id: "vemtebora",
    nome: "Vemtebora",
    tipo: "Plataforma",
    resumo:
      "Plataforma de viagens de van no modelo Uber: app do passageiro com horário marcado, app do dono e do motorista, painel de aprovação e site.",
    tecnologias: ["Flutter", "Next.js", "Firebase"],
    img: "",
  },
  {
    id: "copan",
    nome: "Copan",
    tipo: "Sistema",
    resumo:
      "Sistema da colônia de pescadores, reescrito do zero a partir de um sistema antigo, com os dados migrados e acesso pela nuvem.",
    tecnologias: ["Flutter", "Firebase"],
    img: "",
  },
  {
    id: "juca",
    nome: "Juca Depósito de Água",
    cliente: "Juca Depósito de Água",
    tipo: "Site",
    resumo: "Site da empresa para apresentar os produtos e facilitar o pedido de água mineral.",
    tecnologias: ["HTML", "CSS", "Firebase Hosting"],
    img: "img/juca.webp",
  },
  {
    id: "natehcia",
    nome: "Sistema de Advocacia",
    cliente: "Natehcia Advocacia",
    tipo: "Sistema",
    resumo: "Sistema do escritório para cadastro e organização de clientes e processos.",
    tecnologias: ["Delphi", "Windows"],
    img: "",
  },
  {
    id: "cm-vigia",
    nome: "CM System Vigia",
    cliente: "Centro de Monitoramento de Vigia",
    tipo: "Sistema",
    resumo:
      "Controle do centro de monitoramento: boletins de ocorrência, relatórios, sistema de vídeo, postos de serviço e controle de usuários.",
    tecnologias: ["Delphi", "Windows"],
    img: "",
  },
  {
    id: "abacaxi",
    nome: "Sistema da empresa do abacaxi",
    cliente: "Empresa do abacaxi (nome a confirmar)",
    tipo: "Sistema",
    resumo: "Descrição a confirmar.",
    tecnologias: [],
    img: "",
  },
  {
    id: "ataav",
    nome: "ATAAV",
    tipo: "Sistema",
    resumo:
      "Sistema do terminal rodoviário de Vigia: encomendas, pagamentos e fechamento do dia, com relatórios impressos.",
    tecnologias: ["Delphi", "Windows"],
    img: "",
  },
  {
    id: "coopsalgado",
    nome: "CoopSalgado",
    tipo: "Sistema",
    resumo: "Controle da cooperativa de transporte: embarque, carros, passageiros isentos e fechamento do dia.",
    tecnologias: ["Delphi", "Windows"],
    img: "",
  },
  {
    id: "f5rodoviario",
    nome: "F5 Rodoviário",
    tipo: "Sistema",
    resumo: "Emissão de passagens e gerenciamento da rodoviária, com visual moderno e fácil de usar.",
    tecnologias: ["Delphi", "Windows"],
    img: "",
  },
  {
    id: "senha",
    nome: "Senha de Atendimento",
    tipo: "Sistema",
    resumo: "Gera senhas comuns e prioritárias e chama na tela de atendimento, com segunda chamada.",
    tecnologias: ["Delphi", "Windows"],
    img: "",
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
  { empresa: "Natehcia Advocacia", servico: "Sistema do escritório" },
  { empresa: "Centro de Monitoramento de Vigia", servico: "Sistema de monitoramento e ocorrências" },
  { empresa: "Empresa do abacaxi (nome a confirmar)", servico: "Sistema" },
];
