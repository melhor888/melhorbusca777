export interface ArticleModule {
  title: string;
  content: string;
  highlight?: boolean;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: "fundamentos" | "destilados" | "tecnicas" | "cultura" | "negocios" | "avancado";
  icon: string;
  xpReward: number;
  readTime: string;
  modules: ArticleModule[];
}

export const articleCategories = {
  fundamentos: { label: "Fundamentos", color: "primary" },
  destilados: { label: "Destilados", color: "accent" },
  tecnicas: { label: "Técnicas", color: "primary" },
  cultura: { label: "Cultura", color: "accent" },
  negocios: { label: "Negócios", color: "primary" },
  avancado: { label: "Avançado", color: "accent" },
};

export const articles: Article[] = [
  {
    id: "guia-destilados",
    title: "Guia Completo dos Destilados",
    subtitle: "Tudo que você precisa saber sobre cada família de destilado",
    category: "destilados",
    icon: "🥃",
    xpReward: 25,
    readTime: "12 min",
    modules: [
      { title: "O que é destilação?", content: "Destilação é o processo de aquecer um líquido fermentado até que o álcool evapore (ponto de ebulição 78,3°C) e depois condensar esse vapor em líquido novamente. O resultado é um espírito com teor alcoólico muito maior que a bebida original. Cada destilado começa com uma matéria-prima diferente — grãos, frutas, cana-de-açúcar — e o processo de destilação, envelhecimento e filtragem define seu caráter final." },
      { title: "Vodka — A Tela em Branco", content: "Originária da Polônia e Rússia (a disputa continua até hoje), a vodka é destilada de grãos (trigo, centeio) ou batata. Seu objetivo é ser o mais neutra possível, servindo como base perfeita para cocktails. Vodkas premium passam por múltiplas destilações e filtragens — algumas até com carvão de bétula ou diamantes. A Belvedere usa centeio polonês, a Grey Goose usa trigo francês, e a Chopin usa batata. Cada base dá uma textura diferente: trigo é leve, centeio é picante, batata é cremosa.", highlight: true },
      { title: "Gin — O Jardim Botânico", content: "Gin é essencialmente vodka redistilada com botânicos, sendo o zimbro (juniper berry) o ingrediente obrigatório. London Dry é seco e zimbro-forward (Tanqueray, Beefeater). New Western põe outros botânicos em destaque — Hendrick's com pepino e rosa, Roku com 6 botânicos japoneses. Old Tom é levemente adoçado, essencial para o Tom Collins original. Navy Strength tem 57% de álcool — a concentração que ainda permite que pólvora acenda se molhada com gin (teste real da Marinha Britânica!)." },
      { title: "Rum — O Espírito do Caribe", content: "Destilado de cana-de-açúcar ou melaço, o rum carrega o sol do Caribe em cada gole. Rum branco (Bacardi, Havana Club 3 anos) é leve e fresco — Mojito, Daiquiri. Rum dourado/gold (Appleton Estate) tem notas de baunilha e é ótimo para Mai Tai. Rum escuro (Myers's, Goslings) é intenso, usado em Dark 'n' Stormy e para flutuar sobre drinks tropicais. Rum agrícola (rhum agricole) é feito direto do suco de cana — intenso e terroso, típico da Martinica." },
      { title: "Tequila e Mezcal — A Alma do México", content: "Tequila é destilada do agave azul Weber, exclusivamente na região de Jalisco. Blanco/Plata: sem envelhecimento, sabor puro de agave. Reposado: 2-12 meses em barril, suavidade elegante. Añejo: 1-3 anos, complexidade de whisky. Extra Añejo: 3+ anos, para saborear puro. Mezcal pode usar qualquer espécie de agave e é defumado porque o agave é assado em fornos subterrâneos. A regra: toda tequila é mezcal, mas nem todo mezcal é tequila.", highlight: true },
      { title: "Whisky — O Ouro Líquido", content: "Bourbon (EUA): mínimo 51% milho, envelhecido em barris novos de carvalho carbonizados — doce, baunilha, caramelo. Scotch Single Malt: cevada maltada, uma destilaria, mínimo 3 anos. Islay é defumado (Laphroaig), Speyside é frutado (Glenfiddich), Highland é equilibrado (Dalmore). Rye whiskey: centeio dominante, apimentado — essencial para Manhattan. Whisky japonês: inspirado no scotch mas com precisão nipônica — Hibiki, Yamazaki e Nikka conquistaram o mundo." },
      { title: "Conhaque, Brandy e Licores", content: "Conhaque é brandy (destilado de uva) da região de Cognac, França. VS: 2 anos. VSOP: 4 anos. XO: 10+ anos. Armagnac é mais rústico, da Gasconha. Grappa é destilada das cascas de uva (bagaço), típica da Itália. Licores são destilados adoçados com açúcar e aromatizados: Cointreau (laranja), Chartreuse (130 ervas!), Amaretto (amêndoa), Kahlúa (café). São os 'modificadores' que dão personalidade aos cocktails." },
    ],
  },
  {
    id: "equilibrio-sabores",
    title: "A Arte do Equilíbrio de Sabores",
    subtitle: "Doce, ácido, amargo e alcoólico — a fórmula perfeita",
    category: "fundamentos",
    icon: "⚖️",
    xpReward: 20,
    readTime: "10 min",
    modules: [
      { title: "Os 4 pilares do sabor", content: "Todo drink é um jogo de equilíbrio entre quatro elementos fundamentais: doce (xaropes, licores, sucos doces), ácido (limão, lima, vinagre), amargo (bitters, Campari, tônica) e forte/alcoólico (destilados). O segredo dos grandes bartenders é saber dosar cada pilar para criar harmonia. Um Daiquiri clássico é o exemplo perfeito: rum (forte), limão (ácido) e xarope simples (doce). Três ingredientes, equilíbrio impecável." },
      { title: "A Regra 2:1:1", content: "A fórmula mais antiga da coquetelaria funciona até hoje: 2 partes de destilado, 1 parte de ácido, 1 parte de doce. Com essas proporções você pode criar centenas de drinks apenas trocando os ingredientes. Whisky Sour: bourbon + limão + xarope. Margarita: tequila + lima + Cointreau. Daiquiri: rum + limão + xarope. Sidecar: conhaque + limão + Cointreau. Domine esta fórmula e você nunca mais ficará perdido atrás de um bar.", highlight: true },
      { title: "O papel do sal e da gordura", content: "O sal não é apenas para bordar a Margarita. Uma pitada de sal (literalmente 2-3 grãos) adicionada a qualquer drink cítrico reduz o amargor e amplifica a percepção de doçura e sabor. Fat-washing é uma técnica avançada onde gordura (bacon, manteiga, azeite) é misturada ao destilado, refrigerada e removida — deixando para trás apenas moléculas de sabor. Bourbon fat-washed com bacon é inesquecível em um Old Fashioned." },
      { title: "Acidez: além do limão", content: "Limão e lima são os ácidos mais comuns, mas bartenders modernos exploram muito mais. Shrubs (vinagre de frutas fermentadas) adicionam acidez complexa e profundidade. Verjuice (suco de uva verde) é ácido mas suave. Ácido cítrico e ácido málico em pó permitem controlar a acidez sem adicionar volume de líquido. Kombucha como mixer traz acidez viva e complexidade fermentada." },
      { title: "Doçura: muito além do açúcar", content: "Xarope simples (1:1 açúcar e água) é a base, mas existe um universo de doçura. Mel traz floral e viscosidade (essencial no Bee's Knees). Xarope de agave é mais neutro e combina com tequila. Demerara tem notas de caramelo — perfeito para Old Fashioned. Maple syrup traz defumação doce. Licores adicionam doçura + sabor: Cointreau (laranja), Maraschino (cereja), St-Germain (flor de sabugueiro).", highlight: true },
      { title: "Amargo: o tempero dos drinks", content: "Bitters são ao drink o que sal e pimenta são à comida — intensificadores de sabor. Angostura é o mais icônico: especiarias, cravo e canela. Peychaud's é mais leve e floral, essencial no Sazerac. Orange bitters complementam gin e whisky. Bitters de chocolate, lavanda e mole estão entre os artesanais. Campari e Aperol são amargos italianos que definem categorias inteiras de drinks (Negroni, Spritz)." },
    ],
  },
  {
    id: "historia-proibicao",
    title: "A Lei Seca e o Nascimento do Cocktail Moderno",
    subtitle: "Como a proibição acidentalmente criou a cultura de bar",
    category: "cultura",
    icon: "🏛️",
    xpReward: 20,
    readTime: "11 min",
    modules: [
      { title: "O mundo antes da Proibição", content: "No final do século XIX, os EUA viviam a Era de Ouro da coquetelaria. Jerry Thomas, o 'Professor', publicou em 1862 o primeiro livro de bartender. Bares como o Waldorf-Astoria eram templos de sofisticação. O Martini, o Manhattan e o Old Fashioned já existiam. Bartenders eram celebridades. Mas um movimento de temperança crescia nas sombras, alimentado por preocupações reais com alcoolismo e violência doméstica." },
      { title: "18ª Emenda — O Grande Experimento", content: "Em 16 de janeiro de 1920, a 18ª Emenda à Constituição dos EUA entrou em vigor, proibindo a fabricação, venda e transporte de bebidas alcoólicas. O Volstead Act definiu 'intoxicante' como qualquer coisa acima de 0,5% de álcool. Resultado? O crime organizado explodiu. Al Capone faturava US$60 milhões/ano com contrabando. Mais de 200.000 speakeasies (bares ilegais) surgiram — o dobro de bares que existiam legalmente antes da Proibição.", highlight: true },
      { title: "Speakeasies: a cultura underground", content: "O nome 'speakeasy' vem de 'speak easy' — falar baixo para não atrair atenção da polícia. Entravam-se por portas falsas em barbearias, lavanderias e farmácias. A senha mudava toda noite. Mulheres, que eram proibidas em bares legais antes, agora bebiam livremente nos speakeasies — a Proibição acidentalmente impulsionou a igualdade social nos bares. O cocktail evoluiu porque destilados ruins precisavam ser mascarados com sucos, xaropes e frutas." },
      { title: "O Êxodo dos Bartenders", content: "Os melhores bartenders americanos fugiram para Europa e Caribe, onde podiam trabalhar legalmente. Harry Craddock foi para o Savoy Hotel em Londres e publicou o 'Savoy Cocktail Book' (1930). Eddie Woelke e Fred Kaufman foram para o Bar La Florida em Havana, onde aperfeiçoaram o Daiquiri e o El Presidente. Harry MacElhone abriu o Harry's New York Bar em Paris. Esses bartenders expatriados espalharam a cultura do cocktail pelo mundo." },
      { title: "Drinks nascidos na Proibição", content: "Bee's Knees: gin, limão e mel — o mel mascarava o sabor do gin de banheira. Sidecar: conhaque, Cointreau e limão — criado em Paris por bartenders americanos exilados. French 75: gin, champagne e limão — nasceu no Harry's Bar em Paris. Southside: gin, limão, hortelã e açúcar — drink oficial dos gangsters de Chicago. Highball (whisky e soda): simples de fazer rápido se a polícia chegasse.", highlight: true },
      { title: "Repeal Day e o legado", content: "Em 5 de dezembro de 1933, a 21ª Emenda revogou a 18ª, encerrando a Proibição. 'Repeal Day' é celebrado até hoje por bartenders do mundo todo. O legado é paradoxal: a Proibição quase destruiu a coquetelaria americana, mas também a espalhou pelo mundo, democratizou os bares (incluindo mulheres), e criou a mística do speakeasy que hoje inspira os melhores bares contemporâneos do planeta." },
    ],
  },
  {
    id: "copos-essenciais",
    title: "O Copo Certo para Cada Drink",
    subtitle: "Por que o formato do copo muda completamente a experiência",
    category: "fundamentos",
    icon: "🥂",
    xpReward: 15,
    readTime: "8 min",
    modules: [
      { title: "A ciência por trás do copo", content: "O formato do copo não é estético — é funcional. A abertura determina como os aromas chegam ao nariz. A largura controla a velocidade de diluição do gelo. A haste (ou ausência dela) define se o calor da mão aquece o drink. Beber um Martini em copo de cerveja seria como comer sushi com garfo — funciona, mas você perde metade da experiência." },
      { title: "Old Fashioned / Rocks Glass", content: "Copo baixo e largo (200-300ml). Projetado para drinks servidos 'on the rocks' — com gelo. O formato largo acomoda cubos grandes que derretem devagar. Drinks: Old Fashioned, Negroni, Whisky puro, White Russian, Caipirinha. É o copo mais versátil que existe — se tiver apenas um tipo, escolha este.", highlight: true },
      { title: "Highball e Collins", content: "Copos altos e estreitos. Highball (240-300ml) para drinks com mais mixer (Gin Tônica, Cuba Libre, Whisky Soda). Collins (300-400ml) é ligeiramente mais alto para drinks longos com soda (Tom Collins, Mojito, John Collins). O formato estreito preserva a carbonatação por mais tempo e empilha o gelo verticalmente." },
      { title: "Coupe e Taça Martini", content: "Coupe: formato de taça arredondada com haste, criada originalmente para champagne. Perfeita para drinks servidos 'up' (sem gelo): Daiquiri, Gimlet, Sidecar. Taça Martini (formato V): icônica mas impraticável — o líquido derrama facilmente. Muitos bares modernos preferem a coupe, que é mais elegante e funcional." },
      { title: "Taça Flauta e Taça de Vinho", content: "Flauta: estreita e alta, preserva as bolhas de champagne e drinks espumantes (French 75, Bellini, Mimosa). Taça de vinho: versátil para Aperol Spritz, Sangria e Gin Tônica elaborado. A boca larga permite apreciar os aromas dos botânicos e frutas. No mundo moderno, a taça de vinho substituiu muitos copos especializados." },
      { title: "Copos especiais", content: "Caneca de cobre (Moscow Mule): mantém o drink gelado por mais tempo e cria uma experiência tátil única. Tiki mugs: cerâmica esculpida para drinks tropicais — parte da experiência escapista Tiki. Copo Hurricane: alto e curvo para Hurricane e Piña Colada. Snifter: para conhaque e destilados premium — a forma concentra os aromas." },
    ],
  },
  {
    id: "tecnicas-avancadas-bar",
    title: "Técnicas Avançadas de Bartender",
    subtitle: "Os segredos que separam amadores de profissionais",
    category: "tecnicas",
    icon: "🎯",
    xpReward: 30,
    readTime: "14 min",
    modules: [
      { title: "O poder do mise en place", content: "Antes de fazer um único drink, um bartender profissional organiza tudo: copos gelados, frutas cortadas, gelo preparado, garrafas posicionadas, tools à mão. Isso se chama 'mise en place' (tudo no lugar). Em um bar movimentado, você tem 90 segundos para entregar um drink. Cada segundo procurando algo é um segundo perdido. Em casa, o mesmo princípio se aplica: prepare tudo antes de começar e o processo se torna fluido e prazeroso." },
      { title: "Jigger — precisão milimétrica", content: "O jigger (dosador) é a ferramenta mais importante do bar. Drinks equilibrados dependem de medidas exatas. 30ml de limão vs 45ml muda completamente o resultado. Bartenders iniciantes acham que free-pour (derramar sem medir) é mais 'cool' — bartenders profissionais sabem que precisão é o que faz um drink impecável. Use o jigger. Sempre. Sem exceção.", highlight: true },
      { title: "O segredo da diluição perfeita", content: "Todo drink precisa de diluição — ela suaviza o álcool e integra os sabores. Agitar por 10-15 segundos adiciona ~25% de água. Mexer por 30 segundos adiciona ~15%. Drinks servidos 'up' precisam de diluição precisa na preparação porque não terão gelo no copo. O ponto perfeito é quando o drink está a -4°C e com diluição de 20-25%. Temperatura e diluição são inseparáveis." },
      { title: "Layering — drinks em camadas", content: "A técnica de criar camadas visíveis baseia-se na densidade dos líquidos. Líquidos mais densos (mais açúcar) ficam no fundo. Despeje lentamente sobre as costas de uma colher de bar invertida. B-52: Kahlúa (mais denso) → Baileys → Grand Marnier (menos denso). Pousse-café pode ter até 7 camadas! A chave é não misturar — paciência e mão firme." },
      { title: "Express e Twist — óleos cítricos", content: "Quando um bartender 'expressa' uma casca de laranja sobre o drink, ele está espremendo os óleos essenciais da casca. Esses óleos formam uma camada aromática na superfície. Para um twist, corte uma tira de casca (sem a parte branca), torça sobre o drink e esfregue na borda do copo. A diferença entre um drink 'bom' e um drink 'memorável' frequentemente está nesses óleos cítricos.", highlight: true },
      { title: "Freepouring controlado", content: "Para bares de alto volume, o freepouring (derramar sem jigger) é necessário. A técnica do count: com bico dosador padrão, conte mentalmente '1-Mississippi, 2-Mississippi...' — cada contagem = ~15ml. 2 counts = 30ml (1 oz). 3 counts = 45ml (1.5 oz). Pratique com água sobre um jigger até acertar consistentemente. Mas lembre: em cocktail bars premium, jigger sempre." },
      { title: "Batch cocktails — eficiência elegante", content: "Para festas e eventos, pré-prepare drinks em garrafas. A fórmula: multiplique a receita pelo número de porções, misture tudo EXCETO gelo e carbonatação, refrigere por pelo menos 2 horas. Na hora de servir, despeje sobre gelo e adicione soda/tônica/champagne. Negroni, Old Fashioned e Margarita funcionam perfeitamente em batch. Alguns bartenders fazem barrel-aged cocktails, envelhecendo o batch em barris de carvalho por semanas." },
    ],
  },
  {
    id: "cultura-bar-mundial",
    title: "Cultura de Bar ao Redor do Mundo",
    subtitle: "Uma viagem pelos melhores bares e tradições de 5 continentes",
    category: "cultura",
    icon: "🌍",
    xpReward: 20,
    readTime: "13 min",
    modules: [
      { title: "Japão — O Bar como Templo", content: "Bares japoneses são santuários de precisão. O gelo é esculpido à mão com faca e picador — cada cubo é uma obra de arte. O Highball (whisky + soda) é elevado a ritual: copo gelado, whisky medido, soda servida pela lateral do copo para preservar bolhas, e exatamente 3,5 mexidas com colher. Jiro Tanaka, do Star Bar Ginza, leva 10 minutos para preparar um único drink. Silêncio, respeito e perfeição definem a experiência." },
      { title: "Cuba e Caribe — Berço dos Tropicais", content: "El Floridita em Havana é 'a cuna del Daiquiri' (o berço do Daiquiri). Ernest Hemingway bebia seu 'Papa Doble' ali — Daiquiri duplo sem açúcar com maraschino. La Bodeguita del Medio criou o Mojito. Trinidad inventou o Angostura bitters como remédio em 1824. Jamaica deu ao mundo o rum escuro e a cultura Tiki indiretamente. Cada ilha caribenha tem seu rum e seu drink: Barbados (Mount Gay, Rum Punch), Martinica (Rhum Agricole).", highlight: true },
      { title: "Londres e Nova York — As Capitais do Cocktail", content: "Londres tem o Connaught Bar (melhor bar do mundo 2020-2023), onde o Martini é servido de um carrinho de prata com 7 opções de bitters. O Savoy's American Bar opera desde 1893. Nova York tem o Dead Rabbit (inspiração irlandesa), o Employees Only (speakeasy moderno) e o PDT (Please Don't Tell) — entrada secreta por uma cabine telefônica dentro de uma hot-dog shop. As duas cidades competem anualmente pelo título de capital mundial dos cocktails." },
      { title: "Itália — Aperitivo como Estilo de Vida", content: "Na Itália, 'aperitivo' não é só um drink — é um ritual social diário. Das 18h às 21h, os italianos se reúnem em bares e praças para o Spritz (Aperol ou Campari + prosecco + soda), Negroni (gin + Campari + vermute doce) ou Americano (Campari + vermute + soda). Muitos bares servem petiscos gratuitos durante o aperitivo. Milão é a capital do Negroni, enquanto Veneza reina com o Spritz. A cultura é simples: sabores amargos, boa companhia e preguiça elegante." },
      { title: "México — Agave e Celebração", content: "No México, tequila e mezcal são cultura. Em Oaxaca, mezcalerias servem mezcal em copitas de barro com fatias de laranja e sal de gusano (larva de agave moída com sal e pimenta). A Margarita nasceu na fronteira (origem disputada entre Tijuana, Juárez e Acapulco). Michelada (cerveja com limão, sal, pimenta, molho inglês e Clamato) é o brunch mexicano perfeito. Paloma (tequila + Squirt/soda de grapefruit) é mais popular que Margarita no próprio México.", highlight: true },
      { title: "Brasil — Cachaça e Criatividade", content: "A cachaça é o destilado mais antigo das Américas (1500s). A Caipirinha é patrimônio cultural — limão, açúcar e cachaça, nada mais. Mas o Brasil vai muito além: Rabo de Galo (cachaça + vermute), Batida (cachaça + leite condensado + fruta), Quentão (cachaça quente com especiarias, típico de Festa Junina). Bares como o SubAstor e o Guilhotina em São Paulo estão entre os melhores do mundo, reinventando drinks com ingredientes brasileiros: açaí, cupuaçu, cumaru e cacau." },
    ],
  },
  {
    id: "gelo-agua-temperatura",
    title: "Gelo, Água e Temperatura: A Ciência Oculta",
    subtitle: "Os detalhes invisíveis que fazem toda a diferença",
    category: "fundamentos",
    icon: "🧊",
    xpReward: 15,
    readTime: "9 min",
    modules: [
      { title: "Por que o gelo é o ingrediente mais importante", content: "O gelo representa até 25% do volume final de muitos drinks. Ele não só resfria — ele dilui, e essa diluição é essencial para integrar sabores e suavizar o álcool. Um Old Fashioned sem diluição adequada é apenas whisky com açúcar. A qualidade, o tamanho e a forma do gelo determinam a velocidade de diluição e, portanto, a experiência inteira do drink." },
      { title: "A física da fusão", content: "Gelo derrete mais rápido quando tem mais superfície em contato com o líquido. Gelo picado (muita superfície) dilui rapidamente — perfeito para Juleps e Mojitos que precisam de diluição rápida e temperatura baixíssima. Um cubo grande de 5cm (pouca superfície relativa) derrete devagar — ideal para Old Fashioned e whisky puro. Esfera de gelo derrete 30% mais devagar que um cubo do mesmo peso porque a esfera é o formato com menor relação superfície/volume.", highlight: true },
      { title: "Como fazer gelo cristalino em casa", content: "Gelo de freezer é opaco porque congela de fora para dentro, prendendo bolhas de ar no centro. Para gelo cristalino: use um cooler sem tampa dentro do freezer. A água congela de cima para baixo (direcionalmente), empurrando impurezas e bolhas para baixo. Após 24-36 horas, retire o bloco — o topo será cristalino e a base opaca. Corte a parte opaca e use o bloco cristalino." },
      { title: "Temperatura ideal por tipo de drink", content: "Drinks mexidos (Martini, Manhattan): -2°C a -4°C. Drinks agitados (Daiquiri, Margarita): -5°C a -7°C. Highballs e longdrinks: 0°C a 2°C. Cerveja: 3°C a 5°C. Vinho branco: 7°C a 10°C. Champagne: 6°C a 8°C. O frio adormece as papilas gustativas — drinks muito gelados mascaram sabores (bom para vodka ruim, péssimo para whisky bom)." },
      { title: "A água no drink", content: "A qualidade da água importa mais do que você imagina. Água com muito cloro estraga gelo e drinks com soda. Use água filtrada sempre. Para gelo premium, água mineral com baixo teor de minerais (como Voss) produz os melhores resultados. Em drinks como Whisky Highball japonês, a qualidade da soda é tão importante quanto a do whisky — Fever-Tree, Q Mixers ou soda caseira com carbonatador fazem diferença real.", highlight: true },
    ],
  },
  {
    id: "erros-comuns-bartender",
    title: "Os 10 Erros Fatais do Bartender Iniciante",
    subtitle: "Evite as armadilhas que destroem drinks perfeitos",
    category: "tecnicas",
    icon: "⚠️",
    xpReward: 20,
    readTime: "10 min",
    modules: [
      { title: "Erro #1: Não medir os ingredientes", content: "O erro mais comum e mais destrutivo. 'A olho' não funciona em coquetelaria. 5ml a mais de limão transformam um drink equilibrado em ácido insuportável. Use jigger SEMPRE. Bartenders profissionais que fazem free-pour treinaram milhares de horas — e mesmo assim, os melhores bares do mundo exigem jigger." },
      { title: "Erro #2: Usar gelo ruim", content: "Gelo velho de freezer absorve odores (cebola, peixe, plástico). Use gelo fresco, feito com água filtrada. Nunca reutilize gelo de uma preparação (ele já está diluído). Para drinks on the rocks, use cubos grandes. Para shaking, use cubos médios. Gelo é ingrediente — trate-o com respeito.", highlight: true },
      { title: "Erro #3: Agitar quando deveria mexer", content: "A regra: se todos os ingredientes são transparentes (destilados, vermute, bitters), MEXA. Se tem algo opaco (suco, cream, ovo), AGITE. Agitar um Martini cria bolhas e turva o drink. Mexer um Whisky Sour não emulsifica a clara de ovo. Cada técnica existe por uma razão — respeite-a." },
      { title: "Erro #4: Não gelar o copo", content: "Um drink perfeitamente preparado a -4°C servido em um copo à temperatura ambiente (22°C) sobe para 5°C em 30 segundos. Coloque copos no freezer 15 minutos antes, ou encha com gelo e água enquanto prepara o drink. A temperatura do copo é tão importante quanto a temperatura do drink." },
      { title: "Erro #5: Espremer limão direto no drink", content: "Sementes e polpa em excesso turvam e amarguem o drink. Esprema no jigger, coe, e então adicione ao drink. Ou use um espremedor manual que separa sementes. Suco de limão fresco é 1000x melhor que suco de garrafa — mas precisa ser limpo.", highlight: true },
      { title: "Erros #6-10: Armadilhas sutis", content: "#6: Guardar vermute fora da geladeira (oxida em dias — trate como vinho). #7: Encher demais o copo (deixe espaço para aromas). #8: Ignorar a decoração (é parte da experiência sensorial). #9: Usar refrigerante em vez de soda fresca (menos carbonatação = drink sem vida). #10: Ter pressa — um drink preparado com calma e intenção sempre será melhor que um feito às pressas." },
    ],
  },
  {
    id: "drinks-por-estacao",
    title: "Drinks para Cada Estação do Ano",
    subtitle: "Sazonalidade e ingredientes frescos fazem drinks inesquecíveis",
    category: "cultura",
    icon: "🌿",
    xpReward: 15,
    readTime: "9 min",
    modules: [
      { title: "Por que sazonalidade importa", content: "Frutas e ervas frescas no auge da safra são incomparavelmente superiores. Um Mojito com hortelã fresca do jardim vs hortelã de supermercado é outro drink. Bartenders dos melhores bares do mundo mudam o cardápio a cada estação, usando ingredientes locais e sazonais. Em casa, o mesmo princípio transforma drinks comuns em experiências memoráveis." },
      { title: "Verão — Refrescância máxima", content: "O calor pede drinks gelados, leves e cítricos. Mojito com hortelã fresca e bastante gelo picado. Aperol Spritz com prosecco bem gelado. Margarita frozen com frutas da estação. Gin Tônica com pepino e alecrim. Caipirinha com frutas tropicais (manga, maracujá, abacaxi). Use mais gelo, mais cítricos e menos destilados pesados. Highballs e spritz são reis do verão.", highlight: true },
      { title: "Outono — Especiarias e aconchego", content: "Com a chegada do frio, drinks pedem profundidade. Apple Cider Bourbon: bourbon + suco de maçã quente + canela. Penicillin (whisky + mel-gengibre + limão) é perfeito para dias frescos. Old Fashioned com xarope de maple e bitters de laranja. Espresso Martini para noites que pedem energia. Frutas do outono: maçã, pêra, figo e romã trazem sabores ricos e complexos." },
      { title: "Inverno — Calor e sofisticação", content: "Drinks quentes brilham no inverno. Irish Coffee (café + whisky + creme) é abraço líquido. Hot Toddy (whisky + mel + limão + água quente) é remédio e prazer. Quentão brasileiro (cachaça + gengibre + especiarias). Mulled Wine/Vinho Quente (vinho tinto + laranja + canela + cravo). Para drinks frios, escolha encorpados: Manhattan, Boulevardier, Rob Roy — drinks que aquecem por dentro.", highlight: true },
      { title: "Primavera — Flores e renovação", content: "A primavera pede leveza e aromas florais. Gin com St-Germain (licor de flor de sabugueiro) e soda. Lavender Lemonade com vodka. French 75 com champagne para celebrar o retorno do sol. Hugo Spritz (prosecco + xarope de flor de sabugueiro + hortelã). Ervas frescas (manjericão, tomilho, estragão) começam a brotar — use-as generosamente. É a estação dos drinks delicados e elegantes." },
    ],
  },
  {
    id: "bitters-essenciais",
    title: "O Universo dos Bitters",
    subtitle: "A especiaria secreta que transforma qualquer drink",
    category: "destilados",
    icon: "💧",
    xpReward: 20,
    readTime: "10 min",
    modules: [
      { title: "O que são bitters?", content: "Bitters são tinturas altamente concentradas de ervas, especiarias, cascas, raízes e frutas em base alcoólica. São usados em dashes (gotas) — 2-3 gotas bastam para transformar um drink. Funcionam exatamente como sal e pimenta na comida: não são o sabor principal, mas amplificam e conectam todos os outros sabores. Sem bitters, muitos drinks clássicos simplesmente não existem." },
      { title: "Angostura — O Rei dos Bitters", content: "Criado em 1824 pelo Dr. Johann Siegert em Angostura (hoje Ciudad Bolívar), Venezuela, como remédio para dor de estômago dos soldados de Simón Bolívar. A fórmula secreta inclui gentiana, canela, cravo, cardamomo e mais de 40 ingredientes. É essencial em Old Fashioned, Manhattan, Whisky Sour, Champagne Cocktail e Pink Gin. O rótulo superdimensionado na garrafa é um 'erro' de design que se tornou marca registrada.", highlight: true },
      { title: "Peychaud's e Orange Bitters", content: "Peychaud's foi criado em 1830 por Antoine Peychaud, farmacêutico de Nova Orleans. Mais leve e floral que Angostura, com notas de anis. É o bitters obrigatório do Sazerac. Orange bitters (Regans', Fee Brothers, Angostura Orange) trazem notas cítricas amadeiradas. São essenciais em Dry Martini (muitos bartenders preferem 2 dashes de orange bitters ao vermute) e complementam drinks com gin e whisky." },
      { title: "Bitters artesanais e exóticos", content: "A revolução craft trouxe centenas de bitters artesanais: Chocolate bitters (perfeito em Espresso Martini e Old Fashioned com bourbon). Mole bitters (inspirado no mole mexicano — chocolate, pimenta, especiarias). Celery bitters (aipo — incrível em Bloody Mary e Gin Tônica). Lavender bitters (com gin e vodka). Hellfire bitters (pimenta — para dar kick a qualquer drink). Comece com Angostura e Orange, depois expanda.", highlight: true },
      { title: "Fazendo seus próprios bitters", content: "Bitters caseiros são surpreendentemente simples. Base: vodka ou álcool de cereais de alta graduação. Adicione botânicos secos (cascas de laranja, raízes de gentiana, canela, cravo, cardamomo). Infusione por 2-4 semanas em frasco de vidro, agitando diariamente. Coe, adicione xarope simples para suavizar (opcional). Sua criação única pode ser a assinatura dos seus drinks — nenhum bar terá igual." },
    ],
  },
  {
    id: "montar-bar-profissional",
    title: "Como Montar um Bar Completo em Casa",
    subtitle: "Do essencial ao premium — um guia por etapas de investimento",
    category: "negocios",
    icon: "🏠",
    xpReward: 25,
    readTime: "12 min",
    modules: [
      { title: "Fase 1 — O Starter Kit (R$200-400)", content: "Comece com o mínimo para fazer drinks incríveis. Utensílios: coqueteleira tipo Boston (duas peças), jigger 30/60ml, colher de bar, muddler (socador), coador Hawthorne. Destilados: vodka (Smirnoff), rum branco (Bacardi), tequila blanco (El Jimador). Mixers: limões, limas, xarope simples (faça em casa), gelo de qualidade. Com esses itens você faz Caipiroska, Daiquiri, Margarita, Mojito e mais 15 drinks." },
      { title: "Fase 2 — Expansão Clássica (+ R$300-500)", content: "Adicione: gin London Dry (Tanqueray), bourbon (Jim Beam ou Buffalo Trace), Campari, vermute doce e seco (Cinzano ou Martini). Licor: Cointreau ou triple sec. Bitters: Angostura. Agora você faz: Gin Tônica, Negroni, Old Fashioned, Manhattan, Martini, Cosmopolitan, Sidecar, Whisky Sour. Seu repertório salta para 40+ drinks.", highlight: true },
      { title: "Fase 3 — Bar de Respeito (+ R$400-600)", content: "Scotch blended (Johnnie Walker Black), rum envelhecido (Zacapa ou Diplomatico), Aperol, Baileys, Kahlúa, St-Germain, Maraschino. Tônica premium (Fever-Tree), água de coco, suco de cranberry. Utensílios: mixing glass, strainer fine mesh, espremedor de citrus, copos proper (rocks, highball, coupe). Você agora cobre 80% do menu de qualquer cocktail bar." },
      { title: "Fase 4 — Bar Premium (+ R$500-1000)", content: "Destilados premium para impressionar: gin Hendrick's ou Roku, bourbon Maker's Mark ou Woodford Reserve, tequila Patrón ou Don Julio, single malt (Glenfiddich 12). Licores especiais: Chartreuse (verde e amarela), Fernet-Branca, Benedictine, Luxardo Maraschino. Bitters variados: Orange, Peychaud's. Ferramentas: prensa de citrus profissional, blocos de gelo, defumador. Seu bar é superior a 90% dos bares comerciais." },
      { title: "Organização e armazenamento", content: "Vermute e vinhos fortificados: sempre na geladeira após abertos (duram 2-4 semanas). Destilados: em pé, longe da luz solar direta (duram indefinidamente fechados). Frutas: compre semanalmente. Xaropes caseiros: na geladeira, duram 2-4 semanas (adicione 30ml de vodka como conservante). Bitters: duram anos. Monte uma 'estação de bar' permanente em casa — bandeja bonita, garrafas organizadas, tools acessíveis.", highlight: true },
      { title: "O mindset do bar perfeito", content: "Não compre tudo de uma vez. Comece pela Fase 1, pratique bastante, e vá expandindo conforme sua habilidade e curiosidade crescem. Um bar com 6 garrafas e técnica impecável impressiona mais que um bar com 30 garrafas e drinks mal feitos. Invista em ingredientes frescos (limões, ervas, gelo bom) antes de destilados caros. A diferença entre um drink medíocre e um extraordinário raramente está no preço da garrafa." },
    ],
  },
  {
    id: "drinks-instagramaveis",
    title: "Drinks Instagramáveis: Cor, Efeitos e Apresentação",
    subtitle: "Crie drinks que são tão fotogênicos quanto saborosos",
    category: "tecnicas",
    icon: "📸",
    xpReward: 15,
    readTime: "8 min",
    modules: [
      { title: "A psicologia da cor nos drinks", content: "Cores influenciam expectativas de sabor antes mesmo do primeiro gole. Vermelho/rosa = frutado e doce (Cosmopolitan, Campari). Azul = refrescante e exótico (Blue Lagoon, Blue Curaçao). Verde = herbal e fresco (Last Word, Chartreuse). Amarelo/laranja = cítrico e energético (Tequila Sunrise, Aperol Spritz). Roxo/violeta = floral e misterioso (Aviation, drinks com borboleta azul). Use a cor como primeiro ingrediente visual." },
      { title: "Butterfly Pea — A magia que muda de cor", content: "Flor de borboleta azul (Clitoria ternatea) é o ingrediente mais instagramável que existe. Infusionada em gin ou vodka, cria um líquido azul intenso. Quando você adiciona ácido (limão, tônica), o pH muda e o drink se torna ROXO/ROSA na frente da câmera. O efeito é mágico e completamente natural. Gin infusionado com butterfly pea + tônica = Gin Tônica que muda de cor ao ser servido.", highlight: true },
      { title: "Efeitos de fumaça e névoa", content: "Gelo seco (CO₂ sólido) cria névoa dramática quando submerso em líquido. ATENÇÃO: nunca engula gelo seco — serve apenas como efeito visual na base do copo (com grelha de segurança) ou no recipiente de apresentação. Alternativa mais segura: defumadores de drinks com chips de madeira criam aroma e uma nuvem efêmera ao levantar a cloche (tampa de vidro). Perfeito para Old Fashioned defumado." },
      { title: "Decorações que viralizam", content: "Flores comestíveis congeladas em cubos de gelo. Espuma de cor contrastante (hibisco vermelho sobre drink claro). Bordas com ingredientes coloridos (matcha verde, carvão ativado preto, tajín vermelho). Drinks servidos em recipientes inesperados (coco, abacaxi, copo de ciência). Cascas de citrus esculpidas em formatos criativos. Glitter comestível (mica de grau alimentício) cria efeito galaxia." },
      { title: "Dicas de fotografia de drinks", content: "Luz natural é sempre superior — fotografe perto de janelas. Fundo escuro faz drinks coloridos 'estourarem'. Ângulo de 45° é o mais versátil. Adicione condensação borrifando água no copo gelado antes de fotografar. Prepare a decoração antes de adicionar gelo — o relógio começa a correr quando o gelo entra. O drink mais fotogênico é aquele que é bonito E delicioso. Nunca sacrifique sabor por estética.", highlight: true },
    ],
  },
  {
    id: "mocktails-premium",
    title: "Mocktails Premium: Drinks Sem Álcool de Verdade",
    subtitle: "Sofisticação e sabor sem uma gota de álcool",
    category: "fundamentos",
    icon: "🍹",
    xpReward: 15,
    readTime: "9 min",
    modules: [
      { title: "A revolução sóbria", content: "O movimento 'sober curious' explodiu globalmente. Bares premiados agora têm seções inteiras de mocktails tão elaborados quanto seus drinks alcoólicos. Não se trata de simplesmente remover o álcool — trata-se de criar experiências complexas de sabor usando técnicas e ingredientes premium. Um mocktail bem feito deve ter a mesma estrutura de um cocktail: corpo, acidez, doçura, amargor e complexidade." },
      { title: "Construindo corpo sem álcool", content: "O álcool dá 'corpo' e viscosidade ao drink. Sem ele, os drinks ficam 'ralos'. Soluções: chá forte (especialmente chá preto) adiciona taninos e estrutura. Xaropes mais concentrados (2:1) dão viscosidade. Aquafaba (água do grão-de-bico) cria espuma e textura. Shrubs (vinagre de frutas) adicionam profundidade. Kombucha traz complexidade fermentada. Tônicas premium (Fever-Tree, Q Mixers) contribuem com amargos botânicos.", highlight: true },
      { title: "5 Mocktails que impressionam qualquer um", content: "1) Virgin Espresso Tonic: espresso duplo + tônica premium + xarope simples sobre gelo — sofisticado e energizante. 2) Cucumber Garden: suco de pepino + limão + xarope de manjericão + soda — fresco e elegante. 3) Spicy Mango Smash: manga fresca + jalapeño + limão + xarope de agave — complexo e surpreendente. 4) Berry Shrub Fizz: shrub de frutas vermelhas + soda + hortelã — ácido, frutado e complexo. 5) Golden Hour: suco de abacaxi + cúrcuma + gengibre + mel + limão — antiinflamatório e delicioso." },
      { title: "Destilados sem álcool", content: "Uma nova categoria de bebidas surgiu: destilados sem álcool que imitam gin, whisky e tequila. Seedlip (pioneiro) oferece versões herbal, cítrica e aromática. Lyre's reproduz quase todo destilado clássico. Monday Gin, Ritual Tequila e CleanCo completam o mercado. São caros, mas permitem fazer Negroni, G&T e Margarita sem álcool com estrutura surpreendentemente similar ao original.", highlight: true },
      { title: "Apresentação é tudo", content: "Mocktails merecem os mesmos copos, decorações e atenção que cocktails alcoólicos. Sirva em copo de coupe, não em copo plástico. Use decorações elaboradas — flores comestíveis, espirais de citrus, ervas aromáticas. Nomeie seus mocktails com criatividade (não 'Virgin Mojito' — dê um nome próprio). A experiência visual e olfativa deve ser tão memorável que ninguém sinta falta do álcool." },
    ],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getAllArticles(): Article[] {
  return articles;
}
