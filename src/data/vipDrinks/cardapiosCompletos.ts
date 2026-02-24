import { VipDrink } from "./types";

export const cardapiosCompletos: VipDrink[] = [
  {
    id: "cc-dia-muertos",
    name: "Fiesta de Día de Muertos",
    category: "Menus Mexicanos",
    image: "cc-dia-muertos",
    ingredients: [
      "ENTRADA: Tamales de Olla (ou Corundas)",
      "PRATO PRINCIPAL: Mole Negro com Peru (Guajolote)",
      "BEBIDA: Atole de Cempasúchil ou Champurrado",
      "SOBREMESA: Pan de Muerto com Chocolate Quente",
      "OFERENDA: Calaveritas de açúcar, frutas, abóbora em tacha"
    ],
    steps: [
      "Este menu é tanto para os vivos quanto para o altar (ofrenda).",
      "Prepare o Mole Negro com dias de antecedência (sabor apura).",
      "O Pan de Muerto deve ser assado no dia 1º de novembro.",
      "Sirva o chocolate quente batido com molinillo para espumar.",
      "Decore a mesa com flores de cempasúchil (tagetes) e velas.",
      "É um momento de celebrar a memória com os sabores favoritos dos antepassados."
    ],
    difficulty: "Avançado",
    time: "2 dias",
    description: "Um menu sagrado. O Día de Muertos (1 e 2 de nov) é a tradição mais profunda do México. A comida é a ponte entre os mundos. O aroma do mole e do copal guia as almas até a festa."
  },
  {
    id: "cc-taquiza",
    name: "La Gran Taquiza (Festa de Tacos)",
    category: "Menus Mexicanos",
    image: "cc-taquiza",
    ingredients: [
      "GUISADOS (Cazuelas): Chicharrón em salsa verde, Tinga de Pollo, Papas com Chorizo, Rajas com Crema",
      "CARNES: Carnitas, Pastor, Carne Asada",
      "ACOMPANHAMENTOS: Arroz Rojo, Frijoles Refritos",
      "SALSAS: Verde (tomatillo), Roja (árbol), Pico de Gallo, Guacamole",
      "TORTILLAS: 1kg por pessoa (cálculo de festa), mantidas quentes"
    ],
    steps: [
      "Taquiza é o buffet de tacos self-service.",
      "Disponha os guisados em caçarolas de barro (cazuelas) sobre réchauds.",
      "As tortillas devem estar em tortilleros térmicos ou cestos com pano.",
      "Cada convidado monta seu taco: base de feijão, guisado, salsa, limão.",
      "Bebidas: vitroleros com Águas Frescas (Jamaica, Horchata, Tamarindo).",
      "Ambiente informal, música e muita comida."
    ],
    difficulty: "Médio",
    time: "4h",
    description: "A forma clássica de receber no México. 'Hacer una taquiza' significa fartura e variedade. O segredo está nas salsas e nas tortillas quentes de boa qualidade."
  },
  {
    id: "cc-desayuno",
    name: "Desayuno Mexicano Completo",
    category: "Menus Mexicanos",
    image: "dish-chilaquiles",
    ingredients: [
      "PRATO FORTE: Chilaquiles Verdes ou Rojos (com ovo ou frango)",
      "OVOS: Huevos Divorciados ou Rancheros",
      "PAN DULCE: Conchas, Orejas, Rebanadas",
      "BEBIDAS: Café de Olla, Suco de Laranja fresco, Licuado (vitamina)",
      "FRUTA: Prato de frutas tropicais com limão e tajín"
    ],
    steps: [
      "O café da manhã é a refeição mais importante no México.",
      "Comece com fruta picada (mamão, melão, melancia) polvilhada com tajín.",
      "Sirva o café de olla (adoçado com piloncillo e canela).",
      "Ofereça uma cesta de Pan Dulce sortido.",
      "O prato principal (Chilaquiles) deve ser servido quente e crocante/macio.",
      "Finalize com um bom papo na mesa ('sobremesa')."
    ],
    difficulty: "Médio",
    time: "1h30",
    description: "Nada supera um café da manhã mexicano de domingo. A combinação de doce (pan dulce), picante (chilaquiles), fruta fresca e café de olla acorda a alma."
  },
  {
    id: "cc-parrillada",
    name: "Parrillada Norteña (Carne Asada)",
    category: "Menus Mexicanos",
    image: "dish-tacos-carne-asada",
    ingredients: [
      "CARNES: Arrachera (fraldinha), Costilla cargada, Chorizo",
      "ENTRADAS: Queso Fundido com Chorizo, Guacamole, Cebollitas cambray",
      "TORTILLAS: De farinha (trigo) estilo Sonora e de milho",
      "SALSA: Molcajeteada (feita na hora com vegetais assados na grelha)",
      "BEBIDAS: Cerveja gelada (Claras e Escuras), Sotol ou Tequila"
    ],
    steps: [
      "Acenda o carvão (mesquite é o melhor).",
      "Asse os vegetais da salsa (tomate, chiles) direto na brasa enquanto aquece.",
      "Prepare a salsa no molcajete ali mesmo.",
      "Grelhe as cebolinhas e o chorizo.",
      "Grelhe a carne (Arrachera marinada).",
      "Aqueça as tortillas de farinha na grelha.",
      "Faça 'Quesadillas' na grelha (Vampiros).",
      "Coma em pé ao redor da churrasqueira."
    ],
    difficulty: "Fácil",
    time: "3h",
    description: "No norte do México (Sonora, Nuevo León), a 'Carne Asada' é religião. O ritual de assar, beber cerveja e montar tacos de farinha com carne de qualidade é o evento social por excelência."
  },
  {
    id: "cc-antojitos",
    name: "Noche de Antojitos (Comida de Rua)",
    category: "Menus Mexicanos",
    image: "dish-elotes",
    ingredients: [
      "MILHO: Esquites (milho no copo) ou Elotes (milho na espiga)",
      "MASA: Sopes, Tlacoyos, Gorditas",
      "TOSTADAS: Tostadas de Tinga ou Pata",
      "POZOLE: Um caldinho para finalizar",
      "SOBREMESA: Churros ou Marquesitas"
    ],
    steps: [
      "Recrie uma feira de rua em casa.",
      "Prepare a massa de milho e faça sopes e gorditas na hora.",
      "Tenha os recheios prontos: feijão, requesón, chicharrón.",
      "Monte uma estação de esquites: milho cozido, maionese, queijo, chile, limão.",
      "Sirva tudo em porções pequenas para provar de tudo.",
      "Ambiente festivo e descontraído."
    ],
    difficulty: "Médio",
    time: "2h",
    description: "'Antojito' significa 'pequeno desejo'. São os snacks de rua do México. Uma noite dedicada a essas delícias permite viajar pelos sabores dos mercados de Coyoacán ou Oaxaca sem sair de casa."
  }
];
