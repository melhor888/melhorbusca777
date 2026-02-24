import { VipDrink } from "./types";

export const chaInfusoes: VipDrink[] = [
  {
    id: "ci-cafe-olla",
    name: "Café de Olla Tradicional",
    category: "Infusões Mexicanas",
    image: "ci-cafe-olla",
    ingredients: [
      "1L de água",
      "4 colheres de café moído grosso (preferência mexicano)",
      "1 cone de Piloncillo (rapadura)",
      "1 pau de canela (canela verdadeira)",
      "Casca de laranja (opcional)",
      "Cravo (opcional)",
      "Olla de barro (panela de barro)"
    ],
    steps: [
      "Aqueça a água na olla de barro com a canela e o piloncillo.",
      "Deixe ferver até o piloncillo dissolver completamente.",
      "Adicione o café e desligue o fogo imediatamente.",
      "Cubra e deixe em infusão por 5-10 minutos.",
      "Coe ao servir.",
      "O barro dá um sabor mineral essencial ao café."
    ],
    difficulty: "Fácil",
    time: "15 min",
    description: "O café da Revolução. Servido aos soldados (Adelitas) em panelas de barro para dar energia. A mistura de especiarias, piloncillo e o sabor da terra do barro cria uma bebida reconfortante e única."
  },
  {
    id: "ci-atole",
    name: "Atole de Vainilla (Masa)",
    category: "Infusões Mexicanas",
    image: "dish-atole",
    ingredients: [
      "100g de masa de milho (ou farinha de milho)",
      "1L de leite (ou água)",
      "1 pau de canela",
      "Piloncillo ou açúcar a gosto",
      "1 fava de baunilha (Vainilla de Papantla)"
    ],
    steps: [
      "Dissolva a masa em um pouco de água fria.",
      "Aqueça o leite com canela e baunilha.",
      "Adicione a masa dissolvida, mexendo sempre para não empelotar.",
      "Cozinhe em fogo médio até engrossar (cerca de 20 min).",
      "Deve ter consistência aveludada, potável mas espessa.",
      "Sirva quente, tradicionalmente acompanhando tamales."
    ],
    difficulty: "Médio",
    time: "30 min",
    description: "Bebida pré-hispânica à base de milho. 'Atolli' significa aguado em náhuatl, mas é cremoso e sustenta. O milho nixtamalizado nutre e aquece. Variações incluem frutas, chocolate (champurrado) ou nozes."
  },
  {
    id: "ci-champurrado",
    name: "Champurrado (Atole de Chocolate)",
    category: "Infusões Mexicanas",
    image: "dish-champurrado",
    ingredients: [
      "Masa de milho dissolvida",
      "Água e/ou Leite",
      "1 tablete de Chocolate Mexicano (com açúcar e canela)",
      "Piloncillo",
      "Canela"
    ],
    steps: [
      "A mesma base do atole, mas adicionando o chocolate mexicano.",
      "O chocolate é batido com molinillo para espumar.",
      "A masa engrossa o chocolate criando uma bebida densa.",
      "Café da manhã clássico nas ruas da Cidade do México (com tamal = Guajolota)."
    ],
    difficulty: "Médio",
    time: "30 min",
    description: "O encontro do cacau com o milho. Bebida sagrada dos Astecas e Maias, consumida em rituais e hoje em dia no café da manhã popular. Rico, espesso e energético."
  },
  {
    id: "ci-jamaica",
    name: "Agua de Jamaica (Hibisco)",
    category: "Infusões Mexicanas",
    image: "dish-agua-jamaica",
    ingredients: [
      "2 xícaras de flores de hibisco secas (Flor de Jamaica)",
      "2L de água",
      "Açúcar a gosto",
      "Gelo",
      "Opcional: gengibre ou canela"
    ],
    steps: [
      "Ferva as flores em 1L de água por 10-15 minutos (concentrado).",
      "Coe o líquido vermelho escuro.",
      "Adicione o restante da água e açúcar a gosto (é bem ácido).",
      "Sirva muito gelado.",
      "Dica: as flores fervidas podem ser refogadas para tacos vegetarianos!"
    ],
    difficulty: "Fácil",
    time: "20 min",
    description: "Uma das 'Aguas Frescas' clássicas. Diurética e refrescante, acompanha perfeitamente a comida mexicana picante e gordurosa. A acidez limpa o paladar."
  },
  {
    id: "ci-horchata",
    name: "Horchata de Arroz Artesanal",
    category: "Infusões Mexicanas",
    image: "dish-agua-horchata",
    ingredients: [
      "1 xícara de arroz branco cru",
      "Canela em pau",
      "Água",
      "Leite (opcional para cremosidade)",
      "Leite condensado (estilo moderno)",
      "Baunilha",
      "Amêndoas (opcional)"
    ],
    steps: [
      "Deixe o arroz e a canela de molho em água quente por 2 horas (ou noite toda).",
      "Bata tudo no liquidificador até virar uma pasta fina.",
      "Coe em peneira fina ou pano (muito importante).",
      "Adicione açúcar/leite condensado, baunilha e mais água/leite a gosto.",
      "Sirva com MUITO gelo e canela em pó por cima."
    ],
    difficulty: "Médio",
    time: "2h (molho) + 15 min",
    description: "Doce, leitosa e com sabor intenso de canela. Diferente da horchata espanhola (de chufa), a mexicana é de arroz. Essencial para apagar o fogo de um taco picante."
  },
  {
    id: "ci-tejate",
    name: "Tejate: A Bebida dos Deuses",
    category: "Infusões Mexicanas",
    image: "ci-tejate",
    ingredients: [
      "Milho nixtamalizado",
      "Cacau fermentado",
      "Almendra de mamey (pixtle)",
      "Flor de cacao (rosita de cacao)",
      "Água gelada",
      "Açúcar"
    ],
    steps: [
      "Ingredientes são tostados e moídos em metate até formar uma pasta oleosa.",
      "A pasta é misturada manualmente com água gelada em uma olla grande.",
      "O óleo da flor de cacau sobe e forma uma espuma branca espessa (a 'flor').",
      "Servido em jícaras pintadas.",
      "É difícil fazer em casa sem os ingredientes de Oaxaca, mas vale conhecer."
    ],
    difficulty: "Muito Avançado",
    time: "Horas",
    description: "Bebida ancestral zapoteca de San Andrés Huayapam, Oaxaca. Visualmente impressionante com sua espuma branca sobre o líquido marrom. Sabor complexo de cacau, milho e flores. Patrimônio cultural."
  },
  {
    id: "ci-tascalate",
    name: "Tascalate de Chiapas",
    category: "Infusões Mexicanas",
    image: "ci-tascalate", // Mapping generic
    ingredients: [
      "Milho tostado",
      "Cacau",
      "Achiote (Urucum) - dá a cor laranja",
      "Canela",
      "Açúcar ou Piloncillo",
      "Água ou Leite"
    ],
    steps: [
      "Toste o milho e o cacau.",
      "Moa com achiote e canela até virar pó fino laranja.",
      "Dissolva em água ou leite gelado.",
      "Bata para espumar.",
      "O achiote dá sabor terroso e cor vibrante."
    ],
    difficulty: "Médio",
    time: "30 min",
    description: "Bebida refrescante de Chiapas. A cor laranja tijolo vem do achiote. É energética e refrescante, bebido frio nos dias quentes da selva lacandona."
  },
  {
    id: "ci-tepache",
    name: "Tepache de Piña",
    category: "Infusões Mexicanas",
    image: "dish-tepache",
    ingredients: [
      "Cascas de 1 abacaxi maduro",
      "1 cone de Piloncillo",
      "1 pau de canela",
      "3 cravos",
      "2L de água",
      "Cerveja (opcional, para acelerar)"
    ],
    steps: [
      "Lave o abacaxi e use as cascas (com um pouco de polpa).",
      "Coloque em jarra de vidro/barro com água, piloncillo e especiarias.",
      "Cubra com pano (deixe respirar).",
      "Fermente por 2-3 dias em local morno.",
      "Coe e sirva com gelo.",
      "Se fermentar demais vira vinagre! Levemente alcoólico (1-2%)."
    ],
    difficulty: "Fácil",
    time: "3 dias",
    description: "Probiótico natural e refrescante. O aproveitamento total do abacaxi. Venda comum em bicicletas e barracas de rua, servido em saco plástico com canudo. Sabor fermentado, doce e especiarias."
  }
];
