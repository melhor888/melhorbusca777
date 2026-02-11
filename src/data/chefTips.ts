export interface ChefTip {
  glass: string;
  serve: string;
  tip: string;
}

export const chefTips: Record<string, ChefTip> = {
  // ===== VODKA =====
  "moscow-mule": {
    glass: "Caneca de cobre (Moscow Mule mug)",
    serve: "Sirva sempre com a caneca de cobre bem gelada — o metal intensifica a sensação refrescante. Ideal como aperitivo em dias quentes.",
    tip: "Use ginger beer artesanal de boa qualidade, nunca ginger ale. A diferença no sabor é enorme. Esprema o limão na hora e bata levemente a hortelã nas mãos antes de decorar para liberar os óleos aromáticos.",
  },
  "bloody-mary": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Perfeito como drink de brunch ou para o dia seguinte. Sirva sempre bem gelado com bastante gelo.",
    tip: "O segredo está no equilíbrio entre o ácido do tomate e o picante. Prepare o mix de especiarias antecipadamente e deixe na geladeira por pelo menos 1 hora para os sabores se integrarem. O talo de aipo não é só decoração — serve como mexedor natural.",
  },
  "cosmopolitan": {
    glass: "Taça Martini (Cocktail glass) gelada",
    serve: "Sirva como drink de boas-vindas em jantares ou eventos elegantes. A taça deve estar no freezer por pelo menos 15 minutos.",
    tip: "A casca de laranja flamejada é o toque final essencial — segure-a sobre o drink e passe uma chama para liberar os óleos cítricos. Use vodka cítrica de qualidade e suco de cranberry 100% natural, sem açúcar adicionado.",
  },
  "screwdriver": {
    glass: "Copo alto (Highball) de 300ml",
    serve: "Drink casual perfeito para o dia a dia. Ideal para acompanhar petiscos leves no final da tarde.",
    tip: "A regra de ouro: sempre use suco de laranja espremido na hora. O suco de caixinha mata o drink. Proporção clássica é 1:3 (vodka:suco), mas ajuste ao gosto.",
  },
  "white-russian": {
    glass: "Copo Old Fashioned (Rocks glass) de 300ml",
    serve: "Drink de sobremesa por excelência. Sirva após o jantar como uma alternativa sofisticada ao café.",
    tip: "A camada de creme é o diferencial: despeje delicadamente pelas costas de uma colher de bar. Use creme de leite fresco, nunca UHT. Se quiser versão vegana, leite de aveia funciona surpreendentemente bem.",
  },
  "black-russian": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "Drink forte e direto. Perfeito como digestivo após uma refeição pesada.",
    tip: "A simplicidade deste drink exige ingredientes premium. Use uma vodka suave e um Kahlúa legítimo. Mexa devagar com gelo grande (um cubo único é o ideal) para não diluir demais.",
  },
  "espresso-martini": {
    glass: "Taça Martini (Cocktail glass) ou taça Coupe gelada",
    serve: "O drink que une bar e cafeteria. Perfeito para after-dinner ou como energético elegante para a noite. Sirva imediatamente após preparo.",
    tip: "O espresso DEVE ser fresco e forte — prepare na hora. O segredo da espuma perfeita é agitar vigorosamente por pelo menos 15 segundos. Os 3 grãos de café na espuma representam saúde, riqueza e felicidade — tradição italiana.",
  },
  "sea-breeze": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink refrescante e leve, ideal para tardes de verão à beira da piscina ou praia.",
    tip: "Use suco de cranberry natural (não o concentrado adoçado) e suco de grapefruit rosa para uma cor mais vibrante. O equilíbrio entre o ácido do cranberry e o amargo do grapefruit é o que torna este drink especial.",
  },
  "harvey-wallbanger": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Um clássico dos anos 70 que está voltando com força. Sirva em festas retrô ou como drink de aperitivo.",
    tip: "O Galliano flutuado no topo é a assinatura do drink — nunca misture. Despeje suavemente pelas costas da colher. O licor italiano de ervas e baunilha vai se mesclando gradualmente, criando camadas de sabor.",
  },
  "vodka-martini": {
    glass: "Taça Martini (Cocktail glass) clássica, bem gelada",
    serve: "O drink mais icônico do mundo. Sirva como aperitivo em ocasiões sofisticadas. A taça deve gelar no freezer por 20 minutos.",
    tip: "Mexa, nunca agite (a menos que seja o James Bond). Mexer preserva a clareza cristalina. Use vermute seco de qualidade e ajuste a proporção ao gosto — mais seco = menos vermute. A azeitona deve ser de boa qualidade, sem caroço.",
  },

  // ===== RUM / BACARDI =====
  "mojito": {
    glass: "Copo alto (Highball) de 350ml ou copo de vidro largo",
    serve: "O drink mais refrescante de Cuba. Perfeito para dias quentes, almoços ao ar livre e happy hours. Sirva sempre com canudo.",
    tip: "Macere a hortelã com CUIDADO — pressione suavemente, nunca triture. Triturar libera clorofila e deixa amargo. Use açúcar demerara para um sabor mais complexo. A água com gás deve ser bem gelada e adicionada por último.",
  },
  "daiquiri": {
    glass: "Taça Coupe gelada ou taça de champagne achatada",
    serve: "Drink elegante e equilibrado. Sirva como aperitivo antes do jantar. É o drink favorito de Hemingway.",
    tip: "O Daiquiri clássico NÃO é frozen — é agitado e coado. O equilíbrio perfeito é 8:3:2 (rum:limão:xarope). Use limão Tahiti espremido na hora e rum branco cubano se possível.",
  },
  "pina-colada": {
    glass: "Copo Hurricane ou copo Poco Grande de 400ml",
    serve: "Drink tropical por excelência. Sirva em festas temáticas, luaus ou tarde na piscina. Decore com mini guarda-chuva para o visual completo.",
    tip: "Use creme de coco (não leite de coco) para a textura cremosa perfeita. Abacaxi fresco batido faz toda a diferença. Se usar rum envelhecido no lugar do branco, ganha notas de caramelo e baunilha incríveis.",
  },
  "cuba-libre": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink casual e social, perfeito para churrascos e encontros informais. A tradição cubana é brindar dizendo 'Por Cuba Libre!'",
    tip: "Use coca-cola mexicana (com açúcar de cana) se possível — a diferença é notável. O suco de limão fresco é obrigatório, nada de limão em sachê. Rum dourado Havana Club é o mais autêntico.",
  },
  "mai-tai": {
    glass: "Copo Old Fashioned (Rocks glass) largo ou copo Tiki",
    serve: "O rei dos drinks Tiki. Sirva em festas tropicais ou como drink principal em jantares havaianos. A decoração exuberante faz parte da experiência.",
    tip: "A combinação de dois rums (branco e escuro) cria complexidade. O orgeat (xarope de amêndoa) é insubstituível — não use amaretto como substituto. Flutue o rum escuro por último para aroma e visual.",
  },
  "dark-n-stormy": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink das Bermudas, perfeito para noites com brisa do mar. Simples e refrescante, ideal para quem gosta de sabores intensos.",
    tip: "Tradicionalmente feito com rum Gosling's Black Seal — é até marca registrada! A ginger beer deve ser picante e de qualidade. Flutue o rum escuro para criar o efeito 'tempestade' que dá nome ao drink.",
  },
  "zombie": {
    glass: "Copo Hurricane ou Tiki Mug de 400ml+",
    serve: "Cuidado: este drink é MUITO forte, apesar do sabor tropical disfarçar o álcool. Limite-se a um por noite. Decoração tiki elaborada é tradição.",
    tip: "Donn Beach, criador do Zombie, limitava a 2 por cliente. Use três tipos de rum diferentes para complexidade máxima. O dash de grenadine cria a cor vermelha no fundo — o 'sangue do zombie'.",
  },
  "hurricane": {
    glass: "Copo Hurricane (formato de lanterna) de 450ml",
    serve: "Nasceu em Nova Orleans, é o drink oficial do Mardi Gras. Sirva em festas animadas com música ao vivo.",
    tip: "O maracujá é o coração deste drink — use polpa natural, nunca suco industrializado. A grenadine deve ser caseira (romã + açúcar) para o melhor resultado. Decore generosamente com frutas tropicais.",
  },
  "rum-punch": {
    glass: "Copo alto (Highball) de 350ml ou jarra para servir em grupo",
    serve: "Drink perfeito para servir em jarras em festas caribenhas. A receita tradicional segue a regra: 1 de sour, 2 de sweet, 3 de strong, 4 de weak.",
    tip: "A noz-moscada ralada na hora faz toda a diferença — é a assinatura caribenha. Use rum dourado envelhecido para mais profundidade. Deixe o punch descansar na geladeira por 1 hora antes de servir.",
  },
  "bahama-mama": {
    glass: "Copo Hurricane de 400ml ou copo alto decorado",
    serve: "Drink de resort tropical. Perfeito com petiscos de frutos do mar, camarão grelhado ou ceviche.",
    tip: "O licor de café pode parecer inusitado, mas é o ingrediente secreto que dá profundidade ao drink. Use rum de coco verdadeiro (não rum com sabor artificial). Bata bem no liquidificador para a textura cremosa perfeita.",
  },

  // ===== GIN =====
  "gin-tonic": {
    glass: "Taça balão (Copa glass) larga ou copo alto de 400ml",
    serve: "O drink mais versátil do mundo. Perfeito como aperitivo, para acompanhar petiscos ou simplesmente para relaxar. A taça balão concentra os aromáticos do gin.",
    tip: "A tônica deve ser premium e bem gelada — abra na hora de servir. Cada gin pede um botânico diferente: gin cítrico com limão, gin floral com pepino, gin especiado com canela e laranja. Proporção ideal: 1:2 ou 1:3 (gin:tônica).",
  },
  "negroni": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "Aperitivo italiano clássico. Sirva 30 minutos antes do jantar para abrir o apetite. Harmoniza com antepastos, queijos curados e embutidos.",
    tip: "As proporções iguais (1:1:1) são sagradas. Use Campari legítimo, vermute italiano (Cocchi ou Carpano Antica) e um gin London Dry. O twist de laranja deve ser espremido sobre o drink para liberar os óleos essenciais.",
  },
  "tom-collins": {
    glass: "Copo Collins (alto e fino) de 350ml",
    serve: "O drink que deu nome ao copo! Refrescante e leve, perfeito para tardes de verão e almoços ao ar livre.",
    tip: "Use suco de limão siciliano se possível, pois é menos ácido e mais aromático. A água com gás deve ser adicionada por último e com delicadeza para preservar a efervescência. A cereja maraschino no fundo é tradição.",
  },
  "gin-fizz": {
    glass: "Copo Collins (alto e fino) de 300ml, sem gelo",
    serve: "Drink sofisticado de brunch. A espuma de clara de ovo cria uma apresentação impressionante. Sirva imediatamente após preparo.",
    tip: "O 'dry shake' (sem gelo primeiro) é ESSENCIAL para a espuma perfeita. Agite por 30 segundos sem gelo, depois adicione gelo e agite mais 15 segundos. A clara deve ser fresca e de ovo caipira para melhor resultado.",
  },
  "bramble": {
    glass: "Copo Old Fashioned (Rocks glass) com gelo picado",
    serve: "Drink britânico que celebra as amoras silvestres do campo inglês. Perfeito para o outono e harmoniza com sobremesas de frutas vermelhas.",
    tip: "O crème de mûre (licor de amora) deve ser regado por cima do gelo picado, criando um efeito cascata roxo lindo. Nunca misture — deixe o convidado mesclar ao beber. Use amoras frescas da estação.",
  },
  "aviation": {
    glass: "Taça Coupe gelada",
    serve: "Drink da era dourada da coquetelaria (pré-Proibição). A cor lilás do crème de violette é hipnotizante. Sirva em jantares elegantes.",
    tip: "Use crème de violette com moderação — muito torna o drink perfumado demais. A cereja maraschino Luxardo é a decoração ideal (não use as vermelhas industriais). Este drink é um teste de habilidade de qualquer bartender.",
  },
  "gimlet": {
    glass: "Taça Coupe gelada ou copo Old Fashioned",
    serve: "Drink da Marinha Britânica, criado para combater o escorbuto. Elegante e direto, perfeito como aperitivo antes do jantar.",
    tip: "Originalmente feito com Rose's Lime Cordial, mas suco de limão fresco com xarope simples dá resultado superior. A proporção 2:1:0.5 (gin:limão:xarope) é o ponto perfeito de equilíbrio.",
  },
  "singapore-sling": {
    glass: "Copo Hurricane ou Sling glass de 350ml",
    serve: "Criado no Raffles Hotel em Cingapura em 1915. Drink de celebração tropical, perfeito para ocasiões especiais.",
    tip: "Este é um drink complexo com muitos ingredientes — não corte atalhos. O Cherry Heering é insubstituível. A receita original usa suco de abacaxi fresco e um dash de Angostura para amarrar tudo.",
  },
  "bees-knees": {
    glass: "Taça Coupe gelada",
    serve: "Drink da era da Proibição — o mel era usado para disfarçar o sabor de gin ruim. Hoje, é simplesmente delicioso. Ideal para happy hour.",
    tip: "O xarope de mel deve ser feito com mel de boa qualidade (laranjeira ou silvestre) diluído em água quente (1:1). Mel puro é grosso demais para misturar. O twist de limão siciliano é mais aromático que o Tahiti.",
  },
  "last-word": {
    glass: "Taça Coupe gelada",
    serve: "Drink cult da coquetelaria moderna. Cada ingrediente em partes iguais cria um equilíbrio perfeito. Sirva para conhecedores.",
    tip: "As proporções iguais são absolutas — não altere. O Green Chartreuse é o ingrediente estrela (feito por monges com 130 ervas). Este drink melhora com gin mais seco e encorpado. Sem decoração ou com cereja Luxardo.",
  },

  // ===== TEQUILA =====
  "margarita": {
    glass: "Taça Margarita (coupette larga) ou copo Old Fashioned",
    serve: "O drink mais pedido com tequila no mundo. Perfeita para comida mexicana, tacos, nachos e guacamole. A borda de sal é a assinatura.",
    tip: "Use tequila 100% agave (nunca mixto). Cointreau ou Grand Marnier fazem diferença real. A borda de sal deve cobrir apenas metade do copo — dê opção ao convidado. Limão Tahiti espremido na hora é obrigatório.",
  },
  "tequila-sunrise": {
    glass: "Copo alto (Highball) transparente de 350ml",
    serve: "O visual é tudo neste drink — o degradê de cores lembra um nascer do sol. Use copo transparente para apreciar o efeito. Perfeito para brunch.",
    tip: "NÃO mexa após adicionar a grenadine — ela deve afundar naturalmente criando o efeito sunrise. Use grenadine caseira (suco de romã + açúcar) para cor e sabor superiores. Suco de laranja espremido na hora é essencial.",
  },
  "paloma": {
    glass: "Copo alto (Highball) de 350ml com borda de sal",
    serve: "Na verdade, a Paloma é mais popular que a Margarita no México! Drink refrescante e casual, perfeito para o dia a dia e churrascos.",
    tip: "Use soda de grapefruit mexicana (Squirt ou Jarritos) para autenticidade. Se não encontrar, misture suco de grapefruit fresco com água com gás. Tequila blanco é a melhor escolha aqui.",
  },
  "batanga": {
    glass: "Copo alto (Highball) de 350ml com borda de sal grosso",
    serve: "Drink de boteco mexicano. A tradição manda mexer com uma faca grande — sim, uma faca! Casual e divertido para festas.",
    tip: "Don Javier, criador do Batanga, usa a mesma faca para cortar limões e mexer o drink — isso adiciona sabor. Use tequila blanco (El Jimador ou similar) e coca-cola mexicana com açúcar de cana.",
  },
  "mexican-mule": {
    glass: "Caneca de cobre (Moscow Mule mug) ou copo alto",
    serve: "A versão mexicana do Moscow Mule. Mais encorpado graças à tequila. Perfeito para quem quer algo diferente do clássico.",
    tip: "A ginger beer artesanal e bem picante é essencial. Tequila reposado (suavemente envelhecida) adiciona notas de baunilha que combinam perfeitamente com o gengibre.",
  },
  "el-diablo": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink de Halloween perfeito, com sua cor avermelhada diabólica. Mas é delicioso o ano todo — doce, cítrico e refrescante.",
    tip: "O crème de cassis (licor de groselha negra) é o que diferencia este drink. A ginger beer picante contrasta com o doce do cassis. Use tequila reposado para mais complexidade.",
  },
  "cantarito": {
    glass: "Jarrito de barro (caneca de cerâmica mexicana) ou copo alto",
    serve: "Drink de festa tradicional mexicana, servido originalmente em jarros de barro que mantêm a bebida gelada. Perfeito para festas juninas e celebrações.",
    tip: "A mistura de três cítricos (laranja, grapefruit e limão) é o segredo. No México, serve-se com sal de chili (Tajín) na borda. Use soda Squirt para completar — não água com gás pura.",
  },
  "tequila-sour": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "Elegante e sofisticado. Sirva após o jantar ou como drink de degustação para apreciadores de tequila.",
    tip: "Tequila reposado é a melhor escolha — o envelhecimento em barril adiciona complexidade que combina com a clara de ovo. O dry shake é obrigatório para a espuma. Desenhe com Angostura na espuma para um toque artístico.",
  },
  "ranch-water": {
    glass: "Copo alto (Highball) de 400ml",
    serve: "Drink texano ultrarrefrescante, o mais simples da categoria. Perfeito para dias de calor extremo, churrascos e atividades ao ar livre.",
    tip: "Use Topo Chico (água mineral gaseificada mexicana) se possível — a carbonatação mais forte faz diferença. Tequila blanco de qualidade, limão fresco e Topo Chico — é só isso. A simplicidade é a beleza.",
  },
  "tequila-shot": {
    glass: "Shot glass (copo de dose) de 50ml",
    serve: "O ritual é a experiência: sal, tequila, limão. Perfeito para brindes e celebrações. Sempre em grupo!",
    tip: "Tequila boa se bebe pura, SEM sal e limão — o ritual é para tequilas mais simples. Se for premium (reposado ou añejo), saborear lentamente é o correto. A ordem é: sal → tequila → limão, sem pausa.",
  },

  // ===== WHISKY =====
  "old-fashioned": {
    glass: "Copo Old Fashioned (Rocks glass) de 300ml com cubo de gelo grande",
    serve: "O drink que definiu a palavra 'cocktail'. Perfeito para degustação contemplativa, charutos e conversas profundas. Sirva em ambientes sofisticados.",
    tip: "Use um único cubo grande de gelo — derrete devagar e não dilui o drink. Bourbon com pelo menos 45% de álcool aguenta a diluição. A casca de laranja deve ser flamejada para liberar óleos. Nunca use fruta em calda.",
  },
  "whisky-sour": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml ou taça Coupe",
    serve: "Equilibrado e acessível, é a porta de entrada para o mundo do whisky. Sirva como aperitivo ou after-dinner. Harmoniza com queijos e charcutaria.",
    tip: "A clara de ovo é opcional mas eleva o drink a outro nível — cria uma espuma sedosa. Dry shake primeiro (sem gelo), depois com gelo. Desenhe um coração com Angostura bitters na espuma usando um palito.",
  },
  "manhattan": {
    glass: "Taça Coupe ou taça Martini gelada",
    serve: "O drink de Nova York. Sofisticado, forte e aromático. Perfeito para jantares formais e como digestivo. Sirva sem gelo.",
    tip: "Rye whisky é o mais autêntico (mais apimentado que bourbon). O vermute deve ser fresco — uma vez aberto, guarde na geladeira e use em 1 mês. Mexa (nunca agite) por 30 segundos para diluição perfeita. Cereja Luxardo é obrigatória.",
  },
  "mint-julep": {
    glass: "Copo Julep de prata ou pewter (estanho), ou copo Collins",
    serve: "O drink oficial do Kentucky Derby! Sirva em dias quentes com o copo bem gelado. A tradição é segurar pela borda para não aquecer.",
    tip: "Macere a hortelã SUAVEMENTE — você quer o aroma, não o amargor. O copo de metal gela rápido e forma condensação elegante. Use bourbon de qualidade (Maker's Mark ou Woodford Reserve). Gelo picado fino é essencial.",
  },
  "irish-coffee": {
    glass: "Taça Irish Coffee (vidro temperado com alça) de 250ml",
    serve: "O drink quente mais famoso do mundo. Perfeito para noites frias, after-dinner e sobremesa líquida. Sirva sem mexer — beba o café através do chantilly.",
    tip: "O café deve ser forte e quente. O chantilly deve ser apenas levemente batido (não firme) — deve flutuar. Aqueça a taça antes com água quente. Whisky irlandês (Jameson ou Tullamore) é obrigatório, não use escocês.",
  },
  "penicillin": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "Drink moderno criado por Sam Ross em 2005 no Milk & Honey NYC. Considerado o melhor coquetel moderno de whisky. Ideal para noites frias.",
    tip: "O xarope de mel-gengibre é o coração: ferva mel com gengibre fresco picado (1:1:1 mel:água:gengibre). O float de Islay scotch (defumado) no topo é obrigatório — é como fumaça de fogueira. Laphroaig é a escolha clássica.",
  },
  "rusty-nail": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "Drink de after-dinner escocês. Forte, doce e aromático com notas de mel e ervas. Perfeito para noites de inverno junto à lareira.",
    tip: "Drambuie é um licor de whisky com mel e ervas — é o ingrediente que define o drink. Use scotch blended ou single malt suave. Proporção clássica é quase 2:1 (scotch:Drambuie), mas ajuste ao gosto.",
  },
  "rob-roy": {
    glass: "Taça Coupe ou taça Martini gelada",
    serve: "O Manhattan escocês. Nomeado em homenagem ao herói folclórico Rob Roy MacGregor. Perfeito para jantares de gala e ocasiões especiais.",
    tip: "Use scotch blended de qualidade (Johnnie Walker Black, Monkey Shoulder). O vermute tinto doce deve ser italiano (Carpano Antica Formula é perfeito). Mexa suavemente — nunca agite.",
  },
  "boulevardier": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "O Negroni do whisky — inventado por um americano em Paris nos anos 1920. Drink de aperitivo sofisticado que harmoniza com embutidos italianos.",
    tip: "Bourbon funciona melhor que rye aqui — a doçura do milho equilibra o amargor do Campari. Use vermute italiano premium. Um cubo grande de gelo é perfeito. A casca de laranja flamejada é essencial.",
  },
  "godfather": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "Nomeado em homenagem ao filme de Coppola. Drink forte e sofisticado, perfeito para after-dinner com charuto. Simples e memorável.",
    tip: "Amaretto di Saronno é a escolha clássica. A proporção 2:1 (scotch:amaretto) é padrão, mas ajuste ao gosto. Use scotch suave e aromático. Um único cubo grande de gelo é ideal.",
  },

  // ===== COQUETÉIS CLÁSSICOS =====
  "martini": {
    glass: "Taça Martini (Cocktail glass) clássica, gelada no freezer",
    serve: "O rei dos coquetéis. Sirva como aperitivo elegante. Churchill dizia que bastava olhar para a garrafa de vermute enquanto bebia o gin.",
    tip: "Mexa com gelo por 30 segundos para diluição perfeita. Extra Dry = só um spray de vermute. Dirty = com suco de azeitona. A azeitona deve ser de boa qualidade, recheada com pimentão. Gin London Dry é o mais autêntico.",
  },
  "caipirinha": {
    glass: "Copo Old Fashioned (Rocks glass) de 300ml",
    serve: "Patrimônio cultural brasileiro! Perfeita com feijoada, churrasco e petiscos. Cada brasileiro tem sua receita — o segredo é o equilíbrio.",
    tip: "Corte o limão em 8 pedaços removendo o miolo branco (que amarga). Macere com força para extrair o suco e os óleos da casca. Cachaça de alambique artesanal faz uma caipirinha absurdamente superior. Use açúcar cristal.",
  },
  "french-75": {
    glass: "Flûte de champagne ou taça Coupe",
    serve: "Nomeado em homenagem ao canhão francês da Primeira Guerra. Elegante e efervescente, perfeito para celebrações, casamentos e réveillon.",
    tip: "Use champagne ou espumante brut de qualidade. O gin deve ser sutil para não competir com as bolhas. Adicione o champagne por último e com delicadeza. O twist de limão deve ser longo e espiral — pura elegância.",
  },
  "sidecar": {
    glass: "Taça Coupe com borda de açúcar",
    serve: "Clássico parisiense dos anos 1920. Sofisticado e equilibrado, perfeito para jantares franceses e ocasiões especiais.",
    tip: "Conhaque VS ou VSOP é ideal (XO é desperdício em coquetel). A borda de açúcar deve cobrir apenas metade do copo. O Cointreau é preferível ao triple sec genérico. Proporção clássica: 2:1:1.",
  },
  "sazerac": {
    glass: "Copo Old Fashioned (Rocks glass) gelado, sem gelo",
    serve: "O coquetel mais antigo da América, nascido em Nova Orleans. Drink de contemplação que exige respeito. Sirva sem gelo, em copo gelado.",
    tip: "O 'rinse' de absinto no copo gelado é o diferencial — descarte o excesso. Use Peychaud's bitters (vermelho, mais suave que Angostura). A casca de limão é espremida SOBRE o drink mas NÃO colocada dentro. Rye whisky é obrigatório.",
  },
  "americano": {
    glass: "Copo alto (Highball) de 300ml ou copo Old Fashioned",
    serve: "O precursor do Negroni e o primeiro drink pedido por James Bond nos livros! Leve e refrescante como aperitivo italiano.",
    tip: "Proporções iguais de Campari e vermute são sagradas. A água com gás deve ser bem gelada. É um drink de baixo teor alcoólico, perfeito para quem quer algo leve antes do jantar. A fatia de laranja é indispensável.",
  },
  "long-island": {
    glass: "Copo alto (Highball) de 450ml",
    serve: "ATENÇÃO: um dos drinks mais fortes que existe, apesar do sabor suave. Limite-se a um. Perfeito para festas (com responsabilidade!).",
    tip: "A proporção de cada destilado deve ser pequena e IGUAL — o segredo é o equilíbrio entre 5 destilados. O splash de coca-cola é só para cor — não é um cuba libre. Use destilados de qualidade razoável, não precisa ser premium.",
  },
  "corpse-reviver": {
    glass: "Taça Coupe gelada",
    serve: "Drink 'ressuscitador' da era da Proibição. O nome diz tudo — era servido como cura para ressaca. Elegante e cítrico.",
    tip: "O rinse de absinto é sutil mas essencial. As proporções iguais (partes iguais de tudo) são a regra. Lillet Blanc pode ser substituído por Cocchi Americano para um sabor mais autêntico à receita original.",
  },
  "daiquiri-classico": {
    glass: "Taça Coupe gelada ou taça de champagne achatada",
    serve: "A forma mais pura do Daiquiri. Sem blender, sem frutas — apenas rum, limão e açúcar em perfeita harmonia. Drink de bartender.",
    tip: "Hemingway pedia 'sem açúcar e com dose dupla' (o Hemingway Daiquiri). Para a versão clássica, a proporção 2:1:0.75 (rum:limão:xarope) é perfeita. Agite vigorosamente e coe duas vezes para textura sedosa.",
  },
  "whisky-highball": {
    glass: "Copo alto (Highball) fino de 350ml com muito gelo",
    serve: "O drink mais popular do Japão. Perfeito com sushi, sashimi e culinária japonesa em geral. Refrescante e elegante na simplicidade.",
    tip: "Use whisky japonês (Suntory Toki, Hibiki) para autenticidade. A água com gás deve ser MUITO gelada e com carbonatação forte. Mexa apenas UMA vez — a efervescência é sagrada. Gelo deve preencher todo o copo.",
  },

  // ===== DRINKS TROPICAIS =====
  "sex-on-beach": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink de festa e diversão, perfeito para pool parties e beach bars. O nome provocativo faz parte do charme desde os anos 80.",
    tip: "O licor de pêssego Archers é o mais tradicional. Use suco de cranberry natural e suco de laranja fresco. O segredo é servir bem gelado — o calor mata este drink. Decore com frutas frescas.",
  },
  "blue-lagoon": {
    glass: "Copo alto (Highball) transparente de 350ml",
    serve: "O drink mais fotogênico que existe — azul vibrante e irresistível. Perfeito para festas temáticas, pool parties e Instagram.",
    tip: "O Curaçao Blue é o que dá a cor icônica. Use limonada caseira em vez de sprite para um sabor mais autêntico. Adicione gelo em formato especial para um visual ainda mais impressionante.",
  },
  "caipiroska-tropical": {
    glass: "Copo Old Fashioned (Rocks glass) de 300ml",
    serve: "Variação brasileira da caipirinha com vodka e morangos. Perfeita para festas, churrascos e reuniões. Cada fruta cria uma experiência diferente.",
    tip: "Morangos devem ser maduros e doces. Macere com cuidado para não virar suco — quer pedaços visíveis. Experimente com kiwi, maracujá ou manga para variações incríveis. Gelo picado é obrigatório.",
  },
  "pina-colada-tropical": {
    glass: "Copo Hurricane de 400ml ou coco verde",
    serve: "Versão turbinada da clássica com maracujá. Se puder servir dentro de um coco, a experiência é imbatível. Festas havaianas são o cenário perfeito.",
    tip: "O maracujá adiciona acidez que equilibra a doçura do coco. Use abacaxi fresco cortado em cubos (não suco de caixinha). Coco ralado na borda do copo é um toque visual incrível.",
  },
  "mai-tai-tropical": {
    glass: "Copo Hurricane ou caneca Tiki de cerâmica",
    serve: "Versão tropical do clássico com abacaxi. A experiência Tiki completa inclui caneca temática, decoração extravagante e ambiente com tochas.",
    tip: "Canecas Tiki são colecionáveis — cada bar tem a sua exclusiva. O orgeat pode ser feito em casa com amêndoas. Decore com flores comestíveis, folhas de abacaxi e um guarda-chuva para a experiência completa.",
  },
  "bahia-breeze": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Leve, tropical e extremamente fácil de beber. Perfeito para tardes preguiçosas na praia ou beira da piscina.",
    tip: "Rum de coco Malibu é a escolha mais popular, mas rum branco com creme de coco dá um resultado mais autêntico. Equilibre o doce do abacaxi com o ácido do cranberry. Sirva bem gelado.",
  },
  "surfer-rosa": {
    glass: "Copo alto (Highball) elegante de 350ml",
    serve: "Drink moderno e fotogênico com tons rosados. Perfeito para festas elegantes e eventos sofisticados. O nome homenageia o álbum dos Pixies.",
    tip: "O licor de lichia (Soho ou Lychee) é o ingrediente exótico que diferencia este drink. Use suco de cranberry natural para a cor rosada. Uma flor comestível como decoração eleva a apresentação.",
  },
  "zombie-tropical": {
    glass: "Copo Hurricane de 450ml ou caneca Tiki elaborada",
    serve: "Versão tropical ainda mais potente do Zombie original. Drink para festas temáticas de Halloween ou luaus extremos. UM por pessoa!",
    tip: "O dash de absinto adiciona complexidade herbal sem dominar. Três rums diferentes são obrigatórios para a receita autêntica. Decore com frutas tropicais espetadas em palito longo e folha de abacaxi.",
  },
  "hurricane-tropical": {
    glass: "Copo Hurricane (formato de lanterna) de 450ml",
    serve: "O drink oficial de Nova Orleans. Perfeito para festas de Carnaval, Mardi Gras e celebrações animadas com boa música.",
    tip: "Polpa de maracujá fresco é insubstituível. A grenadine caseira (romã + açúcar) faz toda a diferença na cor e sabor. Dois tipos de rum criam profundidade. Decore generosamente.",
  },
  "purple-rain": {
    glass: "Copo alto (Highball) transparente de 350ml",
    serve: "Drink homenagem ao Prince! A cor roxa vibrante é hipnotizante. Perfeito para festas dos anos 80, karaokê e noites temáticas.",
    tip: "O truque da cor roxa: Curaçao Blue (azul) + cranberry (vermelho) = roxo mágico. A grenadine intensifica a cor. Sirva em copo transparente para apreciar a cor incrível. LED na base do copo é um plus!",
  },

  // ===== NÃO ALCOÓLICOS =====
  "virgin-mojito": {
    glass: "Copo alto (Highball) de 350ml ou copo de vidro largo",
    serve: "Toda a refrescância do mojito sem álcool. Perfeito para gestantes, motoristas e quem quer curtir sem beber. Zero julgamento!",
    tip: "Macere a hortelã suavemente para não amargar. Água com gás bem gelada e efervescente é essencial. Adicione um toque de xarope de gengibre para complexidade extra. Limão espremido na hora, sempre.",
  },
  "shirley-temple": {
    glass: "Copo alto (Highball) de 350ml transparente",
    serve: "O drink sem álcool mais famoso do mundo, nomeado em homenagem à atriz mirim. Perfeito para crianças em eventos e festas de família.",
    tip: "Ginger ale premium faz diferença. A grenadine deve ser de boa qualidade (ou caseira com romã). A cereja maraschino é obrigatória — para crianças, coloque várias! Coloque canudo divertido.",
  },
  "limonada-tropical": {
    glass: "Copo alto (Highball) de 400ml ou jarra para servir",
    serve: "Refrescante e vitaminada. Perfeita para dias de calor extremo, almoços em família e churrascos.",
    tip: "Xarope de maracujá caseiro (polpa + açúcar + água) é infinitamente melhor que industrializado. Use limões espremidos na hora e água com gás bem gelada. Hortelã fresca batida nas mãos antes de decorar.",
  },
  "smoothie-frutas": {
    glass: "Copo alto (Highball) de 400ml ou mason jar com canudo",
    serve: "Café da manhã ou lanche da tarde nutritivo e delicioso. Perfeito com granola, aveia e sementes. Energia pura em copo.",
    tip: "Congele as frutas em cubos para um smoothie mais cremoso sem excesso de gelo. Banana madura é o segredo da cremosidade. Use iogurte grego para mais proteína. Mel de abelhas em vez de açúcar.",
  },
  "arnold-palmer": {
    glass: "Copo alto (Highball) de 400ml",
    serve: "Drink do lendário golfista Arnold Palmer. Perfeito para tardes de esporte, golf e atividades ao ar livre. Hidratante e refrescante.",
    tip: "A proporção clássica é 1:1 (chá:limonada), mas Palmer pessoalmente preferia 2:1 (chá:limonada). Use chá preto preparado fresco e limonada caseira. Nunca use pó — a qualidade dos ingredientes é tudo.",
  },
  "fruit-punch-sa": {
    glass: "Jarra grande de vidro para servir ou copos de 350ml",
    serve: "Perfeito para festas infantis, churrascos em família e eventos ao ar livre. Faça em jarra grande e deixe na mesa para self-service.",
    tip: "Misture os sucos pelo menos 1 hora antes para os sabores se integrarem. Adicione água com gás só na hora de servir para manter a efervescência. Frutas frescas cortadas na jarra são decoração e lanche.",
  },
  "pina-colada-sa": {
    glass: "Copo Hurricane de 350ml ou copo alto decorado",
    serve: "Toda a experiência tropical da Piña Colada sem álcool. Perfeita para crianças e grávidas que não querem ficar de fora.",
    tip: "Use creme de coco (não leite de coco) para a textura espessa correta. Abacaxi fresco batido no liquidificador é muito superior ao suco de caixinha. Decore com fatia de abacaxi e cereja.",
  },
  "agua-fresca": {
    glass: "Copo alto de 400ml ou jarra de vidro",
    serve: "Tradição mexicana encontrada em mercados e taquerias. Perfeita para dias de calor extremo. Outras versões: pepino, hibisco, tamarindo.",
    tip: "A melancia deve ser bem madura e doce. Coe se quiser textura mais leve, ou deixe com polpa para mais corpo. Adicione um toque de sal — realça a doçura natural da melancia. Hortelã fresca é opcional mas eleva.",
  },
  "cha-gelado": {
    glass: "Copo alto (Highball) de 400ml ou mason jar",
    serve: "Refrescante e sofisticado. Perfeito para tardes de calor, piqueniques e almoços leves. Combine com saladas e sanduíches.",
    tip: "Prepare o chá forte (2 sachês para 400ml) pois o gelo vai diluir. Não adoce demais — o néctar de pêssego já é doce. Chá preto é clássico, mas chá verde dá uma versão mais leve e delicada.",
  },
  "limonada-suica": {
    glass: "Copo alto de 350ml ou jarra grande",
    serve: "Invenção brasileira (apesar do nome!) que todo mundo ama. Cremosa, ácida e refrescante. Perfeita para almoços em família.",
    tip: "O segredo: bata por APENAS 10 segundos e coe IMEDIATAMENTE — se bater demais, a casca do limão solta substâncias amargas. Use limão Tahiti bem verde. Leite condensado a gosto — comece com pouco e vá ajustando.",
  },

  // ===== SHOTS E RÁPIDOS =====
  "jagerbomb": {
    glass: "Shot glass de 30ml + copo largo de 350ml para o energético",
    serve: "O shot de festa por excelência. Perfeito para começo de noite e celebrations. O ritual de mergulhar o shot é parte da diversão.",
    tip: "O Jägermeister deve estar GELADO (direto do freezer). O energético deve estar em temperatura ambiente para evitar que espume demais. Beba rápido após mergulhar o shot — o Jäger perde potência se misturar demais.",
  },
  "b52": {
    glass: "Shot glass de 45ml transparente (para ver as camadas)",
    serve: "O shot mais bonito do mundo das bebidas. As três camadas perfeitas impressionam qualquer pessoa. Pode ser flamejado para efeito dramático.",
    tip: "A ordem é crucial: Kahlúa (mais denso) embaixo, Baileys no meio, Grand Marnier em cima. Use as costas de uma colher de bar para despejar cada camada. Versão flamejada: acenda o Grand Marnier e beba com canudo.",
  },
  "kamikaze": {
    glass: "Shot glass de 45ml gelado",
    serve: "Shot clássico de balada — forte, cítrico e direto. Perfeito para brindes em grupo. Agite e sirva gelado.",
    tip: "A proporção 2:1:1 (vodka:Cointreau:limão) é a clássica. Use limão espremido na hora — nunca suco de garrafa. Agitar com gelo e coar é essencial para a textura suave. Sirva imediatamente.",
  },
  "lemon-drop": {
    glass: "Taça Martini pequena ou shot glass largo com borda de açúcar",
    serve: "O shot que virou coquetel! Doce, ácido e refrescante. Perfeito para quem não gosta de shots fortes. Queridinho das festas.",
    tip: "A borda de açúcar é essencial — cristais grandes ficam mais bonitos. Vodka cítrica (Absolut Citron) é a escolha clássica. Equilibre doçura e acidez ao gosto. Pode ser servido como coquetel em taça martini.",
  },
  "tequila-shot-rapido": {
    glass: "Shot glass (copo de dose) de 50ml + prato com sal e limão",
    serve: "O ritual mexicano mais famoso do mundo. Sempre em grupo, sempre com brinde! 'Arriba, abajo, al centro, pa' dentro!'",
    tip: "Se a tequila for boa (100% agave, reposado ou añejo), dispense sal e limão — beba pura para apreciar. O sal vai nas costas da mão entre polegar e indicador. Limão deve ser fresco e em fatia grossa.",
  },
  "irish-car-bomb": {
    glass: "Copo Pint de 500ml para a Guinness + shot glass",
    serve: "Drink de festa irlandês-americano. Beba RÁPIDO — o Baileys coalha na Guinness em segundos. Diversão garantida em grupos.",
    tip: "Tempo é tudo: mergulhe o shot e beba em menos de 5 segundos, antes do Baileys coalhar. A Guinness deve estar em temperatura ambiente (tradição irlandesa). Use whisky Jameson para autenticidade.",
  },
  "fireball-shot": {
    glass: "Shot glass de 45ml, direto do freezer",
    serve: "Whisky com canela, doce e picante. Extremamente popular em festas e bares esportivos. Perfeito com fatia de maçã como chaser.",
    tip: "Mantenha a garrafa no freezer — Fireball gelado é suave como seda. A fatia de maçã verde como acompanhamento é surpreendentemente boa. Em grupo, sirva em mini copos de plástico para praticidade em festas.",
  },
  "sake-bomb": {
    glass: "Copo largo de 500ml para cerveja + shot de sake em ochoko (copo de sake)",
    serve: "Tradição de izakaya (bar japonês). O ritual de bater na mesa é essencial — diversão garantida! Sempre em grupo com contagem regressiva.",
    tip: "Equilibre o shot sobre dois hashis (palitos) no copo. Bata na mesa com as mãos para o shot cair. Sake quente funciona melhor que frio. Use cerveja japonesa (Asahi, Sapporo, Kirin) para autenticidade.",
  },
  "pickleback": {
    glass: "Dois shot glasses de 30ml lado a lado",
    serve: "Tendência de bar que veio do Brooklyn, NYC. O whisky seguido da salmoura é surpreendentemente delicioso. Perfeito para impressionar amigos.",
    tip: "A salmoura deve ser de pepinos em conserva artesanais (não industriais). Jameson é o whisky mais usado. Beba o whisky primeiro, depois a salmoura imediatamente — ela 'limpa' o paladar. Não misture os dois!",
  },
  "espresso-shot": {
    glass: "Shot glass de 60ml ou copo espresso de vidro dupla parede",
    serve: "O melhor dos dois mundos: cafeína + álcool. Perfeito para after-dinner ou para animar a noite. Mini versão do Espresso Martini.",
    tip: "O espresso deve ser preparado na hora e forte. Use licor de café Kahlúa ou Mr. Black (mais premium). O xarope simples equilibra a amargura. Sirva imediatamente — o espresso perde crema rápido.",
  },

  // ===== EXÓTICOS E INTERNACIONAIS =====
  "aperol-spritz": {
    glass: "Taça de vinho grande (balão) com bastante gelo",
    serve: "O aperitivo mais popular da Itália. Tradição do 'aperitivo' às 18h com petiscos. Perfeito com queijos, azeitonas e bruschettas.",
    tip: "A ordem é essencial: prosecco primeiro, depois Aperol, depois água com gás. Proporção 3:2:1 é a regra de ouro. Use prosecco (não champagne — é muito seco). A fatia de laranja deve ser grande e bonita. Nunca use canudo.",
  },
  "pisco-sour": {
    glass: "Taça Coupe gelada ou copo Old Fashioned",
    serve: "Drink nacional do Peru (e Chile, mas não diga isso a um peruano!). Perfeito com ceviche e culinária peruana. Dia do Pisco Sour: primeiro sábado de fevereiro.",
    tip: "O pisco deve ser peruano quebranta ou acholado. A clara de ovo cria a espuma icônica — dry shake obrigatório. As 3 gotas de Angostura na espuma são tradição e podem ser desenhadas com palito. Limão espremido na hora.",
  },
  "sangria": {
    glass: "Jarra grande de vidro para servir + taças de vinho ou copos de 300ml",
    serve: "A bebida social da Espanha. Perfeita para almoços longos, festas ao ar livre e churrascos. Quanto mais pessoas, melhor!",
    tip: "Use vinho tinto jovem e frutado (Tempranillo ou Garnacha). Corte frutas da estação em pedaços grandes. Deixe descansar na geladeira por pelo menos 2 horas (overnight é ainda melhor). Adicione água com gás só na hora de servir.",
  },
  "caipiroska": {
    glass: "Copo Old Fashioned (Rocks glass) de 300ml",
    serve: "Versão russa-brasileira da caipirinha. Cada fruta cria um drink diferente. Perfeita para experimentar variações em festas.",
    tip: "Morango, kiwi, limão, maracujá — cada fruta tem seu charme. Macere com força mas sem triturar completamente. Vodka premium não é necessária, mas deve ser suave. Gelo picado fino é obrigatório para textura.",
  },
  "michelada": {
    glass: "Copo alto (Highball) de 500ml com borda de sal Tajín",
    serve: "A bloody mary mexicana com cerveja! Drink de brunch perfeito e também considerado 'cura para ressaca' no México. Acompanha tacos perfeitamente.",
    tip: "Sal Tajín (sal de chili com limão) na borda é obrigatório. Clamato (suco de tomate com amêijoa) é mais tradicional que suco de tomate puro. A cerveja deve ser mexicana lager (Corona, Modelo, Pacífico). Ajuste o picante ao gosto.",
  },
  "irish-coffee-exotico": {
    glass: "Taça Irish Coffee (vidro temperado com alça) de 250ml",
    serve: "Inventado no aeroporto de Shannon, Irlanda, para aquecer passageiros em trânsito. Perfeito para noites frias e after-dinner de inverno.",
    tip: "O café deve ser forte e quente, nunca morno. O chantilly deve flutuar — bata levemente (não firme) e despeje pelas costas da colher. Beba o café ATRAVÉS do chantilly, sem mexer. Whisky Jameson é o mais usado.",
  },
  "mojito-cubano": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "A versão cubana autêntica usa Havana Club — rum cubano legítimo. Perfeito com comida caribenha e música salsa ao vivo.",
    tip: "Em Cuba, usam açúcar demerara (mais escuro e aromático). A hortelã cubana 'hierba buena' é mais suave que a spearmint. Havana Club 3 años é a escolha ideal. Macere suavemente e use bastante hortelã fresca.",
  },
  "dark-n-stormy-exotico": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink oficial das Bermudas, tão icônico que a marca Gosling's tem trademark! Perfeito para noites tropicais e beira-mar.",
    tip: "Gosling's Black Seal rum é o único rum 'autorizado' para um Dark 'n' Stormy autêntico. A ginger beer picante Gosling's é ideal. Flutue o rum por último para o efeito visual de tempestade escura.",
  },
  "sidecar-exotico": {
    glass: "Taça Coupe com borda de açúcar refinado",
    serve: "A versão parisiense usa conhaque francês premium. Drink de bar de hotel cinco estrelas, para ocasiões que pedem elegância absoluta.",
    tip: "Use conhaque francês (Rémy Martin VSOP ou Courvoisier). A borda de açúcar deve ser fina e delicada. A proporção parisiense é 2:1:1 (conhaque:Cointreau:limão). Twist de laranja flamejado é o toque final.",
  },
  "aviation-exotico": {
    glass: "Taça Coupe gelada",
    serve: "Drink da era dourada da aviação comercial, quando voar era luxo. A cor lilás é única e inesquecível. Drink para conhecedores.",
    tip: "O crème de violette é raro mas essencial — sem ele, não é um Aviation verdadeiro. Use com moderação (5-10ml). Gin London Dry encorpado combina melhor. Cereja Luxardo maraschino (italiana, escura) é a decoração perfeita.",
  },

  // ===== VODKA EXTRAS =====
  "appletini": {
    glass: "Taça Martini (Cocktail glass) gelada",
    serve: "Drink icônico dos anos 2000, popularizado pela série Scrubs. Perfeito para festas temáticas e happy hours descontraídos.",
    tip: "Use Sour Apple Pucker para a cor verde vibrante e o sabor ácido. Equilibre a doçura com um toque extra de limão. A fatia de maçã verde na borda é essencial para a apresentação.",
  },
  "cape-codder": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink praiano, batizado em homenagem a Cape Cod, Massachusetts. Simples, refrescante e perfeito para o verão.",
    tip: "Use suco de cranberry 100% natural (não o coquetel adoçado). A diferença no sabor é brutal. Esprema limão fresco na hora e sirva bem gelado.",
  },
  "madras": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Versão mais frutada do Cape Codder. Perfeito para quem acha cranberry puro muito ácido. Drink leve e social.",
    tip: "A proporção ideal é partes iguais de cranberry e laranja. Use suco de laranja espremido na hora. O nome vem da cidade de Madras (hoje Chennai), na Índia.",
  },
  "greyhound": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink elegante e amargo. Perfeito como aperitivo antes do almoço. O grapefruit rosa dá cor mais bonita.",
    tip: "Use grapefruit rosa espremido na hora — mais doce que o branco. Se achar muito amargo, adicione 10ml de xarope simples. O Salty Dog é a versão com borda de sal.",
  },
  "salty-dog": {
    glass: "Copo alto (Highball) de 350ml com borda de sal",
    serve: "O Greyhound com borda de sal — a diferença é surpreendente. O sal realça a doçura do grapefruit e suaviza o amargor.",
    tip: "Use sal grosso marinho na borda. A vodka pode ser substituída por gin para a versão original dos anos 1920. Grapefruit rosa é mais equilibrado que o branco.",
  },
  "vodka-collins": {
    glass: "Copo Collins (alto e fino) de 350ml",
    serve: "Versão vodka do clássico Tom Collins. Mais neutro, deixa o cítrico e a efervescência brilharem. Refrescante e leve.",
    tip: "Limão espremido na hora é obrigatório. A água com gás deve ser bem gelada e adicionada por último. A cereja maraschino no fundo é tradição.",
  },
  "chi-chi": {
    glass: "Copo Hurricane de 400ml",
    serve: "A Piña Colada com vodka! Mais leve que a versão com rum. Perfeito para quem prefere vodka mas ama drinks tropicais.",
    tip: "Use creme de coco (não leite de coco) para a textura cremosa. Abacaxi fresco batido é infinitamente melhor. Decore com guarda-chuva para o visual tropical completo.",
  },
  "vesper": {
    glass: "Taça Martini (Cocktail glass) gelada no freezer",
    serve: "O drink inventado por Ian Fleming para James Bond em Casino Royale (1953). 'Shaken, not stirred' é a frase mais famosa da coquetelaria.",
    tip: "A receita original usa Kina Lillet (descontinuado) — substitua por Lillet Blanc. Bond pedia vodka Gordon's e gin, numa proporção incomum. O twist de limão é longo e fino.",
  },
  "bay-breeze": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Variação tropical do Sea Breeze. Troca o grapefruit por abacaxi, resultando em um drink mais doce e acessível.",
    tip: "O cranberry dá a cor e a acidez, o abacaxi adiciona doçura tropical. Use sucos naturais. A fatia de abacaxi como decoração dá o toque final.",
  },
  "woo-woo": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink simples e frutado, popularíssimo nos anos 90. Doce, fácil de beber e perfeito para quem está começando no mundo dos drinks.",
    tip: "Basicamente um Sex on the Beach sem suco de laranja. O licor de pêssego Archers é o mais usado. Sirva bem gelado — o calor estraga a experiência.",
  },

  // ===== RUM EXTRAS =====
  "rum-runner": {
    glass: "Copo Hurricane de 400ml",
    serve: "Nasceu nos anos 50 no Holiday Isle Tiki Bar, nas Florida Keys. Drink de praia por excelência, perfeito para festas tropicais.",
    tip: "O licor de banana (crème de banana) e o de amora (blackberry) são essenciais. Use dois tipos de rum para complexidade. Decore generosamente com frutas tropicais.",
  },
  "painkiller": {
    glass: "Copo Hurricane de 400ml",
    serve: "O drink oficial das Ilhas Virgens Britânicas. Cremoso, tropical e viciante. A noz-moscada ralada na hora é a assinatura.",
    tip: "Pusser's Rum é o único rum 'oficial' para um Painkiller autêntico. O creme de coco cria a textura irresistível. Rale noz-moscada fresca por cima — nunca use a pré-moída.",
  },
  "planters-punch": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Clássico jamaicano com mais de 100 anos. A regra mnemônica: 'One of sour, two of sweet, three of strong, four of weak.'",
    tip: "Rum jamaicano (Appleton Estate, Wray & Nephew) é obrigatório para autenticidade. Os bitters de Angostura amarram tudo. Sirva com muito gelo e decore com laranja e cereja.",
  },
  "hemingway-daiquiri": {
    glass: "Taça Coupe gelada",
    serve: "Criado para Hemingway no El Floridita em Havana. O escritor pedia 'sem açúcar e dose dupla'. Drink de literatos e aventureiros.",
    tip: "Também chamado de Daiquiri No.1 ou Papa Doble. O maraschino adiciona complexidade sem açúcar. O grapefruit fresco é obrigatório. Hemingway supostamente bebia 12 desses por sessão!",
  },
  "jungle-bird": {
    glass: "Copo Old Fashioned (Rocks glass) largo",
    serve: "Criado em 1978 no Aviary Bar do Hilton, Kuala Lumpur. O Campari num drink tiki é surpreendente e brilhante. Drink de bartender.",
    tip: "O Campari parece estranho em drink tropical, mas funciona magicamente — o amargor equilibra a doçura do abacaxi. Use rum jamaicano escuro para máximo sabor.",
  },
  "navy-grog": {
    glass: "Caneca Tiki ou copo Collins de 350ml",
    serve: "Inspirado no grog da Marinha Britânica. Drink Tiki complexo e potente — três tipos de rum criam profundidade incrível.",
    tip: "O xarope de mel adiciona corpo e suavidade. Use rum branco, dourado e escuro de origens diferentes para máxima complexidade. Gelo picado fino é essencial para a textura.",
  },
  "ti-punch": {
    glass: "Copo Old Fashioned (Rocks glass) pequeno de 180ml",
    serve: "O drink nacional da Martinica e Guadalupe. Tradicionalmente servido SEM gelo — o calor das ilhas é o refrigerante. Drink de contemplação.",
    tip: "Rhum agricole (destilado da cana fresca, não do melaço) é obrigatório. O disco de limão é espremido levemente — não macerado. Cada pessoa ajusta seu próprio drink à mesa (tradição antilhana).",
  },
  "corn-n-oil": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "Drink de Barbados, batizado pela aparência oleosa do rum escuro flutuando. Simples, potente e cheio de personalidade caribenha.",
    tip: "Falernum (xarope de rum com especiarias) é o ingrediente secreto. Mount Gay ou Doorly's rum são escolhas autênticas de Barbados. O rum é flutuado por último para aroma.",
  },
  "caipirissima": {
    glass: "Copo Old Fashioned (Rocks glass) de 300ml",
    serve: "A caipirinha feita com rum! Mais suave e adocicada que a versão com cachaça. Perfeita para quem acha cachaça forte demais.",
    tip: "Use rum branco cubano (Havana Club) para autenticidade. A técnica de macerar o limão é idêntica à caipirinha. Gelo picado fino é obrigatório.",
  },
  "hot-buttered-rum": {
    glass: "Caneca resistente ao calor de 250ml",
    serve: "Drink quente colonial americano, perfeito para noites de inverno. A manteiga derretida cria uma textura aveludada inesquecível.",
    tip: "A manteiga deve ser sem sal e de boa qualidade. Rum escuro envelhecido (Appleton 12, Diplomático) eleva o drink. Canela em pau dentro da caneca é mais elegante que em pó.",
  },

  // ===== GIN EXTRAS =====
  "gin-rickey": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Drink de Washington D.C., criado em 1883 no Shoomaker's Bar. Extremamente refrescante e com zero açúcar. O drink favorito de Jay Gatsby.",
    tip: "A beleza do Rickey é a simplicidade — gin, limão e água com gás, sem xarope. Use gin London Dry e limão espremido na hora. Adicione água com gás gelada e mexa UMA vez.",
  },
  "clover-club": {
    glass: "Taça Coupe gelada",
    serve: "Clássico pré-Proibição de Philadelphia. A espuma rosada de framboesa e clara de ovo é linda e delicada. Drink sofisticado para jantares elegantes.",
    tip: "Xarope de framboesa caseiro (framboesas + açúcar + água) é muito superior ao industrial. O dry shake é obrigatório para a espuma. Framboesas frescas na decoração finalizam perfeitamente.",
  },
  "ramos-gin-fizz": {
    glass: "Copo Collins (alto e fino) de 300ml, sem gelo",
    serve: "O drink mais trabalhoso da coquetelaria clássica — mas vale cada segundo. A espuma cremosa é hipnotizante. Nasceu em New Orleans em 1888.",
    tip: "No bar original, 12 bartenders se revezavam agitando por 12 minutos! Em casa, 1-2 minutos de agitação vigorosa bastam. A água de flor de laranjeira é o ingrediente secreto — apenas 3 gotas.",
  },
  "southside": {
    glass: "Taça Coupe gelada",
    serve: "O Mojito com gin! Drink de speakeasy que ganhou popularidade nos anos 2000. Elegante e herbáceo, perfeito como aperitivo.",
    tip: "Macere a hortelã SUAVEMENTE — quer perfume, não amargor. Coe duas vezes (coqueteleira + peneira fina) para textura sedosa. Gin floral como Hendrick's funciona lindamente.",
  },
  "gin-basil-smash": {
    glass: "Copo Old Fashioned (Rocks glass) com gelo",
    serve: "Criado em 2008 por Jörg Meyer em Hamburgo. O drink moderno mais importante da última década. Fresco, herbáceo e viciante.",
    tip: "Use MUITO manjericão — 8-10 folhas grandes. Macere com força para extrair óleos. O gin London Dry encorpado funciona melhor. O aroma de manjericão fresco na decoração é obrigatório.",
  },
  "pegu-club": {
    glass: "Taça Coupe gelada",
    serve: "Originário do Pegu Club em Rangoon, Myanmar (1920s). Drink colonial britânico que influenciou toda a coquetelaria moderna.",
    tip: "Os dois tipos de bitters (Angostura + orange) são essenciais — criam complexidade. O Cointreau equilibra o gin. Audrey Saunders abriu um bar com este nome em NY em 2005.",
  },
  "white-lady": {
    glass: "Taça Coupe gelada",
    serve: "Clássico parisiense criado por Harry MacElhone no Harry's Bar em Paris (1920s). Elegante e equilibrado, perfeito para aperitivo.",
    tip: "A clara de ovo é opcional mas cria uma textura sedosa. Sem clara, o drink é mais cítrico e direto. Gin London Dry com Cointreau é a combinação perfeita.",
  },
  "monkey-gland": {
    glass: "Taça Coupe gelada",
    serve: "Nome bizarro, drink delicioso! Criado por Harry MacElhone em Paris nos anos 1920. O absinto dá um toque anisado sutil e misterioso.",
    tip: "Use POUCO absinto — 5ml é suficiente. O suco de laranja deve ser fresco. A grenadine caseira (romã) faz toda a diferença na cor e no sabor.",
  },
  "gin-gin-mule": {
    glass: "Copo alto (Highball) de 350ml ou caneca de cobre",
    serve: "Criado por Audrey Saunders no Pegu Club NYC. O melhor dos dois mundos: Moscow Mule + Mojito, mas com gin. Absolutamente refrescante.",
    tip: "A hortelã macerada dá o toque extra que diferencia do Moscow Mule simples. Use ginger beer artesanal bem picante. O gin botânico combina perfeitamente com gengibre.",
  },
  "negroni-sbagliato": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "O 'Negroni errado' — nasceu quando um bartender acidentalmente usou prosecco no lugar de gin. O erro mais delicioso da história! Viralizou no TikTok.",
    tip: "Sbagliato significa 'errado' em italiano. A efervescência do prosecco torna o drink mais leve e acessível que o Negroni clássico. Proporções iguais são sagradas.",
  },

  // ===== TEQUILA EXTRAS =====
  "tommys-margarita": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "Criada por Julio Bermejo no Tommy's Mexican Restaurant em San Francisco. A versão minimalista e perfeita da Margarita. Sem Cointreau!",
    tip: "O xarope de agave substitui o Cointreau e o açúcar — mais puro e mais mexicano. Use tequila 100% agave OBRIGATORIAMENTE. Esta é a Margarita favorita dos bartenders profissionais.",
  },
  "naked-and-famous": {
    glass: "Taça Coupe gelada",
    serve: "Criado por Joaquín Simó no Death & Co, NYC. Drink moderno com mezcal que ganhou status de clássico instantâneo. Para conhecedores.",
    tip: "As proporções iguais (partes iguais de tudo) são absolutas — assim como no Last Word, que o inspirou. O mezcal defumado com Aperol e Chartreuse cria complexidade incrível.",
  },
  "oaxaca-old-fashioned": {
    glass: "Copo Old Fashioned (Rocks glass) com cubo grande de gelo",
    serve: "Criado por Phil Ward no Death & Co, NYC. A versão mexicana do Old Fashioned que redefiniu o uso de mezcal em coquetéis. Drink de contemplação.",
    tip: "A mistura tequila + mezcal cria profundidade sem o defumado dominar. Xarope de agave é obrigatório (não xarope simples). A casca de laranja flamejada com o mezcal é experiência sensorial pura.",
  },
  "matador": {
    glass: "Copo alto (Highball) de 350ml ou taça Coupe",
    serve: "Drink tropical com tequila. O abacaxi é o protagonista. Leve, refrescante e perfeito para tardes de verão.",
    tip: "Use abacaxi fresco espremido na hora — a diferença é absurda. Tequila blanco funciona melhor que reposado aqui. Pode ser servido frozen no liquidificador para versão pool party.",
  },
  "brave-bull": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "O Black Russian mexicano — tequila no lugar da vodka. Forte, aromático e perfeito como digestivo. Drink de macho? Talvez, mas é delicioso.",
    tip: "Tequila reposado combina melhor com Kahlúa que a blanco. Um cubo grande de gelo é ideal. O twist de limão é opcional mas adiciona frescor que equilibra a doçura.",
  },
  "vampiro": {
    glass: "Copo alto (Highball) de 400ml",
    serve: "A Bloody Mary mexicana! Mais complexo e picante que o original. Drink de brunch mexicano por excelência. Serve como cura para ressaca.",
    tip: "O suco de laranja é o ingrediente surpresa que diferencia do Bloody Mary. Use tequila blanco e molho picante mexicano (Valentina ou Cholula). Sal de Tajín na borda é obrigatório.",
  },
  "juan-collins": {
    glass: "Copo Collins (alto e fino) de 350ml",
    serve: "A versão tequila do Tom Collins. Refrescante e fácil, perfeito para o dia a dia. O xarope de agave é o toque mexicano.",
    tip: "Xarope de agave em vez de xarope simples é o que diferencia este drink. Tequila blanco de qualidade é essencial. Água com gás bem gelada e efervescente finaliza perfeitamente.",
  },
  "mezcal-margarita": {
    glass: "Taça Margarita ou copo Old Fashioned com borda de sal",
    serve: "Margarita defumada para os aventureiros. O mezcal adiciona profundidade e caráter que a tequila não consegue. Drink para conhecedores.",
    tip: "Use mezcal joven (não reposado) para que o defumado não domine. Sal de maguey na borda é o toque autêntico oaxaquenho. Cointreau equilibra o defumado perfeitamente.",
  },

  // ===== WHISKY EXTRAS =====
  "gold-rush": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "Criado por T.J. Siegal no Milk & Honey, NYC. Um Whisky Sour com mel no lugar de açúcar. Simples, elegante e absolutamente perfeito.",
    tip: "O xarope de mel deve ser feito com mel de boa qualidade (1:1 mel:água quente). Bourbon com pelo menos 45% de álcool funciona melhor. Sem clara de ovo — a simplicidade é a beleza.",
  },
  "paper-plane": {
    glass: "Taça Coupe gelada",
    serve: "Criado por Sam Ross no Milk & Honey, NYC. Drink moderno com proporções iguais que virou clássico instantâneo. Nomeado pela música do M.I.A.",
    tip: "Amaro Nonino é insubstituível — não use Averna ou Fernet. As proporções iguais são absolutas. O Aperol adiciona amargor suave e cor laranja linda. Drink de bartender por excelência.",
  },
  "toronto": {
    glass: "Copo Old Fashioned (Rocks glass) com cubo grande de gelo",
    serve: "O Old Fashioned canadense com Fernet-Branca. Forte, amargo e sofisticado. Drink de bar escuro e conversas profundas.",
    tip: "O Fernet-Branca é usado em quantidade mínima — é potente demais. Rye whisky canadense é o mais autêntico. A casca de laranja flamejada equilibra o amargor.",
  },
  "vieux-carre": {
    glass: "Copo Old Fashioned (Rocks glass) com cubo grande de gelo",
    serve: "O drink do French Quarter de New Orleans. Complexo, com whisky E conhaque juntos. Para apreciadores sérios de coquetelaria clássica.",
    tip: "Bénédictine é o ingrediente que amarra tudo — herbal, mel, especiarias. Os dois tipos de bitters (Peychaud's + Angostura) são obrigatórios. Mexa com respeito — este drink tem história.",
  },
  "brown-derby": {
    glass: "Taça Coupe gelada",
    serve: "Nomeado em homenagem ao restaurante Brown Derby em Hollywood, frequentado por estrelas de cinema nos anos 1930. Drink de glamour.",
    tip: "O grapefruit fresco é obrigatório — nada de suco de caixinha. O mel equilibra o amargor do grapefruit. Bourbon suave (Maker's Mark, Bulleit) funciona melhor.",
  },
  "blood-and-sand": {
    glass: "Taça Coupe gelada",
    serve: "Nomeado pelo filme de Rudolph Valentino (1922). O único clássico com scotch e suco de laranja. Drink exótico e cinematográfico.",
    tip: "Cherry Heering é obrigatório — não use cherry brandy genérico. Use scotch blended suave (Famous Grouse, Monkey Shoulder). O suco de laranja deve ser espremido na hora. As proporções iguais são regra.",
  },
  "new-york-sour": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "O Whisky Sour com um float de vinho tinto — visualmente deslumbrante. A camada roxa sobre a espuma dourada é inesquecível.",
    tip: "Use vinho tinto seco e frutado (Malbec ou Shiraz). Flutue com colher de bar delicadamente sobre a espuma de clara. O contraste de sabores (ácido do sour + tânico do vinho) é genial.",
  },
  "whisky-smash": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "O Mint Julep descomplicado. Menos formal, mais acessível. Perfeito para quem quer hortelã + whisky sem toda a cerimônia do Julep.",
    tip: "Macere hortelã e limão juntos — os cítricos combinam perfeitamente com a hortelã. Bourbon de qualidade média funciona bem. Gelo picado é preferível a cubos grandes aqui.",
  },

  // ===== CLÁSSICOS EXTRAS =====
  "champagne-cocktail": {
    glass: "Flûte de champagne",
    serve: "O drink de celebração mais elegante que existe. Perfeito para réveillon, casamentos e momentos especiais. O cubo de açúcar com bitters é pura magia.",
    tip: "Use champagne brut de qualidade razoável (não precisa ser Dom Pérignon). O cubo de açúcar absorve os bitters e dissolve lentamente, mudando o sabor ao longo do tempo.",
  },
  "brandy-alexander": {
    glass: "Taça Coupe gelada",
    serve: "Drink de sobremesa clássico. Cremoso, doce e indulgente. Perfeito como after-dinner em noites frias. Era o drink favorito de John Lennon.",
    tip: "Use conhaque VS ou VSOP — o chocolate do crème de cacao domina. A noz-moscada ralada na hora é OBRIGATÓRIA — define o drink. O creme deve ser fresco e denso.",
  },
  "grasshopper": {
    glass: "Taça Coupe gelada",
    serve: "Drink de sobremesa verde-menta. Popular nos anos 1950-60 nos EUA. Cremoso e refrescante, perfeito após jantar italiano ou francês.",
    tip: "O verde vem do crème de menthe — use a versão verde, não a branca. O crème de cacao branco é essencial (o escuro mudaria a cor). A textura deve ser cremosa como milkshake.",
  },
  "stinger": {
    glass: "Taça Coupe gelada ou copo Old Fashioned com gelo",
    serve: "Drink digestivo clássico, popular entre a elite nova-iorquina nos anos 1950. James Bond bebe um Stinger em 'Diamonds Are Forever'.",
    tip: "Crème de menthe BRANCO é obrigatório (não o verde) — mantém a cor elegante do conhaque. Proporção 2:1 (conhaque:menthe). Pode ser servido on the rocks no verão.",
  },
  "jack-rose": {
    glass: "Taça Coupe gelada",
    serve: "Drink pré-Proibição com apple brandy. O favorito de Hemingway em 'O Sol Também Se Levanta'. Rosa bonito graças à grenadine.",
    tip: "Applejack americano ou calvados francês — ambos funcionam. A grenadine caseira (romã) é incomparavelmente melhor que a industrial. O suco de limão deve ser fresco.",
  },
  "angel-face": {
    glass: "Taça Coupe gelada",
    serve: "Drink elegante e frutado, listado no livro da IBA. O calvados dá notas de maçã que combinam perfeitamente com gin e damasco.",
    tip: "Proporções iguais são regra — não altere. O apricot brandy de qualidade (Rothman & Winter) faz toda a diferença. Use gin London Dry encorpado para equilibrar a doçura.",
  },
  "between-the-sheets": {
    glass: "Taça Coupe gelada",
    serve: "Versão do Sidecar com rum adicionado. Mais complexo e potente. O nome sugestivo faz parte do charme. Drink de after-dinner.",
    tip: "Conhaque + rum branco é uma combinação surpreendentemente harmoniosa. O Cointreau equilibra com cítrico. Limão fresco é obrigatório. Drink forte — sirva em porções menores.",
  },
  "hanky-panky": {
    glass: "Taça Coupe gelada",
    serve: "Criado por Ada Coleman, head bartender do Savoy Hotel em Londres (1903). Um dos poucos drinks clássicos criados por uma mulher. Histórico e delicioso.",
    tip: "Fernet-Branca em quantidade mínima (5ml) — é um ingrediente de acabamento, não de base. O vermute tinto doce deve ser italiano premium (Carpano Antica). Mexa, nunca agite.",
  },

  // ===== TROPICAIS EXTRAS =====
  "pornstar-martini": {
    glass: "Taça Coupe gelada + shot de prosecco ao lado",
    serve: "O drink mais vendido do mundo em 2023! Criado por Douglas Ankrah em Londres. O shot de prosecco ao lado é para alternar goles. Drink de festa elegante.",
    tip: "Use polpa de maracujá FRESCO — corte ao meio e raspe. O Passoa (licor de maracujá) é o ingrediente clássico. A meia maracujá flutuando é a assinatura visual. O prosecco é bebido entre goles.",
  },
  "swimming-pool": {
    glass: "Copo Hurricane de 400ml",
    serve: "O drink mais azul que existe! Parece literalmente uma piscina no copo. Perfeito para pool parties e festas de verão. Instagram obrigatório.",
    tip: "O Curaçao Blue é regado POR CIMA da base cremosa branca — cria o efeito piscina. Não misture! A base de coco e abacaxi fica branca, o azul fica por cima.",
  },
  "mango-tango": {
    glass: "Copo Hurricane de 400ml",
    serve: "Drink tropical frutado e cremoso. Perfeito com comida tailandesa e culinária asiática. O manga fresco faz toda a diferença.",
    tip: "Use manga madura e doce (Palmer ou Tommy Atkins). Bata até ficar super cremoso. O toque de limão é essencial para equilibrar a doçura. Pode ser feito sem álcool substituindo rum por suco de laranja.",
  },
  "tropical-storm": {
    glass: "Copo Hurricane de 450ml",
    serve: "Versão turbinada do Hurricane com maracujá e manga. Drink de festa tropical com personalidade forte. Visual exuberante.",
    tip: "Dois tipos de rum (branco e escuro) criam profundidade. Use polpas de frutas frescas, não sucos industrializados. A grenadine no fundo cria camada de cor espetacular.",
  },
  "jungle-juice": {
    glass: "Jarra grande para servir ou copos de 400ml",
    serve: "O drink de festa universitária americano! Feito em grandes quantidades para servir multidões. Forte mas com sabor frutado que disfarça o álcool.",
    tip: "ATENÇÃO: apesar de parecer suco de frutas, é extremamente forte (3 destilados). Sirva com responsabilidade. Faça em jarra e deixe na geladeira por 1 hora antes.",
  },
  "tiki-torch": {
    glass: "Caneca Tiki de cerâmica de 400ml+",
    serve: "Drink Tiki elaborado com 3 tipos de rum. A experiência completa inclui caneca temática, decoração exótica e tocha ao fundo. Drink de aventura.",
    tip: "O dash de absinto é o toque final que adiciona complexidade herbal. Use folha de abacaxi como decoração — corte em forma de chama para o visual 'torch'. Limite: um por pessoa.",
  },
  "lava-flow": {
    glass: "Copo Hurricane de 400ml",
    serve: "O drink mais fotogênico do Havaí! O morango vermelho escorrendo sobre a base branca de coco parece lava. Obrigatório nas praias de Maui.",
    tip: "Bata a base branca (rum, coco, abacaxi) separadamente. Bata os morangos separadamente. Despeje a base no copo e adicione morango POR CIMA para o efeito lava escorrendo.",
  },
  "caribbean-sunset": {
    glass: "Copo alto (Highball) transparente de 350ml",
    serve: "Visual espetacular com gradiente de cores como um pôr do sol caribenho. Doce, tropical e irresistível. Drink de resort de praia.",
    tip: "A grenadine é despejada pela lateral e afunda criando o degradê sunset. NÃO mexa! Deixe o convidado apreciar o visual antes de misturar. Rum de coco Malibu funciona perfeitamente.",
  },

  // ===== NÃO ALCOÓLICOS EXTRAS =====
  "nojito": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Mojito de maracujá sem álcool. Toda a experiência tropical sem o rum. Perfeito para gestantes, motoristas e quem quer sabor sem álcool.",
    tip: "O maracujá adiciona complexidade que compensa a ausência do rum. Macere hortelã suavemente. Água com gás bem gelada finaliza. Xarope de maracujá caseiro é infinitamente melhor.",
  },
  "cinderella": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "O drink sem álcool para festas de gala. Elegante, equilibrado e com nome de princesa. Perfeito quando você quer um drink sofisticado sem álcool.",
    tip: "Os três sucos (laranja, abacaxi, limão) criam equilíbrio perfeito. A grenadine dá cor rosa encantadora. Complete com ginger ale para efervescência. Decore como um drink real.",
  },
  "safe-sex-on-beach": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "Toda a diversão do Sex on the Beach, zero álcool. O suco de pêssego substitui o licor perfeitamente. Ninguém vai perceber a diferença!",
    tip: "Use néctar de pêssego de boa qualidade para substituir o licor. Cranberry natural + laranja fresco são essenciais. Decore igual ao original — a experiência visual importa mesmo sem álcool.",
  },
  "roy-rogers": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "A versão masculina do Shirley Temple, batizada pelo cowboy das telas. Coca-cola + grenadine = nostalgia pura. Perfeito para crianças e adultos.",
    tip: "Coca-cola mexicana (açúcar de cana) é superior. A grenadine caseira dá outra dimensão de sabor. Cereja maraschino é obrigatória. Para adultos, adicione uma bola de sorvete de baunilha!",
  },
  "italian-soda": {
    glass: "Copo alto (Highball) de 400ml",
    serve: "Popular em cafeterias italianas e americanas. Infinitas variações de sabor — framboesa, lavanda, baunilha, caramelo. Refrescante e personalizável.",
    tip: "Use xaropes italianos de qualidade (Torani, Monin). A versão com creme de leite (Italian Cream Soda) é irresistível. Framboesa + água com gás é a combinação mais popular.",
  },
  "cranberry-spritzer": {
    glass: "Copo alto (Highball) de 350ml ou taça de vinho",
    serve: "Leve, refrescante e sofisticado. Parece vinho rosé espumante. Perfeito para eventos onde você quer algo elegante sem álcool.",
    tip: "Use cranberry natural (não o adoçado). O limão fresco equilibra a acidez. Água com gás bem gelada e efervescente. Sirva em taça de vinho para aparência mais sofisticada.",
  },
  "cucumber-cooler": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "O drink mais refrescante sem álcool. O pepino combinado com hortelã e limão é revigorante. Perfeito para spa days e detox.",
    tip: "Macere o pepino suavemente para extrair sabor sem turvar demais. Hortelã fresca batida nas mãos antes de decorar. Pode adicionar aloe vera para versão 'spa deluxe'.",
  },
  "mango-lassi": {
    glass: "Copo alto de 400ml ou mason jar",
    serve: "Bebida tradicional indiana, perfeita com curry e comida apimentada. O iogurte acalma o paladar após pratos picantes. Nutritivo e delicioso.",
    tip: "Use manga Alphonso (considerada a melhor do mundo) se encontrar. Iogurte integral e denso dá melhor textura. O cardamomo é sutil mas essencial — rale na hora. Pode ser servido gelado ou em temperatura ambiente.",
  },

  // ===== SHOTS EXTRAS =====
  "mind-eraser": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml com canudo",
    serve: "Não é um shot tradicional — é bebido com canudo de uma vez! A experiência é beber as 3 camadas simultaneamente. Drink de festa americano.",
    tip: "As camadas devem ficar separadas: Kahlúa (pesado) embaixo, vodka no meio, água com gás (leve) em cima. O canudo chega até o fundo — beba tudo de uma vez sem parar.",
  },
  "buttery-nipple": {
    glass: "Shot glass de 30ml transparente (para ver as camadas)",
    serve: "Shot doce e suave com apenas 2 ingredientes. Perfeito para quem não gosta de shots fortes. As 2 camadas são lindas no copo.",
    tip: "O Butterscotch Schnapps é mais denso, vai embaixo. Flutue o Baileys com costas de colher. A ordem importa! Beba de uma vez para misturar os sabores.",
  },
  "washington-apple": {
    glass: "Shot glass de 60ml ou taça martini pequena",
    serve: "Shot sofisticado que pode ser servido como mini coquetel. O sabor de maçã verde com cranberry é irresistível. Favorito em festas americanas.",
    tip: "Crown Royal canadense é o whisky clássico para este shot, mas qualquer bom whisky suave funciona. Sirva bem gelado — agite com gelo e coe. O cranberry dá a cor rosada linda.",
  },
  "green-tea-shot": {
    glass: "Shot glass de 45ml",
    serve: "Apesar do nome, NÃO tem chá verde! O apelido vem da cor e do sabor suave. O shot mais 'bebível' que existe — doce e suave.",
    tip: "Jameson é o whisky clássico. O licor de pêssego + sour mix cria um sabor que realmente lembra chá verde. O splash de sprite no final adiciona efervescência sutil.",
  },
  "surfer-on-acid": {
    glass: "Shot glass de 60ml",
    serve: "Jäger + Malibu + abacaxi parece estranho, mas é surpreendentemente bom. Tropical com toque herbal. Drink de praia que virou shot cult.",
    tip: "O Jägermeister deve estar gelado (direto do freezer). O suco de abacaxi suaviza o herbal do Jäger e o coco do Malibu amarra tudo. Agite com gelo para servir gelado.",
  },

  // ===== EXÓTICOS EXTRAS =====
  "hugo-spritz": {
    glass: "Taça de vinho grande (balão) com bastante gelo",
    serve: "O rival do Aperol Spritz! Nasceu no Tirol do Sul (Itália/Áustria). Mais leve, floral e refrescante. O drink do verão europeu.",
    tip: "Xarope de flor de sabugueiro (elderflower) é o ingrediente estrela — St-Germain é o mais famoso. Use prosecco DOC. A hortelã fresca é obrigatória. Mais leve e menos amargo que o Aperol Spritz.",
  },
  "carajillo": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml ou copo de café",
    serve: "Tradição espanhola e mexicana — café + licor. O Licor 43 (com 43 ingredientes!) é a escolha mais popular no México. Perfeito como after-dinner.",
    tip: "O espresso DEVE ser fresco e quente. Licor 43 (Cuarenta y Tres) é a escolha clássica mexicana — notas de baunilha, cítricos e canela. Sirva com gelo para contraste de temperatura.",
  },
  "mezcal-negroni": {
    glass: "Copo Old Fashioned (Rocks glass) de 250ml",
    serve: "O Negroni defumado! O mezcal adiciona uma dimensão completamente nova ao clássico italiano. Drink para aventureiros e amantes de mezcal.",
    tip: "Use mezcal joven (não reposado) para que o defumado não domine. As proporções 1:1:1 são mantidas. A casca de laranja flamejada combina perfeitamente com a fumaça do mezcal.",
  },
  "canchanchara": {
    glass: "Copo de barro tradicional ou copo Old Fashioned",
    serve: "O cocktail mais antigo de Cuba! Criado por guerrilheiros durante as guerras de independência. Mel + aguardente + limão = simplicidade guerrilheira.",
    tip: "Tradicionalmente feito com aguardente de cana (não rum). O mel deve ser diluído com o suco de limão antes de adicionar o destilado. Sirva sem gelo (tradição) ou com 1 cubo.",
  },
  "paloma-italiana": {
    glass: "Copo alto (Highball) de 350ml",
    serve: "O drink mais simples do Campari — apenas 2 ingredientes! Criado em homenagem a Giuseppe Garibaldi. O suco de laranja 'fluffy' é a assinatura.",
    tip: "O segredo é o suco de laranja FLUFFY — bata no liquidificador com ar para criar textura aerada. Campari gelado + laranja fluffy = combinação perfeita. Simples e genial.",
  },
  "espresso-romano": {
    glass: "Taça Martini gelada",
    serve: "Variação italiana do Espresso Martini com amaretto. Notas de amêndoa combinam perfeitamente com café. After-dinner sofisticado.",
    tip: "Amaretto di Saronno é a escolha clássica. O espresso deve ser forte e fresco. A vodka é o 'motor' que equilibra a doçura. Agite vigorosamente para a crema perfeita.",
  },
  "moscow-mule-thai": {
    glass: "Caneca de cobre (Moscow Mule mug)",
    serve: "Moscow Mule com toque tailandês — lemongrass e manjericão asiático elevam o drink a outro nível. Perfeito com comida asiática.",
    tip: "O xarope de lemongrass é fácil: ferva lemongrass com açúcar e água. O manjericão tailandês (diferente do italiano) tem notas de anis. Ginger beer artesanal bem picante é essencial.",
  },
};

export function getChefTip(drinkId: string): ChefTip | undefined {
  return chefTips[drinkId];
}
