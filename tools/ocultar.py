"""Oculta valores e dados de clientes nas fotos de assets/imgs e salva em public/img.

Uso: python -I tools/ocultar.py   (rodar de dentro da pasta Portfolio)
As caixas são (esquerda, topo, direita, baixo) em pixels da foto original.
"""
from pathlib import Path
from PIL import Image, ImageFilter

RAIZ = Path(__file__).resolve().parent.parent
ORIGEM = RAIZ / "assets" / "imgs"
DESTINO = RAIZ / "public" / "img"
LARGURA = 1200

FOTOS = {
    # Nathércia: valores e dados dos clientes
    ("Nathercia Ad", "Dashboard.PNG", "nathercia/dashboard"): [
        (258, 180, 532, 244),    # aniversariante
        (252, 316, 510, 358),    # honorários recebidos
        (805, 522, 892, 550),    # etiqueta de valor no gráfico
        (252, 448, 292, 652),    # escala do gráfico (R$)
    ],
    ("Nathercia Ad", "Clientes.PNG", "nathercia/clientes"): [
        (300, 352, 575, 839),    # nomes
        (585, 352, 685, 839),    # CPF
    ],
    ("Nathercia Ad", "Financeiro.PNG", "nathercia/financeiro"): [
        (255, 110, 510, 152), (548, 110, 800, 152), (842, 110, 1095, 152), (1135, 110, 1395, 152),
        (268, 662, 432, 828),    # nomes
        (440, 662, 780, 828),    # descrição
        (900, 662, 1295, 828),   # valores e vencimentos
        (255, 235, 292, 440),    # escala do gráfico (R$)
        (1305, 305, 1372, 332),  # inadimplência
    ],
    ("Nathercia Ad", "Documentos.PNG", "nathercia/documentos"): [],
    ("Nathercia Ad", "Ediutar de Documento.PNG", "nathercia/editor"): [],
    # RB Azulão: faturamento, nomes, endereços e entregadores
    ("RB Azulao", "Dashboard.PNG", "azulao/dashboard"): [
        (458, 210, 625, 248), (720, 210, 885, 248), (983, 210, 1140, 248), (195, 356, 355, 392),
    ],
    ("RB Azulao", "PDV.PNG", "azulao/pdv"): [],
    ("RB Azulao", "En tregas.PNG", "azulao/entregas"): [
        (1192, 200, 1429, 525),  # lista de clientes e entregadores
    ],
    ("RB Azulao", "PDV_entregas.PNG", "azulao/pdv-entregas"): [
        (562, 192, 978, 598),
        (1010, 192, 1428, 835),
    ],
    ("RB Azulao", "Relatorio.PNG", "azulao/relatorio"): [
        (1245, 270, 1412, 822),  # totais em R$
    ],
    # Rotex: faturamento da cooperativa, nome de operador, endereços/telefones
    ("Rotex para Terminal", "login.PNG", "rotex/login"): [],
    ("Rotex para Terminal", "Dashboard.PNG", "rotex/dashboard"): [
        (453, 252, 610, 288), (783, 252, 905, 288), (1113, 252, 1245, 288),
        (453, 585, 565, 605), (773, 585, 865, 605), (1093, 585, 1175, 605),
        (453, 766, 565, 786), (773, 766, 865, 786), (1093, 766, 1175, 786),
    ],
    ("Rotex para Terminal", "DashOperador.PNG", "rotex/operador"): [
        (96, 68, 255, 104),      # nome do operador
        (445, 272, 565, 308), (775, 272, 880, 308), (1105, 272, 1215, 308),
    ],
    ("Rotex para Terminal", "Embarque.PNG", "rotex/passagens"): [],
    ("Rotex para Terminal", "Relatorio.PNG", "rotex/relatorio"): [
        (376, 168, 1422, 192),   # totais
        (1350, 448, 1418, 470), (200, 474, 318, 498),  # pagamento do sistema
        (1270, 535, 1425, 830),  # valores das viagens
    ],
    ("Rotex para Terminal", "Terminais.PNG", "rotex/terminais"): [
        (163, 214, 440, 248),    # endereço e telefone de cada terminal
        (163, 323, 440, 358),
        (163, 412, 450, 448),
    ],
    ("Rotex para Terminal", "Controle de Usuario.PNG", "rotex/permissoes"): [],
    # CIOV Vigia: nomes de servidores, locais de câmeras e de ocorrências
    ("Ciov", "Capturar.PNG", "ciov/dashboard"): [
        (1155, 232, 1300, 298),  # plantão atual
        (1072, 625, 1370, 812),  # falhas ativas (locais das câmeras)
    ],
    ("Ciov", "Capturar2.PNG", "ciov/protocolo"): [
        (568, 318, 945, 805),    # assuntos (nomes de pessoas)
        (948, 318, 1172, 805),   # emitido por
    ],
    ("Ciov", "Capturar3.PNG", "ciov/relatorios"): [
        (750, 598, 1392, 612), (690, 625, 1392, 692),   # local e relato 1
        (745, 740, 1392, 755), (690, 765, 1392, 812),   # local e relato 2
        (330, 805, 630, 838),    # locais de incidência
    ],
    # EncomendaFácil: aviso de bloqueio, nomes de remetente/destinatário e telefone
    ("EncomendaFacil", "Capturar.PNG", "encomendafacil/inicio"): [
        (385, 74, 1000, 112),
    ],
    ("EncomendaFacil", "Capturar2.PNG", "encomendafacil/encomendas"): [
        (448, 250, 565, 272), (448, 376, 565, 398), (448, 502, 565, 524), (448, 628, 565, 650), (448, 754, 565, 776),
        (970, 250, 1088, 272), (970, 376, 1088, 398), (970, 502, 1088, 524), (970, 628, 1088, 650),
    ],
    ("EncomendaFacil", "Capturar3.PNG", "encomendafacil/caixa"): [],
    ("EncomendaFacil", "Capturar4.PNG", "encomendafacil/precos"): [
        (915, 82, 1060, 104),    # telefone
    ],
}


def ocultar(img, caixa):
    regiao = img.crop(caixa)
    w, h = regiao.size
    pequeno = regiao.resize((max(1, w // 14), max(1, h // 14)), Image.BILINEAR)
    borrado = pequeno.resize((w, h), Image.BILINEAR).filter(ImageFilter.GaussianBlur(6))
    img.paste(borrado, caixa)


for (pasta, arquivo, saida), caixas in FOTOS.items():
    img = Image.open(ORIGEM / pasta / arquivo).convert("RGB")
    for c in caixas:
        ocultar(img, c)
    alt = round(img.height * LARGURA / img.width)
    img = img.resize((LARGURA, alt), Image.LANCZOS)
    destino = DESTINO / f"{saida}.webp"
    destino.parent.mkdir(parents=True, exist_ok=True)
    img.save(destino, "WEBP", quality=80)
    print(f"{destino.relative_to(RAIZ)}  {destino.stat().st_size // 1024} KB  ({len(caixas)} áreas ocultas)")
