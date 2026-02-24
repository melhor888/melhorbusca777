export interface DishExtra {
  price: string;
  curiosity: string;
  origin: string;
}

export function getDishExtra(id: string): DishExtra | undefined {
  return dishExtras[id];
}

export const dishExtras: Record<string, DishExtra> = {
  // ============ TACOS ============
  "tacos-al-pastor": { price: "$15 MXN (~R$5)", origin: "Cidade do México", curiosity: "Inspirado no shawarma libanês trazido por imigrantes árabes nos anos 1920. O trompo vertical é a versão mexicana do espeto giratório." },
  "tacos-carnitas": { price: "$18 MXN (~R$6)", origin: "Michoacán, México", curiosity: "As melhores carnitas são de Quiroga, Michoacán, onde famílias preparam em enormes panelas de cobre desde o período colonial." },
  "tacos-birria": { price: "$25 MXN (~R$8)", origin: "Jalisco, México", curiosity: "A birria viralizou nos EUA em 2020 como 'birria tacos' e se tornou o prato mexicano mais buscado no TikTok." },
  "tacos-carne-asada": { price: "$20 MXN (~R$7)", origin: "Sonora, México", curiosity: "A tradição de carne asada no norte do México é tão forte que churrascos dominicais são instituição familiar sagrada." },
  "tacos-pollo": { price: "$15 MXN (~R$5)", origin: "Puebla, México", curiosity: "A tinga é um dos poucos pratos mexicanos que usa chipotle como ingrediente principal — o sabor defumado define o prato." },
  "tacos-pescado": { price: "$30 MXN (~R$10)", origin: "Ensenada, Baja California", curiosity: "Os tacos de peixe originais eram de cação empanado. Hoje Ensenada tem uma rota turística só de tacos de peixe." },
  "tacos-chorizo": { price: "$15 MXN (~R$5)", origin: "Toluca, Estado do México", curiosity: "Toluca é a capital do chorizo mexicano — a cor vermelha vem do chile e achiote, não de corante artificial." },
  "tacos-lengua": { price: "$25 MXN (~R$8)", origin: "México (todo o país)", curiosity: "Língua é considerada o corte mais fino para tacos — mais macia que filé mignon quando bem preparada." },

  // ============ ANTOJITOS ============
  "quesadillas": { price: "$20 MXN (~R$7)", origin: "México (todo o país)", curiosity: "Na Cidade do México, existe debate eterno: quesadilla PRECISA ter queijo? Para chilangos, não necessariamente!" },
  "enchiladas-rojas": { price: "$50 MXN (~R$17)", origin: "México (todo o país)", curiosity: "A palavra 'enchilada' vem do náhuatl 'chīlli' — as primeiras eram apenas tortillas com chile, sem recheio." },
  "chilaquiles": { price: "$45 MXN (~R$15)", origin: "México (todo o país)", curiosity: "Chilaquiles são chamados de 'remédio para la cruda' (ressaca) — considerados a melhor cura do mundo." },
  "tamales": { price: "$15 MXN (~R$5)", origin: "Mesoamérica (3000 a.C.)", curiosity: "Tamales existem há 5.000 anos — os astecas os preparavam para guerreiros em batalha como ração de combate." },
  "sopes": { price: "$20 MXN (~R$7)", origin: "Centro do México", curiosity: "Sopes já existiam antes da chegada dos espanhóis — são um dos antojitos mais antigos da culinária mexicana." },
  "gorditas": { price: "$15 MXN (~R$5)", origin: "Centro e Norte do México", curiosity: "Em alguns estados as gorditas são fritas, em outros são na chapa — o debate regional é acalorado." },
  "elotes": { price: "$20 MXN (~R$7)", origin: "México (todo o país)", curiosity: "O milho foi domesticado no México há 9.000 anos — é literalmente a base da civilização mexicana." },
  "tostadas": { price: "$25 MXN (~R$8)", origin: "México (todo o país)", curiosity: "Tostadas nasceram da necessidade de não desperdiçar tortillas velhas — fritas, ganhavam nova vida." },

  // ============ SOPAS & CALDOS ============
  "pozole-rojo": { price: "$80 MXN (~R$27)", origin: "Guerrero/Jalisco, México", curiosity: "Os astecas preparavam pozole como prato cerimonial — a versão original usava carne humana de sacrifícios rituais." },
  "sopa-tortilla": { price: "$50 MXN (~R$17)", origin: "Centro do México", curiosity: "Cada estado tem sua versão — em alguns leva chipotle, em outros pasilla. A base é sempre tomate assado." },
  "menudo": { price: "$80 MXN (~R$27)", origin: "Norte do México", curiosity: "Menudo é vendido aos domingos de manhã em todo México — é considerado medicinal para recuperar dos excessos de sábado." },
  "caldo-de-pollo": { price: "$60 MXN (~R$20)", origin: "México (todo o país)", curiosity: "Chamado de 'levanta muertos' (levanta mortos) — receita de toda mãe e avó mexicana para curar qualquer doença." },

  // ============ CARNES MEXICANAS ============
  "mole-poblano": { price: "$120 MXN (~R$40)", origin: "Puebla, México", curiosity: "Lenda diz que freiras do Convento de Santa Rosa criaram o mole em desespero para receber o bispo — misturaram tudo que tinham." },
  "cochinita-pibil": { price: "$30 MXN (~R$10)", origin: "Yucatán, México", curiosity: "Pibil vem do maia 'pib' (enterrado) — originalmente cozida em forno de terra por 12 horas." },
  "chiles-rellenos": { price: "$80 MXN (~R$27)", origin: "Puebla, México", curiosity: "O chile poblano foi nomeado em honra a Puebla — tem picância suave e é o chile mais versátil da culinária." },
  "barbacoa": { price: "$30 MXN (~R$10)", origin: "Hidalgo/Estado do México", curiosity: "A palavra 'barbecue' em inglês vem de 'barbacoa' — a técnica de cozinhar em forno de terra." },
  "carne-en-su-jugo": { price: "$90 MXN (~R$30)", origin: "Guadalajara, Jalisco", curiosity: "Criado nos anos 1960 no restaurante 'Las 9 Esquinas' — rapidamente se tornou prato símbolo de Guadalajara." },
  "carnitas-michoacan": { price: "$25 MXN (~R$8)", origin: "Michoacán, México", curiosity: "As carnitas de Quiroga são preparadas em enormes panelas de cobre — o metal distribui calor uniformemente." },
  "pollo-asado-mex": { price: "$70 MXN (~R$23)", origin: "Norte do México", curiosity: "O pollo asado é tradição dominical nas famílias do norte — grelhado ao ar livre com marinada de chile." },
  "bistec-ranchero": { price: "$60 MXN (~R$20)", origin: "México rural", curiosity: "Comida ranchera é a culinária do campo mexicano — simples, substancial e sem frescura." },
  "arrachera": { price: "$150 MXN (~R$50)", origin: "Norte do México/Texas", curiosity: "A arrachera (fralda) era corte descartado até os vaqueros texano-mexicanos descobrirem como mariná-la." },
  "cecina-yecapixtla": { price: "$40 MXN (~R$13)", origin: "Yecapixtla, Morelos", curiosity: "Yecapixtla tem um mercado inteiro dedicado à cecina — a carne é salgada e seca ao sol por gerações." },
  "tasajo-oaxaca": { price: "$35 MXN (~R$12)", origin: "Oaxaca, México", curiosity: "No Mercado 20 de Noviembre em Oaxaca, o tasajo é grelhado na hora e servido com tortillas feitas à mão." },
  "suadero-guisado": { price: "$18 MXN (~R$6)", origin: "Cidade do México", curiosity: "Suadero existe apenas no México — é uma camada de carne única entre costela e pele." },

  // ============ MOLHOS & SALSAS ============
  "guacamole": { price: "$50 MXN (~R$17)", origin: "México (pré-hispânico)", curiosity: "O nome vem do náhuatl 'āhuacamōlli' (molho de abacate). Os astecas já comiam guacamole há mais de 500 anos." },
  "salsa-roja": { price: "$10 MXN (~R$3)", origin: "México (todo o país)", curiosity: "Existem mais de 500 variedades de salsa vermelha documentadas no México — cada família tem sua versão." },
  "salsa-verde": { price: "$10 MXN (~R$3)", origin: "México (todo o país)", curiosity: "Tomatillos não são tomates verdes — são uma fruta completamente diferente, da família das fisalis." },
  "pico-de-gallo": { price: "$15 MXN (~R$5)", origin: "México (todo o país)", curiosity: "Também chamada 'salsa bandera' (salsa bandeira) porque tem as 3 cores da bandeira mexicana." },
  "mole-negro": { price: "$150 MXN (~R$50)", origin: "Oaxaca, México", curiosity: "Oaxaca tem 7 moles tradicionais — o negro é o mais complexo e pode levar 3 dias para preparar." },

  // ============ SOBREMESAS ============
  "churros": { price: "$20 MXN (~R$7)", origin: "Espanha → México", curiosity: "Churros espanhóis não têm recheio. No México e Brasil, ganharam recheios como doce de leite e chocolate." },
  "flan-mexicano": { price: "$30 MXN (~R$10)", origin: "Espanha → México", curiosity: "O flan chegou ao México com os espanhóis no séc. XVI e foi adaptado com leite condensado e cream cheese." },
  "tres-leches": { price: "$40 MXN (~R$13)", origin: "México/Nicarágua", curiosity: "A receita apareceu nas latas de leite condensado Nestlé nos anos 1940 — ninguém sabe se a Nestlé inventou ou copiou." },
  "arroz-con-leche": { price: "$25 MXN (~R$8)", origin: "Espanha → México", curiosity: "Existe uma canção infantil mexicana famosa: 'Arroz con leche, me quiero casar...' que toda criança conhece." },

  // ============ BEBIDAS ============
  "agua-horchata": { price: "$20 MXN (~R$7)", origin: "Valência, Espanha → México", curiosity: "A horchata espanhola usa chufa (tubérculo). A mexicana usa arroz e canela — sabores completamente diferentes." },
  "agua-jamaica": { price: "$15 MXN (~R$5)", origin: "África → México", curiosity: "As flores de hibisco (jamaica) chegaram ao México no período colonial via comércio com a África." },
  "chocolate-mexicano": { price: "$25 MXN (~R$8)", origin: "México (pré-hispânico)", curiosity: "Os astecas bebiam 'xocolātl' amargo com pimenta — os espanhóis adicionaram açúcar e conquistaram o mundo." },

  // ============ MARISCOS ============
  "ceviche-mexicano": { price: "$80 MXN (~R$27)", origin: "Costa mexicana", curiosity: "Diferente do peruano, o ceviche mexicano sempre leva tomate e se come em tostadas, não em prato." },
  "camarones-diabla": { price: "$120 MXN (~R$40)", origin: "Costa do Pacífico", curiosity: "A la diabla significa 'ao estilo do diabo' — a picância deve fazer suar e chorar de felicidade." },

  // ============ ARROZ & FEIJÃO ============
  "arroz-rojo": { price: "$10 MXN (~R$3)", origin: "México (todo o país)", curiosity: "O arroz chegou ao México via Filipinas no séc. XVI pelo Galeão de Manila — e virou acompanhamento nacional." },
  "frijoles-charros": { price: "$30 MXN (~R$10)", origin: "Norte do México", curiosity: "Nomeados em honra aos charros (cowboys mexicanos) que cozinhavam feijão com o que tinham no acampamento." },
  "frijoles-refritos": { price: "$10 MXN (~R$3)", origin: "México (todo o país)", curiosity: "O nome 'refrito' não significa frito duas vezes — 'refrito' em espanhol antigo significa 'bem frito'." },

  // ============ CAFÉ DA MANHÃ ============
  "huevos-rancheros": { price: "$50 MXN (~R$17)", origin: "Campo mexicano", curiosity: "Originalmente era o café da manhã dos trabalhadores rurais — substancial para aguentar um dia no campo." },
  "huevos-divorciados": { price: "$55 MXN (~R$18)", origin: "México", curiosity: "O nome humorístico surgiu porque os dois ovos estão separados por salsas diferentes — como um casal divorciado." },

  // ============ TAMALES & MASSAS ============
  "tamales-dulces": { price: "$15 MXN (~R$5)", origin: "México (todo o país)", curiosity: "No Dia de Reis (6 de janeiro), quem acha o bonequinho na Rosca de Reyes deve pagar tamales em 2 de fevereiro." },
  "empanadas-mexicanas": { price: "$20 MXN (~R$7)", origin: "Espanha → México", curiosity: "As empanadas mexicanas de picadillo são menores e mais apimentadas que as argentinas." },

  // ============ TORTILLAS & BASES ============
  "tortilla-milho": { price: "$2 MXN (~R$0,70)", origin: "México (todo o país)", curiosity: "O milho foi domesticado no México há 9.000 anos. A nixtamalização é invenção mesoamericana que mudou a humanidade." },
  "tortilla-trigo": { price: "$3 MXN (~R$1)", origin: "Norte do México", curiosity: "Tortillas de farinha surgiram porque o trigo se adaptou melhor ao clima seco do norte do México." },
  "gorditas-base": { price: "$15 MXN (~R$5)", origin: "Centro do México", curiosity: "O nome 'gordita' (gorda) vem da espessura — são mais grossas que tortillas normais." },
  "sopes-base": { price: "$20 MXN (~R$7)", origin: "Centro do México", curiosity: "Sopes existem desde antes da conquista espanhola — são um dos antojitos mais antigos." },
  "tlacoyos-base": { price: "$15 MXN (~R$5)", origin: "Centro do México", curiosity: "Tlacoyos foram encontrados em restos arqueológicos de 3.000 anos — a receita praticamente não mudou." },
  "tostadas-base": { price: "$5 MXN (~R$2)", origin: "México (todo o país)", curiosity: "Nasceram da necessidade de não desperdiçar tortillas velhas — fritas, ganhavam nova vida." },

  // ============ PRATOS TRADICIONAIS ============
  "enchiladas-verdes": { price: "$60 MXN (~R$20)", origin: "México (todo o país)", curiosity: "Verde vs Roja é o debate eterno das enchiladas — cada mexicano tem preferência forte." },
  "burritos": { price: "$50 MXN (~R$17)", origin: "Ciudad Juárez, Chihuahua", curiosity: "A lenda diz que Juan Méndez vendia comida em um burro nos anos 1910 — daí 'burrito' (burrinho)." },
  "chimichangas": { price: "$70 MXN (~R$23)", origin: "Sonora/Arizona", curiosity: "Diz a lenda que alguém derrubou um burrito na fritadeira por acidente e gritou '¡chimichanga!' (palavrão censurado)." },
  "quesadillas-trad": { price: "$25 MXN (~R$8)", origin: "Cidade do México", curiosity: "Na CDMX existe debate eterno: quesadilla precisa ter queijo? Para chilangos, não necessariamente!" },
  "fajitas": { price: "$120 MXN (~R$40)", origin: "Texas/Norte do México", curiosity: "Fajita vem de 'faja' (faixa) — era o corte barato dado aos vaqueros mexicanos no Texas." },
  "chilaquiles-rojos": { price: "$45 MXN (~R$15)", origin: "México (todo o país)", curiosity: "O nome vem do náhuatl 'chīlāquilitl' — literalmente 'chile e verdura'." },
  "pozole-blanco": { price: "$80 MXN (~R$27)", origin: "Norte do México", curiosity: "No norte preferem pozole blanco (sem chile), no sul preferem rojo ou verde — debate regional acalorado." },
  "enchiladas-suizas": { price: "$70 MXN (~R$23)", origin: "Cidade do México", curiosity: "Criadas no restaurante Sanborns nos anos 1950 — o 'suíça' refere-se ao creme de leite, não à Suíça." },
  "tamales-verdes": { price: "$15 MXN (~R$5)", origin: "México (todo o país)", curiosity: "No México se consomem 500 milhões de tamales por ano — durante festas, uma família faz centenas." },
  "enfrijoladas-trad": { price: "$45 MXN (~R$15)", origin: "Oaxaca/Centro do México", curiosity: "Enfrijoladas usam feijão negro; enmoladas usam mole; entomatadas usam tomate — sistema de tortilla+molho." },
  "mole-amarillo": { price: "$90 MXN (~R$30)", origin: "Oaxaca, México", curiosity: "Oaxaca é a 'tierra de los siete moles' — cada um com cor, sabor e ocasião diferentes." },

  // ============ QUEIJOS & RECHEIOS ============
  "queijo-oaxaca": { price: "$80 MXN (~R$27)/kg", origin: "Oaxaca, México", curiosity: "A técnica de fazer queijo Oaxaca foi trazida por monges dominicanos — mas adaptada com leite local." },
  "queso-fundido": { price: "$80 MXN (~R$27)", origin: "Norte do México", curiosity: "Queso fundido é o equivalente mexicano da fondue suíça — mas com chorizo." },
  "queijo-cotija": { price: "$120 MXN (~R$40)/kg", origin: "Cotija, Michoacán", curiosity: "Cotija tem Denominação de Origem desde 2008 — só pode ser chamado Cotija se for de Michoacán." },
  "recheio-picadillo": { price: "$60 MXN (~R$20)/porção", origin: "México (todo o país)", curiosity: "Picadillo serve para tudo — é o recheio 'curinga' da culinária mexicana." },
  "recheio-tinga": { price: "$50 MXN (~R$17)/porção", origin: "Puebla, México", curiosity: "A tinga de Puebla é diferente da de outros estados — o chipotle em adobo é fundamental." },
  "recheio-rajas": { price: "$40 MXN (~R$13)/porção", origin: "Centro do México", curiosity: "Rajas con crema é tão popular que virou sabor de tamales, quesadillas e até pizza no México." },
  "recheio-vegano": { price: "$30 MXN (~R$10)/porção", origin: "México pré-hispânico", curiosity: "A culinária pré-hispânica era naturalmente vegana — carne chegou com os espanhóis." },

  // ============ CULTURA MEXICANA ============
  "historia-taco": { price: "Gratuito", origin: "México", curiosity: "O taco é mencionado pela primeira vez em documentos do séc. XVIII — mas existia muito antes." },
  "cultura-pimenta": { price: "Gratuito", origin: "México", curiosity: "O México tem mais de 60 variedades de pimenta — mais do que qualquer outro país do mundo." },
  "historia-mole": { price: "Gratuito", origin: "Puebla/Oaxaca", curiosity: "Em 2010 a culinária mexicana foi declarada Patrimônio Imaterial da Humanidade pela UNESCO." },
  "dia-muertos": { price: "Gratuito", origin: "México", curiosity: "O Dia dos Mortos é patrimônio UNESCO desde 2003 — a celebração une tradições pré-hispânicas e católicas." },
  "regioes-gastronomicas": { price: "Gratuito", origin: "México", curiosity: "O México tem 32 estados e cada um poderia ser um país gastronômico independente." },
  "festivais-mexicanos": { price: "Gratuito", origin: "México", curiosity: "A Guelaguetza é a celebração mais antiga das Américas — mais de 3.000 anos de tradição." },

  // ============ ESCOLA MEXICANA (PREMIUM) ============
  "curso-basico": { price: "Premium", origin: "México", curiosity: "A culinária mexicana foi declarada Patrimônio Imaterial da Humanidade pela UNESCO em 2010." },
  "curso-intermediario": { price: "Premium", origin: "México", curiosity: "O tamale é o prato mais antigo das Américas — existem evidências de 8.000 a.C." },
  "curso-avancado": { price: "Premium", origin: "México", curiosity: "O mole negro de Oaxaca pode levar 40+ ingredientes e 3 dias para preparar." },
  "tecnica-tortilla-pro": { price: "Premium", origin: "México", curiosity: "Uma tortillera profissional faz 3 tortillas por minuto — 180 por hora." },
  "tecnica-molhos-salsas": { price: "Premium", origin: "México", curiosity: "Existem mais de 1.000 salsas documentadas no México — cada cidade tem a sua." },
  "uso-pimentas-pro": { price: "Premium", origin: "México", curiosity: "A capsaicina é medida em SHU: poblano=1.500, jalapeño=5.000, habanero=350.000, Carolina Reaper=2.200.000." },
  "fermentacoes-mex": { price: "Premium", origin: "México pré-hispânico", curiosity: "O pulque era bebida sagrada dos astecas — só sacerdotes e guerreiros podiam beber em quantidade." },
  "processos-tradicionais": { price: "Premium", origin: "México", curiosity: "Um molcajete de pedra vulcânica dura gerações — passa de mãe para filha." },
  "conservacao-alimentos": { price: "Premium", origin: "México", curiosity: "A nixtamalização aumenta o valor nutricional do milho em 30% e permite conservação por meses." },
  "producao-artesanal": { price: "Premium", origin: "México", curiosity: "O mercado de produtos artesanais mexicanos movimenta bilhões — chocolate, queijo Oaxaca e mole lideram." },

  // ============ MOLHOS EXTRAS ============
  "molho-apimentado-habanero": { price: "$30 MXN (~R$10)", origin: "Yucatán, México", curiosity: "O habanero yucateco é uma das pimentas mais ardidas do mundo — 350.000 SHU na escala Scoville." },
  "molho-suave-aguacate": { price: "$25 MXN (~R$8)", origin: "México", curiosity: "Molhos de abacate são tradição pré-hispânica — os astecas já combinavam abacate com tomatillo." },
  "molho-defumado-chipotle": { price: "$20 MXN (~R$7)", origin: "México", curiosity: "Chipotle é simplesmente um jalapeño seco e defumado — a defumação transforma completamente o sabor." },

  // ============ SOPAS EXTRAS ============
  "caldo-camaron": { price: "$100 MXN (~R$33)", origin: "Costa mexicana", curiosity: "Na Quaresma, o caldo de camarão substitui carnes vermelhas — tradição católica mexicana." },
  "caldo-tlalpeno": { price: "$70 MXN (~R$23)", origin: "Tlalpan, CDMX", curiosity: "Originário do bairro de Tlalpan, ao sul da Cidade do México — hoje servido em todo o país." },

  // ============ SOBREMESAS EXTRAS ============
  "helado-nieve": { price: "$25 MXN (~R$8)", origin: "Oaxaca, México", curiosity: "Os nieveros de Oaxaca fazem sorvete artesanal com sabores impossíveis: leche quemada, tuna e mezcal." },
  "mazapan": { price: "$5 MXN (~R$2)", origin: "México", curiosity: "De la Rosa é a marca de mazapán mais famosa — o doce que todo mexicano reconhece pela embalagem vermelha." },
  "pastel-tres-leches": { price: "$50 MXN (~R$17)", origin: "México", curiosity: "A receita apareceu nas latas de leite condensado nos anos 1940 — debate se Nestlé inventou ou copiou." },
  "alegrias": { price: "$10 MXN (~R$3)", origin: "México pré-hispânico", curiosity: "Os astecas faziam alegrías com sangue humano para rituais — a versão com mel veio após a conquista." },

  // ============ BATCH 5 EXTRAS ============
  "tacos-camarao": { price: "$35 MXN (~R$12)", origin: "Baja California", curiosity: "Baja California é o berço dos tacos de marisco empanado — influência americana com alma mexicana." },
  "tacos-veganos": { price: "$20 MXN (~R$7)", origin: "México contemporâneo", curiosity: "A culinária mexicana pré-hispânica já era rica em opções vegetais — nopales, feijão, milho, abóbora." },
  "tacos-gourmet": { price: "$80 MXN (~R$27)", origin: "México contemporâneo", curiosity: "A nouvelle cuisine mexicana está entre as mais premiadas do mundo — 3 restaurantes mexicanos no top 50 mundial." },
  "pupusas-mex": { price: "$15 MXN (~R$5)", origin: "Oaxaca, México", curiosity: "Memelas são as 'primas' oaxaqueñas das tortillas — mais grossas e com banha pincelada." },
  "chalupas": { price: "$10 MXN (~R$3)", origin: "Puebla, México", curiosity: "O nome chalupa vem das canoas (chalupas) dos canais de Xochimilco — formato similar." },
  "michelada": { price: "$40 MXN (~R$13)", origin: "México", curiosity: "A lenda diz que Michel Ésper pediu cerveja com limão e sal em San Luis Potosí — 'la cerveza de Michel' virou michelada." },
  "margarita": { price: "$80 MXN (~R$27)", origin: "México/Texas", curiosity: "Há pelo menos 6 versões diferentes de quem inventou a margarita — de Tijuana a Ciudad Juárez." },
  "pulque": { price: "$20 MXN (~R$7)", origin: "México pré-hispânico", curiosity: "O pulque era a bebida dos deuses — a deusa Mayahuel o criou de suas 400 tetas (as espinhas do agave)." },
  "camarones-coconut": { price: "$120 MXN (~R$40)", origin: "Costa do Pacífico", curiosity: "A combinação coco + habanero é assinatura de Yucatán — doce e picante em equilíbrio mortal." },
  "zarandeado": { price: "$200 MXN (~R$67)", origin: "Nayarit, México", curiosity: "Zarandear significa 'sacudir' — o peixe era originalmente cozido sobre grelha de madeira sacudida." },
  "frijoles-puercos": { price: "$40 MXN (~R$13)", origin: "Norte do México", curiosity: "A versão 'porca' do feijão leva tudo que engorda — bacon, chorizo, chicharrón e queijo." },
  "huevos-motulenos": { price: "$60 MXN (~R$20)", origin: "Motul, Yucatán", curiosity: "Criados na cidade de Motul nos anos 1920 — a banana frita é o ingrediente que surpreende todos." },
  "chilaquiles-especiais": { price: "$55 MXN (~R$18)", origin: "México (todo o país)", curiosity: "Chilaquiles com queijo Oaxaca derretido por cima é a versão premium que virou tendência nos brunchs." },
};
