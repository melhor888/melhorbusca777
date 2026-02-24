import { Dish } from "./dishes";

export const dishesBatch6: Dish[] = [
  // ============ TACOS (8) ============
  { id: "tacos-cabeza", name: "Tacos de Cabeza", category: "Tacos", image: "tacos-cabeza",
    ingredients: ["Carne de cabeça de res cozida", "Tortillas de milho", "Cebola picada", "Coentro", "Salsa verde", "Limão"],
    steps: ["Cozinhe a cabeça inteira em vapor por 6-8h.", "Separe as partes: cachete, lengua, ojo, sesos.", "Pique a carne em cubos.", "Aqueça tortillas na chapa.", "Sirva com cebola, coentro e salsa.", "Esprema limão generosamente."],
    difficulty: "Avançado", time: "8h", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Os tacos de cabeza usam diferentes partes da cabeça bovina — cada parte tem textura e sabor únicos." },

  { id: "tacos-tripas", name: "Tacos de Tripas", category: "Tacos", image: "tacos-tripas",
    ingredients: ["500g de tripas de res limpas", "Banha de porco", "Sal", "Tortillas de milho", "Salsa verde", "Limão", "Coentro"],
    steps: ["Lave muito bem as tripas.", "Cozinhe em água por 1h.", "Frite na banha até crocantes e douradas.", "Corte em pedaços pequenos.", "Sirva em tortillas com salsa.", "A crocância é fundamental."],
    difficulty: "Médio", time: "2h", spiceLevel: 0, tags: ["não picante"],
    description: "Tripas fritas até ficarem super crocantes — textura irresistível que vicia." },

  { id: "tacos-buche", name: "Tacos de Buche", category: "Tacos", image: "tacos-buche",
    ingredients: ["500g de buche (estômago de porco)", "Banha", "Salsa verde", "Cebola", "Coentro", "Tortillas de milho", "Limão"],
    steps: ["Cozinhe o buche por 2h até macio.", "Pique em cubos pequenos.", "Frite na banha até dourar.", "Aqueça tortillas.", "Monte tacos com cebola e coentro.", "Sirva com salsa verde e limão."],
    difficulty: "Médio", time: "2h 30min", spiceLevel: 0, tags: ["não picante"],
    description: "Estômago de porco frito na banha — textura macia por dentro e crocante por fora." },

  { id: "tacos-nopales-queso", name: "Tacos de Nopales con Queso", category: "Tacos", image: "tacos-nopales-queso",
    ingredients: ["4 nopales grandes", "Queijo panela", "Chile serrano", "Cebola", "Coentro", "Tortillas de milho", "Salsa roja"],
    steps: ["Limpe os nopales removendo espinhos.", "Corte em tiras e grelhe.", "Corte queijo panela em cubos.", "Refogue nopales com cebola e chile.", "Adicione queijo e mexa até derreter.", "Sirva em tortillas com salsa."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 1, tags: ["suave"],
    description: "Nopales (cacto) grelhados com queijo — taco vegetariano autêntico e delicioso." },

  { id: "tacos-rajas-crema", name: "Tacos de Rajas con Crema", category: "Tacos", image: "tacos-rajas-crema",
    ingredients: ["4 chiles poblanos", "Milho em grãos", "Creme ácido", "Queijo Oaxaca", "Cebola", "Tortillas de milho", "Epazote"],
    steps: ["Asse poblanos e descasque.", "Corte em tiras (rajas).", "Refogue com cebola e milho.", "Adicione creme e queijo.", "Tempere com epazote.", "Sirva em tortillas quentes."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 1, tags: ["suave"],
    description: "Tiras de chile poblano com creme e milho — taco vegetariano cremoso e reconfortante." },

  { id: "tacos-chicharron-guisado", name: "Tacos de Chicharrón en Salsa", category: "Tacos", image: "tacos-chicharron-guisado",
    ingredients: ["200g de chicharrón seco", "Tomatillos", "Chile serrano", "Cebola", "Alho", "Epazote", "Tortillas de milho"],
    steps: ["Quebre o chicharrón em pedaços.", "Prepare salsa verde com tomatillos.", "Refogue a salsa com cebola e alho.", "Adicione o chicharrón à salsa.", "Cozinhe 10 min até amolecer.", "Sirva em tortillas com epazote."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 1, tags: ["suave"],
    description: "Chicharrón (torresmo) cozido em salsa verde — amolece e absorve todo o sabor." },

  { id: "tacos-papa-criolla", name: "Tacos de Papa", category: "Tacos", image: "tacos-papa-criolla",
    ingredients: ["4 batatas cozidas", "Tortillas de milho", "Salsa verde", "Creme ácido", "Queijo fresco", "Alface", "Óleo para fritura"],
    steps: ["Amasse as batatas cozidas.", "Recheie tortillas com purê de batata.", "Enrole e frite até crocantes.", "Escorra em papel absorvente.", "Cubra com salsa verde e creme.", "Decore com alface e queijo."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante"],
    description: "Tacos fritos de batata — baratos, simples e satisfatórios. Favoritos nos tacos de canasta." },

  { id: "tacos-mixiote", name: "Tacos de Mixiote", category: "Tacos", image: "tacos-mixiote",
    ingredients: ["500g de carne de borrego ou res", "Chiles guajillo e ancho", "Folha de mixiote (maguey)", "Alho", "Cominho", "Folhas de aguacate", "Tortillas de milho"],
    steps: ["Hidrate e bata chiles com especiarias.", "Marine a carne na pasta por 2h.", "Envolva em folhas de mixiote.", "Cozinhe no vapor por 2-3h.", "A carne deve desmanchar.", "Desfie e sirva em tacos."],
    difficulty: "Avançado", time: "3h", spiceLevel: 1, tags: ["suave"],
    description: "Carne cozida no vapor em folha de maguey — tradição do centro do México com sabor intenso." },

  // ============ ANTOJITOS (7) ============
  { id: "pambazos", name: "Pambazos", category: "Antojitos", image: "pambazos",
    ingredients: ["Pães pambazo", "Papa con chorizo", "Salsa de guajillo", "Alface", "Creme ácido", "Queijo fresco"],
    steps: ["Prepare papa con chorizo.", "Prepare salsa de chile guajillo.", "Mergulhe o pão na salsa de guajillo.", "Frite o pão banhado até crocante.", "Recheie com papa con chorizo.", "Cubra com alface, creme e queijo."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 1, tags: ["suave"],
    description: "Pão mergulhado em salsa de guajillo e frito, recheado com papa con chorizo — street food da CDMX." },

  { id: "panuchos-yucatecos", name: "Panuchos Yucatecos", category: "Antojitos", image: "panuchos-yucatecos",
    ingredients: ["Tortillas de milho", "Feijão negro refrito", "Cochinita pibil ou peru", "Cebola roxa curtida", "Tomate", "Aguacate", "Chile habanero"],
    steps: ["Infle as tortillas na chapa.", "Abra uma abertura e recheie com feijão.", "Frite a tortilla recheada.", "Cubra com cochinita ou peru.", "Adicione cebola roxa curtida.", "Sirva com tomate e aguacate."],
    difficulty: "Médio", time: "40 min", spiceLevel: 1, tags: ["suave"],
    description: "Tortillas infladas recheadas com feijão e cobertas com cochinita — antojito clássico de Yucatán." },

  { id: "salbutes-yucatecos", name: "Salbutes", category: "Antojitos", image: "salbutes-yucatecos",
    ingredients: ["Masa de milho", "Peru desfiado", "Tomate", "Cebola roxa curtida", "Aguacate", "Chile habanero", "Óleo"],
    steps: ["Molde discos de masa finos.", "Frite até inflar e dourar.", "Cubra com peru desfiado.", "Adicione tomate e cebola curtida.", "Decore com aguacate.", "Sirva com habanero à parte."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Tortillas fritas infladas cobertas com peru — semelhantes aos panuchos mas sem feijão dentro." },

  { id: "garnachas-istmenas", name: "Garnachas Istmeñas", category: "Antojitos", image: "garnachas-istmenas",
    ingredients: ["Tortillas de milho pequenas", "Carne moída", "Repolho curtido", "Salsa de chipotle", "Queijo fresco", "Cebola"],
    steps: ["Frite tortillas pequenas.", "Cubra com carne moída temperada.", "Adicione repolho curtido.", "Banha salsa de chipotle.", "Polvilhe queijo fresco.", "Sirva quente."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 2, tags: ["picante"],
    description: "Antojito do Istmo de Tehuantepec — tortilhas fritas com carne e repolho curtido." },

  { id: "picadas-veracruzanas", name: "Picadas Veracruzanas", category: "Antojitos", image: "picadas-veracruzanas",
    ingredients: ["Masa de milho", "Feijão negro", "Salsa verde", "Queijo fresco", "Cebola", "Creme ácido"],
    steps: ["Molde discos de masa com bordas.", "Cozinhe na chapa.", "Pellizque as bordas enquanto quente.", "Pincele com banha.", "Cubra com feijão, salsa e queijo.", "Sirva com creme ácido."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 0, tags: ["não picante"],
    description: "Primas veracruzanas dos sopes — bordas beliscadas e pinceladas com banha." },

  { id: "tetelas-oaxaquenas", name: "Tetelas Oaxaqueñas", category: "Antojitos", image: "tetelas-oaxaquenas",
    ingredients: ["Masa de milho", "Pasta de feijão negro", "Queijo Oaxaca", "Salsa roja", "Creme ácido"],
    steps: ["Prepare discos de masa.", "Espalhe feijão negro no centro.", "Dobre em formato triangular.", "Cozinhe na chapa até dourar.", "Sirva com salsa e creme.", "A forma triangular é emblemática."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 0, tags: ["não picante"],
    description: "Triângulos de masa recheados com feijão negro — forma geométrica única de Oaxaca." },

  { id: "bocoles-huastecos", name: "Bocoles Huastecos", category: "Antojitos", image: "bocoles-huastecos",
    ingredients: ["Masa de milho", "Banha de porco", "Chile seco", "Feijão refrito", "Queijo fresco", "Salsa"],
    steps: ["Misture masa com banha e chile moído.", "Forme discos grossos.", "Cozinhe na chapa até dourar.", "Abra ao meio.", "Recheie com feijão e queijo.", "Sirva com salsa."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 1, tags: ["suave"],
    description: "Gorditas da Huasteca — masa com chile incorporado, abertas e recheadas." },

  // ============ SOPAS & CALDOS (5) ============
  { id: "crema-elote-mexicana", name: "Crema de Elote", category: "Sopas & Caldos", image: "crema-elote-mexicana",
    ingredients: ["6 espigas de milho", "Creme de leite", "Manteiga", "Cebola", "Alho", "Epazote", "Chile poblano", "Queijo Oaxaca"],
    steps: ["Raspe os grãos das espigas.", "Refogue cebola e alho na manteiga.", "Adicione milho e cozinhe 10 min.", "Bata com creme de leite.", "Tempere com epazote.", "Sirva com queijo e rajas de poblano."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante", "suave"],
    description: "Creme aveludado de milho fresco com epazote — conforto puro em cada colherada." },

  { id: "consomé-borrego", name: "Consomé de Borrego", category: "Sopas & Caldos", image: "consomé-borrego",
    ingredients: ["1kg de ossos e carne de borrego", "Garbanzos", "Arroz", "Chile guajillo", "Cebola", "Alho", "Coentro", "Limão"],
    steps: ["Cozinhe ossos e carne por 2h.", "Adicione garbanzos e arroz.", "Prepare salsa com chile guajillo.", "Adicione ao caldo.", "Cozinhe até garbanzos macios.", "Sirva com coentro e limão."],
    difficulty: "Médio", time: "3h", spiceLevel: 1, tags: ["suave"],
    description: "Caldo robusto de borrego com grão-de-bico — prato dominical tradicional." },

  { id: "sopa-azteca", name: "Sopa Azteca", category: "Sopas & Caldos", image: "sopa-azteca",
    ingredients: ["Chile pasilla", "Chile chipotle", "Tomate", "Caldo de frango", "Tortillas fritas", "Abacate", "Queijo Oaxaca", "Creme ácido"],
    steps: ["Asse e bata tomates com chiles.", "Frite a salsa em óleo quente.", "Adicione caldo e ferva.", "Frite tiras de tortilla.", "Sirva caldo com tortillas crocantes.", "Decore com abacate, queijo e creme."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 2, tags: ["picante", "defumado"],
    description: "Variação da sopa de tortilla com chile pasilla frito — mais intensa e aromática." },

  { id: "chileatole", name: "Chileatole", category: "Sopas & Caldos", image: "chileatole",
    ingredients: ["Milho em grãos", "Masa de milho", "Chile poblano", "Epazote", "Caldo de frango", "Queijo fresco"],
    steps: ["Cozinhe milho em caldo.", "Dissolva masa em água e adicione.", "Adicione poblano em tiras.", "Tempere com epazote.", "Cozinhe até engrossar.", "Sirva com queijo esfarelado."],
    difficulty: "Fácil", time: "35 min", spiceLevel: 1, tags: ["suave"],
    description: "Atole salgado com milho e chile — espessado com masa, reconfortante e aromático." },

  { id: "mole-de-olla", name: "Mole de Olla", category: "Sopas & Caldos", image: "mole-de-olla",
    ingredients: ["500g de chambarete (ossobuco)", "Chiles ancho e pasilla", "Milho em espiga", "Chayote", "Feijão verde", "Xoconostle", "Epazote"],
    steps: ["Cozinhe a carne com osso por 1h.", "Hidrate e bata os chiles.", "Adicione salsa ao caldo.", "Junte milho e legumes.", "Cozinhe até tudo ficar macio.", "Finalize com epazote."],
    difficulty: "Médio", time: "2h", spiceLevel: 1, tags: ["suave"],
    description: "Caldo de chile com carne e legumes — diferente do mole seco, é uma sopa robusta e rústica." },

  // ============ CARNES (5) ============
  { id: "chilorio-sinaloa", name: "Chilorio Sinaloense", category: "Carnes Mexicanas", image: "chilorio-sinaloa",
    ingredients: ["1kg de pernil suíno", "Chiles ancho e guajillo", "Alho", "Cominho", "Orégano", "Vinagre", "Banha"],
    steps: ["Cozinhe a carne até macia e desfie.", "Hidrate e bata os chiles com especiarias.", "Frite a pasta de chile na banha.", "Adicione a carne desfiada.", "Frite mexendo até absorver todo o molho.", "A carne deve ficar seca e vermelha."],
    difficulty: "Médio", time: "2h", spiceLevel: 2, tags: ["picante", "intenso"],
    description: "Carne desfiada frita em pasta de chile — sabor intenso de Sinaloa. Perfeita para burritos e tortas." },

  { id: "poc-chuc-yucatan", name: "Poc Chuc", category: "Carnes Mexicanas", image: "poc-chuc-yucatan",
    ingredients: ["500g de carne de porco fatiada fina", "Suco de laranja amarga", "Limão", "Cebola roxa", "Tomate", "Chile habanero", "Tortillas de milho"],
    steps: ["Marine a carne em suco de laranja amarga.", "Grelhe na brasa em fogo alto.", "Prepare xni-pec (salsa yucateca).", "Grelhe cebola e tomate.", "Sirva a carne com cebola e salsa.", "Acompanhe com feijão negro e tortillas."],
    difficulty: "Fácil", time: "30 min + marinada", spiceLevel: 1, tags: ["suave"],
    description: "Carne grelhada na brasa yucateca — marinada em laranja amarga e servida com xni-pec." },

  { id: "asado-de-boda", name: "Asado de Boda", category: "Carnes Mexicanas", image: "asado-de-boda",
    ingredients: ["1kg de carne de porco", "Chiles ancho e guajillo", "Chocolate", "Canela", "Orégano", "Cominho", "Alho", "Arroz"],
    steps: ["Cozinhe a carne em cubos.", "Hidrate e bata os chiles com especiarias.", "Frite a salsa em óleo.", "Adicione chocolate e canela.", "Junte a carne e cozinhe 30 min.", "Sirva com arroz e tortillas."],
    difficulty: "Avançado", time: "2h", spiceLevel: 1, tags: ["suave"],
    description: "Guisado de celebração de Zacatecas — carne em salsa de chile com chocolate. Servido em casamentos." },

  { id: "manchamanteles-puebla", name: "Manchamanteles", category: "Carnes Mexicanas", image: "manchamanteles-puebla",
    ingredients: ["Frango ou porco", "Chile ancho", "Abacaxi", "Banana", "Maçã", "Batata doce", "Canela", "Chocolate"],
    steps: ["Cozinhe a carne.", "Hidrate e bata os chiles com frutas.", "Frite o molho em óleo.", "Adicione caldo e frutas em pedaços.", "Cozinhe até tudo ficar macio.", "O molho 'mancha toalhas' — daí o nome."],
    difficulty: "Avançado", time: "2h", spiceLevel: 1, tags: ["suave"],
    description: "Guisado com frutas e chile que 'mancha toalhas de mesa' — mole frutado de Puebla." },

  { id: "discada-nortena", name: "Discada Norteña", category: "Carnes Mexicanas", image: "discada-nortena",
    ingredients: ["Carne de res", "Carne de porco", "Chorizo", "Bacon", "Pimentão", "Cebola", "Chile jalapeño", "Cerveja", "Tortillas de farinha"],
    steps: ["Aqueça o disco (arado) na brasa.", "Frite bacon e chorizo.", "Adicione carnes em cubos.", "Junte pimentão, cebola e jalapeño.", "Despeje cerveja e cozinhe.", "Sirva com tortillas de farinha."],
    difficulty: "Fácil", time: "40 min", spiceLevel: 1, tags: ["suave"],
    description: "Mix de carnes feito em disco de arado na brasa — tradição vaqueira do norte do México." },

  // ============ MARISCOS (5) ============
  { id: "camarones-gobernador", name: "Camarões Gobernador", category: "Mariscos", image: "camarones-gobernador",
    ingredients: ["500g de camarões", "Queijo Oaxaca", "Pimentão", "Cebola", "Tomate", "Chile poblano", "Creme", "Tortillas de farinha"],
    steps: ["Refogue camarões com legumes.", "Adicione creme e queijo.", "Aqueça tortillas de farinha.", "Recheie com o guisado de camarão.", "Dobre e grelhe até dourar.", "Sirva com guacamole."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 0, tags: ["não picante"],
    description: "Tacos de camarão com queijo gratinado — criação de Sinaloa que conquistou todo o México." },

  { id: "ceviche-negro-sinaloa", name: "Ceviche Negro Sinaloense", category: "Mariscos", image: "ceviche-negro-sinaloa",
    ingredients: ["500g de camarão", "Soja", "Salsa inglesa", "Limão", "Cebola roxa", "Pepino", "Chile serrano", "Coentro", "Aguacate"],
    steps: ["Corte camarões em pedaços.", "Marine em limão com soja e salsa inglesa.", "Adicione cebola, pepino e chile.", "Misture e marine 20 min.", "A cor escura vem da soja.", "Sirva com tostadas e aguacate."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 1, tags: ["suave"],
    description: "Ceviche escuro de Sinaloa — a soja dá cor e sabor umami únicos." },

  { id: "mojarra-frita-veracruz", name: "Mojarra Frita", category: "Mariscos", image: "mojarra-frita-veracruz",
    ingredients: ["1 mojarra inteira", "Alho", "Limão", "Sal e pimenta", "Óleo para fritura", "Arroz", "Salsa roja", "Tortillas"],
    steps: ["Faça cortes na mojarra.", "Tempere com alho, limão e sal.", "Frite em óleo quente até crocante.", "O peixe deve ficar dourado.", "Sirva com arroz e salsa.", "Acompanhe com tortillas e limão."],
    difficulty: "Médio", time: "30 min", spiceLevel: 0, tags: ["não picante"],
    description: "Mojarra frita inteira — prato clássico das costas e lagos mexicanos." },

  { id: "camarones-cucaracha", name: "Camarões a la Cucaracha", category: "Mariscos", image: "camarones-cucaracha",
    ingredients: ["500g de camarões grandes com cabeça", "Chiles guajillo e de árbol", "Alho", "Cebola", "Manteiga", "Limão"],
    steps: ["Abra camarões sem descascar.", "Hidrate e bata chiles com alho.", "Pincele camarões com pasta de chile.", "Grelhe na chapa com manteiga.", "O nome 'cucaracha' vem da cor escura.", "Sirva com limão e arroz."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 2, tags: ["picante", "intenso"],
    description: "Camarões cobertos em pasta de chile escura — o apelido vem da cor, não do sabor!" },

  { id: "tiritas-zihuatanejo", name: "Tiritas de Pescado Zihuatanejo", category: "Mariscos", image: "tiritas-zihuatanejo",
    ingredients: ["400g de peixe fresco (sierra)", "15 limões", "Cebola roxa", "Chile habanero", "Coentro", "Sal"],
    steps: ["Corte peixe em tiras finas.", "Cubra com suco de limão.", "Adicione cebola roxa em rodelas.", "Pique habanero finamente.", "Marine 15-20 min.", "Sirva com tostadas."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 3, tags: ["picante", "intenso"],
    description: "Tiras de peixe em limão e habanero — ceviche de Guerrero, simples e extremamente picante." },

  // ============ PRATOS TRADICIONAIS (5) ============
  { id: "enchiladas-potosinas", name: "Enchiladas Potosinas", category: "Pratos Tradicionais", image: "enchiladas-potosinas",
    ingredients: ["Masa de milho com chile ancho", "Queijo fresco", "Cebola", "Creme ácido", "Guacamole", "Alface"],
    steps: ["Prepare masa misturando com pasta de chile ancho.", "Forme tortillas vermelhas.", "Recheie com queijo fresco.", "Dobre ao meio e frite.", "Sirva com creme e guacamole.", "A masa já tem chile incorporado."],
    difficulty: "Médio", time: "40 min", spiceLevel: 1, tags: ["suave"],
    description: "De San Luis Potosí — a masa já tem chile ancho, dando cor vermelha. Recheadas com queijo e fritas." },

  { id: "enmoladas", name: "Enmoladas", category: "Pratos Tradicionais", image: "enmoladas",
    ingredients: ["Tortillas de milho", "Mole poblano", "Frango desfiado", "Queijo fresco", "Creme ácido", "Cebola roxa", "Gergelim"],
    steps: ["Prepare ou use mole pronto.", "Passe tortillas no mole quente.", "Recheie com frango e enrole.", "Cubra com mais mole.", "Decore com queijo, creme e cebola.", "Polvilhe gergelim."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 1, tags: ["suave"],
    description: "Tortillas banhadas em mole — a versão com mole das enchiladas. Rico e aveludado." },

  { id: "chilaquiles-divorciados", name: "Chilaquiles Divorciados", category: "Pratos Tradicionais", image: "chilaquiles-divorciados",
    ingredients: ["Totopos de tortilla", "Salsa verde", "Salsa roja", "Ovos fritos", "Creme ácido", "Queijo fresco", "Cebola roxa"],
    steps: ["Frite totopos até crocantes.", "Prepare salsa verde e roja.", "Divida os totopos em dois lados.", "Um lado com salsa verde, outro com roja.", "Coloque ovo frito no meio.", "Cubra com creme, queijo e cebola."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 1, tags: ["suave"],
    description: "Metade verde, metade vermelho — o prato mais fotogênico do café da manhã mexicano." },

  { id: "enchiladas-mineras", name: "Enchiladas Mineras", category: "Pratos Tradicionais", image: "enchiladas-mineras",
    ingredients: ["Tortillas de milho", "Chile guajillo", "Papa en cubos", "Cenoura", "Queijo fresco", "Alface", "Creme ácido"],
    steps: ["Hidrate e bata chiles guajillo.", "Passe tortillas no molho e frite.", "Recheie com queijo.", "Sirva com papa e cenoura cozidas.", "Cubra com alface e creme.", "Originais de Guanajuato."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 1, tags: ["suave"],
    description: "Enchiladas de Guanajuato com batata e cenoura — nomeadas em honra aos mineiros da região." },

  { id: "tamal-elote-dulce", name: "Tamal de Elote", category: "Pratos Tradicionais", image: "tamal-elote-dulce",
    ingredients: ["8 espigas de milho fresco", "Manteiga", "Açúcar", "Canela", "Leite condensado", "Passas", "Folhas de milho"],
    steps: ["Raspe grãos das espigas.", "Bata com manteiga e açúcar.", "Adicione leite condensado e canela.", "Espalhe em folhas de milho.", "Adicione passas.", "Cozinhe no vapor por 1h."],
    difficulty: "Médio", time: "1h 30min", spiceLevel: 0, tags: ["não picante"],
    description: "Tamal doce de milho fresco — textura cremosa e sabor puro de milho. Favorito das crianças." },

  // ============ SOBREMESAS (5) ============
  { id: "marquesitas-yucatan", name: "Marquesitas Yucatecas", category: "Sobremesas", image: "marquesitas-yucatan",
    ingredients: ["Farinha de trigo", "Leite", "Ovos", "Manteiga", "Baunilha", "Queijo Edam (bola)", "Nutella ou cajeta"],
    steps: ["Prepare massa líquida de crepe.", "Cozinhe em máquina de waffle fino.", "Recheie com queijo Edam ralado.", "Adicione Nutella ou cajeta.", "Enrole em formato de cone.", "Coma quente — queijo derretendo por dentro."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 0, tags: ["não picante"],
    description: "Waffle crocante yucateco recheado com queijo holandês e cajeta — street food noturno de Mérida." },

  { id: "dulce-calabaza", name: "Dulce de Calabaza en Tacha", category: "Sobremesas", image: "dulce-calabaza",
    ingredients: ["1 abóbora grande", "Piloncillo", "Canela em pau", "Guayaba", "Laranja", "Tecojotes"],
    steps: ["Corte abóbora em pedaços grandes.", "Cubra com piloncillo raspado.", "Adicione canela e cascas de laranja.", "Cozinhe em fogo baixo por 2h.", "A abóbora deve ficar translúcida.", "Sirva com leite ou sozinha."],
    difficulty: "Fácil", time: "2h 30min", spiceLevel: 0, tags: ["não picante"],
    description: "Abóbora cozida em calda de piloncillo — sobremesa de Dia dos Mortos e época de frio." },

  { id: "cocada-mexicana", name: "Cocada Mexicana", category: "Sobremesas", image: "cocada-mexicana",
    ingredients: ["Coco ralado fresco", "Açúcar", "Leite", "Ovos", "Baunilha", "Canela"],
    steps: ["Cozinhe coco ralado com leite e açúcar.", "Mexa constantemente por 30 min.", "Adicione ovos batidos.", "Cozinhe até desgrudar da panela.", "Despeje em forma untada.", "Deixe esfriar e corte em quadrados."],
    difficulty: "Fácil", time: "45 min", spiceLevel: 0, tags: ["não picante"],
    description: "Doce de coco mexicano — encontrado em todos os mercados e tienditas do país." },

  { id: "jericalla-jalisco", name: "Jericalla Jalisciense", category: "Sobremesas", image: "jericalla-jalisco",
    ingredients: ["1 litro de leite", "6 ovos", "1 xícara de açúcar", "Baunilha", "Canela em pau"],
    steps: ["Ferva leite com canela e baunilha.", "Bata ovos com açúcar.", "Misture leite quente (temperado) nos ovos.", "Coe e distribua em refratários.", "Asse em banho-maria a 180°C por 40 min.", "O topo deve ficar queimado — é a assinatura."],
    difficulty: "Fácil", time: "1h", spiceLevel: 0, tags: ["não picante"],
    description: "Flan queimado de Guadalajara — topo caramelizado e escuro é o charme. Criação de freiras." },

  { id: "camote-poblano", name: "Camotes Poblanos", category: "Sobremesas", image: "camote-poblano",
    ingredients: ["Batata-doce", "Açúcar", "Leite", "Essência de frutas (morango, abacaxi, limão)", "Papel encerado"],
    steps: ["Cozinhe e amasse as batatas-doces.", "Adicione açúcar e leite.", "Cozinhe mexendo até desgrudar.", "Adicione essência de frutas.", "Molde em formato cilíndrico.", "Enrole em papel encerado colorido."],
    difficulty: "Fácil", time: "1h", spiceLevel: 0, tags: ["não picante"],
    description: "Doce de batata-doce de Puebla — cilindros coloridos em papel brilhante. Souvenir clássico." },

  // ============ BEBIDAS (5) ============
  { id: "agua-tamarindo", name: "Agua de Tamarindo", category: "Bebidas", image: "agua-tamarindo",
    ingredients: ["200g de tamarindo", "Açúcar", "Água", "Gelo", "Chile en polvo (opcional)"],
    steps: ["Cozinhe tamarindo em água.", "Amasse e coe para remover sementes.", "Adicione açúcar a gosto.", "Dilua com água gelada.", "Sirva com gelo.", "Opcional: borda com chile e limão."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 0, tags: ["não picante"],
    description: "Água fresca de tamarindo — doce e ácida. Uma das bebidas mais populares do México." },

  { id: "ponche-navideno", name: "Ponche Navideño", category: "Bebidas", image: "ponche-navideno",
    ingredients: ["Tecojotes", "Guayaba", "Cana-de-açúcar", "Tamarindo", "Jamaica", "Canela", "Piloncillo", "Maçã"],
    steps: ["Ferva água com piloncillo e canela.", "Adicione tecojotes e cana em pedaços.", "Junte guayaba, tamarindo e maçã.", "Cozinhe em fogo baixo por 30 min.", "Adicione jamaica.", "Sirva quente — opcional: piquete de tequila."],
    difficulty: "Fácil", time: "45 min", spiceLevel: 0, tags: ["não picante"],
    description: "Ponche quente natalino com frutas — presença obrigatória nas posadas de dezembro." },

  { id: "paloma-coctel", name: "Paloma", category: "Bebidas", image: "paloma-coctel",
    ingredients: ["60ml de tequila reposado", "Suco de toranja", "Suco de limão", "Refrigerante de toranja", "Sal", "Gelo"],
    steps: ["Passe limão na borda e mergulhe em sal.", "Adicione gelo ao copo.", "Despeje tequila e limão.", "Complete com suco e refrigerante de toranja.", "Mexa delicadamente.", "Decore com gomo de toranja."],
    difficulty: "Fácil", time: "5 min", spiceLevel: 0, tags: ["não picante"],
    description: "O coquetel mais bebido no México — supera a margarita em vendas. Tequila com toranja." },

  { id: "cantarito-jalisco", name: "Cantarito de Jalisco", category: "Bebidas", image: "cantarito-jalisco",
    ingredients: ["60ml de tequila", "Suco de laranja", "Suco de toranja", "Suco de limão", "Refrigerante de toranja", "Sal e chile", "Copo de barro"],
    steps: ["Use copo de barro (cantarito).", "Adicione sal e chile na borda.", "Despeje tequila.", "Adicione sucos cítricos.", "Complete com refrigerante.", "O barro dá sabor especial."],
    difficulty: "Fácil", time: "5 min", spiceLevel: 1, tags: ["suave"],
    description: "Coquetel de tequila cítrico servido em copo de barro — original de Tequila, Jalisco." },

  { id: "tascalate-chiapas", name: "Tascalate de Chiapas", category: "Bebidas", image: "tascalate-chiapas",
    ingredients: ["Milho tostado", "Cacau", "Achiote", "Canela", "Açúcar", "Pepitas de abóbora"],
    steps: ["Torre milho até dourar.", "Moa com cacau, canela e achiote.", "A mistura fica vermelha pelo achiote.", "Dissolva 2 colheres em leite ou água.", "Mexa bem até homogêneo.", "Sirva frio ou quente."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 0, tags: ["não picante"],
    description: "Bebida pré-hispânica de Chiapas — milho, cacau e achiote. Cor vermelha e sabor único." },

  // ============ ARROZ & FEIJÃO (3) ============
  { id: "frijoles-borrachos", name: "Frijoles Borrachos", category: "Arroz & Feijão", image: "frijoles-borrachos",
    ingredients: ["500g de feijão bayo ou pinto", "Cerveja escura", "Bacon", "Chorizo", "Chile serrano", "Cebola", "Tomate", "Coentro"],
    steps: ["Cozinhe o feijão até macio.", "Frite bacon e chorizo.", "Refogue cebola, tomate e chile.", "Adicione feijão com caldo.", "Despeje cerveja escura.", "Cozinhe 15 min e sirva com coentro."],
    difficulty: "Fácil", time: "1h 30min", spiceLevel: 1, tags: ["suave"],
    description: "Feijão 'bêbado' com cerveja, bacon e chorizo — indulgente e irresistível." },

  { id: "arroz-con-chepil", name: "Arroz con Chepil", category: "Arroz & Feijão", image: "arroz-con-chepil",
    ingredients: ["2 xícaras de arroz", "Chepil (erva oaxaqueña)", "Alho", "Cebola", "Caldo de frango", "Óleo"],
    steps: ["Frite arroz em óleo.", "Bata chepil com caldo.", "Adicione ao arroz.", "Tampe e cozinhe 20 min.", "Não mexa durante cozimento.", "O chepil dá aroma único."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante"],
    description: "Arroz aromático com chepil — erva oaxaqueña que dá sabor e perfume incomparáveis." },

  { id: "esquites-cremosos", name: "Esquites con Tuétano", category: "Arroz & Feijão", image: "esquites-cremosos",
    ingredients: ["6 espigas de milho", "Tuétano (medula óssea)", "Epazote", "Chile serrano", "Maionese", "Queijo cotija", "Limão"],
    steps: ["Raspe grãos de milho.", "Derreta tuétano em panela.", "Refogue milho com epazote e chile.", "Cozinhe 10 min.", "Sirva com maionese e queijo.", "Esprema limão por cima."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 1, tags: ["suave"],
    description: "Esquites gourmet com tuétano — a medula óssea adiciona riqueza extraordinária." },

  // ============ TAMALES (2) ============
  { id: "corundas-michoacan", name: "Corundas Michoacanas", category: "Tamales & Massas", image: "corundas-michoacan",
    ingredients: ["Masa de milho", "Banha batida", "Tequesquite (bicarbonato natural)", "Folhas de milho verdes", "Salsa verde", "Creme ácido"],
    steps: ["Bata banha até fofa.", "Misture com masa e tequesquite.", "Forme em triângulos.", "Envolva em folhas de milho verdes.", "Cozinhe no vapor por 40 min.", "Sirva com salsa e creme."],
    difficulty: "Avançado", time: "1h 30min", spiceLevel: 0, tags: ["não picante"],
    description: "Tamales triangulares de Michoacán em folha verde — textura suave e formato único." },

  { id: "uchepos-michoacan", name: "Uchepos", category: "Tamales & Massas", image: "uchepos-michoacan",
    ingredients: ["12 espigas de milho fresco", "Manteiga", "Açúcar ou sal", "Creme ácido", "Salsa verde"],
    steps: ["Raspe milho fresco das espigas.", "Bata com manteiga.", "Adicione açúcar (doce) ou sal (salgado).", "Envolva em folhas de milho frescas.", "Cozinhe no vapor por 30 min.", "Sirva com creme e salsa."],
    difficulty: "Médio", time: "1h", spiceLevel: 0, tags: ["não picante"],
    description: "Tamales de milho fresco de Michoacán — textura cremosa e sabor puro de milho." },
];
