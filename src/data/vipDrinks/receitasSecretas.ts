import { VipDrink } from "./types";

export const receitasSecretas: VipDrink[] = [
  {
    id: "mole-xico-veracruzano",
    name: "Mole de Xico — Segredo de Veracruz",
    category: "Receitas Secretas do Chef",
    image: "mole-xico",
    ingredients: [
      "8 chiles mulato", "4 chiles ancho", "3 chiles pasilla",
      "Chocolate de metate", "Plátano macho maduro", "Biscoito de animalito",
      "Amendoim torrado", "Gergelim", "Passas", "Canela em pau",
      "Cravo-da-índia", "Pimenta-da-jamaica", "Cebola queimada",
      "Alho queimado", "Tortilla queimada", "Caldo de peru"
    ],
    steps: [
      "Torre cada chile separadamente em comal seco — não queime.",
      "Hidrate os chiles em água quente por 25 minutos.",
      "Queime cebola e alho diretamente na chama até ficarem negros por fora.",
      "Torre amendoim e gergelim em frigideira seca separadamente.",
      "Frite o plátano maduro em banha até dourar.",
      "Bata chiles, especiarias, frutas, biscoito e tortilla queimada com caldo.",
      "Frite a pasta em banha quente por 20 minutos mexendo constantemente.",
      "Adicione chocolate de metate e cozinhe por 2h em fogo baixo.",
      "O mole de Xico deve ter textura aveludada e cor marrom-avermelhada.",
      "Sirva sobre peru ou frango com gergelim torrado por cima."
    ],
    difficulty: "Avançado",
    time: "4h",
    description: "O mole de Xico é o segredo mais bem guardado de Veracruz — diferente dos moles oaxaqueños, usa biscoito de animalito e plátano que dão doçura única. Esta receita vem de uma família de Xico com 5 gerações na tradição da Fiesta Patronal."
  },
  {
    id: "barbacoa-hoyo-ancestral",
    name: "Barbacoa de Hoyo — Método Ancestral",
    category: "Receitas Secretas do Chef",
    image: "barbacoa-hoyo",
    ingredients: [
      "5kg de borrego (paleta, costela e espaldilla)",
      "Pencas de maguey frescas", "Chile guajillo", "Chile morita",
      "Chile ancho", "Cominho", "Cravo", "Pimenta preta",
      "Orégano mexicano", "Alho", "Cebola", "Folha de abacate",
      "Arroz cru", "Grão de bico cozido", "Chipotle en adobo"
    ],
    steps: [
      "Cave um hoyo (buraco) de 1m de profundidade no chão.",
      "Acenda lenha de encino até formar brasas intensas no fundo.",
      "Prepare adobo: torre e hidrate chiles, bata com especiarias e alho.",
      "Marine o borrego no adobo por mínimo 8 horas (ideal: noite toda).",
      "Asse pencas de maguey na brasa até ficarem flexíveis.",
      "No fundo do hoyo sobre as brasas, coloque uma olla com arroz, grão de bico e caldo.",
      "Cubra a olla com uma grelha. Forre com pencas de maguey.",
      "Distribua a carne marinada sobre as pencas.",
      "Cubra com mais pencas, terra e lona. Sele hermeticamente.",
      "Cozinhe por 8-12 horas — de noite até a manhã seguinte.",
      "O consommé que se forma na olla é tão valorizado quanto a carne."
    ],
    difficulty: "Avançado",
    time: "12h (+ marinada)",
    description: "A verdadeira barbacoa de hoyo é cozida em buraco na terra sobre brasas de encino. Método pré-hispânico do Altiplano Central — em Hidalgo, Tlaxcala e Estado de México, é tradição dominical sagrada. O vapor do maguey dá sabor impossível de replicar."
  },
  {
    id: "tacos-suadero-cdmx",
    name: "Tacos de Suadero — Segredo de CDMX",
    category: "Receitas Secretas do Chef",
    image: "tacos-suadero",
    ingredients: [
      "2kg de suadero (gordura entre costela e pele do boi)",
      "Banha de porco", "Sal", "Tortillas de milho pequenas",
      "Cebola picada", "Cilantro fresco", "Salsa verde taquera",
      "Salsa roja de chile de árbol", "Limões"
    ],
    steps: [
      "Corte o suadero em pedaços grandes de 10cm.",
      "Em um cazo de cobre, coloque banha suficiente para cobrir.",
      "Cozinhe o suadero em banha em fogo médio por 2 horas.",
      "O segredo: a temperatura deve ser constante — nem muito alta nem baixa.",
      "Quando a carne estiver macia, aumente o fogo para crispar por fora.",
      "Retire e pique fino na tabla — deve ter partes crocantes e macias.",
      "Aqueça tortillas na mesma banha por segundos.",
      "Monte: tortilla dupla + suadero + cebola + cilantro.",
      "Sirva com salsa verde, salsa roja e limão."
    ],
    difficulty: "Médio",
    time: "2h30",
    description: "O suadero é o corte secreto das taquerías noturnas da Cidade do México. Cozido lentamente em banha de porco no cazo de cobre, a textura é meio crocante, meio derretida. Os melhores taqueros de suadero ficam na Colonia Doctores e Tacubaya."
  },
  {
    id: "tamales-chipilin-chiapas",
    name: "Tamales de Chipilín — Chiapas Ancestral",
    category: "Receitas Secretas do Chef",
    image: "tamales-chipilin",
    ingredients: [
      "1kg de masa de milho nixtamalizado", "500g de folhas de chipilín frescas",
      "300g de queijo Chiapaneco (ou queijo fresco)", "Banha de porco",
      "Caldo de pollo", "Sal", "Folhas de plátano frescas"
    ],
    steps: [
      "Lave e desfolhe o chipilín — use apenas folhas, sem talo.",
      "Bata a banha até ficar cremosa e esponjosa (10 minutos).",
      "Adicione a masa aos poucos, alternando com caldo de pollo.",
      "Teste flutuação: uma bolinha de masa deve flutuar em água.",
      "Incorpore as folhas de chipilín à masa — deve ficar verde-salpicada.",
      "Passe folhas de plátano na chama para amolecê-las.",
      "Espalhe masa na folha, adicione queijo desmoronado no centro.",
      "Dobre em envelope retangular e amarre com tira de folha.",
      "Cozinhe no vapor por 1h15 até a masa soltar da folha."
    ],
    difficulty: "Médio",
    time: "2h30",
    description: "O chipilín é uma erva aromática exclusiva de Chiapas e Guatemala — impossível de encontrar fora da região. Estes tamales são envoltos em folha de plátano (não de milho) e têm sabor herbáceo único. Receita de família zoque de Tuxtla Gutiérrez."
  },
  {
    id: "tikin-xic-yucateco",
    name: "Pescado Tikin Xic — Receita Maia",
    category: "Receitas Secretas do Chef",
    image: "tikin-xic",
    ingredients: [
      "1 mero ou robalo inteiro (2kg)", "200g de pasta de achiote",
      "8 naranjas agrias (ou 4 laranjas + 4 limões)",
      "Cebola roxa em rodelas", "Tomate em rodelas",
      "Chile habanero", "Epazote fresco",
      "Folhas de plátano", "Sal"
    ],
    steps: [
      "Abra o peixe em borboleta — sem separar as metades.",
      "Dissolva achiote no suco de naranja agria até pasta homogênea.",
      "Marine o peixe aberto na pasta de achiote por 2 horas.",
      "Forre a grelha com folhas de plátano passadas na chama.",
      "Coloque o peixe aberto sobre as folhas.",
      "Cubra com rodelas de cebola, tomate e habanero inteiro.",
      "Adicione ramos de epazote por cima.",
      "Cubra com mais folhas e asse sobre brasas por 40 minutos.",
      "O peixe deve ficar laranja-intenso e desmanchar ao toque."
    ],
    difficulty: "Médio",
    time: "1h30 (+ marinada)",
    description: "Tikin Xic significa 'coisa seca' em maia — peixe marinado em achiote e assado em folha de plátano sobre brasas. Em Isla Mujeres e Celestún, os pescadores preparam com mero recém-pescado. A naranja agria é insubstituível para o sabor autêntico."
  },
  {
    id: "gorditas-chicharron-prensado",
    name: "Gorditas de Chicharrón Prensado — CDMX",
    category: "Receitas Secretas do Chef",
    image: "gorditas-chicharron",
    ingredients: [
      "1kg de masa de milho fresca", "500g de chicharrón prensado",
      "Chile guajillo", "Chile de árbol", "Tomate verde",
      "Cebola", "Alho", "Banha de porco",
      "Lechuga", "Crema ácida", "Queso fresco", "Salsa verde cruda"
    ],
    steps: [
      "Prepare o chicharrón prensado: guise chicharrón com salsa de guajillo.",
      "Cozinhe até a salsa secar e o chicharrón ficar suave.",
      "Forme gorditas com a masa: discos de 10cm, 1cm de espessura.",
      "Cueza en comal seco por 3 minutos de cada lado.",
      "Abra pela lateral com cuidado — criar bolso interno.",
      "Frite levemente em banha quente por 1 minuto.",
      "Recheie com chicharrón prensado guisado.",
      "Cubra com lechuga, crema, queso desmoronado e salsa verde."
    ],
    difficulty: "Médio",
    time: "1h30",
    description: "As gorditas de chicharrón prensado são o antojito mais popular das manhãs na Cidade do México. O segredo está no guisado do chicharrón com salsa de guajillo que cria uma pasta irresistível. Nas esquinas de Coyoacán e Xochimilco, as gorditas são feitas por señoras que dominam a técnica há décadas."
  },
  {
    id: "mole-caderas-puebla",
    name: "Mole de Caderas — Festival de la Matanza",
    category: "Receitas Secretas do Chef",
    image: "mole-caderas",
    ingredients: [
      "2kg de espinazo y caderas de chivo (cabrito)",
      "Chile costeño rojo", "Chile costeño amarillo",
      "Ejotes (vagem)", "Chayote",
      "Cilantro cimarrón (papaloquelite)", "Miltomate",
      "Cebola", "Alho", "Sal de mar"
    ],
    steps: [
      "A carne de chivo deve ser seca al sol (cecina de chivo) por 3 dias.",
      "Hidrate a carne seca em água por 12 horas.",
      "Torre chiles costeños no comal sem queimar.",
      "Hidrate chiles e bata com miltomates asados y alho.",
      "Cozinhe a carne em água com sal até tender (2 horas).",
      "Adicione a pasta de chiles ao caldo.",
      "Agregue ejotes y chayote nos últimos 20 minutos.",
      "Finalize com cilantro cimarrón (sabor inconfundível).",
      "Sirva com tortillas de maíz y limão."
    ],
    difficulty: "Avançado",
    time: "3h (+ preparação 3 dias)",
    description: "O Mole de Caderas é servido APENAS em outubro-novembro durante a Festival de la Matanza na Mixteca Poblana. Os chivos pastam livres na sierra e são sacrificados em ritual comunitário. O chile costeño e cilantro cimarrón são exclusivos da região — impossíveis de encontrar fora de Tehuacán e Huajuapan."
  },
  {
    id: "tortas-ahogadas-guadalajara",
    name: "Tortas Ahogadas — Segredo de Guadalajara",
    category: "Receitas Secretas do Chef",
    image: "tortas-ahogadas",
    ingredients: [
      "Birotes salados (pão crocante de Guadalajara)",
      "1kg de carnitas de cerdo", "Chile de árbol seco",
      "Chile puya", "Tomate", "Vinagre",
      "Cebola curtida em limão", "Limões", "Sal",
      "Frijoles refritos (opcional)"
    ],
    steps: [
      "Prepare la salsa ahogada: torre 20 chiles de árbol y puya sin quemar.",
      "Bata chiles con tomate asado, vinagre y sal — la salsa debe ser MUY picante.",
      "Cuele para textura suave y reserve caliente.",
      "Prepare carnitas: confite porco em banha por 3 horas.",
      "Corte o birote ao meio — use APENAS birote, não telera nem bolillo.",
      "Recheie com carnitas desfiadas generosamente.",
      "Para ahogada completa: mergulhe TODA a torta na salsa quente.",
      "Para media ahogada: salsa só por cima.",
      "Sirva com cebola curtida e limão. Coma com as mãos — vai sujar."
    ],
    difficulty: "Médio",
    time: "3h30",
    description: "A torta ahogada é o ícone de Guadalajara — birote crocante recheado de carnitas e AFOGADO em salsa de chile de árbol extremamente picante. O birote é um pão exclusivo de Jalisco que não amolece na salsa. Na Colonia Santa Tere e no Mercado San Juan de Dios, as melhores tortas são as mais simples."
  },
  {
    id: "pozole-verde-guerrero",
    name: "Pozole Verde Guerrerense — Receita Secreta",
    category: "Receitas Secretas do Chef",
    image: "pozole-verde",
    ingredients: [
      "1kg de milho pozolero (cacahuazintle)",
      "1kg de espinazo de cerdo", "500g de cabeza de cerdo",
      "Pepita de calabaza (semente de abóbora)",
      "Tomate verde (miltomate)", "Chile serrano",
      "Lechuga fatiada", "Rábano", "Cebola",
      "Orégano", "Chicharrón", "Tostadas", "Limão"
    ],
    steps: [
      "Cozinhe milho pozolero por 3-4 horas até 'florescer' (abrir).",
      "Em panela separada, cozinhe carnes em água com cebola e alho.",
      "Torre pepitas em comal até dourar — cuidado para não queimar.",
      "Bata pepitas com tomate verde cru, chile serrano e cilantro.",
      "Quando as carnes estiverem macias, desfie e devolva ao caldo.",
      "Adicione milho florido e a pasta verde de pepitas ao caldo.",
      "Cozinhe por 30 min — o caldo deve ficar verde-espesso.",
      "Sirva com lechuga, rábano, cebola, orégano, chicharrón e limão.",
      "Em Guerrero, o pozole verde é servido nas festas com mezcal."
    ],
    difficulty: "Avançado",
    time: "5h",
    description: "O Pozole Verde de Guerrero é radicalmente diferente do rojo — usa pepitas de calabaza e tomate verde que criam um caldo verde-esmeralda. Em Chilpancingo e Acapulco, é prato de quinta-feira e sábado. A pepita dá corpo e sabor impossível de substituir."
  },
  {
    id: "cemita-poblana-original",
    name: "Cemita Poblana — A Original de Puebla",
    category: "Receitas Secretas do Chef",
    image: "cemita-poblana",
    ingredients: [
      "Pan de cemita (com ajonjolí)", "Milanesa de res empanizada",
      "Aguacate maduro", "Quesillo de Oaxaca",
      "Chipotle en adobo", "Pápalo (erva fresca)",
      "Cebolla", "Frijoles refritos"
    ],
    steps: [
      "Prepare a milanesa: bata o filé fino, empane e frite até dourada.",
      "O pan de cemita deve ser do dia — coberto de gergelim.",
      "Corte o pan ao meio. Unte a base com frijoles refritos.",
      "Coloque a milanesa crocante na base.",
      "Adicione fatias generosas de aguacate.",
      "Estire quesillo sobre a milanesa quente (deve derreter).",
      "Adicione chipotle en adobo e cebola crua fatiada.",
      "O toque final: folhas frescas de pápalo — INSUBSTITUÍVEL.",
      "Feche e pressione levemente — a cemita é monumental."
    ],
    difficulty: "Fácil",
    time: "40 min",
    description: "A cemita poblana é o sanduíche mais monumental do México — o pápalo (erva fresca com sabor único) é o ingrediente que a diferencia de qualquer outro sanduíche. Em Puebla, na Calle 11 Sur, as cemiterías servem cemitas desde 1950 que são mais altas que largas."
  },
  {
    id: "caldo-michi-jalisco",
    name: "Caldo Michi — Segredo do Lago de Chapala",
    category: "Receitas Secretas do Chef",
    image: "caldo-michi",
    ingredients: [
      "1kg de bagre (catfish) ou carpa fresca",
      "4 chiles cascabel", "2 chiles de árbol",
      "Tomate", "Cebola", "Alho",
      "Xoconostle (tuna ácida de nopal)",
      "Cilantro", "Limão", "Tortillas"
    ],
    steps: [
      "Corte o peixe em pedaços grandes com espinha.",
      "Torre chiles cascabel em comal até inflarem.",
      "Ase tomate, cebola y alho en comal.",
      "Bata chiles con tomate, cebola e alho.",
      "Cozinhe a pasta em óleo por 10 min.",
      "Adicione água ou caldo de peixe. Ferva.",
      "Adicione xoconostle cortado ao meio.",
      "Quando o caldo ferver, adicione o peixe.",
      "Cozinhe por 15-20 min — o peixe deve ficar inteiro mas macio.",
      "Sirva com cilantro, limão e tortillas quentes."
    ],
    difficulty: "Médio",
    time: "1h",
    description: "O Caldo Michi é a sopa de peixe do Lago de Chapala, Jalisco — 'michi' significa peixe em náhuatl. Tradicionalmente feito com bagre ou carpa do próprio lago, o xoconostle dá acidez que equilibra o caldo. É o prato dominical dos pescadores da ribeira."
  },
  {
    id: "carnitas-cazo-cobre",
    name: "Carnitas en Cazo de Cobre — Uruapan",
    category: "Receitas Secretas do Chef",
    image: "carnitas-cazo",
    ingredients: [
      "5kg de porco (maciza, buche, cuerito, costilla)",
      "3kg de banha de porco", "Leite evaporado (1 lata)",
      "Coca-Cola (500ml)", "Laranja inteira cortada ao meio",
      "Canela em pau", "Folha de louro", "Sal grosso",
      "Alho inteiro"
    ],
    steps: [
      "Em cazo de cobre grande, derreta a banha em fogo alto.",
      "Quando a banha fumar, adicione os pedaços de porco.",
      "O segredo de Uruapan: adicione leite evaporado e Coca-Cola.",
      "A laranja cortada vai inteira — suco e casca perfumam a banha.",
      "Adicione canela, louro e alho. Mexa com pá de madeira.",
      "Cozinhe em fogo alto por 1h30 sem tampa.",
      "Reduza o fogo para médio por mais 1h30.",
      "O porco deve ter partes douradas (maciza), partes crocantes (cuerito).",
      "Desfie na própria banha com garfo — o som de chiado é essencial.",
      "Sirva com tortillas, guacamole, cebola, cilantro e salsa verde."
    ],
    difficulty: "Avançado",
    time: "3h30",
    description: "As carnitas de Uruapan, Michoacán são as melhores do México — confitadas em cazo de cobre que distribui calor uniformemente. O segredo do leite evaporado e Coca-Cola foi revelado por um carnitero de 3ª geração. O cobre é essencial — alumínio não dá o mesmo resultado."
  },
  {
    id: "chiles-anchos-rellenos-crema",
    name: "Chiles Anchos Rellenos en Crema",
    category: "Receitas Secretas do Chef",
    image: "chiles-anchos-rellenos",
    ingredients: [
      "8 chiles ancho secos grandes", "500g de picadillo de res",
      "200g de queso Chihuahua rallado", "Crema ácida (500ml)",
      "Leite (200ml)", "Caldo de pollo", "Pasas", "Almendras",
      "Canela", "Tomate", "Cebola", "Elote desgranado"
    ],
    steps: [
      "Hidrate chiles anchos em água quente por 15 min — não exceda.",
      "Retire sementes e venas com cuidado para não rasgar.",
      "Prepare picadillo: refogue carne com tomate, cebolla, pasas e almendras.",
      "Adicione elote desgranado y canela. Cozinhe 20 min.",
      "Recheie cada chile com picadillo generosamente.",
      "Coloque em refratário. Cubra com crema misturada com leite.",
      "Espalhe queso Chihuahua ralado por cima.",
      "Gratine a 180°C por 20 min até borbulhar.",
      "O chile ancho deve ficar macio e a crema dourada."
    ],
    difficulty: "Médio",
    time: "1h30",
    description: "Os chiles anchos rellenos en crema são um prato de festa do norte do México — diferentes dos chiles rellenos tradicionais que usam poblano fresco. O ancho seco tem doçura natural que combina perfeitamente com a crema gratinada. Receita de uma abuela de Durango."
  },
  {
    id: "sopa-pan-san-cristobal",
    name: "Sopa de Pan — San Cristóbal de las Casas",
    category: "Receitas Secretas do Chef",
    image: "sopa-pan",
    ingredients: [
      "Pan de yema cortado em cubos", "Plátano macho frito",
      "Ejotes (vagem)", "Chayote", "Pasas",
      "Canela", "Tomilho", "Caldo de pollo",
      "Tomate", "Cebola", "Huevo cocido",
      "Azafrán mexicano"
    ],
    steps: [
      "Frite cubos de pan de yema em manteiga até dourar.",
      "Corte plátano macho em rodelas e frite até caramelizar.",
      "Prepare caldo: refogue tomate e cebola, adicione caldo de pollo.",
      "Adicione canela, tomilho e azafrán ao caldo. Ferva.",
      "Em refratário, faça camadas: pan frito, plátano, ejotes, chayote.",
      "Despeje o caldo quente sobre as camadas.",
      "Decore com pasas e rodelas de huevo cocido.",
      "Asse a 180°C por 30 min até gratinar por cima.",
      "Sirva quente — a sopa de pan é comfort food chiapaneco."
    ],
    difficulty: "Médio",
    time: "1h30",
    description: "A Sopa de Pan é o prato mais emblemático de San Cristóbal de las Casas — uma sopa-gratinado que mistura pão, frutas e especiarias em camadas. Servida na Semana Santa e festas patronais, combina influência espanhola com ingredientes chiapanecos. Cada família de San Cristóbal tem sua versão secreta."
  },
];
