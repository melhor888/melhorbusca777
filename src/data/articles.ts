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
        content: `O arroz japonês (uruchimai) é da variedade japônica — grãos curtos e redondos que ficam pegajosos e brilhantes quando cozidos. É fundamentalmente diferente do arroz de grão longo (indica) usado no Brasil.

A pegajosidade é desejável: permite que o arroz se mantenha unido para sushi, onigiri e donburi. As principais variedades são: Koshihikari (a mais premium, cultivada em Niigata), Akitakomachi (suave e versátil), Sasanishiki (tradicional, menos pegajoso) e Hitomebore (popular e equilibrado).`,
      },
      {
        title: "O preparo perfeito",
        content: `Lavar o arroz é obrigatório — remova o amido excessivo com 4-5 lavagens até a água sair quase transparente. Este passo é inegociável na culinária japonesa.

Proporção de água: 1:1.1 (arroz:água). Deixe de molho 30 minutos antes de cozinhar. Cozinhe em panela com tampa pesada ou rice cooker (suihanki). Após desligar, descanse 10 minutos SEM abrir a tampa.

Para arroz de sushi (shari): misture vinagre de arroz (3 col.), açúcar (1 col.) e sal (1/2 col.) enquanto o arroz está quente. Use movimentos de corte com shamoji, nunca amassar. Ao mesmo tempo, abane para esfriar e dar brilho.`,
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
        content: `A culinária japonesa começou com caça, pesca e coleta. O arroz chegou ao Japão por volta de 300 a.C., vindo da China, e rapidamente se tornou o alimento central.

No período Nara, o Budismo influenciou profundamente a alimentação — o consumo de carne foi proibido por mais de 1.000 anos. Isso forçou os japoneses a desenvolver técnicas sofisticadas para vegetais, tofu, algas e peixes.`,
      },
      {
        title: "Washoku: Patrimônio da UNESCO",
        content: `Em 2013, a UNESCO reconheceu o Washoku (culinária tradicional japonesa) como Patrimônio Cultural Imaterial da Humanidade.

• Respeito pela natureza e ingredientes sazonais
• Equilíbrio nutricional e apresentação visual
• Conexão com festividades e eventos sociais
• A filosofia de ichigo ichie (cada encontro é único)

Cada refeição tradicional segue o princípio "ichijū sansai" (一汁三菜): uma sopa e três acompanhamentos, mais arroz e tsukemono.`,
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
        content: `Maguro (Atum): O rei do sushi. Akami (lombo magro) é mais acessível, chutoro (médio gordo) é o mais equilibrado, otoro (barriga ultra gordurosa) é o mais cobiçado.

Sake (Salmão): Salmão em sushi é relativamente recente — os noruegueses introduziram no Japão nos anos 80! Deve ser sashimi-grade (congelado a -20°C por 7 dias para eliminar parasitas).

Hirame (Linguado): Textura firme e sabor delicado. Engawa (a barbatana) é uma iguaria gordurosa.

Hamachi (Olho-de-boi jovem): Gorduroso e rico. Perfeito para iniciantes em sushi por sua textura amanteigada.`,
        highlight: true,
      },
    ],
  },
  {
    id: "significado-pratos",
    title: "O Significado dos Pratos Japoneses",
    subtitle: "Cada prato carrega história, simbolismo e tradição",
    category: "cultura",
    icon: "🎎",
    xpReward: 20,
    readTime: "12 min",
    modules: [
      {
        title: "Simbolismo na comida japonesa",
        content: `Na cultura japonesa, a comida não é apenas nutrição — cada prato carrega significados profundos.

Soba no Ano Novo (Toshikoshi Soba): Comida obrigatória na virada do ano. Os macarrões longos simbolizam longevidade. Cortá-los facilmente representa deixar para trás os problemas do ano anterior.

Sekihan (Arroz com Feijão Vermelho): Servido em celebrações e marcos importantes. A cor vermelha afasta maus espíritos na tradição xintoísta.

Tai (Pargo): Presente em casamentos e celebrações. O nome "tai" soa como "medetai" (auspicioso). Um pargo inteiro grelhado é o centro de festas.`,
      },
      {
        title: "Comida e estações do ano",
        content: `Shun (旬) — ingredientes no auge da temporada — é um conceito central.

Primavera: Sakura mochi, bambu jovem (takenoko), peixes de rio
Verão: Soba fria, unagi (enguia) para energia, kakigōri (raspadinha)
Outono: Cogumelos matsutake, castanhas, sanma (sauro grelhado)
Inverno: Nabe (hot pot), oden, mikan (tangerina japonesa)

Restaurantes kaiseki mudam o cardápio inteiro a cada estação. A louça também muda para refletir a temporada.`,
        highlight: true,
      },
    ],
  },
  {
    id: "festivais-gastronomicos",
    title: "Festivais Gastronômicos do Japão",
    subtitle: "Matsuri e a comida de festival",
    category: "cultura",
    icon: "🎆",
    xpReward: 15,
    readTime: "10 min",
    modules: [
      {
        title: "A comida nos matsuri",
        content: `Os matsuri (festivais) japoneses são indissociáveis da comida. As barraquinhas de yatai são a alma gastronômica dos festivais.

Pratos clássicos de festival:
• Takoyaki — bolinhas de polvo, o rei dos matsuri
• Yakisoba — macarrão frito na chapa gigante
• Ikayaki — lula grelhada inteira no palito
• Yakitori — espetinhos de frango grelhado
• Kakigōri — raspadinha com xarope colorido
• Wata-ame — algodão doce
• Choco Banana — banana coberta de chocolate
• Ramune — refrigerante com bolinha de vidro

Os matsuri mais famosos incluem Gion Matsuri (Kyoto, julho), Tenjin Matsuri (Osaka, julho) e Nebuta Matsuri (Aomori, agosto).`,
        highlight: true,
      },
    ],
  },
  {
    id: "influencia-japonesa-mundo",
    title: "Influência da Culinária Japonesa no Mundo",
    subtitle: "Como o Japão transformou a gastronomia global",
    category: "cultura",
    icon: "🌍",
    xpReward: 20,
    readTime: "14 min",
    modules: [
      {
        title: "A conquista global",
        content: `A culinária japonesa é hoje uma das mais influentes do mundo. O conceito de umami, identificado pelo químico Kikunae Ikeda em 1908, revolucionou a compreensão do sabor globalmente.

O sushi se espalhou pelo mundo nos anos 80-90. O California Roll, criado nos EUA, adaptou o sushi ao paladar ocidental. Hoje, há mais restaurantes de sushi fora do Japão do que dentro.

O ramen se tornou fenômeno global nos anos 2010. Cidades como Nova York, Londres e São Paulo têm cenas vibrantes de ramen artesanal.`,
      },
      {
        title: "Técnicas que mudaram a gastronomia",
        content: `Omakase (お任せ): "Deixo nas suas mãos" — o chef decide o menu. Adotado por restaurantes de alta gastronomia no mundo todo.

Teppanyaki: Culinária na chapa diante do cliente. Benihana levou o conceito aos EUA nos anos 60 e criou uma indústria.

Fermentação: Miso, koji e shio-koji são agora ingredientes essenciais em restaurantes de vanguarda. Chefs como René Redzepi (Noma) abraçaram técnicas japonesas de fermentação.

Matcha: De cerimônia do chá a ingrediente global — lattes, sorvetes, bolos e até chocolate.`,
        highlight: true,
      },
    ],
  },
  {
    id: "tradicoes-culinarias",
    title: "Tradições Culinárias Japonesas",
    subtitle: "Rituais, costumes e celebrações à mesa",
    category: "cultura",
    icon: "🏡",
    xpReward: 20,
    readTime: "13 min",
    modules: [
      {
        title: "Rituais à mesa",
        content: `A mesa japonesa é cercada de rituais que expressam gratidão e respeito.

Itadakimasu e Gochisousama: Antes e depois de cada refeição, respectivamente. Não são orações religiosas, mas expressões de gratidão a todos envolvidos — do agricultor ao cozinheiro.

Kampai: O brinde japonês antes de beber. Todos devem participar. Beber antes do kampai é considerado rude.

Oshibori: A toalha quente (ou fria no verão) oferecida antes da refeição para limpar as mãos. Usar no rosto é aceitável em izakayas casuais, mas não em restaurantes formais.`,
        highlight: true,
      },
      {
        title: "Celebrações sazonais",
        content: `Osechi Ryori (Ano Novo): Caixas empilhadas (jubako) com pratos simbólicos. Cada item tem significado: kazunoko (ovas de arenque = fertilidade), kuromame (feijão preto = saúde), datemaki (omelete enrolada = conhecimento).

Setsubun (3 de fevereiro): Jogam-se grãos de soja para afastar demônios. Come-se ehomaki (futomaki) inteiro, sem cortar, olhando na direção auspiciosa do ano.

Hinamatsuri (3 de março): Festival das meninas. Come-se chirashi-zushi (sushi espalhado), hina-arare (biscoitinhos de arroz coloridos) e bebe-se amazake.`,
      },
    ],
  },
];
