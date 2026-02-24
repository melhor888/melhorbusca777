import { Dish } from "./dishes";

export const dishesBatch7: Dish[] = [
  // ============ TACOS (2) ============
  { id: "tacos-chapulines", name: "Tacos de Chapulines", category: "Tacos", image: "tacos-chapulines",
    ingredients: ["200g de chapulines (gafanhotos) tostados", "Alho", "Chile guajillo", "Limão", "Guacamole", "Tortillas de milho", "Sal"],
    steps: ["Toste chapulines com alho e chile.", "Tempere com sal e limão.", "Aqueça tortillas na chapa.", "Recheie com chapulines.", "Adicione guacamole.", "Uma das proteínas mais antigas do México."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 1, tags: ["suave"],
    description: "Insetos comestíveis de Oaxaca — gafanhotos tostados com chile e limão. Proteína ancestral." },

  { id: "tacos-arrachera-queso", name: "Tacos de Arrachera con Queso", category: "Tacos", image: "tacos-arrachera-queso",
    ingredients: ["500g de arrachera", "Queijo Oaxaca", "Chile poblano", "Cebola", "Tortillas de farinha", "Guacamole"],
    steps: ["Marine e grelhe a arrachera.", "Descanse e corte em tiras.", "Asse poblanos e corte em rajas.", "Derreta queijo na tortilla.", "Monte com carne, rajas e queijo.", "Sirva com guacamole."],
    difficulty: "Fácil", time: "25 min + marinada", spiceLevel: 1, tags: ["suave"],
    description: "Arrachera grelhada com queijo derretido e rajas — combinação norteña irresistível." },

  // ============ ANTOJITOS (3) ============
  { id: "gorditas-horno", name: "Gorditas de Horno", category: "Antojitos", image: "gorditas-horno",
    ingredients: ["Masa de milho", "Piloncillo", "Canela", "Anis", "Manteiga", "Queijo fresco"],
    steps: ["Misture masa com piloncillo e especiarias.", "Forme discos grossos.", "Asse em forno de barro ou convencional.", "Deve ficar crocante por fora.", "Sirva quente com café.", "Pode rechear com queijo."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante"],
    description: "Gorditas doces assadas no forno — de Coahuila e Nuevo León, perfeitas com café." },

  { id: "tlacoyos-requeson", name: "Tlacoyos de Requesón", category: "Antojitos", image: "tlacoyos-requeson",
    ingredients: ["Masa de milho azul", "Requesón fresco", "Nopales", "Salsa verde", "Cebola", "Queijo fresco", "Creme ácido"],
    steps: ["Molde masa azul em oval.", "Recheie com requesón no centro.", "Feche e achate em losango.", "Cozinhe na chapa.", "Cubra com nopales e salsa.", "Finalize com creme e queijo."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante"],
    description: "Tlacoyos de masa azul recheados com requesón — sabor delicado e visual impressionante." },

  { id: "pellizcadas-tampico", name: "Pellizcadas", category: "Antojitos", image: "pellizcadas-tampico",
    ingredients: ["Masa de milho", "Feijão refrito", "Carne desfiada", "Salsa verde", "Queijo fresco", "Cebola", "Creme ácido"],
    steps: ["Forme discos de masa na chapa.", "Pellizque as bordas enquanto quentes.", "Pincele com banha.", "Cubra com feijão e carne.", "Adicione salsa, queijo e creme.", "Sirva quente."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 0, tags: ["não picante"],
    description: "Antojito 'beliscado' da Huasteca — bordas formadas com os dedos, cobertas com ingredientes." },

  // ============ SOPAS (3) ============
  { id: "caldo-de-piedra", name: "Caldo de Piedra", category: "Sopas & Caldos", image: "caldo-de-piedra",
    ingredients: ["Camarões frescos", "Peixe fresco", "Tomate", "Chile serrano", "Cebola", "Coentro", "Pedras vulcânicas", "Jícara (cuia)"],
    steps: ["Coloque peixe, camarão e legumes na jícara.", "Adicione água.", "Aqueça pedras vulcânicas no fogo.", "Coloque as pedras incandescentes na jícara.", "A água ferve instantaneamente.", "Cozinha o caldo em segundos — técnica pré-hispânica."],
    difficulty: "Avançado", time: "30 min", spiceLevel: 1, tags: ["suave"],
    description: "Caldo cozido com pedras vulcânicas incandescentes — técnica ancestral zapoteca de Oaxaca." },

  { id: "sopa-de-pan-chiapas", name: "Sopa de Pan Chiapaneca", category: "Sopas & Caldos", image: "sopa-de-pan-chiapas",
    ingredients: ["Pão de yema", "Banana macho", "Chayote", "Feijão", "Tomate", "Tomilho", "Açafrão", "Caldo de frango"],
    steps: ["Frite fatias de pão até dourar.", "Prepare caldo com legumes.", "Adicione banana macho em rodelas.", "Cozinhe chayote e feijão.", "Monte camadas de pão e caldo.", "Finalize com tomilho e açafrão."],
    difficulty: "Médio", time: "1h", spiceLevel: 0, tags: ["não picante"],
    description: "Sopa festiva de San Cristóbal de las Casas — pão, banana e legumes em caldo aromático." },

  { id: "caldo-largo-oaxaca", name: "Caldo Largo Oaxaqueño", category: "Sopas & Caldos", image: "caldo-largo-oaxaca",
    ingredients: ["Camarões frescos com cabeça", "Tomate", "Chile pasilla oaxaqueño", "Epazote", "Limão", "Cebola"],
    steps: ["Prepare caldo com cabeças de camarão.", "Asse e bata tomate com chile pasilla.", "Adicione a salsa ao caldo.", "Junte camarões inteiros.", "Tempere com epazote.", "Sirva com limão."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 2, tags: ["picante", "defumado"],
    description: "Caldo de camarão com chile pasilla defumado — especialidade da costa oaxaqueña." },

  // ============ CARNES (5) ============
  { id: "chuleta-adobada", name: "Chuleta de Cerdo Adobada", category: "Carnes Mexicanas", image: "chuleta-adobada",
    ingredients: ["4 chuletas de porco", "Chile guajillo e ancho", "Vinagre", "Alho", "Cominho", "Orégano", "Achiote"],
    steps: ["Hidrate e bata chiles com especiarias.", "Marine chuletas na pasta por 4h.", "Grelhe em fogo médio-alto.", "Cozinhe 5-6 min de cada lado.", "A superfície deve caramelizar.", "Sirva com arroz e feijão."],
    difficulty: "Fácil", time: "20 min + marinada", spiceLevel: 1, tags: ["suave"],
    description: "Chuletas marinadas em pasta de chile — cor vibrante e sabor intenso." },

  { id: "pollo-pipian", name: "Pollo en Pipián Rojo", category: "Carnes Mexicanas", image: "pollo-pipian",
    ingredients: ["1 frango em pedaços", "Pepitas de abóbora", "Chile ancho e guajillo", "Tomate", "Gergelim", "Amendoim", "Canela", "Cravo"],
    steps: ["Cozinhe o frango e reserve caldo.", "Torre pepitas, gergelim e amendoim.", "Hidrate chiles e bata com tudo.", "Frite o molho em óleo.", "Adicione caldo até consistência.", "Sirva frango banhado em pipián."],
    difficulty: "Avançado", time: "1h 30min", spiceLevel: 1, tags: ["suave"],
    description: "Molho espesso de pepitas de abóbora — primo do mole, herança pré-hispânica." },

  { id: "mole-coloradito", name: "Mole Coloradito", category: "Carnes Mexicanas", image: "mole-coloradito",
    ingredients: ["Frango ou porco", "Chile ancho", "Tomate", "Chocolate", "Canela", "Orégano", "Banana", "Piloncillo"],
    steps: ["Cozinhe a carne.", "Hidrate chiles e asse tomates.", "Bata com chocolate e especiarias.", "Frite o molho em óleo.", "Adicione caldo e cozinhe 30 min.", "Cor avermelhada distinta do negro."],
    difficulty: "Avançado", time: "2h", spiceLevel: 1, tags: ["suave"],
    description: "Um dos 7 moles de Oaxaca — tom avermelhado, mais doce que o negro. Elegante e complexo." },

  { id: "carne-apache", name: "Carne Apache", category: "Carnes Mexicanas", image: "carne-apache",
    ingredients: ["500g de carne moída extra magra", "10 limões", "Tomate", "Cebola", "Chile serrano", "Coentro", "Pepino", "Tostadas"],
    steps: ["Use carne moída fresca e magra.", "Cubra com suco de limão.", "Adicione tomate, cebola e chile picados.", "O limão 'cozinha' a carne.", "Marine por 20-30 min.", "Sirva com tostadas."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 1, tags: ["suave"],
    description: "Tartare mexicano — carne crua 'cozida' em limão com legumes. Popular no norte do México." },

  { id: "tatemado-jalisco", name: "Tatemado Jalisciense", category: "Carnes Mexicanas", image: "tatemado-jalisco",
    ingredients: ["1kg de carne de porco", "Chile cascabel", "Chile ancho", "Piloncillo", "Vinagre", "Especiarias", "Canela"],
    steps: ["Cozinhe a carne até macia.", "Hidrate e bata chiles.", "Frite a salsa com piloncillo.", "A doçura do piloncillo equilibra o chile.", "Adicione a carne e cozinhe 30 min.", "Sirva com arroz e tortillas."],
    difficulty: "Médio", time: "2h", spiceLevel: 1, tags: ["suave"],
    description: "Guisado agridoce de Jalisco — chile cascabel com piloncillo cria sabor único." },

  // ============ MARISCOS (3) ============
  { id: "ostiones-gratinados", name: "Ostiones Gratinados", category: "Mariscos", image: "ostiones-gratinados",
    ingredients: ["12 ostras na meia-concha", "Queijo manchego", "Bacon", "Chile chipotle", "Alho", "Manteiga", "Limão"],
    steps: ["Abra ostras e mantenha na concha.", "Prepare manteiga com alho e chipotle.", "Coloque bacon picado por cima.", "Cubra com queijo manchego.", "Gratine no forno por 5 min.", "Sirva com limão."],
    difficulty: "Médio", time: "20 min", spiceLevel: 1, tags: ["suave", "defumado"],
    description: "Ostras gratinadas com queijo e chipotle — delicadeza das marisquerías mexicanas." },

  { id: "pulpo-enamorado", name: "Pulpo Enamorado", category: "Mariscos", image: "pulpo-enamorado",
    ingredients: ["1kg de polvo", "Chile morita", "Chile ancho", "Alho", "Cebola", "Vinagre", "Orégano", "Folhas de louro"],
    steps: ["Cozinhe polvo até macio (45 min).", "Hidrate e bata chiles com alho.", "Frite o molho em azeite.", "Corte polvo em pedaços.", "Adicione ao molho.", "Cozinhe 10 min e sirva com arroz."],
    difficulty: "Médio", time: "1h", spiceLevel: 2, tags: ["picante"],
    description: "Polvo em molho de chile — 'enamorado' pela cor vermelha apaixonada do molho." },

  { id: "callo-hacha-sonora", name: "Callo de Hacha al Limón", category: "Mariscos", image: "callo-hacha-sonora",
    ingredients: ["12 callos de hacha (scallops)", "Limão", "Chile serrano", "Cebola morada", "Pepino", "Coentro", "Aguacate"],
    steps: ["Corte callos em fatias finas.", "Marine em limão por 10 min.", "Adicione cebola e chile picados.", "Junte pepino em cubos.", "Sirva com aguacate.", "Coma com tostadas."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 1, tags: ["suave"],
    description: "Vieiras marinadas em limão — frescura do Mar de Cortés, especialidade de Sonora." },

  // ============ SOBREMESAS (5) ============
  { id: "nieve-garrafa", name: "Nieve de Garrafa Oaxaqueña", category: "Sobremesas", image: "nieve-garrafa",
    ingredients: ["Leite", "Frutas frescas da estação", "Açúcar", "Gelo e sal grosso", "Garrafa de metal"],
    steps: ["Prepare a base com leite, frutas e açúcar.", "Coloque na garrafa de metal.", "Envolva com gelo e sal grosso.", "Gire a garrafa manualmente por 30 min.", "A fricção congela o sorvete.", "Sabores: leche quemada, tuna, mezcal, pétalas."],
    difficulty: "Médio", time: "45 min", spiceLevel: 0, tags: ["não picante"],
    description: "Sorvete artesanal feito à mão em garrafa giratória — tradição de Oaxaca com sabores impossíveis." },

  { id: "ate-membrillo", name: "Ate de Membrillo con Queso", category: "Sobremesas", image: "ate-membrillo",
    ingredients: ["1kg de marmelo (membrillo)", "Açúcar", "Limão", "Queijo manchego"],
    steps: ["Cozinhe marmelos até macios.", "Descasque e bata.", "Cozinhe com açúcar por 1h.", "Mexa até desprender da panela.", "Despeje em forma e deixe solidificar.", "Sirva em fatias com queijo manchego."],
    difficulty: "Fácil", time: "1h 30min", spiceLevel: 0, tags: ["não picante"],
    description: "Pasta de marmelo servida com queijo — combinação clássica mexicana de doce e salgado." },

  { id: "glorias-linares", name: "Glorias de Linares", category: "Sobremesas", image: "glorias-linares",
    ingredients: ["Leite de cabra", "Açúcar", "Nozes", "Baunilha"],
    steps: ["Cozinhe leite com açúcar por 2h.", "Mexa até virar cajeta espessa.", "Adicione nozes picadas.", "Molde em cilindros.", "Enrole em celofane vermelho.", "Deixe firmar por 12h."],
    difficulty: "Médio", time: "2h 30min", spiceLevel: 0, tags: ["não picante"],
    description: "Doce de cajeta com nozes de Linares, Nuevo León — embrulhado em celofane vermelho icônico." },

  { id: "buñuelos-viento", name: "Buñuelos de Viento", category: "Sobremesas", image: "buñuelos-viento",
    ingredients: ["Farinha", "Ovos", "Leite", "Manteiga", "Açúcar e canela", "Óleo para fritura", "Calda de piloncillo"],
    steps: ["Prepare massa com farinha, ovos e leite.", "Sove e descanse.", "Estique massa bem fina.", "Frite em óleo quente — deve inflar.", "Escorra e polvilhe açúcar e canela.", "Sirva com calda de piloncillo."],
    difficulty: "Médio", time: "1h", spiceLevel: 0, tags: ["não picante"],
    description: "Buñuelos que inflam ao fritar — 'de vento' pela leveza. Tradição natalina oaxaqueña." },

  { id: "arroz-con-leche-mex", name: "Arroz con Leche Mexicano", category: "Sobremesas", image: "arroz-con-leche-mex",
    ingredients: ["1 xícara de arroz", "1 litro de leite", "Leite condensado", "Canela em pau", "Passas", "Baunilha", "Casca de limão"],
    steps: ["Cozinhe arroz em água.", "Adicione leite e canela.", "Cozinhe em fogo baixo por 30 min.", "Adicione leite condensado e passas.", "Mexa até cremoso.", "Sirva quente ou frio com canela."],
    difficulty: "Fácil", time: "45 min", spiceLevel: 0, tags: ["não picante"],
    description: "Arroz doce mexicano com canela e passas — comfort food das avós mexicanas." },

  // ============ BEBIDAS (5) ============
  { id: "agua-guayaba", name: "Agua de Guayaba", category: "Bebidas", image: "agua-guayaba",
    ingredients: ["6 guayabas maduras", "Açúcar", "Água", "Limão", "Gelo"],
    steps: ["Cozinhe guayabas em água.", "Bata e coe.", "Adicione açúcar e limão.", "Dilua com água gelada.", "Sirva com gelo.", "Pode adicionar um toque de canela."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 0, tags: ["não picante"],
    description: "Água fresca de goiaba — doce natural e aromática, das preferidas nas taquerias." },

  { id: "carajillo-mexicano", name: "Carajillo Mexicano", category: "Bebidas", image: "carajillo-mexicano",
    ingredients: ["Espresso", "Licor 43", "Gelo", "Casca de limão"],
    steps: ["Prepare um espresso forte.", "Coloque gelo em copo alto.", "Despeje Licor 43.", "Adicione espresso por cima.", "Decore com casca de limão.", "Não mexa — o visual em camadas é importante."],
    difficulty: "Fácil", time: "5 min", spiceLevel: 0, tags: ["não picante"],
    description: "Café com Licor 43 — originalmente espanhol, adaptado e adotado como pós-refeição favorito no México." },

  { id: "tejate-oaxaca", name: "Tejate Oaxaqueño", category: "Bebidas", image: "tejate-oaxaca",
    ingredients: ["Milho nixtamalizado", "Cacau", "Sementes de mamey", "Flor de cacau (rosita)", "Açúcar"],
    steps: ["Torre milho e cacau.", "Moa com sementes de mamey.", "Bata com flor de cacau.", "Adicione água fria e bata vigorosamente.", "Uma espuma branca deve se formar.", "Sirva frio em jícara."],
    difficulty: "Avançado", time: "1h", spiceLevel: 0, tags: ["não picante"],
    description: "Bebida zapoteca milenar de Oaxaca — milho, cacau e flor de cacau. A 'bebida dos deuses'." },

  { id: "mezcalita", name: "Mezcalita", category: "Bebidas", image: "mezcalita",
    ingredients: ["60ml de mezcal", "30ml de suco de limão", "20ml de xarope de agave", "Sal de gusano", "Gelo", "Rodela de laranja"],
    steps: ["Passe limão na borda.", "Mergulhe em sal de gusano.", "Coloque mezcal, limão e agave no shaker.", "Adicione gelo e agite.", "Coe no copo com gelo.", "Decore com rodela de laranja."],
    difficulty: "Fácil", time: "5 min", spiceLevel: 0, tags: ["não picante"],
    description: "A prima defumada da margarita — mezcal com sal de gusano no lugar da tequila." },

  { id: "agua-pepino-limon", name: "Agua de Pepino con Limón", category: "Bebidas", image: "agua-pepino-limon",
    ingredients: ["2 pepinos", "5 limões", "Açúcar", "Água", "Gelo", "Chia (opcional)"],
    steps: ["Bata pepinos com água.", "Coe se preferir liso.", "Adicione suco de limão.", "Adoce a gosto.", "Sirva com muito gelo.", "Opcional: adicione sementes de chia."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 0, tags: ["não picante"],
    description: "Água refrescante de pepino e limão — perfeita para dias quentes, hidratante e leve." },

  // ============ CAFÉ DA MANHÃ (5) ============
  { id: "huevos-tirados", name: "Huevos Tirados", category: "Café da Manhã", image: "huevos-tirados",
    ingredients: ["4 ovos", "Feijão refrito", "Chile serrano", "Cebola", "Tortillas de milho", "Salsa verde"],
    steps: ["Refogue cebola e chile.", "Adicione feijão refrito.", "Quebre ovos sobre o feijão.", "Mexa tudo junto.", "Cozinhe até ovos firmarem.", "Sirva com tortillas e salsa."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 1, tags: ["suave"],
    description: "Ovos mexidos com feijão — café da manhã rápido e econômico de todo o México." },

  { id: "huevos-ahogados", name: "Huevos Ahogados en Salsa", category: "Café da Manhã", image: "huevos-ahogados",
    ingredients: ["4 ovos", "Salsa roja", "Cebola", "Alho", "Epazote", "Tortillas", "Queijo fresco"],
    steps: ["Prepare salsa roja espessa.", "Ferva a salsa em panela.", "Quebre ovos diretamente na salsa.", "Tampe e cozinhe 5 min.", "Os ovos cozinham na salsa.", "Sirva com tortillas e queijo."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 1, tags: ["suave"],
    description: "Ovos 'afogados' em salsa vermelha — técnica simples e resultado delicioso." },

  { id: "huevos-albanil", name: "Huevos Albañil", category: "Café da Manhã", image: "huevos-albanil",
    ingredients: ["4 ovos", "Salsa verde com chile serrano", "Epazote", "Tortillas", "Feijão refrito", "Queijo fresco"],
    steps: ["Prepare salsa verde picante.", "Ferva a salsa.", "Quebre ovos na salsa.", "Adicione epazote.", "Cozinhe até ovos firmarem.", "Sirva com feijão e tortillas."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 2, tags: ["picante"],
    description: "Ovos do 'pedreiro' — nome vem do café da manhã dos trabalhadores da construção. Simples e forte." },

  { id: "gorditas-nata", name: "Gorditas de Nata", category: "Café da Manhã", image: "gorditas-nata",
    ingredients: ["Masa de milho", "Nata (creme espesso)", "Açúcar", "Canela", "Sal"],
    steps: ["Misture masa com nata.", "Adicione açúcar e canela.", "Forme discos grossos.", "Asse na chapa ou forno.", "Deve ficar dourada e aromática.", "Sirva com café de olla."],
    difficulty: "Fácil", time: "20 min", spiceLevel: 0, tags: ["não picante"],
    description: "Gorditas doces com nata — acompanhamento perfeito para o café mexicano da manhã." },

  { id: "molletes-jamon", name: "Molletes con Jamón", category: "Café da Manhã", image: "molletes-jamon",
    ingredients: ["Bolillos", "Feijão refrito", "Presunto", "Queijo Oaxaca", "Pico de gallo", "Jalapeños"],
    steps: ["Corte bolillos ao meio.", "Espalhe feijão refrito.", "Adicione presunto e queijo.", "Gratine no forno.", "Cubra com pico de gallo.", "Sirva com jalapeños em conserva."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 0, tags: ["não picante"],
    description: "Molletes com presunto — versão mais substancial do clássico café da manhã mexicano." },

  // ============ MOLHOS & SALSAS (5) ============
  { id: "salsa-borracha", name: "Salsa Borracha", category: "Molhos & Salsas", image: "salsa-borracha",
    ingredients: ["Chile pasilla", "Pulque ou cerveja", "Queijo fresco", "Cebola", "Alho", "Sal"],
    steps: ["Torre chiles pasilla até escurecerem.", "Bata com pulque ou cerveja.", "Adicione alho e cebola.", "A salsa deve ficar espessa.", "Desfarele queijo por cima.", "Sirva com barbacoa."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 1, tags: ["suave"],
    description: "Salsa 'bêbada' feita com pulque ou cerveja — acompanhamento clássico da barbacoa." },

  { id: "salsa-taquera", name: "Salsa Taquera", category: "Molhos & Salsas", image: "salsa-taquera",
    ingredients: ["Chile de árbol", "Chile morita", "Tomate", "Alho", "Cebola", "Vinagre", "Cominho"],
    steps: ["Torre chiles secos até defumarem.", "Asse tomate e alho.", "Bata tudo com vinagre e cominho.", "A textura deve ser semi-líquida.", "Coe se preferir.", "A salsa clássica das taquerias."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 2, tags: ["picante"],
    description: "A salsa que toda taquería serve — chile de árbol tostado com tomate. Picante e universal." },

  { id: "salsa-de-cacahuate", name: "Salsa de Cacahuate", category: "Molhos & Salsas", image: "salsa-de-cacahuate",
    ingredients: ["Amendoim torrado", "Chile de árbol", "Chile guajillo", "Tomate", "Alho", "Sal"],
    steps: ["Torre amendoim e chiles.", "Asse tomate e alho.", "Bata tudo junto.", "A textura deve ser cremosa.", "Ajuste sal.", "Perfeita com tacos de barbacoa."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 2, tags: ["picante"],
    description: "Salsa cremosa de amendoim — de Oaxaca, perfeita para molhar tortillas e acompanhar tacos." },

  { id: "salsa-xnipec", name: "Xni-Pec (Salsa Yucateca)", category: "Molhos & Salsas", image: "salsa-xnipec",
    ingredients: ["Chile habanero", "Tomate", "Cebola roxa", "Suco de naranja agria (laranja amarga)", "Coentro", "Sal"],
    steps: ["Pique habanero em cubos finos.", "Corte tomate e cebola em cubos.", "Misture com suco de laranja amarga.", "Adicione coentro e sal.", "Deixe marinar 30 min.", "Xni-pec significa 'nariz de cachorro' em maia."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 3, tags: ["picante", "intenso"],
    description: "Salsa maya crua — habanero com laranja amarga. Tão picante que faz o nariz molhar (daí o nome)." },

  { id: "chimichurri-mexicano", name: "Chimichurri Mexicano", category: "Molhos & Salsas", image: "chimichurri-mexicano",
    ingredients: ["Coentro", "Chile serrano", "Alho", "Cebola", "Vinagre de maçã", "Azeite", "Orégano mexicano", "Limão"],
    steps: ["Pique coentro finamente.", "Pique chile, alho e cebola.", "Misture com vinagre e azeite.", "Adicione orégano e limão.", "Descanse 30 min.", "Use em carnes grelhadas."],
    difficulty: "Fácil", time: "10 min", spiceLevel: 1, tags: ["suave"],
    description: "Versão mexicana com coentro e serrano no lugar da salsa e pimenta argentina." },

  // ============ TAMALES (3) ============
  { id: "tamales-canarios", name: "Tamales Canarios", category: "Tamales & Massas", image: "tamales-canarios",
    ingredients: ["Harina de arroz", "Manteiga", "Açúcar", "Ovos", "Passas", "Baunilha", "Papel alumínio"],
    steps: ["Bata manteiga com açúcar.", "Adicione ovos um a um.", "Misture harina de arroz.", "Adicione baunilha e passas.", "Envolva em papel alumínio.", "Cozinhe no vapor por 1h."],
    difficulty: "Médio", time: "1h 30min", spiceLevel: 0, tags: ["não picante"],
    description: "Tamales doces de arroz — cor amarela 'canário'. Textura de bolo, sabor de infância." },

  { id: "tamales-chipilín", name: "Tamales de Chipilín", category: "Tamales & Massas", image: "tamales-chipilín",
    ingredients: ["Masa de milho", "Folhas de chipilín", "Queijo fresco", "Folhas de bananeira", "Banha batida", "Caldo de frango"],
    steps: ["Bata banha até fofa com masa.", "Pique folhas de chipilín.", "Misture à masa.", "Adicione queijo ao centro.", "Envolva em folhas de bananeira.", "Cozinhe no vapor por 1h."],
    difficulty: "Médio", time: "1h 30min", spiceLevel: 0, tags: ["não picante"],
    description: "Tamales de Chiapas com erva chipilín — aroma herbal único, embrulhados em bananeira." },

  { id: "tamales-de-ceniza", name: "Tamales de Ceniza", category: "Tamales & Massas", image: "tamales-de-ceniza",
    ingredients: ["Masa de milho", "Cinza de madeira (tequesquite)", "Feijão negro", "Folhas de milho"],
    steps: ["Misture masa com tequesquite.", "A cinza dá cor azulada.", "Recheie com feijão negro.", "Envolva em folhas de milho.", "Cozinhe no vapor.", "Tradição pré-hispânica de Oaxaca."],
    difficulty: "Avançado", time: "2h", spiceLevel: 0, tags: ["não picante"],
    description: "Tamales com cinza de madeira — técnica ancestral que dá cor e sabor mineral únicos." },

  // ============ PRATOS TRADICIONAIS (5) ============
  { id: "enchiladas-placeras", name: "Enchiladas Placeras", category: "Pratos Tradicionais", image: "enchiladas-placeras",
    ingredients: ["Tortillas de milho", "Chile guajillo", "Queijo fresco", "Cenoura e papa cozidas", "Pé de porco cozido", "Cebola roxa"],
    steps: ["Hidrate e bata chiles guajillo.", "Passe tortillas no molho.", "Recheie com queijo.", "Dobre e disponha no prato.", "Acompanhe com pé de porco e legumes.", "Decore com cebola roxa."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 1, tags: ["suave"],
    description: "Enchiladas 'de mercado' de Michoacán — servidas com pé de porco e legumes cozidos." },

  { id: "papadzules-yuc", name: "Papadzules", category: "Pratos Tradicionais", image: "papadzules-yuc",
    ingredients: ["Tortillas de milho", "8 ovos cozidos", "Pepitas de abóbora", "Epazote", "Tomate", "Chile habanero"],
    steps: ["Torre e moa pepitas com epazote.", "Adicione água e bata até cremoso.", "Passe tortillas na salsa de pepita.", "Recheie com ovo picado.", "Enrole e cubra com mais molho.", "Decore com molho de tomate."],
    difficulty: "Médio", time: "45 min", spiceLevel: 0, tags: ["não picante"],
    description: "Enchiladas maias em molho de pepita de abóbora — recheadas com ovo. Tradição yucateca milenar." },

  { id: "enfrijoladas-mole", name: "Enfrijoladas con Mole", category: "Pratos Tradicionais", image: "enfrijoladas-mole",
    ingredients: ["Tortillas de milho", "Feijão negro batido", "Mole oaxaqueño", "Frango desfiado", "Queijo fresco", "Cebola roxa", "Creme ácido"],
    steps: ["Prepare molho de feijão com mole.", "Passe tortillas no molho.", "Recheie com frango.", "Dobre e cubra com mais molho.", "Decore com queijo e creme.", "Finalize com cebola roxa."],
    difficulty: "Fácil", time: "25 min", spiceLevel: 1, tags: ["suave"],
    description: "Fusão de enfrijoladas com mole — o melhor dos dois mundos em um prato reconfortante." },

  { id: "huaraches-pastor", name: "Huaraches al Pastor", category: "Pratos Tradicionais", image: "huaraches-pastor",
    ingredients: ["Masa de milho", "Carne al pastor", "Feijão refrito", "Salsa verde", "Cebola", "Coentro", "Abacaxi", "Queijo fresco"],
    steps: ["Molde masa em formato de sandália.", "Cozinhe na chapa.", "Espalhe feijão refrito.", "Cubra com carne al pastor.", "Adicione abacaxi grelhado.", "Finalize com salsa, cebola e coentro."],
    difficulty: "Médio", time: "35 min", spiceLevel: 1, tags: ["suave"],
    description: "Huaraches cobertos com carne al pastor — fusão de dois clássicos da street food mexicana." },

  { id: "tlayudas-oaxaca", name: "Tlayudas Oaxaqueñas", category: "Pratos Tradicionais", image: "tlayudas-oaxaca",
    ingredients: ["Tortilla de milho grande (30cm)", "Asiento (gordura de porco)", "Feijão refrito", "Queijo Oaxaca", "Tasajo ou cecina", "Repolho", "Salsa"],
    steps: ["Unte a tortilla grande com asiento.", "Espalhe feijão refrito.", "Adicione queijo Oaxaca.", "Coloque tasajo grelhado.", "Dobre ao meio ou sirva aberta.", "Grelhe na brasa."],
    difficulty: "Fácil", time: "15 min", spiceLevel: 0, tags: ["não picante"],
    description: "A 'pizza oaxaqueña' — tortilla gigante com asiento, feijão, queijo e carne. Ícone de Oaxaca." },

  // ============ ARROZ & FEIJÃO (2) ============
  { id: "arroz-amarillo-mex", name: "Arroz Amarillo con Azafrán", category: "Arroz & Feijão", image: "arroz-amarillo-mex",
    ingredients: ["2 xícaras de arroz", "Açafrão ou cúrcuma", "Cebola", "Alho", "Caldo de frango", "Ervilhas", "Cenoura"],
    steps: ["Frite arroz em óleo.", "Adicione cebola e alho.", "Dissolva açafrão no caldo.", "Adicione ao arroz.", "Junte ervilhas e cenoura.", "Tampe e cozinhe 20 min."],
    difficulty: "Fácil", time: "30 min", spiceLevel: 0, tags: ["não picante"],
    description: "Arroz dourado com açafrão — variação elegante do arroz mexicano, festivo e aromático." },

  { id: "frijoles-colados-yuc", name: "Frijoles Colados Yucatecos", category: "Arroz & Feijão", image: "frijoles-colados-yuc",
    ingredients: ["500g de feijão negro", "Epazote", "Chile habanero inteiro", "Cebola", "Banha de porco", "Sal"],
    steps: ["Cozinhe feijão com epazote e habanero inteiro.", "Bata e coe (textura lisa).", "Frite na banha de porco.", "Mexa até engrossar.", "O habanero inteiro dá aroma sem picância extrema.", "Sirva com tortillas."],
    difficulty: "Fácil", time: "1h 30min", spiceLevel: 1, tags: ["suave"],
    description: "Feijão coado yucateco — textura sedosa, frito na banha com aroma de habanero." },

  // ============ CULTURA MEXICANA (2) ============
  { id: "mezcal-cultura", name: "O Mundo do Mezcal", category: "Cultura Mexicana", image: "mezcal-cultura",
    ingredients: ["Agave espadín", "Agave tobalá", "Agave madrecuishe", "Forno de terra", "Tahona (moinho de pedra)", "Tradição zapoteca"],
    steps: ["Mezcal se faz de 40+ tipos de agave — não apenas espadín.", "O agave é cozido em forno de terra com pedras quentes.", "Moído em tahona (pedra circular).", "Fermentado em tinas de madeira.", "Destilado em alambique de barro ou cobre.", "O melhor mezcal é artesanal e de pueblo."],
    difficulty: "Fácil", time: "Leitura 8 min", spiceLevel: 0, tags: ["não picante"],
    description: "O mundo do mezcal — mais de 40 agaves, destilação ancestral e a alma de Oaxaca." },

  { id: "mercados-mexico", name: "Os Grandes Mercados do México", category: "Cultura Mexicana", image: "mercados-mexico",
    ingredients: ["Mercado de la Merced (CDMX)", "Central de Abastos (CDMX)", "Mercado 20 de Noviembre (Oaxaca)", "Mercado de San Juan (CDMX)", "Mercado Lucas de Gálvez (Mérida)"],
    steps: ["La Merced é o mercado mais antigo e grande da CDMX.", "Central de Abastos é o maior mercado do mundo.", "20 de Noviembre em Oaxaca serve tasajo e mezcal.", "San Juan tem ingredientes exóticos e gourmet.", "Lucas de Gálvez tem a culinária yucateca.", "Mercados são o coração da gastronomia mexicana."],
    difficulty: "Fácil", time: "Leitura 5 min", spiceLevel: 0, tags: ["não picante"],
    description: "Os mercados são a alma culinária do México — onde tradição, frescor e sabor se encontram." },
];
