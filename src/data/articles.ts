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
  destilados: { label: "Ingredientes", color: "accent" },
  tecnicas: { label: "Técnicas", color: "primary" },
  cultura: { label: "Cultura", color: "accent" },
  negocios: { label: "Negócios", color: "primary" },
  avancado: { label: "Avançado", color: "accent" },
};

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export const articles: Article[] = [
  {
    id: "guia-arroz-japones",
    title: "Guia Completo do Arroz Japonês",
    subtitle: "Tipos, preparo e segredos do ingrediente mais importante",
    category: "fundamentos",
    icon: "🍚",
    xpReward: 25,
    readTime: "12 min",
    modules: [
      {
        title: "Por que o arroz japonês é diferente?",
        content: `O arroz japonês (uruchimai) é da variedade japônica — grãos curtos e redondos que ficam pegajosos e brilhantes quando cozidos. É fundamentalmente diferente do arroz de grão longo (indica) usado no Brasil e Ásia continental.

A pegajosidade é desejável: permite que o arroz se mantenha unido para sushi, onigiri e donburi. Mas não é o mesmo que arroz glutinoso (mochigome), usado para mochi e wagashi.

As principais variedades são: Koshihikari (a mais premium e perfumada, cultivada em Niigata), Akitakomachi (suave e versátil), Sasanishiki (tradicional, menos pegajoso) e Hitomebore (popular e equilibrado). A diferença entre um arroz premium e um comum é tão grande quanto entre um azeite extra-virgem e óleo de soja.`,
      },
      {
        title: "O preparo perfeito",
        content: `Lavar o arroz é obrigatório — remova o amido excessivo com 4-5 lavagens até a água sair quase transparente. Este passo é inegociável na culinária japonesa.

Proporção de água: 1:1.1 (arroz:água). Deixe de molho 30 minutos antes de cozinhar. Cozinhe em panela com tampa pesada ou rice cooker (suihanki). Após desligar, descanse 10 minutos SEM abrir a tampa.

Para arroz de sushi (shari): misture vinagre de arroz (3 col.), açúcar (1 col.) e sal (1/2 col.) enquanto o arroz está quente. Use movimentos de corte com shamoji (espátula de arroz), nunca amassar. Ao mesmo tempo, abane para esfriar e dar brilho.`,
        highlight: true,
      },
    ],
  },
  {
    id: "historia-gastronomia-japonesa",
    title: "História da Gastronomia Japonesa",
    subtitle: "Dos samurais ao patrimônio da UNESCO",
    category: "cultura",
    icon: "🏯",
    xpReward: 30,
    readTime: "18 min",
    modules: [
      {
        title: "Período Jomon até Nara (10.000 a.C. — 794 d.C.)",
        content: `A culinária japonesa começou com a caça, pesca e coleta. O arroz chegou ao Japão por volta de 300 a.C., vindo da China, e rapidamente se tornou o alimento central.

No período Nara, o Budismo influenciou profundamente a alimentação — o consumo de carne foi proibido por mais de 1.000 anos. Isso forçou os japoneses a desenvolver técnicas sofisticadas para vegetais, tofu, algas e peixes, criando a base da culinária que conhecemos hoje.

O shoyu e o missô começaram a se desenvolver nesta época, inspirados em processos de fermentação chineses.`,
      },
      {
        title: "Washoku: Patrimônio da UNESCO",
        content: `Em 2013, a UNESCO reconheceu o Washoku (culinária tradicional japonesa) como Patrimônio Cultural Imaterial da Humanidade. Os critérios incluem:

• Respeito pela natureza e ingredientes sazonais
• Equilíbrio nutricional e apresentação visual
• Conexão com festividades e eventos sociais
• A filosofia de ichigo ichie (cada encontro é único)

Washoku é mais que comida — é uma expressão da relação dos japoneses com a natureza, as estações e a comunidade. Cada refeição tradicional segue o princípio "ichijū sansai" (一汁三菜): uma sopa e três acompanhamentos, mais arroz e tsukemono.`,
        highlight: true,
      },
    ],
  },
  {
    id: "guia-peixes-sushi",
    title: "Guia de Peixes para Sushi e Sashimi",
    subtitle: "Sabor, sazonalidade e como escolher",
    category: "fundamentos",
    icon: "🐟",
    xpReward: 20,
    readTime: "15 min",
    modules: [
      {
        title: "Os peixes essenciais",
        content: `Maguro (Atum): O rei do sushi. Akami (lombo magro) é mais acessível, chutoro (médio gordo) é o mais equilibrado, otoro (barriga ultra gordurosa) é o mais cobiçado e caro. Atum é o peixe mais consumido em sushi no Japão.

Sake (Salmão): Na verdade, salmão em sushi é relativamente recente — os noruegueses introduziram no Japão nos anos 80! Hoje é o mais popular mundialmente. Deve ser sashimi-grade (congelado a -20°C por 7 dias para eliminar parasitas).

Hirame (Linguado): Textura firme e sabor delicado. Engawa (a barbatana) é uma iguaria — gordurosa e deliciosa. Prato de inverno por excelência.

Hamachi (Olho-de-boi jovem): Gorduroso e rico. Perfeito para iniciantes em sushi por sua textura amanteigada. Buri (adulto) é ainda mais intenso e sazonal de inverno.`,
        highlight: true,
      },
    ],
  },
  {
    id: "cultura-izakaya",
    title: "Cultura Izakaya: O Bar Japonês",
    subtitle: "Onde comida, bebida e amizade se encontram",
    category: "cultura",
    icon: "🏮",
    xpReward: 15,
    readTime: "10 min",
    modules: [
      {
        title: "O que é um Izakaya?",
        content: `Izakaya é o pub/bar informal japonês — o lugar onde os japoneses relaxam após o trabalho, comem petiscos e bebem. O nome vem de "i" (ficar) + "sakaya" (loja de sakê) = lugar para ficar e beber sakê.

O cardápio típico inclui: edamame, karaage (frango frito), yakitori (espetinhos), sashimi, gyoza, agedashi tofu, takoyaki e muito mais. A filosofia é "nomi-hodai" (beba à vontade) com "tabe-hodai" (coma à vontade).

O "otōshi" (aperitivo compulsório) é servido automaticamente — funciona como taxa de couvert e geralmente é um pequeno prato de pickles, edamame ou tofu. É cultural e não negociável.

Nas izakayas, o primeiro pedido é sempre a bebida: "toriaezu biiru!" (primeiro, cerveja!) é a frase mais ouvida. Depois vêm os pedidos de comida, que são compartilhados pela mesa.`,
      },
    ],
  },
];
