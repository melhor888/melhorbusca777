import { VipDrink } from "./types";

export const receitasExclusivas: VipDrink[] = [
  // ============ RECEITAS SECRETAS MEXICANAS ============
  {
    id: "mole-negro-oaxaca-secreto",
    name: "Mole Negro de Oaxaca — Receita Secreta",
    category: "receitas-exclusivas",
    image: "mole-negro",
    ingredients: ["6 chiles mulato", "4 chiles ancho", "3 chiles pasilla", "2 chiles chipotle", "Chocolate amargo 70%", "Banana prata madura", "Sementes de abóbora torradas", "Amendoim torrado", "Gergelim torrado", "Canela em pau", "Cravo-da-índia", "Pimenta-da-jamaica", "Orégano mexicano", "Folha de abacate", "Cebola queimada", "Alho queimado", "Tortilla queimada", "Caldo de frango caseiro"],
    steps: ["Torre cada chile separadamente em comal seco por 10-15 segundos — não queime.", "Hidrate os chiles em água quente por 30 minutos.", "Queime cebola e alho diretamente na chama até ficarem pretos por fora.", "Torre sementes de abóbora, amendoim e gergelim separadamente.", "Queime 1 tortilla até ficar completamente preta — ela dá cor e profundidade.", "Bata tudo no liquidificador em tandas com caldo de frango.", "Frite a pasta em banha quente por 20 minutos mexendo constantemente.", "Adicione chocolate, banana e especiarias. Cozinhe por 2h em fogo baixo.", "Ajuste sal e adicione mais caldo para atingir consistência de veludo.", "Sirva sobre peru ou frango com gergelim torrado por cima."],
    difficulty: "Avançado",
    time: "5h",
    description: "O mole negro de Oaxaca é o 'rei dos moles' — uma receita transmitida por gerações de cozinheiras zapotecas. São 30+ ingredientes em camadas de sabor que levam horas para construir. Esta versão vem de uma família de Oaxaca que a guarda há 4 gerações."
  },
  {
    id: "birria-jalisco-secreta",
    name: "Birria de Res de Jalisco — Receita do Chef",
    category: "receitas-exclusivas",
    image: "birria",
    ingredients: ["2kg costela de boi", "500g acém", "8 chiles guajillo", "4 chiles ancho", "2 chiles de árbol", "Gengibre fresco", "Cominho", "Orégano", "Cravo", "Canela", "Pimenta preta", "Vinagre de maçã", "Tomate", "Cebola", "Alho", "Folha de louro"],
    steps: ["Hidrate chiles guajillo, ancho e de árbol em água quente por 20 min.", "Bata chiles com tomate, cebola, alho, gengibre e especiarias.", "Marine a carne na pasta de chiles por mínimo 4 horas (ideal: noite toda).", "Em panela grande, coloque carne marinada com 2L de água.", "Cozinhe em fogo baixíssimo por 4-5 horas até desmanchar.", "Retire carne e desfie. Coe o caldo (consommé).", "Sirva o consommé fumegante com carne desfiada, cebola, coentro e limão.", "Para quesabirria: mergulhe tortilla no consommé, recheie com carne e queijo, dobre e grelhe."],
    difficulty: "Médio",
    time: "6h (+ marinada)",
    description: "A birria nasceu em Jalisco como prato de festa — carne cozida lentamente em adobo de chiles até desmanchar. O consommé vermelho-rubi é servido à parte para mergulhar. Esta receita vem de um birriería familiar de Guadalajara com 60 anos de tradição."
  },
  // ============ RECEITAS REGIONAIS AUTÊNTICAS ============
  {
    id: "tlayuda-oaxaquena",
    name: "Tlayuda Oaxaqueña Autêntica",
    category: "receitas-exclusivas",
    image: "tlayuda",
    ingredients: ["Tortilla de 30cm (tlayuda)", "Asiento (banha de porco não refinada)", "Pasta de feijão preto", "Quesillo (queijo Oaxaca)", "Tasajo (carne seca)", "Chorizo oaxaqueño", "Chapulines (gafanhotos torrados)", "Abacate fatiado", "Salsa de pasilla oaxaqueño", "Alface fatiada"],
    steps: ["Unte a tlayuda com asiento (banha) generosamente.", "Espalhe pasta de feijão preto sobre toda a superfície.", "Asse no comal até a borda ficar crocante e o centro maleável.", "Grelhe tasajo em tiras e chorizo esfarelado.", "Adicione quesillo esticado, tasajo e chorizo.", "Finalize com abacate, chapulines e salsa.", "Dobre ao meio (como uma quesadilla gigante) ou sirva aberta.", "Coma com as mãos — é comida de rua de Oaxaca."],
    difficulty: "Médio",
    time: "45 min",
    description: "A 'pizza mexicana' de Oaxaca — uma tortilla gigante de 30cm coberta com asiento, feijão, quesillo e tasajo. É a comida de rua mais icônica de Oaxaca, servida nos mercados à noite."
  },
  {
    id: "papadzules-yucatecos",
    name: "Papadzules Yucatecos",
    category: "receitas-exclusivas",
    image: "papadzules",
    ingredients: ["12 tortillas de milho", "500g sementes de abóbora (pepitas)", "8 ovos cozidos", "Epazote fresco", "Habanero inteiro", "Tomate", "Cebola roxa", "Sal", "Óleo de pepita"],
    steps: ["Torre sementes de abóbora em frigideira seca até dourarem.", "Bata pepitas com água morna até formar molho verde cremoso.", "Separe 2 colheres do óleo verde que sobe à superfície (chilmole).", "Pique ovos cozidos e reserve.", "Passe tortillas no molho de pepita para amolecer.", "Recheie cada tortilla com ovo picado e enrole.", "Cubra com mais molho de pepita verde.", "Finalize com chilmole de tomate e o óleo de pepita reservado.", "Decore com habanero inteiro (para aroma, não para comer)."],
    difficulty: "Médio",
    time: "1h",
    description: "Prato pré-hispânico maia — enchiladas banhadas em molho de sementes de abóbora. É um dos poucos pratos mexicanos totalmente vegetarianos desde sua origem, com raízes em rituais maias de mais de 1.000 anos."
  },
  // ============ PRATOS TRADICIONAIS RAROS ============
  {
    id: "chiles-en-nogada-premium",
    name: "Chiles en Nogada — A Receita Perfeita",
    category: "receitas-exclusivas",
    image: "chiles-en-nogada",
    ingredients: ["8 chiles poblano grandes", "400g carne de porco moída", "200g carne de boi moída", "1 pêssego", "1 pera", "1 maçã", "Acitrón (doce de biznaga)", "Nozes de Castilla frescas", "Queijo de cabra cremoso", "Leite", "Romã fresca", "Salsa", "Canela", "Cravo", "Pimenta-da-jamaica", "Tomilho"],
    steps: ["Asse poblanos na chama direta até a pele queimar uniformemente.", "Coloque em saco plástico por 15 min, descasque e abra sem partir.", "Refogue carnes com cebola, alho e especiarias.", "Adicione frutas picadas (pêssego, pera, maçã) e acitrón.", "Recheie cada chile com a picadillo de frutas e carnes.", "Para a nogada: bata nozes frescas com queijo de cabra e leite.", "A nogada deve ser branca, cremosa e fria.", "Cubra chiles com nogada gelada.", "Decore com romã vermelha e salsa verde — as cores da bandeira mexicana."],
    difficulty: "Avançado",
    time: "3h",
    description: "O prato mais patriótico do México — criado em 1821 para celebrar a independência. As cores representam a bandeira: verde (salsa), branco (nogada) e vermelho (romã). Só é feito em agosto-setembro quando as nozes frescas estão disponíveis."
  },
  {
    id: "mole-amarillo-oaxaca",
    name: "Mole Amarillo de Oaxaca",
    category: "receitas-exclusivas",
    image: "mole-amarillo",
    ingredients: ["Chile chilcostle seco", "Chile ancho", "Masa de milho", "Chayote", "Ejotes (vagem)", "Hierba santa", "Cominho", "Cravo", "Pimenta gorda", "Miltomate (tomatillo)", "Carne de porco ou frango"],
    steps: ["Hidrate chiles chilcostle e ancho em água quente por 20 min.", "Bata chiles com miltomate, cominho e especiarias.", "Dissolva 2 colheres de masa em água — isso engrossará o mole.", "Cozinhe a carne com cebola e alho até tender.", "Frite a pasta de chile em óleo por 10 min.", "Adicione caldo da carne e a masa dissolvida.", "Cozinhe por 40 min até engrossar naturalmente.", "Adicione chayote e ejotes nos últimos 15 min.", "Sirva com folha de hierba santa e tortillas quentes."],
    difficulty: "Avançado",
    time: "2h30",
    description: "Um dos 7 moles sagrados de Oaxaca — o amarillo é espesso graças à masa de milho e tem sabor terroso dos chiles chilcostle, exclusivos de Oaxaca. É menos conhecido que o negro, mas igualmente complexo."
  },
  // ============ COMBINAÇÕES AUTORAIS ============
  {
    id: "taco-wagyu-trufa",
    name: "Taco de Wagyu com Trufa Negra",
    category: "receitas-exclusivas",
    image: "taco-wagyu",
    ingredients: ["200g Wagyu A5 (ou picanha premium)", "Tortillas de milho azul artesanais", "Trufa negra ralada", "Flor de sal", "Cebola caramelizada em mezcal", "Salsa de chile morita defumado", "Microgreens", "Azeite de trufa"],
    steps: ["Tempere Wagyu apenas com flor de sal — nada mais.", "Grelhe em ferro fundido fumegante por 45s cada lado (mal passado).", "Descanse 3 minutos e fatie contra a fibra em tiras finas.", "Aqueça tortillas de milho azul em comal seco.", "Monte: tortilla + carne + cebola em mezcal.", "Rale trufa negra fresca generosamente por cima.", "Finalize com gotas de salsa morita e microgreens.", "Sirva imediatamente — a trufa perde aroma em minutos."],
    difficulty: "Médio",
    time: "30 min",
    description: "Fusão México-Japão em sua máxima expressão — Wagyu A5 servido em tortilla de milho azul com trufa negra. Criação autoral que une a simplicidade do taco com ingredientes de altíssimo padrão."
  },
  {
    id: "mole-chocolate-belga",
    name: "Mole Contemporâneo com Chocolate Belga",
    category: "receitas-exclusivas",
    image: "mole-chocolate",
    ingredients: ["4 chiles mulato", "3 chiles ancho", "2 chiles pasilla", "100g chocolate belga 72% cacau", "Amendoim", "Gergelim", "Banana da terra", "Canela", "Cominho", "Cebola queimada", "Alho", "Caldo de pato", "Peito de pato", "Redução de laranja"],
    steps: ["Torre e hidrate chiles por 30 min.", "Torre amendoim e gergelim em frigideira seca.", "Queime cebola e alho na chama direta.", "Bata tudo com banana e especiarias.", "Frite pasta em banha por 15 min mexendo sempre.", "Adicione caldo de pato e cozinhe 1h30.", "Nos últimos 10 min, adicione chocolate belga picado.", "Sele peito de pato: pele para baixo 8 min, vire 3 min.", "Fatie pato e sirva com mole, redução de laranja e gergelim."],
    difficulty: "Avançado",
    time: "3h",
    description: "Releitura contemporânea do mole — substituindo chocolate mexicano por belga 72% e servido sobre peito de pato com redução de laranja. Uma criação que respeita a tradição mas eleva o prato a nível fine dining."
  },
  // ============ RECEITAS GOURMET ============
  {
    id: "pozole-seafood-gourmet",
    name: "Pozole de Frutos do Mar Gourmet",
    category: "receitas-exclusivas",
    image: "pozole-seafood",
    ingredients: ["500g milho pozolero (cacahuazintle)", "300g camarão jumbo", "200g polvo", "200g lula", "150g vieira", "Chile guajillo", "Chile ancho", "Tomate", "Cebola", "Alho", "Orégano", "Fumet de peixe", "Limão", "Rabanete", "Alface"],
    steps: ["Cozinhe milho pozolero por 3h até abrir (florescer).", "Prepare adobo: torre e hidrate guajillo e ancho, bata com tomate.", "Faça fumet: cabeça de camarão + cebola + aipo por 40 min.", "Cozinhe polvo por 45 min até tender, fatie.", "Grelhe camarões e vieiras rapidamente — 2 min cada lado.", "Corte lula em anéis e salteie 1 min.", "Junte milho com fumet e adobo, cozinhe 20 min.", "Sirva caldo com frutos do mar por cima.", "Acompanhe com orégano, rabanete, alface, cebola e limão."],
    difficulty: "Avançado",
    time: "4h",
    description: "Versão gourmet do pozole rojo — substituindo carne suína por frutos do mar nobres. O fumet de camarão dá profundidade oceânica ao caldo de chiles, enquanto camarão, polvo, lula e vieiras adicionam texturas luxuosas."
  },
  {
    id: "enchiladas-langosta",
    name: "Enchiladas de Lagosta com Mole de Chipotle",
    category: "receitas-exclusivas",
    image: "enchiladas-langosta",
    ingredients: ["2 caudas de lagosta", "12 tortillas de milho", "4 chiles chipotle em adobo", "Creme de leite fresco", "Queijo manchego mexicano", "Tomate", "Cebola", "Alho", "Manteiga", "Fumet de lagosta (cascas)", "Cebolinhas", "Microgreens"],
    steps: ["Cozinhe lagosta em água com sal por 8 min. Choque em gelo.", "Faça fumet: refogue cascas em manteiga, adicione água, cozinhe 30 min.", "Mole chipotle: bata chipotles com tomate, cebola, alho e fumet.", "Frite molho por 10 min, adicione creme de leite.", "Corte lagosta em medalhões.", "Passe tortillas no molho e recheie com lagosta.", "Enrole e coloque em refratário. Cubra com mais molho.", "Gratine com queijo manchego por 5 min.", "Sirva com cebolinhas e microgreens."],
    difficulty: "Avançado",
    time: "1h30",
    description: "Enchiladas de altíssimo padrão — lagosta fresca envolta em tortilla banhada em mole de chipotle cremoso. Prato de celebração que combina a rusticidade mexicana com ingrediente nobre."
  },
  // ============ RECEITAS PREMIUM ============
  {
    id: "cochinita-pibil-premium",
    name: "Cochinita Pibil Premium — Método Ancestral",
    category: "receitas-exclusivas",
    image: "cochinita-pibil",
    ingredients: ["3kg pernil de porco com pele", "200g pasta de achiote", "10 laranjas amargas (ou 5 laranjas + 5 limões)", "Folhas de bananeira", "Pimenta-da-jamaica inteira", "Cominho", "Orégano yucateco", "Alho", "Sal", "Cebola roxa curtida em habanero"],
    steps: ["Dissolva achiote no suco de laranja amarga.", "Adicione especiarias moídas e alho — a marinada deve ser laranja vibrante.", "Marine o pernil por 12-24 horas na geladeira.", "Forre assadeira funda com folhas de bananeira (ultrapassando bordas).", "Coloque carne com toda a marinada.", "Feche com mais folhas de bananeira e cubra com alumínio.", "Asse por 5-6 horas a 150°C até desmanchar.", "Desfie com garfos — a carne deve ceder sem esforço.", "Sirva com cebola roxa curtida em habanero e tortillas."],
    difficulty: "Médio",
    time: "6h (+ marinada 12h)",
    description: "Método ancestral maia de Yucatán — originalmente assada em pit underground (pib). A marinada de achiote e laranja amarga penetra a carne durante horas, criando o sabor mais icônico da península yucateca."
  },
  {
    id: "barbacoa-borrego-hidalgo",
    name: "Barbacoa de Borrego — Estilo Hidalgo",
    category: "receitas-exclusivas",
    image: "barbacoa",
    ingredients: ["3kg borrego (paleta e costela)", "Pencas de maguey", "Chile guajillo", "Chile morita", "Chile ancho", "Cominho", "Cravo", "Pimenta preta", "Orégano", "Alho", "Cebola", "Folha de abacate", "Arroz", "Grão de bico cozido"],
    steps: ["Prepare adobo: torre e hidrate chiles, bata com especiarias e alho.", "Marine borrego no adobo por 6-12 horas.", "Asse pencas de maguey até flexíveis (ou use folha de bananeira).", "Em panela grande, coloque arroz e grão de bico no fundo com caldo.", "Coloque grelha sobre a panela. Forre com pencas.", "Distribua carne marinada sobre as pencas.", "Feche com mais pencas e tampa hermética.", "Cozinhe em vapor por 5-6 horas em fogo baixo.", "O caldo com arroz e grão de bico vira o consommé.", "Sirva carne desfiada com consommé, tortillas, salsa verde e limão."],
    difficulty: "Avançado",
    time: "7h (+ marinada)",
    description: "A barbacoa de Hidalgo é cozida em pencas de maguey — a planta do pulque empresta sabor defumado único. O consommé que se forma embaixo com arroz e grão de bico é tão valorizado quanto a própria carne."
  },
  // ============ RECEITAS DE CHEFS MEXICANOS ============
  {
    id: "taco-al-pastor-chef",
    name: "Tacos al Pastor — Versão do Chef",
    category: "receitas-exclusivas",
    image: "tacos-al-pastor",
    ingredients: ["1.5kg lombo de porco fatiado fino", "6 chiles guajillo", "3 chiles ancho", "Achiote", "Abacaxi fresco", "Vinagre de abacaxi", "Cebola", "Alho", "Cominho", "Orégano", "Cravo", "Pimenta-da-jamaica", "Tortillas mini", "Cebola picada", "Coentro", "Salsa verde taquera"],
    steps: ["Torre e hidrate chiles. Bata com achiote, vinagre, alho e especiarias.", "Fatie lombo em lâminas de 3mm — uniformidade é crucial.", "Marine cada fatia individualmente na pasta — 6 horas mínimo.", "Empilhe fatias intercaladas com rodelas de abacaxi.", "Asse em forno a 200°C por 1h, regando com suco de abacaxi.", "Fatie a carne em tiras finas (como do trompo).", "Grelhe pedaços de abacaxi até caramelizar.", "Monte: mini tortilla dupla + pastor + abacaxi + cebola + coentro.", "Finalize com salsa verde taquera bem picante."],
    difficulty: "Médio",
    time: "2h (+ marinada 6h)",
    description: "Versão refinada do taco al pastor — marinada de 3 chiles com achiote, carne fatiada à perfeição e abacaxi caramelizado. Técnica de chef aplicada ao taco de rua mais popular do México."
  },
  {
    id: "carnitas-michoacan-chef",
    name: "Carnitas de Michoacán — Receita do Chef",
    category: "receitas-exclusivas",
    image: "carnitas",
    ingredients: ["3kg pernil de porco (com gordura)", "1kg banha de porco", "Leite condensado (segredo!)", "Coca-Cola (1 lata)", "Laranja inteira", "Canela em pau", "Alho inteiro", "Sal grosso", "Pimenta preta", "Folha de louro"],
    steps: ["Corte porco em pedaços grandes de 8cm.", "Derreta banha em panela funda de ferro.", "Quando banha estiver fumegando, adicione carne.", "Adicione laranja cortada ao meio, canela, alho e louro.", "O segredo: despeje leite condensado e Coca-Cola.", "Cozinhe em fogo médio por 2h sem tampa.", "Abaixe para fogo baixo por mais 1h.", "A carne deve ter partes crocantes e partes macias.", "Desfie na própria banha com duas colheres.", "Sirva com tortillas quentes, guacamole, cebola e coentro."],
    difficulty: "Médio",
    time: "3h30",
    description: "As carnitas de Michoacán são confitadas em banha — o segredo é o leite condensado e Coca-Cola que caramelizam a carne. Esta receita vem de um carnitero de Uruapan com 3 gerações no ofício."
  },
  // ============ RECEITAS DE ALTO TICKET ============
  {
    id: "menu-degustacao-mexicano",
    name: "Menu Degustação Mexicano — 7 Tempos",
    category: "receitas-exclusivas",
    image: "menu-degustacao",
    ingredients: ["Aguachile de vieira", "Sopa de tortilla trufada", "Taco de atum bluefin com ponzu de habanero", "Chiles en nogada desconstruído", "Cordeiro em mole negro", "Sorvete de milho com cajeta", "Petit four de chocolate com chile ancho", "Mezcal selecionado para cada tempo"],
    steps: ["1º Tempo: Aguachile de vieira — vieiras cruas em leche de tigre de habanero.", "2º Tempo: Sopa de tortilla com creme de trufa e chicharrón crocante.", "3º Tempo: Tataki de atum bluefin em tortilla crocante com ponzu de habanero.", "4º Tempo: Chiles en nogada desconstruído — esfera de nogada, picadillo prensado, gel de romã.", "5º Tempo: Carré de cordeiro em mole negro com puré de camote roxo.", "6º Tempo: Sorvete de milho nixtamalizado com cajeta quente e sal de gusano.", "7º Tempo: Petit four de chocolate Oaxaca 75% com ganache de chile ancho.", "Harmonize cada tempo com mezcal artesanal diferente."],
    difficulty: "Avançado",
    time: "8h",
    description: "Menu degustação completo de 7 tempos com harmonização de mezcal — do aguachile à sobremesa. Ideal para jantares especiais, eventos premium ou restaurantes de alta gastronomia mexicana. Ticket médio: R$250-400 por pessoa."
  },
  {
    id: "cena-premium-wagyu-mezcal",
    name: "Cena Premium — Wagyu & Mezcal",
    category: "receitas-exclusivas",
    image: "cena-premium",
    ingredients: ["Wagyu ribeye 400g", "Mezcal artesanal (Espadín)", "Sal de gusano", "Chiles toreados", "Guacamole de luxo (com camarão)", "Elote trufado", "Flan de cajeta com ouro comestível", "Michelada premium com tajín e sal negro"],
    steps: ["Entrada: Guacamole premium com camarão grelhado e chips de tortilla caseira.", "Acompanhamento: Elote grelhado com manteiga trufada, parmesão e tajín.", "Principal: Sele Wagyu 2 min cada lado. Descanse 5 min. Corte contra fibra.", "Sirva Wagyu com sal de gusano, chiles toreados e salsa macha.", "Harmonize com mezcal Espadín joven em copita de barro.", "Sobremesa: Flan de cajeta com lâmina de ouro comestível e sal de gusano.", "Experiência completa: sirva mezcal com sal de gusano e laranja em cada tempo.", "Monte mesa com velas, flores de cempasúchil e louça de barro artesanal."],
    difficulty: "Avançado",
    time: "3h",
    description: "Experiência gastronômica premium de alto ticket — Wagyu com mezcal artesanal, guacamole com camarão e flan com ouro comestível. Perfeito para jantares de R$500+ por pessoa ou eventos corporativos exclusivos."
  },
];
