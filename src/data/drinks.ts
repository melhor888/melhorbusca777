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
  "Gin",
  "Rum",
  "Tequila",
  "Whisky",
  "Coquetéis Clássicos",
  "Drinks Tropicais",
  "Não Alcoólicos",
];

export const drinks: Drink[] = [
  {
    id: "caipirinha",
    name: "Caipirinha",
    category: "Coquetéis Clássicos",
    image: "caipirinha",
    ingredients: [
      "1 limão cortado em pedaços",
      "2 colheres de açúcar",
      "50ml de cachaça",
      "Gelo a gosto",
    ],
    steps: [
      "Corte o limão em pedaços pequenos e coloque no copo.",
      "Adicione o açúcar sobre o limão.",
      "Macere bem o limão com o açúcar usando um socador.",
      "Adicione a cachaça e misture.",
      "Complete com gelo picado e mexa bem.",
      "Decore com uma rodela de limão e sirva.",
    ],
    difficulty: "Fácil",
    time: "5 min",
  },
  {
    id: "margarita",
    name: "Margarita",
    category: "Tequila",
    image: "margarita",
    ingredients: [
      "50ml de tequila",
      "25ml de licor de laranja (Cointreau)",
      "25ml de suco de limão fresco",
      "Sal para a borda",
      "Gelo",
    ],
    steps: [
      "Passe limão na borda do copo e mergulhe no sal.",
      "Em uma coqueteleira, adicione gelo, tequila, licor e suco de limão.",
      "Agite vigorosamente por 15 segundos.",
      "Coe para o copo preparado com a borda de sal.",
      "Decore com uma rodela de limão.",
    ],
    difficulty: "Fácil",
    time: "5 min",
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    category: "Vodka",
    image: "cosmopolitan",
    ingredients: [
      "40ml de vodka cítrica",
      "15ml de Cointreau",
      "30ml de suco de cranberry",
      "10ml de suco de limão fresco",
      "Gelo",
    ],
    steps: [
      "Coloque todos os ingredientes na coqueteleira com gelo.",
      "Agite vigorosamente por 15 segundos.",
      "Coe para uma taça martini gelada.",
      "Decore com uma casca de laranja flamejada.",
    ],
    difficulty: "Médio",
    time: "5 min",
  },
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    category: "Whisky",
    image: "old-fashioned",
    ingredients: [
      "60ml de bourbon ou rye whisky",
      "1 cubo de açúcar",
      "2-3 dashes de Angostura bitters",
      "Casca de laranja",
      "Cereja maraschino",
      "Gelo grande",
    ],
    steps: [
      "Coloque o cubo de açúcar no copo e adicione os bitters.",
      "Adicione um pouco de água e macere até dissolver o açúcar.",
      "Adicione o whisky e mexa suavemente.",
      "Coloque um cubo grande de gelo.",
      "Esprema a casca de laranja sobre o drink e coloque no copo.",
      "Finalize com uma cereja maraschino.",
    ],
    difficulty: "Médio",
    time: "5 min",
  },
  {
    id: "pina-colada",
    name: "Piña Colada",
    category: "Drinks Tropicais",
    image: "pina-colada",
    ingredients: [
      "60ml de rum branco",
      "90ml de suco de abacaxi",
      "30ml de creme de coco",
      "Gelo",
      "Fatia de abacaxi para decorar",
    ],
    steps: [
      "Coloque todos os ingredientes no liquidificador com gelo.",
      "Bata até ficar cremoso e homogêneo.",
      "Sirva em um copo alto ou copo hurricane.",
      "Decore com uma fatia de abacaxi e cereja.",
    ],
    difficulty: "Fácil",
    time: "5 min",
  },
  {
    id: "gin-tonic",
    name: "Gin Tônica",
    category: "Gin",
    image: "gin-tonic",
    ingredients: [
      "50ml de gin",
      "150ml de água tônica",
      "Fatias de pepino ou limão",
      "Zimbro (opcional)",
      "Gelo",
    ],
    steps: [
      "Preencha um copo balão com bastante gelo.",
      "Despeje o gin sobre o gelo.",
      "Adicione a água tônica delicadamente pela lateral do copo.",
      "Mexa suavemente uma vez.",
      "Decore com fatias de pepino, limão ou especiarias a gosto.",
    ],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "moscow-mule",
    name: "Moscow Mule",
    category: "Vodka",
    image: "moscow-mule",
    ingredients: [
      "50ml de vodka",
      "15ml de suco de limão fresco",
      "120ml de ginger beer",
      "Gelo",
      "Rodela de limão e hortelã",
    ],
    steps: [
      "Preencha a caneca de cobre com gelo.",
      "Adicione a vodka e o suco de limão.",
      "Complete com ginger beer bem gelada.",
      "Mexa suavemente e decore com limão e hortelã.",
    ],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "daiquiri",
    name: "Daiquiri",
    category: "Rum",
    image: "daiquiri",
    ingredients: [
      "60ml de rum branco",
      "25ml de suco de limão fresco",
      "15ml de xarope simples",
      "Gelo",
    ],
    steps: [
      "Adicione todos os ingredientes na coqueteleira com gelo.",
      "Agite vigorosamente por 15 segundos.",
      "Coe para uma taça coupe gelada.",
      "Decore com uma rodela de limão.",
    ],
    difficulty: "Fácil",
    time: "5 min",
  },
  {
    id: "virgin-mojito",
    name: "Mojito Sem Álcool",
    category: "Não Alcoólicos",
    image: "virgin-mojito",
    ingredients: [
      "6-8 folhas de hortelã fresca",
      "30ml de suco de limão",
      "20ml de xarope simples",
      "Água com gás",
      "Gelo",
    ],
    steps: [
      "Macere as folhas de hortelã com o xarope e suco de limão.",
      "Adicione bastante gelo picado.",
      "Complete com água com gás.",
      "Mexa suavemente e decore com hortelã e limão.",
    ],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "negroni",
    name: "Negroni",
    category: "Coquetéis Clássicos",
    image: "negroni",
    ingredients: [
      "30ml de gin",
      "30ml de Campari",
      "30ml de vermute tinto doce",
      "Gelo",
      "Casca de laranja",
    ],
    steps: [
      "Coloque gelo em um copo old fashioned.",
      "Adicione o gin, Campari e vermute.",
      "Mexa suavemente por 20-30 segundos.",
      "Esprema a casca de laranja sobre o drink.",
      "Coloque a casca no copo como decoração.",
    ],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "tequila-sunrise",
    name: "Tequila Sunrise",
    category: "Tequila",
    image: "tequila-sunrise",
    ingredients: [
      "45ml de tequila",
      "90ml de suco de laranja",
      "15ml de grenadine",
      "Gelo",
      "Fatia de laranja e cereja",
    ],
    steps: [
      "Preencha um copo alto com gelo.",
      "Adicione a tequila e o suco de laranja, mexa.",
      "Despeje a grenadine lentamente pela lateral do copo.",
      "Deixe a grenadine descer naturalmente criando o efeito sunrise.",
      "Decore com uma fatia de laranja e cereja.",
    ],
    difficulty: "Fácil",
    time: "3 min",
  },
  {
    id: "mojito",
    name: "Mojito",
    category: "Rum",
    image: "hero-mojito",
    ingredients: [
      "50ml de rum branco",
      "30ml de suco de limão",
      "2 colheres de açúcar",
      "6-8 folhas de hortelã",
      "Água com gás",
      "Gelo",
    ],
    steps: [
      "Macere as folhas de hortelã com açúcar e suco de limão no copo.",
      "Adicione o rum branco.",
      "Preencha com gelo picado.",
      "Complete com água com gás.",
      "Mexa suavemente e decore com um ramo de hortelã.",
    ],
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
