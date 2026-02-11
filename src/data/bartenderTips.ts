export interface BartenderTip {
  id: string;
  title: string;
  subtitle: string;
  category: "tecnica" | "apresentacao" | "harmonizacao" | "historia";
  requiredXP: number;
  icon: string;
  content: BartenderTipSection[];
}

export interface BartenderTipSection {
  heading?: string;
  text: string;
  highlight?: boolean;
}

export const tipCategories = {
  tecnica: { label: "Técnicas", color: "primary" },
  apresentacao: { label: "Apresentação", color: "accent" },
  harmonizacao: { label: "Harmonização", color: "gold" },
  historia: { label: "História", color: "wine" },
};

export const bartenderTips: BartenderTip[] = [
  // ===== 0 XP - Desbloqueado de início =====
  {
    id: "corte-frutas",
    title: "Como Cortar Frutas para Drinks",
    subtitle: "Domine os cortes que transformam a apresentação",
    category: "tecnica",
    requiredXP: 0,
    icon: "🍋",
    content: [
      { text: "O corte das frutas pode transformar um drink comum em uma obra de arte. Bartenders profissionais dominam pelo menos 5 tipos de corte diferentes." },
      { heading: "Rodela (Wheel)", text: "Corte transversal de 3-5mm de espessura. Ideal para limão, laranja e pepino. Faça um corte até o centro para encaixar na borda do copo." },
      { heading: "Meia-lua (Half Moon)", text: "Corte a fruta ao meio e depois em rodelas. Perfeito para decorar copos altos — apoie na borda." },
      { heading: "Twist (Espiral)", text: "Com um descascador, retire uma fita longa de casca. Enrole no dedo ou em um canudo para criar espirais. Esprema sobre o drink para liberar óleos essenciais." },
      { heading: "Cunha (Wedge)", text: "Corte a fruta em 6-8 gomos. Ideal para limões em Gin Tônica e caipirinhas. Remova as sementes." },
      { heading: "Flamejamento", text: "Segure uma casca de laranja sobre o drink, passe uma chama entre a casca e o copo. Os óleos cítricos se inflamam criando um aroma incrível.", highlight: true },
      { text: "💡 Dica extra: sempre corte as frutas na hora de servir. Frutas pré-cortadas oxidam e perdem cor e sabor em menos de 30 minutos." },
    ],
  },

  // ===== 30 XP =====
  {
    id: "gelo-perfeito",
    title: "A Ciência do Gelo Perfeito",
    subtitle: "O ingrediente mais importante que ninguém fala",
    category: "tecnica",
    requiredXP: 30,
    icon: "🧊",
    content: [
      { text: "O gelo é responsável por até 25% do volume final de um drink. Gelo ruim = drink ruim. Ponto final." },
      { heading: "Gelo Cristalino vs Gelo Comum", text: "Gelo de freezer doméstico é opaco por causa das bolhas de ar. Para gelo cristalino, use água filtrada e congele em cooler isolado sem tampa — o gelo forma de cima para baixo, empurrando as bolhas para o fundo." },
      { heading: "Tamanhos de Gelo", text: "Cubo grande (5cm): derrete devagar, ideal para Old Fashioned e whisky puro. Gelo picado: dilui rápido, perfeito para Mojito e Julep. Gelo esférico: derrete 30% mais devagar que cubos — o formato tem menos superfície de contato." },
      { heading: "Quando NÃO usar gelo", text: "Drinks servidos 'up' (sem gelo) como Martini e Manhattan são resfriados na coqueteleira/mixing glass e coados para a taça gelada.", highlight: true },
      { text: "💡 Dica profissional: gire o gelo no copo com uma colher antes de adicionar os ingredientes. Isso resfria o copo e remove lascas soltas." },
    ],
  },

  // ===== 50 XP =====
  {
    id: "xaropes-caseiros",
    title: "Mix de Xaropes Caseiros",
    subtitle: "Eleve seus drinks com xaropes artesanais",
    category: "tecnica",
    requiredXP: 50,
    icon: "🍯",
    content: [
      { text: "Xaropes caseiros são o segredo dos melhores bares do mundo. São fáceis de fazer e duram até 2 semanas na geladeira." },
      { heading: "Xarope Simples (base)", text: "Misture partes iguais de açúcar e água quente (1:1). Mexa até dissolver completamente. Não precisa ferver. Guarde em garrafa de vidro na geladeira." },
      { heading: "Xarope Rico (2:1)", text: "Use 2 partes de açúcar para 1 de água. Mais denso e doce, ideal para Old Fashioned e drinks agitados que precisam de mais corpo." },
      { heading: "Xarope de Mel-Gengibre", text: "Ferva 1 xícara de mel + 1 xícara de água + 100g de gengibre fresco fatiado por 5 minutos. Coe e guarde. Essencial para o Penicillin.", highlight: true },
      { heading: "Xarope de Lavanda", text: "Adicione 2 colheres de lavanda seca ao xarope simples quente. Infusione por 10 minutos e coe. Perfeito com gin e vodka." },
      { heading: "Grenadine Caseira", text: "Misture partes iguais de suco de romã fresco e açúcar. Adicione 1 colher de água de flor de laranjeira. Muito superior à industrializada." },
      { text: "💡 Adicione 30ml de vodka ao xarope pronto — funciona como conservante e estende a vida útil para 1 mês." },
    ],
  },

  // ===== 80 XP =====
  {
    id: "tecnica-agitacao",
    title: "Técnicas de Agitação e Mexida",
    subtitle: "Quando agitar e quando mexer — a regra de ouro",
    category: "tecnica",
    requiredXP: 80,
    icon: "🍸",
    content: [
      { text: "A regra é simples: se tem ingrediente turvo (suco, ovo, xarope), AGITE. Se é tudo transparente (destilados, vermute, bitters), MEXA." },
      { heading: "Agitar (Shake)", text: "Segure a coqueteleira com as duas mãos. Agite na horizontal (não na vertical). 10-15 segundos é suficiente. O objetivo é resfriar, diluir e emulsificar." },
      { heading: "Dry Shake", text: "Agitar SEM gelo primeiro. Usado quando tem clara de ovo para criar espuma perfeita. Agite 15-20 segundos sem gelo, depois adicione gelo e agite mais 10 segundos.", highlight: true },
      { heading: "Mexer (Stir)", text: "Use colher de bar longa. Mexa em movimentos circulares suaves por 30 segundos. O objetivo é resfriar e diluir sem arejar — mantém a textura sedosa e a clareza cristalina." },
      { heading: "Muddle (Macerar)", text: "Pressione suavemente ervas (hortelã, manjericão) para liberar óleos. Pressione com força frutas para extrair suco. NUNCA triture hortelã — libera clorofila amarga." },
      { text: "💡 James Bond pede Martini 'shaken, not stirred' — mas bartenders puristas sabem que isso é heresia! Agitar o Martini cria bolhas e turva o drink." },
    ],
  },

  // ===== 100 XP =====
  {
    id: "flambar-drinks",
    title: "Técnicas de Flambagem",
    subtitle: "Fogo, aroma e espetáculo controlado",
    category: "tecnica",
    requiredXP: 100,
    icon: "🔥",
    content: [
      { text: "Flambar drinks não é só show — o fogo carameliza açúcares, libera óleos aromáticos e cria sabores únicos que nenhuma outra técnica consegue." },
      { heading: "Segurança PRIMEIRO", text: "Use isqueiro longo (não fósforo). Nunca flambe perto de garrafas de álcool. Tenha sempre um pano úmido por perto. Cabelos longos devem estar presos.", highlight: true },
      { heading: "Casca de Laranja Flamejada", text: "Corte um disco de casca de laranja (sem a parte branca). Segure sobre o drink com a parte externa voltada para baixo. Passe uma chama entre a casca e o drink — os óleos cítricos se inflamam com um flash espetacular." },
      { heading: "B-52 Flamejado", text: "Após montar as 3 camadas (Kahlúa, Baileys, Grand Marnier), acenda o topo com cuidado. O Grand Marnier tem álcool suficiente para queimar. Beba com canudo pelo fundo." },
      { heading: "Absinthe Flamejada", text: "Coloque açúcar em colher perfurada sobre o copo. Regue com absinto e acenda. O açúcar carameliza e pinga no absinto. Apague com água gelada." },
      { text: "💡 A temperatura da chama importa: isqueiro comum (~800°C) funciona melhor que maçarico (~1300°C), que é forte demais para a maioria das aplicações." },
    ],
  },

  // ===== 130 XP =====
  {
    id: "harmonizacao-drinks-comida",
    title: "Harmonização: Drinks + Comida",
    subtitle: "As combinações perfeitas para cada ocasião",
    category: "harmonizacao",
    requiredXP: 130,
    icon: "🍽️",
    content: [
      { text: "Harmonizar drinks com comida segue princípios similares aos do vinho: complementar ou contrastar sabores." },
      { heading: "Drinks Cítricos + Frutos do Mar", text: "Margarita com ceviche, Gin Tônica com ostras, Daiquiri com camarão grelhado. A acidez limpa o paladar entre mordidas e realça a delicadeza dos frutos do mar." },
      { heading: "Drinks Amargos + Carnes", text: "Negroni com charcutaria, Old Fashioned com steak, Manhattan com costela. O amargor corta a gordura e cria equilíbrio perfeito.", highlight: true },
      { heading: "Drinks Doces + Sobremesas", text: "Espresso Martini com tiramisù, White Russian com cheesecake, Irish Coffee com brownie. Combine sabores similares para intensificar a experiência." },
      { heading: "Drinks Tropicais + Comida Asiática", text: "Mai Tai com sushi, Piña Colada com pad thai, Moscow Mule com gyoza. O doce e frutado equilibra o umami e o picante." },
      { heading: "Cerveja/Vinho + Pizza", text: "Para pizza, Aperol Spritz ou Negroni são imbatíveis — a Itália agradece. Sangria combina perfeitamente com tapas e petiscos mediterrâneos." },
      { text: "💡 Regra de ouro: o drink deve ter a mesma intensidade que a comida. Comida leve = drink leve. Comida pesada = drink mais encorpado." },
    ],
  },

  // ===== 160 XP =====
  {
    id: "decoracao-profissional",
    title: "Decoração Profissional de Drinks",
    subtitle: "Transforme cada drink em uma obra de arte visual",
    category: "apresentacao",
    requiredXP: 160,
    icon: "🌿",
    content: [
      { text: "A decoração não é frescura — ela comunica o sabor antes mesmo do primeiro gole. Cada elemento deve ser comestível e complementar o drink." },
      { heading: "Ervas Aromáticas", text: "Bata a hortelã nas palmas antes de decorar (libera óleos). Alecrim pode ser queimado levemente para aroma defumado. Manjericão combina com gin e vodka. Tomilho é perfeito com whisky." },
      { heading: "Flores Comestíveis", text: "Rosas, lavanda, violeta, capuchinha e hibisco são opções seguras. Congele-as em cubos de gelo para efeito visual incrível. NUNCA use flores de florista — podem ter pesticidas.", highlight: true },
      { heading: "Bordas Especiais", text: "Sal grosso para Margarita, açúcar colorido para Lemon Drop, Tajín para Michelada, cacau em pó para Espresso Martini. Use mel ou xarope como cola na borda, depois mergulhe na decoração." },
      { heading: "Espumas e Foams", text: "Clara de ovo cria espuma natural em Sours. Para espuma estável sem ovo, use aquafaba (água do grão-de-bico) — funciona igual e é vegano!" },
      { text: "💡 A regra de 3: use no máximo 3 elementos decorativos. Mais que isso polui visualmente. Menos é mais — um twist de laranja bem feito vale mais que 10 frutas jogadas." },
    ],
  },

  // ===== 200 XP =====
  {
    id: "historia-cocktails",
    title: "A Fascinante História dos Cocktails",
    subtitle: "De remédio a arte — 200 anos de coquetelaria",
    category: "historia",
    requiredXP: 200,
    icon: "📜",
    content: [
      { text: "A palavra 'cocktail' apareceu pela primeira vez em 1806 num jornal de Nova York, definido como 'espírito, açúcar, água e bitters'. Mas a história começa muito antes." },
      { heading: "Era Medicinal (1700s)", text: "Os primeiros 'cocktails' eram remédios — destilados misturados com ervas medicinais e mel. Bitters como Angostura foram criados como tônicos digestivos." },
      { heading: "Era de Ouro (1850-1920)", text: "Jerry Thomas, o 'pai da coquetelaria americana', publicou o primeiro livro de receitas em 1862. Criou drinks flamejados e técnicas que usamos até hoje.", highlight: true },
      { heading: "Proibição (1920-1933)", text: "Nos EUA, a Lei Seca PROIBIU o álcool. Resultado? Speakeasies (bares secretos) e drinks com suco e xarope para disfarçar álcool ruim. Bee's Knees e Sidecar nasceram assim!" },
      { heading: "Era Tiki (1940-1970)", text: "Trader Vic e Don Beach criaram um universo tropical em Hollywood. Mai Tai, Zombie e Hurricane — drinks coloridos em canecas exóticas. Pura fantasia escapista pós-guerra." },
      { heading: "Renascimento (2000-hoje)", text: "O movimento 'craft cocktail' trouxe de volta técnicas clássicas, ingredientes frescos e respeito pelas receitas originais. Speakeasies modernos e bartenders-celebridade definem a era atual." },
      { text: "💡 Curiosidade: durante a Proibição, bartenders americanos migraram para Europa e Cuba, espalhando a cultura do cocktail pelo mundo. O Havana Bar do Hotel Nacional de Cuba se tornou lendário." },
    ],
  },

  // ===== 250 XP =====
  {
    id: "drinks-vodka-rum",
    title: "Dominando Vodka e Rum",
    subtitle: "Os destilados mais versáteis do mundo",
    category: "tecnica",
    requiredXP: 250,
    icon: "🥃",
    content: [
      { text: "Vodka e rum são os destilados mais versáteis da coquetelaria. Juntos, representam mais de 60% dos drinks servidos em bares do mundo inteiro." },
      { heading: "Vodka: A Tela em Branco", text: "Vodka foi projetada para ser neutra — realça os sabores dos outros ingredientes. Vodkas premium (Grey Goose, Belvedere) são mais suaves. Para drinks misturados, vodkas intermediárias funcionam perfeitamente." },
      { heading: "Rum: O Arco-Íris de Sabores", text: "Rum branco: leve, perfeito para Mojito e Daiquiri. Rum dourado: notas de baunilha e caramelo. Rum escuro: encorpado, para flutuar e saborear. Rum envelhecido (añejo): complexo como whisky, para beber puro.", highlight: true },
      { heading: "Truque da Vodka Infusionada", text: "Coloque frutas, ervas ou especiarias em vodka por 3-7 dias. Abacaxi, baunilha, jalapeño, café — as possibilidades são infinitas. Coe e use em drinks exclusivos." },
      { heading: "Rum Falernum", text: "Xarope de rum com especiarias (cravo, gengibre, limão, amêndoa) — o ingrediente secreto de drinks Tiki. Fácil de fazer em casa e transforma qualquer drink tropical." },
      { text: "💡 Teste: em drinks onde vodka é o destilado principal, substitua por rum branco. Moscow Mule com rum vira 'Dark 'n' Stormy light'. Cosmopolitan com rum? Surpreendentemente delicioso!" },
    ],
  },

  // ===== 350 XP =====
  {
    id: "drinks-gin-whisky",
    title: "Gin & Whisky: A Nobreza dos Destilados",
    subtitle: "Entenda os dois pilares da coquetelaria clássica",
    category: "tecnica",
    requiredXP: 350,
    icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    content: [
      { text: "Gin e whisky são os destilados mais complexos e reverenciados. Dominar seus estilos é o que separa um bartender bom de um excelente." },
      { heading: "Gin: Botânicos Infinitos", text: "London Dry: seco, zimbro dominante (Tanqueray, Beefeater). New Western: botânicos diversos dominam sobre o zimbro (Hendrick's com pepino, Roku com sakura). Old Tom: levemente adoçado, perfeito para Tom Collins." },
      { heading: "Whisky: Mundo de Sabores", text: "Bourbon (EUA): milho, doce, baunilha — ideal para Old Fashioned. Rye (EUA/Canadá): centeio, apimentado — perfeito para Manhattan. Scotch: single malt escocês, defumado (Islay) ou frutado (Speyside). Japonês: suave, elegante, perfeito para Highball.", highlight: true },
      { heading: "A Regra do Gin Tônica Perfeito", text: "Cada gin pede uma tônica e um botânico diferente: Gin cítrico → limão siciliano + tônica Indian. Gin floral → pepino + tônica Mediterranean. Gin especiado → canela + laranja + tônica premium." },
      { heading: "Whisky: Gelo ou Puro?", text: "Single malt premium: puro ou com 3 gotas de água (abre os aromas). Bourbon para coquetel: gelo grande. Blended para Highball: muito gelo + soda. Nunca coloque gelo picado em whisky puro — dilui demais." },
      { text: "💡 Experimento: faça um Negroni com bourbon no lugar do gin (Boulevardier) e outro com scotch (Rob Roy style). Compare os três — cada destilado cria uma experiência completamente diferente." },
    ],
  },

  // ===== 500 XP =====
  {
    id: "bar-casa-profissional",
    title: "Monte Seu Bar em Casa como um Pro",
    subtitle: "O guia definitivo do bar doméstico perfeito",
    category: "apresentacao",
    requiredXP: 500,
    icon: "🏠",
    content: [
      { text: "Com os utensílios e destilados certos, você faz 90% dos drinks clássicos em casa. Não precisa gastar fortunas — invista no essencial." },
      { heading: "Utensílios Essenciais", text: "Coqueteleira Boston (2 peças), Jigger/dosador (30/60ml), Colher de bar longa, Coador Hawthorne, Muddler (socador). Com esses 5 itens você faz qualquer drink." },
      { heading: "Os 6 Destilados Base", text: "Vodka (Smirnoff ou Absolut), Gin London Dry (Tanqueray ou Beefeater), Rum branco (Bacardi ou Havana Club), Tequila blanco (El Jimador ou Sauza), Bourbon (Jim Beam ou Buffalo Trace), Scotch blended (Johnnie Walker ou Monkey Shoulder).", highlight: true },
      { heading: "Licores e Modificadores", text: "Cointreau/Triple Sec, Campari, Vermute seco e doce (guardar na geladeira!), Kahlúa, Angostura bitters. Com esses + os destilados, você cobre mais de 50 receitas clássicas." },
      { heading: "Copos Mínimos", text: "Copo Old Fashioned (rocks glass), Copo alto (highball), Taça coupe ou martini, Taça de vinho (para Aperol Spritz e Gin Tônica). 4 tipos de copo cobrem 95% dos drinks." },
      { heading: "Frescos Sempre à Mão", text: "Limões, limas, laranjas, hortelã fresca, gelo de qualidade, água com gás e tônica. São os ingredientes que mais fazem diferença." },
      { text: "💡 Investimento inicial: R$300-500 cobre utensílios + destilados básicos. É mais barato que 3 noites em bar e rende dezenas de drinks em casa." },
    ],
  },

  // ===== 750 XP =====
  {
    id: "drinks-moleculares",
    title: "Introdução à Coquetelaria Molecular",
    subtitle: "O futuro dos drinks está na ciência",
    category: "tecnica",
    requiredXP: 750,
    icon: "🧪",
    content: [
      { text: "Coquetelaria molecular usa técnicas da gastronomia molecular para criar experiências sensoriais impossíveis com métodos tradicionais. Parece difícil, mas algumas técnicas são simples." },
      { heading: "Esferas (Spherification)", text: "Misture suco com alginato de sódio. Goteje em solução de cloreto de cálcio. Cada gota vira uma esfera que 'explode' na boca liberando o suco. Esferas de Aperol em um Negroni são inesquecíveis." },
      { heading: "Espumas com Sifão", text: "Use sifão de chantilly com carga de N2O. Adicione gelatina ao líquido (suco, licor, champagne). Resultado: espumas leves e aromáticas que cobrem o drink como uma nuvem.", highlight: true },
      { heading: "Clarificação com Leite", text: "Técnica do século XVIII! Adicione leite quente ao drink ácido — as proteínas coagulam e capturam impurezas. Coe com filtro de café. Resultado: drink cristalino com sabor complexo." },
      { heading: "Defumação", text: "Use uma cloche (cúpula de vidro) e chips de madeira (nogueira, cerejeira, macieira). Defume por 30 segundos. O aroma é liberado quando o convidado levanta a cúpula — experiência teatral." },
      { text: "💡 Comece com a defumação — é a técnica molecular mais fácil e impressionante. Um defumador manual custa menos de R$100 e transforma qualquer Old Fashioned em uma experiência de bar premium." },
    ],
  },
];

export function getAvailableTips(xp: number): BartenderTip[] {
  return bartenderTips.filter((tip) => tip.requiredXP <= xp);
}

export function getLockedTips(xp: number): BartenderTip[] {
  return bartenderTips.filter((tip) => tip.requiredXP > xp);
}

export function getTipById(id: string): BartenderTip | undefined {
  return bartenderTips.find((t) => t.id === id);
}
