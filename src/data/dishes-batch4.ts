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
    ingredients: ["Tortillas de milho e trigo", "Feijão refrito", "Arroz mexicano vermelho", "Guacamole fresco", "Pico de gallo", "Salsa roja caseira", "Quesadillas de queijo", "Tacos simples montados"],
    steps: [
      "🎯 DESAFIO: Prepare um jantar mexicano completo para 4 pessoas seguindo os 6 módulos abaixo. Use a IA como seu sous-chef — pergunte receitas detalhadas, tire dúvidas de técnica e peça substituições de ingredientes!",
      "📘 Módulo 1 — Tortillas Artesanais: Faça tortillas de milho com masa harina (2 xíc masa + 1¼ xíc água morna). Amasse até consistência de Play-Doh, prense na tortillera e asse no comal 30s de cada lado. 🤖 Peça à IA: 'Me ensine a fazer tortillas de milho passo a passo'.",
      "📘 Módulo 2 — Base de Feijão e Arroz: Feijão refrito com banha e cebola. Arroz mexicano: refogue com tomate batido, adicione caldo 2:1. 🤖 Peça à IA: 'Qual o segredo do arroz mexicano vermelho que não empapa?'.",
      "📘 Módulo 3 — Salsas Frescas: Guacamole (3 abacates + cebola + tomate + coentro + limão). Pico de gallo. Salsa roja (tomates e chiles assados). 🤖 Peça à IA: 'Me dê variações de guacamole com ingredientes diferentes'.",
      "📘 Módulo 4 — Montagem de Tacos e Quesadillas: Tortillas aquecidas + feijão + queijo derretido. 🤖 Peça à IA: 'Quais são os 10 recheios mais populares para tacos no México?'.",
      "📘 Módulo 5 — Temperos Essenciais: Cominho, orégano mexicano, chile ancho em pó e epazote. 🤖 Peça à IA: 'Explique a diferença entre orégano mexicano e comum'.",
      "📘 Módulo 6 — Prática Final: Monte a mesa completa e fotografe! 🤖 Peça à IA: 'Como montar uma mesa mexicana bonita?'.",
      "🏆 Completou? Você dominou as bases! Avance para o Curso Intermediário."
    ],
    difficulty: "Fácil", time: "6 módulos (12h)", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "🎯 DESAFIO para iniciantes! Prepare um jantar mexicano completo do zero. Use a IA como seu assistente — pergunte receitas, tire dúvidas e aprenda fazendo!" },

  { id: "curso-intermediario", name: "🎓 Desafio: Culinária Intermediária", category: "Escola Mexicana", image: "curso-intermediario",
    ingredients: ["Enchiladas verdes e rojas", "Chilaquiles com ovo", "Tamales de frango", "Carnitas de porco", "Mole simples (12 ingredientes)", "Chiles rellenos de queijo", "Sopa de tortilla", "Fajitas de carne"],
    steps: [
      "🎯 DESAFIO: Prepare um banquete mexicano intermediário! Use a IA para técnicas avançadas!",
      "📘 Módulo 1 — Enchiladas: Faça com 3 molhos (rojo, verde, suizas). 🤖 Peça à IA: 'Me ensine enchiladas suizas autênticas'.",
      "📘 Módulo 2 — Tamales: Masa com banha batida + frango em salsa verde, vapor por 1h. 🤖 Peça à IA: 'Como saber se a masa dos tamales está no ponto?'.",
      "📘 Módulo 3 — Carnitas: Pernil em banha com laranja, 3h fogo baixo. 🤖 Peça à IA: 'Técnica de carnitas estilo Michoacán'.",
      "📘 Módulo 4 — Mole Simplificado: 12 ingredientes: chiles, tomate, amendoim, chocolate, especiarias. 🤖 Peça à IA: 'Receita de mole poblano para iniciantes'.",
      "📘 Módulo 5 — Chiles Rellenos: Asse poblanos, recheie com queijo, empane e frite. 🤖 Peça à IA: 'Como descascar chiles sem rasgar?'.",
      "📘 Módulo 6 — Cardápio para Eventos: Menu de 5 pratos. 🤖 Peça à IA: 'Monte cardápio mexicano para 12 pessoas com cronograma'.",
      "🏆 Completou? Você cozinha como um chef! Pronto para o Avançado?"
    ],
    difficulty: "Médio", time: "6 módulos (18h)", spiceLevel: 1, tags: ["suave"],
    description: "🎯 DESAFIO intermediário! Enchiladas, tamales, carnitas e mole. A IA é seu mentor pessoal!" },

  { id: "curso-avancado", name: "🎓 Desafio: Culinária Avançada", category: "Escola Mexicana", image: "curso-avancado",
    ingredients: ["Mole negro (30+ ingredientes)", "Cochinita pibil autêntica", "Barbacoa de borrego", "Birria de res", "Pozole rojo", "Chiles en nogada", "Milho nixtamalizado", "Mezcal para harmonização"],
    steps: [
      "🎯 DESAFIO SUPREMO: Os pratos mais complexos do México. Cada módulo é um projeto de 1-3 dias!",
      "📘 Módulo 1 — Mole Negro (3 dias): 6 tipos de chile, 30+ ingredientes. 🤖 Peça à IA: 'Guie-me no mole negro oaxaqueño dia por dia'.",
      "📘 Módulo 2 — Cochinita Pibil: Marinada de achiote 12h, folha de bananeira, 5h a 160°C. 🤖 Peça à IA: 'Como fazer pasta de achiote caseira?'.",
      "📘 Módulo 3 — Barbacoa e Birria: Borrego em maguey 8h / carne em chiles 4h. 🤖 Peça à IA: 'Diferença entre barbacoa e birria com receitas autênticas'.",
      "📘 Módulo 4 — Chiles en Nogada: Picadillo com frutas, nogada de nozes, romã. 🤖 Peça à IA: 'Chiles en nogada passo a passo — nogada perfeita'.",
      "📘 Módulo 5 — Nixtamalização: Milho + cal 12h, lave e moa. Tortillas com masa fresca. 🤖 Peça à IA: 'Processo químico da nixtamalização'.",
      "📘 Módulo 6 — Harmonização: Tequila, mezcal e pulque com cada prato. 🤖 Peça à IA: 'Menu degustação com harmonização de destilados'.",
      "🏆 Completou? Você é um mestre da culinária mexicana! 🇲🇽"
    ],
    difficulty: "Avançado", time: "6 módulos (30h)", spiceLevel: 2, tags: ["picante", "intenso"],
    description: "🎯 DESAFIO SUPREMO! Mole negro, nixtamalização, chiles en nogada. A IA é seu chef consultor!" },

  { id: "tecnica-tortilla-pro", name: "🔥 Desafio: Tortilla Perfeita", category: "Escola Mexicana", image: "tecnica-tortilla",
    ingredients: ["Masa harina", "Milho nixtamalizado", "Cal (hidróxido de cálcio)", "Tortillera/prensa", "Comal de barro ou ferro", "Plástico grosso", "Água morna"],
    steps: [
      "🎯 DESAFIO: Faça 20 tortillas que inflam no comal! Use a IA para resolver problemas.",
      "📘 Prepare a Masa: 2 xícaras masa harina + 1¼ xícara água morna. Consistência de Play-Doh. 🤖 Peça à IA: 'Masa rachando/grudando, o que faço?'.",
      "📘 Prensa: Bolinha de 35g, pressão uniforme, 2mm de espessura. 🤖 Peça à IA: 'Alternativas sem prensa de tortilla'.",
      "📘 Comal: 30s → vire → 1min → vire → 30s. Deve inflar! 🤖 Peça à IA: 'Tortillas não inflam, o que faço?'.",
      "📘 Variações: Milho azul, branco e amarelo. 🤖 Peça à IA: 'Diferença de sabor entre milhos'.",
      "🏆 Todas inflaram? Você dominou a arte ancestral da tortilla!"
    ],
    difficulty: "Médio", time: "4h", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: Tortillas que inflam no comal! Nixtamalização e prensa com a IA como guia." },

  { id: "tecnica-molhos-salsas", name: "🔥 Desafio: 10 Salsas em 1 Dia", category: "Escola Mexicana", image: "tecnica-salsa",
    ingredients: ["Tomate (1kg)", "Tomatillo (500g)", "Chiles: ancho, guajillo, chipotle, habanero, serrano, de árbol", "Molcajete", "Liquidificador", "Coentro fresco", "Alho e cebola", "Amendoim"],
    steps: [
      "🎯 DESAFIO: 10 salsas diferentes em um dia! A IA ajusta sabores.",
      "📘 Salsa 1 — Pico de Gallo: Tomate + cebola + jalapeño + coentro + limão em cubos.",
      "📘 Salsa 2 — Roja Asada: Asse tomates e chiles no comal, bata no molcajete. 🤖 Peça à IA: 'Ponto ideal para assar tomates'.",
      "📘 Salsa 3 — Verde: Tomatillos + serranos cozidos + coentro.",
      "📘 Salsa 4 — Macha: Chiles fritos em óleo + amendoim. 🤖 Peça à IA: 'Salsa macha veracruzana autêntica'.",
      "📘 Salsas 5-10: Guacamole, habanero-mango, borracha, morita, chipotle cremoso, mole rápido. 🤖 Peça à IA: 'Receitas das salsas 5 a 10 rápidas'.",
      "🏆 Fez as 10? Mestre das salsas! Monte degustação com totopos."
    ],
    difficulty: "Médio", time: "5h", spiceLevel: 2, tags: ["picante"],
    description: "🎯 DESAFIO: 10 salsas em 1 dia! Do pico de gallo ao mole rápido. A IA ajusta cada receita." },

  { id: "uso-pimentas-pro", name: "🌶️ Desafio: Mestre das Pimentas", category: "Escola Mexicana", image: "uso-pimentas",
    ingredients: ["Chile ancho", "Chile guajillo", "Chile chipotle", "Chile habanero", "Chile serrano", "Chile poblano", "Chile pasilla", "Chile de árbol", "Chile cascabel", "Chile morita"],
    steps: [
      "🎯 DESAFIO: Identifique, tueste e cozinhe com 10 chiles! A IA guia sabores.",
      "📘 Identificação: Organize e anote perfil de cada chile. 🤖 Peça à IA: 'Perfil de sabor dos 10 chiles principais'.",
      "📘 Torra: Comal 15-30s cada lado até flexíveis. Não queime! 🤖 Peça à IA: 'Como sei que está torrado certo?'.",
      "📘 Hidratação: Água quente (não fervente) 20-30 min. Guarde a água! 🤖 Peça à IA: 'Usos da água de hidratação'.",
      "📘 3 Preparos: Adobo (ancho+guajillo+pasilla), tinga (chipotle+tomate), salsa de habanero. 🤖 Peça à IA: '5 combinações clássicas de chiles'.",
      "📘 Equilíbrio: Doçura + acidez + defumação. 🤖 Peça à IA: 'Salsa muito picante, como equilibrar?'.",
      "🏆 Usou todos os 10? Mestre das Pimentas! 🌶️"
    ],
    difficulty: "Médio", time: "6h", spiceLevel: 3, tags: ["picante", "intenso"],
    description: "🎯 DESAFIO: Domine 10 chiles mexicanos! Torra, hidratação, combinações com a IA." },

  { id: "fermentacoes-mex", name: "🔥 Desafio: Fermentações Ancestrais", category: "Escola Mexicana", image: "tecnica-fermentacao",
    ingredients: ["Cascas de abacaxi", "Piloncillo", "Cravo e canela", "Chiles jalapeños frescos", "Vinagre branco", "Cenoura e cebola"],
    steps: [
      "🎯 DESAFIO: 3 fermentações em 7 dias! A IA monitora o processo.",
      "📘 Tepache (3 dias): Cascas de abacaxi + piloncillo + especiarias em jarro. 🤖 Peça à IA: 'Espuma no tepache é normal?'.",
      "📘 Chiles Curtidos (5 dias): Jalapeños + cenoura + cebola em vinagre com especiarias. 🤖 Peça à IA: 'Chiles en escabeche que durem meses'.",
      "📘 Salsa Fermentada (7 dias): Tomate + chile + alho + sal 3%. 🤖 Peça à IA: 'Salsa lacto-fermentada de habanero'.",
      "📘 Segurança: Esterilize potes. Mofo preto/rosa = descarte. 🤖 Peça à IA: 'Sinais de fermentação perigosa'.",
      "🏆 Completou as 3? Dominou técnicas de 2.000 anos!"
    ],
    difficulty: "Médio", time: "3-7 dias", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: 3 fermentações em 7 dias! Tepache, escabeche e salsa fermentada com a IA." },

  { id: "processos-tradicionais", name: "🔥 Desafio: Utensílios Ancestrais", category: "Escola Mexicana", image: "tecnica-artesanal",
    ingredients: ["Molcajete de pedra vulcânica", "Tomate, chile e alho", "Chocolate mexicano em tablilla", "Molinillo de madeira", "Leite quente", "Comal de barro ou ferro"],
    steps: [
      "🎯 DESAFIO: Cozinhe com 3 utensílios ancestrais! A IA ensina cada técnica.",
      "📘 Molcajete: Cure moendo arroz. Depois salsa: alho+sal → chile assado → tomate. 🤖 Peça à IA: 'Como curar molcajete e fazer salsa autêntica?'.",
      "📘 Molinillo: Dissolva chocolate em leite quente, gire entre as palmas até espumar. 🤖 Peça à IA: 'Técnica do molinillo para chocolate espumante'.",
      "📘 Comal: Asse chiles, tomates e cebola para salsa tatemada. 🤖 Peça à IA: 'Como temperar comal de barro novo?'.",
      "🏆 Usou os 3? Cozinhou como há 3.000 anos!"
    ],
    difficulty: "Médio", time: "4h", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: Molcajete, molinillo e comal — técnicas milenares com a IA!" },

  { id: "conservacao-alimentos", name: "🔥 Desafio: Conservação Mexicana", category: "Escola Mexicana", image: "conservacao-alimentos",
    ingredients: ["Chiles secos variados", "Carne para cecina (corte fino)", "Sal grosso", "Chiles jalapeños frescos", "Vinagre e especiarias", "Frutas para cristalizar"],
    steps: [
      "🎯 DESAFIO: 3 técnicas de conservação ancestrais! A IA guia cada processo.",
      "📘 Desidratar Chiles: Forno 80°C por 4-6h porta entreaberta. 🤖 Peça à IA: 'Ponto certo de desidratação de chiles'.",
      "📘 Salga (cecina): Fatias finas + sal grosso, secar 2-3 dias. 🤖 Peça à IA: 'Cecina estilo Yecapixtla em casa'.",
      "📘 Escabeche: Vinagre fervente com especiarias sobre vegetais em potes. 🤖 Peça à IA: 'Escabeche mexicano clássico para 6 meses'.",
      "📘 Durabilidade: Chiles 1 ano, escabeche 6 meses, cecina 2 semanas refrigerada.",
      "🏆 Dominou as 3? Preservação como os mesoamericanos!"
    ],
    difficulty: "Médio", time: "5h + dias de espera", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: Desidratar, salgar e conservar! Técnicas ancestrais com a IA." },

  { id: "producao-artesanal", name: "🔥 Desafio: Produtor Artesanal", category: "Escola Mexicana", image: "producao-artesanal",
    ingredients: ["Cacau em grãos ou nibs", "Piloncillo e canela", "Leite fresco para queijo", "Carne de porco para chorizo", "Chiles secos para chorizo", "Masa harina"],
    steps: [
      "🎯 DESAFIO: 3 produtos artesanais mexicanos do zero! A IA guia cada etapa.",
      "📘 Chocolate Mexicano: Torre cacau 130°C/25min, moa com canela e piloncillo. 🤖 Peça à IA: 'Chocolate artesanal com grãos de cacau'.",
      "📘 Chorizo Mexicano: Carne + chiles hidratados + vinagre + especiarias. Descanso 24h. 🤖 Peça à IA: 'Proporção ideal carne/gordura/chiles para chorizo'.",
      "📘 Queijo Oaxaca: Leite + ácido cítrico + coalho, aqueça 70°C, estique e enrole. 🤖 Peça à IA: 'Queijo Oaxaca caseiro — ponto de esticar'.",
      "📘 Precificação: Custo + 100-150% margem. 🤖 Peça à IA: 'Precificar produtos artesanais para venda'.",
      "🏆 Produziu os 3? Verdadeiro artesão mexicano!"
    ],
    difficulty: "Avançado", time: "8h", spiceLevel: 0, tags: ["não picante"],
    description: "🎯 DESAFIO: Chocolate, chorizo e queijo Oaxaca artesanais! A IA ensina cada técnica." },

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
