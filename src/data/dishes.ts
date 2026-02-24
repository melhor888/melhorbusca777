import { dishesBatch2 } from "./dishes-batch2";
import { dishesBatch3 } from "./dishes-batch3";
import { dishesBatch4 } from "./dishes-batch4";
import { dishesBatch5 } from "./dishes-batch5";

export interface Dish {
  id: string;
  name: string;
  category: string;
  image: string;
  ingredients: string[];
  steps: string[];
  difficulty: "Fácil" | "Médio" | "Avançado";
  time: string;
  description?: string;
  price?: string;
  curiosity?: string;
  origin?: string;
}

export const categories = [
  "Tacos",
  "Antojitos",
  "Sopas & Caldos",
  "Carnes & Guisados",
  "Molhos & Salsas",
  "Sobremesas",
  "Bebidas",
  "Mariscos",
  "Arroz & Feijão",
  "Café da Manhã",
  "Tamales & Massas",
];

export const dishes: Dish[] = [
  // ============ TACOS ============
  { id: "tacos-al-pastor", name: "Tacos al Pastor", category: "Tacos", image: "tacos-al-pastor",
    ingredients: ["500g de lombo suíno fatiado fino", "4 chiles guajillo secos", "2 chiles ancho secos", "1 abacaxi maduro", "Cebola branca", "Coentro fresco", "Tortillas de milho", "Achiote (urucum)", "Vinagre de maçã"],
    steps: ["Hidrate os chiles em água quente por 20 min e bata com achiote e vinagre.", "Marine a carne na pasta de chile por pelo menos 2 horas.", "Grelhe a carne em fogo alto até caramelizar.", "Grelhe fatias de abacaxi até dourar.", "Pique a carne, abacaxi, cebola e coentro.", "Sirva em tortillas de milho quentes."],
    difficulty: "Médio", time: "2h 30min",
    description: "O rei dos tacos mexicanos, inspirado no shawarma libanês trazido por imigrantes. A combinação de carne marinada e abacaxi grelhado é irresistível." },

  { id: "tacos-carnitas", name: "Tacos de Carnitas", category: "Tacos", image: "tacos-carnitas",
    ingredients: ["1kg de pernil suíno", "1 laranja (suco)", "1 limão (suco)", "4 dentes de alho", "Banha de porco", "Cebola", "Sal e pimenta", "Tortillas de milho", "Coentro e cebola para servir"],
    steps: ["Corte a carne em cubos grandes.", "Cozinhe na banha com suco de laranja e limão por 2h.", "Aumente o fogo para dourar e desfiar a carne.", "A carne deve ficar crocante por fora e macia por dentro.", "Sirva em tortillas com cebola picada e coentro.", "Acompanhe com salsa verde e limão."],
    difficulty: "Médio", time: "2h 30min",
    description: "Originário de Michoacán, as carnitas são carne de porco confitada em sua própria gordura até ficar dourada e desfiada." },

  { id: "tacos-birria", name: "Tacos de Birria", category: "Tacos", image: "tacos-birria",
    ingredients: ["1kg de carne bovina (acém)", "6 chiles guajillo", "3 chiles ancho", "Tomate", "Cebola", "Alho", "Cominho", "Orégano mexicano", "Tortillas de milho", "Queijo Oaxaca"],
    steps: ["Hidrate os chiles e bata com tomate, cebola e especiarias.", "Marine a carne na pasta e cozinhe lentamente por 3h.", "Desfie a carne e reserve o consomé.", "Mergulhe as tortillas no consomé e grelhe com queijo.", "Recheie com a carne desfiada.", "Sirva com consomé quente para mergulhar."],
    difficulty: "Avançado", time: "3h 30min",
    description: "Originária de Jalisco, a birria viralizou no mundo todo. Os tacos mergulhados no consomé vermelho são viciantes." },

  { id: "tacos-carne-asada", name: "Tacos de Carne Asada", category: "Tacos", image: "tacos-carne-asada",
    ingredients: ["500g de contra-filé", "Suco de limão", "Alho", "Coentro", "Jalapeño", "Cebola", "Sal e pimenta", "Tortillas de milho", "Guacamole"],
    steps: ["Marine a carne com limão, alho, coentro e jalapeño.", "Grelhe em fogo alto até o ponto desejado.", "Descanse a carne 5 min e corte em cubos pequenos.", "Aqueça as tortillas na chapa.", "Sirva com cebola grelhada e guacamole.", "Finalize com coentro e limão."],
    difficulty: "Fácil", time: "40 min",
    description: "Tacos de carne grelhada na brasa — simples, direto e delicioso. A base da taqueria mexicana." },

  { id: "tacos-pollo", name: "Tacos de Frango com Tinga", category: "Tacos", image: "tacos-pollo",
    ingredients: ["500g de peito de frango", "4 tomates", "2 chiles chipotles em adobo", "Cebola", "Alho", "Orégano", "Tortillas de milho", "Creme ácido", "Alface"],
    steps: ["Cozinhe o frango e desfie.", "Refogue cebola e alho, adicione tomates.", "Adicione chipotles e temperos.", "Junte o frango desfiado e cozinhe 15 min.", "Sirva em tortillas com creme e alface.", "Acompanhe com salsa verde."],
    difficulty: "Fácil", time: "45 min",
    description: "Tinga de frango é um clássico de Puebla — frango desfiado em molho de tomate com chipotle defumado." },

  { id: "tacos-pescado", name: "Tacos de Peixe", category: "Tacos", image: "tacos-pescado",
    ingredients: ["400g de filé de peixe branco", "Farinha de trigo", "Cerveja gelada", "Repolho roxo fatiado", "Creme ácido", "Molho chipotle", "Limão", "Tortillas de milho"],
    steps: ["Prepare a massa: farinha, cerveja e sal.", "Empane o peixe na massa e frite até dourar.", "Fatie o repolho roxo fino.", "Misture creme ácido com chipotle.", "Monte: tortilla, repolho, peixe frito.", "Finalize com molho chipotle e limão."],
    difficulty: "Médio", time: "30 min",
    description: "Originários de Ensenada, Baja California. Peixe empanado crocante com repolho e molho cremoso." },

  { id: "tacos-chorizo", name: "Tacos de Chorizo", category: "Tacos", image: "tacos-chorizo",
    ingredients: ["400g de chorizo mexicano", "Batatas cozidas em cubos", "Cebola", "Coentro", "Tortillas de milho", "Salsa verde", "Limão"],
    steps: ["Retire o chorizo da tripa e desfaça na frigideira.", "Frite até ficar bem crocante.", "Adicione batatas em cubos e misture.", "Aqueça as tortillas.", "Sirva com cebola, coentro e salsa verde.", "Esprema limão por cima."],
    difficulty: "Fácil", time: "20 min",
    description: "Chorizo mexicano é bem diferente do espanhol — é cru, temperado com chile e achiote, e fica vermelho intenso." },

  { id: "tacos-lengua", name: "Tacos de Língua", category: "Tacos", image: "tacos-lengua",
    ingredients: ["1 língua bovina", "Cebola", "Alho", "Louro", "Pimenta em grãos", "Sal", "Tortillas de milho", "Salsa verde", "Coentro e cebola picada"],
    steps: ["Cozinhe a língua em panela de pressão com aromáticos por 1h30.", "Retire a pele e corte em cubos pequenos.", "Grelhe na chapa com um pouco de óleo até dourar.", "Aqueça as tortillas.", "Sirva com cebola, coentro e salsa.", "Esprema limão."],
    difficulty: "Médio", time: "2h",
    description: "Iguaria mexicana — a língua cozida lentamente fica macia como manteiga e tem sabor intenso." },

  // ============ ANTOJITOS ============
  { id: "quesadillas", name: "Quesadillas", category: "Antojitos", image: "quesadillas",
    ingredients: ["Tortillas de farinha ou milho", "300g de queijo Oaxaca", "Flor de abóbora (opcional)", "Cogumelos", "Epazote", "Salsa roja"],
    steps: ["Aqueça a tortilla na chapa.", "Coloque queijo Oaxaca generosamente.", "Adicione recheio: flor de abóbora ou cogumelos.", "Dobre ao meio e grelhe até o queijo derreter.", "Corte ao meio.", "Sirva com salsa roja e creme."],
    difficulty: "Fácil", time: "15 min",
    description: "O antojito mais versátil do México — a quesadilla aceita qualquer recheio, mas queijo Oaxaca é obrigatório." },

  { id: "enchiladas-rojas", name: "Enchiladas Rojas", category: "Antojitos", image: "enchiladas-rojas",
    ingredients: ["12 tortillas de milho", "500g de frango desfiado", "6 chiles guajillo", "3 tomates", "Cebola e alho", "Creme ácido", "Queijo fresco", "Cebola roxa em anéis"],
    steps: ["Hidrate os chiles e bata com tomate, cebola e alho.", "Coe o molho e frite em óleo quente.", "Passe as tortillas no molho.", "Recheie com frango e enrole.", "Disponha em travessa e cubra com mais molho.", "Cubra com creme, queijo e cebola roxa."],
    difficulty: "Médio", time: "45 min",
    description: "Tortillas banhadas em molho de chile e recheadas com frango — prato ancestral mexicano com raízes pré-hispânicas." },

  { id: "chilaquiles", name: "Chilaquiles Verdes", category: "Antojitos", image: "chilaquiles",
    ingredients: ["Tortillas de milho cortadas e fritas", "Salsa verde (tomatillo)", "Creme ácido", "Queijo fresco", "Cebola roxa", "Ovo frito", "Feijão refrito", "Coentro"],
    steps: ["Corte tortillas em triângulos e frite até crocantes.", "Prepare a salsa verde com tomatillos e chiles.", "Misture os chips na salsa quente.", "Cozinhe 2-3 min — devem ficar levemente macios.", "Sirva com creme, queijo e cebola roxa.", "Coloque um ovo frito por cima."],
    difficulty: "Fácil", time: "25 min",
    description: "O café da manhã mais mexicano que existe — tortillas fritas mergulhadas em salsa. Perfeito para curar la cruda (ressaca)." },

  { id: "tamales", name: "Tamales de Pollo", category: "Antojitos", image: "tamales",
    ingredients: ["2 xícaras de masa harina", "Banha de porco batida", "Caldo de frango", "Folhas de milho (secas)", "500g de frango desfiado", "Salsa verde ou roja", "Sal"],
    steps: ["Bata a banha até ficar fofa e misture com masa e caldo.", "Hidrate as folhas de milho em água quente.", "Espalhe masa na folha de milho.", "Coloque frango com salsa no centro.", "Dobre e feche como pacotinho.", "Cozinhe no vapor por 1h até firmar."],
    difficulty: "Avançado", time: "2h",
    description: "Tradição milenar mesoamericana — massa de milho cozida no vapor em folha de milho. Presente em toda celebração." },

  { id: "sopes", name: "Sopes", category: "Antojitos", image: "sopes",
    ingredients: ["Masa de milho", "Feijão refrito", "Carne desfiada ou chorizo", "Alface picada", "Creme ácido", "Queijo fresco ralado", "Salsa"],
    steps: ["Molde discos de masa e cozinhe na chapa.", "Enquanto quentes, levante as bordas formando uma cestinha.", "Frite levemente em óleo.", "Espalhe feijão refrito na base.", "Adicione carne, alface, creme e queijo.", "Finalize com salsa."],
    difficulty: "Fácil", time: "30 min",
    description: "Pequenos discos de masa com bordas levantadas, formando cestinhas recheadas. Antojito clássico das ruas do México." },

  { id: "gorditas", name: "Gorditas", category: "Antojitos", image: "gorditas",
    ingredients: ["Masa de milho", "Feijão refrito", "Chicharrón (torresmo) prensado", "Queijo fresco", "Salsa verde", "Creme ácido", "Alface"],
    steps: ["Molde discos grossos de masa.", "Cozinhe na chapa até dourar dos dois lados.", "Abra ao meio como um pão pita.", "Recheie com feijão, chicharrón e queijo.", "Adicione salsa, creme e alface.", "Sirva quente."],
    difficulty: "Fácil", time: "25 min",
    description: "Significa 'gordinhas' — discos de masa mais grossos, abertos e recheados. Popular no centro do México." },

  { id: "elotes", name: "Elotes (Milho Mexicano)", category: "Antojitos", image: "elotes",
    ingredients: ["Espigas de milho", "Maionese", "Creme ácido", "Chile em pó (tajín)", "Queijo cotija ralado", "Limão", "Pimenta cayena"],
    steps: ["Grelhe as espigas até ficarem levemente carbonizadas.", "Passe maionese e creme ácido na espiga.", "Polvilhe queijo cotija generosamente.", "Adicione chile em pó e pimenta.", "Esprema limão por cima.", "Sirva com um espeto."],
    difficulty: "Fácil", time: "15 min",
    description: "Milho grelhado com maionese, queijo e chile — o street food mais icônico do México." },

  { id: "tostadas", name: "Tostadas de Tinga", category: "Antojitos", image: "tostadas",
    ingredients: ["Tortillas de milho fritas (flat)", "Frango desfiado em tinga", "Feijão refrito", "Alface picada", "Creme ácido", "Queijo fresco", "Salsa roja"],
    steps: ["Frite as tortillas até ficarem planas e crocantes.", "Espalhe feijão refrito na tostada.", "Cubra com tinga de frango.", "Adicione alface, creme e queijo.", "Finalize com salsa roja.", "Coma com as mãos — vai fazer bagunça!"],
    difficulty: "Fácil", time: "30 min",
    description: "Tortilla frita e crocante servida como base para diversos toppings. A crocância é fundamental." },

  // ============ SOPAS & CALDOS ============
  { id: "pozole-rojo", name: "Pozole Rojo", category: "Sopas & Caldos", image: "pozole-rojo",
    ingredients: ["500g de carne de porco (pernil)", "250g de milho hominy (canjica)", "6 chiles guajillo", "3 chiles ancho", "Alho", "Cebola", "Orégano", "Alface, rabanete, tostadas para servir"],
    steps: ["Cozinhe a carne com cebola e alho até macia.", "Hidrate os chiles e bata com alho.", "Coe a salsa e frite em óleo.", "Adicione o caldo da carne e o hominy.", "Cozinhe por 30 min até os sabores se integrarem.", "Sirva com alface, rabanete, orégano e tostadas."],
    difficulty: "Médio", time: "2h",
    description: "Sopa sagrada dos astecas com milho hominy e carne de porco em caldo de chile. Prato de celebração e festa." },

  { id: "sopa-tortilla", name: "Sopa de Tortilla", category: "Sopas & Caldos", image: "sopa-tortilla",
    ingredients: ["Tortillas de milho em tiras fritas", "4 tomates", "2 chiles pasilla", "Cebola e alho", "Caldo de frango", "Abacate", "Creme ácido", "Queijo fresco", "Chipotle"],
    steps: ["Asse tomates, cebola e alho e bata com chiles.", "Frite a salsa em óleo quente.", "Adicione caldo de frango e ferva 20 min.", "Frite tiras de tortilla até crocantes.", "Sirva o caldo com tiras crocantes.", "Cubra com abacate, creme, queijo e chipotle frito."],
    difficulty: "Fácil", time: "35 min",
    description: "Caldo de tomate e chile com tiras crocantes de tortilla — sopa reconfortante que representa a alma do México." },

  { id: "menudo", name: "Menudo Rojo", category: "Sopas & Caldos", image: "menudo",
    ingredients: ["1kg de mondongo (tripa) limpo", "Pé de porco", "6 chiles guajillo", "2 chiles ancho", "Milho hominy", "Orégano", "Cebola", "Alho", "Limão"],
    steps: ["Cozinhe o mondongo e pé de porco por 3h em panela de pressão.", "Hidrate e bata os chiles com alho.", "Adicione a salsa ao caldo.", "Junte o hominy e cozinhe mais 30 min.", "Tempere com orégano e sal.", "Sirva com cebola, orégano, limão e chile."],
    difficulty: "Avançado", time: "4h",
    description: "O remédio mexicano para a ressaca. Sopa de mondongo cozida lentamente com chile e hominy." },

  { id: "caldo-de-pollo", name: "Caldo de Pollo", category: "Sopas & Caldos", image: "caldo-de-pollo",
    ingredients: ["1 frango inteiro cortado", "3 cenouras", "3 batatas", "2 abobrinhas", "Cebola", "Alho", "Arroz", "Coentro", "Limão", "Chile serrano"],
    steps: ["Cozinhe o frango com cebola e alho.", "Adicione cenoura e batata.", "Cozinhe até os vegetais ficarem macios.", "Adicione abobrinha nos últimos 10 min.", "Prepare arroz branco à parte.", "Sirva o caldo com arroz, coentro e limão."],
    difficulty: "Fácil", time: "1h",
    description: "O caldo de frango mexicano é remédio para tudo — gripe, tristeza e fome. Servido com limão e arroz." },

  // ============ CARNES & GUISADOS ============
  { id: "mole-poblano", name: "Mole Poblano", category: "Carnes & Guisados", image: "mole-poblano",
    ingredients: ["8 chiles (mulato, ancho, pasilla, chipotle)", "Chocolate amargo", "Amêndoas", "Gergelim", "Passas", "Banana", "Canela", "Cravo", "Tortillas secas", "Peru ou frango cozido"],
    steps: ["Torre e hidrate cada tipo de chile separadamente.", "Torre amêndoas, gergelim e especiarias.", "Bata tudo com chocolate e tortillas.", "Frite a pasta em óleo quente.", "Adicione caldo e cozinhe por 1h mexendo.", "O mole deve ter consistência aveludada. Sirva sobre peru ou frango."],
    difficulty: "Avançado", time: "3h",
    description: "O rei da culinária mexicana — mais de 30 ingredientes incluindo chocolate, chiles e especiarias. Receita de Puebla, patrimônio da humanidade." },

  { id: "cochinita-pibil", name: "Cochinita Pibil", category: "Carnes & Guisados", image: "cochinita-pibil",
    ingredients: ["1kg de pernil suíno", "100g de achiote (pasta de urucum)", "Suco de laranja amarga", "Suco de limão", "Folhas de bananeira", "Cebola roxa em curtida", "Habanero"],
    steps: ["Dissolva achiote em suco de laranja e limão.", "Marine a carne por 12h.", "Envolva em folhas de bananeira.", "Asse a 160°C por 3-4h até desmanchar.", "Desfie a carne.", "Sirva com cebola roxa curtida e habanero."],
    difficulty: "Médio", time: "4h + marinada",
    description: "Prato maia de Yucatán — carne de porco marinada em achiote e assada em folhas de bananeira. Cor alaranjada vibrante." },

  { id: "chiles-rellenos", name: "Chiles Rellenos", category: "Carnes & Guisados", image: "chiles-rellenos",
    ingredients: ["6 chiles poblanos", "300g de queijo Oaxaca ou carne moída", "4 ovos", "Farinha de trigo", "Molho de tomate", "Creme ácido"],
    steps: ["Asse os chiles diretamente no fogo até a pele queimar.", "Coloque em saco plástico por 10 min e remova a pele.", "Recheie com queijo ou carne.", "Passe na farinha e na clara em neve.", "Frite até dourar.", "Sirva com molho de tomate e creme."],
    difficulty: "Médio", time: "50 min",
    description: "Chiles poblanos assados, recheados e fritos em capa de ovo. Prato emblemático da comida caseira mexicana." },

  { id: "barbacoa", name: "Barbacoa", category: "Carnes & Guisados", image: "barbacoa",
    ingredients: ["1kg de carne bovina (bochechas ou acém)", "Chiles guajillo e ancho", "Folhas de agave ou bananeira", "Alho", "Cominho", "Cravo", "Orégano", "Vinagre"],
    steps: ["Hidrate e bata os chiles com especiarias.", "Cubra a carne com a pasta.", "Envolva em folhas de agave ou bananeira.", "Cozinhe no forno a 150°C por 5h.", "Desfie a carne.", "Sirva em tacos com consomé, cebola e coentro."],
    difficulty: "Avançado", time: "5h",
    description: "Carne cozida lentamente em forno de terra (ou forno convencional), desfiada e suculenta. Tradição dominical do centro do México." },

  { id: "carne-en-su-jugo", name: "Carne en su Jugo", category: "Carnes & Guisados", image: "carne-en-su-jugo",
    ingredients: ["500g de carne bovina picada", "Bacon", "Feijão pinto cozido", "Tomatillos verdes", "Chile serrano", "Coentro", "Cebola", "Alho"],
    steps: ["Asse tomatillos e chiles e bata com coentro.", "Frite o bacon até crocante.", "Sele a carne rapidamente em fogo alto.", "Adicione o molho verde e feijões.", "Cozinhe por 15 min.", "Sirva com cebola, coentro, tortillas e limão."],
    difficulty: "Fácil", time: "35 min",
    description: "Especialidade de Guadalajara — carne bovina em caldo verde com feijão e bacon. Sabor intenso e reconfortante." },

  // ============ MOLHOS & SALSAS ============
  { id: "guacamole", name: "Guacamole", category: "Molhos & Salsas", image: "guacamole",
    ingredients: ["3 abacates maduros", "1 tomate picado", "Cebola branca picada", "Coentro fresco", "Chile serrano", "Suco de limão", "Sal"],
    steps: ["Corte os abacates ao meio e remova o caroço.", "Amasse com garfo — não deve ficar liso, mantenha pedaços.", "Adicione tomate, cebola e coentro picados.", "Pique o chile serrano fino e misture.", "Tempere com limão e sal.", "Sirva imediatamente com totopos."],
    difficulty: "Fácil", time: "10 min",
    description: "O molho asteca original — ahuacamolli. Feito no molcajete (pilão de pedra vulcânica) com abacate fresco." },

  { id: "salsa-roja", name: "Salsa Roja", category: "Molhos & Salsas", image: "salsa-roja",
    ingredients: ["5 tomates", "3 chiles de árbol secos", "2 chiles guajillo", "2 dentes de alho", "Cebola", "Sal"],
    steps: ["Asse tomates e cebola em chapa até carbonizar.", "Torre os chiles secos por 30 segundos.", "Bata tudo no liquidificador com alho e sal.", "Ajuste a consistência com água.", "Prove e ajuste sal e picância.", "Sirva em temperatura ambiente."],
    difficulty: "Fácil", time: "15 min",
    description: "A salsa vermelha é onipresente na mesa mexicana. Cada família tem sua receita — esta é a versão clássica assada." },

  { id: "salsa-verde", name: "Salsa Verde", category: "Molhos & Salsas", image: "salsa-verde",
    ingredients: ["500g de tomatillos", "3 chiles serranos", "Coentro (1 maço)", "Cebola", "Alho", "Sal"],
    steps: ["Cozinhe tomatillos e chiles em água por 10 min.", "Bata com cebola, alho e coentro.", "Ajuste sal e picância.", "Pode servir crua ou cozida.", "Fica mais picante ao descansar.", "Use em enchiladas, chilaquiles e tacos."],
    difficulty: "Fácil", time: "15 min",
    description: "Feita com tomatillos verdes e chile serrano — ácida, fresca e versátil. Indispensável na cozinha mexicana." },

  { id: "pico-de-gallo", name: "Pico de Gallo", category: "Molhos & Salsas", image: "pico-de-gallo",
    ingredients: ["4 tomates maduros", "1 cebola branca", "Coentro fresco", "2 chiles serranos", "Suco de 2 limões", "Sal"],
    steps: ["Pique tomates em cubos pequenos.", "Pique cebola em cubos do mesmo tamanho.", "Pique coentro e chile serrano finamente.", "Misture tudo em uma tigela.", "Tempere com limão e sal.", "Descanse 15 min antes de servir."],
    difficulty: "Fácil", time: "10 min",
    description: "Salsa fresca crua — o complemento perfeito para qualquer prato mexicano. Também chamada 'salsa mexicana' pelas cores da bandeira." },

  { id: "mole-negro", name: "Mole Negro Oaxaqueño", category: "Molhos & Salsas", image: "mole-negro",
    ingredients: ["Chiles chilhuacle negro, mulato e pasilla", "Chocolate oaxaqueño", "Sementes de chile queimadas", "Amêndoas", "Nozes", "Gergelim", "Banana macho", "Pão branco", "Canela e especiarias"],
    steps: ["Torre e hidrate cada chile separadamente.", "Queime sementes de chile até ficarem pretas.", "Torre nozes, amêndoas e gergelim.", "Bata tudo com chocolate e pão.", "Frite em óleo e adicione caldo.", "Cozinhe por 2h mexendo constantemente."],
    difficulty: "Avançado", time: "4h",
    description: "O mais complexo dos 7 moles de Oaxaca — cor negra profunda com mais de 30 ingredientes. Obra de arte culinária." },

  // ============ SOBREMESAS ============
  { id: "churros", name: "Churros com Chocolate", category: "Sobremesas", image: "churros",
    ingredients: ["1 xícara de farinha de trigo", "1 xícara de água", "2 colheres de manteiga", "1 ovo", "Açúcar e canela", "Óleo para fritura", "Chocolate mexicano (Abuelita)"],
    steps: ["Ferva água com manteiga e sal.", "Adicione farinha de uma vez e mexa até soltar da panela.", "Esfrie e adicione ovo.", "Coloque na churrera e frite em óleo quente.", "Passe nos açúcar com canela.", "Sirva com chocolate quente para mergulhar."],
    difficulty: "Médio", time: "30 min",
    description: "Churros mexicanos são mais grossos e servidos com chocolate quente espesso. Tradição das churrerías desde o período colonial." },

  { id: "flan-mexicano", name: "Flan Mexicano", category: "Sobremesas", image: "flan-mexicano",
    ingredients: ["1 lata de leite condensado", "1 lata de leite evaporado", "5 ovos", "1 colher de baunilha", "1 xícara de açúcar para caramelo", "Queijo cream cheese (opcional)"],
    steps: ["Faça caramelo com açúcar e cubra a forma.", "Bata ovos, leite condensado, evaporado e baunilha.", "Se quiser, adicione cream cheese para flan napolitano.", "Despeje na forma caramelizada.", "Cozinhe em banho-maria por 1h a 180°C.", "Refrigere por 4h e desenforme."],
    difficulty: "Médio", time: "1h + 4h refrigeração",
    description: "O flan mexicano é mais denso e cremoso que o espanhol. A versão napolitana com cream cheese é irresistível." },

  { id: "tres-leches", name: "Pastel Tres Leches", category: "Sobremesas", image: "tres-leches",
    ingredients: ["Bolo esponja (farinha, ovos, açúcar)", "Leite condensado", "Leite evaporado", "Creme de leite", "Chantilly", "Canela em pó", "Cerejas para decorar"],
    steps: ["Asse o bolo esponja e deixe esfriar.", "Misture os 3 leites.", "Fure o bolo com garfo e despeje a mistura.", "Refrigere por pelo menos 4 horas.", "Cubra com chantilly.", "Polvilhe canela e decore com cerejas."],
    difficulty: "Médio", time: "1h + 4h refrigeração",
    description: "Bolo encharcado em três tipos de leite — absurdamente úmido e doce. Sobremesa favorita de toda a América Latina." },

  { id: "arroz-con-leche", name: "Arroz con Leche", category: "Sobremesas", image: "arroz-con-leche",
    ingredients: ["1 xícara de arroz", "4 xícaras de leite", "1 lata de leite condensado", "1 pau de canela", "Casca de limão", "Passas", "Canela em pó"],
    steps: ["Cozinhe o arroz em água até macio.", "Adicione leite e canela em pau.", "Cozinhe em fogo baixo mexendo sempre.", "Adicione leite condensado e passas.", "Cozinhe até ficar cremoso.", "Sirva frio ou morno com canela polvilhada."],
    difficulty: "Fácil", time: "40 min",
    description: "Doce de arroz com leite e canela — comfort food mexicano que toda abuela faz com perfeição." },

  // ============ BEBIDAS ============
  { id: "agua-horchata", name: "Agua de Horchata", category: "Bebidas", image: "agua-horchata",
    ingredients: ["1 xícara de arroz", "1/2 xícara de amêndoas", "1 pau de canela", "Açúcar", "Baunilha", "Água", "Gelo"],
    steps: ["Deixe arroz, amêndoas e canela de molho por 8h.", "Bata no liquidificador com água.", "Coe em pano fino.", "Adicione açúcar e baunilha.", "Sirva bem gelada com gelo.", "Pode adicionar um toque de leite condensado."],
    difficulty: "Fácil", time: "15 min + 8h molho",
    description: "Bebida refrescante de arroz, amêndoas e canela. A agua fresca mais popular do México." },

  { id: "agua-jamaica", name: "Agua de Jamaica", category: "Bebidas", image: "agua-jamaica",
    ingredients: ["2 xícaras de flores de hibisco secas", "1 xícara de açúcar", "8 xícaras de água", "Gelo", "Limão (opcional)"],
    steps: ["Ferva as flores de hibisco em 4 xícaras de água.", "Cozinhe por 10 min e coe.", "Dissolva o açúcar no líquido quente.", "Complete com água fria.", "Sirva bem gelada com gelo.", "Esprema limão se desejar."],
    difficulty: "Fácil", time: "20 min",
    description: "Chá gelado de hibisco — vermelho rubi, ácido e refrescante. Água fresca presente em toda fonda e taqueria." },

  { id: "chocolate-mexicano", name: "Chocolate Mexicano Quente", category: "Bebidas", image: "chocolate-mexicano",
    ingredients: ["Tabletes de chocolate mexicano (Abuelita ou Ibarra)", "Leite", "Canela", "Chile ancho (opcional)", "Baunilha"],
    steps: ["Aqueça o leite sem ferver.", "Adicione o tablete de chocolate e mexa.", "Adicione canela e baunilha.", "Bata com molinillo (batedor de madeira) até espumar.", "Se quiser picante, adicione chile ancho em pó.", "Sirva quente e espumoso."],
    difficulty: "Fácil", time: "10 min",
    description: "Chocolate quente com canela batido com molinillo — tradição que vem dos astecas. O aroma de canela é inconfundível." },

  // ============ MARISCOS ============
  { id: "ceviche-mexicano", name: "Ceviche Mexicano", category: "Mariscos", image: "ceviche-mexicano",
    ingredients: ["500g de peixe branco fresco", "Suco de 10 limões", "2 tomates picados", "Cebola roxa", "Pepino", "Coentro", "Chile serrano", "Abacate"],
    steps: ["Corte o peixe em cubos pequenos.", "Cubra com suco de limão e marine por 30 min.", "Quando o peixe ficar opaco, escorra parte do limão.", "Adicione tomate, cebola, pepino e coentro.", "Tempere com chile, sal e pimenta.", "Sirva com tostadas e abacate fatiado."],
    difficulty: "Fácil", time: "40 min",
    description: "Peixe fresco 'cozido' no limão com legumes frescos. Diferente do peruano, o ceviche mexicano leva tomate e se come em tostadas." },

  { id: "camarones-diabla", name: "Camarões a la Diabla", category: "Mariscos", image: "camarones-diabla",
    ingredients: ["500g de camarões grandes", "6 chiles de árbol", "4 chiles guajillo", "Tomate", "Alho", "Cebola", "Achiote", "Limão", "Arroz branco"],
    steps: ["Hidrate e bata os chiles com tomate e alho.", "Frite a salsa em óleo quente.", "Adicione os camarões e cozinhe 5 min.", "Ajuste picância e sal.", "Sirva com arroz branco e limão.", "Acompanhe com tortillas quentes."],
    difficulty: "Médio", time: "30 min",
    description: "Camarões em molho de chile super picante — 'a la diabla' porque arde como o diabo. Para quem gosta de fogo." },

  // ============ ARROZ & FEIJÃO ============
  { id: "arroz-rojo", name: "Arroz Rojo Mexicano", category: "Arroz & Feijão", image: "arroz-rojo",
    ingredients: ["2 xícaras de arroz", "2 tomates", "Cebola", "Alho", "Caldo de frango", "Ervilhas e cenoura", "Coentro"],
    steps: ["Bata tomate com cebola e alho.", "Frite o arroz em óleo até dourar.", "Adicione a mistura de tomate e frite.", "Despeje caldo quente e adicione ervilhas e cenoura.", "Tampe e cozinhe em fogo baixo por 20 min.", "Não mexa! Solte com garfo ao final."],
    difficulty: "Fácil", time: "30 min",
    description: "O arroz vermelho mexicano é frito antes de cozinhar em caldo de tomate — cada grão fica solto e saboroso." },

  { id: "frijoles-charros", name: "Frijoles Charros", category: "Arroz & Feijão", image: "frijoles-charros",
    ingredients: ["500g de feijão pinto", "Bacon", "Chorizo", "Linguiça", "Tomate", "Cebola", "Chile serrano", "Coentro", "Cerveja (opcional)"],
    steps: ["Cozinhe o feijão na panela de pressão por 40 min.", "Frite bacon, chorizo e linguiça.", "Adicione tomate, cebola e chile.", "Misture ao feijão com caldo.", "Adicione cerveja se desejar.", "Cozinhe mais 20 min. Sirva com coentro."],
    difficulty: "Fácil", time: "1h 30min",
    description: "Feijão 'cowboy' — caldoso com bacon, chorizo e linguiça. Acompanhamento favorito para churrascadas." },

  { id: "frijoles-refritos", name: "Frijoles Refritos", category: "Arroz & Feijão", image: "frijoles-refritos",
    ingredients: ["2 xícaras de feijão pinto cozido", "Banha de porco ou óleo", "Cebola", "Sal", "Queijo fresco para servir"],
    steps: ["Refogue cebola picada na banha.", "Adicione feijão cozido com um pouco de caldo.", "Amasse com amassador de batata.", "Continue cozinhando e amassando até cremoso.", "O feijão deve soltar da panela.", "Sirva com queijo fresco esfarelado por cima."],
    difficulty: "Fácil", time: "20 min",
    description: "Feijão frito e amassado — acompanhamento onipresente em toda refeição mexicana." },

  // ============ CAFÉ DA MANHÃ ============
  { id: "huevos-rancheros", name: "Huevos Rancheros", category: "Café da Manhã", image: "huevos-rancheros",
    ingredients: ["4 ovos", "Tortillas de milho", "Salsa roja", "Feijão refrito", "Queijo fresco", "Creme ácido", "Abacate", "Coentro"],
    steps: ["Frite as tortillas levemente em óleo.", "Prepare a salsa roja.", "Frite os ovos (estrelados).", "Monte: tortilla, feijão, ovo, salsa.", "Cubra com queijo, creme e abacate.", "Sirva com coentro e limão."],
    difficulty: "Fácil", time: "20 min",
    description: "Ovos estrelados sobre tortilla com salsa vermelha e feijão — o café da manhã do rancho mexicano." },

  { id: "huevos-divorciados", name: "Huevos Divorciados", category: "Café da Manhã", image: "huevos-divorciados",
    ingredients: ["2 ovos", "Salsa roja", "Salsa verde", "Tortillas de milho", "Feijão refrito", "Queijo fresco", "Chilaquiles"],
    steps: ["Frite 2 ovos estrelados.", "Prepare salsa roja e salsa verde.", "Coloque cada ovo sobre uma tortilla.", "Banhe um ovo com salsa verde e outro com salsa roja.", "Separe com uma linha de feijão refrito.", "Sirva com queijo e chilaquiles."],
    difficulty: "Fácil", time: "15 min",
    description: "Dois ovos 'divorciados' — um com salsa verde, outro com salsa roja. Separados por feijão. Humor mexicano no prato." },

  // ============ TAMALES & MASSAS ============
  { id: "tamales-dulces", name: "Tamales Dulces", category: "Tamales & Massas", image: "tamales-dulces",
    ingredients: ["Masa harina", "Banha batida", "Açúcar", "Corante rosa", "Passas", "Folhas de milho", "Leite"],
    steps: ["Bata a banha até fofa.", "Misture masa, açúcar e leite.", "Adicione corante rosa e passas.", "Espalhe na folha de milho.", "Dobre e feche.", "Cozinhe no vapor por 1h."],
    difficulty: "Médio", time: "1h 30min",
    description: "Tamales doces cor-de-rosa com passas — tradição no café da manhã mexicano, especialmente no Dia de Reis." },

  { id: "empanadas-mexicanas", name: "Empanadas de Picadillo", category: "Tamales & Massas", image: "empanadas-mexicanas",
    ingredients: ["Masa de milho ou farinha", "300g de carne moída", "Batata em cubos", "Cenoura em cubos", "Chile chipotle", "Tomate", "Passas", "Cominho"],
    steps: ["Prepare o picadillo: refogue carne, batata e cenoura.", "Tempere com chipotle, tomate e especiarias.", "Molde discos de masa.", "Recheie e feche em meia-lua.", "Frite ou asse até dourar.", "Sirva com salsa e creme."],
    difficulty: "Médio", time: "45 min",
    description: "Empanadas recheadas com picadillo — carne moída com batata, cenoura e chile. Podem ser fritas ou assadas." },
];

export function getDishesByCategory(category: string): Dish[] {
  const allDishes = [...dishes, ...dishesBatch2, ...dishesBatch3, ...dishesBatch4, ...dishesBatch5];
  return allDishes.filter((d) => d.category === category);
}

export function getDishById(id: string): Dish | undefined {
  const allDishes = [...dishes, ...dishesBatch2, ...dishesBatch3, ...dishesBatch4, ...dishesBatch5];
  return allDishes.find((d) => d.id === id);
}

export function getAllDishes(): Dish[] {
  return [...dishes, ...dishesBatch2, ...dishesBatch3, ...dishesBatch4, ...dishesBatch5];
}

export function searchDishes(query: string): Dish[] {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return getAllDishes().filter((d) => {
    const name = d.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const cat = d.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const ingredients = d.ingredients.join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return name.includes(q) || cat.includes(q) || ingredients.includes(q);
  });
}
