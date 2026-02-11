export interface Drink {
  id: string;
  name: string;
  category: string;
  image: string;
  ingredients: string[];
  steps: string[];
  difficulty: "Fácil" | "Médio" | "Avançado";
  time: string;
}

export const categories = [
  "Vodka",
  "Rum / Bacardi",
  "Gin",
  "Tequila",
  "Whisky",
  "Coquetéis Clássicos",
  "Drinks Tropicais",
  "Não Alcoólicos",
  "Shots e Rápidos",
  "Exóticos e Internacionais",
];

export const drinks: Drink[] = [
  // === VODKA ===
  {
    id: "moscow-mule",
    name: "Moscow Mule",
    category: "Vodka",
    image: "moscow-mule",
    ingredients: ["50ml de vodka", "15ml de suco de limão fresco", "120ml de ginger beer", "Gelo", "Rodela de limão e hortelã"],
    steps: ["Preencha a caneca de cobre com gelo.", "Adicione a vodka e o suco de limão.", "Complete com ginger beer bem gelada.", "Mexa suavemente e decore com limão e hortelã."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "bloody-mary",
    name: "Bloody Mary",
    category: "Vodka",
    image: "bloody-mary",
    ingredients: ["50ml de vodka", "120ml de suco de tomate", "15ml de suco de limão", "2 dashes de molho inglês", "2 dashes de Tabasco", "Sal e pimenta a gosto", "Talo de aipo para decorar"],
    steps: ["Em um copo alto com gelo, adicione a vodka.", "Despeje o suco de tomate e o suco de limão.", "Adicione o molho inglês, Tabasco, sal e pimenta.", "Mexa bem e decore com o talo de aipo."],
    difficulty: "Médio",
    time: "5 min",
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    category: "Vodka",
    image: "cosmopolitan",
    ingredients: ["40ml de vodka cítrica", "15ml de Cointreau", "30ml de suco de cranberry", "10ml de suco de limão fresco", "Gelo"],
    steps: ["Coloque todos os ingredientes na coqueteleira com gelo.", "Agite vigorosamente por 15 segundos.", "Coe para uma taça martini gelada.", "Decore com uma casca de laranja flamejada."],
    difficulty: "Médio",
    time: "5 min",
  },
  {
    id: "screwdriver",
    name: "Screwdriver",
    category: "Vodka",
    image: "screwdriver",
    ingredients: ["50ml de vodka", "150ml de suco de laranja fresco", "Gelo", "Fatia de laranja"],
    steps: ["Preencha um copo alto com gelo.", "Adicione a vodka.", "Complete com suco de laranja fresco.", "Mexa suavemente e decore com fatia de laranja."],
    difficulty: "Fácil",
    time: "2 min",
  },
  {
    id: "white-russian",
    name: "White Russian",
    category: "Vodka",
    image: "white-russian",
    ingredients: ["50ml de vodka", "20ml de licor de café (Kahlúa)", "30ml de creme de leite fresco", "Gelo"],
    steps: ["Coloque gelo em um copo old fashioned.", "Adicione a vodka e o licor de café.", "Mexa suavemente.", "Despeje o creme de leite sobre as costas de uma colher para criar camada."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "black-russian",
    name: "Black Russian",
    category: "Vodka",
    image: "black-russian",
    ingredients: ["50ml de vodka", "25ml de licor de café (Kahlúa)", "Gelo"],
    steps: ["Coloque gelo em um copo old fashioned.", "Adicione a vodka e o licor de café.", "Mexa suavemente por alguns segundos.", "Sirva sem decoração adicional."],
    difficulty: "Fácil",
    time: "2 min",
  },

  // === RUM / BACARDI ===
  {
    id: "mojito",
    name: "Mojito",
    category: "Rum / Bacardi",
    image: "hero-mojito",
    ingredients: ["50ml de rum branco", "30ml de suco de limão", "2 colheres de açúcar", "6-8 folhas de hortelã", "Água com gás", "Gelo"],
    steps: ["Macere as folhas de hortelã com açúcar e suco de limão no copo.", "Adicione o rum branco.", "Preencha com gelo picado.", "Complete com água com gás.", "Mexa suavemente e decore com um ramo de hortelã."],
    difficulty: "Fácil",
    time: "5 min",
  },
  {
    id: "daiquiri",
    name: "Daiquiri",
    category: "Rum / Bacardi",
    image: "daiquiri",
    ingredients: ["60ml de rum branco", "25ml de suco de limão fresco", "15ml de xarope simples", "Gelo"],
    steps: ["Adicione todos os ingredientes na coqueteleira com gelo.", "Agite vigorosamente por 15 segundos.", "Coe para uma taça coupe gelada.", "Decore com uma rodela de limão."],
    difficulty: "Fácil",
    time: "5 min",
  },
  {
    id: "pina-colada",
    name: "Piña Colada",
    category: "Rum / Bacardi",
    image: "pina-colada",
    ingredients: ["60ml de rum branco", "90ml de suco de abacaxi", "30ml de creme de coco", "Gelo", "Fatia de abacaxi para decorar"],
    steps: ["Coloque todos os ingredientes no liquidificador com gelo.", "Bata até ficar cremoso e homogêneo.", "Sirva em um copo alto ou copo hurricane.", "Decore com uma fatia de abacaxi e cereja."],
    difficulty: "Fácil",
    time: "5 min",
  },
  {
    id: "cuba-libre",
    name: "Cuba Libre",
    category: "Rum / Bacardi",
    image: "cuba-libre",
    ingredients: ["50ml de rum dourado", "150ml de coca-cola", "15ml de suco de limão", "Rodela de limão", "Gelo"],
    steps: ["Preencha um copo alto com gelo.", "Adicione o rum e o suco de limão.", "Complete com coca-cola gelada.", "Mexa suavemente e decore com rodela de limão."],
    difficulty: "Fácil",
    time: "2 min",
  },
  {
    id: "mai-tai",
    name: "Mai Tai",
    category: "Rum / Bacardi",
    image: "mai-tai",
    ingredients: ["30ml de rum branco", "30ml de rum escuro", "15ml de Curaçao de laranja", "15ml de xarope de orgeat", "25ml de suco de limão", "Hortelã para decorar"],
    steps: ["Adicione todos os ingredientes exceto o rum escuro na coqueteleira com gelo.", "Agite vigorosamente.", "Coe para um copo old fashioned com gelo.", "Flutue o rum escuro por cima.", "Decore com hortelã e fatia de abacaxi."],
    difficulty: "Médio",
    time: "5 min",
  },

  // === GIN ===
  {
    id: "gin-tonic",
    name: "Gin Tônica",
    category: "Gin",
    image: "gin-tonic",
    ingredients: ["50ml de gin", "150ml de água tônica", "Fatias de pepino ou limão", "Zimbro (opcional)", "Gelo"],
    steps: ["Preencha um copo balão com bastante gelo.", "Despeje o gin sobre o gelo.", "Adicione a água tônica delicadamente pela lateral do copo.", "Mexa suavemente uma vez.", "Decore com fatias de pepino, limão ou especiarias a gosto."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "negroni",
    name: "Negroni",
    category: "Gin",
    image: "negroni",
    ingredients: ["30ml de gin", "30ml de Campari", "30ml de vermute tinto doce", "Gelo", "Casca de laranja"],
    steps: ["Coloque gelo em um copo old fashioned.", "Adicione o gin, Campari e vermute.", "Mexa suavemente por 20-30 segundos.", "Esprema a casca de laranja sobre o drink.", "Coloque a casca no copo como decoração."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "tom-collins",
    name: "Tom Collins",
    category: "Gin",
    image: "tom-collins",
    ingredients: ["45ml de gin", "30ml de suco de limão fresco", "15ml de xarope simples", "Água com gás", "Rodela de limão e cereja"],
    steps: ["Em um copo alto com gelo, adicione gin, suco de limão e xarope.", "Mexa bem.", "Complete com água com gás.", "Decore com rodela de limão e cereja."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "gin-fizz",
    name: "Gin Fizz",
    category: "Gin",
    image: "gin-fizz",
    ingredients: ["60ml de gin", "30ml de suco de limão", "15ml de xarope simples", "1 clara de ovo (opcional)", "Água com gás"],
    steps: ["Agite gin, suco de limão, xarope e clara de ovo (dry shake sem gelo).", "Adicione gelo e agite novamente por 15 segundos.", "Coe para um copo alto sem gelo.", "Complete com água com gás.", "Decore com rodela de limão."],
    difficulty: "Médio",
    time: "5 min",
  },

  // === TEQUILA ===
  {
    id: "margarita",
    name: "Margarita",
    category: "Tequila",
    image: "margarita",
    ingredients: ["50ml de tequila", "25ml de licor de laranja (Cointreau)", "25ml de suco de limão fresco", "Sal para a borda", "Gelo"],
    steps: ["Passe limão na borda do copo e mergulhe no sal.", "Em uma coqueteleira, adicione gelo, tequila, licor e suco de limão.", "Agite vigorosamente por 15 segundos.", "Coe para o copo preparado com a borda de sal.", "Decore com uma rodela de limão."],
    difficulty: "Fácil",
    time: "5 min",
  },
  {
    id: "tequila-sunrise",
    name: "Tequila Sunrise",
    category: "Tequila",
    image: "tequila-sunrise",
    ingredients: ["45ml de tequila", "90ml de suco de laranja", "15ml de grenadine", "Gelo", "Fatia de laranja e cereja"],
    steps: ["Preencha um copo alto com gelo.", "Adicione a tequila e o suco de laranja, mexa.", "Despeje a grenadine lentamente pela lateral do copo.", "Deixe a grenadine descer naturalmente criando o efeito sunrise.", "Decore com uma fatia de laranja e cereja."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "paloma",
    name: "Paloma",
    category: "Tequila",
    image: "paloma",
    ingredients: ["50ml de tequila", "120ml de soda de grapefruit (Squirt)", "15ml de suco de limão", "Sal para borda", "Gelo"],
    steps: ["Passe limão na borda do copo e mergulhe no sal.", "Preencha com gelo.", "Adicione a tequila e o suco de limão.", "Complete com soda de grapefruit.", "Mexa suavemente e decore com fatia de grapefruit."],
    difficulty: "Fácil",
    time: "3 min",
  },

  // === WHISKY ===
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    category: "Whisky",
    image: "old-fashioned",
    ingredients: ["60ml de bourbon ou rye whisky", "1 cubo de açúcar", "2-3 dashes de Angostura bitters", "Casca de laranja", "Cereja maraschino", "Gelo grande"],
    steps: ["Coloque o cubo de açúcar no copo e adicione os bitters.", "Adicione um pouco de água e macere até dissolver o açúcar.", "Adicione o whisky e mexa suavemente.", "Coloque um cubo grande de gelo.", "Esprema a casca de laranja sobre o drink e coloque no copo.", "Finalize com uma cereja maraschino."],
    difficulty: "Médio",
    time: "5 min",
  },
  {
    id: "whisky-sour",
    name: "Whisky Sour",
    category: "Whisky",
    image: "whisky-sour",
    ingredients: ["60ml de bourbon", "30ml de suco de limão fresco", "15ml de xarope simples", "1 clara de ovo (opcional)", "Angostura bitters", "Cereja e casca de limão"],
    steps: ["Agite todos os ingredientes sem gelo primeiro (dry shake).", "Adicione gelo e agite vigorosamente por 15 segundos.", "Coe para um copo old fashioned com gelo.", "Adicione alguns dashes de Angostura bitters por cima.", "Decore com cereja e casca de limão."],
    difficulty: "Médio",
    time: "5 min",
  },
  {
    id: "manhattan",
    name: "Manhattan",
    category: "Whisky",
    image: "manhattan",
    ingredients: ["60ml de rye whisky", "30ml de vermute tinto doce", "2 dashes de Angostura bitters", "Cereja maraschino"],
    steps: ["Coloque gelo em um mixing glass.", "Adicione o whisky, vermute e bitters.", "Mexa suavemente por 30 segundos.", "Coe para uma taça coupe gelada.", "Decore com uma cereja maraschino."],
    difficulty: "Médio",
    time: "5 min",
  },
  {
    id: "mint-julep",
    name: "Mint Julep",
    category: "Whisky",
    image: "mint-julep",
    ingredients: ["60ml de bourbon", "10ml de xarope simples", "8-10 folhas de hortelã fresca", "Gelo picado"],
    steps: ["Macere as folhas de hortelã com o xarope no copo julep.", "Adicione o bourbon.", "Preencha com gelo picado até o topo.", "Mexa até o copo ficar gelado.", "Decore com um ramo generoso de hortelã."],
    difficulty: "Fácil",
    time: "5 min",
  },

  // === COQUETÉIS CLÁSSICOS ===
  {
    id: "martini",
    name: "Martini",
    category: "Coquetéis Clássicos",
    image: "martini",
    ingredients: ["60ml de gin (ou vodka)", "10ml de vermute seco", "Azeitona ou twist de limão"],
    steps: ["Preencha um mixing glass com gelo.", "Adicione o gin e o vermute.", "Mexa suavemente por 30 segundos.", "Coe para uma taça martini gelada.", "Decore com azeitona ou twist de limão."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "caipirinha",
    name: "Caipirinha",
    category: "Coquetéis Clássicos",
    image: "caipirinha",
    ingredients: ["1 limão cortado em pedaços", "2 colheres de açúcar", "50ml de cachaça", "Gelo a gosto"],
    steps: ["Corte o limão em pedaços pequenos e coloque no copo.", "Adicione o açúcar sobre o limão.", "Macere bem o limão com o açúcar usando um socador.", "Adicione a cachaça e misture.", "Complete com gelo picado e mexa bem.", "Decore com uma rodela de limão e sirva."],
    difficulty: "Fácil",
    time: "5 min",
  },
  {
    id: "french-75",
    name: "French 75",
    category: "Coquetéis Clássicos",
    image: "french-75",
    ingredients: ["30ml de gin", "15ml de suco de limão", "10ml de xarope simples", "90ml de champagne", "Twist de limão"],
    steps: ["Agite gin, suco de limão e xarope com gelo.", "Coe para uma flute de champagne.", "Complete com champagne gelado.", "Decore com twist de limão."],
    difficulty: "Médio",
    time: "5 min",
  },

  // === DRINKS TROPICAIS ===
  {
    id: "sex-on-beach",
    name: "Sex on the Beach",
    category: "Drinks Tropicais",
    image: "sex-on-beach",
    ingredients: ["40ml de vodka", "20ml de licor de pêssego", "60ml de suco de cranberry", "60ml de suco de laranja", "Gelo"],
    steps: ["Preencha um copo alto com gelo.", "Adicione a vodka e o licor de pêssego.", "Despeje o suco de cranberry e o suco de laranja.", "Mexa suavemente.", "Decore com uma fatia de laranja."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "blue-lagoon",
    name: "Blue Lagoon",
    category: "Drinks Tropicais",
    image: "blue-lagoon",
    ingredients: ["40ml de vodka", "20ml de Curaçao Blue", "120ml de limonada ou sprite", "Gelo", "Rodela de limão"],
    steps: ["Preencha um copo alto com gelo.", "Adicione a vodka e o Curaçao Blue.", "Complete com limonada ou sprite.", "Mexa suavemente.", "Decore com rodela de limão e cereja."],
    difficulty: "Fácil",
    time: "3 min",
  },

  // === NÃO ALCOÓLICOS ===
  {
    id: "virgin-mojito",
    name: "Mojito Sem Álcool",
    category: "Não Alcoólicos",
    image: "virgin-mojito",
    ingredients: ["6-8 folhas de hortelã fresca", "30ml de suco de limão", "20ml de xarope simples", "Água com gás", "Gelo"],
    steps: ["Macere as folhas de hortelã com o xarope e suco de limão.", "Adicione bastante gelo picado.", "Complete com água com gás.", "Mexa suavemente e decore com hortelã e limão."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "shirley-temple",
    name: "Shirley Temple",
    category: "Não Alcoólicos",
    image: "shirley-temple",
    ingredients: ["200ml de ginger ale ou sprite", "30ml de grenadine", "Cereja maraschino", "Rodela de laranja", "Gelo"],
    steps: ["Preencha um copo alto com gelo.", "Despeje o ginger ale ou sprite.", "Adicione a grenadine lentamente.", "Mexa suavemente.", "Decore com cereja e rodela de laranja."],
    difficulty: "Fácil",
    time: "2 min",
  },
  {
    id: "limonada-tropical",
    name: "Limonada Tropical",
    category: "Não Alcoólicos",
    image: "limonada-tropical",
    ingredients: ["2 limões espremidos", "30ml de xarope de maracujá", "Folhas de hortelã", "Água com gás", "Gelo"],
    steps: ["Esprema os limões em um copo alto.", "Adicione o xarope de maracujá.", "Coloque bastante gelo.", "Complete com água com gás.", "Decore com hortelã e fatia de maracujá."],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "smoothie-frutas",
    name: "Smoothie de Frutas",
    category: "Não Alcoólicos",
    image: "smoothie-frutas",
    ingredients: ["1 banana", "5 morangos", "100ml de suco de laranja", "50ml de iogurte natural", "Gelo", "Mel a gosto"],
    steps: ["Coloque todas as frutas no liquidificador.", "Adicione o suco de laranja e iogurte.", "Acrescente gelo e mel.", "Bata até ficar cremoso.", "Sirva em um copo alto decorado com frutas."],
    difficulty: "Fácil",
    time: "5 min",
  },

  // === SHOTS E RÁPIDOS ===
  {
    id: "jagerbomb",
    name: "Jägerbomb",
    category: "Shots e Rápidos",
    image: "jagerbomb",
    ingredients: ["30ml de Jägermeister", "250ml de energético (Red Bull)"],
    steps: ["Despeje o energético em um copo largo.", "Coloque a dose de Jägermeister em um shot glass.", "Mergulhe o shot dentro do copo com energético.", "Beba de uma vez!"],
    difficulty: "Fácil",
    time: "1 min",
  },
  {
    id: "b52",
    name: "B-52",
    category: "Shots e Rápidos",
    image: "b52",
    ingredients: ["15ml de Kahlúa", "15ml de Baileys Irish Cream", "15ml de Grand Marnier"],
    steps: ["Despeje o Kahlúa no shot glass.", "Com as costas de uma colher, adicione o Baileys suavemente.", "Repita o processo com o Grand Marnier.", "As três camadas devem ficar separadas.", "Pode ser servido flamejado (opcional)."],
    difficulty: "Médio",
    time: "3 min",
  },
  {
    id: "kamikaze",
    name: "Kamikaze",
    category: "Shots e Rápidos",
    image: "kamikaze",
    ingredients: ["30ml de vodka", "15ml de Cointreau", "15ml de suco de limão fresco"],
    steps: ["Adicione todos os ingredientes na coqueteleira com gelo.", "Agite vigorosamente.", "Coe para um shot glass.", "Sirva gelado."],
    difficulty: "Fácil",
    time: "2 min",
  },
  {
    id: "lemon-drop",
    name: "Lemon Drop",
    category: "Shots e Rápidos",
    image: "lemon-drop",
    ingredients: ["40ml de vodka cítrica", "20ml de Cointreau", "25ml de suco de limão fresco", "Açúcar para a borda"],
    steps: ["Passe limão na borda da taça e mergulhe no açúcar.", "Agite vodka, Cointreau e suco de limão com gelo.", "Coe para a taça preparada.", "Decore com uma rodela de limão."],
    difficulty: "Fácil",
    time: "3 min",
  },

  // === EXÓTICOS E INTERNACIONAIS ===
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    category: "Exóticos e Internacionais",
    image: "aperol-spritz",
    ingredients: ["90ml de prosecco", "60ml de Aperol", "30ml de água com gás", "Fatia de laranja", "Gelo"],
    steps: ["Preencha uma taça de vinho grande com gelo.", "Adicione o prosecco primeiro.", "Depois adicione o Aperol.", "Complete com um splash de água com gás.", "Decore com uma fatia de laranja."],
    difficulty: "Fácil",
    time: "2 min",
  },
  {
    id: "pisco-sour",
    name: "Pisco Sour",
    category: "Exóticos e Internacionais",
    image: "pisco-sour",
    ingredients: ["60ml de pisco", "30ml de suco de limão", "20ml de xarope simples", "1 clara de ovo", "Angostura bitters"],
    steps: ["Adicione pisco, suco de limão, xarope e clara na coqueteleira.", "Agite sem gelo por 15 segundos (dry shake).", "Adicione gelo e agite novamente por 15 segundos.", "Coe para uma taça coupe.", "Adicione 3 gotas de Angostura bitters por cima da espuma."],
    difficulty: "Médio",
    time: "5 min",
  },
  {
    id: "sangria",
    name: "Sangria",
    category: "Exóticos e Internacionais",
    image: "sangria",
    ingredients: ["1 garrafa de vinho tinto", "100ml de conhaque", "50ml de licor de laranja", "Frutas variadas (laranja, maçã, limão)", "200ml de suco de laranja", "Açúcar a gosto", "Água com gás"],
    steps: ["Corte as frutas em pedaços e coloque em uma jarra.", "Adicione o vinho, conhaque e licor.", "Acrescente o suco de laranja e açúcar.", "Misture bem e refrigere por pelo menos 2 horas.", "Na hora de servir, adicione gelo e água com gás.", "Sirva com as frutas."],
    difficulty: "Fácil",
    time: "10 min + 2h",
  },
  {
    id: "caipiroska",
    name: "Caipiroska",
    category: "Exóticos e Internacionais",
    image: "caipiroska",
    ingredients: ["50ml de vodka", "1 limão (ou morango/kiwi)", "2 colheres de açúcar", "Gelo picado"],
    steps: ["Corte a fruta em pedaços no copo.", "Adicione o açúcar.", "Macere bem a fruta com o açúcar.", "Adicione a vodka.", "Complete com gelo picado e mexa bem."],
    difficulty: "Fácil",
    time: "5 min",
  },
];

export const tips = [
  {
    id: "tip-1",
    title: "O Gelo Perfeito",
    content: "Use gelo cristalino para drinks premium. Congele água filtrada em recipientes isolados para evitar bolhas de ar. Gelo maior derrete mais devagar e dilui menos o drink.",
  },
  {
    id: "tip-2",
    title: "Técnica de Agitação",
    content: "Agite drinks com cítricos e xaropes. Mexa drinks que são 100% destilados. A regra é simples: se tem ingrediente turvo, agite. Se é tudo transparente, mexa.",
  },
  {
    id: "tip-3",
    title: "Decorações que Impressionam",
    content: "Flamejar cascas de laranja libera óleos essenciais aromáticos. Ervas frescas como hortelã e alecrim elevam a experiência visual e olfativa do drink.",
  },
  {
    id: "tip-4",
    title: "Xarope Simples Caseiro",
    content: "Misture partes iguais de açúcar e água quente. Mexa até dissolver completamente. Guarde na geladeira por até 2 semanas. É a base de muitos coquetéis clássicos.",
  },
  {
    id: "tip-5",
    title: "Temperatura é Tudo",
    content: "Resfrie suas taças antes de servir. Coloque no freezer por 10 minutos ou encha com gelo e água gelada. Um drink bem gelado é sempre mais refrescante.",
  },
  {
    id: "tip-6",
    title: "Combinações de Sabores",
    content: "Siga a regra dos opostos: doce + ácido, amargo + doce. Cítricos combinam com quase tudo. Ervas frescas adicionam complexidade aromática.",
  },
  {
    id: "tip-7",
    title: "Como Fazer Dry Shake",
    content: "O dry shake (agitar sem gelo) é usado em drinks com clara de ovo. Agite primeiro sem gelo para emulsificar, depois adicione gelo e agite novamente para resfriar.",
  },
  {
    id: "tip-8",
    title: "Medidas Certas",
    content: "Use um dosador (jigger) para garantir proporções corretas. A diferença entre um drink bom e um excelente está nas medidas precisas. Nunca estime 'no olho'.",
  },
  {
    id: "tip-9",
    title: "Borda de Sal ou Açúcar",
    content: "Passe limão ou clara de ovo na borda do copo e gire no prato com sal ou açúcar. Cubra apenas metade da borda para dar opção ao convidado.",
  },
  {
    id: "tip-10",
    title: "Garnish Comestível",
    content: "Toda decoração deve ser comestível e complementar o sabor do drink. Evite decorações excessivas – menos é mais. Uma casca de cítrico bem cortada faz toda a diferença.",
  },
];

export function getDrinksByCategory(category: string): Drink[] {
  return drinks.filter((d) => d.category === category);
}

export function getDrinkById(id: string): Drink | undefined {
  return drinks.find((d) => d.id === id);
}

export function searchDrinks(query: string): Drink[] {
  const q = query.toLowerCase();
  return drinks.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.ingredients.some((i) => i.toLowerCase().includes(q))
  );
}
