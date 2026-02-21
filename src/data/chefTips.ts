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
};

export function getChefTip(id: string): ChefTip | undefined {
  return chefTips[id];
}
