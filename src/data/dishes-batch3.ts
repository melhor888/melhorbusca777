import { Dish } from "./dishes";

export const dishesBatch3: Dish[] = [
  // ============ CAFÉ DA MANHÃ (5) ============
  { id: "migas", name: "Migas", category: "Café da Manhã", image: "migas",
    ingredients: ["Tortillas en tiras fritas", "Ovos", "Salsa verde ou roja", "Feijão refrito", "Queijo fresco", "Creme ácido"],
    steps: ["Frite tiras de tortilla até crocantes.", "Bata os ovos e adicione às tortillas.", "Misture com salsa.", "Cozinhe mexendo suavemente.", "Sirva com feijão e queijo.", "Acompanhe com tortillas quentes."],
    difficulty: "Fácil", time: "15 min",
    description: "Ovos mexidos com tiras de tortilla e salsa — café da manhã rápido e reconfortante." },

  { id: "enfrijoladas", name: "Enfrijoladas", category: "Café da Manhã", image: "enfrijoladas",
    ingredients: ["Tortillas de milho", "Feijão negro batido", "Frango desfiado", "Creme ácido", "Queijo fresco", "Cebola roxa", "Epazote"],
    steps: ["Bata feijão cozido com epazote e caldo.", "Passe as tortillas no molho de feijão.", "Recheie com frango.", "Dobre e disponha no prato.", "Cubra com mais molho de feijão.", "Decore com creme, queijo e cebola."],
    difficulty: "Fácil", time: "25 min",
    description: "Tortillas banhadas em molho de feijão negro — alternativa às enchiladas, sabor mais terroso e profundo." },

  { id: "machaca", name: "Machaca con Huevo", category: "Café da Manhã", image: "machaca",
    ingredients: ["200g de carne seca desfiada", "4 ovos", "Tomate", "Cebola", "Chile serrano", "Tortillas de farinha"],
    steps: ["Refogue cebola e tomate.", "Adicione chile serrano.", "Junte a carne seca desfiada.", "Bata os ovos e adicione.", "Mexa até cozinhar.", "Sirva com tortillas de farinha."],
    difficulty: "Fácil", time: "15 min",
    description: "Carne seca com ovos — café da manhã do norte do México, especialmente Sonora e Chihuahua." },

  { id: "entomatadas", name: "Entomatadas", category: "Café da Manhã", image: "entomatadas",
    ingredients: ["Tortillas de milho", "6 tomates", "Cebola e alho", "Frango desfiado", "Queijo fresco", "Creme ácido", "Orégano"],
    steps: ["Asse e bata tomates com cebola e alho.", "Frite o molho em óleo.", "Passe tortillas no molho.", "Recheie com frango e dobre.", "Cubra com molho, queijo e creme.", "Polvilhe orégano."],
    difficulty: "Fácil", time: "30 min",
    description: "Tortillas em molho de tomate — mais suave que enchiladas, perfeitas para café da manhã." },

  { id: "pan-dulce", name: "Pan Dulce (Conchas)", category: "Café da Manhã", image: "pan-dulce",
    ingredients: ["Farinha de trigo", "Açúcar", "Ovos", "Manteiga", "Fermento", "Baunilha", "Cobertura: farinha, açúcar, manteiga, cacau"],
    steps: ["Prepare massa doce com farinha, ovos e manteiga.", "Sove e descanse por 2h.", "Prepare a cobertura com farinha, açúcar e manteiga.", "Molde bolinhas e cubra com disco de cobertura.", "Faça marcações de concha com cortador.", "Asse a 180°C por 18 min."],
    difficulty: "Médio", time: "3h",
    description: "As conchas são o pan dulce mais icônico do México — cobertura crocante sobre pão macio e fofinho." },

  // ============ TAMALES & MASSAS (5) ============
  { id: "tamales-oaxaquenos", name: "Tamales Oaxaqueños", category: "Tamales & Massas", image: "tamales-oaxaquenos",
    ingredients: ["Masa de milho", "Banha batida", "Mole negro", "Frango desfiado", "Folhas de bananeira", "Caldo de frango"],
    steps: ["Bata banha até fofa, misture com masa.", "Prepare ou use mole negro pronto.", "Misture frango com mole.", "Espalhe masa em folhas de bananeira.", "Coloque recheio de mole com frango.", "Dobre e cozinhe no vapor por 1h."],
    difficulty: "Avançado", time: "2h",
    description: "Tamales em folha de bananeira com mole negro — a versão mais sofisticada e aromática de Oaxaca." },

  { id: "tamales-rajas", name: "Tamales de Rajas con Queso", category: "Tamales & Massas", image: "tamales-rajas",
    ingredients: ["Masa de milho", "Banha batida", "Chiles poblanos em tiras (rajas)", "Queijo Oaxaca", "Creme ácido", "Folhas de milho"],
    steps: ["Asse e descasque poblanos, corte em tiras.", "Bata banha e misture com masa.", "Espalhe masa na folha de milho.", "Coloque rajas, queijo e creme.", "Dobre e feche.", "Cozinhe no vapor por 1h."],
    difficulty: "Médio", time: "1h 30min",
    description: "Tamales vegetarianos com chile poblano e queijo derretido — um dos recheios mais populares." },

  { id: "chiles-nogada", name: "Chiles en Nogada", category: "Tamales & Massas", image: "chiles-nogada",
    ingredients: ["Chiles poblanos", "Picadillo de carne com frutas", "Nozes", "Queijo de cabra", "Creme", "Leite", "Romã", "Salsa"],
    steps: ["Asse e descasque os poblanos.", "Prepare picadillo com carne, frutas e especiarias.", "Recheie os chiles.", "Bata nozes com queijo, creme e leite para a nogada.", "Banhe os chiles com a nogada branca.", "Decore com romã e salsa — verde, branco e vermelho."],
    difficulty: "Avançado", time: "2h",
    description: "Prato patriótico: chile recheado com molho de nozes e romã — as cores da bandeira mexicana. Servido em setembro." },

  { id: "torta-ahogada", name: "Torta Ahogada", category: "Tamales & Massas", image: "torta-ahogada",
    ingredients: ["Birotes (pão duro de Guadalajara)", "Carnitas de porco", "Salsa de chile de árbol", "Salsa de tomate", "Cebola", "Limão"],
    steps: ["Abra o birote e recheie com carnitas.", "Prepare salsa picante de chile de árbol.", "Prepare salsa de tomate suave.", "Mergulhe o sanduíche na salsa (ahogada = afogada).", "Cubra com cebola picada.", "Sirva com limão."],
    difficulty: "Fácil", time: "20 min",
    description: "Sanduíche 'afogado' em salsa picante — ícone de Guadalajara. O birote duro resiste sem desmanchar." },

  { id: "cemita-poblana", name: "Cemita Poblana", category: "Tamales & Massas", image: "cemita-poblana",
    ingredients: ["Pão cemita (com gergelim)", "Milanesa empanada", "Queijo Oaxaca", "Abacate", "Pápalo (erva)", "Chipotle", "Feijão"],
    steps: ["Prepare milanesa empanada e frite.", "Corte o pão cemita ao meio.", "Espalhe feijão e chipotle.", "Coloque milanesa, queijo e abacate.", "Adicione pápalo fresco.", "Feche e sirva."],
    difficulty: "Fácil", time: "25 min",
    description: "Sanduíche monumental de Puebla — milanesa, queijo, abacate e a erva pápalo que define o sabor." },

  // ============ MOLHOS & SALSAS (3) ============
  { id: "salsa-macha", name: "Salsa Macha", category: "Molhos & Salsas", image: "salsa-macha",
    ingredients: ["Chiles de árbol secos", "Chiles morita", "Alho", "Azeite ou óleo", "Amendoim", "Gergelim", "Vinagre", "Sal"],
    steps: ["Frite os chiles secos em óleo até escurecer.", "Frite alho, amendoim e gergelim.", "Bata tudo grosseiramente (não deve ficar liso).", "Adicione vinagre e sal.", "Conserve em frasco com óleo.", "Melhora com o tempo — dura meses."],
    difficulty: "Fácil", time: "15 min",
    description: "Salsa de óleo com chiles fritos, amendoim e gergelim — de Veracruz. Viciante em tudo." },

  { id: "adobo-mexicano", name: "Adobo Mexicano", category: "Molhos & Salsas", image: "adobo-mexicano",
    ingredients: ["Chiles ancho e guajillo", "Tomate", "Alho", "Cebola", "Vinagre", "Orégano", "Cominho", "Cravo"],
    steps: ["Hidrate os chiles em água quente.", "Asse tomate, alho e cebola.", "Bata tudo com vinagre e especiarias.", "Coe para textura lisa.", "Use para marinar carnes.", "Pode ser armazenado por semanas."],
    difficulty: "Fácil", time: "20 min",
    description: "Pasta de chile para marinar carnes — a base de muitos pratos mexicanos." },

  { id: "habanero-salsa", name: "Salsa de Habanero Yucateca", category: "Molhos & Salsas", image: "habanero-salsa",
    ingredients: ["6 chiles habanero", "1 cebola roxa", "Suco de laranja amarga", "Sal", "Coentro"],
    steps: ["Asse os habaneros e a cebola.", "Bata com suco de laranja amarga.", "Adicione sal e coentro.", "A salsa deve ser líquida.", "MUITO picante — use com cautela.", "Acompanhamento essencial da cochinita pibil."],
    difficulty: "Fácil", time: "10 min",
    description: "A salsa mais ardida do México — habanero com laranja amarga. Emblemática de Yucatán." },

  // ============ ARROZ & FEIJÃO (3) ============
  { id: "arroz-verde", name: "Arroz Verde", category: "Arroz & Feijão", image: "arroz-verde",
    ingredients: ["2 xícaras de arroz", "Poblano", "Espinafre", "Coentro", "Caldo de frango", "Cebola", "Alho", "Creme ácido"],
    steps: ["Bata poblano, espinafre e coentro com caldo.", "Frite o arroz em óleo.", "Adicione a mistura verde.", "Tampe e cozinhe 20 min.", "Não mexa durante o cozimento.", "Solte com garfo e sirva."],
    difficulty: "Fácil", time: "30 min",
    description: "Arroz verde com poblano e espinafre — variação colorida do arroz mexicano clássico." },

  { id: "frijoles-negros", name: "Frijoles Negros de Olla", category: "Arroz & Feijão", image: "frijoles-negros",
    ingredients: ["500g de feijão negro", "Cebola", "Epazote", "Sal", "Chile serrano"],
    steps: ["Lave o feijão e deixe de molho por 8h.", "Cozinhe com cebola e epazote.", "Cozinhe até macio (1h30 ou 40min na pressão).", "Adicione sal apenas no final.", "O caldo deve ficar escuro e aromático.", "Sirva com tortillas e chile."],
    difficulty: "Fácil", time: "1h 30min",
    description: "Feijão negro cozido com epazote — a erva que define o sabor. Base da culinária do sul do México." },

  { id: "arroz-con-rajas", name: "Arroz con Rajas y Elote", category: "Arroz & Feijão", image: "arroz-con-rajas",
    ingredients: ["2 xícaras de arroz", "Chile poblano em tiras", "Grãos de milho", "Creme ácido", "Queijo", "Caldo de frango"],
    steps: ["Frite o arroz em óleo.", "Adicione caldo e cozinhe.", "Asse e descasque poblanos em tiras.", "Misture rajas e milho ao arroz cozido.", "Adicione creme e queijo.", "Gratine se desejar."],
    difficulty: "Fácil", time: "35 min",
    description: "Arroz com tiras de chile poblano e milho — prato festivo e reconfortante." },

  // ============ MARISCOS (2) ============
  { id: "tacos-camaron", name: "Tacos de Camarão Grelhado", category: "Mariscos", image: "tacos-camaron",
    ingredients: ["500g de camarões", "Chile ancho em pó", "Limão", "Alho", "Repolho roxo", "Creme ácido com chipotle", "Tortillas de milho"],
    steps: ["Marine camarões com limão, alho e chile.", "Grelhe em fogo alto por 2 min cada lado.", "Fatie repolho roxo fino.", "Misture creme com chipotle.", "Monte tacos com repolho e camarão.", "Finalize com molho e limão."],
    difficulty: "Fácil", time: "20 min",
    description: "Camarões grelhados com chile em tortilla de milho — frescos, rápidos e deliciosos." },

  { id: "tostada-atun", name: "Tostada de Atum", category: "Mariscos", image: "tostada-atun",
    ingredients: ["300g de atum fresco sashimi", "Suco de limão", "Molho de soja", "Chile serrano", "Pepino", "Abacate", "Tostadas", "Maionese de chipotle"],
    steps: ["Corte atum em cubos pequenos.", "Misture com limão, soja e chile.", "Corte pepino e abacate.", "Espalhe maionese de chipotle na tostada.", "Monte com pepino, atum e abacate.", "Finalize com gergelim e coentro."],
    difficulty: "Fácil", time: "15 min",
    description: "Fusão mexicana-japonesa — atum fresco com limão e soja sobre tostada crocante." },
];
