import { Dish } from "./dishes";

export const dishesBatch4: Dish[] = [
  // ============ TORTILLAS & BASES ============
  { id: "tortilla-milho", name: "Tortilla de Milho Artesanal", category: "Tortillas & Bases", image: "tortilla-milho",
    ingredients: ["2 xícaras de masa harina", "1¼ xícara de água morna", "Pitada de sal"],
    steps: ["Misture masa harina com água e sal.", "Sove até massa lisa e maleável.", "Faça bolinhas do tamanho de nozes.", "Prense na tortillera ou entre plásticos.", "Cozinhe na chapa quente 1 min de cada lado.", "A tortilla deve inflar levemente — sinal de perfeição."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "A base de toda a culinária mexicana. A tortilla de milho nixtamalizado é patrimônio cultural do México." },

  { id: "tortilla-trigo", name: "Tortilla de Trigo (Farinha)", category: "Tortillas & Bases", image: "tortilla-trigo",
    ingredients: ["3 xícaras de farinha de trigo", "1/3 xícara de banha ou óleo", "1 colher de chá de sal", "1 xícara de água morna"],
    steps: ["Misture farinha e sal.", "Adicione banha e trabalhe com as mãos.", "Adicione água gradualmente.", "Sove 5 min e descanse 30 min.", "Divida em bolinhas e abra com rolo.", "Cozinhe na chapa quente até bolhas douradas."],
    difficulty: "Fácil", time: "45 min", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Originária do norte do México, a tortilla de farinha é macia e flexível — perfeita para burritos e quesadillas." },

  { id: "gorditas-base", name: "Gorditas de Masa", category: "Tortillas & Bases", image: "gorditas-base",
    ingredients: ["Masa de milho", "Banha de porco", "Sal", "Recheio a gosto"],
    steps: ["Misture masa com banha e sal.", "Forme discos grossos (2cm).", "Cozinhe na chapa até dourar.", "Abra ao meio enquanto quente.", "Recheie generosamente.", "Sirva com salsa."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 0, tags: ["não picante"],
    description: "Base versátil da culinária mexicana — discos grossos de masa abertos e recheados." },

  { id: "sopes-base", name: "Sopes Artesanais", category: "Tortillas & Bases", image: "sopes-base",
    ingredients: ["Masa de milho", "Sal", "Óleo para fritura", "Feijão refrito", "Toppings variados"],
    steps: ["Molde discos de masa de 10cm.", "Cozinhe na chapa até firmar.", "Enquanto quentes, levante as bordas.", "Frite brevemente em óleo.", "Espalhe feijão na base.", "Cubra com toppings a gosto."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante"],
    description: "Cestinhas de masa com bordas levantadas — antojito pré-hispânico perfeito para qualquer recheio." },

  { id: "tlacoyos-base", name: "Tlacoyos de Feijão", category: "Tortillas & Bases", image: "tlacoyos-base",
    ingredients: ["Masa de milho azul", "Feijão negro", "Queijo fresco", "Nopales", "Salsa verde", "Creme ácido"],
    steps: ["Prepare masa com milho azul.", "Molde oval e recheie com feijão no centro.", "Feche e achate em formato de losango.", "Cozinhe na chapa até dourar dos dois lados.", "Cubra com nopales, queijo e salsa.", "Finalize com creme ácido."],
    difficulty: "Fácil", time: "35 min", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Antojito milenar em formato de losango — recheado com feijão e coberto com nopales. Tradição asteca viva." },

  { id: "tostadas-base", name: "Tostadas Crocantes", category: "Tortillas & Bases", image: "tostadas-base",
    ingredients: ["Tortillas de milho", "Óleo para fritura", "Sal"],
    steps: ["Use tortillas do dia anterior (mais secas).", "Aqueça óleo a 180°C.", "Frite uma tortilla por vez mantendo plana.", "Frite 1-2 min de cada lado até dourar.", "Escorra em papel absorvente.", "Tempere com sal e use como base."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 0, tags: ["não picante"],
    description: "A base crocante para infinitas combinações — de ceviche a tinga. Tortillas fritas até a perfeição." },

  // ============ PRATOS TRADICIONAIS ============
  { id: "enchiladas-verdes", name: "Enchiladas Verdes", category: "Pratos Tradicionais", image: "enchiladas-verdes",
    ingredients: ["12 tortillas de milho", "500g de frango desfiado", "Tomatillos", "Chile serrano", "Cebola e alho", "Coentro", "Creme ácido", "Queijo fresco"],
    steps: ["Cozinhe tomatillos com chile serrano.", "Bata com cebola, alho e coentro.", "Frite a salsa verde em óleo.", "Passe tortillas no óleo e depois na salsa.", "Recheie com frango e enrole.", "Cubra com salsa, creme e queijo."],
    difficulty: "Médio", time: "45 min", spiceLevel: 1, tags: ["suave"],
    description: "Enchiladas banhadas em salsa verde de tomatillo — mais frescas e ácidas que as vermelhas." },

  { id: "burritos", name: "Burritos de Carne", category: "Pratos Tradicionais", image: "burritos",
    ingredients: ["Tortillas de farinha grandes", "500g de carne de res grelhada", "Arroz mexicano", "Feijão refrito", "Guacamole", "Creme ácido", "Queijo", "Salsa"],
    steps: ["Grelhe e pique a carne.", "Prepare arroz e feijão.", "Aqueça tortilla de farinha grande.", "Coloque arroz, feijão, carne no centro.", "Adicione guacamole, creme e queijo.", "Dobre as laterais e enrole apertado."],
    difficulty: "Fácil", time: "35 min", spiceLevel: 1, tags: ["suave"],
    description: "Originários de Ciudad Juárez, Chihuahua — tortilla de farinha gigante enrolada com diversos recheios." },

  { id: "chimichangas", name: "Chimichangas", category: "Pratos Tradicionais", image: "chimichangas",
    ingredients: ["Tortillas de farinha grandes", "400g de carne desfiada ou frango", "Feijão refrito", "Queijo", "Óleo para fritura", "Guacamole", "Creme ácido", "Salsa"],
    steps: ["Prepare o recheio com carne, feijão e queijo.", "Monte como um burrito bem fechado.", "Prenda com palitos se necessário.", "Frite em óleo quente até dourar e crocante.", "Escorra em papel absorvente.", "Sirva com guacamole, creme e salsa."],
    difficulty: "Médio", time: "40 min", spiceLevel: 1, tags: ["suave"],
    description: "Burrito frito até ficar crocante — a lenda diz que foi um acidente quando alguém derrubou um burrito na fritadeira." },

  { id: "quesadillas-trad", name: "Quesadillas de Flor de Abóbora", category: "Pratos Tradicionais", image: "quesadillas-flor",
    ingredients: ["Tortillas de milho ou farinha", "Queijo Oaxaca", "Flor de abóbora", "Epazote", "Cebola", "Chile poblano"],
    steps: ["Refogue cebola com chile poblano.", "Adicione flor de abóbora e epazote.", "Cozinhe 3-4 min até murchar.", "Coloque queijo na tortilla.", "Adicione recheio e dobre.", "Grelhe na chapa até o queijo derreter."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 1, tags: ["suave"],
    description: "Quesadilla com flor de abóbora — um dos recheios mais tradicionais e delicados da culinária mexicana." },

  { id: "fajitas", name: "Fajitas de Carne e Frango", category: "Pratos Tradicionais", image: "fajitas",
    ingredients: ["300g de contra-filé", "300g de peito de frango", "Pimentões coloridos", "Cebola", "Limão", "Cominho", "Tortillas de farinha", "Guacamole", "Creme ácido"],
    steps: ["Marine carnes com limão, cominho e alho.", "Grelhe as carnes em fogo alto.", "Grelhe pimentões e cebola.", "Corte tudo em tiras.", "Sirva fumegante na chapa de ferro.", "Monte fajitas com tortillas e acompanhamentos."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 1, tags: ["suave"],
    description: "Carnes grelhadas servidas fumegantes com pimentões — criadas por vaqueros texano-mexicanos." },

  { id: "chilaquiles-rojos", name: "Chilaquiles Rojos", category: "Pratos Tradicionais", image: "chilaquiles-rojos",
    ingredients: ["Tortillas de milho cortadas", "6 chiles guajillo", "3 tomates", "Cebola e alho", "Creme ácido", "Queijo fresco", "Ovo frito", "Feijão refrito"],
    steps: ["Corte tortillas em triângulos e frite.", "Hidrate chiles e bata com tomate.", "Frite o molho em óleo.", "Adicione os totopos ao molho.", "Cozinhe 2-3 min — devem ficar al dente.", "Sirva com creme, queijo e ovo frito."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 1, tags: ["suave"],
    description: "Versão vermelha dos chilaquiles com molho de chile guajillo — igualmente perfeita para o café da manhã." },

  { id: "pozole-blanco", name: "Pozole Blanco", category: "Pratos Tradicionais", image: "pozole-blanco",
    ingredients: ["500g de carne de porco", "250g de hominy", "Cebola", "Alho", "Orégano", "Alface", "Rabanete", "Limão", "Tostadas"],
    steps: ["Cozinhe a carne com cebola e alho.", "Adicione o hominy e cozinhe 30 min.", "O caldo deve ficar claro e limpo.", "Sirva com alface picada.", "Acompanhe com rabanete, orégano e limão.", "Tostadas ao lado são essenciais."],
    difficulty: "Médio", time: "2h", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Versão branca e suave do pozole, sem chile — perfeita para quem quer sabor sem ardência." },

  { id: "enchiladas-suizas", name: "Enchiladas Suizas", category: "Pratos Tradicionais", image: "enchiladas-suizas",
    ingredients: ["12 tortillas de milho", "Frango desfiado", "Tomatillos", "Chile poblano", "Creme de leite", "Queijo gratinado", "Cebola", "Alho"],
    steps: ["Prepare salsa verde com tomatillos e poblano.", "Misture com creme de leite.", "Passe tortillas na salsa.", "Recheie com frango e enrole.", "Cubra com salsa cremosa.", "Gratine com queijo no forno."],
    difficulty: "Médio", time: "50 min", spiceLevel: 1, tags: ["suave"],
    description: "Enchiladas em molho verde cremoso gratinadas — criadas no Sanborns da Cidade do México nos anos 1950." },

  // ============ QUEIJOS & RECHEIOS ============
  { id: "queijo-oaxaca", name: "Queijo Oaxaca Derretido", category: "Queijos & Recheios", image: "queijo-oaxaca",
    ingredients: ["300g de queijo Oaxaca", "Chorizo mexicano", "Chile poblano em tiras", "Tortillas de farinha"],
    steps: ["Coloque queijo Oaxaca em panela de barro.", "Adicione chorizo frito por cima.", "Coloque tiras de poblano.", "Leve ao forno ou chapa até derreter.", "O queijo deve estar puxando fios longos.", "Coma com tortillas de farinha."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 1, tags: ["suave"],
    description: "Queijo Oaxaca é o 'mozzarella mexicano' — derrete perfeitamente e puxa fios longos e elásticos." },

  { id: "queso-fundido", name: "Queso Fundido", category: "Queijos & Recheios", image: "queso-fundido",
    ingredients: ["300g de queijo Chihuahua ou Oaxaca", "Chorizo mexicano", "Chile poblano", "Cebola", "Tortillas de farinha"],
    steps: ["Frite chorizo até crocante.", "Refogue cebola e rajas de poblano.", "Coloque queijo em panela de barro.", "Adicione chorizo e rajas.", "Gratine até derreter e borbulhar.", "Sirva imediatamente com tortillas."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 1, tags: ["suave"],
    description: "Queijo derretido no forno com chorizo — appetizer irresistível que se come com tortillas." },

  { id: "queijo-cotija", name: "Queijo Cotija — O Parmesão Mexicano", category: "Queijos & Recheios", image: "queijo-cotija",
    ingredients: ["Queijo Cotija", "Elotes ou esquites", "Feijão", "Enchiladas", "Saladas"],
    steps: ["Queijo Cotija é seco e salgado — não derrete.", "Esfarele sobre elotes e esquites.", "Use em saladas e sopas.", "Polvilhe sobre feijão e enchiladas.", "Substitua parmesão em receitas mexicanas.", "Armazene na geladeira por semanas."],
    difficulty: "Fácil", time: "5 min", spiceLevel: 0, tags: ["não picante"],
    description: "Queijo seco e salgado de Cotija, Michoacán — o parmesão mexicano, essencial para elotes e antojitos." },

  { id: "recheio-picadillo", name: "Recheio de Picadillo", category: "Queijos & Recheios", image: "recheio-picadillo",
    ingredients: ["500g de carne moída", "Batata em cubos", "Cenoura", "Tomate", "Cebola", "Passas", "Azeitonas", "Cominho"],
    steps: ["Frite carne moída com cebola.", "Adicione tomate picado.", "Junte batata e cenoura em cubos.", "Tempere com cominho e pimenta.", "Adicione passas e azeitonas.", "Cozinhe até legumes ficarem macios."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Recheio universal da culinária mexicana — serve para chiles rellenos, empanadas, tacos e tamales." },

  { id: "recheio-tinga", name: "Recheio de Tinga de Frango", category: "Queijos & Recheios", image: "recheio-tinga",
    ingredients: ["500g de frango desfiado", "Chipotles em adobo", "Tomate", "Cebola", "Alho", "Orégano"],
    steps: ["Cozinhe e desfie o frango.", "Refogue cebola e alho.", "Adicione tomate e chipotles.", "Junte o frango desfiado.", "Cozinhe 15 min.", "Use em tostadas, tacos ou sopes."],
    difficulty: "Fácil", time: "35 min", spiceLevel: 2, tags: ["picante", "defumado"],
    description: "Recheio defumado e levemente picante — a tinga é o recheio mais versátil de Puebla." },

  { id: "recheio-rajas", name: "Recheio de Rajas con Crema", category: "Queijos & Recheios", image: "recheio-rajas",
    ingredients: ["6 chiles poblanos", "Cebola", "Milho", "Creme ácido", "Queijo Oaxaca", "Epazote"],
    steps: ["Asse poblanos no fogo direto.", "Coloque em saco plástico 10 min.", "Remova pele e corte em tiras (rajas).", "Refogue com cebola e milho.", "Adicione creme e queijo.", "Cozinhe até cremoso."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 1, tags: ["suave"],
    description: "Tiras de chile poblano com creme — recheio cremoso para quesadillas, tamales e tacos." },

  { id: "recheio-vegano", name: "Recheio Vegano de Nopales e Feijão", category: "Queijos & Recheios", image: "recheio-vegano",
    ingredients: ["4 folhas de nopal", "Feijão negro cozido", "Milho", "Tomate", "Cebola", "Coentro", "Chile serrano", "Limão"],
    steps: ["Limpe e corte nopales em tiras.", "Grelhe até perder a baba.", "Refogue com cebola e chile.", "Adicione feijão e milho.", "Tempere com coentro e limão.", "Use em tacos, sopes ou tlacoyos."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 1, tags: ["suave"],
    description: "Recheio 100% vegano com nopales (cacto) e feijão — autêntico e nutritivo, tradição pré-hispânica." },

  // ============ CARNES MEXICANAS (renomeando e adicionando) ============
  { id: "carnitas-michoacan", name: "Carnitas Estilo Michoacán", category: "Carnes Mexicanas", image: "carnitas-michoacan",
    ingredients: ["2kg de pernil suíno (vários cortes)", "1 laranja", "Coca-Cola ou leite condensado", "Banha de porco", "Alho", "Cominho", "Louro"],
    steps: ["Corte a carne em pedaços grandes.", "Coloque em panela grande com banha.", "Adicione suco de laranja e Coca-Cola.", "Cozinhe em fogo médio por 2h.", "Aumente o fogo para dourar.", "A carne deve ficar crocante por fora e macia por dentro."],
    difficulty: "Médio", time: "2h 30min", spiceLevel: 0, tags: ["não picante"],
    description: "O método autêntico de Michoacán usa panelas de cobre e diferentes cortes para variar texturas." },

  { id: "pollo-asado-mex", name: "Pollo Asado Mexicano", category: "Carnes Mexicanas", image: "pollo-asado",
    ingredients: ["1 frango inteiro", "Chile ancho", "Chile guajillo", "Alho", "Cominho", "Orégano", "Vinagre", "Achiote"],
    steps: ["Hidrate chiles e bata com especiarias.", "Marine o frango por 12h.", "Asse na grelha ou forno a 200°C.", "Regue com a marinada durante o cozimento.", "Cozinhe até pele dourada e crocante.", "Sirva com tortillas, arroz e feijão."],
    difficulty: "Médio", time: "1h + marinada", spiceLevel: 1, tags: ["suave"],
    description: "Frango marinado em pasta de chile e grelhado — sabor defumado e cor vibrante." },

  { id: "bistec-ranchero", name: "Bistec Ranchero", category: "Carnes Mexicanas", image: "bistec-ranchero",
    ingredients: ["500g de bife (paleta)", "Tomate", "Chile serrano", "Cebola", "Alho", "Coentro", "Tortillas"],
    steps: ["Sele os bifes em panela quente.", "Reserve a carne.", "Refogue cebola, alho e chile.", "Adicione tomate picado.", "Retorne a carne ao molho.", "Cozinhe 15 min e sirva com tortillas."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 1, tags: ["suave"],
    description: "Bife em molho ranchero de tomate e chile — refeição rápida e substancial do campo mexicano." },

  { id: "arrachera", name: "Arrachera (Fralda Grelhada)", category: "Carnes Mexicanas", image: "arrachera",
    ingredients: ["800g de fraldinha", "Suco de limão", "Cerveja", "Alho", "Chile chipotle", "Cebola", "Tortillas de farinha"],
    steps: ["Marine a fraldinha com limão, cerveja e chipotle.", "Deixe marinar por mínimo 4h.", "Grelhe em fogo alto por 4-5 min cada lado.", "Descanse 5 min antes de cortar.", "Corte contra as fibras em tiras.", "Sirva com tortillas, guacamole e cebolas grelhadas."],
    difficulty: "Fácil", time: "20 min + marinada", spiceLevel: 1, tags: ["suave", "defumado"],
    description: "A arrachera (fraldinha) é o corte premium dos tacos norteños — suculenta e cheia de sabor." },

  // ============ CULTURA MEXICANA ============
  { id: "historia-taco", name: "A História do Taco", category: "Cultura Mexicana", image: "historia-taco",
    ingredients: ["Conhecimento ancestral", "Tradição milenar", "Evolução culinária"],
    steps: ["O taco existe há pelo menos 500 anos no México.", "A palavra 'taco' pode vir da mineração colonial.", "Tacos al pastor surgiram da imigração libanesa nos anos 1920.", "Cada região do México tem seus tacos próprios.", "Los Angeles e Cidade do México são as capitais mundiais do taco.", "O taco é patrimônio cultural intangível do México."],
    difficulty: "Fácil", time: "Leitura 5 min", spiceLevel: 0, tags: ["não picante"],
    description: "Do México pré-hispânico ao TikTok — a jornada de 5.000 anos do alimento mais democrático do mundo." },

  { id: "cultura-pimenta", name: "Guia Completo das Pimentas Mexicanas", category: "Cultura Mexicana", image: "cultura-pimenta",
    ingredients: ["Chile ancho", "Chile guajillo", "Chile chipotle", "Chile habanero", "Chile serrano", "Chile poblano", "Chile pasilla", "Chile de árbol"],
    steps: ["Ancho: seco, doce, médio — base do mole.", "Guajillo: seco, frutado, médio — salsas e adobos.", "Chipotle: jalapeño defumado — sabor profundo.", "Habanero: extremo — usar com extrema cautela.", "Serrano: fresco, forte — para salsas cruas.", "Poblano: fresco, suave — chiles rellenos e rajas."],
    difficulty: "Fácil", time: "Leitura 8 min", spiceLevel: 2, tags: ["picante", "intenso"],
    description: "México tem mais de 60 variedades de pimenta. Conheça as principais e quando usar cada uma." },

  { id: "historia-mole", name: "O Mole — Alma do México", category: "Cultura Mexicana", image: "historia-mole",
    ingredients: ["30+ ingredientes por receita", "Tradição de Puebla e Oaxaca", "Chocolate, chiles e especiarias"],
    steps: ["Mole vem do náhuatl 'molli' (molho).", "Oaxaca tem 7 moles tradicionais (negro, rojo, amarillo, verde, coloradito, chichilo, manchamanteles).", "Lenda das freiras de Puebla que criaram o mole poblano.", "Cada família guarda sua receita secreta.", "O mole pode levar até 3 dias para preparar.", "É servido em casamentos, batizados e funerais."],
    difficulty: "Fácil", time: "Leitura 5 min", spiceLevel: 0, tags: ["não picante"],
    description: "A história do molho mais complexo do mundo — de 30+ ingredientes a patrimônio da humanidade." },

  { id: "dia-muertos", name: "Dia dos Mortos — Gastronomia Ritual", category: "Cultura Mexicana", image: "dia-muertos",
    ingredients: ["Pan de muerto", "Calaveritas de azúcar", "Mole", "Tamales", "Atole", "Agua de jamaica", "Cempasúchil (flor)"],
    steps: ["O Dia dos Mortos (1-2 de novembro) é patrimônio UNESCO.", "As ofrendas incluem a comida favorita do falecido.", "Pan de muerto é pão decorado com 'ossos' de massa.", "Calaveritas de azúcar são caveiras de açúcar decoradas.", "Cada região celebra de forma diferente.", "É celebração da vida, não luto."],
    difficulty: "Fácil", time: "Leitura 5 min", spiceLevel: 0, tags: ["não picante"],
    description: "A gastronomia do Dia dos Mortos — como a comida conecta vivos e mortos na tradição mexicana." },

  { id: "regioes-gastronomicas", name: "Regiões Gastronômicas do México", category: "Cultura Mexicana", image: "regioes-gastronomicas",
    ingredients: ["Norte: carnes grelhadas e tortillas de farinha", "Centro: moles e antojitos", "Sul: tamales e chocolate", "Costa: mariscos e ceviches", "Yucatán: cochinita e habanero", "Oaxaca: moles e mezcal"],
    steps: ["Norte (Sonora, Chihuahua): carne asada, burritos, machaca.", "Centro (CDMX, Puebla): mole poblano, chilaquiles, tamales.", "Oaxaca: 7 moles, tlayudas, chapulines.", "Yucatán: cochinita pibil, papadzules, sopa de lima.", "Costa Pacífico (Sinaloa): aguachile, mariscos.", "Cada região é um universo gastronômico completo."],
    difficulty: "Fácil", time: "Leitura 8 min", spiceLevel: 0, tags: ["não picante"],
    description: "O México tem 32 estados e cada um é um mundo culinário. Conheça as 6 macro-regiões gastronômicas." },

  { id: "festivais-mexicanos", name: "Festivais Gastronômicos do México", category: "Cultura Mexicana", image: "festivais-mexicanos",
    ingredients: ["Festival del Mole (Puebla)", "Feria del Taco (CDMX)", "Guelaguetza (Oaxaca)", "Festival de la Barbacoa (Hidalgo)", "Feria del Chile en Nogada (Puebla)"],
    steps: ["Guelaguetza (julho): celebração cultural zapoteca com comida e dança.", "Festival del Mole (outubro): competições de mole em Puebla.", "Feria del Taco (março): centenas de taquerias competem na CDMX.", "Cada festival dura vários dias.", "Combinam gastronomia, música e cultura.", "São a melhor forma de conhecer o México autêntico."],
    difficulty: "Fácil", time: "Leitura 5 min", spiceLevel: 0, tags: ["não picante"],
    description: "Os maiores festivais gastronômicos do México — de Oaxaca a Puebla, celebrando a comida como arte." },

  // ============ ESCOLA MEXICANA — DESAFIOS COM IA ============
  { id: "curso-basico", name: "🎓 Desafio: Culinária Mexicana Básica", category: "Escola Mexicana", image: "curso-basico",
    ingredients: ["Masa harina (2 xíc)", "Água morna (1¼ xíc)", "Feijão preto (500g)", "Banha ou óleo", "Arroz (2 xíc)", "Tomate (4 und)", "Caldo de frango (4 xíc)", "Abacate (3 und)", "Cebola branca", "Coentro fresco", "Limão (4 und)", "Chile jalapeño", "Queijo Oaxaca ou muçarela", "Cominho em pó", "Orégano mexicano", "Chile ancho em pó"],
    steps: [
      "🎯 DESAFIO: Prepare um jantar mexicano completo para 4 pessoas seguindo os 6 módulos abaixo!",
      "📘 Módulo 1 — Tortillas Artesanais: Misture 2 xíc de masa harina + 1¼ xíc de água morna + ½ colher de sal. Amasse por 5 min até ficar lisa como Play-Doh (se rachar, adicione água aos poucos; se grudar, mais masa). Faça bolinhas de 35g, prense na tortillera forrada com plástico grosso até 2mm. Asse no comal bem quente sem óleo: 30s primeiro lado → vire → 1 min → vire novamente → 30s (deve inflar!). Guarde em pano limpo. Se não tiver prensa, use tábua de corte com peso.",
      "📘 Módulo 2 — Base de Feijão e Arroz: FEIJÃO REFRITO — Cozinhe 500g de feijão preto em panela de pressão com cebola e alho por 30 min. Numa frigideira, aqueça 3 col de banha, frite ½ cebola picada até dourar, adicione feijão com caldo e amasse com garfo até formar purê cremoso. Tempere com sal e cominho. ARROZ MEXICANO — Lave 2 xíc de arroz até a água sair limpa. Bata 2 tomates com ¼ de cebola. Frite o arroz em óleo até dourar (5 min), adicione o tomate batido e mexa 2 min. Despeje caldo quente na proporção 2:1 (4 xíc), sal, tampe e cozinhe em fogo baixo 18 min sem mexer.",
      "📘 Módulo 3 — Salsas Frescas: GUACAMOLE — Amasse 3 abacates com garfo (não liquidifique), misture ½ cebola picada fininha, 1 tomate em cubos sem sementes, 2 col de coentro picado, suco de 1 limão, sal e ½ jalapeño picado. Variações: adicione mango, romã ou jicama. PICO DE GALLO — 3 tomates + ½ cebola + coentro + limão + jalapeño, tudo em cubos pequenos uniformes. SALSA ROJA — Asse 4 tomates e 2 chiles (guajillo ou ancho hidratados) no comal até ficarem carbonizados. Bata no liquidificador com 1 dente de alho e sal.",
      "📘 Módulo 4 — Montagem de Tacos e Quesadillas: TACOS — Aqueça tortillas no comal 15s de cada lado, recheie com feijão + queijo + salsa. Os 10 recheios mais populares no México: al pastor, carnitas, barbacoa, bistec, chorizo, suadero, cochinita, birria, camarão e pollo. QUESADILLAS — Tortilla no comal, espalhe queijo Oaxaca desfiado, dobre ao meio, asse até dourar e o queijo derreter (2 min cada lado). Sirva com guacamole e pico de gallo.",
      "📘 Módulo 5 — Temperos Essenciais: COMINHO — sabor terroso, use em feijão e carnes (½ colher por porção). ORÉGANO MEXICANO — mais cítrico e intenso que o comum (troque 1:1 se não encontrar). CHILE ANCHO EM PÓ — doce e defumado, base de adobos. EPAZOTE — erva forte, use com parcimônia em feijão e quesadillas (1-2 folhas). Regra: torre especiarias secas 30s no comal para intensificar aroma antes de usar.",
      "📘 Módulo 6 — Prática Final: Monte a mesa com tudo: tortillas em tortillero (ou pano), salsas em molcajetes ou bowls, arroz e feijão em panelas de barro. Decore com bandeirolas coloridas (papel picado). Disponha tudo no centro para que cada pessoa monte seus tacos. Acompanhe com água de horchata (1 xíc arroz + canela + açúcar + leite, batido e coado) ou limonada com chia.",
      "🏆 Completou? Você dominou as bases! Avance para o Curso Intermediário."
    ],
    difficulty: "Fácil", time: "6 módulos (12h)", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "🎯 DESAFIO completo para iniciantes! Prepare um jantar mexicano do zero — tortillas, salsas, arroz, feijão e montagem de tacos." },

  { id: "curso-intermediario", name: "🎓 Desafio: Culinária Intermediária", category: "Escola Mexicana", image: "curso-intermediario",
    ingredients: ["Tortillas de milho (24 und)", "Frango (1kg)", "Tomatillo (500g)", "Chile poblano (6 und)", "Creme ácido (400ml)", "Queijo gratinado", "Banha de porco (500g)", "Pernil suíno (2kg)", "Laranja (4 und)", "Chiles secos: ancho, guajillo, mulato, pasilla", "Amendoim (100g)", "Chocolate amargo (50g)", "Folha de bananeira", "Masa harina (1kg)"],
    steps: [
      "🎯 DESAFIO: Prepare um banquete mexicano intermediário com 6 preparações completas!",
      "📘 Módulo 1 — Enchiladas com 3 Molhos: ROJAS — Hidrate 4 chiles guajillo + 2 ancho em água quente 20 min, bata com 1 dente de alho e sal. Frite no óleo 3 min. Passe tortillas no molho, recheie com frango desfiado, enrole. VERDES — Cozinhe 500g tomatillos + 2 serranos + ½ cebola 10 min, bata com coentro. Monte igual. SUIZAS — Use molho verde + 200ml creme ácido + queijo gratinado por cima, leve ao forno 200°C por 15 min até gratinar e borbulhar.",
      "📘 Módulo 2 — Tamales de Frango: Bata 500g masa harina + 200g banha (batida até flutuar em água) + caldo de frango até massa macia. Espalhe 3 col de masa na folha de milho (deixe borda), coloque frango desfiado em salsa verde no centro, feche dobrando lados e base. Cozinhe em vapor em panela grande com moedas no fundo (param de tilintar = sem água) por 1h. O tamal está pronto quando a massa descola da folha.",
      "📘 Módulo 3 — Carnitas Estilo Michoacán: Corte 2kg de pernil em cubos grandes. Em panela funda, derreta 500g de banha, adicione carne + suco de 4 laranjas + 1 xíc de leite + 4 dentes de alho + sal. Cozinhe em fogo baixo por 3h sem tampar. A carne vai cozinhar no líquido e depois fritar na gordura. Desfie quando dourada. O segredo é não mexer demais. Sirva em tortillas com cebola, coentro e salsa verde.",
      "📘 Módulo 4 — Mole Simplificado (12 ingredientes): Torre no comal: 3 chiles ancho + 2 guajillo + 1 pasilla (15s cada lado). Hidrate 20 min. Frite em óleo: 2 tomates, ½ cebola, 3 alhos. Na mesma panela: 50g amendoim + 1 tortilla velha + cravo + canela + pimenta. Bata tudo com a água dos chiles. Frite a pasta no óleo 5 min, adicione caldo até engrossar. Final: 30g chocolate amargo + sal. Cozinhe 15 min.",
      "📘 Módulo 5 — Chiles Rellenos: Asse 6 poblanos direto na chama do fogão girando com pinça até a pele ficar preta por completo. Coloque em saco plástico 10 min (vapor solta a pele). Descasque sob água corrente com cuidado para não rasgar. Faça corte lateral, retire sementes e veias. Recheie com queijo Oaxaca. Empanado: passe em farinha, depois em claras batidas em neve com pitada de sal. Frite em óleo quente (180°C) até dourar. Sirva com caldillo de tomate (tomate batido frito com cebola).",
      "📘 Módulo 6 — Cardápio para 12 Pessoas: ENTRADA — Guacamole + totopos + sopa de tortilla. PRINCIPAL — Enchiladas suizas + carnitas + arroz mexicano + feijão. SOBREMESA — Flan mexicano. CRONOGRAMA — Véspera: mole, feijão, flan. Manhã: carnitas (3h), arroz. 1h antes: enchiladas, salsas. 30 min: tortillas frescas. Calcule 300g proteína + 100g arroz + 100g feijão por pessoa.",
      "🏆 Completou? Você cozinha como um chef! Pronto para o Avançado?"
    ],
    difficulty: "Médio", time: "6 módulos (18h)", spiceLevel: 1, tags: ["suave"],
    description: "🎯 DESAFIO intermediário completo! Enchiladas com 3 molhos, tamales, carnitas michoacanas, mole e chiles rellenos." },

  { id: "curso-avancado", name: "🎓 Desafio: Culinária Avançada", category: "Escola Mexicana", image: "curso-avancado",
    ingredients: ["Chiles: negro, mulato, chipotle, ancho, guajillo, pasilla (30+ und)", "Achiote em pasta (200g)", "Laranja amarga (6 und)", "Folha de bananeira", "Pernil suíno (3kg)", "Borrego/carneiro (2kg)", "Pencas de maguey", "Carne para birria (2kg)", "Milho para nixtamal (1kg)", "Cal virgem (50g)", "Nozes de Castela (500g)", "Romã (4 und)", "Frutas cristalizadas", "Tequila reposado", "Mezcal artesanal"],
    steps: [
      "🎯 DESAFIO SUPREMO: Os pratos mais complexos do México. Cada módulo é um projeto de 1-3 dias!",
      "📘 Módulo 1 — Mole Negro Oaxaqueño (3 dias): DIA 1 — Torre até ficarem PRETOS (não queimados): 6 chiles chilhuacle negro + 4 mulato + 4 pasilla. Separado: torre 1 tortilla até virar carvão + 1 pedaço de pão até preto. Hidrate tudo em água quente 2h. DIA 2 — Frite separadamente: 100g amendoim + 50g gergelim + passas + amêndoas + cravo + canela + pimenta jamaicana + orégano + tomilho + 4 tomates + cebola + 6 alhos. Bata tudo em partes com a água dos chiles. DIA 3 — Frite a pasta em banha por 30 min mexendo sem parar. Adicione caldo de peru aos poucos (2L). Junte 100g chocolate + folha de aguacate + sal. Cozinhe 2h fogo baixo. Deve ficar negro-avermelhado e brilhante.",
      "📘 Módulo 2 — Cochinita Pibil Autêntica: PASTA DE ACHIOTE CASEIRA — Torre 100g sementes de achiote 1 min, moa no moedor. Misture com 8 dentes alho assados + suco de 6 laranjas amargas (ou 4 laranjas + 2 limões) + cominho + pimenta + orégano + sal. PREPARO — Marine 3kg pernil na pasta 12h refrigerado. Forre assadeira com folhas de bananeira (passe na chama para flexibilizar), coloque a carne, feche bem. Asse a 160°C por 5h até desmanchar. Desfie e sirva em tortillas com cebola roxa curtida (cebola + vinagre + orégano + sal, 2h).",
      "📘 Módulo 3 — Barbacoa e Birria: BARBACOA — Marine 2kg borrego com chiles guajillo+ancho hidratados e batidos + alho + cominho. Envolva em folhas de maguey (ou alumínio). Cozinhe em vapor sobre água com grão de bico por 8h em fogo baixo. BIRRIA — Hidrate 6 guajillo + 4 ancho + 2 cascabel. Bata com tomate + cebola + alho + especiarias. Marine 2kg carne 4h. Cozinhe em panela com caldo por 4h fogo baixo até desmanchar. Sirva o consomé com cebola, coentro e limão. Para tacos de birria: mergulhe tortilla no consomé com gordura, frite na chapa e recheie.",
      "📘 Módulo 4 — Chiles en Nogada: PICADILLO — Frite 500g carne moída + cebola + alho. Adicione 2 tomates + frutas: maçã picada, pêssego, pêra, banana macho + passas + amêndoas + acitron (ou frutas cristalizadas) + canela + cravo + sal + açúcar. Cozinhe 25 min. Recheie poblanos assados e descascados. NOGADA PERFEITA — Remova pele de 300g nozes de Castela (escalde 5 min). Bata com 200g queijo de cabra fresco + 100ml leite + 50ml jerez + sal + canela. Deve ficar branca e cremosa. Cubra os chiles, decore com romã e salsa verde. As 3 cores da bandeira mexicana!",
      "📘 Módulo 5 — Nixtamalização: Ferva 2L água + 50g cal virgem. Quando dissolver, adicione 1kg milho lavado. Cozinhe 35 min. Desligue e deixe de molho 12h (o processo transforma a casca e libera nutrientes). Lave o milho 3x esfregando para remover a pele (nexayotl). Moa em moedor de carne com disco fino (ou processador com água). A masa deve ser lisa e macia. Faça tortillas: note a diferença — aroma mais intenso, flexibilidade superior, sabor incomparável vs masa harina.",
      "📘 Módulo 6 — Harmonização com Destilados: TEQUILA BLANCO — pratos de peixe, ceviche, aguachile (realça acidez). TEQUILA REPOSADO — tacos al pastor, carnitas, enchiladas (complementa gordura). MEZCAL JOVEN — mole negro, chapulines, tlayuda (defumação combina). MEZCAL AÑEJO — sobremesas, chocolate (suavidade). PULQUE NATURAL — antojitos de rua, tacos de canasta (tradição). Menu degustação: Entrada (ceviche + tequila blanco) → Principal (mole negro + mezcal espadin) → Sobremesa (chocolate + mezcal añejo).",
      "🏆 Completou? Você é um mestre da culinária mexicana! 🇲🇽"
    ],
    difficulty: "Avançado", time: "6 módulos (30h)", spiceLevel: 2, tags: ["picante", "intenso"],
    description: "🎯 DESAFIO SUPREMO! Mole negro de 3 dias, nixtamalização, chiles en nogada e harmonização com destilados." },

  { id: "tecnica-tortilla-pro", name: "🔥 Desafio: Tortilla Perfeita", category: "Escola Mexicana", image: "tecnica-tortilla",
    ingredients: ["Masa harina (500g)", "Milho para nixtamalizar (500g)", "Cal virgem (25g)", "Tortillera/prensa", "Comal de barro ou ferro", "Plástico grosso cortado", "Água morna"],
    steps: [
      "🎯 DESAFIO: Faça 20 tortillas que inflam no comal!",
      "📘 Prepare a Masa: 2 xícaras masa harina + 1¼ xícara água morna + ½ col sal. Amasse 5 min. Consistência de Play-Doh: deve formar bola sem rachar e sem grudar. Se rachar = mais água (1 col por vez). Se grudar = mais masa. Cubra com pano úmido para não secar. A masa fica melhor após descansar 15 min.",
      "📘 Prensa e Técnica: Forre a prensa com plástico grosso cortado em 2 círculos. Bolinha de 35g (tamanho de bola de golfe), centralize na prensa. Pressão firme e uniforme — não esmague demais (2mm de espessura ideal). Se não tiver prensa: use tábua de corte + panela pesada, ou duas tábuas. Alternativa: abra com rolo entre 2 plásticos. Descole devagar do plástico — se grudar, a masa está úmida demais.",
      "📘 Comal e o Segredo de Inflar: Aqueça o comal em fogo médio-alto (teste: gotas d'água evaporam em 2s). SEM ÓLEO. Coloque a tortilla: 30s → vire com espátula → 1 min (deve começar a formar bolhas) → vire novamente → 30s (DEVE INFLAR como balão!). Se não infla: comal pouco quente, masa muito grossa ou muito seca, ou você apertou demais na segunda virada. Tortilla pronta é flexível e tem manchas douradas.",
      "📘 Variações de Milho: AZUL — sabor mais terroso e adocicado, cor roxa-azulada linda, ideal para quesadillas. BRANCO — mais neutro e versátil, o mais comum no México. AMARELO — mais doce, comum nos EUA (masa harina Maseca). Experimente misturar milhos para sabores únicos. Tortillas de milho fresco (verde) são mais úmidas e delicadas.",
      "🏆 Todas inflaram? Você dominou a arte ancestral da tortilla!"
    ],
    difficulty: "Médio", time: "4h", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: Domine a tortilla perfeita! Masa, prensa, comal e o segredo para inflar." },

  { id: "tecnica-molhos-salsas", name: "🔥 Desafio: 10 Salsas em 1 Dia", category: "Escola Mexicana", image: "tecnica-salsa",
    ingredients: ["Tomate (1kg)", "Tomatillo (500g)", "Chiles: ancho, guajillo, chipotle, habanero, serrano, de árbol", "Molcajete", "Liquidificador", "Coentro fresco", "Alho e cebola", "Amendoim (100g)", "Mango maduro (2 und)", "Óleo vegetal"],
    steps: [
      "🎯 DESAFIO: 10 salsas diferentes em um dia!",
      "📘 Salsa 1 — Pico de Gallo: 4 tomates + ½ cebola + 2 col coentro + 1 jalapeño + suco de 1 limão + sal. Tudo em cubos de 5mm uniformes. Não bata — é salsa crua cortada à mão.",
      "📘 Salsa 2 — Roja Asada: Asse no comal até carbonizar: 4 tomates + 2 chiles guajillo + 1 ancho + 3 alhos com casca + ½ cebola. O ponto ideal: pele preta com bolhas, polpa macia (15-20 min girando). Bata no molcajete ou liquidificador com sal. Textura rústica.",
      "📘 Salsa 3 — Verde Crua: Cozinhe 500g tomatillos + 3 serranos em água 8 min. Bata com ½ xíc coentro + ½ cebola + 1 alho + sal. Deve ficar verde vibrante. Se quiser mais picante, adicione os serranos com sementes.",
      "📘 Salsa 4 — Macha Veracruzana: Frite em ½ xíc óleo: 10 chiles de árbol + 5 chiles morita + 50g amendoim + 3 alhos (2 min fogo médio, não queime). Bata grosseiramente — deve ter pedaços. Volte ao óleo, adicione sal e vinagre (1 col). Conserva por meses na geladeira.",
      "📘 Salsas 5-10: 5) GUACAMOLE clássico (ver módulo básico). 6) HABANERO-MANGO — 3 habaneros assados + 1 mango + vinagre + sal (use luvas!). 7) BORRACHA — 4 pasilla tostados + suco de laranja + pulque ou cerveja + queijo fresco. 8) MORITA DEFUMADA — 8 moritas hidratadas + tomate + alho, bata rústica. 9) CHIPOTLE CREMOSO — 1 lata chipotles em adobo + 200ml creme ácido + limão. 10) MOLE RÁPIDO — 3 ancho + 2 guajillo hidratados + amendoim + chocolate + tortilla frita, bata e frite 10 min.",
      "🏆 Fez as 10? Mestre das salsas! Monte uma degustação com totopos frescos e identifique cada salsa com uma plaquinha."
    ],
    difficulty: "Médio", time: "5h", spiceLevel: 2, tags: ["picante"],
    description: "🎯 DESAFIO: 10 salsas mexicanas em 1 dia! Do pico de gallo ao mole rápido — receitas completas." },

  { id: "uso-pimentas-pro", name: "🌶️ Desafio: Mestre das Pimentas", category: "Escola Mexicana", image: "uso-pimentas",
    ingredients: ["Chile ancho (seco, doce, suave — SHU 1.500)", "Chile guajillo (seco, frutado — SHU 5.000)", "Chile chipotle (jalapeño defumado — SHU 8.000)", "Chile habanero (fresco, floral, MUITO picante — SHU 300.000)", "Chile serrano (fresco, verde, picante — SHU 15.000)", "Chile poblano (fresco, grande, suave — SHU 1.500)", "Chile pasilla (seco, escuro, terroso — SHU 2.500)", "Chile de árbol (seco, fino, ardido — SHU 30.000)", "Chile cascabel (seco, redondo, esfumaçado — SHU 3.000)", "Chile morita (chipotle pequeno — SHU 10.000)"],
    steps: [
      "🎯 DESAFIO: Identifique, tueste e cozinhe com 10 chiles!",
      "📘 Identificação e Perfil: Organize os 10 chiles e anote: ANCHO — chile poblano seco, cor marrom-avermelhada, doce com notas de frutas secas, base de moles. GUAJILLO — longo, pele lisa, frutado e levemente ácido, mais usado no México. CHIPOTLE — jalapeño defumado, cor escura, sabor profundo e defumado. HABANERO — pequeno lanterna, laranja/vermelho, floral e extremamente picante. SERRANO — fino verde, picante direto, para salsas cruas. POBLANO — grande, escuro, suave, para rechear (chiles rellenos). PASILLA — longo escuro quase preto, terroso, para mole negro. ÁRBOL — fino vermelho, picante e decorativo. CASCABEL — redondo, sementes chacoalham, sabor amadeirado. MORITA — chipotle menor, mais defumado.",
      "📘 Torra: Comal em fogo médio. Chiles SECOS: pressione com espátula 15-30s cada lado até ficarem flexíveis, mudarem de cor levemente e soltarem aroma. NÃO QUEIME — chile queimado fica amargo e arruina o prato. Chiles FRESCOS (poblano, serrano, habanero): asse na chama direta ou comal quente, girando, até a pele ficar preta. Poblano: ensaque para descascar. Serrano/habanero: use direto.",
      "📘 Hidratação: Após torrar os secos, cubra com água quente (não fervente — 80°C). Tampe e espere 20-30 min até ficarem macios. GUARDE A ÁGUA — é ouro líquido! Use como base de molhos (tem sabor e cor). Chiles maiores (ancho, guajillo) = 30 min. Menores (árbol, morita) = 15 min.",
      "📘 3 Preparos Clássicos: ADOBO ROJO — 4 ancho + 3 guajillo + 2 pasilla hidratados + 2 tomates assados + 4 alhos + cominho + orégano + vinagre. Bata, frite 5 min. Marine carnes 4h. TINGA — Frite cebola, adicione 3 chipotles em adobo + 4 tomates batidos. Junte frango desfiado. Cozinhe 15 min. SALSA HABANERO — 4 habaneros assados + mango ou cenoura cozida + vinagre + sal. Use COM LUVAS. As 5 combinações clássicas: 1) Ancho+guajillo (enchiladas), 2) Chipotle+tomate (tinga), 3) Guajillo+árbol (salsa de mesa), 4) Ancho+pasilla+mulato (mole), 5) Habanero+cítricos (yucateco).",
      "📘 Equilíbrio de Sabor: Muito picante? Adicione: creme ácido, queijo, abacate (gordura neutraliza capsaicina), açúcar/piloncillo, ou mais tomate. NUNCA adicione água — dilui sabor sem reduzir ardência. Escala de construção: comece com chiles suaves (ancho, poblano), adicione médios (guajillo, chipotle), finalize com picantes (serrano, árbol). Habanero: use com extrema parcimônia.",
      "🏆 Usou todos os 10? Mestre das Pimentas! 🌶️"
    ],
    difficulty: "Médio", time: "6h", spiceLevel: 3, tags: ["picante", "intenso"],
    description: "🎯 DESAFIO: Domine 10 chiles mexicanos! Perfil de sabor, torra, hidratação e combinações clássicas." },

  { id: "fermentacoes-mex", name: "🔥 Desafio: Fermentações Ancestrais", category: "Escola Mexicana", image: "tecnica-fermentacao",
    ingredients: ["Cascas de 2 abacaxis grandes", "Piloncillo (300g)", "Cravo (6 und) e canela (2 paus)", "Chiles jalapeños frescos (500g)", "Vinagre branco (500ml)", "Cenoura (3 und) e cebola (2 und)", "Sal grosso sem iodo", "Tomate (500g)", "Chile habanero (3 und)", "Alho (1 cabeça)"],
    steps: [
      "🎯 DESAFIO: 3 fermentações em 7 dias!",
      "📘 Tepache (Dias 1-3): Lave bem as cascas de 2 abacaxis (use orgânico se possível). Coloque em jarro de vidro grande (3L) com 2L de água + 300g piloncillo + 2 paus de canela + 6 cravos. Tampe com pano e elástico (não feche hermeticamente — precisa respirar). Deixe em temperatura ambiente (25-30°C ideal). Dia 1: nada visível. Dia 2: espuma branca começa — é normal e desejável! São as leveduras naturais. Dia 3: prove — deve estar levemente ácido e efervescente. Se muito doce, espere +1 dia. Coe e refrigere. A espuma branca superficial é OK; mofo preto, rosa ou verde = descarte tudo.",
      "📘 Chiles Curtidos en Escabeche (Dias 1-5): Corte 500g jalapeños em rodelas de 5mm. Fatie 3 cenouras e 2 cebolas em rodelas. Ferva 500ml vinagre + 250ml água + 2 col sal + orégano + pimenta + 3 alhos + folha de louro. Coloque os vegetais em potes de vidro esterilizados (ferva 10 min). Despeje o líquido fervente sobre os vegetais até cobrir. Feche. Dia 1-2: os sabores começam a fundir. Dia 3-5: jalapeños ficam levemente macios e o sabor é equilibrado. Refrigerados duram 6+ meses. Servem como acompanhamento de qualquer prato mexicano.",
      "📘 Salsa Lacto-Fermentada (Dias 1-7): Pique 500g tomate + 3 habaneros + 6 alhos + ½ cebola. Misture com sal a 3% do peso total (ex: 500g vegetais = 15g sal). NÃO use sal iodado — mata as bactérias boas. Coloque em pote de vidro, pressione para submergir no líquido (use um saquinho com salmoura como peso). Tampe frouxo. Dia 1-2: bolhas começam. Dia 3-4: aroma ácido agradável. Dia 5-7: sabor complexo, ácido e picante. Prove diariamente — refrigere quando atingir o sabor desejado.",
      "📘 Segurança: SEMPRE esterilize potes (água fervente 10 min). Use vegetais frescos sem machucados. Mantenha tudo submerso no líquido. Espuma/bolhas brancas = fermentação normal. DESCARTE se: mofo preto, rosa ou verde; cheiro podre (diferente de ácido); textura viscosa/gosma. Na dúvida, descarte. Fermentação segura = cheiro ácido agradável.",
      "🏆 Completou as 3? Dominou técnicas de conservação de 2.000 anos!"
    ],
    difficulty: "Médio", time: "3-7 dias", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: 3 fermentações ancestrais em 7 dias! Tepache, escabeche e salsa lacto-fermentada." },

  { id: "processos-tradicionais", name: "🔥 Desafio: Utensílios Ancestrais", category: "Escola Mexicana", image: "tecnica-artesanal",
    ingredients: ["Molcajete de pedra vulcânica", "Arroz cru (para curar)", "Tomate (4 und)", "Chile serrano (3 und)", "Alho (4 dentes)", "Sal grosso", "Chocolate mexicano em tablilla (2 und)", "Molinillo de madeira", "Leite quente (1L)", "Comal de barro ou ferro"],
    steps: [
      "🎯 DESAFIO: Cozinhe com 3 utensílios ancestrais mexicanos!",
      "📘 Molcajete — Curar e Usar: CURAR (1ª vez) — Moa arroz cru no molcajete por 15 min até o arroz sair branco (não cinza). Repita 3-4 vezes até o arroz não mudar de cor — isso remove poeira de pedra. Lave sem sabão. SALSA NO MOLCAJETE — Ordem importa: 1º moa sal grosso + 1 alho (faz pasta abrasiva). 2º adicione 3 chiles serrano assados, moa. 3º adicione 4 tomates assados, macere (não triture — queremos textura). O sabor é MUITO superior ao liquidificador porque a pedra vulcânica libera bolhas de ar na salsa. Nunca lave com sabão — absorve. Limpe com escova e água.",
      "📘 Molinillo — Chocolate Espumante: Pique 2 tablillas de chocolate mexicano. Aqueça 1L leite até quase ferver (pequenas bolhas na borda). Dissolva o chocolate mexendo. Insira o molinillo no leite, segure o cabo entre as palmas abertas e gire rápido (como acender fogo com palitos) por 3-5 min até formar espuma densa e cremosa no topo. O molinillo cria uma espuma que nenhum batedor moderno replica — é a aeração perfeita. Sirva em caneca de barro. Variação: adicione canela, chile ancho em pó (pitada) ou baunilha.",
      "📘 Comal — Técnica de Tatear: PREPARAR COMAL NOVO — Barro: lave, seque ao sol, unte com óleo, aqueça gradualmente 30 min (choque térmico racha). Ferro: lave, seque no fogo, unte com óleo e aqueça até parar de fumar, repita 3x. TATEAR (assar no comal) — Tomates: coloque inteiros no comal quente, gire com pinça a cada 3 min até a pele ficar preta por todos os lados (15-20 min). Chiles secos: 15-30s cada lado com espátula, ficam flexíveis e aromáticos. Cebola: corte ao meio, lado cortado para baixo, 10 min até carbonizar. Alho: com casca, 8 min girando. Tudo tatemado junto = base de qualquer salsa mexicana autêntica.",
      "🏆 Usou os 3? Cozinhou como há 3.000 anos! Estes utensílios não são decoração — são tecnologia mesoamericana."
    ],
    difficulty: "Médio", time: "4h", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: Domine molcajete, molinillo e comal — utensílios e técnicas milenares completas!" },

  { id: "conservacao-alimentos", name: "🔥 Desafio: Conservação Mexicana", category: "Escola Mexicana", image: "conservacao-alimentos",
    ingredients: ["Chiles variados frescos (500g)", "Carne bovina magra corte fino (1kg)", "Sal grosso (1kg)", "Chiles jalapeños frescos (500g)", "Vinagre branco (1L)", "Orégano, louro, pimenta", "Cenoura e cebola"],
    steps: [
      "🎯 DESAFIO: 3 técnicas de conservação ancestrais mexicanas!",
      "📘 Desidratar Chiles: Lave e seque os chiles frescos (jalapeño, serrano, habanero). MÉTODO FORNO — Coloque em grade no forno a 80°C com porta entreaberta (circulação de ar essencial). Gire a cada 1h. Tempo: jalapeño 4-6h, habanero 3-4h, ancho 6-8h. Ponto certo: flexíveis como couro, sem partes úmidas, mas não quebradiços. Se quebradiços, passou do ponto. MÉTODO SOL — Pendure em cordão ou espalhe em tela, cubra com tule (contra insetos), 3-5 dias de sol direto. Chile jalapeño seco = chile seco. Chile jalapeño seco E defumado = chipotle! Para defumar: use serragem de madeira em churrasqueira fechada, 4h a 80°C. Armazene em pote de vidro em local seco — duram 1 ano.",
      "📘 Cecina (Salga Estilo Yecapixtla): Corte 1kg carne bovina em fatias finíssimas (3mm — peça ao açougueiro ou congele parcialmente para fatiar). Cubra generosamente com sal grosso dos dois lados. Empilhe as fatias intercalando com sal. Refrigere 24h. Lave o excesso de sal, tempere com chile guajillo em pó + limão. Estenda em varal ou grade e seque: SOL — 2-3 dias (recolha à noite). FORNO — 60°C por 8h porta entreaberta. A cecina pronta é seca mas flexível, vermelha-escura. Asse rapidamente no comal para servir. Refrigerada dura 2-3 semanas. É a charcutaria mexicana original.",
      "📘 Escabeche Mexicano Clássico: Corte 500g jalapeños em rodelas + 3 cenouras + 2 cebolas + 6 alhos. SALMOURA — Ferva 500ml vinagre + 250ml água + 3 col sal + 2 folhas louro + 1 col orégano + 10 pimentas + 3 cravos + 1 pau canela. Coloque vegetais em potes de vidro esterilizados (ferva potes 10 min, seque no forno). Despeje a salmoura FERVENTE até cobrir. Feche imediatamente. Inverta o pote 5 min (cria vácuo). Durabilidade: 6 meses refrigerado, 1 ano em pote com vácuo adequado. Para presente: decore com etiqueta e fita — tradição mexicana de dar conservas.",
      "📘 Durabilidade e Segurança: Chiles secos = 1 ano em local seco e escuro. Escabeche = 6-12 meses lacrado, 1 mês após abrir. Cecina = 2-3 semanas refrigerada. SINAIS DE ALERTA: mofo, cheiro amoniacal, textura viscosa = descarte. Use sempre potes de vidro esterilizados, nunca plástico para conservas ácidas.",
      "🏆 Dominou as 3? Preservação como os mesoamericanos!"
    ],
    difficulty: "Médio", time: "5h + dias de espera", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: Desidratar, salgar e conservar — 3 técnicas ancestrais mexicanas completas!" },

  { id: "producao-artesanal", name: "🔥 Desafio: Produtor Artesanal", category: "Escola Mexicana", image: "producao-artesanal",
    ingredients: ["Cacau em nibs ou grãos (300g)", "Piloncillo (200g)", "Canela em pau (3 und)", "Leite fresco inteiro (4L)", "Ácido cítrico ou suco de limão", "Coalho (1 pastilha)", "Carne de porco pernil (1kg)", "Gordura suína (200g)", "Chiles ancho secos (6 und)", "Chiles guajillo secos (4 und)", "Vinagre de maçã", "Cominho, orégano, pimenta, cravo"],
    steps: [
      "🎯 DESAFIO: 3 produtos artesanais mexicanos do zero!",
      "📘 Chocolate Mexicano Artesanal: Torre 300g nibs de cacau no forno a 130°C por 25 min (mexa a cada 10 min, aroma intenso = pronto). Se usar grãos inteiros, quebre e remova cascas após torrar. Moa no processador até virar pasta (15-20 min em etapas — vai de farinha → granulado → pasta oleosa). Adicione 200g piloncillo ralado + 2 paus de canela moídos + pitada de chile ancho em pó (opcional). Misture bem. Molde em formas ou enrole em cilindros com papel manteiga. Refrigere 2h. Para usar: derreta 50g em 250ml leite quente + bata com molinillo. Dura 3 meses na geladeira.",
      "📘 Chorizo Mexicano Caseiro: Hidrate 6 chiles ancho + 4 guajillo em água quente 20 min. Bata com 4 alhos + 3 col vinagre + 1 col cominho + 1 col orégano + ½ col pimenta preta + 4 cravos + ½ col canela + sal. Misture 1kg carne de porco moída (pernil) + 200g gordura suína picada + a pasta de chiles. Amasse bem com as mãos. DESCANSO CRUCIAL: refrigere 24h mínimo (48h ideal) — os sabores se fundem. Para embutir: use tripa natural ou forme bolinhas/linguiças sem tripa. Frite esfarelando na frigideira até dourar e a gordura ficar vermelha. Proporção ideal: 70% carne magra + 30% gordura. Dura 5 dias refrigerado, 3 meses congelado.",
      "📘 Queijo Oaxaca Caseiro: Aqueça 4L leite fresco inteiro a 35°C. Dissolva ¼ pastilha de coalho em 2 col água fria + adicione 2 col ácido cítrico (ou suco de 2 limões) diluído em água. Misture ao leite, mexa 1 min, cubra e espere 30-40 min (a coalhada deve estar firme como gelatina ao cortar com faca). Corte em cubos de 2cm, aqueça lentamente a 42°C mexendo devagar. Escorra o soro (guarde para outras receitas). PONTO DE ESTICAR: aqueça a coalhada em água a 70°C até ficar elástica. Estique como mozzarella — deve formar fios longos sem quebrar. Se quebra: água mais quente. Enrole em bola ou novelo. Guarde em soro frio. Dura 1 semana refrigerado.",
      "📘 Precificação para Venda: Custo de ingredientes + 30% (gás, água, embalagem) = custo total. Preço de venda = custo total × 2 a 2,5. Exemplo: chocolate que custou R$20 em ingredientes → custo total R$26 → venda por R$52-65. Embale com identidade visual e história do produto. Mercados locais, feiras e Instagram são os melhores canais iniciais.",
      "🏆 Produziu os 3? Verdadeiro artesão mexicano! Cada produto carrega milênios de tradição."
    ],
    difficulty: "Avançado", time: "8h", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: Chocolate, chorizo e queijo Oaxaca — 3 produtos artesanais mexicanos do zero!" },

  // ============ MAIS MOLHOS & SALSAS ============
  { id: "molho-apimentado-habanero", name: "Molho Extra Picante de Habanero", category: "Molhos & Salsas", image: "molho-habanero",
    ingredients: ["10 chiles habanero", "Mango maduro", "Vinagre", "Sal", "Cebola roxa", "Alho"],
    steps: ["Asse os habaneros na chapa.", "Descasque e pique o mango.", "Bata habaneros com mango, vinagre e alho.", "Adicione sal a gosto.", "Coe se desejar textura lisa.", "ATENÇÃO: use luvas ao manusear habaneros."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 3, tags: ["picante", "intenso"],
    description: "Molho extremamente picante de habanero com mango — doçura tropical que intensifica a ardência." },

  { id: "molho-suave-aguacate", name: "Molho Suave de Abacate e Tomatillo", category: "Molhos & Salsas", image: "molho-aguacate",
    ingredients: ["2 abacates maduros", "4 tomatillos", "Coentro", "Cebola", "Limão", "Creme ácido", "Sal"],
    steps: ["Cozinhe tomatillos por 5 min.", "Bata com abacate e coentro.", "Adicione creme ácido e limão.", "Tempere com sal.", "A textura deve ser cremosa.", "Perfeito para quem não gosta de picante."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Molho cremoso e suave de abacate — perfeito para crianças e quem prefere sem ardência." },

  { id: "molho-defumado-chipotle", name: "Molho Defumado de Chipotle", category: "Molhos & Salsas", image: "molho-chipotle",
    ingredients: ["1 lata de chipotles em adobo", "Maionese", "Creme ácido", "Limão", "Alho", "Sal"],
    steps: ["Bata chipotles com maionese e creme.", "Adicione alho e limão.", "Tempere com sal.", "A textura deve ser cremosa e homogênea.", "Sirva como dipping sauce.", "O sabor defumado combina com tudo."],
    difficulty: "Fácil", time: "5 min", spiceLevel: 2, tags: ["picante", "defumado"],
    description: "Molho cremoso com o sabor defumado icônico do chipotle — jalapeño seco e defumado." },

  // ============ MAIS SOPAS ============
  { id: "caldo-camaron", name: "Caldo de Camarón", category: "Sopas & Caldos", image: "caldo-camaron",
    ingredients: ["500g de camarões", "Chile guajillo", "Chile ancho", "Tomate", "Cebola", "Alho", "Batata", "Cenoura", "Chipotle"],
    steps: ["Cozinhe cascas de camarão para caldo.", "Hidrate e bata chiles com tomate.", "Frite a salsa e adicione o caldo.", "Adicione batata e cenoura.", "Quando macios, adicione os camarões.", "Cozinhe 3-4 min e sirva com limão e crackers."],
    difficulty: "Médio", time: "45 min", spiceLevel: 2, tags: ["picante"],
    description: "Caldo vermelho de camarão — reconfortante e picante. Especialidade da Quaresma mexicana." },

  { id: "caldo-tlalpeno", name: "Caldo Tlalpeño", category: "Sopas & Caldos", image: "caldo-tlalpeno",
    ingredients: ["Frango desfiado", "Grão de bico", "Chile chipotle", "Cenoura", "Abobrinha", "Cebola", "Alho", "Queijo panela", "Abacate"],
    steps: ["Prepare caldo de frango aromático.", "Adicione grão de bico, cenoura e abobrinha.", "Junte chipotles para sabor defumado.", "Adicione frango desfiado.", "Sirva com cubos de queijo panela.", "Finalize com abacate e limão."],
    difficulty: "Fácil", time: "40 min", spiceLevel: 2, tags: ["picante", "defumado"],
    description: "Caldo originário de Tlalpan, sul da CDMX — com grão de bico, chipotle e queijo panela." },

  // ============ MAIS SOBREMESAS ============
  { id: "helado-nieve", name: "Nieves de Oaxaca", category: "Sobremesas", image: "nieves-oaxaca",
    ingredients: ["Leche quemada", "Tuna (fruta de cacto)", "Mango", "Limão", "Leite", "Açúcar"],
    steps: ["Nieves são sorvetes artesanais de Oaxaca.", "Leche quemada: leite caramelizado lentamente.", "Tuna: fruta do cacto batida com açúcar.", "Prepare a base e congele mexendo a cada 30 min.", "A textura deve ser cremosa sem cristais.", "Tradição dos 'nieveros' que vendem nas praças."],
    difficulty: "Médio", time: "2h + congelamento", spiceLevel: 0, tags: ["não picante"],
    description: "Sorvetes artesanais de Oaxaca com sabores únicos — leche quemada, tuna e mango." },

  { id: "mazapan", name: "Mazapán Mexicano", category: "Sobremesas", image: "mazapan",
    ingredients: ["2 xícaras de amendoim torrado", "1 xícara de açúcar de confeiteiro", "Pitada de sal"],
    steps: ["Moa o amendoim até virar pó fino.", "Misture com açúcar de confeiteiro.", "A mistura deve grudar quando prensada.", "Prense em moldes ou faça discos.", "O mazapán deve desmanchar na boca.", "Não precisa de forno — é cru."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 0, tags: ["não picante"],
    description: "Doce mexicano de amendoim que desmancha na boca — 2 ingredientes e pura nostalgia." },
];
