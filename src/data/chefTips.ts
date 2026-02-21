export interface ChefTip {
  glass: string;
  serve: string;
  tip: string;
}

export const chefTips: Record<string, ChefTip> = {
  "nigiri-salmao": {
    glass: "Prato de cerâmica japonesa (sara)",
    serve: "Sirva sobre uma tábua de madeira ou prato de cerâmica rústica. O nigiri deve ser consumido em até 30 segundos após montado.",
    tip: "O arroz deve estar na temperatura corporal — nunca frio da geladeira. Passe wasabi entre o peixe e o arroz, nunca dissolva no shoyu. Mergulhe pelo lado do peixe, não do arroz.",
  },
  "sashimi-misto": {
    glass: "Prato grande de cerâmica ou madeira com gelo",
    serve: "Organize as fatias do sabor mais suave ao mais intenso: peixe branco → salmão → atum.",
    tip: "O fio da faca faz toda a diferença — use uma faca yanagiba bem afiada. Cada corte deve ser em um único movimento, sem serrar. O sashimi deve descansar 10 min fora da geladeira antes de servir.",
  },
  "ramen-tonkotsu": {
    glass: "Tigela grande de cerâmica (donburi) de 800ml",
    serve: "Sirva imediatamente — o macarrão absorve o caldo rapidamente. O ramen não espera ninguém.",
    tip: "O segredo do caldo cremoso é ferver os ossos em fogo ALTO por 12+ horas. Fogo baixo dá um caldo claro. O ovo marinado (ajitama) deve ter a gema mole e cremosa — cozinhe exatamente 6 min e 30 seg.",
  },
  "tempura-mista": {
    glass: "Cesta de bambu forrada com papel absorvente (tenpura-ami)",
    serve: "Sirva imediatamente após fritar. Tempurá fria perde todo o encanto. A ordem de consumo: vegetais → camarão.",
    tip: "A água da massa DEVE ser gelada com gás. Não misture demais — grumos na massa são desejáveis! A temperatura do óleo deve ser 180°C. Teste com uma gota de massa: deve afundar e subir em 2 segundos.",
  },
  "gyoza": {
    glass: "Prato oval de cerâmica",
    serve: "Sirva os gyoza com o lado dourado para cima. O contraste entre a crosta crocante e o topo macio é a assinatura do prato.",
    tip: "O segredo do gyoza perfeito: frite → adicione água → tampe. Isso cria vapor que cozinha o topo. A crosta dourada (hane) deve ser fina e crocante como renda.",
  },
  "takoyaki": {
    glass: "Bandeja de madeira (fune) ou prato de papel",
    serve: "Sirva quente, recém-saído da forma. Cuidado: o interior é muito mais quente que o exterior!",
    tip: "A técnica de virar o takoyaki exige prática. Use palitos de bambu e gire constantemente. O exterior deve ser crocante e o interior cremoso. A forma especial é essencial.",
  },
  "missoshiru": {
    glass: "Tigela de laca com tampa (wan)",
    serve: "Beba diretamente da tigela — sem colher (tradição japonesa). Segure com as duas mãos.",
    tip: "NUNCA ferva o missô — a fervura mata as bactérias probióticas e arruina o sabor. Dissolva o missô fora do fogo. Use uma combinação de missô branco e vermelho para mais profundidade.",
  },
  "tonkatsu": {
    glass: "Prato retangular com compartimento para molho e arroz",
    serve: "Corte em tiras antes de servir. O repolho finamente fatiado é obrigatório — ajuda na digestão da fritura.",
    tip: "Use panko japonês (mais grosso e crocante que o ocidental). A carne deve ter 2cm de espessura para ficar suculenta. A dupla empanadura (farinha → ovo → panko → ovo → panko) dá extra crocância.",
  },
  "gyudon": {
    glass: "Tigela grande de cerâmica (donburi)",
    serve: "O arroz deve estar bem quente e a carne deve cobrir toda a superfície. O ovo cru por cima é opcional mas tradicional.",
    tip: "Fatie a carne o mais fino possível — congelar parcialmente facilita o corte. O equilíbrio do molho (shoyu + mirin + açúcar) é tudo. Gengibre em conserva (beni shoga) é o acompanhamento essencial.",
  },
  "karaage": {
    glass: "Cesta de papel ou prato com folha decorativa",
    serve: "Sirva imediatamente com fatias de limão. Perfeito como acompanhamento de cerveja (izakaya style).",
    tip: "O segredo da crocância duradoura: use amido de milho ou katakuriko (amido de batata) — não farinha de trigo. A dupla fritura (170°C → descanso → 180°C) é fundamental.",
  },
  "mochi": {
    glass: "Prato de cerâmica pastel com papel decorativo (washi)",
    serve: "Consuma no dia do preparo — mochi endurece rapidamente. Sirva em temperatura ambiente.",
    tip: "Cuidado: mochi é um dos alimentos que mais causa engasgos no Japão. Mastigue bem antes de engolir. O amido de milho evita que grude nas mãos e na superfície.",
  },
  "dorayaki": {
    glass: "Prato de cerâmica com chá verde ao lado",
    serve: "Sirva com chá verde quente (matcha ou sencha). O contraste entre o doce do anko e o amargo do chá é perfeito.",
    tip: "A panqueca deve ser uniforme e dourada — use fogo baixo e uma frigideira antiaderente. O anko caseiro é infinitamente superior ao industrializado.",
  },
  "yakisoba": {
    glass: "Prato grande ou bandeja de festival",
    serve: "Sirva bem quente com bastante katsuobushi por cima — os flocos dançam com o vapor!",
    tip: "O fogo ALTO é essencial para o wok hei (aroma de wok). Não mexa demais — deixe o macarrão criar crosta de contato com a chapa.",
  },
  "okonomiyaki": {
    glass: "Chapa quente (teppan) ou prato grande",
    serve: "Na versão de Osaka, sirva na chapa quente. Coma com espátula especial (hera). Desenhe padrões com maionese.",
    tip: "O repolho deve ser finamente picado para que a massa fique leve. Adicione nagaimo (inhame japonês) ralado para extra leveza. O estilo Hiroshima tem camadas separadas — é diferente do Osaka.",
  },
  "onigiri": {
    glass: "Bandeja de bambu ou embalagem de plástico (konbini style)",
    serve: "Perfeito como lanche, bentô ou café da manhã. Embrulhe em filme plástico para levar.",
    tip: "O arroz deve estar quente ao moldar — fica mais fácil de comprimir. Sal nas mãos é essencial. O nori deve ser adicionado na hora de comer para manter a crocância.",
  },
  "sukiyaki": {
    glass: "Panela de ferro (sukiyaki-nabe) na mesa com fogareiro",
    serve: "Cada pessoa pega os ingredientes diretamente da panela e mergulha no ovo cru batido.",
    tip: "Use carne bem marmorizada (wagyu se possível). O warishita (molho) deve ser equilibrado entre doce e salgado. Não cozinhe todos os ingredientes juntos — adicione aos poucos.",
  },
  "yakitori": {
    glass: "Tábua de madeira ou prato alongado",
    serve: "Em izakayas, é servido diretamente do espeto. Combine com cerveja gelada ou highball japonês.",
    tip: "Use carvão binchotan (carvão japonês) para o melhor sabor. O molho tare deve ser reduzido e brilhante. Pincele apenas nos últimos 30 segundos de grelhagem.",
  },
  "udon-kitsune": {
    glass: "Tigela grande de cerâmica",
    serve: "O caldo deve cobrir o udon. Aspire o macarrão — no Japão, fazer barulho ao comer macarrão é sinal de que está gostoso!",
    tip: "Udon fresco é muito superior ao seco. Se possível, faça a massa em casa — é só farinha, água e sal. A textura elástica (koshi) é o que define um bom udon.",
  },
  "soba-fria": {
    glass: "Esteira de bambu (zaru) com prato coletor",
    serve: "No verão japonês, é o prato perfeito. O molho tsuyu gelado e o soba frio são incrivelmente refrescantes.",
    tip: "Use soba 100% trigo sarraceno (juwari soba) para o melhor sabor. Após cozinhar, lave em água gelada corrente para remover o amido e firmar a textura.",
  },
  "uramaki-california": {
    glass: "Prato retangular de cerâmica ou tábua de madeira",
    serve: "Corte com faca molhada para cortes limpos. Disponha as peças mostrando o arroz e gergelim por fora.",
    tip: "O abacate deve estar no ponto exato — maduro mas firme. Use filme plástico sobre a esteira para evitar que o arroz grude. Pressione firme mas não esmague.",
  },
  "temaki-salmao": {
    glass: "Suporte de madeira ou diretamente na mão",
    serve: "Coma imediatamente — o nori perde a crocância em minutos. Não use hashi, coma com as mãos.",
    tip: "O nori deve ser de qualidade premium (tostado). O segredo é a proporção: pouco arroz e bastante recheio. O cream cheese é uma adaptação brasileira que combina perfeitamente.",
  },
  "edamame": {
    glass: "Tigela de cerâmica pequena",
    serve: "Sirva como aperitivo com cerveja japonesa gelada. Perfeito para abrir uma refeição.",
    tip: "Não cozinhe demais — o edamame deve manter a cor verde vibrante e uma leve crocância. Sal em flocos grossos na casca é melhor que sal fino.",
  },
  "sunomono": {
    glass: "Tigelinha de cerâmica (kobachi)",
    serve: "Sirva bem gelado como palate cleanser entre pratos.",
    tip: "Salgue o pepino e deixe descansar 10 min para remover o excesso de água. Isso concentra o sabor e melhora a textura.",
  },
  "tonjiru": {
    glass: "Tigela grande de laca ou cerâmica",
    serve: "Perfeito no inverno. Sirva fumegante com arroz branco e tsukemono (pickles japoneses).",
    tip: "O gobo (bardana) é essencial para o sabor terroso. Corte em sasagaki (aparas finas) e deixe de molho em água com vinagre para não escurecer.",
  },
  "matcha-cheesecake": {
    glass: "Prato de cerâmica branca com peneira de matcha",
    serve: "Sirva frio, polvilhado com matcha. O contraste do matcha verde sobre o cheesecake claro é lindo.",
    tip: "Use matcha culinário de boa qualidade. Peneire sempre para evitar grumos. O banho-maria é obrigatório para a textura jiggly (tremulante) característica.",
  },
  "hosomaki-pepino": {
    glass: "Prato de cerâmica retangular",
    serve: "Ideal como sushi leve e refrescante, perfeito para começar uma refeição.",
    tip: "Remova as sementes do pepino para evitar excesso de umidade. Use pouco arroz — hosomaki deve ser delicado.",
  },
  "futomaki": {
    glass: "Prato de cerâmica grande ou tábua de madeira",
    serve: "Corte com faca bem afiada e molhada. As fatias grossas mostram o bonito corte transversal dos recheios.",
    tip: "A chave é a pressão uniforme ao enrolar — firme mas sem esmagar. O tamagoyaki (omelete) deve ser doce e úmido.",
  },
  "taiyaki": {
    glass: "Papel kraft ou saquinho de papel",
    serve: "Coma quente, direto da forma. O contraste da massa crocante com o anko quente é divino.",
    tip: "A forma especial de taiyaki é essencial. A massa não deve ser muito espessa — idealmente a cauda deve ser fininha e crocante.",
  },
};

export function getChefTip(id: string): ChefTip | undefined {
  return chefTips[id];
}
