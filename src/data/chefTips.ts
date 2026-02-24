export interface ChefTip {
  glass: string;
  serve: string;
  tip: string;
}

export const chefTips: Record<string, ChefTip> = {
  "sushi-misto": {
    glass: "Tábua de madeira ou prato de cerâmica",
    serve: "Organize por tipo e cor. Sirva com shoyu em potinho individual, wasabi e gari.",
    tip: "Consuma o sushi na ordem: peixe branco → salmão → atum (do mais suave ao mais intenso). Mergulhe pelo lado do peixe no shoyu.",
  },
  "nigiri-salmao": {
    glass: "Prato de cerâmica japonesa (sara)",
    serve: "Sirva sobre uma tábua de madeira ou prato de cerâmica rústica. Consumir em até 30 segundos após montado.",
    tip: "O arroz deve estar na temperatura corporal — nunca frio. Passe wasabi entre o peixe e o arroz, nunca dissolva no shoyu.",
  },
  "nigiri-atum": {
    glass: "Prato de cerâmica japonesa",
    serve: "Sirva com wasabi fresco e shoyu de qualidade. O atum deve estar em temperatura ambiente.",
    tip: "Maguro (atum) é o peixe mais tradicional do sushi. Se possível, use chutoro (médio gordo) para mais sabor.",
  },
  "sashimi-misto": {
    glass: "Prato grande de cerâmica ou madeira com gelo",
    serve: "Organize do sabor mais suave ao mais intenso: peixe branco → salmão → atum.",
    tip: "Use faca yanagiba bem afiada. Cada corte em um único movimento, sem serrar.",
  },
  "temaki-salmao": {
    glass: "Suporte de madeira ou diretamente na mão",
    serve: "Coma imediatamente — o nori perde a crocância em minutos. Coma com as mãos.",
    tip: "O nori deve ser de qualidade premium. O segredo é pouco arroz e bastante recheio.",
  },
  "temaki-skin": {
    glass: "Suporte de madeira",
    serve: "Sirva logo após montar para manter a crocância do skin e do nori.",
    tip: "Frite a pele de salmão até ficar bem crocante e sequinha. É o contraste de texturas que faz esse temaki especial.",
  },
  "uramaki-california": {
    glass: "Prato retangular de cerâmica",
    serve: "Corte com faca molhada para cortes limpos. Mostre o arroz e gergelim por fora.",
    tip: "O abacate deve estar maduro mas firme. Use filme plástico sobre a esteira para o arroz não grudar.",
  },
  "hosomaki-pepino": {
    glass: "Prato retangular de cerâmica",
    serve: "Ideal como sushi leve e refrescante para começar uma refeição.",
    tip: "Remova as sementes do pepino para evitar umidade. Use pouco arroz — hosomaki deve ser delicado.",
  },
  "futomaki": {
    glass: "Prato grande ou tábua de madeira",
    serve: "Corte com faca afiada e molhada. As fatias grossas mostram o bonito corte transversal.",
    tip: "Pressão uniforme ao enrolar — firme mas sem esmagar. O tamagoyaki deve ser doce e úmido.",
  },
  "ramen-tonkotsu": {
    glass: "Tigela grande de cerâmica (donburi) de 800ml",
    serve: "Sirva imediatamente — o macarrão absorve o caldo rapidamente. O ramen não espera.",
    tip: "O segredo do caldo cremoso é ferver os ossos em fogo ALTO por 12+ horas. O ovo marinado deve ter gema mole — cozinhe exatamente 6 min 30 seg.",
  },
  "ramen-shoyu": {
    glass: "Tigela grande de cerâmica",
    serve: "O caldo deve estar bem quente. Sirva o macarrão separado se for delivery.",
    tip: "O tare (base de shoyu) é o segredo. Cada loja de ramen tem sua receita secreta de tare.",
  },
  "ramen-miso": {
    glass: "Tigela grande e profunda",
    serve: "A manteiga deve ser colocada no último momento para derreter lentamente no caldo.",
    tip: "Use missô vermelho para mais intensidade. O milho doce é característico do estilo Sapporo.",
  },
  "udon-kitsune": {
    glass: "Tigela grande de cerâmica",
    serve: "O caldo deve cobrir o udon. Aspire o macarrão — fazer barulho é sinal de que está gostoso!",
    tip: "Udon fresco é muito superior ao seco. A textura elástica (koshi) define um bom udon.",
  },
  "udon-tempura": {
    glass: "Tigela grande com o tempurá apoiado na borda",
    serve: "O tempurá deve ser colocado na hora de servir para não amolecer no caldo.",
    tip: "Alguns preferem o tempurá crocante ao lado. Outros gostam de mergulhar e deixar absorver o caldo. Ambos são corretos.",
  },
  "yakisoba": {
    glass: "Prato grande ou bandeja de festival",
    serve: "Sirva bem quente com katsuobushi por cima — os flocos dançam com o vapor!",
    tip: "O fogo ALTO é essencial. Não mexa demais — deixe o macarrão criar crosta de contato com a chapa.",
  },
  "soba-fria": {
    glass: "Esteira de bambu (zaru) com prato coletor",
    serve: "No verão, é o prato perfeito. O molho tsuyu gelado e o soba frio são refrescantes.",
    tip: "Use soba 100% trigo sarraceno para o melhor sabor. Lave em água gelada para firmar a textura.",
  },
  "soba-quente": {
    glass: "Tigela de cerâmica",
    serve: "Sirva bem quente, o soba fica melhor quando consumido rapidamente.",
    tip: "O caldo deve ser mais leve que o de udon. O soba tem sabor delicado que pode ser mascarado por caldos fortes.",
  },
  "yakitori": {
    glass: "Tábua de madeira ou prato alongado",
    serve: "Em izakayas, é servido direto do espeto. Combine com cerveja gelada.",
    tip: "Use carvão binchotan para o melhor sabor. Pincele tare apenas nos últimos 30 segundos.",
  },
  "karaage": {
    glass: "Cesta de papel ou prato com folha decorativa",
    serve: "Sirva imediatamente com fatias de limão. Perfeito como acompanhamento de cerveja.",
    tip: "Use amido de milho ou katakuriko — não farinha de trigo. A dupla fritura (170°C → 180°C) é fundamental para crocância.",
  },
  "tempura-mista": {
    glass: "Cesta de bambu forrada com papel absorvente",
    serve: "Sirva imediatamente após fritar. A ordem de consumo: vegetais → camarão.",
    tip: "A água da massa DEVE ser gelada com gás. Temperatura do óleo: 180°C. Teste com gota de massa.",
  },
  "tonkatsu": {
    glass: "Prato retangular com compartimento para molho",
    serve: "Corte em tiras antes de servir. Repolho finamente fatiado é obrigatório.",
    tip: "Use panko japonês. A carne deve ter 2cm de espessura. Dupla empanadura dá extra crocância.",
  },
  "gyudon": {
    glass: "Tigela grande de cerâmica (donburi)",
    serve: "O arroz deve estar quente e a carne deve cobrir toda a superfície.",
    tip: "Fatie a carne o mais fino possível — congelar parcialmente facilita o corte. Gengibre em conserva é essencial.",
  },
  "katsudon": {
    glass: "Tigela donburi com tampa",
    serve: "O ovo deve estar semicozido (toro-toro) — nem cru nem totalmente cozido.",
    tip: "Deslize o tonkatsu com ovo da panela para o arroz em um movimento suave. O molho é mais suave que o de gyudon.",
  },
  "oyakodon": {
    glass: "Tigela donburi",
    serve: "O ovo deve ficar cremoso e parcialmente líquido. Adicione mitsuba fresca no final.",
    tip: "Adicione os ovos em duas etapas: 2/3 primeiro, depois o restante 30 seg antes de servir. Isso cria texturas diferentes.",
  },
  "sukiyaki": {
    glass: "Panela de ferro (sukiyaki-nabe) com fogareiro",
    serve: "Cada pessoa pega ingredientes e mergulha em ovo cru batido.",
    tip: "Use carne bem marmorizada. Não cozinhe todos os ingredientes juntos — adicione aos poucos.",
  },
  "shabu-shabu": {
    glass: "Panela de ferro ou cerâmica com fogareiro",
    serve: "Disponha todos os ingredientes em pratos bonitos. A apresentação faz parte da experiência.",
    tip: "A carne deve ser fatiada finíssima (2mm). Passe no caldo por apenas 2-3 segundos — 'shabu shabu'.",
  },
  "teppanyaki": {
    glass: "Chapa quente (teppan)",
    serve: "A comida vai direto da chapa ao prato do cliente. Performance é parte da experiência.",
    tip: "A chapa deve estar muito quente para selar rapidamente. Use manteiga com alho para aromaticar.",
  },
  "takoyaki": {
    glass: "Bandeja de madeira (fune) ou prato de papel",
    serve: "Sirva quente, recém-saído da forma. Cuidado: o interior é muito mais quente!",
    tip: "A técnica de virar exige prática. Use palitos de bambu e gire constantemente.",
  },
  "okonomiyaki": {
    glass: "Chapa quente (teppan) ou prato grande",
    serve: "Estilo Osaka: sirva na chapa. Coma com espátula (hera). Desenhe padrões com maionese.",
    tip: "Repolho finamente picado para massa leve. Nagaimo ralado adiciona extra leveza.",
  },
  "onigiri": {
    glass: "Bandeja de bambu ou embalagem konbini style",
    serve: "Perfeito como lanche, bentô ou café da manhã. Embrulhe em filme plástico para levar.",
    tip: "O arroz deve estar quente ao moldar. Sal nas mãos é essencial. Nori na hora de comer para manter crocância.",
  },
  "taiyaki": {
    glass: "Papel kraft ou saquinho de papel",
    serve: "Coma quente, direto da forma. Contraste da massa crocante com o anko quente.",
    tip: "A massa não deve ser muito espessa — a cauda deve ser fininha e crocante.",
  },
  "dango": {
    glass: "Prato de cerâmica ou papel de festival",
    serve: "Sirva em espetos de 3 unidades. Pode ser grelhado ou servido em temperatura ambiente.",
    tip: "Usar tofu na massa deixa o dango mais macio e durável. Sem tofu, endurece rápido.",
  },
  "yakiimo": {
    glass: "Papel alumínio ou papel kraft",
    serve: "Sirva quente, quebrando a batata ao meio para liberar o vapor aromático.",
    tip: "A batata-doce japonesa (satsuma-imo) é mais seca e doce que a brasileira. Assar lentamente carameliza os açúcares naturais.",
  },
  "gyoza": {
    glass: "Prato oval de cerâmica",
    serve: "Sirva com o lado dourado para cima. O contraste crocante/macio é a assinatura.",
    tip: "Frite → adicione água → tampe. A crosta dourada (hane) deve ser fina como renda.",
  },
  "edamame": {
    glass: "Tigela de cerâmica pequena",
    serve: "Sirva como aperitivo com cerveja japonesa gelada.",
    tip: "Não cozinhe demais — deve manter cor verde vibrante e leve crocância.",
  },
  "sunomono": {
    glass: "Tigelinha de cerâmica (kobachi)",
    serve: "Sirva bem gelado como palate cleanser entre pratos.",
    tip: "Salgue o pepino e deixe descansar 10 min para remover excesso de água.",
  },
  "missoshiro-entrada": {
    glass: "Tigela pequena de cerâmica",
    serve: "Sirva antes do prato principal para abrir o apetite.",
    tip: "Use missô branco para uma versão mais suave e delicada que a missoshiru completa.",
  },
  "harumaki": {
    glass: "Prato com folha decorativa",
    serve: "Sirva quente com molho de shoyu e vinagre para dipping.",
    tip: "Enrole bem apertado para não estourar na fritura. O recheio deve estar frio antes de enrolar.",
  },
  "agedashi-tofu": {
    glass: "Tigela funda de cerâmica",
    serve: "Sirva imediatamente — o tofu perde a crocância rapidamente no caldo.",
    tip: "Seque muito bem o tofu antes de empanar. Tofu úmido = amido que não gruda.",
  },
  "missoshiru": {
    glass: "Tigela de laca com tampa (wan)",
    serve: "Beba diretamente da tigela — sem colher. Segure com as duas mãos.",
    tip: "NUNCA ferva o missô — a fervura mata as bactérias probióticas. Use combinação de missô branco e vermelho.",
  },
  "tonjiru": {
    glass: "Tigela grande de laca ou cerâmica",
    serve: "Perfeito no inverno. Sirva fumegante com arroz e tsukemono.",
    tip: "O gobo (bardana) é essencial para o sabor terroso. Corte em sasagaki e deixe em água com vinagre.",
  },
  "ramen-tradicional-sopa": {
    glass: "Tigela grande e profunda de cerâmica",
    serve: "Coma rápido — o macarrão absorve o caldo e perde textura. O ramen não espera ninguém.",
    tip: "O segredo está no tare (base concentrada). Cada ramen-ya tem seu tare secreto guardado a sete chaves.",
  },
  "lamen-artesanal": {
    glass: "Tigela grande de cerâmica artesanal",
    serve: "Macarrão fresco deve ser cozido por apenas 60-90 segundos. Al dente é essencial.",
    tip: "A água alcalina (kansui) dá a textura elástica e a cor amarelada característica. Sem kansui, não é ramen de verdade.",
  },
  "ozoni": {
    glass: "Tigela de laca com tampa (wan)",
    serve: "Servido no dia 1º de janeiro. Cada família tem sua receita passada por gerações.",
    tip: "Grelhe o mochi antes de adicionar à sopa — isso evita que derreta e dá textura crocante por fora.",
  },
  "mochi": {
    glass: "Prato de cerâmica pastel com papel decorativo (washi)",
    serve: "Consuma no dia do preparo — mochi endurece rapidamente.",
    tip: "Cuidado: mochi é um dos alimentos que mais causa engasgos no Japão. Mastigue bem.",
  },
  "dorayaki": {
    glass: "Prato de cerâmica com chá verde ao lado",
    serve: "Sirva com chá verde quente. O contraste doce/amargo é perfeito.",
    tip: "A panqueca deve ser uniforme e dourada — use fogo baixo. Anko caseiro é infinitamente superior.",
  },
  "manju": {
    glass: "Prato de cerâmica com papel decorativo",
    serve: "Presente clássico quando se visita alguém. Sirva com chá verde.",
    tip: "O açúcar mascavo na massa dá cor escura e sabor profundo. O vapor deve ser forte para a massa crescer.",
  },
  "anmitsu": {
    glass: "Tigela de vidro transparente para mostrar as camadas",
    serve: "Sirva bem gelado no verão. A apresentação visual é metade do prazer.",
    tip: "Use kanten (ágar-ágar) e não gelatina — kanten firma em temperatura ambiente e é vegano.",
  },
  "matcha-cheesecake": {
    glass: "Prato de cerâmica branca com peneira de matcha",
    serve: "Sirva frio, polvilhado com matcha. O contraste verde/claro é lindo.",
    tip: "Use matcha culinário de boa qualidade. Peneire sempre. O banho-maria é obrigatório para textura jiggly.",
  },
  "matcha-parfait": {
    glass: "Copo alto de vidro transparente",
    serve: "Monte na hora de servir. Cada camada deve ser visível através do vidro.",
    tip: "Alterne texturas: crocante (cornflakes), cremoso (sorvete), macio (mochi), líquido (calda).",
  },
  "warabi-mochi": {
    glass: "Prato de cerâmica com kinako generoso",
    serve: "Sirva gelado com bastante kinako e kuromitsu ao lado para drizzle.",
    tip: "Mexa constantemente durante o cozimento para não grudar. Quando a massa ficar translúcida, está pronto.",
  },

  // ============ DONBURI & ARROZ ============
  "unadon": {
    glass: "Caixa lacada jubako ou tigela donburi",
    serve: "Sirva com tampa — ao abrir, o aroma do tare deve surpreender. Polvilhe sansho.",
    tip: "O tare deve ser pincelado 3-4 vezes durante a grelha. Cada camada carameliza sobre a anterior.",
  },
  "tendon": {
    glass: "Tigela donburi grande",
    serve: "O tentsuyu deve ser concentrado — pouco molho, muito sabor. Não encharque o arroz.",
    tip: "Mergulhe o tempurá rapidamente no tentsuyu antes de colocar no arroz — a crocância parcial é proposital.",
  },
  "chirashi": {
    glass: "Tigela rasa e larga de cerâmica ou madeira lacada",
    serve: "Distribua os peixes de forma bonita e colorida. É um prato visual.",
    tip: "Use arroz de sushi a 36°C (temperatura corporal). Varie cores: rosa (salmão), vermelho (atum), branco (lula), laranja (ikura).",
  },
  "omurice": {
    glass: "Prato oval de cerâmica branca",
    serve: "Corte o omelete no topo e deixe abrir sobre o arroz — o efeito visual é mágico.",
    tip: "O segredo é o omelete baveuse (cremoso por dentro). Use manteiga generosa e fogo alto por poucos segundos.",
  },
  "chahan": {
    glass: "Prato grande ou tigela",
    serve: "Sirva imediatamente — o chahan perde textura ao esfriar.",
    tip: "Use arroz do dia anterior (frio e seco). Fogo altíssimo e wok grande — cada grão deve ser individual.",
  },
  "ochazuke": {
    glass: "Tigela de cerâmica com tampa",
    serve: "Despeje o chá verde quente na frente do comensal para frescor máximo.",
    tip: "Use hojicha ou sencha de qualidade. O arroz pode ser do dia anterior — o chá reidrata tudo.",
  },
  "tamago-kake-gohan": {
    glass: "Tigela de cerâmica pequena",
    serve: "O arroz DEVE estar fervendo — é ele que 'cozinha' o ovo cru. Shoyu de qualidade é essencial.",
    tip: "Separe a gema, misture a clara no arroz primeiro, depois adicione a gema inteira por cima. Textura superior.",
  },
  "hayashi-rice": {
    glass: "Prato fundo largo com o arroz ao lado",
    serve: "Monte como curry: arroz de um lado, molho do outro. Não misture.",
    tip: "Caramelize as cebolas por 30+ minutos para dar corpo e doçura natural ao molho.",
  },
  "kare-raisu": {
    glass: "Prato fundo largo ou tigela rasa",
    serve: "Arroz de um lado, curry do outro. Fukujinzuke (conserva vermelha) é obrigatório.",
    tip: "Adicione chocolate amargo e café ao curry para profundidade. É o segredo das melhores casas de curry.",
  },

  // ============ ACOMPANHAMENTOS ============
  "tamagoyaki": {
    glass: "Tábua de madeira ou prato de cerâmica",
    serve: "Corte em fatias de 2cm e sirva em temperatura ambiente no bento ou como acompanhamento.",
    tip: "A frigideira retangular (tamagoyaki-ki) é essencial. Controle a temperatura — muito quente queima, muito fria não enrola.",
  },
  "tsukemono": {
    glass: "Pratinhos pequenos de cerâmica (kobachi)",
    serve: "Sirva em pequenas porções como acompanhamento. 3-4 tipos diferentes é o ideal.",
    tip: "O tempo de marinada muda tudo: 30 min = leve e crocante, 24h = intenso e macio.",
  },
  "kinpira-gobo": {
    glass: "Pratinho pequeno de cerâmica",
    serve: "Sirva em temperatura ambiente como acompanhamento de bento ou refeição.",
    tip: "Corte o gobō em sasagaki (raspas com a faca) para textura perfeita. Deixe em água com vinagre para não escurecer.",
  },
  "hijiki-nimono": {
    glass: "Pratinho pequeno de cerâmica (kobachi)",
    serve: "Sirva em temperatura ambiente. Melhora com o tempo — prepare na véspera.",
    tip: "Hidrate o hijiki em água morna, não quente. O sabor se intensifica quando descansa overnight.",
  },
  "nasu-dengaku": {
    glass: "Prato de cerâmica rústica",
    serve: "Sirva quente, direto do forno ou grelha. A pasta de missô deve estar brilhante.",
    tip: "Faça cortes em grade profundos na polpa — permite que o óleo penetre e cozinhe uniformemente.",
  },
  "nikujaga": {
    glass: "Tigela funda de cerâmica",
    serve: "Sirva morno — não fervendo. Os sabores se integram melhor em temperatura moderada.",
    tip: "Não mexa demais — as batatas devem manter a forma. O segredo é o otoshibuta (tampa flutuante).",
  },
  "chawanmushi": {
    glass: "Xícara de cerâmica com tampa (chawan)",
    serve: "Sirva quente no inverno, gelado no verão (chilled chawanmushi). A tampa preserva o calor.",
    tip: "Coe a mistura de ovo para remover bolhas. Vapor em fogo BAIXO — bolhas no custard = textura ruim.",
  },
  "korokke": {
    glass: "Prato com papel absorvente e repolho fatiado",
    serve: "Sirva quente com molho tonkatsu e repolho fatiado fino — como o tonkatsu.",
    tip: "O purê deve estar seco. Purê úmido = korokke que estoura na fritura. Resfrie bem antes de empanar.",
  },
  "natto": {
    glass: "Tigela pequena com compartimento para condimentos",
    serve: "Misture vigorosamente com hashi até ficar bem pegajoso — quanto mais mexer, mais saboroso.",
    tip: "Adicione um ovo cru e cebolinha para suavizar o sabor. Iniciantes: comece com natto hikiwari (triturado).",
  },
  "hiyayakko": {
    glass: "Prato raso com gelo decorativo",
    serve: "Sirva gelado no verão. O tofu deve estar direto da geladeira.",
    tip: "Use tofu sedoso de qualidade premium — neste prato simples, a qualidade do tofu faz toda a diferença.",
  },
  "ohitashi": {
    glass: "Pratinho pequeno de cerâmica (kobachi)",
    serve: "Sirva frio ou em temperatura ambiente. Monte em formato cilíndrico para elegância.",
    tip: "Cozinhe o espinafre por NO MÁXIMO 30 segundos. Choque térmico imediato em água gelada preserva a cor.",
  },
  "nimono-kabocha": {
    glass: "Tigela pequena de cerâmica (kobachi)",
    serve: "Sirva morno com um pouco do caldo. A casca verde contrasta com a polpa alaranjada.",
    tip: "Chanfre os cantos da kabocha (mentori) para evitar que desmontem. Cozinhe com casca para baixo.",
  },

  // ============ IZAKAYA & PETISCOS ============
  "kushikatsu": {
    glass: "Grade de metal ou prato com papel absorvente",
    serve: "Mergulhe no molho UMA VEZ — regra sagrada de Osaka. Nunca double dip!",
    tip: "Use panko extrafino para crocância delicada. A fritura rápida a 180°C mantém o interior suculento.",
  },
  "motsu-nikomi": {
    glass: "Panela de barro (donabe) individual",
    serve: "Sirva fervendo com shichimi togarashi e cerveja gelada. Prato de inverno perfeito.",
    tip: "Lave o motsu 3 vezes em água fervente para remover odor. A paciência no pré-preparo define o resultado.",
  },
  "tebasaki": {
    glass: "Prato ou bandeja com papel absorvente",
    serve: "Sirva quente com cerveja gelada. Coma com as mãos — é izakaya!",
    tip: "Dupla fritura é o segredo de Nagoya: 170°C primeiro, depois 180°C para crocância extra.",
  },
  "tataki-maguro": {
    glass: "Prato de cerâmica alongado",
    serve: "Fatie fino e arrume em leque. O centro DEVE estar cru — é tataki, não bife.",
    tip: "Sele por máximo 15 segundos cada lado em frigideira fumegante. Choque em gelo imediatamente.",
  },
  "mentaiko": {
    glass: "Pratinho de cerâmica sobre folha de shiso",
    serve: "Sirva cru sobre arroz quente ou levemente grelhado. O calor do arroz aquece as ovas.",
    tip: "Marine por 48h para sabor ideal. A pimenta deve ser equilibrada — picante mas sem mascarar o sabor do mar.",
  },
  "yaki-onigiri": {
    glass: "Prato de cerâmica rústica ou bandeja de madeira",
    serve: "Sirva quente da grelha. A crosta de shoyu caramelizado deve estar crocante.",
    tip: "Compacte bem o onigiri antes de grelhar. NÃO mexa — deixe a crosta formar por 3-4 minutos sem tocar.",
  },
  "dashimaki-tamago": {
    glass: "Prato de cerâmica com daikon ralado ao lado",
    serve: "Sirva quente com daikon oroshi (daikon ralado) e shoyu. O interior deve ser úmido.",
    tip: "Use proporção generosa de dashi (quase 1:1 com ovo). A técnica exige prática — enrole devagar.",
  },

  // ============ MOLHOS & TEMPEROS ============
  "ponzu": {
    glass: "Frasco de vidro ou potinho de cerâmica",
    serve: "Use como molho de mergulho para shabu-shabu, tataki ou sashimi. Nunca cozinhe o ponzu.",
    tip: "Infusione por 24h mínimo. Use yuzu verdadeiro se possível — limão funciona mas o sabor é diferente.",
  },
  "molho-teriyaki": {
    glass: "Frasco ou panela pequena para pincelar",
    serve: "Pincele sobre o alimento nos últimos minutos de cozimento. O brilho (teri) é a assinatura.",
    tip: "Reduza em fogo baixo até a consistência de xarope. Se engrossar demais, adicione um pouco de água.",
  },
  "tare-yakitori": {
    glass: "Potinho fundo para mergulhar os espetos",
    serve: "Mergulhe ou pincele nos espetos durante a grelha. Nos melhores lugares, o tare envelhece por anos.",
    tip: "Adicione ossos de frango grelhados ao tare para mais umami. A cada uso, o tare fica mais complexo.",
  },
  "molho-tonkatsu": {
    glass: "Potinho de cerâmica para servir ao lado",
    serve: "Regue sobre o tonkatsu cortado ou sirva ao lado para mergulhar.",
    tip: "Ajuste a proporção ketchup/molho inglês ao seu gosto. Mais molho inglês = mais picante.",
  },
  "gomadare": {
    glass: "Potinho individual de cerâmica",
    serve: "Sirva ao lado do shabu-shabu, cold udon ou salada. Consistência deve ser cremosa.",
    tip: "Torre o gergelim fresco antes de moer para máximo aroma. Nerigoma comprado é bom, caseiro é incrível.",
  },
  "wafu-dressing": {
    glass: "Jarra pequena para regar saladas",
    serve: "Regue sobre saladas de folhas verdes, tofu ou legumes grelhados.",
    tip: "A cebola ralada crua dá pungência — se preferir mais suave, marine a cebola em vinagre por 10 min.",
  },
  "nikiri-shoyu": {
    glass: "Potinho com pincel (hake) para sushi",
    serve: "Pincele sobre o nigiri — o cliente NÃO deve precisar mergulhar no shoyu.",
    tip: "Aqueça sem ferver para evaporar o álcool do mirin. Este detalhe separa o sushi comum do omakase.",
  },
  "molho-gyoza": {
    glass: "Pratinho individual para cada comensal",
    serve: "Misture na hora — cada pessoa ajusta a proporção de rayu ao gosto.",
    tip: "A proporção clássica é 3:1:pingo (shoyu:vinagre:rayu). Alho cru picado é opcional mas delicioso.",
  },
  "yuzu-kosho": {
    glass: "Potinho minúsculo — use com moderação",
    serve: "Uma pontinha de hashi é suficiente. Use com yakitori, sashimi, nabe ou grelhados.",
    tip: "Maturar por 1 semana mínimo. A fermentação natural suaviza a picância e integra os sabores.",
  },
  "furikake": {
    glass: "Potinho com tampa perfurada para polvilhar",
    serve: "Polvilhe sobre arroz quente, onigiri ou como topping de saladas.",
    tip: "Torre o nori e o gergelim frescos para máximo aroma. Armazene hermeticamente — absorve umidade rápido.",
  },
  "rayu": {
    glass: "Frasco de vidro com conta-gotas ou colher",
    serve: "Pingue sobre ramen, gyoza, mapo tofu ou qualquer prato que precise de calor.",
    tip: "A temperatura do óleo ao despejar sobre a pimenta é crucial: 150°C extrai sabor sem queimar.",
  },
  "shichimi-togarashi": {
    glass: "Potinho de madeira ou cerâmica com tampa",
    serve: "Polvilhe sobre udon, soba, yakitori e ramen. Uma pitada basta.",
    tip: "Faça sua própria mistura ajustando o nível de sansho (pimenta japonesa). O frescor do sansho é único.",
  },

  // ============ BATCH 2 - PRATOS TRADICIONAIS ============
  "oshi-sushi": { glass: "Prato retangular de cerâmica ou bandeja de madeira", serve: "Corte em pedaços uniformes para mostrar as camadas. Sirva com gari e shoyu.", tip: "Pressione firme e uniforme — o oshi sushi deve ficar compacto. O molde de madeira deve ser molhado antes de usar." },
  "unagi-nigiri": { glass: "Prato de cerâmica com folha de bambu", serve: "Sirva quente com tare recém-pincelado. O aroma deve ser irresistível.", tip: "Aqueça a unagi antes de montar. O tare deve ser pincelado em camadas — cada uma carameliza sobre a anterior." },
  "ikura-gunkan": { glass: "Prato de cerâmica rústica", serve: "Sirva imediatamente — o nori amolece rápido. As ovas devem brilhar.", tip: "Marine as ovas em shoyu e sake por 30 min para sabor extra. O nori deve ser de qualidade premium." },
  "aburi-sushi": { glass: "Prato de cerâmica branca para destacar o maçaricado", serve: "Sirva segundos após maçaricar. O contraste cru/grelhado é efêmero.", tip: "Mantenha o maçarico a 10cm de distância. Maionese Kewpie carameliza melhor que a comum." },
  "battera-sushi": { glass: "Tábua de madeira ou prato de cerâmica", serve: "Corte em fatias iguais mostrando o padrão prateado da pele.", tip: "A cura em sal deve ser exata: muito sal = seco, pouco = inseguro. O vinagre depois equilibra." },

  // ============ BATCH 2 - MASSAS ============
  "tsukemen": { glass: "Prato grande para macarrão + tigela para caldo", serve: "Macarrão frio em prato, caldo quente em tigela separada. Mergulhe e saboreie.", tip: "O caldo deve ser 2x mais concentrado que ramen normal — vai ser diluído pelo macarrão molhado." },
  "tantanmen": { glass: "Tigela grande e profunda de cerâmica", serve: "O rayu deve ser adicionado por último, criando um anel vermelho na superfície.", tip: "A pasta de gergelim japonesa é diferente do tahini — é mais torrada e intensa. Substitua com cuidado." },
  "hiyashi-chuka": { glass: "Prato raso grande para mostrar os toppings em leque", serve: "Os toppings devem ser dispostos em seções coloridas como um arco-íris.", tip: "O molho deve estar gelado. A karashi (mostarda) é crucial — dá o toque japonês que diferencia do original chinês." },
  "nabeyaki-udon": { glass: "Donabe individual de barro — sirva direto da panela", serve: "Deve chegar à mesa borbulhando. O ovo deve estar semicozido.", tip: "O donabe retém calor por muito tempo — cuidado para não queimar a boca. O tempurá entra por último." },
  "mazesoba": { glass: "Tigela grande de cerâmica", serve: "MISTURE vigorosamente antes de comer — é obrigatório. A gema deve estourar e envolver tudo.", tip: "O óleo de peixe (gyoyu) é o segredo do sabor. Sem ele, adicione um pouco de molho de ostra." },

  // ============ BATCH 2 - PRATOS QUENTES ============
  "nabe-yose": { glass: "Donabe (panela de barro) grande na mesa com fogareiro", serve: "Todos se servem da panela. É um prato social e comunitário.", tip: "Adicione ingredientes em ordem de tempo de cozimento. Não cozinhe tudo de uma vez." },
  "oden": { glass: "Panela funda de barro ou cerâmica", serve: "Sirva com karashi ao lado. O daikon deve estar translúcido — sinal de que absorveu o caldo.", tip: "O segredo é o tempo: 2h mínimo em fogo baixo. O daikon pré-cozido em água evita amargor." },
  "chanko-nabe": { glass: "Donabe grande para compartilhar", serve: "Sirva na mesa com fogareiro. Finalize com udon no caldo restante.", tip: "Use APENAS frango — tradição sumo. Boi e porco andam de quatro (derrota). Frango anda sobre duas pernas (vitória)." },
  "nikomi-udon": { glass: "Donabe individual servido borbulhando", serve: "Coma direto do donabe com cuidado — está muito quente.", tip: "Use miso hatcho de Nagoya (escuro e forte). Miso branco não dá o mesmo resultado." },
  "kimchi-nabe": { glass: "Donabe ou panela de ferro na mesa", serve: "O kimchi maduro (3+ semanas) dá muito mais sabor que kimchi fresco.", tip: "Refogue o kimchi ANTES de adicionar o caldo — isso carameliza e aprofunda o sabor." },

  // ============ BATCH 2 - STREET FOOD ============
  "imagawayaki": { glass: "Papel kraft ou prato com guardanapo", serve: "Sirva quente — o contraste da massa crocante com o anko quente é essencial.", tip: "A forma especial deve estar bem quente e untada. Vire na metade do tempo para dourar uniformemente." },
  "korokke-pan": { glass: "Bandeja de papel como nas padarias japonesas", serve: "Monte na hora de servir para o korokke manter a crocância.", tip: "O repolho fatiado fino absorve o excesso de gordura e dá frescor. Não pule!" },
  "yakiimo-street": { glass: "Papel alumínio ou papel kraft rústico", serve: "Quebre ao meio na frente do cliente — o vapor aromático é parte da experiência.", tip: "Temperatura baixa por tempo longo (160°C/90min) é o segredo. Isso converte amido em açúcar naturalmente." },
  "ikayaki": { glass: "Espeto com bandeja de papel", serve: "Sirva no espeto direto da grelha. O molho caramelizado deve brilhar.", tip: "Cortes superficiais em diagonal evitam que a lula enrole. Não cozinhe demais — fica borrachuda." },
  "mentai-onigiri": { glass: "Bandeja de bambu ou embalagem estilo konbini", serve: "O nori deve envolver apenas a base — estilo konbini japonês.", tip: "Mãos úmidas com água salgada ao moldar. O mentaiko deve ficar no centro como surpresa." },

  // ============ BATCH 2 - ENTRADAS ============
  "nasu-agebitashi": { glass: "Tigela de cerâmica com o caldo", serve: "Pode ser servido quente ou frio — ambos são deliciosos.", tip: "Os cortes em cruz na polpa permitem absorção máxima do caldo. Frite rapidamente para não absorver óleo demais." },
  "goma-ae": { glass: "Pratinho de cerâmica (kobachi)", serve: "Monte em formato cilíndrico apertando com as mãos. Elegante e tradicional.", tip: "Triture o gergelim no suribachi (pilão), não no processador — a textura é diferente e superior." },
  "shiraae": { glass: "Pratinho de cerâmica pastel", serve: "Sirva frio como entrada elegante. A cor branca do tofu deve predominar.", tip: "Drene o tofu MUITO bem — tofu aguado arruina a textura. Prense por 30min sob peso." },
  "renkon-chips": { glass: "Prato ou cesta com papel absorvente", serve: "Sirva imediatamente — perdem crocância rápido. O formato de flor do renkon é decorativo.", tip: "Fatias de 2mm máximo. Seque completamente antes de fritar — água + óleo = respingos." },
  "chawanmushi-trufa": { glass: "Xícara de cerâmica com tampa (chawan)", serve: "Sirva quente com colher. A textura deve ser sedosa como pudim.", tip: "Proporção ideal: 1 ovo para 150ml de dashi. Coe sempre. Vapor em fogo BAIXO para evitar bolhas." },

  // ============ BATCH 2 - SOPAS ============
  "kenchinjiru": { glass: "Tigela grande de cerâmica rústica", serve: "Sirva fumegante com cebolinha fresca. Prato vegano perfeito.", tip: "Refogue os vegetais em óleo de gergelim antes de adicionar o caldo — isso dá profundidade." },
  "butajiru": { glass: "Tigela grande de cerâmica", serve: "Sirva com arroz e tsukemono para uma refeição completa.", tip: "Use barriga de porco fina — a gordura derrete no caldo dando corpo. Dissolva miso fora do fogo." },
  "suimono": { glass: "Tigela laqueada com tampa (wan) — a mais elegante", serve: "Ao abrir a tampa, o aroma do yuzu deve surpreender.", tip: "O caldo DEVE ser cristalino. Se ficar turvo, o dashi foi mal preparado. Qualidade máxima dos ingredientes." },
  "dango-jiru": { glass: "Tigela grande de cerâmica rústica", serve: "Comfort food total. Sirva bem quente em dias frios.", tip: "Os bolinhos devem ser irregulares (rústico) — não se preocupe com formato perfeito. Isso é charme." },
  "zoni-kanto": { glass: "Tigela laqueada com tampa (wan)", serve: "Prato do Ano Novo — cada região tem sua versão. Kanto usa caldo claro.", tip: "Grelhe o mochi antes de colocar na sopa. Sem grelhar, derrete e vira goma." },

  // ============ BATCH 2 - SOBREMESAS ============
  "matcha-tiramisu": { glass: "Prato de cerâmica ou copo de vidro transparente para ver camadas", serve: "Polvilhe matcha e cacau no último momento. A peneira fina é essencial.", tip: "Use matcha culinário de qualidade (não cerimonial — é desperdício). O mascarpone deve estar em temperatura ambiente." },
  "castella": { glass: "Tábua de madeira — corte fatias grossas", serve: "Envolva em filme 12h antes de cortar. A textura melhora com descanso.", tip: "Bata os ovos por 10 MINUTOS completos. A aeração é o que dá a textura úmida e densa." },
  "purin": { glass: "Prato de cerâmica — desenforme invertendo", serve: "O caramelo deve escorrer pelos lados. Sirva gelado.", tip: "Banho-maria é obrigatório. Sem ele, o pudim fica com bolhas. Forno a 150°C, 40min." },
  "ichigo-daifuku": { glass: "Prato de cerâmica com papel decorativo", serve: "Consuma no dia — o morango solta água e amolece o mochi.", tip: "O morango deve estar seco. Mochi no micro-ondas funciona bem — 2min coberto." },
  "coffee-jelly": { glass: "Taça de vidro transparente para mostrar os cubos", serve: "Os cubos de café devem tremer. Chantilly leve por cima.", tip: "Use café forte (espresso). Café fraco = gelatina sem graça. Corte em cubos irregulares." },

  // ============ BATCH 2 - DONBURI ============
  "tekkadon": { glass: "Tigela donburi de cerâmica", serve: "As fatias de atum devem cobrir todo o arroz. Vermelho vibrante é essencial.", tip: "Marine brevemente (5min) em shoyu com mirin — mais que isso cozinha o peixe." },
  "soboro-don": { glass: "Tigela donburi — monte as 3 cores em seções", serve: "As cores devem ser distintas: marrom (carne), amarelo (ovo), verde (edamame).", tip: "Mexa com 3-4 hashis simultaneamente para criar a textura de grãos finos (soboro)." },
  "chukadon": { glass: "Tigela donburi grande", serve: "O molho brilhante deve cobrir o arroz parcialmente.", tip: "Fogo ALTÍSSIMO no wok é essencial. O amido deve ser adicionado aos poucos para não empapar." },
  "hayashi-don": { glass: "Prato fundo com arroz ao lado do molho", serve: "Monte como curry: arroz de um lado, hayashi do outro.", tip: "Caramelize as cebolas por 30+ minutos — é o segredo do sabor profundo." },
  "kaisen-don": { glass: "Tigela de madeira lacada ou cerâmica premium", serve: "A apresentação visual é tudo — distribua os peixes por cor.", tip: "Use arroz de sushi (com vinagre), não arroz branco comum. A acidez equilibra a gordura do peixe." },

  // ============ BATCH 2 - ACOMPANHAMENTOS ============
  "karashi-renkon": { glass: "Prato de cerâmica — corte em rodelas mostrando o padrão", serve: "Cada rodela mostra os buracos preenchidos com miso-karashi.", tip: "Resfrie o renkon recheado antes de empanar — se estiver quente, a massa não gruda." },
  "kiriboshi-daikon": { glass: "Pratinho pequeno de cerâmica (kobachi)", serve: "Sirva em temperatura ambiente. Melhora com o tempo — faça no dia anterior.", tip: "Esprema bem a água do daikon hidratado. Água demais dilui o sabor do molho." },
  "takenoko-gohan": { glass: "Panela de arroz aberta na mesa ou tigela", serve: "O aroma ao abrir a tampa deve ser de primavera. Decore com kinome.", tip: "Takenoko fresco é infinitamente melhor que enlatado. Se usar fresco, cozinhe com farelo de arroz primeiro." },
  "natto-gohan": { glass: "Tigela pequena de cerâmica — estilo café da manhã", serve: "Misture 50 vezes com hashi para criar fios pegajosos — quanto mais, mais saboroso.", tip: "Adicione o tare DEPOIS de misturar. Ovo cru e cebolinha suavizam o sabor para iniciantes." },
  "takikomi-gohan": { glass: "Panela de arroz servida direto na mesa", serve: "Misture delicadamente ao abrir. O aroma dos cogumelos é incrível.", tip: "Use dashi no lugar da água e não mexa antes de cozinhar — os ingredientes devem ficar por cima do arroz." },

  // ============ BATCH 2 - IZAKAYA ============
  "age-dashi-dofu": { glass: "Tigela funda com caldo", serve: "Sirva imediatamente — a crocância dura segundos no caldo quente.", tip: "Seque o tofu completamente antes de empanar. Katakuriko (amido de batata) dá melhor crocância que farinha." },
  "negima-yakitori": { glass: "Tábua de madeira ou prato de cerâmica alongado", serve: "Sirva com tare OU sal — nunca misture os dois estilos no mesmo espeto.", tip: "O negi deve caramelizar e ficar doce. Gire os espetos constantemente para grelhar uniformemente." },
  "tsukune-yakitori": { glass: "Prato com gema de ovo em pratinho separado", serve: "Mergulhe na gema crua antes de cada mordida — é a tradição.", tip: "Adicione cartilagem moída (nankotsu) à mistura para textura. Use carne de coxa, nunca peito." },
  "nankotsu-karaage": { glass: "Cesta de papel com limão", serve: "Sirva com limão e sal. O estalido na boca é a diversão.", tip: "Dupla fritura (170°C depois 180°C) é obrigatória para crocância máxima." },
  "motsu-yaki": { glass: "Tábua de espetos com shichimi", serve: "Cada tipo de miúdo tem sabor e textura únicos — prove todos.", tip: "Lave os miúdos em farinha e água para remover odor. O frescor do produto é tudo." },

  // ============ BATCH 2 - MOLHOS ============
  "oroshi-ponzu": { glass: "Pratinho pequeno para acompanhar grelhados", serve: "O daikon ralado deve estar fresco — escurece com o tempo.", tip: "Esprema o excesso de água do daikon. Daikon aguado dilui o ponzu." },
  "neri-goma-dare": { glass: "Potinho de cerâmica ou vidro", serve: "Consistência deve ser cremosa como maionese. Ajuste com água morna.", tip: "Use neri goma (pasta pura de gergelim), não tahini. A torra japonesa é mais intensa." },
  "nanban-dare": { glass: "Frasco ou panela para banhar o frango", serve: "Mergulhe o frango frito AINDA QUENTE no molho para absorver.", tip: "O equilíbrio shoyu/vinagre/açúcar é 1:1:0.7. A picância da pimenta é sutil." },
  "yuzu-kosho-caseiro": { glass: "Potinho minúsculo — use com moderação", serve: "Uma ponta de hashi é suficiente. Vai em tudo: yakitori, sashimi, nabe.", tip: "Use APENAS a parte colorida da casca (sem o branco amargo). Fermente 1 semana mínimo." },
  "tsuyu-concentrado": { glass: "Garrafa de vidro na geladeira", serve: "Dilua 1:3 com água fria para soba, 1:2 quente para udon.", tip: "O kombu deve infundir em fogo baixo — ferver extrai amargor. Katsuobushi só entra no final." },

  // ============ BATCH 3 - PRATOS TRADICIONAIS ============
  "negitoro-maki": { glass: "Prato retangular de cerâmica", serve: "Corte com faca molhada para manter o formato. A gordura do toro é visível.", tip: "Raspe o toro com colher das partes próximas ao osso do atum — é onde está a melhor gordura." },
  "inari-sushi": { glass: "Bandeja de bambu ou prato colorido", serve: "Sirva em temperatura ambiente — perfeito para piqueniques e bentôs.", tip: "Cozinhe o aburaage em caldo doce até absorver completamente. Abra com cuidado para não rasgar." },
  "kanpyo-maki": { glass: "Prato de cerâmica tradicional", serve: "O kanpyo marrom contrasta com o arroz branco — visual clássico.", tip: "Hidrate o kanpyo esfregando com sal antes. O sabor doce-salgado do cozimento define este sushi." },
  "ebi-nigiri": { glass: "Prato de cerâmica japonesa (sara)", serve: "O camarão deve ficar reto e rosa vibrante sobre o arroz.", tip: "Espete com palito de bambu antes de cozinhar para manter reto. Abra em borboleta pela barriga." },
  "tobiuo-sushi": { glass: "Prato de cerâmica com decoração marítima", serve: "As ovas devem estar brilhantes e cheias. Sirva imediatamente após montar.", tip: "Tobiko natural é laranja. Verde = wasabi, preto = tinta de lula, vermelho = beterraba. Todos deliciosos." },
  "anago-sushi": { glass: "Prato de cerâmica elegante", serve: "Pincele nitsume (molho) na frente do cliente. O brilho é a assinatura.", tip: "Anago é mais delicado que unagi. O nitsume é redução do próprio caldo de cozimento do anago." },
  "futomaki-deluxe": { glass: "Tábua de madeira — mostre o corte transversal colorido", serve: "Cada fatia deve revelar todos os 7+ recheios em padrão colorido.", tip: "Disponha os recheios em linha reta. Pressão uniforme é crucial — firme mas sem esmagar." },
  "tai-sashimi": { glass: "Prato de cerâmica branca com fios de daikon", serve: "Fatias em leque (usuzukuri) mostram a translucidez do peixe.", tip: "Use faca yanagiba afiada. Cortes de 3mm em um único movimento. O tai é o peixe mais nobre do Japão." },
  "kohada-sushi": { glass: "Prato de cerâmica — o brilho prateado é a estrela", serve: "A pele prateada deve brilhar. É considerado o teste de habilidade do itamae.", tip: "A cura em sal + vinagre deve ser precisa: 30min sal, 30min vinagre. Remova a pele parcialmente para visual." },

  // ============ BATCH 3 - MASSAS ============
  "champon": { glass: "Tigela grande e profunda de cerâmica", serve: "Diferente do ramen, o macarrão cozinha NO caldo com os ingredientes.", tip: "O caldo com leite é característico de Nagasaki. Frite os ingredientes ANTES de adicionar o caldo." },
  "sara-udon": { glass: "Prato grande raso para mostrar o macarrão crocante", serve: "O molho espesso amolece o macarrão gradualmente — coma rápido para ter ambas as texturas.", tip: "Frite o macarrão fino até bem crocante. O contraste crocante/macio é a alma do prato." },
  "wanko-soba": { glass: "Tigelas pequenas empilháveis", serve: "A diversão é comer muitas tigelas. Tampa na tigela = parou de comer.", tip: "O recorde é 500+ tigelas! Cada porção é apenas um bocado. Os toppings variam entre tigelas." },
  "ankake-yakisoba": { glass: "Prato grande raso", serve: "Despeje o ankake sobre o macarrão na frente do cliente — o chiado é parte do show.", tip: "O macarrão deve estar muito crocante. O amido do molho deve ser espesso como mel." },
  "zaru-soba": { glass: "Esteira de bambu (zaru) com prato coletor", serve: "O soba deve estar bem frio. O mentsuyu gelado ao lado em copo.", tip: "Lave em água gelada esfregando para remover amido — isso dá a textura firme e lisa." },
  "curry-udon": { glass: "Tigela grande de cerâmica — use avental!", serve: "CUIDADO: curry udon espirra! Use avental. O sabor compensa a bagunça.", tip: "Diluia o curry em dashi para não ficar pesado. O udon grosso segura bem o molho." },
  "kitsune-soba": { glass: "Tigela de cerâmica com tampa", serve: "O aburaage doce deve flutuar sobre o caldo. Cada mordida é doce-salgado.", tip: "Cozinhe o aburaage em dashi doce até absorver completamente. A raposa (kitsune) adora!" },
  "tanuki-udon": { glass: "Tigela grande de cerâmica", serve: "O tenkasu deve ser adicionado na hora de servir para crocância.", tip: "Tenkasu caseiro (restos de tempura) é muito melhor que comprado. Frite gotículas de massa de tempura." },
  "tsukimi-soba": { glass: "Tigela de cerâmica escura — o ovo amarelo se destaca", serve: "Não mexa o ovo! Ele deve parecer a lua cheia no caldo.", tip: "Quebre o ovo delicadamente no centro. A gema intacta é essencial para o visual 'tsukimi' (lua)." },

  // ============ BATCH 3 - PRATOS QUENTES ============
  "torinabe": { glass: "Donabe (panela de barro) grande na mesa", serve: "Sirva com ponzu e momiji oroshi. Finalize com zosui no caldo.", tip: "Caldo de frango claro (não cremoso como mizutaki). Ponzu cítrico equilibra a gordura." },
  "motsunabe": { glass: "Donabe com fogareiro — sirva borbulhando", serve: "O nira (cebolinha chinesa) vai por cima em abundância. Muito alho.", tip: "Lave os miúdos 3x em água fervente. A limpeza define se o prato será delicioso ou intragável." },
  "mizutaki": { glass: "Donabe com caldo leitoso opaco", serve: "O caldo leitoso rico em colágeno é a estrela. Mergulhe em ponzu.", tip: "Cozinhe frango COM OSSO por 2h+ para o caldo ficar leitoso. Sem osso = caldo transparente (errado)." },
  "ishikari-nabe": { glass: "Donabe ou panela grande", serve: "A manteiga derretendo na superfície é o toque de Hokkaido.", tip: "Use salmão com pele e osso para mais sabor. O miso de Hokkaido é mais suave que o de Honshu." },
  "nikujaga-yoshoku": { glass: "Tigela funda de cerâmica caseira", serve: "Sirva morno, não fervendo. O otoshibuta é essencial.", tip: "As batatas devem manter a forma — não mexa demais. O equilíbrio doce-salgado define o nikujaga." },
  "buri-daikon": { glass: "Tigela de cerâmica com caldo brilhante", serve: "O daikon translúcido mostra que absorveu o sabor. O buri deve brilhar.", tip: "Cozinhe daikon em água de arroz antes — remove o amargor e deixa mais macio." },
  "kakuni": { glass: "Tigela funda com karashi ao lado", serve: "A carne deve desmanchar com o hashi. Se precisar de faca, não está pronto.", tip: "Fogo MUITO baixo por 2-3h. A primeira fervura remove a gordura; a segunda cozinha o sabor." },
  "chicken-nanban": { glass: "Prato grande com alface e tártaro generoso", serve: "O tártaro japonês é mais cremoso que o ocidental. Generosidade é obrigatória.", tip: "Mergulhe o frango QUENTE no molho nanban frio — o choque absorve mais sabor." },
  "niku-dofu": { glass: "Tigela funda de cerâmica — estilo caseiro", serve: "O tofu absorve o sabor da carne — é a melhor parte.", tip: "Use tofu firme (momen) que não desmancha. Corte em blocos grossos para absorver mais sabor." },

  // ============ BATCH 3 - STREET FOOD ============
  "karaage-kun": { glass: "Saquinho de papel estilo konbini", serve: "Sirva em porções de 5-6 peças com palito. Formato snack.", tip: "Use peito para a versão konbini (mais seco e firme). Dupla fritura sempre." },
  "nikuman": { glass: "Cestinha de bambu (seiro) com papel vegetal", serve: "Sirva fumegante direto do vapor. Abra e veja o recheio suculento.", tip: "A massa deve descansar 1h completa. O recheio deve ter gengibre e ostra sauce para umami." },
  "yakitori-kawa": { glass: "Prato de espetos ou tábua de madeira", serve: "Ultra crocante e brilhante de gordura caramelizada. Irresistível.", tip: "Dobre a pele em sanfona (acordeão) — isso cria camadas que ficam crocantes uniformemente." },
  "crepe-harajuku": { glass: "Papel decorado em formato cone", serve: "O visual é tudo! Cores vibrantes e fotogênico. Estilo Takeshita-dori.", tip: "A massa deve ser fininha como papel. Monte na hora — o sorvete derrete rápido." },
  "age-manju": { glass: "Papel kraft ou prato com açúcar de confeiteiro", serve: "Sirva quente — o contraste crocante/macio com anko quente é divino.", tip: "Frite em óleo a 170°C. Muito quente = escurece rápido. O açúcar de confeiteiro vai na hora." },
  "menchi-katsu": { glass: "Prato com repolho fatiado e molho tonkatsu", serve: "Corte ao meio na hora de servir — deve sair suculento por dentro.", tip: "A cebola refogada e FRIA misturada à carne evita que desmontem. Empane 2x para extra crocância." },
  "dango-mitarashi": { glass: "Prato de cerâmica ou papel de festival", serve: "O molho mitarashi deve estar brilhante e pegajoso. Grelhado levemente.", tip: "Grelhe os dango ANTES de aplicar o molho — as marcas de grelha são essenciais." },
  "baby-castella": { glass: "Saquinho de papel transparente", serve: "Sirva mornos em saquinho. O aroma de mel atrai clientes nos festivais.", tip: "A forma especial precisa estar bem quente e untada. Vire constantemente." },
  "kakigori": { glass: "Tigela grande ou copo especial de kakigori", serve: "O gelo deve ser fino como neve, não granulado. Monte em forma de montanha.", tip: "Use gelo puro (sem cloro). A lâmina da máquina deve estar bem afiada para textura fofa." },

  // ============ BATCH 3 - ENTRADAS ============
  "mozuku-su": { glass: "Tigelinha pequena de cerâmica ou vidro", serve: "Sirva bem gelado como entrada refrescante. O gengibre realça.", tip: "Lave o mozuku bem — pode ter areia. O sanbaizu (vinagre triplo) equilibra doce, ácido e salgado." },
  "nasu-nibitashi": { glass: "Pratinho de cerâmica com caldo", serve: "Melhor frio — prepare na véspera. O sabor melhora com o tempo.", tip: "Grelhe ou frite a berinjela antes de marinar — isso sela e cria mais sabor." },
  "takowasa": { glass: "Pratinho pequeno de cerâmica (kobachi)", serve: "Petisco de izakaya perfeito com cerveja ou sake gelado.", tip: "Use wasabi fresco se possível. O polvo deve ser cortado em cubos pequenos para absorver mais." },
  "tataki-kyuri": { glass: "Pratinho de cerâmica rústico", serve: "Os pedaços irregulares absorvem mais tempero que pepino fatiado.", tip: "Esmagar quebra as fibras — isso é o segredo. Salgue e esprema a água antes de temperar." },
  "shirasu-oroshi": { glass: "Pratinho de cerâmica branco", serve: "Simples e fresco — a qualidade do shirasu é tudo.", tip: "Esprema o excesso de água do daikon. Shirasu cru (nama) é melhor que seco (chirimenjako)." },
  "umeboshi-kyuri": { glass: "Pratinho pequeno de cerâmica", serve: "Pronto em 5 minutos — o acompanhamento mais rápido da cozinha japonesa.", tip: "Use umeboshi de boa qualidade (não os tingidos artificialmente). A acidez natural é essencial." },
  "nagaimo-toro": { glass: "Tigelinha pequena de cerâmica", serve: "A textura viscosa é proposital — misture tudo antes de comer.", tip: "Use luvas ao descascar — nagaimo causa coceira na pele. O ovo de codorna é obrigatório." },
  "yuba-sashimi": { glass: "Prato de cerâmica elegante como sashimi", serve: "A textura sedosa deve ser apreciada como sashimi — com wasabi e shoyu.", tip: "Yuba fresca é infinitamente melhor que seca. Especialidade de Kyoto e Nikko." },
  "maguro-yamakake": { glass: "Tigelinha de cerâmica", serve: "A textura viscosa do nagaimo com atum cru é surpreendente.", tip: "Corte o atum em cubos grandes (1.5cm). O nagaimo ralado na hora evita oxidação." },

  // ============ BATCH 3 - SOPAS ============
  "asari-misoshiru": { glass: "Tigela de laca com tampa", serve: "As vôngoles fazem seu próprio dashi — dispense katsuobushi.", tip: "Limpe as vôngoles em água salgada por 2h para expelir areia. NUNCA pule esta etapa." },
  "corn-potage": { glass: "Caneca ou tigela de cerâmica", serve: "Sirva quente com grãos de milho e salsinha. Popular em konbinis no inverno.", tip: "Coe para ficar cremoso. Use milho da espiga (não enlatado) para sabor superior." },
  "suiton": { glass: "Tigela grande de cerâmica rústica", serve: "Os bolinhos irregulares são charme — não tente fazer perfeitos.", tip: "A massa deve ser mole (mais água que o normal). Puxe pedaços com colher e jogue no caldo." },
  "noppei-jiru": { glass: "Tigela grande com colher", serve: "O amido natural do taro engrossa o caldo naturalmente.", tip: "Corte vegetais pequenos para cozimento uniforme. O gobo deve ficar em água com vinagre." },
  "zosui": { glass: "Tigela de cerâmica — estilo caseiro", serve: "Melhor com sobras de nabe — o caldo já tem todo o sabor.", tip: "Não cozinhe demais — o arroz deve manter textura. Ovo em fio no final." },
  "nameko-misoshiru": { glass: "Tigela de laca com tampa", serve: "Os nameko escorregadios são a textura única desta versão.", tip: "Não lave os nameko demais — o muco é proposital e dá a textura." },
  "kakitama-jiru": { glass: "Tigela laqueada elegante", serve: "Os flocos de ovo devem ser delicados como pétalas flutuando.", tip: "Engrosse o caldo levemente com amido ANTES de adicionar o ovo — isso faz os flocos ficarem bonitos." },
  "imoni": { glass: "Tigela grande rústica ou panela de ferro", serve: "Prato de festival de outono — cozinhado ao ar livre em panelas gigantes.", tip: "O taro deve ficar macio e cremoso. Use carne com gordura para sabor." },
  "sumashi-jiru": { glass: "Tigela laqueada com tampa (a mais formal)", serve: "A transparência do caldo demonstra habilidade. Cada ingrediente é decorativo.", tip: "O dashi deve ser perfeito — sem pressa. Kombu em água fria por 30min, depois katsuobushi por 30seg." },

  // ============ BATCH 3 - SOBREMESAS ============
  "shiratama-zenzai": { glass: "Tigela de cerâmica com colher", serve: "Sirva quente no inverno. Uma pitada de sal realça a doçura.", tip: "As bolinhas estão prontas quando flutuam. Resfrie em água gelada para firmar." },
  "yokan": { glass: "Prato de cerâmica com faca de bambu", serve: "Corte em fatias finas — é denso e doce. Sirva com chá verde amargo.", tip: "Mexa constantemente ao cozinhar com ágar-ágar para não grudar. Refrigere por 3h mínimo." },
  "kinako-mochi": { glass: "Prato de cerâmica com kinako generoso", serve: "Sirva imediatamente enquanto o mochi está macio.", tip: "Misture kinako com açúcar e uma pitada de sal. O sal realça o sabor torrado." },
  "kuzumochi": { glass: "Prato de cerâmica com kuromitsu ao lado", serve: "Sirva gelado no verão. A textura transparente e elástica é única.", tip: "Mexa sem parar durante o cozimento — grumos são inimigos. Quando ficar transparente, está pronto." },
  "mitsu-mame": { glass: "Taça de vidro transparente para ver cores", serve: "As cores devem ser vibrantes e variadas. Kuromitsu gelado por cima.", tip: "Use kanten (ágar-ágar), não gelatina — kanten firma em temperatura ambiente." },
  "sakura-mochi": { glass: "Prato de cerâmica rosa pastel", serve: "A folha de sakura É comestível — o sabor salgado complementa o doce.", tip: "Use domyojiko (arroz moído grosso) para textura autêntica. Corante natural de beterraba funciona." },
  "kurikinton": { glass: "Prato de cerâmica dourada — simboliza riqueza", serve: "Prato do Ano Novo. A cor dourada deve ser vibrante.", tip: "Use gardênia (kuchinashi) para a cor amarela intensa. Sem ela, use açafrão." },
  "zunda-mochi": { glass: "Prato de cerâmica verde claro", serve: "A pasta verde de edamame é surpreendente para quem não conhece.", tip: "Triture o edamame deixando levemente granulado — não faça purê liso." },
  "ohagi": { glass: "Prato de cerâmica com chá verde ao lado", serve: "Ofereça 3 versões: anko, kinako e gergelim preto.", tip: "Amasse o arroz apenas parcialmente — metade dos grãos inteiros dá textura. É isso que difere do mochi." },
  "nama-chocolate": { glass: "Caixinha elegante forrada com papel manteiga", serve: "Polvilhe cacau ou matcha antes de servir. Cada cubo deve ser perfeito.", tip: "Derreta em banho-maria (nunca micro-ondas). O creme não deve ferver. Refrigere 3h e corte com faca quente." },

  // ============ BATCH 3 - DONBURI ============
  "maguro-don": { glass: "Tigela donburi de cerâmica", serve: "Marine o atum apenas 5min em shoyu — mais que isso escurece demais.", tip: "A gema de ovo crua no centro é opcional mas transforma o prato. Misture ao comer." },
  "butadon": { glass: "Tigela donburi grande", serve: "A carne deve estar caramelizada e brilhante sobre o arroz.", tip: "Grelhe a barriga antes de cozinhar no molho — a reação de Maillard dá sabor." },
  "negitoro-don": { glass: "Tigela donburi de cerâmica", serve: "A gordura do toro deve ser visível. Gema crua no centro.", tip: "Raspe o toro com colher das partes descartadas do atum — é mais econômico e saboroso." },
  "stamina-don": { glass: "Tigela donburi — estilo masculino e robusto", serve: "Ovo frito com gema mole é obrigatório. Alho e nira dão energia.", tip: "Fogo altíssimo no wok. Gochujang dá o toque picante que vicia." },
  "sake-chazuke": { glass: "Tigela de cerâmica com tampa", serve: "Despeje o chá quente na frente do comensal — o aroma é terapêutico.", tip: "Use hojicha (chá torrado) para sabor mais profundo. Salmão grelhado desfiado é o clássico." },
  "ikura-don": { glass: "Tigela donburi — as ovas devem brilhar como joias", serve: "Ikura deve cobrir TODO o arroz — generosidade é regra.", tip: "Marine ikura em shoyu e sake por 30min. Ovas frescas são incomparáveis às congeladas." },
  "tenshindon": { glass: "Tigela donburi com molho brilhante", serve: "O molho engrossado com amido deve cobrir a omelete brilhantemente.", tip: "A omelete deve ser macia e fofa. Surimi de qualidade faz diferença." },
  "shogayaki-don": { glass: "Tigela donburi com repolho fresco", serve: "O repolho cru fatiado fino refresca a gordura do porco.", tip: "Gengibre fresco ralado na hora. Gengibre em pó não substitui — o frescor é essencial." },
  "una-tama-don": { glass: "Tigela donburi com tampa", serve: "O ovo semicozido deve envolver a unagi. Polvilhe sansho.", tip: "Aqueça a unagi antes de montar. O ovo deve ficar toro-toro (cremoso)." },

  // ============ BATCH 3 - ACOMPANHAMENTOS ============
  "hijiki-salada": { glass: "Pratinho de cerâmica (kobachi)", serve: "Sirva frio como acompanhamento diário. Melhora overnight.", tip: "Hidrate hijiki em água morna (não quente). Refogue em óleo de gergelim antes de cozinhar." },
  "hakusai-tsukemono": { glass: "Pratinho pequeno de cerâmica", serve: "Esprema o excesso de água antes de servir. Crocante e fresco.", tip: "O peso é essencial — pressione bem. Kombu dá umami e yuzu dá perfume." },
  "kabocha-korokke": { glass: "Prato com papel absorvente e molho tonkatsu", serve: "Corte ao meio para mostrar a cor alaranjada com queijo derretido.", tip: "A kabocha japonesa é mais seca que a brasileira. Seque bem o purê antes de moldar." },
  "buta-kakuni-tamago": { glass: "Prato de cerâmica — corte ao meio mostrando a gema", serve: "A gema deve estar mole e alaranjada. O exterior marrom do shoyu.", tip: "Cozinhe ovos EXATAMENTE 6min30seg para gema perfeita. Choque térmico em gelo imediato." },
  "daigaku-imo": { glass: "Prato de cerâmica com gergelim preto", serve: "A calda deve estar brilhante e pegajosa. Sirva morno.", tip: "Frite em temperatura mais baixa (160°C) para cozinhar por dentro antes de dourar." },
  "gobo-salada": { glass: "Pratinho de cerâmica estilo bentô", serve: "Salada fria com textura crocante — presença obrigatória em bentôs.", tip: "Raspe a casca do gobo (não descasque) — o sabor está na casca. Água com vinagre evita escurecimento." },
  "komatsuna-ohitashi": { glass: "Pratinho de cerâmica com katsuobushi", serve: "Monte em formato cilíndrico. Katsuobushi dançando no topo.", tip: "30 segundos de cozimento MAX. Choque térmico preserva cor verde vibrante." },
  "ume-kyuri": { glass: "Pratinho de cerâmica", serve: "Pronto em 5 minutos — o acompanhamento mais rápido do Japão.", tip: "Use umeboshi de qualidade — naturais, não tingidos. A acidez limpa o paladar." },
  "satsumaimo-gohan": { glass: "Panela de arroz ou tigela de cerâmica", serve: "O aroma de batata doce ao abrir a tampa é puro outono.", tip: "Corte em cubos grandes para não desmanchar. Gergelim preto é o toque final." },

  // ============ BATCH 3 - IZAKAYA ============
  "tori-kawa-gyoza": { glass: "Prato de cerâmica com vinagre de rayu", serve: "Ultra crocante e brilhante de colágeno. Diferente de tudo.", tip: "A pele de frango substitui a massa — mais crocante e saborosa. Colágeno puro." },
  "tataki-gobo": { glass: "Pratinho de cerâmica — estilo osechi", serve: "Presente no osechi ryori (comida de Ano Novo). Textura crocante.", tip: "Bata levemente para abrir as fibras — isso permite absorver mais molho de gergelim." },
  "shishamo": { glass: "Prato de cerâmica com limão", serve: "Coma inteiro — cabeça, espinhas e ovas. Tudo é comestível.", tip: "Sal simples e fogo médio. Não vire muitas vezes — a pele rasga. As ovas devem estar cremosas." },
  "potato-salada": { glass: "Prato de cerâmica ou tigela de vidro", serve: "Sirva fria como petisco de izakaya. Textura com pedaços é essencial.", tip: "Use maionese Kewpie — é mais rica e ácida que a comum. Amasse PARCIALMENTE (mantenha pedaços)." },
  "chikuwa-isobe": { glass: "Prato com papel absorvente", serve: "Crocante, rápido e barato — perfeito como petisco com cerveja.", tip: "A massa com aonori (alga verde) é a assinatura. Frite rápido a 170°C." },
  "nasu-miso": { glass: "Prato de cerâmica — sirva sobre arroz", serve: "A berinjela absorve o miso e fica incrivelmente saborosa.", tip: "Frite a berinjela antes de misturar com o miso — absorve menos óleo que cozinhar junto." },
  "toriwasa": { glass: "Prato de cerâmica elegante como sashimi", serve: "O interior DEVE estar rosa. Use frango de altíssima qualidade e frescor.", tip: "APENAS use frango sashimi-grade. Escalfe 30seg MAX e choque em gelo. Segurança alimentar é prioridade." },
  "eihire": { glass: "Prato com maionese em pratinho separado", serve: "Rasgue com as mãos e mergulhe na maionese. Mastigue lentamente.", tip: "Grelhe em fogo BAIXO — queima fácil. Quando inflar levemente, está pronto." },
  "hiyashi-tomato": { glass: "Prato de cerâmica branco — as cores se destacam", serve: "Sirva bem gelado. A simplicidade é a sofisticação.", tip: "Use tomate da estação no auge da maturação. Katsuobushi fresco faz toda a diferença." },

  // ============ BATCH 3 - MOLHOS ============
  "negi-shio-dare": { glass: "Potinho de vidro ou cerâmica", serve: "Use sobre qualquer proteína grelhada. Transforma tudo.", tip: "Deixe o negi com sal descansar 5 min antes de adicionar óleo — libera mais sabor." },
  "tosazu": { glass: "Frasco de vidro para armazenar", serve: "Use para sunomono e marinadas. Muito mais profundo que vinagre simples.", tip: "Infusione katsuobushi no dashi quente por 5min e coe. O umami é o diferencial." },
  "goma-shoyu": { glass: "Potinho para regar saladas e tofu", serve: "Ideal para hiyayakko e saladas de folhas verdes.", tip: "Triture o gergelim NA HORA — gergelim pré-moído perde 80% do aroma." },
  "umeboshi-dare": { glass: "Potinho pequeno de cerâmica", serve: "Use para peixes grelhados, saladas ou como molho de onigiri.", tip: "Umeboshi de qualidade é salgado e ácido naturalmente. Mel equilibra sem mascarar." },
  "shio-koji": { glass: "Frasco de vidro com tampa — fermente em temperatura ambiente", serve: "Marine carnes, peixes ou vegetais por 30min a 24h.", tip: "Mexa uma vez ao dia durante fermentação. Quando ficar cremoso e levemente doce, está pronto (7-10 dias)." },
  "mentsuyu-caseiro": { glass: "Garrafa de vidro na geladeira — dura semanas", serve: "Dilua conforme o uso: 1:3 frio (soba), 1:2 quente (udon).", tip: "Caseiro é infinitamente superior ao industrial. O katsuobushi deve ser fresco." },
  "dengaku-miso": { glass: "Potinho para pincelar durante a grelha", serve: "Pincele sobre berinjela, tofu ou konnyaku e grile até caramelizar.", tip: "A gema de ovo dá brilho e corpo. Cozinhe em fogo baixo mexendo sempre — queima fácil." },
  "karashi-su-miso": { glass: "Potinho para acompanhar wakame e lula", serve: "Use com frutos do mar, wakame ou vegetais escalfados.", tip: "Ajuste o karashi ao gosto — começa sutil, aumenta gradualmente. Miso branco é mais suave." },
  "amazu-shoga": { glass: "Potinho de cerâmica ou vidro", serve: "Acompanha sushi, serve como palate cleanser entre peças.", tip: "Use gengibre JOVEM (shin shoga) — é mais tenro e fica rosado naturalmente no vinagre. Gengibre velho é fibroso." },

  // ============ BATCH 4 - PRATOS TRADICIONAIS ============
  "temari-sushi": { glass: "Prato de cerâmica colorido ou bandeja de bambu", serve: "Sirva em conjunto colorido — a variedade visual é parte do encanto.", tip: "Use filme plástico para moldar — gire firme. Cada bolinha deve ter apenas 15g de arroz para ser delicada." },
  "saba-sushi": { glass: "Tábua de madeira ou prato retangular de cerâmica", serve: "Corte em fatias uniformes mostrando a pele prateada. O vinagre deve brilhar.", tip: "A cura em sal é a etapa mais crítica — 3h mínimo. O vinagre depois suaviza a intensidade." },
  "tekka-maki": { glass: "Prato retangular de cerâmica com gari", serve: "Corte com faca molhada em 6 peças iguais. O vermelho do atum deve ser vibrante.", tip: "Use atum sashimi-grade fresco. A tira deve ser contínua — sem emendas. Wasabi entre arroz e peixe." },
  "chirashi-kyoto": { glass: "Bandeja lacada ou tigela rasa grande", serve: "A decoração com kinshi tamago dourado é a assinatura de Kyoto.", tip: "Cada vegetal cozido separadamente em seu tempero ideal — nunca cozinhe tudo junto." },
  "bara-chirashi": { glass: "Tigela de cerâmica colorida", serve: "Os cubos devem ser do mesmo tamanho (1cm). A uniformidade é charme.", tip: "Corte tudo em cubos iguais — a consistência de tamanho faz a diferença visual e de textura." },
  "ika-somen": { glass: "Prato de cerâmica elegante com shiso", serve: "Monte como macarrão somen — enrolado com hashi. O visual engana.", tip: "A faca deve estar afiada como navalha. Cada corte em um movimento — se puxar, rasga." },
  "uzaku": { glass: "Tigelinha de cerâmica ou vidro", serve: "Sirva bem gelado — é entrada refrescante de verão.", tip: "Salgue e esprema o pepino antes. Unagi deve estar fria. O contraste de temperaturas com o vinagrete é o segredo." },
  "kabu-sushi": { glass: "Prato de cerâmica tradicional", serve: "Corte em pedaços mostrando as camadas. É arte comestível.", tip: "A fermentação com koji leva dias — paciência é a virtude deste prato. O sabor melhora a cada dia." },

  // ============ BATCH 4 - MASSAS ============
  "yaki-udon": { glass: "Prato grande ou tigela rasa", serve: "O katsuobushi dançando no vapor é parte do show. Sirva fumegante.", tip: "Fogo ALTÍSSIMO é essencial — o wok deve fumaçar. Não mexa demais, deixe o udon pegar cor." },
  "tori-nanban-udon": { glass: "Tigela grande de cerâmica", serve: "O frango grelhado deve ter marcas bonitas. O negi caramelizado é dourado.", tip: "Grelhe o negi até ficar marcado — a caramelização transforma o sabor de picante para doce." },
  "hoto": { glass: "Donabe de barro — sirva direto da panela", serve: "É prato rústico — não tente fazer elegante. A panela é a apresentação.", tip: "O macarrão cozinha CRU no caldo — isso engrossa naturalmente. A kabocha deve ficar macia mas não desmanchar." },
  "niku-soba": { glass: "Tigela grande de cerâmica quente", serve: "A carne doce por cima do soba em caldo claro. Contraste de sabores.", tip: "Refogue a carne com açúcar ANTES do shoyu — isso carameliza e dá brilho." },
  "shoyu-ramen": { glass: "Tigela grande e profunda de cerâmica", serve: "Monte os toppings artisticamente — chashu, ovo, nori em posições precisas.", tip: "O tare de shoyu é a alma. Cada restaurante guarda seu tare secreto por gerações." },
  "miso-nikomi": { glass: "Donabe individual de barro — sirva borbulhando", serve: "O ovo semicozido no centro é obrigatório. Coma direto do donabe.", tip: "Use miso hatcho (escuro, de Nagoya) para autenticidade. Miso branco não funciona neste prato." },

  // ============ BATCH 4 - PRATOS QUENTES ============
  "hamburg-steak": { glass: "Prato oval de cerâmica branca", serve: "O molho demi-glace deve escorrer pelos lados. Arroz ao lado.", tip: "Faça cavidade no centro da carne — cozinha uniformemente. Sove a massa até ficar pegajosa (5 min)." },
  "ebi-fry": { glass: "Prato com papel absorvente e repolho fatiado", serve: "Os camarões devem ficar retos e dourados. Crocância é tudo.", tip: "Faça cortes na barriga do camarão e estique — isso evita que enrolem na fritura." },
  "hire-katsu": { glass: "Prato retangular com compartimento para molho", serve: "Corte em fatias mostrando o interior rosado. Repolho fatiado obrigatório.", tip: "Amasse levemente com martelo para uniformizar a espessura. Dupla empanadura = extra crocância." },
  "kaki-fry": { glass: "Prato com papel absorvente, tártaro e limão", serve: "O interior deve ser cremoso. Se estiver borrachudo, cozinhou demais.", tip: "Seque as ostras COMPLETAMENTE antes de empanar — umidade = panko que não gruda." },
  "shogayaki": { glass: "Prato com arroz e repolho fresco fatiado", serve: "A carne caramelizada deve brilhar. Repolho cru equilibra a gordura.", tip: "Gengibre fresco ralado NA HORA. O frescor do gengibre é insubstituível — em pó não funciona." },
  "mabo-dofu": { glass: "Tigela funda de cerâmica", serve: "O sansho (pimenta japonesa) no final é o toque que diferencia da versão chinesa.", tip: "Escalfe o tofu antes de cozinhar — remove água e firma a textura para não desmanchar." },
  "subuta": { glass: "Prato grande com arroz ao lado", serve: "As cores devem ser vibrantes — vermelho, verde, amarelo do abacaxi.", tip: "Frite a carne em amido antes — isso cria a base para o molho aderir e ficar brilhante." },
  "chinjao-rosu": { glass: "Prato grande fumegante", serve: "Sirva IMEDIATAMENTE — os vegetais devem estar al dente, não moles.", tip: "Marine a carne com amido — isso sela os sucos. Wok em fogo MÁXIMO, mexa rápido." },

  // ============ BATCH 4 - STREET FOOD ============
  "curry-pan": { glass: "Papel kraft ou bandeja de padaria", serve: "Sirva quente — morda e sinta o curry derretido dentro. Cuidado com o calor!", tip: "O curry recheio deve ser ESPESSO. Curry líquido = explode na fritura. Resfrie bem antes de rechear." },
  "melon-pan": { glass: "Papel de padaria ou prato", serve: "O exterior cookie deve estar crocante, o interior macio e fofo.", tip: "A massa cookie FRIA sobre a massa pão MORNA. O contraste de temperatura cria a textura perfeita." },
  "anpan": { glass: "Prato de cerâmica com chá verde", serve: "O gergelim no topo é decorativo e dá aroma. Sirva morno com chá.", tip: "O anko não deve ser muito doce — o equilíbrio doce/salgado é o segredo de Kimuraya desde 1874." },
  "katsu-sando": { glass: "Papel encerado cortado em triângulo", serve: "O corte diagonal revela as camadas: pão, molho, repolho, katsu.", tip: "Use shokupan (pão japonês) — é mais macio e doce que o pão comum. Karashi no pão é essencial." },
  "onigirazu": { glass: "Filme plástico cortado ao meio", serve: "Corte ao meio mostrando as camadas coloridas. É bentô fotogênico.", tip: "Não sobrecarregue de recheio — fecha mal e desmonta. O nori precisa de 5min para aderir." },

  // ============ BATCH 4 - ENTRADAS ============
  "tofu-salad": { glass: "Tigela de cerâmica ou vidro", serve: "Regue o dressing na hora de servir para manter a crocância das folhas.", tip: "Use tofu sedoso — a textura contrasta com as folhas crocantes. Katsuobushi fresco faz diferença." },
  "nasu-hasami": { glass: "Prato de cerâmica com molho", serve: "Corte ao meio mostrando o recheio de carne. O contraste é bonito.", tip: "Não separe completamente as fatias — a berinjela em sanduíche segura melhor o recheio na fritura." },
  "agedashi-nasu": { glass: "Tigela funda com caldo quente", serve: "Sirva imediatamente — a crocância dura segundos no caldo.", tip: "Faça cortes em cruz na pele — permite cozimento uniforme e absorção do caldo." },
  "uzura-tamago": { glass: "Pratinho de cerâmica ou espeto de bambu", serve: "3 ovos por espeto — aperitivo de izakaya perfeito.", tip: "Cozinhe EXATAMENTE 2 minutos para gema mole. A marinada em tsuyu por 2-4h é ideal." },
  "age-dashi-renkon": { glass: "Tigela com molho quente de dashi", serve: "O exterior crocante e interior mochi-mochi surpreende.", tip: "Rale o renkon grosseiramente — não faça purê liso. Os pedaços dão textura interessante." },

  // ============ BATCH 4 - SOPAS ============
  "sanpei-jiru": { glass: "Tigela grande de cerâmica rústica", serve: "Sirva fumegante com negi fresco. Prato histórico dos Ainu.", tip: "Use salmão com pele e osso — extrai mais sabor. O caldo de kombu é a base, não dashi de peixe." },
  "arajiru": { glass: "Tigela grande de cerâmica", serve: "O gengibre fresco no final corta o cheiro de peixe e adiciona frescor.", tip: "Escalfe as partes do peixe antes — remove impurezas e garante caldo limpo. Zero desperdício." },
  "kayaku-gohan-jiru": { glass: "Tigela de cerâmica rústica — estilo templo", serve: "É shojin ryori — culinária monástica 100% vegetal. Respeite a tradição.", tip: "O óleo de gergelim refogando os vegetais é o que dá profundidade ao caldo vegano." },
  "kasujiru": { glass: "Tigela grande — sirva fumegante", serve: "Aquece o corpo inteiro — perfeito para noites de inverno.", tip: "Dissolva o sake kasu em caldo MORNO primeiro — se colocar direto, forma grumos impossíveis." },

  // ============ BATCH 4 - SOBREMESAS ============
  "monaka": { glass: "Prato de cerâmica com papel washi", serve: "Sirva imediatamente após montar — o wafer amolece rapidamente com a umidade do anko.", tip: "Use anko tsubuan (com pedaços) para contraste de textura com o wafer crocante." },
  "annindofu": { glass: "Taça de vidro transparente com frutas", serve: "A textura deve tremer como pudim. As frutas em calda dão cor.", tip: "Use essência de AMÊNDOA, não de baunilha. É o aroma que define o prato. Gelatina em vez de ágar para textura mais sedosa." },
  "uji-kintoki": { glass: "Tigela grande ou copo especial de kakigori", serve: "Monte em montanha. A calda de matcha GENEROSA é obrigatória.", tip: "Use gelo em bloco, não cubos — a textura raspada fica fofa como neve. Máquina de kakigori com lâmina afiada." },
  "mizu-yokan": { glass: "Prato de cerâmica fria ou vidro", serve: "Sirva gelado — é sobremesa de verão. A textura leve é o diferencial.", tip: "Mais água que o yokan normal — proporção 1.5x. A textura deve ser mais suave e refrescante." },
  "raindrop-cake": { glass: "Prato de cerâmica branca — a transparência se destaca", serve: "Deve parecer uma gota de água. Kinako e kuromitsu ao lado.", tip: "Use água mineral de qualidade — o sabor é sutil. Consuma em 30 minutos ou derrete." },

  // ============ BATCH 4 - DONBURI ============
  "tai-meshi": { glass: "Panela de barro aberta na mesa ou tigela nobre", serve: "O aroma ao abrir a tampa deve surpreender. Decore com mitsuba.", tip: "Grelhe o tai antes de cozinhar com o arroz — isso adiciona sabor defumado ao grão." },
  "maze-gohan": { glass: "Tigela de cerâmica ou panela de arroz", serve: "Misture delicadamente para não esmagar os ingredientes.", tip: "Cozinhe os ingredientes SEPARADOS e misture depois — isso preserva textura individual de cada um." },
  "taco-rice": { glass: "Prato raso grande", serve: "As camadas devem ser distintas: arroz, carne, vegetais, queijo.", tip: "Tempere a carne com cominho e chili — é a ponte entre México e Okinawa. Salsa picante é obrigatória." },
  "gomoku-gohan": { glass: "Panela de arroz na mesa ou tigela grande", serve: "O aroma ao abrir a tampa é inesquecível. NÃO mexa antes de cozinhar.", tip: "Coloque ingredientes POR CIMA do arroz sem misturar antes de cozinhar — senão não cozinha direito." },
  "natto-don": { glass: "Tigela donburi pequena", serve: "Misture o nattō 50x antes de colocar no arroz. A gema intacta no centro.", tip: "O arroz DEVE estar fervendo — é ele que aquece o nattō. Shoyu de qualidade faz toda a diferença." },

  // ============ BATCH 4 - ACOMPANHAMENTOS ============
  "horenso-gomaae": { glass: "Pratinho de cerâmica pequeno (kobachi)", serve: "Monte em formato cilíndrico — é o padrão de apresentação japonesa.", tip: "30 SEGUNDOS de cozimento MAX. Choque térmico imediato. Esprema toda a água antes de temperar." },
  "moyashi-namul": { glass: "Pratinho de cerâmica", serve: "Sirva frio. Perfeito como acompanhamento de yakiniku ou bibimbap.", tip: "NÃO cozinhe demais — 1 minuto MAX. Os brotos devem manter crocância." },
  "renkon-kinpira": { glass: "Pratinho pequeno de cerâmica", serve: "O formato de flor do renkon é decorativo e elegante.", tip: "Deixe em água com vinagre 5 min para não escurecer. Fogo alto para manter crocância." },
  "nasu-itame": { glass: "Prato de cerâmica — sirva sobre arroz", serve: "O miso brilhante cobrindo a berinjela é irresistível.", tip: "Frite a berinjela ANTES de adicionar miso — absorve menos óleo que cozinhar junto." },
  "wafu-pasta": { glass: "Prato fundo de cerâmica", serve: "Shiso e nori picados no topo. O aroma é japonês puro.", tip: "Misture mentaiko com manteiga FORA do fogo — calor demais cozinha as ovas e perde textura." },

  // ============ BATCH 4 - IZAKAYA ============
  "tofu-steak": { glass: "Prato de cerâmica com shoyu e alho", serve: "A crosta dourada de manteiga é a assinatura. Interior macio.", tip: "Prense o tofu 30min sob peso para remover água. Amido de milho na superfície = crosta perfeita." },
  "buta-bara-yaki": { glass: "Prato com limão e shichimi", serve: "A gordura caramelizada e crocante é o prazer. Sirva com cerveja.", tip: "Fogo ALTO sem mexer — deixe a gordura caramelizar de um lado antes de virar." },
  "ika-maruyaki": { glass: "Prato ou espeto com tare brilhante", serve: "Corte em anéis depois de grelhar. O aroma atrai de longe.", tip: "Cortes diagonais em cruz — evita que enrole e cozinha uniformemente. 2-3 min MAX de cada lado." },
  "negima-buta": { glass: "Prato de espetos ou tábua de madeira", serve: "O negi caramelizado dentro do porco é a surpresa na mordida.", tip: "Enrole o porco firme ao redor do negi — se ficar solto, desmonta na grelha." },
};

export function getChefTip(id: string): ChefTip | undefined {
  return chefTips[id];
}
