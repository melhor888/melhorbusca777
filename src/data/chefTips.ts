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

  // ===== CHAMPAGNE & ESPUMANTES =====
  "mimosa": { glass: "Taça flûte de champagne", serve: "O brunch clássico por excelência. Sempre com suco fresco e champagne gelado.", tip: "Use suco de laranja espremido na hora — nunca de caixinha. A proporção ideal é 1:1. Sempre adicione o champagne por último." },
  "bellini": { glass: "Taça flûte de champagne", serve: "Elegante e refrescante, criado no Harry's Bar em Veneza. Perfeito para celebrações.", tip: "Use pêssegos brancos maduros para o purê — a textura aveludada é essencial. O prosecco deve estar bem gelado." },
  "kir-royal": { glass: "Taça flûte de champagne", serve: "Sofisticado e simples. Perfeito como aperitivo em jantares formais.", tip: "Use crème de cassis de qualidade — Dijon é a origem clássica. A proporção é 1:8 (cassis:champagne)." },
  "rossini": { glass: "Taça flûte de champagne", serve: "Variação do Bellini com morangos. Ideal para festas e comemorações.", tip: "Use morangos bem maduros e doces. Passe por peneira fina para remover sementes. Prosecco extra-seco combina melhor." },
  "french-martini": { glass: "Taça Martini gelada", serve: "Elegante com espuma natural do abacaxi. Perfeito para happy hours sofisticados.", tip: "Agite vigorosamente — o suco de abacaxi cria uma espuma natural linda. Use Chambord legítimo para o sabor autêntico." },
  "spritz-veneziano": { glass: "Taça de vinho grande com gelo", serve: "O aperitivo italiano por excelência. Perfeito para tardes ao ar livre.", tip: "A proporção clássica é 3-2-1 (prosecco-Aperol-soda). Nunca use gelo demais — dilui rápido." },
  "death-in-afternoon": { glass: "Taça flûte de champagne", serve: "Drink criado por Hemingway. Forte e misterioso. Apenas para os corajosos.", tip: "O absinto deve ser de qualidade. A reação com o champagne cria um efeito opalescente hipnotizante. Limite-se a um." },
  "limoncello-spritz": { glass: "Taça de vinho grande com gelo", serve: "O sabor da Costa Amalfitana em um copo. Refrescante e aromático.", tip: "Use limoncello artesanal feito com limões sicilianos. Prosecco extra-dry equilibra a doçura do licor." },
  "champagne-margarita": { glass: "Taça coupe com borda de sal", serve: "Fusão de elegância francesa com vibração mexicana. Para ocasiões especiais.", tip: "Use champagne brut para equilibrar a acidez do limão. A borda de sal fino é essencial." },
  "elderflower-spritz": { glass: "Taça de vinho grande com gelo", serve: "Floral e delicado. Perfeito para jardins e eventos ao ar livre.", tip: "St-Germain é o licor clássico de elderflower. O pepino como decoração realça as notas florais." },
  "black-velvet": { glass: "Taça flûte de champagne", serve: "Combinação inusitada de stout e champagne. Criado em 1861 no luto do Príncipe Albert.", tip: "Despeje simultaneamente para criar camadas. A stout deve estar em temperatura ambiente para melhor textura." },
  "old-cuban": { glass: "Taça coupe gelada", serve: "Mojito elevado com champagne. Sofisticado e efervescente.", tip: "Macere a hortelã suavemente — nunca triture. O rum envelhecido dá complexidade. O champagne entra por último." },
  "seelbach": { glass: "Taça flûte de champagne", serve: "Redescoberto no Hotel Seelbach em Louisville. Rico e complexo.", tip: "Os 7 dashes de cada bitter são essenciais — não reduza. O bourbon e Cointreau criam profundidade antes do champagne." },
  "diamond-fizz": { glass: "Taça flûte de champagne", serve: "Versão luxuosa do Gin Fizz. Perfeito para celebrações.", tip: "Agite gin, limão e xarope primeiro, depois complete com champagne na taça para manter as borbulhas." },
  "prince-of-wales": { glass: "Taça flûte de champagne", serve: "Clássico da realeza britânica. Elegante e equilibrado.", tip: "O Curaçao de laranja adiciona cor e aroma. Use champagne brut de boa qualidade." },
  "champagne-julep": { glass: "Copo julep (prata) ou copo alto", serve: "Mint Julep para ocasiões elegantes. Perfeito para o Kentucky Derby.", tip: "Macere a hortelã delicadamente. O bourbon e champagne devem ser adicionados separadamente." },

  // ===== CAFÉ & LICORES =====
  "affogato-cocktail": { glass: "Copo de vidro resistente ao calor", serve: "Sobremesa e drink em um. Perfeito para encerrar um jantar.", tip: "O sorvete deve ser de boa qualidade. Despeje o espresso quente na hora de servir — o contraste térmico é mágico." },
  "carajillo-classico": { glass: "Copo Old Fashioned de vidro grosso", serve: "O after-dinner mexicano por excelência. Simples e irresistível.", tip: "O segredo é o Licor 43 — com suas 43 ervas e especiarias. O espresso deve ser forte e fresco." },
  "amaretto-sour": { glass: "Copo Old Fashioned (Rocks glass)", serve: "O sour mais acessível e amado. Perfeito para quem está começando a apreciar cocktails.", tip: "A adição de bourbon eleva o drink de doce para complexo. A clara de ovo cria uma textura sedosa irresistível." },
  "frangelico-coffee": { glass: "Caneca de vidro transparente resistente ao calor", serve: "Café com toque de avelã. Perfeito para noites frias ou após o jantar.", tip: "Use Frangelico autêntico — o sabor de avelã tostada é inconfundível. Chantilly fresquinho, nunca de lata." },
  "baileys-ice": { glass: "Copo Old Fashioned (Rocks glass)", serve: "Simples e indulgente. Perfeito para quem ama drinks cremosos e doces.", tip: "Use gelo grande para diluir lentamente. A calda de chocolate na parede do copo cria um visual irresistível." },
  "cafe-mexicano": { glass: "Caneca de cerâmica ou vidro", serve: "Café com alma mexicana. Aquece o corpo e a alma.", tip: "A combinação tequila + café é surpreendente. Canela e chocolate mexicano são os segredos." },
  "grasshopper-licor": { glass: "Taça coupe gelada", serve: "Drink de sobremesa clássico dos anos 1950. Verde, cremoso e refrescante.", tip: "As proporções iguais são essenciais. Use crème de menthe fresco — a cor verde deve ser vibrante." },
  "disaronno-fizz": { glass: "Copo alto (Highball) de 300ml", serve: "Leve e refrescante com notas de amêndoa. Perfeito para tardes quentes.", tip: "Disaronno é o amaretto original de Saronno. A água com gás deve ser bem gelada e adicionada por último." },
  "kahlua-espresso": { glass: "Taça Martini gelada", serve: "Versão rica do Espresso Martini. Para amantes de café.", tip: "O Kahlúa já é doce — ajuste o espresso para ser mais forte e equilibrar. Agite vigorosamente para a crema." },
  "chambord-royale": { glass: "Taça flûte de champagne", serve: "Luxuoso e festivo. Perfeito para brindes em celebrações.", tip: "Chambord é feito com framboesas negras francesas. Adicione por último para a cor se espalhar gradualmente." },

  // ===== NOVAS RECEITAS =====
  "blue-cosmo": { glass: "Taça Martini gelada", serve: "Versão visualmente impactante do Cosmopolitan. Ideal para festas temáticas.", tip: "O Blue Curaçao dá a cor — use pouco para não ficar muito doce. Suco de cranberry branco mantém a transparência azul." },
  "watermelon-vodka": { glass: "Copo alto (Highball) de 350ml", serve: "Refrescante e perfeito para dias de calor. Leve e frutado.", tip: "Suco de melancia fresco faz toda a diferença. Coe para remover fibras. Adicione hortelã para aroma extra." },
  "banana-daiquiri": { glass: "Taça coupe ou copo hurricane", serve: "Drink tropical cremoso e doce. Perfeito para festas na piscina.", tip: "Use banana bem madura — mais madura = mais doce e cremosa. O licor de banana intensifica o sabor sem ser artificial." },
  "spiced-rum-punch": { glass: "Copo alto (Highball) de 350ml", serve: "Punch caribenho com especiarias. Ideal para festas e churrascos.", tip: "Captain Morgan é o rum especiado clássico. A canela polvilhada por cima libera aroma a cada gole." },
  "elderflower-gin": { glass: "Copo alto (Highball) de 350ml", serve: "Floral e elegante. Perfeito para eventos ao ar livre.", tip: "St-Germain é o licor de elderflower mais famoso. O pepino como decoração realça as notas florais do drink." },
  "pink-gin-tonic": { glass: "Taça balão grande com gelo", serve: "A versão rosé do G&T. Visual lindo e sabor suave.", tip: "Use Pink Gin de qualidade (Gordon's ou Beefeater Pink). Morangos e pimenta rosa são a decoração ideal." },
  "spicy-margarita": { glass: "Copo Old Fashioned com borda de sal e tajín", serve: "Para quem gosta de um toque picante. Drink de personalidade.", tip: "Macere o jalapeño por apenas 5-10 segundos — fica picante rápido. Tajín na borda equilibra o calor com acidez." },
  "mezcal-paloma": { glass: "Copo alto com borda de sal", serve: "A Paloma com toque defumado. Autenticamente mexicana.", tip: "O mezcal dá profundidade defumada. Use soda de grapefruit Jarritos para autenticidade mexicana." },
  "whisky-ginger": { glass: "Copo alto (Highball) de 350ml", serve: "Simples, refrescante e sempre bem-vindo. O casual drink perfeito.", tip: "Bourbon combina melhor que scotch com ginger ale. Use ginger ale premium para mais complexidade." },
  "kentucky-mule": { glass: "Caneca de cobre (Moscow Mule mug)", serve: "Moscow Mule com bourbon. O melhor dos dois mundos.", tip: "O bourbon traz notas de caramelo e baunilha que combinam com o gengibre. Ginger beer artesanal é essencial." },
  "sunset-lemonade": { glass: "Copo alto (Highball) de 350ml", serve: "Visual deslumbrante com camadas de cor. Perfeito para fotos.", tip: "A grenadine deve ser adicionada por último, lentamente, para criar o efeito sunset gradual." },
  "tropical-punch-sa": { glass: "Copo alto ou jarra para compartilhar", serve: "Tropical e refrescante sem álcool. Ideal para todos os convidados.", tip: "O xarope de gengibre dá um toque especial. Use sucos naturais — nunca industrializados." },
  "dirty-martini": { glass: "Taça Martini clássica gelada", serve: "Salgado e sofisticado. O favorito dos que gostam de sabores intensos.", tip: "Use salmoura de azeitonas de qualidade — é ela que faz o drink. Azeitonas Castelvetrano são premium." },
  "vodka-gimlet": { glass: "Taça coupe gelada", serve: "Elegante na sua simplicidade. Clássico de bar.", tip: "Suco de limão FRESCO é inegociável. A proporção 2:1 (vodka:limão) é o padrão." },
  "fuzzy-navel": { glass: "Copo alto (Highball) de 350ml", serve: "Doce, frutado e fácil de beber. Ótimo para iniciantes.", tip: "Peach Schnapps de boa qualidade faz diferença. Suco de laranja espremido na hora eleva o drink." },
  "electric-lemonade": { glass: "Copo alto (Highball) de 350ml", serve: "Colorido e divertido. Visual impactante azul elétrico.", tip: "O Curaçao Blue é só para cor — não exagere ou fica muito doce. Sprite dá efervescência perfeita." },
  "john-daly": { glass: "Copo alto (Highball) de 350ml", serve: "Versão alcoólica do Arnold Palmer. Refrescante para dias quentes.", tip: "Use chá gelado sem açúcar e limonada caseira. O equilíbrio entre os dois é o segredo." },
  "lychee-martini": { glass: "Taça Martini gelada", serve: "Exótico e perfumado. Popular na Ásia e ganhando o mundo.", tip: "Use licor de lichia Soho ou similar. A lichia no fundo da taça é funcional — come-se ao final." },
  "cucumber-mule": { glass: "Caneca de cobre (Moscow Mule mug)", serve: "Moscow Mule refrescante com pepino. Spa em forma de drink.", tip: "A fita de pepino no copo é a decoração perfeita. Use um descascador para fatias longas e finas." },
  "frozen-sex-beach": { glass: "Copo hurricane", serve: "Versão frozen do clássico. Perfeito para pool parties.", tip: "Bata bem no liquidificador para textura cremosa. Não exagere no gelo — senão fica aguado." },
  "el-presidente": { glass: "Taça coupe gelada", serve: "Clássico cubano pré-revolução. Elegante e complexo.", tip: "Use rum cubano de qualidade. O vermute seco e o Curaçao de laranja criam camadas de sabor sofisticadas." },
  "mary-pickford": { glass: "Taça coupe gelada", serve: "Nomeado em homenagem à atriz. Doce, frutado e elegante.", tip: "A grenadine é sutil — apenas uma lavagem. O maraschino dá complexidade sem dominar o abacaxi." },
  "three-dots-dash": { glass: "Caneca tiki com gelo picado", serve: "Drink tiki clássico de Trader Vic. As 3 cerejas e 1 abacaxi representam V (vitória) em Morse.", tip: "A combinação de dois tipos de rum é essencial. O falernum dá notas de especiarias. Gelo picado é obrigatório." },
  "saturn": { glass: "Taça coupe gelada", serve: "Drink tiki elegante em taça. Tropical com notas de amêndoa.", tip: "O orgeat (xarope de amêndoa) e o falernum são essenciais — não substitua. Maracujá fresco é insubstituível." },
  "cable-car": { glass: "Taça coupe com borda de açúcar e canela", serve: "Nomeado em homenagem aos bondes de São Francisco. Especiado e elegante.", tip: "A borda de açúcar com canela é a assinatura. Use rum especiado Captain Morgan para autenticidade." },
  "queens-park-swizzle": { glass: "Copo alto (Highball) com gelo picado", serve: "Mojito elevado com rum escuro. Rico e refrescante.", tip: "Swizzle de verdade com um swizzle stick — gire entre as palmas até o copo gelar. Bitters no topo são essenciais." },
  "twelve-mile-limit": { glass: "Taça coupe gelada", serve: "Drink da era da Lei Seca. Três destilados em harmonia.", tip: "Cada destilado contribui: rum leva leveza, whisky dá corpo, conhaque traz elegância. Proporções iguais." },
  "fog-cutter": { glass: "Copo alto tiki com gelo", serve: "Drink tiki forte com três destilados. O nome diz tudo.", tip: "O sherry flutuado no topo é o diferencial — nunca misture. O orgeat une todos os sabores." },
  "martinez": { glass: "Taça coupe gelada", serve: "Considerado o ancestral do Martini. Histórico e complexo.", tip: "Use gin Old Tom (mais doce que London Dry). O maraschino e o vermute tinto criam profundidade histórica." },
  "pink-lady": { glass: "Taça coupe gelada", serve: "Clássico da era Art Deco. Elegante e rosado.", tip: "A clara de ovo cria a textura sedosa. A grenadine dá a cor rosa sutil. Agite vigorosamente." },
  "jasmine": { glass: "Taça coupe gelada", serve: "Drink moderno com amargor equilibrado. Para paladares sofisticados.", tip: "O Campari é usado em pequena dose — dá cor e amargor sutil. O Cointreau equilibra com doçura cítrica." },
  "casino": { glass: "Taça Martini gelada", serve: "Clássico pré-proibição. Elegante e cítrico.", tip: "Gin Old Tom traz doçura natural. O maraschino deve ser Luxardo para autenticidade. Orange bitters são essenciais." },
  "tuxedo": { glass: "Taça Martini gelada", serve: "Drink formal para ocasiões black-tie. O nome diz tudo.", tip: "O absinto é em dash — muito pouco. O maraschino adiciona complexidade. Mexa, nunca agite." },
  "bijou": { glass: "Taça coupe gelada", serve: "Nome significa 'joia' em francês. Cada ingrediente representa uma gema.", tip: "Chartreuse verde é forte — as proporções iguais são importantes. Cada ingrediente brilha sem dominar." },
  "bronx": { glass: "Taça coupe gelada", serve: "Clássico nova-iorquino pré-proibição. Frutado e equilibrado.", tip: "Use suco de laranja FRESCO. Os dois vermutes (seco e doce) criam complexidade. Agite com gelo." },
  "army-navy": { glass: "Taça coupe gelada", serve: "Clássico militar americano. Refrescante com notas de amêndoa.", tip: "O orgeat é essencial — dá notas de amêndoa que harmonizam com o gin. Angostura adiciona especiarias." },
  "rosita": { glass: "Copo Old Fashioned com gelo", serve: "Negroni mexicano com tequila. Complexo e equilibrado.", tip: "Tequila reposado traz notas de carvalho. Os dois vermutes criam camadas. Mexa, nunca agite." },
  "mexican-firing-squad": { glass: "Copo alto com gelo", serve: "Drink festivo e colorido. Perfeito para festas mexicanas.", tip: "A grenadine dá cor e doçura. Os bitters de Angostura adicionam complexidade. Use tequila blanco." },
  "tequila-mockingbird": { glass: "Taça coupe gelada", serve: "Verde, refrescante e com toque de menta. Visual impactante.", tip: "Crème de menthe verde dá a cor e o sabor mentolado. Use pouco para não dominar a tequila." },
  "paloma-rosa": { glass: "Copo alto com borda de sal rosa", serve: "Paloma com grapefruit rosa. Visual e sabor femininos.", tip: "Sal rosa do Himalaia na borda é a assinatura. Xarope de agave equilibra a acidez do grapefruit." },
  "frozen-matador": { glass: "Copo hurricane", serve: "Frozen tropical com tequila e abacaxi. Refrescante.", tip: "Abacaxi fresco faz diferença enorme. Bata bem para textura cremosa sem pedaços." },
  "tequila-old-fashioned": { glass: "Copo Old Fashioned com gelo grande", serve: "Old Fashioned com alma mexicana. Para apreciadores de tequila.", tip: "Tequila añejo é obrigatório — as notas de carvalho são essenciais. Agave substitui o xarope simples." },
  "chimayo": { glass: "Copo Old Fashioned com gelo", serve: "Drink do Novo México com sidra de maçã. Sazonal e único.", tip: "Use sidra de maçã não filtrada — turbidez é desejável. O crème de cassis flutuado cria cor e sabor." },
  "sangrita": { glass: "Copo de tequila + copo de sangrita", serve: "Ritual mexicano: alterne goles de tequila e sangrita. Tradicional.", tip: "A sangrita NÃO é Bloody Mary — é mais leve e cítrica. A pimenta deve ser sutil. Sirva os dois bem gelados." },
  "hot-toddy": { glass: "Caneca de vidro resistente ao calor ou xícara", serve: "O remédio caseiro elegante. Perfeito para noites frias e resfriados.", tip: "Dissolva o mel na água quente ANTES de adicionar o whisky. As especiarias inteiras liberam sabor gradualmente." },
  "ward-eight": { glass: "Taça coupe gelada", serve: "Clássico de Boston de 1898. Político e sofisticado.", tip: "A combinação de dois cítricos (limão e laranja) com grenadine cria equilíbrio perfeito." },
  "bobby-burns": { glass: "Taça coupe gelada", serve: "Homenagem ao poeta escocês Robert Burns. Sofisticado.", tip: "O Bénédictine em pequena dose adiciona notas herbais e de mel que elevam o scotch." },
  "tipperary": { glass: "Taça coupe gelada", serve: "Cocktail irlandês clássico. Herbáceo e complexo.", tip: "A Chartreuse verde é intensa — 15ml é suficiente. O Irish whisky é mais suave que o scotch." },
  "lions-tail": { glass: "Taça coupe gelada", serve: "Clássico redescoberto com pimento dram. Exótico.", tip: "O pimento dram (licor de pimenta da Jamaica) é o diferencial — dá notas de especiarias caribenhas." },
  "algonquin": { glass: "Taça coupe gelada", serve: "Nomeado em homenagem ao famoso hotel. Leve e frutado.", tip: "O abacaxi suaviza o rye whisky. Use suco fresco e vermute seco de qualidade." },
  "bentons-old-fashioned": { glass: "Copo Old Fashioned com gelo grande", serve: "Old Fashioned com bourbon infusionado em bacon. Avant-garde.", tip: "Fat-wash: derreta bacon no bourbon, congele e retire a gordura. O resultado é bourbon com aroma defumado sutil." },
  "camerons-kick": { glass: "Taça coupe gelada", serve: "União de scotch e Irish whisky. Dois mundos em um copo.", tip: "O orgeat une os dois whiskies. Proporções iguais dos dois whiskeys é a chave." },
  "bamboo": { glass: "Taça coupe gelada", serve: "Cocktail de baixo teor alcoólico. Elegante para aperitivo.", tip: "Sem destilados fortes — apenas sherry e vermute. Os bitters são essenciais para complexidade." },
  "adonis": { glass: "Taça coupe gelada", serve: "Clássico de baixa graduação. Sofisticado e acessível.", tip: "Sherry fino de qualidade é obrigatório. O vermute doce equilibra a secura do sherry." },
  "trinidad-sour": { glass: "Taça coupe gelada", serve: "Drink audacioso com ANGOSTURA como base. Para paladares aventureiros.", tip: "45ml de Angostura bitters parece loucura, mas o orgeat e o limão equilibram perfeitamente. Confie na receita." },
  "suffering-bastard": { glass: "Copo alto (Highball) com gelo", serve: "Criado no Shepheard's Hotel no Cairo. Drink anti-ressaca.", tip: "A combinação bourbon + gin pode parecer estranha, mas funciona. A ginger beer une tudo." },
  "airmail": { glass: "Taça flûte de champagne", serve: "Daiquiri encontra champagne. Elegante e efervescente.", tip: "O mel deve ser diluído antes — mel puro não se mistura bem frio. O champagne entra por último." },
  "melon-ball-cocktail": { glass: "Copo alto (Highball)", serve: "Doce, verde e divertido. Popular nos anos 80 e voltando.", tip: "Midori é o licor de melão original japonês. Bolas de melão honeydew como decoração são elegantes." },
  "blue-hawaii": { glass: "Copo hurricane", serve: "Tiki clássico azul havaiano. Visual tropical e festivo.", tip: "A cor azul vem do Curaçao Blue. Abacaxi fresco e a decoração tiki fazem toda a diferença." },
  "scorpion-bowl": { glass: "Scorpion bowl para compartilhar", serve: "Drink tiki para grupo. Servido com canudos longos.", tip: "É para compartilhar — nunca beba sozinho (é forte demais!). O orgeat une tudo. Fogo no centro é opcional." },
  "test-pilot": { glass: "Taça coupe gelada", serve: "Drink tiki de aviação. Complexo e forte.", tip: "Dois tipos de rum criam profundidade. O falernum dá notas de especiarias caribenhas." },
  "cobras-fang": { glass: "Copo tiki com gelo picado", serve: "Drink tiki exótico de Don the Beachcomber. Para aventureiros.", tip: "O absinto flutuado é a 'mordida da cobra' — dá um toque herbal. Rum jamaicano é obrigatório." },
  "frozen-banana-colada": { glass: "Copo hurricane", serve: "Piña Colada com banana. Cremoso e tropical.", tip: "Banana congelada cria textura mais cremosa sem tanto gelo. Rum de coco intensifica o sabor tropical." },
  "espresso-old-fashioned": { glass: "Copo Old Fashioned com gelo grande", serve: "Old Fashioned para amantes de café. Rich e complexo.", tip: "Use espresso resfriado, nunca quente. O Kahlúa e o demerara criam profundidade de sabor." },
  "coffee-negroni": { glass: "Copo Old Fashioned com gelo", serve: "Negroni com twist de café. Amargo, herbáceo e cafeinado.", tip: "Infusione vermute com café moído por 1 hora. Não exagere — café demais domina o Campari." },
  "after-eight": { glass: "Taça Martini gelada", serve: "Drink de sobremesa mentolado. Como comer um After Eight líquido.", tip: "Crème de menthe fresco é essencial. As raspas de chocolate devem ser de chocolate amargo." },
  "mocha-martini": { glass: "Taça Martini com decoração de chocolate", serve: "Para chocólatras. Rico, cremoso e cafeinado.", tip: "A calda de chocolate na taça cria um visual irresistível. Cacau em pó amargo equilibra a doçura." },
  "midnight-stinger": { glass: "Taça Martini gelada", serve: "Dark e mentolado. Drink de sobremesa sofisticado.", tip: "Use crème de menthe escuro (não verde) para cor e sabor mais intensos." },
  "irish-cream-coffee": { glass: "Caneca de vidro transparente", serve: "Café cremoso e indulgente. Comfort drink perfeito.", tip: "Baileys deve ser adicionado antes do café para misturar melhor. Chantilly fresco no topo." },

  // ===== BATCH 5+ DRINKS =====
  "alabama-slammer": { glass: "Copo alto (Highball)", serve: "Drink doce e frutado dos anos 80. Fácil de beber.", tip: "Southern Comfort é essencial — não substitua. A grenadine é só um splash para cor." },
  "cape-cod": { glass: "Copo alto (Highball)", serve: "Simple e clássico. Vodka com cranberry. Refrescante.", tip: "Use suco de cranberry 100% natural — sem açúcar adicionado. A rodela de limão é obrigatória." },
  "pomegranate-martini": { glass: "Taça Martini gelada", serve: "Antioxidante e elegante. Cor rubi profunda.", tip: "Suco de romã POM Wonderful é o padrão. Sementes de romã no fundo da taça são funcionais e bonitas." },
  "lavender-martini": { glass: "Taça Martini gelada", serve: "Floral e sofisticado. Para eventos elegantes.", tip: "Faça o xarope de lavanda em casa: ferva lavanda seca com açúcar e água. O ramo seco como decoração é perfeito." },
  "watermelon-vodka-smash": { glass: "Copo Old Fashioned com gelo", serve: "Refrescante de verão. Frutado e leve.", tip: "Melancia bem madura = mais doce e saborosa. Macere bem para extrair todo o suco." },
  "cucumber-gin-fizz": { glass: "Copo alto (Highball)", serve: "Refrescante como um dia no spa. Leve e elegante.", tip: "Fita de pepino dentro do copo é a decoração perfeita. Use um descascador para fatias longas." },
  "rosemary-gin-tonic": { glass: "Taça copa (balão) grande", serve: "G&T herbáceo e aromático. O aroma de alecrim é inebriante.", tip: "Flambe levemente o alecrim antes de colocar — libera óleos essenciais e aroma incrível." },
  "elderflower-collins": { glass: "Copo alto (Highball)", serve: "Collins floral e delicado. Perfeito para primavera.", tip: "St-Germain é a estrela. Flores comestíveis como decoração elevam a apresentação." },
  "floradora": { glass: "Copo alto (Highball)", serve: "Drink vitoriano com framboesa e gengibre. Encantador.", tip: "Xarope de framboesa caseiro é infinitamente superior. Ginger ale premium faz diferença." },
  "elderflower-gimlet": { glass: "Taça coupe gelada", serve: "Gimlet floral e sofisticado. Leve e perfumado.", tip: "A proporção gin:elderflower deve favorecer o gin. Flor comestível como decoração é obrigatória." },
  "raspberry-gin-fizz": { glass: "Copo alto (Highball)", serve: "Fizz frutado com cor rosa vibrante. Festivo e elegante.", tip: "Macere as framboesas bem. Dry shake com clara cria textura sedosa. Coe duplo para remover sementes." },
  "blood-orange-margarita": { glass: "Copo Old Fashioned com borda de sal", serve: "Margarita com cor rubi dramática. Sazonal e especial.", tip: "Laranja sanguínea tem temporada curta — aproveite. A cor natural é impressionante sem corantes." },
  "watermelon-margarita": { glass: "Copo com borda de sal ou tajín", serve: "Margarita de verão por excelência. Refrescante e doce.", tip: "Melancia fresca batida e coada dá sabor incomparável. Tajín na borda é melhor que sal puro." },
  "mango-margarita": { glass: "Copo com borda de tajín", serve: "Tropical e mexicana. Manga e tequila são soulmates.", tip: "Polpa de manga madura é essencial. Tajín na borda cria o contraste picante-doce perfeito." },
  "coconut-margarita": { glass: "Copo com borda de coco ralado", serve: "Margarita tropical e cremosa. Para amantes de coco.", tip: "Creme de coco (não leite) dá a textura cremosa. Coco ralado tostado na borda é a assinatura." },
  "smoky-paloma": { glass: "Copo alto com borda de sal defumado", serve: "Paloma com toque defumado de mezcal. Sofisticada.", tip: "A combinação mezcal + tequila cria profundidade. Sal defumado na borda realça o sabor." },
  "bee-sting": { glass: "Copo Old Fashioned com gelo", serve: "Picante e doce. O mel equilibra o jalapeño.", tip: "Macere o jalapeño por pouco tempo — fica picante rápido. Mel de boa qualidade faz diferença." },
  "maple-old-fashioned": { glass: "Copo Old Fashioned com gelo grande", serve: "Old Fashioned outonal com maple. Aconchegante.", tip: "Xarope de maple REAL (não imitação) faz toda a diferença. Canela em pau como decoração é obrigatória." },
  "lynchburg-lemonade": { glass: "Copo alto (Highball)", serve: "Nomeado em homenagem à cidade do Jack Daniel's. Refrescante e fácil.", tip: "Jack Daniel's é a escolha clássica. A Sprite dá efervescência. Simples mas eficaz." },
  "boston-sour": { glass: "Copo Old Fashioned com gelo", serve: "Whiskey Sour com clara de ovo. A espuma é a estrela.", tip: "Dry shake é OBRIGATÓRIO para a espuma sedosa. Gotas de Angostura na espuma criam arte." },
  "horses-neck": { glass: "Copo alto (Highball)", serve: "Clássico com espiral de limão dramática. Elegante.", tip: "A espiral longa de casca de limão dentro do copo é a assinatura — use um descascador." },
  "monte-carlo": { glass: "Copo Old Fashioned com gelo", serve: "Variação sofisticada do Old Fashioned com Bénédictine.", tip: "O Bénédictine adiciona notas de mel e ervas que complementam o rye whiskey perfeitamente." },
  "fig-old-fashioned": { glass: "Copo Old Fashioned com gelo grande", serve: "Old Fashioned outonal com figo. Sazonal e elegante.", tip: "Xarope de figo caseiro: cozinhe figos com açúcar e água. O figo fresco como decoração é lindo." },
  "smoked-rosemary-of": { glass: "Copo Old Fashioned com gelo grande", serve: "Old Fashioned defumado com alecrim. Dramático e aromático.", tip: "O alecrim flambeado cria aroma e apresentação teatral. O maple complementa as notas defumadas." },
  "blackberry-whiskey-sour": { glass: "Copo Old Fashioned com gelo", serve: "Whiskey Sour com amoras. Cor roxa vibrante.", tip: "Macere as amoras bem. Coe duplo para textura limpa. Clara de ovo cria espuma sedosa." },
  "honey-whiskey-lemonade": { glass: "Copo alto (Highball)", serve: "Refrescante e acessível. Perfeito para quem está começando.", tip: "Dissolva o mel em água morna antes — mel frio não se mistura. Use limonada caseira." },
  "brandy-crusta": { glass: "Copo com borda de açúcar e espiral de limão", serve: "Precursor do Sidecar. Histórico e elaborado.", tip: "A espiral de limão DENTRO do copo é a assinatura — ela libera óleos cítricos a cada gole." },
  "baileys-espresso": { glass: "Taça Martini gelada", serve: "Espresso Martini cremoso com Baileys. Indulgente.", tip: "Baileys adiciona cremosidade e doçura. Use espresso extra-forte para equilibrar." },
  "tiramisu-cocktail": { glass: "Taça coupe gelada com cacau", serve: "Tiramisù líquido. Sobremesa em um copo.", tip: "A combinação Kahlúa + Baileys + espresso replica o tiramisù perfeitamente. Cacau amargo no topo." },
  "porn-star-shot": { glass: "Copo de shot", serve: "Shot festivo com prosecco. Divertido e fácil.", tip: "Vodka de baunilha é essencial para o sabor. O prosecco no final adiciona efervescência." },
  "jelly-shot": { glass: "Copinhos de shot ou forminhas", serve: "Shots divertidos para festas. Prepare antecipadamente.", tip: "Refrigere por pelo menos 3 horas. Use gelatina em pó sem sabor + suco para melhor controle." },

  // ===== BATCH 3-5 NEW DRINKS =====
  "absinthe-frappe": { glass: "Copo alto com gelo picado", serve: "Forma clássica de servir absinto. Refrescante e herbáceo.", tip: "O gelo picado dilui lentamente, revelando as camadas de sabor. Use absinto de qualidade." },
  "french-connection": { glass: "Copo Old Fashioned com gelo", serve: "Digestivo simples e elegante. Apenas dois ingredientes.", tip: "A simplicidade exige ingredientes premium. Conhaque VS ou VSOP combina melhor com Amaretto." },
  "sherry-cobbler": { glass: "Copo alto com gelo picado", serve: "Um dos primeiros cocktails da história (1830s). Refrescante.", tip: "Sherry amontillado é o ideal — equilíbrio entre seco e doce. As frutas devem ser frescas." },
  "black-manhattan": { glass: "Taça coupe gelada", serve: "Manhattan com amaro. Mais amargo e herbáceo.", tip: "Averna é o amaro ideal — mais suave que outros. A cereja Luxardo é premium e faz diferença." },
  "bourbon-renewal": { glass: "Copo Old Fashioned com gelo", serve: "Bourbon com cassis. Equilibrado e frutado.", tip: "O crème de cassis adiciona cor roxa e sabor de frutas negras que complementam o bourbon." },
  "sloe-gin-fizz": { glass: "Copo alto (Highball)", serve: "Fizz frutado com sloe gin. Doce e refrescante.", tip: "Sloe gin é feito com abrunhos — tem sabor único de frutas silvestres. Use o de qualidade." },
  "toasted-almond": { glass: "Copo Old Fashioned com gelo", serve: "Cremoso e com notas de amêndoa e café. Drink de sobremesa.", tip: "A ordem importa: Kahlúa primeiro, depois Amaretto, depois creme flutuado por cima." },
  "earl-grey-martini": { glass: "Taça coupe gelada", serve: "Gin infusionado com chá. Britânico e sofisticado.", tip: "Infusione gin por apenas 2 horas — mais que isso fica amargo. Earl Grey de folhas soltas é melhor." },
  "pear-martini": { glass: "Taça Martini gelada", serve: "Elegante e frutado. Perfeito como aperitivo.", tip: "Licor de pêra de qualidade faz toda diferença. Fatia fina de pêra como decoração é linda." },
  "rum-old-fashioned": { glass: "Copo Old Fashioned com gelo grande", serve: "Old Fashioned caribenho. Rico e complexo.", tip: "Rum envelhecido de qualidade (8+ anos) é essencial. O xarope de demerara realça as notas de caramelo." },
  "passion-fruit-caipirinha": { glass: "Copo Old Fashioned de 300ml", serve: "Caipirinha mais popular do Brasil. Tropical e vibrante.", tip: "Use cachaça de qualidade. Maracujá bem maduro com sementes adiciona textura e sabor intenso." },
  "key-lime-martini": { glass: "Taça Martini com borda de biscoito", serve: "Sobremesa Key Lime Pie em forma de drink.", tip: "A borda de biscoito graham triturado é a assinatura. Use suco de limão key lime, não limão normal." },
  "passion-fruit-martini": { glass: "Taça Martini gelada", serve: "O Pornstar Martini simplificado. Tropical e sedutor.", tip: "Maracujá fresco é infinitamente superior ao purê comercial. Meio maracujá no topo é a decoração clássica." },
  "cranberry-mule": { glass: "Caneca de cobre (Moscow Mule mug)", serve: "Moscow Mule festivo, perfeito para o Natal.", tip: "Cranberries congeladas como decoração mantêm o drink gelado e são comestíveis." },
  "ginger-daiquiri": { glass: "Taça coupe gelada", serve: "Daiquiri com toque picante de gengibre. Moderno.", tip: "Xarope de gengibre caseiro: ferva gengibre fresco com açúcar e água. Muito superior ao industrial." },
  "coconut-rum-punch": { glass: "Copo hurricane", serve: "Punch tropical cremoso. Perfeito para festas.", tip: "Creme de coco dá cremosidade. Dois tipos de rum criam profundidade de sabor." },
  "guava-rum-punch": { glass: "Copo alto (Highball)", serve: "Punch tropical com goiaba. Frutado e colorido.", tip: "Suco de goiaba de qualidade é essencial — a fruta tem sabor intenso que domina facilmente." },

  // ===== BATCHES 6-8 REMAINING =====
  "violet-fizz": { glass: "Copo alto (Highball)", serve: "Drink lilás floral com espuma. Visual deslumbrante.", tip: "Crème de violette dá a cor e o sabor floral. Dry shake com clara para espuma sedosa." },
  "million-dollar": { glass: "Taça coupe gelada", serve: "Gin com vermute, abacaxi e clara. Rico e espumoso.", tip: "Dry shake é obrigatório. O abacaxi e a grenadine criam sabor frutado equilibrado." },
  "paradise-cocktail": { glass: "Taça coupe gelada", serve: "Clássico simples com apricot brandy. Frutado e elegante.", tip: "Proporções são tudo neste drink simples. Apricot brandy de qualidade é essencial." },
  "east-side": { glass: "Taça coupe gelada", serve: "Mojito em versão gin e em taça. Refrescante e elegante.", tip: "Pepino e hortelã juntos criam frescor duplo. Coe duplo para textura cristalina." },
  "strawberry-basil-smash": { glass: "Copo Old Fashioned com gelo", serve: "Gin com morangos e manjericão. Aromático e frutado.", tip: "A combinação morango + manjericão é mágica. Macere bem mas coe duplo para remover sólidos." },
  "turmeric-gin-tonic": { glass: "Taça copa (balão) com gelo", serve: "G&T dourado com cúrcuma. Saudável e bonito.", tip: "Xarope de cúrcuma caseiro: ferva cúrcuma com açúcar e água. Gengibre fresco complementa." },
  "thai-basil-smash": { glass: "Copo Old Fashioned com gelo", serve: "Gin com manjericão tailandês. Exótico e aromático.", tip: "Manjericão tailandês tem notas de anis que o diferenciam do italiano. A pimenta dá toque especial." },
  "spiced-pear": { glass: "Taça coupe gelada", serve: "Bourbon com pera e canela. Outonal e aconchegante.", tip: "Suco de pera natural é melhor que néctar industrial. Xarope de canela caseiro eleva o drink." },
  "limoncello-martini": { glass: "Taça Martini gelada", serve: "Limoncello em versão cocktail. A Costa Amalfitana em um gole.", tip: "Limoncello caseiro é infinitamente superior. A vodka equilibra a doçura do licor." },
  "bacardi-cocktail": { glass: "Taça coupe gelada", serve: "Clássico da Bacardi. Simples, rosado e refrescante.", tip: "A lei de 1936 determina que DEVE ser feito com Bacardi. Grenadine dá a cor rosa sutil." },
  "honey-bee": { glass: "Taça coupe gelada", serve: "Rum com mel. Simples e delicioso.", tip: "Dissolva o mel em água morna antes — mel puro não se mistura frio. Use rum branco de qualidade." },
  "blackberry-bramble": { glass: "Copo Old Fashioned com gelo picado", serve: "Bramble com amoras frescas. Frutado e elegante.", tip: "O licor de amora regado por cima cria efeito cascata. Amoras frescas como decoração são essenciais." },
  "orange-blossom": { glass: "Taça coupe gelada", serve: "Gin com laranja e água de flor de laranjeira. Perfumado.", tip: "A água de flor de laranjeira é sutil — use poucas gotas. Suco de laranja espremido na hora." },
  "japanese-slipper": { glass: "Taça Martini gelada", serve: "Verde neon e elegante. O sabor de melão Midori.", tip: "Midori é essencial — não substitua. Partes iguais dos três ingredientes para equilíbrio perfeito." },
  "pimms-cup": { glass: "Copo alto (Highball) ou jarra", serve: "O drink do verão britânico. Wimbledon em um copo.", tip: "Pepino, morango e hortelã são OBRIGATÓRIOS como guarnição. Limonada caseira é ideal." },
  "calvados-sour": { glass: "Taça coupe gelada", serve: "Sour com brandy de maçã francês. Outonal e elegante.", tip: "Calvados de qualidade é essencial. Dry shake para espuma. Fatia de maçã fina como decoração." },
  "long-beach-iced-tea": { glass: "Copo alto (Highball)", serve: "Long Island com cranberry em vez de cola. Mais frutado.", tip: "5 destilados em doses pequenas — o equilíbrio é a chave. O cranberry dá cor e sabor." },
  "irish-mule": { glass: "Caneca de cobre (Moscow Mule mug)", serve: "Moscow Mule irlandês. Suave e refrescante.", tip: "Irish whiskey é mais suave que bourbon. Ginger beer artesanal picante equilibra a suavidade." },
  "cherry-blossom": { glass: "Taça coupe gelada", serve: "Drink floral inspirado nas cerejeiras japonesas. Delicado.", tip: "Licor de cereja e grenadine criam cor rosada. Flores comestíveis são a decoração perfeita." },

  // ===== BATCH 7-8 DRINKS =====
  "limoncello-mule": { glass: "Caneca de cobre", serve: "Moscow Mule italiano com limoncello. Cítrico e refrescante.", tip: "Limoncello caseiro faz diferença enorme. A ginger beer equilibra a doçura do licor." },
  "smoky-paloma-fizz": { glass: "Copo alto com borda de sal defumado", serve: "Paloma defumada com mezcal. Sofisticada.", tip: "Mezcal dá as notas defumadas. Sal defumado na borda realça o sabor." },
  "matcha-colada": { glass: "Copo hurricane", serve: "Piña Colada verde com matcha. Exótico e instagramável.", tip: "Dissolva o matcha em pouca água quente antes de adicionar. A cor verde é impressionante." },
  "blackcurrant-gin-sour": { glass: "Taça coupe gelada", serve: "Sour com cassis e gin. Cor roxa profunda.", tip: "Licor de cassis de qualidade (Dijon) faz diferença. Dry shake para espuma perfeita." },
  "yuzu-sake-spritz": { glass: "Taça de vinho com gelo", serve: "Spritz japonês com sake e yuzu. Delicado e cítrico.", tip: "Yuzu tem sabor único — não substitua por limão. Sake junmai é ideal." },
  "bourbon-pecan-sour": { glass: "Taça coupe gelada", serve: "Sour com notas de pecan. Outonal e rico.", tip: "Xarope de pecan caseiro: torre pecãs e ferva com açúcar e água. Sabor incrível." },
  "mango-gin-smash": { glass: "Copo Old Fashioned com gelo", serve: "Gin com manga fresca. Tropical e aromático.", tip: "Manga bem madura é essencial. Macere bem para extrair todo o sabor e suco." },
  "lavender-lemon-martini": { glass: "Taça Martini gelada", serve: "Floral e cítrico. Elegante e perfumado.", tip: "Xarope de lavanda caseiro com flores secas. O ramo seco como decoração é aromático." },
  "rum-coconut-cream": { glass: "Copo hurricane", serve: "Cremoso e tropical. Versão luxuosa da Piña Colada.", tip: "Creme de coco (não leite) dá a textura aveludada. Rum branco de qualidade." },
  "spiced-pear-collins": { glass: "Copo alto (Highball)", serve: "Collins outonal com pera e especiarias. Aconchegante.", tip: "Xarope de especiarias caseiro eleva o drink. Fatia de pera como decoração é elegante." },
  "tequila-watermelon-cooler": { glass: "Copo alto (Highball)", serve: "Refrescante de verão mexicano. Leve e doce.", tip: "Melancia fresca é obrigatória. Agave equilibra a acidez. Hortelã dá frescor." },
  "gin-peach-bellini": { glass: "Taça flûte de champagne", serve: "Bellini com toque de gin. Mais complexo que o original.", tip: "O gin adiciona notas botânicas que elevam o purê de pêssego. Prosecco extra-dry." },
  "maple-rum-toddy": { glass: "Caneca de vidro resistente ao calor", serve: "Toddy caribenho quente. Perfeito para noites frias.", tip: "Rum escuro + maple = combinação celestial. Canela em pau libera sabor gradualmente." },
  "cucumber-vodka-tonic": { glass: "Copo alto (Highball)", serve: "Vodka tônica refrescante com pepino. Simples e elegante.", tip: "Pepino fresco fatiado dentro do copo infusiona continuamente. Hortelã complementa." },
  "cherry-bourbon-fizz": { glass: "Copo alto (Highball)", serve: "Fizz com bourbon e cereja. Frutado e efervescente.", tip: "Licor de cereja de qualidade é essencial. A água com gás deve ser bem gelada." },
  "pineapple-vodka-punch": { glass: "Copo hurricane ou jarra", serve: "Punch tropical com vodka. Festivo e colorido.", tip: "A grenadine cria camadas de cor. Use sucos frescos para sabor superior." },
  "rose-gin-fizz-b8": { glass: "Copo alto (Highball)", serve: "Fizz floral com água de rosas. Delicado e perfumado.", tip: "Água de rosas é potente — use pouca. Pétalas de rosa comestíveis são a decoração ideal." },
  "frozen-strawberry-marg": { glass: "Copo margarita", serve: "Margarita frozen com morangos. Festiva e doce.", tip: "Morangos congelados funcionam melhor que frescos para textura frozen. Cointreau equilibra a doçura." },
  "whiskey-honey-lemon": { glass: "Copo Old Fashioned com gelo", serve: "Whiskey suavizado com mel e limão. Reconfortante.", tip: "Dilua o mel em pouca água quente antes. Suco de limão fresco é obrigatório." },
  "blueberry-gin-tonic": { glass: "Taça de vinho grande com gelo", serve: "G&T com mirtilos. Visual roxo impressionante.", tip: "Os mirtilos liberam cor gradualmente. Alecrim complementa as notas frutadas do gin." },
  "lime-vodka-spritz": { glass: "Taça de vinho com gelo", serve: "Spritz cítrico e efervescente. Leve e refrescante.", tip: "Prosecco extra-dry equilibra a acidez do limão. Simples e elegante." },
  "orange-rum-swizzle": { glass: "Copo alto com gelo picado", serve: "Swizzle caribenho com laranja. Técnica tradicional.", tip: "Swizzle de verdade com swizzle stick — gire entre as palmas até gelar o copo." },
  "elderflower-prosecco": { glass: "Taça flûte de champagne", serve: "Prosecco floral e delicado. Perfeito para aperitivos.", tip: "Licor de elderflower em dose sutil — não domine o prosecco." },
  "ginger-whiskey-smash": { glass: "Copo Old Fashioned com gelo", serve: "Smash com gengibre e whiskey. Picante e aromático.", tip: "Gengibre fresco macerado libera sabor intenso. Mel complementa o picante." },
  "coconut-tequila-sour": { glass: "Taça coupe gelada", serve: "Sour tropical com tequila e coco. Cremoso e exótico.", tip: "Leite de coco dá cremosidade. Dry shake com clara para espuma. Coco ralado no topo." },
  "lemon-meringue-martini": { glass: "Taça Martini gelada", serve: "Sobremesa em forma de drink. Doce e cítrico.", tip: "Merengue flambeado no topo é a ESTRELA. Use maçarico de cozinha para o efeito." },
  "raspberry-rum-punch": { glass: "Copo hurricane", serve: "Punch de framboesa com rum. Festivo e frutado.", tip: "Suco de framboesa natural sem açúcar. A grenadine é só para cor — pouca." },
  "mint-bourbon-julep": { glass: "Copo julep (prata) ou similar", serve: "Julep clássico premium. A hortelã é a estrela.", tip: "Bourbon premium eleva o drink. Macere hortelã suavemente — nunca triture." },
  "grapefruit-vodka-collins": { glass: "Copo alto (Highball)", serve: "Collins cítrico com grapefruit. Amargo-doce.", tip: "Grapefruit rosa é mais doce que o amarelo. A água com gás deve ser bem gelada." },
  "passion-fruit-prosecco": { glass: "Taça flûte de champagne", serve: "Prosecco tropical com maracujá. Festivo.", tip: "Polpa de maracujá com sementes dá textura. Prosecco brut equilibra a doçura." },
  "spiced-rum-collins": { glass: "Copo alto (Highball)", serve: "Collins com rum especiado. Aromático e refrescante.", tip: "Rum especiado traz notas de canela e baunilha naturalmente. Canela em pau como decoração." },
  "cucumber-gin-spritz": { glass: "Taça de vinho com gelo", serve: "Spritz refrescante com pepino e gin. Elegante.", tip: "Elderflower e pepino são uma combinação clássica. Prosecco dá efervescência." },
  "habanero-tequila-sunrise": { glass: "Copo alto (Highball)", serve: "Tequila Sunrise com toque picante. Para os corajosos.", tip: "Infusione tequila com habanero por apenas 30 min — fica MUITO picante. Cuidado." },
  "peach-vodka-lemonade": { glass: "Copo alto (Highball)", serve: "Refrescante e frutado. Perfeito para dias quentes.", tip: "Vodka de pêssego dá sabor sem complicar. Limonada caseira eleva o drink." },
  "cinnamon-tequila-sour": { glass: "Taça coupe gelada", serve: "Sour com canela e tequila. Invernal e especiado.", tip: "Xarope de canela caseiro: ferva paus de canela com açúcar e água. Dry shake para espuma." },
  "frozen-watermelon-daiquiri": { glass: "Taça coupe ou copo hurricane", serve: "Daiquiri frozen de melancia. Rosa e refrescante.", tip: "Melancia congelada em cubos funciona melhor que fresca + gelo. Sabor mais concentrado." },
  "bourbon-honey-smash": { glass: "Copo Old Fashioned com gelo", serve: "Smash doce com bourbon e mel. Aromático.", tip: "Mel de qualidade faz toda diferença. Macere hortelã suavemente. Limão equilibra a doçura." },
  "lychee-rose-martini": { glass: "Taça Martini gelada", serve: "Exótico e perfumado. Combinação floral asiática.", tip: "Licor de lichia e água de rosas são perfumados — dose sutil. A lichia como decoração é funcional." },
  "gin-basil-lemonade": { glass: "Copo alto (Highball)", serve: "Gin com manjericão e limonada. Refrescante e herbáceo.", tip: "Manjericão fresco dentro do copo continua liberando sabor. Limonada caseira é ideal." },
  "mezcal-orange-fizz": { glass: "Copo alto (Highball)", serve: "Fizz defumado com laranja. Equilibrado e interessante.", tip: "O mezcal dá toque defumado que combina surpreendentemente com laranja. Pitada de sal defumado." },
  "tropical-vodka-punch": { glass: "Copo hurricane", serve: "Punch tropical colorido. Festivo e fácil.", tip: "A mistura de três sucos cria complexidade. Grenadine no fundo para camadas de cor." },
  "apple-bourbon-highball": { glass: "Copo alto (Highball)", serve: "Highball outonal com sidra e bourbon. Aconchegante.", tip: "Sidra de maçã natural (não filtrada) é ideal. Canela em pau como mexedor aromático." },
  "kiwi-gin-smash": { glass: "Copo Old Fashioned com gelo", serve: "Gin com kiwi fresco. Verde, ácido e refrescante.", tip: "Kiwi bem maduro é mais doce. Macere bem e coe duplo — as sementes ficam na peneira." },
};

export function getChefTip(drinkId: string): ChefTip | undefined {
  return chefTips[drinkId];
}
