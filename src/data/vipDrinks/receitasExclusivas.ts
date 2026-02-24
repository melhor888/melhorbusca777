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
  // ============ RECEITAS TRADICIONAIS AVANÇADAS ============
  {
    id: "tamales-negros-oaxaca",
    name: "Tamales Negros de Oaxaca — Método Ancestral",
    category: "receitas-exclusivas",
    image: "tamales-negros",
    ingredients: ["1kg de masa de milho nixtamalizado", "500g de mole negro preparado", "300g de frango desfiado", "Folhas de banana frescas", "Banha de porco", "Sal"],
    steps: ["Prepare a masa: bata banha até ficar cremosa, adicione masa e sal.", "Teste flutuação: uma bolinha de masa deve flutuar em água.", "Integre o mole negro à masa até ficar escura e homogênea.", "Corte folhas de banana em retângulos de 25cm.", "Passe folhas na chama para amolecê-las.", "Espalhe masa na folha, adicione frango desfiado.", "Dobre em envelope e amarre com tira de folha.", "Cozinhe no vapor por 1h30 até a masa soltar da folha."],
    difficulty: "Avançado",
    time: "4h",
    description: "Os tamales negros de Oaxaca são envolvidos em folha de banana e recheados com mole negro — o resultado é um tamal escuro, aromático e complexo. Receita de família zapoteca de 5 gerações."
  },
  {
    id: "mixiote-borrego-secreto",
    name: "Mixiote de Borrego — Receita do Altiplano",
    category: "receitas-exclusivas",
    image: "mixiote-borrego",
    ingredients: ["2kg de borrego (cordeiro) em pedaços", "8 chiles guajillo", "4 chiles pasilla", "Cominho", "Orégano mexicano", "Folha de aguacate", "Pimenta-da-jamaica", "Membrana de maguey (mixiote)", "Folhas de papel alumínio"],
    steps: ["Hidrate chiles em água quente por 20 min.", "Bata chiles com especiarias e vinagre até pasta suave.", "Marine o borrego na pasta por mínimo 6 horas.", "Corte a membrana de maguey em quadrados grandes.", "Coloque porções de carne marinada em cada membrana.", "Amarre com barbante formando trouxinhas.", "Cozinhe no vapor em panela grande por 3-4 horas.", "A carne deve desmanchar — sirva com tortillas e salsa verde."],
    difficulty: "Avançado",
    time: "5h (+ marinada)",
    description: "O mixiote é um método pré-hispânico do Altiplano Central mexicano. A carne é cozida na membrana translúcida do maguey, que sela sabores e aromas. Esta receita vem de Tlaxcala."
  },
  {
    id: "mole-coloradito-oaxaca",
    name: "Mole Coloradito de Oaxaca",
    category: "receitas-exclusivas",
    image: "mole-coloradito",
    ingredients: ["6 chiles ancho", "4 chiles guajillo", "3 tomates", "1 plátano macho maduro", "Chocolate de metate", "Ajonjolí torrado", "Amendoim torrado", "Canela", "Orégano", "Cebola", "Alho", "Banha de porco"],
    steps: ["Torre chiles em comal seco sem queimar.", "Hidrate em água quente por 15 min.", "Asse tomates, cebola e alho no comal.", "Torre ajonjolí e amendoim separadamente.", "Frite plátano maduro em banha até dourar.", "Bata tudo no liquidificador com caldo.", "Frite a pasta em banha quente por 20 min mexendo.", "Adicione chocolate e cozinhe por 1h em fogo baixo.", "A cor deve ser vermelho-tijolo com brilho acetinado.", "Sirva sobre pollo ou enchiladas."],
    difficulty: "Avançado",
    time: "3h",
    description: "O mole coloradito é um dos 7 moles de Oaxaca — mais suave que o negro, com doçura do plátano e chocolate. Perfeito para enchiladas de mole coloradito, prato icônico oaxaqueño."
  },
  {
    id: "chile-xcatic-yucatan",
    name: "Chile Xcatic Relleno — Estilo Yucatán",
    category: "receitas-exclusivas",
    image: "chile-xcatic",
    ingredients: ["8 chiles xcatic (ou güero)", "500g de carne de porco desfiada", "Recado negro (chilmole)", "Cebola roxa curtida em limão", "Naranja agria", "Epazote fresco", "Tomate", "Habanero"],
    steps: ["Asse chiles xcatic na brasa até a pele estalar.", "Retire sementes com cuidado, mantendo inteiros.", "Prepare recheio: refogue porco desfiado com recado negro.", "Adicione epazote e naranja agria ao refogado.", "Recheie cada chile com a mistura.", "Prepare salsa de tomate com habanero assado.", "Banhe os chiles na salsa.", "Sirva com cebola roxa curtida e tortillas."],
    difficulty: "Médio",
    time: "2h",
    description: "O chile xcatic é exclusivo de Yucatán — amarelo, aromático e levemente picante. Recheado com porco em chilmole, é um prato de festa das famílias maias."
  },
  {
    id: "poc-chuc-yucateco",
    name: "Poc Chuc Yucateco Autêntico",
    category: "receitas-exclusivas",
    image: "poc-chuc",
    ingredients: ["1kg de lombo de porco fatiado fino", "200ml de naranja agria", "Cebola roxa", "Tomate", "Cilantro", "Chile habanero", "Sal", "Frijoles colados", "Tortillas de maíz"],
    steps: ["Corte porco em fatias finas de 5mm.", "Marine em naranja agria e sal por 2 horas.", "Grelhe em fogo alto de carvão — 2 min cada lado.", "Prepare xni-pec: tomate, cebola, habanero, cilantro e naranja agria picados.", "Grelhe cebolas inteiras até caramelizar.", "Sirva carne com cebola grelhada e xni-pec.", "Acompanhe com frijoles colados e tortillas.", "O sabor defumado do carvão é essencial."],
    difficulty: "Médio",
    time: "1h (+ marinada)",
    description: "Poc Chuc significa 'carne sobre as brasas' em maia. Este prato ancestral de Yucatán é simples na técnica mas profundo em sabor — a naranja agria e o carvão são insubstituíveis."
  },
  {
    id: "enchiladas-potosinas-secretas",
    name: "Enchiladas Potosinas — Receita Original",
    category: "receitas-exclusivas",
    image: "enchiladas-potosinas",
    ingredients: ["1kg de masa de maíz", "Chile ancho desidratado", "Chile guajillo", "Queso fresco", "Cebola", "Epazote", "Banha de porco", "Salsa verde cruda"],
    steps: ["Hidrate e bata chiles com pouca água — pasta concentrada.", "Misture pasta de chile com masa até ficar vermelha uniformemente.", "A masa deve ser maleável e não grudar nas mãos.", "Faça tortillas pequenas de 10cm.", "Recheie com queso fresco desmoronado e cebola.", "Dobre ao meio como quesadilla e sele as bordas.", "Frite em banha quente até crocante dos dois lados.", "Sirva com salsa verde, crema e aguacate."],
    difficulty: "Médio",
    time: "2h",
    description: "As enchiladas potosinas não são enchiladas tradicionais — são tortillas de masa com chile, recheadas e fritas. Originaram em San Luis Potosí e a receita é guardada com zelo pelas famílias locais."
  },
  {
    id: "manchamanteles-oaxaca",
    name: "Manchamanteles Oaxaqueño",
    category: "receitas-exclusivas",
    image: "manchamanteles",
    ingredients: ["6 chiles ancho", "2 chiles mulato", "1 abacaxi maduro", "2 plátanos machos", "1 pera mexicana", "Canela", "Cravos", "Pimenta-da-jamaica", "Frango em pedaços", "Banha", "Amêndoas"],
    steps: ["Torre e hidrate os chiles.", "Bata chiles com especiarias e amêndoas.", "Frite a pasta em banha por 15 min.", "Cozinhe frango em caldo até macio.", "Adicione frango ao molho.", "Corte frutas em pedaços grandes.", "Adicione abacaxi, plátano e pera ao guisado.", "Cozinhe 45 min — as frutas devem ficar macias mas inteiras.", "O resultado deve manchar o mantel (toalha de mesa)."],
    difficulty: "Avançado",
    time: "3h",
    description: "Manchamanteles significa 'mancha-toalhas' — um mole frutado que realmente mancha tudo. Um dos 7 moles de Oaxaca, combina chiles com frutas tropicais em harmonia doce-picante."
  },
  {
    id: "aguachile-negro-sinaloa",
    name: "Aguachile Negro de Sinaloa — Chef's Secret",
    category: "receitas-exclusivas",
    image: "aguachile-negro",
    ingredients: ["500g de camarão fresco", "100ml de suco de limão", "50ml de soja", "Chile serrano", "Chile de árbol seco", "Cebolla morada", "Pepino", "Cilantro", "Maggi", "Tostadas"],
    steps: ["Borbolete camarões e coloque em prato plano sobre gelo.", "Bata limão com chiles, soja e Maggi.", "O aguachile deve ser intensamente picante e salgado.", "Despeje sobre os camarões crus.", "Deixe curar por 5 minutos máximo — não mais.", "Decore com cebola roxa, pepino e cilantro.", "Sirva imediatamente com tostadas.", "A versão negra usa a soja e Maggi para cor e umami intenso."],
    difficulty: "Médio",
    time: "20 min",
    description: "O aguachile negro de Sinaloa é a versão mais ousada — intenso em umami com soja e Maggi. Esta receita vem de um marisquero de Mazatlán que inventou a versão nos anos 90."
  },
  {
    id: "cabrito-al-pastor-monterrey",
    name: "Cabrito al Pastor — Estilo Monterrey",
    category: "receitas-exclusivas",
    image: "cabrito-pastor",
    ingredients: ["1 cabrito inteiro limpo (~8kg)", "Sal grosso", "Manteca de cerdo", "Frijoles a la charra", "Tortillas de harina", "Salsa taquera", "Guacamole", "Cebolla asada"],
    steps: ["Abra o cabrito em borboleta sobre uma cruz de ferro.", "Sal grosso generosamente em toda a superfície.", "Posicione sobre carvão de mesquite a 60cm de distância.", "Asse lentamente por 3-4 horas girando periodicamente.", "Baste com manteca derretida a cada 30 min.", "A pele deve ficar crocante e a carne macia.", "Corte em porções e sirva com frijoles charros.", "Acompanhe com tortillas de harina e salsa."],
    difficulty: "Avançado",
    time: "5h",
    description: "O cabrito é o prato símbolo de Monterrey e Nuevo León. Assado lentamente em cruz sobre carvão de mesquite, é tradição dominical das famílias norteñas há séculos."
  },
  {
    id: "mole-chichilo-negro",
    name: "Mole Chichilo Negro de Oaxaca",
    category: "receitas-exclusivas",
    image: "mole-chichilo",
    ingredients: ["Chile chilhuacle negro", "Chile mulato", "Chile pasilla", "Tortilla queimada", "Miltomate (tomate verde silvestre)", "Chayote", "Ejote", "Hierba santa", "Carne de res", "Cebola queimada", "Ajo queimado"],
    steps: ["Queme cebola y ajo directamente en la llama.", "Torre chiles por segundos — no queimar.", "Hidrate chiles em água quente.", "Queme tortilla completamente — dá cor e profundidade.", "Bata tudo com miltomates assados.", "Frite pasta em manteca por 20 min.", "Cozinhe carne em caldo com chayote e ejote.", "Adicione o mole e hierba santa.", "Cozinhe por 2h em fogo baixo.", "A textura deve ser aveludada e a cor negra profunda."],
    difficulty: "Avançado",
    time: "4h",
    description: "O chichilo é o mais raro dos 7 moles de Oaxaca — negro profundo, com hierba santa e vegetais. É servido apenas em ocasiões especiais e poucos cozinheiros dominam sua preparação."
  },
  {
    id: "tacos-gobernador-sinaloa",
    name: "Tacos Gobernador — Receita Original de Mazatlán",
    category: "receitas-exclusivas",
    image: "tacos-gobernador",
    ingredients: ["500g de camarão limpo", "300g de queijo Chihuahua", "Chile poblano", "Tomate", "Cebola", "Mantequilla", "Tortillas de harina", "Chile de árbol"],
    steps: ["Salteia camarões em mantequilla com alho — 2 min apenas.", "Em outra panela, refogue cebola, tomate e poblano.", "Adicione camarões ao refogado.", "Aqueça tortillas de harina na chapa.", "Coloque queijo ralado na tortilla na chapa quente.", "Quando queijo derreter, adicione recheio de camarão.", "Dobre e grelhe até crocante.", "Sirva com salsa de chile de árbol."],
    difficulty: "Médio",
    time: "30 min",
    description: "Criados em Mazatlán supostamente para o governador de Sinaloa, estes tacos de camarão com queijo derretido são uma obra-prima de simplicidade. A receita original nunca foi publicada oficialmente."
  },
  {
    id: "sopa-azteca-premium",
    name: "Sopa Azteca Premium — Versão do Chef",
    category: "receitas-exclusivas",
    image: "sopa-azteca",
    ingredients: ["Chile pasilla frito", "Chile ancho", "Tomates asados", "Caldo de pollo casero", "Tortillas cortadas y fritas", "Aguacate", "Crema", "Queso fresco", "Chicharrón", "Epazote"],
    steps: ["Frite tiras de tortilla até crocantes — reserve.", "Asse chiles pasilla por segundos — reserve inteiros para decorar.", "Asse tomates, cebola e alho.", "Bata com chile ancho hidratado.", "Frite a salsa em azeite por 10 min.", "Adicione caldo de frango caseiro e epazote.", "Cozinhe 30 min em fogo baixo.", "Sirva com tortilla frita, aguacate, crema, queijo e pasilla frito."],
    difficulty: "Médio",
    time: "1h",
    description: "A Sopa Azteca (ou sopa de tortilla) é um ícone da culinária mexicana. Esta versão premium usa chile pasilla frito inteiro como decoração e chicharrón crocante para textura."
  },
  {
    id: "coctel-vuelve-a-la-vida",
    name: "Vuelve a la Vida — Coquetel de Mariscos Veracruzano",
    category: "receitas-exclusivas",
    image: "vuelve-vida",
    ingredients: ["200g de camarón cocido", "200g de pulpo cocido", "100g de ostión fresco", "200ml de salsa catsup", "100ml de suco de limão", "Chile serrano", "Cilantro", "Cebolla", "Aguacate", "Galletas saladas"],
    steps: ["Corte todos los mariscos en cubos pequeños.", "Pique cebolla, cilantro y chile serrano finamente.", "Mezcle mariscos con catsup y jugo de limón.", "Agregue cebolla, cilantro y chile.", "Refrigere por 30 min.", "Sirva em copo grande com aguacate.", "Acompañe con galletas saladas y limones.", "El nombre 'Vuelve a la Vida' viene de su fama como cura de resaca."],
    difficulty: "Fácil",
    time: "30 min",
    description: "O Vuelve a la Vida é o coquetel de mariscos mais famoso de Veracruz — literalmente 'volte à vida'. Servido nas praias e mercados costeiros, é a cura mexicana para ressaca."
  },
  {
    id: "chiles-en-nogada-clasico-puebla",
    name: "Chiles en Nogada — Método Clássico de Puebla",
    category: "receitas-exclusivas",
    image: "chiles-nogada-clasico",
    ingredients: ["8 chiles poblanos grandes", "500g carne de porco molida", "500g carne de res molida", "Frutas cristalizadas: acitrón, durazno, pera, manzana", "Nuez de Castilla fresca", "Queso de cabra", "Leche", "Granada roja", "Perejil fresco", "Canela, clavo, pimienta"],
    steps: ["Ase y pele los chiles poblanos — no remoje en agua.", "Prepare picadillo: refogue carnes con especiarias.", "Adicione frutas picadas e cristalizadas ao picadillo.", "Cozinhe por 45 min até encorpar.", "Para la nogada: bata nueces remojadas, queso de cabra e leche.", "La nogada debe ser cremosa y blanca como nieve.", "Rellene chiles con picadillo.", "Bañe com nogada, decore com granada y perejil.", "Los colores representan la bandera mexicana.", "Sirva a temperatura ambiente — NUNCA quente."],
    difficulty: "Avançado",
    time: "4h",
    description: "Chiles en Nogada é o prato mais patriótico do México — verde (chile), branco (nogada) e vermelho (granada). Servido apenas em agosto-setembro quando as nueces e granadas estão em temporada. Receita conventual do século XIX."
  },
];
