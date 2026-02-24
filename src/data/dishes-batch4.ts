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

  // ============ ESCOLA MEXICANA ============
  { id: "tecnica-tortilla", name: "Técnica: Como Fazer Tortillas Perfeitas", category: "Escola Mexicana", image: "tecnica-tortilla",
    ingredients: ["Masa harina", "Água", "Sal", "Tortillera (prensa)", "Plástico para prensar", "Comal (chapa)"],
    steps: ["Proporção: 2 xícaras masa para 1¼ água.", "A masa deve ter textura de Play-Doh — não grudar nas mãos.", "Bolinhas devem ser uniformes (35g cada).", "Forre a tortillera com plástico dos dois lados.", "Prense com firmeza mas sem esmagar demais.", "Cozinhe 30s/1min/30s virando — deve inflar na terceira vez."],
    difficulty: "Médio", time: "30 min", spiceLevel: 0, tags: ["não picante"],
    description: "Masterclass de tortillas — da masa à chapa, todos os segredos para tortillas perfeitas." },

  { id: "tecnica-chiles", name: "Técnica: Preparação de Chiles Secos", category: "Escola Mexicana", image: "tecnica-chiles",
    ingredients: ["Chiles secos variados", "Água quente", "Tesoura", "Panela"],
    steps: ["Limpe os chiles removendo sementes e veias.", "Torre levemente na chapa seca (10-15 seg por lado).", "Hidrate em água quente por 20-30 min.", "A água não deve ferver — 80°C é ideal.", "Bata no liquidificador com pouco líquido.", "Coe para textura lisa se necessário."],
    difficulty: "Fácil", time: "35 min", spiceLevel: 2, tags: ["picante"],
    description: "Dominar chiles secos é dominar a culinária mexicana — torre, hidrate e bata para salsas perfeitas." },

  { id: "tecnica-mole", name: "Técnica: Fundamentos do Mole", category: "Escola Mexicana", image: "tecnica-mole",
    ingredients: ["Chiles variados", "Chocolate", "Especiarias", "Frutas secas", "Tortillas", "Banha"],
    steps: ["Cada ingrediente é preparado separadamente.", "Torre e hidrate chiles.", "Torre sementes e especiarias na chapa seca.", "Frite tortillas velhas para usar como espessante.", "Bata em partes e depois combine.", "Frite a pasta em banha e adicione caldo lentamente."],
    difficulty: "Avançado", time: "3h", spiceLevel: 2, tags: ["picante", "intenso"],
    description: "Os fundamentos para preparar qualquer mole — a técnica mais complexa e recompensadora da culinária mexicana." },

  { id: "tecnica-salsa", name: "Técnica: Salsas Mexicanas Essenciais", category: "Escola Mexicana", image: "tecnica-salsa",
    ingredients: ["Tomate", "Tomatillo", "Chiles variados", "Cebola", "Alho", "Coentro", "Molcajete"],
    steps: ["Salsa crua: ingredientes crus picados (pico de gallo).", "Salsa cocida: ingredientes cozidos ou assados e batidos.", "Salsa taquera: chiles e tomatillos assados.", "Molcajete vs liquidificador — texturas diferentes.", "Chile define o sabor: guajillo = frutado, chipotle = defumado.", "Prove e ajuste sal, limão e chile."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 1, tags: ["suave"],
    description: "As 5 salsas que todo cozinheiro mexicano deve dominar — do pico de gallo à macha." },

  { id: "tecnica-nixtamal", name: "Técnica: Nixtamalização", category: "Escola Mexicana", image: "tecnica-nixtamal",
    ingredients: ["Milho seco", "Cal (hidróxido de cálcio)", "Água", "Metate ou moedor"],
    steps: ["Dissolva cal em água (1 colher por litro).", "Adicione o milho e ferva por 30 min.", "Deixe de molho por 12-24h.", "Lave o milho removendo a cal e as cascas.", "Moa em metate ou processador até massa lisa.", "Esta é a masa: base de tortillas, tamales e antojitos."],
    difficulty: "Avançado", time: "24h", spiceLevel: 0, tags: ["não picante"],
    description: "Processo milenar que transforma milho em masa — a nixtamalização é a invenção que criou a civilização mesoamericana." },

  { id: "tecnica-fermentacao", name: "Técnica: Fermentações Mexicanas", category: "Escola Mexicana", image: "tecnica-fermentacao",
    ingredients: ["Abacaxi (tepache)", "Agave (pulque)", "Milho (pozol/tejuino)", "Cacau (tecólotl)", "Piloncillo", "Canela"],
    steps: ["Tepache: cascas de abacaxi + piloncillo (3 dias).", "Pulque: seiva de agave fermentada (1-2 dias).", "Tejuino: masa de milho fermentada com limão.", "Pozol: masa de milho + cacau fermentada.", "A temperatura ambiente tropical facilita a fermentação.", "Todas são tradições pré-hispânicas vivas até hoje."],
    difficulty: "Médio", time: "3-7 dias", spiceLevel: 0, tags: ["não picante"],
    description: "Bebidas fermentadas tradicionais do México — do tepache ao pulque, tradições que sobrevivem há milênios." },

  { id: "tecnica-artesanal", name: "Processos Artesanais Mexicanos", category: "Escola Mexicana", image: "tecnica-artesanal",
    ingredients: ["Molcajete (pilão de pedra vulcânica)", "Metate (pedra de moer)", "Comal de barro", "Ollas de barro", "Molinillo (batedor de chocolate)"],
    steps: ["Molcajete: mói ingredientes com textura rústica — salsas ficam melhores.", "Metate: pedra para moer milho e cacau — exige força e técnica.", "Comal de barro: chapa de cerâmica para tortillas — sabor único.", "Olla de barro: panela de cerâmica que tempera com uso.", "Molinillo: cria espuma no chocolate — girando entre as palmas.", "Utensílios artesanais conectam com a tradição pré-hispânica."],
    difficulty: "Médio", time: "Leitura 5 min", spiceLevel: 0, tags: ["não picante"],
    description: "Os utensílios artesanais que definem a culinária mexicana — do molcajete ao molinillo." },

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
