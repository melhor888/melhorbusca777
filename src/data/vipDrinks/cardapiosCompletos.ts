import { VipDrink } from "./types";

export const cardapiosCompletos: VipDrink[] = [
  {
    id: "cc-jantar-kaiseki",
    name: "Jantar Kaiseki Completo",
    category: "Cardápios Completos",
    image: "cc-kaiseki",
    ingredients: [
      "SAKIZUKE (aperitivo): tofu de seda com uni e geleia de dashi",
      "HASSUN (prato sazonal): 5 pequenas porções representando a estação",
      "OWAN (sopa): missoshiru de miso branco com tofu e mitsuba",
      "MUKOZUKE (sashimi): 3 tipos de peixe fresco do dia",
      "YAKIMONO (grelhado): peixe grelhado com sal ou teriyaki",
      "TAKIAWASE (cozido): vegetais sazonais em nimono",
      "GOHAN (arroz): arroz takikomi com ingredientes da estação",
      "MIZUMONO (sobremesa): wagashi sazonal com matcha",
      "Sake junmai daiginjo para harmonizar"
    ],
    steps: [
      "Planeje com 3 dias de antecedência — kaiseki exige ingredientes frescos e sazonais.",
      "DIA 1: Prepare dashi, marinadas e conservas. Faça o hassun.",
      "DIA 2: Compre peixes frescos. Prepare o nimono e o takikomi gohan base.",
      "DIA 3 (serviço): Monte o sakizuke — deve ser visualmente impactante.",
      "Sirva cada prato em sequência, um por vez, com intervalo de 5-10 minutos.",
      "A louça é PARTE do prato — cada prato usa cerâmica diferente que complementa a comida.",
      "Primavera: tons de rosa e verde. Verão: azul e vidro. Outono: marrom e vermelho. Inverno: preto e dourado.",
      "O gohan (arroz) é servido no FINAL — nunca no início como em refeições ocidentais.",
      "Finalize com matcha batido (usucha) e wagashi — fecha o ciclo sazonal.",
      "Total: 8-12 pratos servidos ao longo de 2-3 horas."
    ],
    difficulty: "Avançado",
    time: "3 dias",
    description: "Kaiseki é a mais alta expressão da culinária japonesa — uma refeição-arte que celebra a estação do ano com cada prato. Originária da cerimônia do chá de Kyoto, cada detalhe importa: a ordem dos pratos, a cerâmica, a disposição, as cores. Um jantar kaiseki em Kyoto pode custar ¥50.000+ por pessoa."
  },
  {
    id: "cc-festa-izakaya",
    name: "Festa Izakaya em Casa",
    category: "Cardápios Completos",
    image: "cc-izakaya",
    ingredients: [
      "PETISCOS FRIOS: edamame, hiyayakko (tofu frio), sunomono",
      "FRITOS: karaage, gyoza, korokke, takoyaki",
      "GRELHADOS: yakitori variado (5 tipos), yaki-onigiri",
      "SALADAS: salada de repolho com gergelim, salada de batata japonesa",
      "FINALIZADORES: ochazuke, onigiri, yakisoba",
      "BEBIDAS: cerveja japonesa, shochu highball, sake frio",
      "Para 8-10 pessoas"
    ],
    steps: [
      "Monte um 'menu de izakaya' na mesa — liste os pratos disponíveis como um bar real.",
      "Comece com petiscos frios + cerveja gelada — toriaezu biiru (primeiro, cerveja!).",
      "Sirva edamame e hiyayakko enquanto os fritos são preparados.",
      "Karaage e gyoza devem sair quentes — frite em tandas pequenas.",
      "Monte uma estação de yakitori: grelhe na frente dos convidados se possível.",
      "Ofereça tare E shio — cada convidado escolhe seu estilo.",
      "A partir da 2ª hora: transicione para shochu highball e sake.",
      "Finalize com 'shime' (prato final): ochazuke ou yakisoba para 'fechar' a noite.",
      "Estilo kanpai: todos brindam juntos antes de cada nova rodada de bebida.",
      "Ambiente: música japonesa low-fi, iluminação quente, lanterna de papel."
    ],
    difficulty: "Médio",
    time: "4h",
    description: "O Izakaya é o pub japonês — o coração social do Japão. Uma festa izakaya em casa recria a atmosfera de Omoide Yokocho ou Golden Gai em Shinjuku. O conceito é 'nomunication' — comunicação através da bebida. Todos compartilham pratos, brindam alto ('KANPAI!') e a noite flui naturalmente."
  },
  {
    id: "cc-hanami-party",
    name: "Hanami Party (Piquenique de Cerejeiras)",
    category: "Cardápios Completos",
    image: "cc-hanami",
    ingredients: [
      "BENTO HANAMI: onigiri variados (3 sabores), tamagoyaki, karaage frio",
      "DOCES: dango tri-color (hanami dango), sakura mochi, dorayaki",
      "PETISCOS: chips de renkon, edamame, tsukemono variados",
      "BEBIDAS: sake frio, cerveja, chá verde gelado",
      "EXTRAS: morango, frutas da primavera, wagashi de sakura",
      "Toalha grande (picnic sheet azul), copos descartáveis",
      "Para 6-8 pessoas"
    ],
    steps: [
      "Prepare tudo na noite anterior — no dia do hanami, é só montar e levar.",
      "Monte 2-3 caixas bento grandes com divisórias: onigiri, proteínas, vegetais.",
      "Onigiri em 3 sabores: salmão (rosa), umeboshi (vermelho), kombu (verde).",
      "Tamagoyaki deve ser cortado em fatias bonitas — apresentação importa.",
      "Hanami dango: 3 cores (rosa, branco, verde) em espeto — essencial para a estética.",
      "Sakura mochi: mochi rosa envolto em folha de cerejeira em conserva. COMA a folha.",
      "Leve sake em tokkuri ou garrafas pet — tradicionalmente servido frio no hanami.",
      "REGRA DE OURO: chegue cedo para garantir lugar sob as cerejeiras (6h da manhã!).",
      "Estenda a toalha, organize a comida de forma bonita, tire fotos ANTES de comer.",
      "Kanpai sob as pétalas caindo — este é o momento perfeito."
    ],
    difficulty: "Médio",
    time: "5h (preparo na véspera)",
    description: "Hanami é a tradição milenar de contemplar as cerejeiras em flor (sakura) — e comer debaixo delas. De março a abril, todo o Japão celebra com piqueniques sob as árvores. O bento hanami é preparado com carinho especial, com cores que ecoam a primavera. Em Ueno Park e Maruyama Park (Kyoto), a celebração dura semanas."
  },
  {
    id: "cc-reveillon-japones",
    name: "Osechi Ryori (Réveillon Japonês)",
    category: "Cardápios Completos",
    image: "cc-osechi",
    ingredients: [
      "JUBAKO (caixa lacada de 3 andares):",
      "1º ANDAR (Ichi-no-ju): kuromame (feijão preto doce), kazunoko (ovas de arenque), tazukuri (sardinha seca doce), kamaboko (massa de peixe), datemaki (omelete doce enrolado)",
      "2º ANDAR (Ni-no-ju): ebi no umani (camarão cozido), buri teriyaki (yellowtail), nishime (cozido de raízes)",
      "3º ANDAR (San-no-ju): kurikinton (purê de castanha), kohaku namasu (daikon e cenoura em vinagre), renkon vinagrete",
      "Ozoni (sopa de mochi do Ano Novo)",
      "Toso (sake medicinal de Ano Novo)"
    ],
    steps: [
      "Comece a preparar 3-4 dias antes do Ano Novo (28-29 de dezembro).",
      "DIA 1: Kuromame (demora 8h em fogo baixo), tazukuri, kohaku namasu.",
      "DIA 2: Datemaki, kurikinton, nishime, kamaboko decorativo.",
      "DIA 3: Ebi, buri teriyaki, renkon. Monte no jubako.",
      "Cada item tem significado: kuromame = saúde, kazunoko = fertilidade, ebi = longevidade.",
      "Monte no jubako em camadas — primeiro andar (topo) é o mais importante.",
      "Decore com folhas de nandina, pinheiro e bambu (shochikubai).",
      "No dia 1° de janeiro: sirva o osechi com ozoni (sopa com mochi).",
      "Toso (sake com ervas) é a primeira bebida do ano — serve-se do mais jovem ao mais velho.",
      "O osechi dura 3 dias — foi criado para que as cozinheiras descansassem no Ano Novo."
    ],
    difficulty: "Avançado",
    time: "3-4 dias",
    description: "Osechi Ryori é a refeição sagrada do Ano Novo japonês — cada prato simboliza um desejo para o ano que começa. Preparado nos dias anteriores ao réveillon, é servido em jubako (caixas lacadas) por 3 dias. Em Tóquio, famílias encomendam osechi de restaurantes renomados por até ¥100.000, mas o caseiro tem sabor insubstituível."
  },
  {
    id: "cc-bento-premium",
    name: "Bento Premium Executivo",
    category: "Cardápios Completos",
    image: "cc-bento-premium",
    ingredients: [
      "ARROZ: onigiri de salmão grelhado com furikake premium",
      "PROTEÍNA PRINCIPAL: salmão teriyaki ou tonkatsu cortado",
      "TAMAGOYAKI: dashimaki tamago (omelete com dashi) em 3 fatias",
      "VEGETAIS: kinpira gobo, brócolis no vapor, cenoura decorativa",
      "CONSERVAS: umeboshi, takuan (2 fatias), tsukemono da estação",
      "EXTRAS: karaage (2 peças), mini salada de batata",
      "Fruta: morango ou uva kyoho (1-2 unidades)",
      "Caixa magewappa (madeira curvada) ou jubako individual"
    ],
    steps: [
      "Cozinhe o arroz na noite anterior e faça os onigiri de manhã cedo.",
      "Prepare o tamagoyaki fresco — deve ser dourado e ligeiramente doce.",
      "Grelhe o salmão ou prepare o tonkatsu. Corte em fatias após esfriar.",
      "Kinpira gobo pode ser feito na véspera — os sabores se intensificam.",
      "RESFRIE tudo completamente antes de montar — evita condensação e bactérias.",
      "Monte seguindo a proporção: 50% arroz, 30% proteína, 20% acompanhamentos.",
      "Preencha TODOS os espaços — nenhum vazio. Use folhas de shiso como separadores.",
      "Decore: cenoura em flor, brócolis como 'árvore', umeboshi centralizado no arroz.",
      "Embale com elástico e furoshiki (lenço). Inclua hashi descartáveis com suporte.",
      "Deve ser bonito ao abrir — a primeira impressão é parte da refeição."
    ],
    difficulty: "Médio",
    time: "1h30",
    description: "O Bento Premium é o almoço que executivos e profissionais japoneses levam ao trabalho com orgulho. Nas estações de trem do Japão, os ekiben (bento de estação) são famosos — cada região tem sua especialidade. Um bento bem feito é uma declaração de amor e cuidado, carregando tradição em cada camada."
  },
  {
    id: "cc-menu-ramen",
    name: "Menu Completo de Ramen-ya",
    category: "Cardápios Completos",
    image: "cc-ramen-menu",
    ingredients: [
      "CALDO: tonkotsu (48h), torigara (frango, 12h) ou miso base",
      "TARE: shoyu tare, miso tare ou shio tare",
      "ÓLEO AROMÁTICO: mayu (alho negro), rayu (chili) ou negi abura",
      "MACARRÃO: hosomen (fino) para tonkotsu, futomen (grosso) para miso",
      "TOPPINGS: chashu (3 fatias), ajitsuke tamago, menma, nori, negi, moyashi",
      "ACOMPANHAMENTOS: gyoza (6 unidades), karaage (4 peças), edamame",
      "ARROZ: gohan branco ou chahan (arroz frito)",
      "BEBIDA: cerveja Asahi ou chá gelado mugicha"
    ],
    steps: [
      "CALDO (preparo antecipado): Tonkotsu leva 48h. Torigara leva 12h. Miso base leva 4h.",
      "TARE: prepare e armazene — dura semanas na geladeira.",
      "No dia do serviço: aqueça o caldo, prepare os toppings frescos.",
      "Chashu: braseie a barriga de porco enrolada por 3h. Fatie quando fria.",
      "Ajitsuke tamago: ovos 6min30s, casca removida, marinados em tare por mínimo 4h.",
      "MONTAGEM (deve levar menos de 60 segundos): tare no fundo, caldo quente, óleo aromático.",
      "Cozinhe o macarrão (1-2 min) e escorra BEM. Coloque no caldo.",
      "Toppings em setores organizados: chashu de um lado, ovo cortado ao meio, nori em pé.",
      "Sirva IMEDIATAMENTE com gyoza e cerveja. Ramen espera por ninguém.",
      "O cliente deve terminar em 10-15 minutos — ramen não é para ser degustado lentamente."
    ],
    difficulty: "Avançado",
    time: "48h (caldo) + 2h (serviço)",
    description: "Uma ramen-ya autêntica é obsessão em forma de restaurante. O caldo é a alma — tonkotsu de 48h ou torigara de 12h. Em Tóquio, filas de 2 horas por um bowl são normais. O menu completo inclui ramen como estrela, mas gyoza e karaage são os coadjuvantes essenciais. A experiência: barulhenta, rápida, intensa."
  },
  {
    id: "cc-churrasco-yakiniku",
    name: "Churrasco Yakiniku Japonês",
    category: "Cardápios Completos",
    image: "cc-yakiniku",
    ingredients: [
      "CARNES: kalbi (costela), harami (diafragma), tan (língua), wagyu karubi",
      "MARINADA TARE: soja, sake, mirin, gergelim, alho, maçã ralada, pera ralada",
      "VEGETAIS: cebola, pimentão, abobrinha, cogumelo shiitake, alho em folha",
      "MOLHO PARA MERGULHAR: tare yakiniku, sal com limão (shio-dare), ponzu",
      "ACOMPANHAMENTOS: arroz branco, namul (vegetais coreano-japonês), kimchi",
      "SOPA: wakame-jiru ou tamago-jiru",
      "SOBREMESA: sorvete de baunilha com kuromitsu",
      "Grelha portátil de mesa ou churrasqueira a carvão"
    ],
    steps: [
      "Marine kalbi e harami no tare por pelo menos 2 horas (melhor overnight).",
      "Tan (língua): tempere apenas com sal e limão — pureza do sabor.",
      "Wagyu: NÃO marine. Apenas sal e pimenta — a gordura faz o trabalho.",
      "Aqueça a grelha de mesa. Se usar carvão, espere até ficar branco.",
      "Ordem de grelhar: comece pela tan (língua), depois kalbi, harami, wagyu por último.",
      "Grelhe fatias finas por 15-20 segundos de cada lado — sem passar do ponto.",
      "Mergulhe no molho de sua preferência: tare para sabor forte, shio-dare para limpo.",
      "Arroz branco é obrigatório — coloque a carne sobre o arroz com um pouco de tare.",
      "Vegetais grelhados entre as carnes para limpar o paladar.",
      "Finalize com sorvete — a tradição yakiniku de sobremesa."
    ],
    difficulty: "Médio",
    time: "3h",
    description: "Yakiniku é o churrasco japonês de mesa, influenciado pela culinária coreana. Em Tóquio, restaurantes como Yoroniku servem cortes wagyu na grelha individual de cada cliente. O ritual é social: todos grelhando, conversando e brindando com cerveja gelada. O tare com maçã e pera raladas é o segredo do sabor."
  },
  {
    id: "cc-cafe-da-manha-ryokan",
    name: "Café da Manhã de Ryokan",
    category: "Cardápios Completos",
    image: "cc-ryokan",
    ingredients: [
      "ARROZ: gohan branco fumegante com umeboshi",
      "MISSOSHIRU: missoshiru de wakame e tofu",
      "PEIXE: salmão grelhado (shakejake) ou aji himono (cavala seca)",
      "OVO: tamagoyaki dashimaki ou onsen tamago",
      "VEGETAIS: ohitashi (espinafre com dashi), salada de hijiki",
      "CONSERVAS: tsukemono variados (3-4 tipos), natto com negi",
      "EXTRAS: nori tostado, furikake, chá verde hojicha",
      "Louça: conjunto de cerâmica japonesa com bandeja lacada"
    ],
    steps: [
      "Prepare o arroz primeiro — deve estar recém-cozido e fumegante.",
      "Faça o missoshiru: dashi + missô. Adicione tofu e wakame. NÃO ferva após o missô.",
      "Grelhe o salmão: tempere com sal 30 min antes. Grelhe pele para baixo primeiro.",
      "Tamagoyaki: bata 3 ovos com dashi, soja e mirin. Cozinhe na frigideira retangular em camadas.",
      "Ohitashi: cozinhe espinafre 30s, esprema bem, corte. Regue com dashi frio + soja.",
      "Monte em bandeja individual: arroz à esquerda, missoshiru à direita (tradição).",
      "Peixe ao centro-superior. Acompanhamentos em pratinhos ao redor.",
      "Natto: misture vigorosamente 100x com hashi até ficar viscoso. Adicione soja e negi.",
      "Nori tostado: segure brevemente sobre o fogo para crocância. Enrola com arroz na mão.",
      "Sirva com hojicha quente — o chá torrado combina com a refeição salgada."
    ],
    difficulty: "Médio",
    time: "1h",
    description: "O café da manhã japonês de ryokan (pousada tradicional) é considerado a refeição mais equilibrada do mundo: proteína, vegetais, fermentados, arroz e sopa. Em Hakone ou Kinosaki Onsen, este café é servido após o banho termal matinal — o corpo relaxado e a mente serena fazem cada sabor se amplificar."
  },
  {
    id: "cc-menu-soba",
    name: "Menu Soba-ya Tradicional",
    category: "Cardápios Completos",
    image: "cc-soba-menu",
    ingredients: [
      "SOBA PRINCIPAL: zaru soba (fria) ou kake soba (quente em caldo)",
      "TEMPURÁ: tempurá de camarão e vegetais para acompanhar",
      "SOBA-YU: água do cozimento da soba (servida ao final)",
      "TSUYU: dashi concentrado + soja + mirin (para mergulhar)",
      "CONDIMENTOS: negi fatiado, wasabi fresco, shichimi togarashi",
      "ACOMPANHAMENTOS: inari-zushi (tofu frito recheado), tamagoyaki",
      "SOBREMESA: soba-cha (chá de trigo sarraceno) com wagashi",
      "Louça: esteira de bambu (zaru), tigelas de cerâmica"
    ],
    steps: [
      "Prepare o tsuyu: reduza dashi + soja + mirin por 15 min. Resfrie para zaru soba.",
      "Faça a tempurá (ver receita específica) — deve estar crocante.",
      "Cozinhe a soba em água abundante. Para soba seca: 5 min. Para teuchi (fresca): 60 seg.",
      "Zaru soba: escorra e lave em água gelada. Sirva sobre esteira de bambu.",
      "Kake soba: coloque a soba no caldo quente. Toppings: negi, kamaboko, tempurá.",
      "Mergulhe a soba no tsuyu (apenas 1/3 do fio). Sugue com som — é educado!",
      "O SOM de sugar a soba indica apreciação. Silêncio é falta de educação.",
      "Após comer, peça SOBA-YU: água onde a soba cozinhou, cheia de nutrientes.",
      "Despeje o soba-yu no tsuyu restante — beba como sopa. É o 'chá digestivo' japonês.",
      "Finalize com soba-cha quente — chá feito de trigo sarraceno torrado."
    ],
    difficulty: "Médio",
    time: "1h30",
    description: "As soba-ya tradicionais de Tóquio servem soba artesanal desde o período Edo (1603-1868). O ritual inclui sugar ruidosamente (aeração melhora o sabor), usar wasabi diretamente na soba (não no tsuyu), e beber o soba-yu ao final. A experiência completa é sobre respeito ao ingrediente e à técnica centenária."
  },
  {
    id: "cc-menu-udon",
    name: "Menu Udon Sanuki Completo",
    category: "Cardápios Completos",
    image: "cc-udon",
    ingredients: [
      "UDON: massa Sanuki fresca (farinha, água, sal — pisada com os pés)",
      "CALDOS: kake (quente, claro), kamaage (água do cozimento)",
      "TOPPINGS: tempurá variada, aburaage, wakame, tororo (inhame ralado)",
      "ONIGIRI: 2-3 sabores para acompanhar",
      "CONDIMENTOS: negi, gengibre ralado, tenkasu (migalhas de tempurá)",
      "MOLHO: dashi concentrado para kamaage",
      "Tigela donburi grande, escorredor de mesa"
    ],
    steps: [
      "Massa Sanuki: 500g farinha + 225ml água salgada (sal 5%). Misture até formar massa.",
      "Coloque em saco plástico grosso e PISE com os pés por 15 min (técnica tradicional).",
      "Descanse 2h mínimo (melhor overnight na geladeira).",
      "Abra a massa com rolo até 3mm. Corte fios de 3-4mm de largura.",
      "Cozinhe em MUITA água fervendo por 12-15 minutos. Teste a textura (kosha = firme).",
      "KAKE UDON: lave a soba em água fria, aqueça novamente e sirva no caldo quente.",
      "KAMAAGE: sirva o udon na própria água do cozimento, quente, com molho concentrado ao lado.",
      "BUKKAKE: udon frio com toppings variados e tsuyu concentrado despejado por cima.",
      "Acompanhe com tempurá e onigiri — em Sanuki (Kagawa), esta é a refeição completa.",
      "O udon perfeito tem 'koshi' — resistência ao morder, textura elástica e chewy."
    ],
    difficulty: "Médio",
    time: "3h (com descanso da massa)",
    description: "Sanuki Udon de Kagawa é considerado o melhor udon do Japão — a província tem mais udon-ya per capita que qualquer lugar do mundo. O segredo está na técnica de pisar a massa com os pés, que desenvolve o glúten criando a textura 'koshi' (elástica e firme). Em Kagawa, filas de 1 hora por um bowl de ¥300 são comuns."
  }
];
