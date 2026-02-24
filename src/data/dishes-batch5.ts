import { Dish } from "./dishes";

export const dishesBatch5: Dish[] = [
  // ============ TACOS EXTRAS ============
  { id: "tacos-camarao", name: "Tacos de Camarão Empanado", category: "Tacos", image: "tacos-camarao",
    ingredients: ["500g de camarões grandes", "Farinha de trigo", "Cerveja gelada", "Repolho roxo", "Maionese de chipotle", "Limão", "Tortillas de milho"],
    steps: ["Prepare massa: farinha, cerveja e sal.", "Empane e frite os camarões.", "Fatie repolho roxo fino.", "Prepare maionese com chipotle.", "Monte: tortilla, repolho, camarão.", "Finalize com molho e limão."],
    difficulty: "Médio", time: "30 min", spiceLevel: 1, tags: ["suave", "defumado"],
    description: "Camarões empanados em massa de cerveja sobre repolho crocante — estilo Baja California." },

  { id: "tacos-veganos", name: "Tacos Veganos de Couve-Flor", category: "Tacos", image: "tacos-veganos",
    ingredients: ["1 couve-flor em floretes", "Chile ancho em pó", "Cominho", "Limão", "Feijão negro", "Abacate", "Cebola roxa", "Coentro", "Tortillas de milho"],
    steps: ["Tempere couve-flor com chile e cominho.", "Asse a 220°C por 25 min até dourar.", "Prepare feijão temperado.", "Fatie abacate.", "Monte tacos com feijão, couve-flor e abacate.", "Finalize com cebola roxa e coentro."],
    difficulty: "Fácil", time: "35 min", spiceLevel: 1, tags: ["suave"],
    description: "Tacos 100% veganos com couve-flor assada — crocantes, saborosos e sem nada de origem animal." },

  { id: "tacos-gourmet", name: "Tacos Gourmet de Costela", category: "Tacos", image: "tacos-gourmet",
    ingredients: ["1kg de costela bovina", "Cerveja escura", "Chile ancho", "Chile pasilla", "Chocolate amargo", "Canela", "Tortillas artesanais", "Micro-greens"],
    steps: ["Sele a costela em panela quente.", "Adicione cerveja, chiles e chocolate.", "Cozinhe em fogo baixo por 4h.", "Desfie a carne — deve cair do osso.", "Reduza o molho até glace.", "Sirva em tortillas artesanais com micro-greens."],
    difficulty: "Avançado", time: "4h 30min", spiceLevel: 2, tags: ["picante", "defumado", "intenso"],
    description: "Tacos de costela braseada em cerveja e chocolate — versão gourmet digna de restaurante fine dining." },

  // ============ TORTILLAS & BASES EXTRAS ============
  { id: "pupusas-mex", name: "Memelas", category: "Tortillas & Bases", image: "memelas",
    ingredients: ["Masa de milho", "Banha de porco", "Feijão refrito", "Salsa verde", "Queijo fresco", "Cebola"],
    steps: ["Forme discos de masa ovalados.", "Cozinhe na chapa até dourar.", "Pincele com banha.", "Espalhe feijão refrito.", "Cubra com salsa e queijo.", "Sirva quente."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 0, tags: ["não picante"],
    description: "Discos de masa pincelados com banha e cobertos com feijão — antojito matinal de Oaxaca." },

  { id: "chalupas", name: "Chalupas Poblanas", category: "Tortillas & Bases", image: "chalupas",
    ingredients: ["Masa de milho", "Carne desfiada ou chorizo", "Salsa verde ou roja", "Cebola picada", "Óleo"],
    steps: ["Forme discos pequenos de masa.", "Frite em óleo até dourar e crocante.", "Cubra com salsa.", "Adicione carne ou chorizo.", "Polvilhe cebola picada.", "Coma com as mãos."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 1, tags: ["suave"],
    description: "Discos pequenos fritos cobertos com salsa e carne — antojito clássico de Puebla." },

  // ============ PRATOS TRADICIONAIS EXTRAS ============
  { id: "tamales-verdes", name: "Tamales Verdes de Frango", category: "Pratos Tradicionais", image: "tamales-verdes",
    ingredients: ["Masa de milho", "Banha batida", "Caldo de frango", "Frango desfiado", "Salsa verde de tomatillo", "Folhas de milho"],
    steps: ["Bata banha até fofa, misture com masa e caldo.", "Hidrate folhas de milho em água quente.", "Misture frango com salsa verde.", "Espalhe masa na folha.", "Coloque recheio no centro.", "Dobre, feche e cozinhe no vapor por 1h."],
    difficulty: "Avançado", time: "2h", spiceLevel: 1, tags: ["suave"],
    description: "Tamales clássicos recheados com frango em salsa verde de tomatillo — tradição milenar." },

  { id: "enfrijoladas-trad", name: "Enfrijoladas", category: "Pratos Tradicionais", image: "enfrijoladas-trad",
    ingredients: ["Tortillas de milho", "Feijão negro batido", "Frango desfiado", "Creme ácido", "Queijo fresco", "Cebola roxa", "Epazote"],
    steps: ["Bata feijão cozido com epazote até cremoso.", "Aqueça o molho de feijão.", "Passe as tortillas no molho.", "Recheie com frango e dobre.", "Cubra com mais molho.", "Decore com creme, queijo e cebola."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Tortillas banhadas em molho de feijão negro — alternativa reconfortante às enchiladas." },

  { id: "mole-amarillo", name: "Mole Amarillo de Oaxaca", category: "Pratos Tradicionais", image: "mole-amarillo",
    ingredients: ["Chile chilcostle", "Chile ancho", "Tomate", "Tomatillo", "Hierba santa", "Masa de milho", "Chayote", "Feijão verde", "Frango"],
    steps: ["Torre e hidrate os chiles.", "Asse tomates e tomatillos.", "Bata tudo com hierba santa.", "Frite o molho e adicione caldo.", "Espesse com masa de milho.", "Adicione legumes e frango — cozinhe 20 min."],
    difficulty: "Avançado", time: "1h 30min", spiceLevel: 1, tags: ["suave"],
    description: "Um dos 7 moles de Oaxaca — amarelo vibrante, com hierba santa e espessado com masa." },

  // ============ CARNES MEXICANAS EXTRAS ============
  { id: "cecina-yecapixtla", name: "Cecina de Yecapixtla", category: "Carnes Mexicanas", image: "cecina-yecapixtla",
    ingredients: ["500g de cecina (carne seca salgada)", "Guacamole", "Salsa verde", "Feijão refrito", "Tortillas", "Creme ácido", "Queijo Oaxaca"],
    steps: ["Cecina já vem salgada e semi-seca.", "Grelhe na brasa ou chapa quente.", "Cozinhe apenas 2-3 min de cada lado.", "A carne deve ficar macia, não crocante.", "Sirva com guacamole e feijão.", "Acompanhe com tortillas e creme."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 0, tags: ["não picante"],
    description: "Carne salgada e seca ao sol de Yecapixtla, Morelos — grelhada na brasa com guacamole." },

  { id: "tasajo-oaxaca", name: "Tasajo Oaxaqueño", category: "Carnes Mexicanas", image: "tasajo-oaxaca",
    ingredients: ["500g de tasajo (carne seca fatiada fina)", "Nopales grelhados", "Salsa de pasilla", "Feijão negro", "Tortillas de milho", "Queijo Oaxaca"],
    steps: ["Tasajo é carne fatiada fina e seca.", "Grelhe rapidamente na brasa.", "Grelhe nopales até perder a baba.", "Prepare salsa com chile pasilla.", "Sirva carne com nopales e feijão.", "Acompanhe com tortillas e salsa."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 1, tags: ["suave"],
    description: "Carne seca fina de Oaxaca — grelhada e servida com nopales, a carne dos mercados oaxaqueños." },

  { id: "suadero-guisado", name: "Suadero en Salsa Verde", category: "Carnes Mexicanas", image: "suadero-guisado",
    ingredients: ["500g de suadero", "Tomatillos", "Chile serrano", "Cebola", "Alho", "Coentro", "Tortillas"],
    steps: ["Cozinhe o suadero por 1h.", "Frite em banha até dourar.", "Prepare salsa verde com tomatillos.", "Corte suadero em pedaços.", "Sirva em tacos com salsa.", "O sabor é único — entre carne e gordura."],
    difficulty: "Médio", time: "1h 30min", spiceLevel: 1, tags: ["suave"],
    description: "Suadero é uma carne exclusiva do México — gordurosa e saborosa, frita e servida em tacos." },

  // ============ MAIS BEBIDAS ============
  { id: "michelada", name: "Michelada", category: "Bebidas", image: "michelada",
    ingredients: ["Cerveja clara mexicana", "Suco de limão", "Molho inglês", "Molho picante", "Sal", "Tajín", "Gelo", "Clamato (opcional)"],
    steps: ["Passe limão na borda do copo.", "Mergulhe em sal e tajín.", "Adicione gelo, limão e molhos.", "Complete com cerveja gelada.", "Misture delicadamente.", "Variação com Clamato: cerveja com suco de tomate e mariscos."],
    difficulty: "Fácil", time: "5 min", spiceLevel: 1, tags: ["suave"],
    description: "Cerveja preparada com limão, sal e molhos — a bebida mexicana perfeita para dias quentes." },

  { id: "margarita", name: "Margarita Clássica", category: "Bebidas", image: "margarita",
    ingredients: ["60ml de tequila blanco", "30ml de Cointreau", "30ml de suco de limão", "Sal para a borda", "Gelo"],
    steps: ["Passe limão na borda da taça.", "Mergulhe em sal.", "Coloque tequila, Cointreau e limão no shaker.", "Adicione gelo e agite 15 segundos.", "Coe na taça com gelo.", "Decore com rodela de limão."],
    difficulty: "Fácil", time: "5 min", spiceLevel: 0, tags: ["não picante"],
    description: "O coquetel mexicano mais famoso do mundo — tequila, limão e Cointreau em perfeito equilíbrio." },

  { id: "pulque", name: "Pulque", category: "Bebidas", image: "pulque",
    ingredients: ["Aguamiel (seiva de agave)", "Tempo de fermentação", "Frutas para curado (opcional)"],
    steps: ["Extraia aguamiel do coração do agave.", "Fermente naturalmente por 1-2 dias.", "O resultado é bebida leitosa e levemente ácida.", "Para curado: bata com frutas (manga, morango, guayaba).", "Sirva fresco em copo de vidro.", "Tradição azteca com 2.000+ anos."],
    difficulty: "Avançado", time: "2 dias", spiceLevel: 0, tags: ["não picante"],
    description: "Bebida sagrada dos astecas — seiva de agave fermentada. O ancestral da tequila e do mezcal." },

  // ============ MAIS MARISCOS ============
  { id: "camarones-coconut", name: "Camarões ao Coco com Chile", category: "Mariscos", image: "camarones-coco",
    ingredients: ["500g de camarões", "Coco ralado", "Farinha de trigo", "Ovo", "Chile habanero", "Manga", "Limão"],
    steps: ["Empane camarões em farinha, ovo e coco.", "Frite até dourar (180°C).", "Prepare salsa de manga com habanero.", "Pique manga, habanero e limão.", "Sirva camarões com salsa.", "A doçura do coco + manga equilibra o habanero."],
    difficulty: "Médio", time: "25 min", spiceLevel: 3, tags: ["picante", "intenso"],
    description: "Camarões empanados em coco com salsa de manga e habanero — doce, crocante e extremamente picante." },

  { id: "zarandeado", name: "Pescado Zarandeado", category: "Mariscos", image: "zarandeado",
    ingredients: ["1 pargo inteiro", "Chile ancho", "Maionese", "Molho de soja", "Limão", "Alho", "Mostarda"],
    steps: ["Abra o pargo em borboleta.", "Prepare marinada com maionese, chile, soja e limão.", "Cubra o peixe generosamente.", "Grelhe na brasa por 20-25 min.", "A pele deve ficar crocante.", "Sirva com tortillas e guacamole."],
    difficulty: "Médio", time: "35 min", spiceLevel: 1, tags: ["suave", "defumado"],
    description: "Peixe inteiro grelhado na brasa com marinada de chile — especialidade de Nayarit, costa do Pacífico." },

  // ============ MAIS SOBREMESAS ============  
  { id: "pastel-tres-leches", name: "Pastel de Tres Leches", category: "Sobremesas", image: "tres-leches-pastel",
    ingredients: ["Bolo esponja (ovo, farinha, açúcar)", "Leite condensado", "Leite evaporado", "Creme de leite", "Chantilly", "Canela", "Morangos"],
    steps: ["Asse o bolo esponja e deixe esfriar.", "Misture os 3 leites.", "Fure o bolo com garfo.", "Despeje a mistura de leites lentamente.", "Refrigere por 4h.", "Cubra com chantilly, canela e morangos."],
    difficulty: "Médio", time: "1h + 4h refrigeração", spiceLevel: 0, tags: ["não picante"],
    description: "O bolo mais popular do México — esponja encharcada em 3 tipos de leite com chantilly. Presente em toda festa." },

  { id: "alegrias", name: "Alegrías de Amaranto", category: "Sobremesas", image: "alegrias",
    ingredients: ["2 xícaras de amaranto estourado", "Mel ou piloncillo", "Passas", "Amendoim", "Pepitas de abóbora"],
    steps: ["Aqueça mel ou piloncillo até fio grosso.", "Misture com amaranto estourado.", "Adicione frutas secas e sementes.", "Prense em forma retangular.", "Deixe esfriar e endurecer.", "Corte em barrinhas."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 0, tags: ["não picante"],
    description: "Barras de amaranto com mel — doce pré-hispânico que os astecas consideravam alimento sagrado." },

  // ============ ARROZ & FEIJÃO EXTRAS ============
  { id: "frijoles-puercos", name: "Frijoles Puercos", category: "Arroz & Feijão", image: "frijoles-puercos",
    ingredients: ["Feijão bayo cozido", "Bacon", "Chorizo", "Chicharrón", "Queijo", "Chile jalapeño", "Creme ácido"],
    steps: ["Frite bacon e chorizo.", "Adicione feijão cozido com caldo.", "Quebre chicharrón e misture.", "Adicione jalapeño picado.", "Sirva com queijo e creme.", "Versão indulgente do feijão mexicano."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 1, tags: ["suave"],
    description: "A versão mais indulgente do feijão mexicano — com bacon, chorizo, chicharrón e tudo mais." },

  // ============ CAFÉ DA MANHÃ EXTRAS ============
  { id: "huevos-motulenos", name: "Huevos Motuleños", category: "Café da Manhã", image: "huevos-motulenos",
    ingredients: ["Ovos fritos", "Tortillas", "Feijão negro", "Salsa de tomate", "Presunto", "Ervilhas", "Banana frita", "Queijo fresco"],
    steps: ["Frite tortillas levemente.", "Espalhe feijão negro por cima.", "Coloque ovo frito sobre o feijão.", "Cubra com salsa de tomate.", "Adicione presunto, ervilhas e queijo.", "Decore com banana frita — sim, banana!"],
    difficulty: "Fácil", time: "20 min", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Café da manhã yucateco extravagante — ovo, feijão, presunto, banana frita e salsa. De Motul, Yucatán." },

  { id: "chilaquiles-especiais", name: "Chilaquiles con Pollo", category: "Café da Manhã", image: "chilaquiles-pollo",
    ingredients: ["Totopos de tortilla", "Salsa verde", "Frango desfiado", "Creme ácido", "Queijo Oaxaca", "Cebola roxa", "Coentro"],
    steps: ["Frite totopos até crocantes.", "Aqueça salsa verde.", "Misture totopos com salsa.", "Cubra com frango desfiado.", "Adicione queijo Oaxaca derretido.", "Finalize com creme, cebola e coentro."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 1, tags: ["suave"],
    description: "Chilaquiles com frango desfiado e queijo Oaxaca — o café da manhã mais popular do México." },
];
