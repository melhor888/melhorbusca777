import { Dish } from "./dishes";

export const dishesBatch2: Dish[] = [
  // ============ TACOS (5) ============
  { id: "tacos-suadero", name: "Tacos de Suadero", category: "Tacos", image: "tacos-suadero",
    ingredients: ["500g de suadero (carne entre costela e pele)", "Banha para fritar", "Sal", "Tortillas de milho", "Cebola", "Coentro", "Salsa verde"],
    steps: ["Cozinhe o suadero em água por 1h.", "Frite na banha até dourar e ficar crocante.", "Pique em pedaços pequenos.", "Aqueça tortillas na chapa.", "Sirva com cebola, coentro e salsa.", "Esprema limão."],
    difficulty: "Médio", time: "1h 30min",
    description: "Suadero é uma carne exclusiva do México — fica entre a costela e a pele. Textura única e sabor profundo." },

  { id: "tacos-campechanos", name: "Tacos Campechanos", category: "Tacos", image: "tacos-campechanos",
    ingredients: ["Carne de res (bife)", "Chorizo mexicano", "Longaniza", "Chicharrón", "Tortillas de milho", "Salsa", "Cebola e coentro"],
    steps: ["Grelhe a carne na chapa.", "Frite chorizo e longaniza.", "Quebre chicharrón em pedaços.", "Misture todas as carnes.", "Sirva em tortillas com salsa.", "O segredo é a combinação de texturas."],
    difficulty: "Fácil", time: "25 min",
    description: "Mix de várias carnes em um só taco — carne, chorizo, longaniza e chicharrón. Explosão de sabores." },

  { id: "tacos-barbacoa-borrego", name: "Tacos de Barbacoa de Borrego", category: "Tacos", image: "tacos-barbacoa-borrego",
    ingredients: ["1kg de carne de borrego", "Folhas de maguey", "Chiles guajillo", "Alho e cebola", "Cominho e orégano", "Tortillas de milho"],
    steps: ["Prepare pasta com chiles, alho e especiarias.", "Cubra a carne com a pasta.", "Envolva em folhas de maguey.", "Cozinhe em panela por 4-5h.", "Desfie e sirva em tacos.", "Acompanhe com consomé."],
    difficulty: "Avançado", time: "5h",
    description: "A verdadeira barbacoa de borrego do Estado do México — cozida em folhas de maguey com aroma inconfundível." },

  { id: "tacos-canasta", name: "Tacos de Canasta", category: "Tacos", image: "tacos-canasta",
    ingredients: ["Tortillas de milho", "Feijão refrito", "Papa com chorizo", "Chicharrón prensado", "Óleo ou banha", "Cesta com pano"],
    steps: ["Prepare os recheios separadamente.", "Recheie e dobre os tacos.", "Acomode em cesta forrada com pano.", "Borrife óleo quente sobre os tacos.", "Cubra com pano e deixe suar.", "Os tacos ficam macios e oleosos — perfeitos."],
    difficulty: "Fácil", time: "40 min",
    description: "Tacos 'de cesta' ou 'sudados' — transportados em cesta coberta. Baratos, saborosos e onipresentes nas ruas." },

  { id: "tacos-gobernador", name: "Tacos Gobernador", category: "Tacos", image: "tacos-gobernador",
    ingredients: ["400g de camarões", "Queijo Oaxaca", "Pimentão", "Cebola", "Tomate", "Tortillas de farinha", "Manteiga"],
    steps: ["Refogue camarões com pimentão, cebola e tomate.", "Aqueça tortilla de farinha com manteiga.", "Coloque queijo, camarão e mais queijo.", "Dobre e grelhe até o queijo derreter.", "Corte ao meio.", "Sirva com guacamole."],
    difficulty: "Fácil", time: "20 min",
    description: "Criados em Mazatlán, Sinaloa — quesadilla de camarão que virou taco. Nomeado em honra a um governador." },

  // ============ ANTOJITOS (5) ============
  { id: "tlacoyos", name: "Tlacoyos", category: "Antojitos", image: "tlacoyos",
    ingredients: ["Masa de milho azul ou branca", "Feijão ou requesón", "Nopales picados", "Queijo fresco", "Salsa verde", "Creme ácido"],
    steps: ["Molde a masa em formato oval.", "Recheie com feijão ou requesón no centro.", "Feche e achate formando losango.", "Cozinhe na chapa até dourar.", "Cubra com nopales, queijo e salsa.", "Sirva com creme."],
    difficulty: "Fácil", time: "30 min",
    description: "Antojito pré-hispânico — masa em formato de losango recheada com feijão. Encontrado nos mercados desde os astecas." },

  { id: "huaraches", name: "Huaraches", category: "Antojitos", image: "huaraches",
    ingredients: ["Masa de milho", "Feijão refrito", "Carne al pastor ou bistec", "Salsa verde", "Creme ácido", "Queijo fresco", "Cebola e coentro"],
    steps: ["Molde masa em formato de sandália (oval alongado).", "Cozinhe na chapa.", "Espalhe feijão refrito.", "Cubra com carne.", "Adicione salsa, creme e queijo.", "Finalize com cebola e coentro."],
    difficulty: "Fácil", time: "30 min",
    description: "Receita em formato de sandália (huarache) — base de masa grossa coberta com carnes e salsas." },

  { id: "flautas", name: "Flautas", category: "Antojitos", image: "flautas",
    ingredients: ["Tortillas de milho", "Frango desfiado", "Óleo para fritura", "Creme ácido", "Salsa verde", "Alface", "Queijo fresco"],
    steps: ["Recheie tortillas com frango.", "Enrole bem apertado.", "Prenda com palito se necessário.", "Frite até crocantes e douradas.", "Sirva com creme, salsa e alface.", "Cubra com queijo esfarelado."],
    difficulty: "Fácil", time: "25 min",
    description: "Tortillas enroladas e fritas como flautas (instrumento). Crocantes por fora, recheio suculento por dentro." },

  { id: "molletes", name: "Molletes", category: "Antojitos", image: "molletes",
    ingredients: ["Bolillos (pão francês mexicano)", "Feijão refrito", "Queijo Oaxaca ou manchego", "Pico de gallo", "Jalapeños em conserva"],
    steps: ["Corte os bolillos ao meio.", "Espalhe feijão refrito generosamente.", "Cubra com queijo.", "Gratine no forno até o queijo derreter.", "Cubra com pico de gallo.", "Sirva com jalapeños."],
    difficulty: "Fácil", time: "15 min",
    description: "Pão gratinado com feijão e queijo — café da manhã rápido e reconfortante. Todo mexicano cresceu comendo molletes." },

  { id: "esquites", name: "Esquites", category: "Antojitos", image: "esquites",
    ingredients: ["4 espigas de milho (grãos)", "Manteiga", "Epazote", "Chile serrano", "Limão", "Maionese", "Queijo cotija", "Chile em pó"],
    steps: ["Refogue os grãos de milho em manteiga.", "Adicione epazote e chile serrano.", "Cozinhe até o milho ficar macio.", "Sirva em copo.", "Adicione maionese, limão e queijo.", "Polvilhe chile em pó."],
    difficulty: "Fácil", time: "20 min",
    description: "Versão em copo do elote — grãos de milho cozidos com epazote, servidos com maionese e queijo. Street food clássico." },

  // ============ SOPAS & CALDOS (5) ============
  { id: "caldo-res", name: "Caldo de Res", category: "Sopas & Caldos", image: "caldo-res",
    ingredients: ["500g de carne com osso (chambarete)", "Milho em espiga", "Cenoura", "Batata", "Abobrinha", "Repolho", "Chayote", "Coentro"],
    steps: ["Cozinhe a carne com cebola e alho por 1h.", "Adicione milho e cenoura.", "Cozinhe mais 20 min.", "Adicione batata, chayote e abobrinha.", "Finalize com repolho nos últimos 10 min.", "Sirva com arroz, limão e chile."],
    difficulty: "Fácil", time: "1h 30min",
    description: "Caldo completo com carne bovina e legumes — refeição inteira numa tigela. Tradicional dos domingos." },

  { id: "birria-caldo", name: "Caldo de Birria", category: "Sopas & Caldos", image: "birria-caldo",
    ingredients: ["1kg de carne bovina ou de borrego", "Chiles guajillo e ancho", "Tomate", "Especiarias", "Cebola", "Alho", "Orégano", "Limão"],
    steps: ["Cozinhe a carne lentamente com aromáticos.", "Prepare salsa com chiles hidratados.", "Adicione salsa ao caldo.", "Cozinhe por 3h até a carne desmanchar.", "Sirva em tigela funda.", "Acompanhe com cebola, coentro, limão e tortillas."],
    difficulty: "Avançado", time: "3h 30min",
    description: "O consomé vermelho e aromático da birria — perfeito para curar qualquer mal." },

  { id: "sopa-fideo", name: "Sopa de Fideo", category: "Sopas & Caldos", image: "sopa-fideo",
    ingredients: ["200g de macarrão fideo", "Tomate", "Cebola", "Alho", "Caldo de frango", "Coentro", "Limão", "Chile serrano"],
    steps: ["Torre o fideo no óleo até dourar.", "Bata tomate, cebola e alho.", "Adicione a salsa ao fideo.", "Despeje caldo de frango.", "Cozinhe até o fideo ficar macio.", "Sirva com coentro e limão."],
    difficulty: "Fácil", time: "20 min",
    description: "Sopa de macarrão fino em caldo de tomate — comfort food mexicano que toda mamá prepara." },

  { id: "sopa-lima", name: "Sopa de Lima Yucateca", category: "Sopas & Caldos", image: "sopa-lima",
    ingredients: ["Frango desfiado", "Lima (limão yucateco)", "Tortillas fritas em tiras", "Tomate", "Cebola", "Pimentão", "Caldo de frango", "Orégano yucateco"],
    steps: ["Prepare caldo de frango aromático.", "Refogue cebola, tomate e pimentão.", "Adicione o caldo e o frango desfiado.", "Esprema suco de lima generosamente.", "Frite tiras de tortilla.", "Sirva com tiras crocantes e lima fresca."],
    difficulty: "Fácil", time: "35 min",
    description: "Sopa cítrica de Yucatán com lima fresca e tiras de tortilla. Perfumada e reconfortante." },

  { id: "pozole-verde", name: "Pozole Verde", category: "Sopas & Caldos", image: "pozole-verde",
    ingredients: ["500g de carne de porco", "Milho hominy", "Tomatillos", "Chile poblano", "Chile serrano", "Pepitas de abóbora", "Coentro", "Alface e rabanete"],
    steps: ["Cozinhe a carne e o hominy.", "Bata tomatillos, chiles e pepitas.", "Adicione o molho verde ao caldo.", "Cozinhe 30 min.", "Sirva com alface, rabanete e orégano.", "Acompanhe com tostadas."],
    difficulty: "Médio", time: "2h",
    description: "Versão verde do pozole, de Guerrero — mais fresca e herbácea que a vermelha." },

  // ============ CARNES MEXICANAS (5) ============
  { id: "tinga-res", name: "Tinga de Res", category: "Carnes Mexicanas", image: "tinga-res",
    ingredients: ["500g de carne bovina (acém)", "Chiles chipotle em adobo", "Tomate", "Cebola", "Alho", "Orégano", "Louro"],
    steps: ["Cozinhe a carne até macia e desfie.", "Refogue cebola e adicione tomate.", "Adicione chipotles e caldo.", "Junte a carne desfiada.", "Cozinhe 20 min.", "Sirva em tostadas com creme e queijo."],
    difficulty: "Fácil", time: "1h 30min",
    description: "Carne desfiada em molho de chipotle — sabor defumado e levemente picante." },

  { id: "chile-verde", name: "Chile Verde con Cerdo", category: "Carnes Mexicanas", image: "chile-verde",
    ingredients: ["600g de pernil suíno em cubos", "Tomatillos", "Chile serrano", "Chile poblano", "Cebola", "Alho", "Coentro"],
    steps: ["Sele a carne em panela quente.", "Cozinhe tomatillos e chiles.", "Bata com cebola, alho e coentro.", "Adicione a salsa à carne.", "Cozinhe por 40 min.", "Sirva com arroz e tortillas."],
    difficulty: "Médio", time: "1h",
    description: "Guisado de porco em molho de tomatillo — ácido, fresco e reconfortante." },

  { id: "picadillo", name: "Picadillo", category: "Carnes Mexicanas", image: "picadillo",
    ingredients: ["500g de carne moída", "Batata em cubos", "Cenoura em cubos", "Tomate", "Cebola", "Chile chipotle", "Cominho", "Ervilhas"],
    steps: ["Frite a carne moída até dourar.", "Adicione cebola e alho.", "Junte tomate, batata e cenoura.", "Tempere com chipotle e cominho.", "Cozinhe até legumes ficarem macios.", "Sirva com arroz e tortillas."],
    difficulty: "Fácil", time: "35 min",
    description: "Carne moída com batata — comfort food mexicano. Serve para tacos, empanadas e chiles rellenos." },

  { id: "pollo-mole-verde", name: "Pollo en Mole Verde", category: "Carnes Mexicanas", image: "pollo-mole-verde",
    ingredients: ["1 frango em pedaços", "Tomatillos", "Chile poblano", "Pepitas de abóbora", "Alface", "Coentro", "Epazote", "Cebola"],
    steps: ["Cozinhe o frango e reserve o caldo.", "Bata tomatillos, chiles, pepitas e ervas.", "Frite a salsa em óleo.", "Adicione caldo até consistência desejada.", "Mergulhe o frango no mole verde.", "Sirva com arroz e tortillas."],
    difficulty: "Médio", time: "1h",
    description: "Mole verde de pepitas — mais leve que o poblano mas igualmente delicioso. Tradição de Oaxaca e Puebla." },

  { id: "albondigas", name: "Albóndigas en Chipotle", category: "Carnes Mexicanas", image: "albondigas",
    ingredients: ["500g de carne moída", "Arroz cozido", "Ovo", "Cominho", "Chiles chipotle", "Tomate", "Cebola", "Caldo de frango"],
    steps: ["Misture carne, arroz, ovo e temperos.", "Forme bolinhas e reserve.", "Bata tomate com chipotle.", "Frite a salsa e adicione caldo.", "Cozinhe as albóndigas na salsa por 25 min.", "Sirva com arroz e tortillas."],
    difficulty: "Médio", time: "45 min",
    description: "Almôndegas mexicanas com arroz dentro, cozidas em salsa de chipotle. Prato caseiro e reconfortante." },

  // ============ SOBREMESAS (5) ============
  { id: "pan-de-muerto", name: "Pan de Muerto", category: "Sobremesas", image: "pan-de-muerto",
    ingredients: ["500g de farinha", "Ovos", "Manteiga", "Açúcar", "Água de flor de laranjeira", "Raspas de laranja", "Fermento", "Sal"],
    steps: ["Misture farinha, fermento, açúcar e sal.", "Adicione ovos, manteiga e água de flor de laranjeira.", "Sove por 15 min até massa lisa.", "Descanse 2h até dobrar.", "Molde em formato redondo com 'ossos' decorativos.", "Asse a 180°C por 25 min e cubra com açúcar."],
    difficulty: "Médio", time: "3h",
    description: "Pão doce tradicional do Dia dos Mortos — com aroma de flor de laranjeira e decoração em forma de ossos." },

  { id: "cajeta", name: "Cajeta (Doce de Leite de Cabra)", category: "Sobremesas", image: "cajeta",
    ingredients: ["1 litro de leite de cabra", "1 xícara de açúcar", "1/4 colher de bicarbonato", "1 pau de canela", "Baunilha"],
    steps: ["Aqueça o leite com açúcar e canela.", "Adicione bicarbonato (vai espumar).", "Cozinhe em fogo baixo mexendo constantemente.", "Reduza até ficar espesso e dourado (1h30).", "Retire canela e adicione baunilha.", "Sirva sobre sorvete, frutas ou obleas."],
    difficulty: "Fácil", time: "1h 30min",
    description: "Doce de leite de cabra de Celaya — mais complexo e caramelado que o dulce de leche. Orgulho de Guanajuato." },

  { id: "buñuelos", name: "Buñuelos", category: "Sobremesas", image: "bunuelos",
    ingredients: ["2 xícaras de farinha", "1 ovo", "Leite", "Manteiga", "Sal", "Canela", "Piloncillo (rapadura)", "Óleo para fritura"],
    steps: ["Misture farinha, ovo, leite e manteiga.", "Sove até massa lisa e descanse 30 min.", "Abra em discos finos.", "Frite em óleo quente até dourar.", "Prepare calda: piloncillo, canela e água.", "Sirva os buñuelos com calda quente."],
    difficulty: "Médio", time: "1h",
    description: "Discos de massa finos e fritos, servidos com calda de piloncillo. Tradição natalina mexicana." },

  { id: "gelatina-mosaic", name: "Gelatina Mosaico", category: "Sobremesas", image: "gelatina-mosaic",
    ingredients: ["Gelatina de vários sabores (4 cores)", "Leite condensado", "Creme de leite", "Gelatina sem sabor", "Baunilha"],
    steps: ["Prepare cada gelatina colorida e refrigere.", "Corte em cubos pequenos.", "Misture leite condensado, creme e gelatina sem sabor.", "Coloque os cubos coloridos em uma forma.", "Despeje a mistura de leite por cima.", "Refrigere 4h e desenforme."],
    difficulty: "Fácil", time: "30 min + 4h refrigeração",
    description: "Gelatina multicolorida em base de leite — presença obrigatória em festas e posadas mexicanas." },

  { id: "capirotada", name: "Capirotada", category: "Sobremesas", image: "capirotada",
    ingredients: ["Bolillos (pão) em fatias", "Piloncillo (rapadura)", "Canela", "Queijo fresco", "Passas", "Amendoim", "Banana", "Manteiga"],
    steps: ["Frite as fatias de pão na manteiga.", "Prepare calda de piloncillo com canela.", "Monte camadas: pão, queijo, passas, amendoim.", "Regue cada camada com calda.", "Repita as camadas.", "Asse a 180°C por 20 min."],
    difficulty: "Fácil", time: "45 min",
    description: "Pudim de pão mexicano da Quaresma — camadas de pão, queijo, frutas e calda de piloncillo." },

  // ============ BEBIDAS (3) ============
  { id: "atole", name: "Atole de Vainilla", category: "Bebidas", image: "atole",
    ingredients: ["Masa de milho ou maizena", "Leite", "Piloncillo ou açúcar", "Canela em pau", "Baunilha"],
    steps: ["Dissolva masa em água fria.", "Aqueça leite com canela e piloncillo.", "Adicione a masa dissolvida.", "Mexa constantemente para não empelotar.", "Cozinhe até engrossar.", "Sirva quente — acompanhamento perfeito para tamales."],
    difficulty: "Fácil", time: "20 min",
    description: "Bebida quente e espessa de milho — tradição pré-hispânica. Inseparável dos tamales no café da manhã." },

  { id: "tepache", name: "Tepache", category: "Bebidas", image: "tepache",
    ingredients: ["Cascas de 2 abacaxis", "Piloncillo (rapadura)", "Canela em pau", "Cravo", "Água", "Chile de árbol (opcional)"],
    steps: ["Coloque cascas de abacaxi em jarra grande.", "Adicione piloncillo, canela e cravo.", "Cubra com água.", "Tampe com pano e deixe fermentar 3 dias.", "Coe e sirva gelado.", "Leve efervescência natural."],
    difficulty: "Fácil", time: "15 min + 3 dias fermentação",
    description: "Bebida fermentada de casca de abacaxi — refrescante, levemente alcoólica e reciclagem criativa." },

  { id: "cafe-de-olla", name: "Café de Olla", category: "Bebidas", image: "cafe-de-olla",
    ingredients: ["Café moído grosso", "Piloncillo", "Canela em pau", "Cravo", "Casca de laranja", "Água"],
    steps: ["Ferva água com piloncillo e canela.", "Adicione cravo e casca de laranja.", "Quando ferver, adicione o café.", "Cozinhe em fogo baixo por 5 min.", "Retire do fogo e deixe assentar.", "Coe e sirva em canecas de barro."],
    difficulty: "Fácil", time: "15 min",
    description: "Café mexicano fervido em panela de barro com rapadura e canela. Sabor que nenhuma cafeteira reproduz." },

  // ============ MARISCOS (3) ============
  { id: "aguachile", name: "Aguachile Verde", category: "Mariscos", image: "aguachile",
    ingredients: ["500g de camarões frescos", "10 limões", "Chile serrano", "Pepino", "Cebola roxa", "Coentro", "Sal"],
    steps: ["Abra os camarões em borboleta.", "Bata limão com chile serrano e coentro.", "Despeje o aguachile sobre os camarões.", "Adicione pepino e cebola roxa.", "Marine por 15 min.", "Sirva com tostadas."],
    difficulty: "Fácil", time: "20 min",
    description: "Camarões crus em molho de limão e chile — mais picante e fresco que ceviche. Especialidade de Sinaloa." },

  { id: "coctel-camarones", name: "Cóctel de Camarões", category: "Mariscos", image: "coctel-camarones",
    ingredients: ["500g de camarões cozidos", "Ketchup", "Suco de limão", "Cebola picada", "Coentro", "Abacate", "Chile serrano", "Pepino"],
    steps: ["Cozinhe os camarões e esfrie.", "Misture ketchup com suco de limão.", "Adicione cebola, coentro e chile.", "Coloque os camarões no molho.", "Adicione pepino e abacate.", "Sirva em copo grande com tostadas."],
    difficulty: "Fácil", time: "25 min",
    description: "Camarões em molho de tomate cítrico — servido em copos grandes nas praias e marisquerías." },

  { id: "pescado-zarandeado", name: "Pescado Zarandeado", category: "Mariscos", image: "pescado-zarandeado",
    ingredients: ["1 peixe inteiro (robalo ou pargo)", "Chiles guajillo e ancho", "Maionese", "Limão", "Alho", "Cebola", "Sal e pimenta"],
    steps: ["Abra o peixe em borboleta.", "Bata chiles com alho e especiarias.", "Misture a pasta com maionese.", "Cubra o peixe com a mistura.", "Grelhe na brasa por 20-25 min.", "Sirva com tortillas, limão e salsa."],
    difficulty: "Médio", time: "40 min",
    description: "Peixe inteiro grelhado na brasa coberto com pasta de chile — especialidade de Nayarit." },
];
