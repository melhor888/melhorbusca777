export interface BartenderTip {
  id: string;
  title: string;
  subtitle: string;
  category: "tecnica" | "apresentacao" | "harmonizacao" | "historia";
  requiredXP: number;
  icon: string;
  themeTag?: string;
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
  // ═══════════════════════════════════════════
  // 0 XP — DESBLOQUEADO DE INÍCIO
  // ═══════════════════════════════════════════
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
  {
    id: "medidas-basicas",
    title: "Medidas e Proporções Essenciais",
    subtitle: "A base de todo drink perfeito começa pela medida certa",
    category: "tecnica",
    requiredXP: 0,
    icon: "📏",
    content: [
      { text: "Sem medida correta, não existe drink equilibrado. A diferença entre um bartender amador e um profissional está na precisão das doses." },
      { heading: "Unidades Padrão", text: "1 oz (onça) = 30ml. 1 jigger padrão = 1.5 oz (45ml). 1 dash de bitters = ~1ml. 1 bar spoon = 5ml. Memorize essas conversões — são universais." },
      { heading: "A Regra 2:1:1", text: "A maioria dos sours segue: 2 partes de destilado, 1 parte de cítrico, 1 parte de doce. Ex: Whisky Sour = 60ml whisky, 30ml limão, 30ml xarope.", highlight: true },
      { heading: "Jigger Correto", text: "Encha o jigger até a borda — sem transbordar. Segure na altura dos olhos para nivelar. A diferença de 5ml pode desequilibrar completamente o drink." },
      { heading: "Free Pour", text: "Bartenders experientes contam mentalmente: 1-2-3-4 = ~30ml com bico dosador padrão. Mas para drinks premium, SEMPRE use jigger — consistência é tudo." },
      { text: "💡 Invista em um jigger japonês (formato cônico) — é o mais preciso e elegante. Custa R$30-50 e dura a vida inteira." },
    ],
  },
  {
    id: "tipos-gelo-basico",
    title: "Tipos de Gelo para Cada Drink",
    subtitle: "O ingrediente esquecido que faz toda a diferença",
    category: "tecnica",
    requiredXP: 0,
    icon: "🧊",
    content: [
      { text: "Gelo não é apenas para resfriar — ele controla a diluição, a textura e até a apresentação do drink. Cada formato tem uma função específica." },
      { heading: "Cubos Padrão", text: "2-3cm de lado. Servem para a maioria dos drinks on the rocks. Derretem em velocidade moderada, equilibrando temperatura e diluição." },
      { heading: "Cubo Grande (King Cube)", text: "5cm de lado. Derrete 40% mais devagar. Ideal para Old Fashioned, Negroni e whisky puro. Mantém o drink gelado sem aguar.", highlight: true },
      { heading: "Gelo Picado (Crushed Ice)", text: "Dilui rápido e resfria instantaneamente. Perfeito para Mojito, Julep, Swizzle e Cobblers. Coloque cubos em um pano e quebre com rolo." },
      { heading: "Gelo Collins (Lança)", text: "Cilindro ou lança longa que cabe em copos highball. Derrete devagar e fica elegante. Congele água em formas de picolé." },
      { text: "💡 Gelo feito com água fervida e depois resfriada é mais cristalino — ferver remove oxigênio dissolvido que causa opacidade." },
    ],
  },
  {
    id: "primeiros-drinks",
    title: "5 Drinks para Começar",
    subtitle: "Receitas fáceis que impressionam qualquer um",
    category: "tecnica",
    requiredXP: 0,
    icon: "🥂",
    content: [
      { text: "Você não precisa de 20 garrafas para fazer drinks incríveis. Com poucos ingredientes, já pode surpreender." },
      { heading: "Gin Tônica", text: "50ml gin + tônica premium + gelo + rodela de limão. O segredo: copo gelado, gelo até a borda, gin primeiro, tônica pela lateral do copo." },
      { heading: "Cuba Libre", text: "50ml rum branco + suco de meio limão + cola + gelo. Esprema o limão e jogue dentro. Simples e infalível." },
      { heading: "Caipirinha", text: "50ml cachaça + meio limão em pedaços + 2 colheres de açúcar. Macere o limão, adicione açúcar, cachaça e gelo picado. Mexa.", highlight: true },
      { heading: "Aperol Spritz", text: "90ml prosecco + 60ml Aperol + 30ml água com gás + gelo + rodela de laranja. Monte direto no copo, sem coqueteleira." },
      { heading: "Moscow Mule", text: "50ml vodka + 20ml suco de limão + ginger beer + gelo. Sirva na caneca de cobre (ou copo alto). Decore com limão e hortelã." },
      { text: "💡 Domine essas 5 receitas primeiro. Com elas você cobre vodka, gin, rum, cachaça e Aperol — já é um mini bar completo." },
    ],
  },

  // ═══════════════════════════════════════════
  // 10 XP
  // ═══════════════════════════════════════════
  {
    id: "higiene-bar",
    title: "Higiene e Organização do Bar",
    subtitle: "Um bar limpo é um bar que faz drinks melhores",
    category: "apresentacao",
    requiredXP: 10,
    icon: "✨",
    content: [
      { text: "Limpeza não é frescura — é profissionalismo. Os melhores bares do mundo são obcecados com higiene. E isso se reflete no sabor dos drinks." },
      { heading: "Mãos Sempre Limpas", text: "Lave as mãos antes de cada drink. Use gelo com pinça ou pá — nunca com as mãos. Frutas devem ser manipuladas com luvas ou pegadores." },
      { heading: "Pano Úmido Sempre à Mão", text: "Tenha 2 panos: um úmido para limpar a bancada entre drinks, outro seco para secar copos. Troque a cada 2 horas.", highlight: true },
      { heading: "Tábua de Corte", text: "Use tábua exclusiva para frutas (não a mesma de carnes). Lave com água quente e detergente após cada uso. Tábuas de plástico são mais higiênicas." },
      { heading: "Velocidade com Ordem", text: "Mise en place: tudo no lugar antes de começar. Frutas cortadas, xaropes abertos, gelo pronto, copos gelados. Organização = velocidade = qualidade." },
      { text: "💡 Regra do bartender: 'limpe enquanto trabalha'. Não deixe acumular. Lave a coqueteleira imediatamente após cada drink." },
    ],
  },
  {
    id: "como-usar-jigger",
    title: "Como Usar o Jigger Corretamente",
    subtitle: "O dosador é seu melhor amigo no bar",
    category: "tecnica",
    requiredXP: 10,
    icon: "🥄",
    content: [
      { text: "O jigger (dosador) parece simples, mas tem técnica. Um uso incorreto pode variar em até 15ml — diferença entre um drink bom e um ruim." },
      { heading: "Pegada Correta", text: "Segure entre o polegar e o indicador, na cintura do jigger. O dedo médio apoia por baixo. Mão firme e estável." },
      { heading: "Nível dos Olhos", text: "SEMPRE verifique o nível na altura dos olhos. Olhar de cima causa erro de paralaxe — você vai dosar a mais sem perceber.", highlight: true },
      { heading: "Transbordamento Controlado", text: "Para medidas exatas, encha até formar uma leve tensão superficial (menisco). Não deixe transbordar." },
      { heading: "Jigger Japonês vs Americano", text: "Japonês: cônico, mais preciso, marcações internas. Americano: formato ampulheta, mais rápido mas menos preciso. Para iniciantes, o japonês é ideal." },
      { text: "💡 Pratique com água primeiro. Dose 30ml e confira com copo medidor de cozinha. Repita até acertar de olho fechado." },
    ],
  },

  // ═══════════════════════════════════════════
  // 20 XP
  // ═══════════════════════════════════════════
  {
    id: "temperatura-copos",
    title: "A Arte de Gelar Copos",
    subtitle: "Um copo gelado muda completamente a experiência",
    category: "apresentacao",
    requiredXP: 20,
    icon: "❄️",
    content: [
      { text: "Servir um drink em copo quente é como servir pizza fria — funciona, mas não é o ideal. Gelar o copo é rápido e transforma a experiência." },
      { heading: "Método do Freezer", text: "Coloque os copos no freezer 15-30 minutos antes. É o método mais fácil. Funciona para rocks glass, coupes e taças de martini." },
      { heading: "Método do Gelo + Água", text: "Encha o copo com gelo e água gelada enquanto prepara o drink. Descarte antes de servir. Gela em 2 minutos — ideal quando não tem freezer.", highlight: true },
      { heading: "Quais Copos Gelar?", text: "SEMPRE: taças de martini e coupe (drinks servidos 'up'). OPCIONAL: rocks glass e highball. NUNCA: copos de cerveja artesanal (aroma precisa de temperatura)." },
      { heading: "Condensação", text: "Copos gelados ficam foscos pela condensação — isso é bonito e esperado. Mas seque a parte de fora se for para foto." },
      { text: "💡 Para efeito wow: gele o copo, faça a borda de sal/açúcar DEPOIS de gelar. O frio ajuda a fixar melhor a borda decorativa." },
    ],
  },
  {
    id: "suco-fresco-vs-garrafa",
    title: "Suco Fresco vs. Industrializado",
    subtitle: "Por que espremer na hora faz tanta diferença",
    category: "tecnica",
    requiredXP: 20,
    icon: "🍊",
    content: [
      { text: "O suco é o ingrediente que mais separa um drink caseiro de um profissional. Suco de caixinha pode arruinar até o melhor destilado." },
      { heading: "Limão e Lima", text: "SEMPRE esprema na hora. Suco de limão perde 50% do sabor em 4 horas. Esprema antes de cada rodada de drinks — nunca na véspera.", highlight: true },
      { heading: "Laranja", text: "Suco de laranja fresco é ideal, mas suco 100% integral (não de concentrado) funciona em drinks como Screwdriver e Tequila Sunrise." },
      { heading: "Abacaxi", text: "Suco de abacaxi fresco é incomparável. Se usar de caixinha, escolha 100% fruta sem açúcar. Adicione 1 colher de suco de limão para acidez." },
      { heading: "Cranberry e Maracujá", text: "Exceções aceitáveis: cranberry e maracujá industrializados são práticos e a diferença é menor. Escolha marcas premium sem açúcar adicionado." },
      { text: "💡 Rendimento: 1 limão = ~30ml de suco. 1 laranja = ~60ml. 1 lima = ~20ml. Calcule antes de ir ao mercado para não faltar." },
    ],
  },

  // ═══════════════════════════════════════════
  // 30 XP
  // ═══════════════════════════════════════════
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
  {
    id: "historia-origem-cocktail",
    title: "A Origem da Palavra Cocktail",
    subtitle: "De onde vem esse nome tão curioso?",
    category: "historia",
    requiredXP: 30,
    icon: "📖",
    content: [
      { text: "A palavra 'cocktail' é um mistério delicioso. Existem pelo menos 6 teorias sobre sua origem — nenhuma comprovada definitivamente." },
      { heading: "Teoria do Galo (Cock's Tail)", text: "Em rinhas de galo na Inglaterra do século XVIII, a bebida servida era decorada com penas de cauda de galo. A mistura ganhou o nome do ornamento.", highlight: true },
      { heading: "Primeira Menção Escrita", text: "13 de maio de 1806: o jornal 'The Balance and Columbian Repository' de Nova York define cocktail como 'espírito estimulante composto de destilado, açúcar, água e bitters'." },
      { heading: "Teoria Francesa", text: "Do francês 'coquetier' (suporte de ovo), usado em Nova Orleans para servir doses de brandy. Americanos deturparam a pronúncia para 'cocktail'." },
      { heading: "Teoria Mexicana", text: "Uma princesa asteca chamada Xóchitl (flor) serviu bebidas mistas a soldados — o nome evoluiu para 'cocktail'. Bonita, mas improvável." },
      { text: "💡 Independente da origem, o cocktail como conhecemos nasceu nos EUA no início do século XIX, e os americanos levaram a cultura para o mundo todo." },
    ],
  },

  // ═══════════════════════════════════════════
  // 40 XP
  // ═══════════════════════════════════════════
  {
    id: "mise-en-place",
    title: "Mise en Place do Bartender",
    subtitle: "Organização antes de começar é metade do trabalho",
    category: "apresentacao",
    requiredXP: 40,
    icon: "📋",
    content: [
      { text: "Mise en place é um conceito francês que significa 'tudo no lugar'. Na cozinha e no bar, é a lei número um dos profissionais." },
      { heading: "Antes de Começar", text: "1) Limpe a bancada. 2) Verifique garrafas e níveis. 3) Corte frutas. 4) Prepare xaropes. 5) Encha balde de gelo. 6) Gele copos no freezer." },
      { heading: "Organização da Estação", text: "Destilados à esquerda (ou atrás). Frutas e xaropes ao centro. Gelo à direita. Copos acessíveis. Lixeira embaixo. Panos úmidos ao alcance.", highlight: true },
      { heading: "Speed Rail", text: "A barra com as garrafas mais usadas na frente. Ordem clássica: vodka, gin, rum, tequila, bourbon, triple sec. Tenha sempre essas 6 garrafas à mão." },
      { heading: "Check-list Mental", text: "Antes de cada drink pergunte: Tenho o copo certo? Gelo suficiente? Todos os ingredientes? Decoração preparada? Se sim, vá em frente." },
      { text: "💡 Um bartender organizado faz o dobro de drinks na metade do tempo. Mise en place não é perda de tempo — é ganho de tempo." },
    ],
  },
  {
    id: "como-segurar-copo",
    title: "Como Segurar Cada Tipo de Copo",
    subtitle: "A etiqueta que diferencia o conhecedor",
    category: "apresentacao",
    requiredXP: 40,
    icon: "🍷",
    content: [
      { text: "A forma como você segura o copo afeta a temperatura do drink e mostra seu nível de conhecimento. Cada copo tem sua pegada correta." },
      { heading: "Taça de Vinho/Coupe", text: "Segure pela haste (stem), nunca pelo bojo. Seus dedos aquecem o drink rapidamente. Polegar e indicador na base da haste, outros dedos apoiam.", highlight: true },
      { heading: "Rocks Glass", text: "Segure pela base inferior com a mão envolvendo o copo. O gelo grande já mantém a temperatura — o calor da mão não é problema significativo." },
      { heading: "Highball/Collins", text: "Segure pelo terço inferior do copo. Não envolva o copo inteiro — você aquece a parte superior onde não há gelo." },
      { heading: "Caneca de Cobre (Mule)", text: "A alça existe por um motivo! Use-a. O cobre conduz temperatura — segurar o corpo da caneca aquece o drink instantaneamente." },
      { text: "💡 Ao servir, nunca toque na borda do copo. Entregue pela base ou pela haste. É questão de higiene e elegância." },
    ],
  },

  // ═══════════════════════════════════════════
  // 50 XP
  // ═══════════════════════════════════════════
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
  {
    id: "ervas-aromaticas",
    title: "Guia de Ervas Aromáticas em Drinks",
    subtitle: "Hortelã, manjericão, alecrim e muito mais",
    category: "tecnica",
    requiredXP: 50,
    icon: "🌿",
    content: [
      { text: "Ervas frescas adicionam complexidade e aroma que nenhum xarope artificial replica. Cada erva tem uma forma correta de ser usada em drinks." },
      { heading: "Hortelã", text: "A rainha dos drinks. Bata nas palmas antes de usar (libera óleos) mas NUNCA triture no muddler — libera clorofila amarga. Use folhas inteiras como decoração.", highlight: true },
      { heading: "Manjericão", text: "Combina com gin, vodka e morango. Macere LEVEMENTE no fundo do copo. O manjericão roxo é ainda mais aromático e bonito." },
      { heading: "Alecrim", text: "Perfeito com gin e whisky. Queime levemente a ponta com isqueiro sobre o drink para aroma defumado espetacular. Use ramos inteiros como garnish." },
      { heading: "Tomilho", text: "Sutil e elegante. Combina com vodka e champagne. Coloque um raminho sobre o drink — o calor do copo libera o aroma gradualmente." },
      { heading: "Sálvia", text: "Sabor terroso e complexo. Fritada em manteiga clarificada por 5 segundos fica crocante e linda como decoração de drinks com bourbon." },
      { text: "💡 Guarde ervas com as hastes em um copo com água (como flores) na geladeira. Duram até 1 semana assim." },
    ],
  },

  // ═══════════════════════════════════════════
  // 60 XP
  // ═══════════════════════════════════════════
  {
    id: "copos-guia-completo",
    title: "Guia Completo de Copos e Taças",
    subtitle: "Cada drink tem seu copo perfeito",
    category: "apresentacao",
    requiredXP: 60,
    icon: "🥃",
    content: [
      { text: "O copo não é decoração — ele influencia a temperatura, o aroma, a diluição e até o sabor percebido do drink. Escolher errado é desperdício." },
      { heading: "Rocks Glass (Old Fashioned)", text: "Baixo e largo, 180-300ml. Para drinks on the rocks: Old Fashioned, Negroni, Sazerac. O formato largo permite gelo grande e nariz próximo ao líquido." },
      { heading: "Highball / Collins", text: "Alto e estreito, 240-350ml. Para drinks longos com gás: Gin Tônica, Mojito, Tom Collins. A altura preserva a carbonatação por mais tempo.", highlight: true },
      { heading: "Coupe", text: "Taça rasa e arredondada, 150-180ml. Para drinks servidos 'up' (sem gelo): Sidecar, Daiquiri, Gimlet. Elegância clássica dos anos 1920." },
      { heading: "Taça Martini", text: "Cônica com haste, 150-210ml. Clássica para Martini, Cosmopolitan, Manhattan. O formato aberto libera aromas mas derrama fácil." },
      { heading: "Taça Flauta", text: "Estreita e alta, 150-180ml. Para champagne e drinks com espumante: French 75, Bellini, Kir Royal. Preserva as bolhas." },
      { heading: "Caneca de Cobre", text: "300-450ml. Exclusiva para Moscow Mule e variações. O cobre conduz frio intensamente — o drink fica gelado por mais tempo." },
      { text: "💡 Na dúvida, use rocks glass. É o copo mais versátil — serve para 70% dos drinks clássicos." },
    ],
  },
  {
    id: "bitters-essenciais",
    title: "O Mundo dos Bitters",
    subtitle: "Poucas gotas que transformam qualquer drink",
    category: "tecnica",
    requiredXP: 60,
    icon: "💧",
    content: [
      { text: "Bitters são extratos concentrados de ervas, especiarias e cascas. Poucas gotas (dashes) adicionam profundidade e complexidade impossíveis de replicar." },
      { heading: "Angostura", text: "O mais famoso e essencial. Sabor de cravo, canela e ervas. Indispensável em Old Fashioned, Manhattan e whisky sour. 2-3 dashes bastam.", highlight: true },
      { heading: "Peychaud's", text: "Mais leve e floral que Angostura. Essencial para Sazerac. Tem cor vermelha que tinge levemente o drink." },
      { heading: "Orange Bitters", text: "Casca de laranja concentrada com especiarias. Perfeito em Martini Seco, Gin Tônica e drinks com champagne. Adiciona frescor cítrico sutil." },
      { heading: "Chocolate Bitters", text: "Cacau amargo com baunilha. Combina com bourbon, rum escuro e café. Transforma um Old Fashioned em algo especial." },
      { heading: "Celery Bitters", text: "Sabor de aipo concentrado. Essencial no Bloody Mary e funciona em drinks com gin. Sabor vegetal único." },
      { text: "💡 Comece com Angostura e Orange Bitters — com esses dois você cobre 90% das receitas clássicas. Uma garrafa dura meses." },
    ],
  },

  // ═══════════════════════════════════════════
  // 70 XP
  // ═══════════════════════════════════════════
  {
    id: "drink-fotografia",
    title: "Como Fotografar Drinks como um Pro",
    subtitle: "Dicas de fotografia para drinks instagramáveis",
    category: "apresentacao",
    requiredXP: 70,
    icon: "📸",
    content: [
      { text: "Uma boa foto de drink pode fazer qualquer receita parecer irresistível. Não precisa de câmera profissional — seu celular faz o trabalho." },
      { heading: "Iluminação Natural", text: "SEMPRE fotografe com luz natural. Posicione o drink perto de uma janela. A melhor hora: manhã ou final de tarde (golden hour). Nunca use flash.", highlight: true },
      { heading: "Ângulo 45°", text: "O ângulo mais flattering para drinks. Mostra o líquido, a decoração e o copo ao mesmo tempo. Segure o celular na altura do peito." },
      { heading: "Fundo Limpo", text: "Remova objetos que distraem. Um fundo escuro ou de madeira funciona melhor. Menos é mais — o protagonista é o drink." },
      { heading: "Condensação Falsa", text: "Borrife o copo com spray de água antes da foto. A condensação 'falsa' faz o drink parecer mais gelado e refrescante. Truque de fotógrafo profissional." },
      { heading: "Composição", text: "Inclua elementos que contem a história: rodela de limão cortada, garrafa desfocada ao fundo, colher de bar, guardanapo. Crie uma cena, não só uma foto." },
      { text: "💡 Edite com moderação — aumente um pouco o contraste e a saturação. Filtros pesados fazem o drink parecer artificial." },
    ],
  },
  {
    id: "vodka-guia",
    title: "Guia Definitivo da Vodka",
    subtitle: "Tudo sobre o destilado mais versátil do mundo",
    category: "tecnica",
    requiredXP: 70,
    icon: "🫙",
    content: [
      { text: "Vodka é o destilado mais vendido do mundo e a base de centenas de cocktails. Entender suas nuances te torna um bartender melhor." },
      { heading: "O Que Define Vodka", text: "Destilado neutro, geralmente de grãos (trigo, centeio) ou batata. Deve ser incolor e inodoro — mas boas vodkas têm sutilezas de textura e sabor." },
      { heading: "Vodka de Trigo vs Centeio vs Batata", text: "Trigo (Grey Goose, Ketel One): suave, adocicada. Centeio (Belvedere, Absolut): apimentada, encorpada. Batata (Chopin): cremosa, untuosa. Cada base cria um perfil diferente.", highlight: true },
      { heading: "Para Drinks vs Pura", text: "Para misturar: vodkas intermediárias (Absolut, Smirnoff) funcionam perfeitamente. Para beber pura ou em Martini: invista em premium (Grey Goose, Belvedere)." },
      { heading: "Vodka Infusionada", text: "Coloque frutas ou especiarias em vodka por 3-7 dias. Abacaxi, baunilha, café, jalapeño — as possibilidades são infinitas. Coe e use em drinks exclusivos." },
      { text: "💡 Guarde vodka no freezer. A temperatura ideal de serviço é -18°C para drinks puros. Para cocktails, temperatura ambiente funciona." },
    ],
  },

  // ═══════════════════════════════════════════
  // 80 XP
  // ═══════════════════════════════════════════
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
  {
    id: "rum-guia",
    title: "Guia Completo do Rum",
    subtitle: "Do branco ao envelhecido: o destilado tropical",
    category: "tecnica",
    requiredXP: 80,
    icon: "🏝️",
    content: [
      { text: "Rum é o destilado da cana-de-açúcar, produzido em mais de 80 países. Cada região cria um estilo único — é o destilado com maior variedade do mundo." },
      { heading: "Rum Branco (White)", text: "Leve e limpo. Ideal para Mojito, Daiquiri e Cuba Libre. Havana Club 3 años, Bacardi Superior e Flor de Caña são referências.", highlight: true },
      { heading: "Rum Dourado (Gold)", text: "Envelhecido brevemente em barris. Notas de baunilha, caramelo e banana. Perfeito para Mai Tai e Rum Punch." },
      { heading: "Rum Escuro (Dark)", text: "Envelhecido por 3-12+ anos. Intenso, complexo, com notas de melaço e especiarias. Para beber puro ou em Dark 'n' Stormy." },
      { heading: "Rum Agrícola (Rhum)", text: "Feito de caldo de cana fresco (não melaço). Produzido na Martinica e Guadalupe. Sabor vegetal e herbáceo único. Ti' Punch é o drink clássico." },
      { heading: "Cachaça vs Rum", text: "Cachaça é tecnicamente um tipo de rum de cana, mas com regulamentação brasileira própria. É feita exclusivamente de caldo de cana fresco e nunca de melaço." },
      { text: "💡 Para coquetéis tiki, misture rum branco + rum escuro (split base). A combinação cria complexidade impossível com um único rum." },
    ],
  },

  // ═══════════════════════════════════════════
  // 90 XP
  // ═══════════════════════════════════════════
  {
    id: "gin-botanicos",
    title: "Gin e Seus Botânicos",
    subtitle: "Entenda o que faz cada gin ser único",
    category: "tecnica",
    requiredXP: 90,
    icon: "🌸",
    content: [
      { text: "Gin é vodka com personalidade — a diferença está nos botânicos. Cada gin usa uma combinação única de ervas, flores, frutas e especiarias." },
      { heading: "Zimbro: O Rei", text: "Zimbro (juniper) é obrigatório em qualquer gin. É o sabor 'de pinheiro' característico. Sem zimbro, não é gin — é vodka aromatizada.", highlight: true },
      { heading: "London Dry", text: "Estilo mais clássico: seco, zimbro dominante, sem adição de açúcar. Tanqueray, Beefeater, Bombay Sapphire. Ideal para Gin Tônica e Negroni." },
      { heading: "New Western", text: "Botânicos diversos superam o zimbro. Hendrick's (pepino e rosa), Roku (sakura e yuzu), Monkey 47 (47 botânicos). Para gin tônica especial." },
      { heading: "Old Tom", text: "Levemente adoçado, estilo pré-London Dry. Perfeito para Tom Collins e Martinez (o 'pai' do Martini). Sabor mais suave e redondo." },
      { heading: "Navy Strength", text: "57% ABV ou mais. Historicamente testado pela marinha britânica — se a pólvora molhada com gin ainda acendia, era 'navy strength'. Sabor intenso e potente." },
      { text: "💡 Cada gin pede uma tônica diferente. Gin cítrico → tônica Indian. Gin floral → tônica Mediterranean. Gin especiado → tônica premium com menos quinina." },
    ],
  },
  {
    id: "queijos-drinks",
    title: "Queijos e Drinks: Harmonização Perfeita",
    subtitle: "Combinações que surpreendem o paladar",
    category: "harmonizacao",
    requiredXP: 90,
    icon: "🧀",
    content: [
      { text: "Assim como vinho, cocktails harmonizam maravilhosamente com queijos. A chave é equilibrar intensidades e complementar ou contrastar sabores." },
      { heading: "Queijos Suaves + Drinks Leves", text: "Brie e Camembert com French 75 ou Bellini. A cremosidade do queijo combina com as bolhas e a leveza do champagne." },
      { heading: "Queijos Azuis + Drinks Doces", text: "Gorgonzola ou Roquefort com Old Fashioned ou Sazerac. O doce do bourbon equilibra o sal e a potência do queijo azul.", highlight: true },
      { heading: "Queijos Curados + Drinks Amargos", text: "Parmesão e Pecorino com Negroni ou Boulevardier. O umami do queijo curado encontra eco no Campari. Combinação italiana perfeita." },
      { heading: "Queijos de Cabra + Drinks Cítricos", text: "Chèvre fresco com Gimlet ou Daiquiri. A acidez do queijo de cabra é espelhada pela acidez do drink — harmonia por semelhança." },
      { text: "💡 Sirva os queijos em temperatura ambiente (tire da geladeira 30min antes). Queijo gelado tem menos sabor e aroma." },
    ],
  },

  // ═══════════════════════════════════════════
  // 100 XP
  // ═══════════════════════════════════════════
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
  {
    id: "tequila-mezcal",
    title: "Tequila vs Mezcal: Guia Completo",
    subtitle: "Os destilados mexicanos que conquistaram o mundo",
    category: "tecnica",
    requiredXP: 100,
    icon: "🌵",
    content: [
      { text: "Tequila e mezcal são primos — ambos vêm do agave. Mas as diferenças de produção criam perfis de sabor completamente distintos." },
      { heading: "Tequila", text: "Feita exclusivamente de agave azul (Weber Blue) na região de Jalisco. Destilada em alambique de cobre. Sabor mais limpo e padronizado." },
      { heading: "Mezcal", text: "Pode usar qualquer uma das 30+ espécies de agave. O agave é assado em forno subterrâneo com carvão — isso cria o sabor defumado característico.", highlight: true },
      { heading: "Classificações da Tequila", text: "Blanco: sem envelhecimento, fresco e vibrante — ideal para Margarita. Reposado: 2-12 meses em barril, mais suave. Añejo: 1-3 anos, complexo como whisky." },
      { heading: "Mezcal em Cocktails", text: "Substitua tequila por mezcal em qualquer receita para adicionar defumado. Oaxaca Old Fashioned (mezcal + tequila + agave + bitters) é uma obra-prima." },
      { heading: "O Verme", text: "O 'gusano' (larva) no mezcal é marketing, não tradição. Mezcais premium NUNCA têm verme. Se tem verme, desconfie da qualidade." },
      { text: "💡 Para provar mezcal corretamente: não use shot glass. Sirva em copita (copo de barro) e beba em goles pequenos, sentindo o defumado evoluir." },
    ],
  },

  // ═══════════════════════════════════════════
  // 110 XP
  // ═══════════════════════════════════════════
  {
    id: "whisky-estilos",
    title: "Os Estilos de Whisky do Mundo",
    subtitle: "Bourbon, Scotch, Rye, Japonês e mais",
    category: "tecnica",
    requiredXP: 110,
    icon: "🥃",
    content: [
      { text: "Whisky é produzido em dezenas de países, cada um com tradições e regulamentações próprias. Conhecer os estilos é essencial para cocktails." },
      { heading: "Bourbon (EUA)", text: "Mínimo 51% milho, envelhecido em barris novos de carvalho carbonizado. Doce, baunilha, caramelo. Ideal para Old Fashioned e Mint Julep.", highlight: true },
      { heading: "Rye (EUA/Canadá)", text: "Mínimo 51% centeio. Mais seco, apimentado e herbal que bourbon. Perfeito para Manhattan e Sazerac. Escolhas: Bulleit Rye, Rittenhouse." },
      { heading: "Scotch Single Malt", text: "100% cevada maltada, de uma única destilaria. Speyside: frutado e mel. Islay: defumado e iodado. Highland: equilibrado e complexo." },
      { heading: "Japonês", text: "Inspirado no scotch, mas com refinamento oriental. Extremamente suave e equilibrado. Perfeito para Highball (whisky + soda). Hakushu, Yamazaki, Nikka." },
      { heading: "Irish Whiskey", text: "Tripla destilação torna mais suave que scotch. Sabor de mel e frutas. Ideal para Irish Coffee e para quem está começando a apreciar whisky." },
      { text: "💡 Para cocktails, bourbon é o mais versátil. Para beber puro, comece com Irish ou japonês (mais acessíveis) antes de ir para single malts." },
    ],
  },
  {
    id: "historia-proibicao",
    title: "A Lei Seca e os Speakeasies",
    subtitle: "Como a proibição criou a cultura do cocktail moderno",
    category: "historia",
    requiredXP: 110,
    icon: "🚫",
    content: [
      { text: "De 1920 a 1933, os Estados Unidos proibiram a produção, venda e transporte de álcool. Paradoxalmente, isso IMPULSIONOU a cultura dos cocktails." },
      { heading: "Speakeasies", text: "Bares clandestinos com portas secretas, senhas e jazz ao vivo. O nome vem de 'speak easy' — fale baixo para não chamar atenção da polícia.", highlight: true },
      { heading: "Drinks com Suco", text: "O álcool contrabandeado era péssimo. Bartenders adicionavam suco, mel e ervas para disfarçar o sabor. O Bee's Knees (gin + mel + limão) nasceu assim." },
      { heading: "Êxodo de Bartenders", text: "Os melhores bartenders americanos migraram para Havana, Paris e Londres. Cuba se tornou capital mundial dos cocktails. O Daiquiri e o Mojito se popularizaram." },
      { heading: "Mulheres nos Bares", text: "Antes da Proibição, bares eram exclusivamente masculinos. Os speakeasies romperam essa barreira — mulheres eram bem-vindas e se tornaram parte essencial da cultura." },
      { heading: "O Fim (1933)", text: "A 21ª Emenda revogou a Proibição. Conta a lenda que FDR disse: 'I think this would be a good time for a beer.' A América brindou." },
      { text: "💡 A estética dos speakeasies voltou com força nos anos 2000. Bares modernos com portas secretas, decoração vintage e cocktails clássicos — agora legais." },
    ],
  },

  // ═══════════════════════════════════════════
  // 120 XP
  // ═══════════════════════════════════════════
  {
    id: "cachaca-guia",
    title: "Cachaça: O Destilado Brasileiro",
    subtitle: "Muito além da caipirinha — a riqueza da cachaça",
    category: "tecnica",
    requiredXP: 120,
    icon: "🇧🇷",
    content: [
      { text: "Cachaça é o destilado mais consumido no Brasil e o terceiro no mundo. Com mais de 4.000 marcas, a variedade é imensa e a qualidade pode ser extraordinária." },
      { heading: "Cachaça Branca vs Envelhecida", text: "Branca (prata): fresca, vibrante, ideal para caipirinha e cocktails. Envelhecida: amadurecida em madeira, complexa como whisky, para beber pura.", highlight: true },
      { heading: "Madeiras Brasileiras", text: "Diferente do whisky (carvalho), cachaça é envelhecida em madeiras nativas: bálsamo (mel e baunilha), amburana (canela e cravo), jequitibá (neutro), ipê (especiarias)." },
      { heading: "Como Degustar", text: "Cachaça premium se bebe em copo tulipa. Observe a cor, gire no copo, sinta o aroma, prove em gole pequeno. Não é para tomar em shot." },
      { heading: "Cachaça em Cocktails Modernos", text: "Substitua rum branco por cachaça em Mojito (vira 'Mojito Brasileiro'). Use cachaça envelhecida no Old Fashioned. Batida de coco com cachaça é clássico." },
      { text: "💡 Recomendações para começar: Leblon e Ypióca (brancas acessíveis), Weber Haus e Anísio Santiago (envelhecidas de qualidade)." },
    ],
  },
  {
    id: "carbonatacao-drinks",
    title: "Carbonatação e Drinks com Gás",
    subtitle: "Como trabalhar com bolhas como um profissional",
    category: "tecnica",
    requiredXP: 120,
    icon: "🫧",
    content: [
      { text: "Bolhas adicionam textura, frescor e efervescência. Mas trabalhar com ingredientes gaseificados exige técnica para não perder o gás." },
      { heading: "Regra de Ouro", text: "NUNCA agite drinks com ingredientes gaseificados. Champagne, tônica, soda e ginger beer são SEMPRE adicionados por último, direto no copo.", highlight: true },
      { heading: "Despejar pela Lateral", text: "Incline o copo e despeje o líquido gaseificado lentamente pela parede interna. Despejar de cima causa espuma excessiva e perda de gás." },
      { heading: "Gelo e Gás", text: "Gelo picado faz o gás escapar mais rápido (mais superfície de contato). Para drinks com gás, use cubos grandes ou gelo Collins (lança)." },
      { heading: "Soda Caseira", text: "Máquinas como SodaStream carbonatam água na hora. Gás fresco é incomparável. Você pode até carbonatar sucos e cocktails inteiros (com técnica)." },
      { heading: "Tônica Premium", text: "Fever-Tree, Schweppes 1783 e Q Tonic são superiores à tônica genérica. A diferença no Gin Tônica é gritante — a tônica é metade do drink!" },
      { text: "💡 Garrafas de tônica pequenas (200ml) são melhores que latas grandes. Você usa tudo de uma vez e não desperdiça gás." },
    ],
  },

  // ═══════════════════════════════════════════
  // 130 XP
  // ═══════════════════════════════════════════
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
  {
    id: "chocolate-cocktails",
    title: "Chocolate nos Cocktails",
    subtitle: "Cacau, licores e combinações irresistíveis",
    category: "harmonizacao",
    requiredXP: 130,
    icon: "🍫",
    content: [
      { text: "Chocolate e álcool são uma das combinações mais antigas e deliciosas da humanidade. O cacau adiciona riqueza, amargor e profundidade aos drinks." },
      { heading: "Cacau em Pó", text: "Use cacau 100% sem açúcar na borda do copo (Espresso Martini) ou polvilhado sobre espuma. Penere fino para textura uniforme.", highlight: true },
      { heading: "Licor de Cacau", text: "Crème de Cacao: branco (transparente) ou dark (marrom). Mozart chocolate: premium austríaco. Godiva: rico e cremoso. Cada um muda o perfil do drink." },
      { heading: "Chocolate Quente Alcoólico", text: "Chocolate quente + 30ml de Bailey's + 15ml de Frangelico. Chantilly e cacau por cima. O drink de inverno perfeito." },
      { heading: "Chocolate + Bourbon", text: "O bourbon tem notas naturais de baunilha e caramelo que combinam magicamente com chocolate. Old Fashioned com chocolate bitters é transformador." },
      { heading: "Ganache em Drinks", text: "Derreta chocolate ao leite com creme de leite (1:1). Use como base de drinks cremosos. Adicione destilado DEPOIS de esfriar para não evaporar o álcool." },
      { text: "💡 Para decoração: derreta chocolate e pinte o interior do copo em espiral antes de despejar o drink. Efeito visual espetacular." },
    ],
  },

  // ═══════════════════════════════════════════
  // 140 XP
  // ═══════════════════════════════════════════
  {
    id: "dupla-coagem",
    title: "Double Straining: Drinks Limpos",
    subtitle: "A técnica que separa amadores de profissionais",
    category: "tecnica",
    requiredXP: 140,
    icon: "🔬",
    content: [
      { text: "Double straining (dupla coagem) é usar dois filtros ao servir: o coador da coqueteleira + uma peneira fina. O resultado é um drink perfeitamente limpo." },
      { heading: "Quando Usar", text: "SEMPRE que o drink tem frutas maceradas, ervas ou gelo picado na coqueteleira. Mojito agitado, Whisky Sour, Bramble — todos precisam de dupla coagem.", highlight: true },
      { heading: "Como Fazer", text: "Segure o Hawthorne strainer sobre a coqueteleira com uma mão. Com a outra, segure a peneira fina sobre o copo. Despeje através dos dois filtros simultaneamente." },
      { heading: "Peneira Correta", text: "Use peneira de malha fina (mesh strainer) de 7-8cm de diâmetro. Encontra em qualquer loja de cozinha. Não use peneira de chá — é pequena demais." },
      { heading: "Exceções", text: "NÃO use dupla coagem em: drinks servidos com gelo no copo (Negroni, Old Fashioned), drinks com espuma desejada (Ramos Gin Fizz), ou drinks onde texturas são parte do drink." },
      { text: "💡 A diferença visual é imediata: um Daiquiri com dupla coagem é cristalino e elegante. Sem, fica com pedacinhos de gelo e polpa flutuando." },
    ],
  },
  {
    id: "drinks-brunch",
    title: "Drinks para Brunch Perfeito",
    subtitle: "Receitas matinais que fazem qualquer domingo especial",
    category: "harmonizacao",
    requiredXP: 140,
    icon: "🥞",
    themeTag: "tropical",
    content: [
      { text: "Brunch sem drink é apenas almoço cedo. Os melhores drinks de brunch são leves, refrescantes e combinam com ovos, frutas e doces." },
      { heading: "Mimosa Clássica", text: "Partes iguais de champagne e suco de laranja fresco. O segredo: suco espremido na hora e champagne BEM gelado. Sirva em flauta.", highlight: true },
      { heading: "Bloody Mary Completo", text: "45ml vodka + 120ml suco de tomate + 15ml limão + molho inglês + Tabasco + sal de aipo + pimenta. Decore com talo de aipo, azeitona, limão e até bacon!" },
      { heading: "Bellini", text: "Purê de pêssego branco fresco + prosecco gelado. Criado no Harry's Bar em Veneza em 1948. Elegância italiana pura." },
      { heading: "Aperol Spritz", text: "O brunch drink mais popular da década. Leve, amargo-doce e instagramável. Monte direto no copo com gelo." },
      { heading: "Rossini", text: "Variação da Bellini com purê de morango. Mais doce e colorido. Perfeito para quem acha Bellini suave demais." },
      { text: "💡 Para brunch em grupo, faça uma 'mimosa bar': champagne gelado + vários sucos (laranja, maracujá, abacaxi, cranberry). Cada convidado monta o seu." },
    ],
  },

  // ═══════════════════════════════════════════
  // 150 XP
  // ═══════════════════════════════════════════
  {
    id: "infusoes-rapidas",
    title: "Infusões Rápidas de Destilados",
    subtitle: "Crie sabores exclusivos em minutos, não dias",
    category: "tecnica",
    requiredXP: 150,
    icon: "⚗️",
    content: [
      { text: "Infusões tradicionais levam dias. Mas com técnicas modernas, você cria sabores incríveis em minutos — perfeito para bares movimentados." },
      { heading: "Infusão com Calor (Sous Vide)", text: "Coloque destilado + ingrediente em saco selado a vácuo. Banho-maria a 55°C por 2 horas. Equivale a 1 semana de infusão tradicional.", highlight: true },
      { heading: "Infusão com Nitrogênio", text: "Use um sifão de chantilly: coloque destilado + ingrediente, carregue com N2O, agite, espere 2 minutos, despressurize. Infusão em minutos." },
      { heading: "Fat Washing", text: "Técnica de infusão com gordura. Misture bacon, manteiga ou azeite com destilado. Deixe 4h, congele e retire a gordura solidificada. O sabor fica, a gordura sai." },
      { heading: "Receitas Populares", text: "Vodka de baunilha: 2 favas cortadas em 500ml, 5 dias. Bourbon de bacon: fat wash com gordura de bacon, 4 horas. Gin de pepino: rodelas em gin, 24 horas." },
      { heading: "Chá Quente em Destilado", text: "Coloque um saquinho de chá Earl Grey em 200ml de gin por exatamente 2 minutos. Remove, e você tem gin com bergamota sutil. Mais que 3 minutos fica amargo." },
      { text: "💡 Rotule TUDO com data e ingredientes. Infusões sem identificação viram mistério — e mistério num bar é perigoso." },
    ],
  },
  {
    id: "drinks-sem-alcool",
    title: "Mocktails: Drinks sem Álcool Sofisticados",
    subtitle: "Bebidas elaboradas para quem não bebe álcool",
    category: "harmonizacao",
    requiredXP: 150,
    icon: "🍹",
    content: [
      { text: "Mocktails não são 'drinks de criança'. São criações sofisticadas que respeitam quem escolhe não beber. Todo bar profissional precisa ter opções sem álcool." },
      { heading: "Princípio do Equilíbrio", text: "Um bom mocktail segue as mesmas regras de um cocktail: doce + ácido + amargo + textura. Substitua o destilado por chá forte, shrub ou soda artesanal.", highlight: true },
      { heading: "Virgin Mojito", text: "Hortelã + limão + xarope simples + água com gás + gelo picado. Idêntico ao original menos o rum. Refrescante e delicioso." },
      { heading: "Espresso Tonic", text: "Espresso concentrado + tônica premium + gelo. As bolhas da tônica realçam o café de forma surpreendente. Decore com rodela de laranja." },
      { heading: "Shrub de Frutas", text: "Vinagre de maçã + frutas + açúcar (partes iguais). Fermente 48h. Misture com soda. O vinagre dá a complexidade que substitui o álcool." },
      { heading: "Destilados sem Álcool", text: "Seedlip, Lyre's e Monday são marcas de 'destilados' sem álcool que imitam gin, rum e whisky. Funcionam em receitas clássicas com resultado surpreendente." },
      { text: "💡 NUNCA trate mocktails como opção inferior. Monte no mesmo copo, decore igualmente, sirva com a mesma atenção. Seus convidados merecem." },
    ],
  },

  // ═══════════════════════════════════════════
  // 160 XP
  // ═══════════════════════════════════════════
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
  {
    id: "cafe-cocktails",
    title: "Café em Cocktails: Guia Completo",
    subtitle: "Da extração ao copo — café e álcool são alma gêmeas",
    category: "harmonizacao",
    requiredXP: 160,
    icon: "☕",
    themeTag: "cafe",
    content: [
      { text: "Café é um dos ingredientes mais versáteis em coquetelaria. Rico em amargor, doçura e acidez, combina com praticamente todo destilado." },
      { heading: "Espresso para Cocktails", text: "Use espresso acabado de tirar (máximo 30 segundos). Café frio não cria a crema que faz o Espresso Martini brilhar. Se não tem máquina, use moka italiana.", highlight: true },
      { heading: "Cold Brew Concentrado", text: "Café moído grosso + água fria (1:4), 12-24 horas na geladeira. Coe. Mais suave e menos ácido que espresso. Perfeito para White Russian e drinks frios." },
      { heading: "Licor de Café Caseiro", text: "500ml de cold brew + 200g açúcar mascavo + 250ml vodka + 1 fava de baunilha. Mexa até dissolver o açúcar. Guarde na geladeira por 2 semanas — melhora com o tempo." },
      { heading: "Combinações Clássicas", text: "Café + vodka = Espresso Martini. Café + whisky = Irish Coffee. Café + rum = Carajillo. Café + Kahlúa + cream = White Russian. Café + Frangelico = pura magia." },
      { text: "💡 Para decorar drinks com café: grãos de café inteiros flutuam na espuma do Espresso Martini. Coloque 3 grãos — representam saúde, felicidade e prosperidade." },
    ],
  },

  // ═══════════════════════════════════════════
  // 170 XP
  // ═══════════════════════════════════════════
  {
    id: "layering-camadas",
    title: "A Arte das Camadas (Layering)",
    subtitle: "Como criar drinks com camadas perfeitas",
    category: "tecnica",
    requiredXP: 170,
    icon: "🌈",
    content: [
      { text: "Drinks em camadas são espetaculares — mas exigem técnica e conhecimento sobre densidade dos líquidos. A gravidade faz o trabalho, você precisa de paciência." },
      { heading: "Princípio da Densidade", text: "Líquidos mais densos (mais açúcar) vão para o fundo. A ordem do mais denso para o menos: grenadine > licores cremosos > licores > destilados.", highlight: true },
      { heading: "Técnica da Colher", text: "Encoste as costas da colher de bar na parede interna do copo, logo acima da camada anterior. Despeje o líquido LENTAMENTE sobre as costas da colher. Ele desliza suavemente." },
      { heading: "B-52 (3 camadas)", text: "1) Kahlúa (café, mais denso). 2) Bailey's Irish Cream. 3) Grand Marnier (menos denso). Cada um flutua sobre o anterior perfeitamente." },
      { heading: "Pousse-Café (5+ camadas)", text: "O desafio máximo: 5 ou mais camadas de cores diferentes. Use grenadine, crème de menthe, Galliano, Blue Curaçao e creme. Paciência extrema necessária." },
      { heading: "Erros Comuns", text: "1) Despejar rápido demais. 2) Não usar colher. 3) Ordem errada de densidades. 4) Copos muito largos (camadas ficam finas e instáveis)." },
      { text: "💡 Use copos estreitos (shot glass ou cordial glass) para camadas mais visíveis e estáveis. Copos largos diluem o efeito visual." },
    ],
  },
  {
    id: "churrasco-drinks",
    title: "Drinks para Churrasco",
    subtitle: "As combinações perfeitas para o churras do fim de semana",
    category: "harmonizacao",
    requiredXP: 170,
    icon: "🥩",
    content: [
      { text: "Churrasco brasileiro pede drinks que refresquem, cortem a gordura e aguentem o calor. Aqui vão as combinações testadas e aprovadas." },
      { heading: "Caipirinha de Frutas", text: "A rainha do churras. Limão clássico, maracujá (a mais popular), abacaxi com hortelã, morango, kiwi. Faça em jarra para servir a galera.", highlight: true },
      { heading: "Moscow Mule em Jarra", text: "Vodka + suco de limão + ginger beer + gelo + hortelã. Faça o triplo da receita em jarra grande. Refrescante e fácil de repor." },
      { heading: "Aperol Spritz", text: "Leve e amargo — limpa o paladar da gordura da picanha perfeitamente. Monte direto na taça com gelo, prosecco e splash de soda." },
      { heading: "Paloma", text: "Tequila + suco de grapefruit + limão + soda + sal na borda. O drink mexicano que rivaliza com a Margarita e combina com carne." },
      { heading: "Sangria Tropical", text: "Vinho tinto + laranja + maçã + abacaxi + rum + xarope simples + soda. Prepare na véspera para os sabores infusionarem." },
      { text: "💡 Para churras grande: monte uma estação de drinks self-service com jarras prontas, gelo, frutas cortadas e copos. Você curte o churras sem ficar preso no bar." },
    ],
  },

  // ═══════════════════════════════════════════
  // 180 XP
  // ═══════════════════════════════════════════
  {
    id: "vermute-guia",
    title: "Guia Definitivo do Vermute",
    subtitle: "O ingrediente subestimado que faz drinks clássicos brilharem",
    category: "tecnica",
    requiredXP: 180,
    icon: "🍷",
    content: [
      { text: "Vermute é vinho fortificado aromatizado com ervas e especiarias. É essencial em Manhattan, Martini e Negroni — sem bom vermute, esses drinks são medíocres." },
      { heading: "Vermute Seco (Dry/French)", text: "Leve, herbal, menos doce. Essencial para Martini Dry e Gibson. Marcas: Dolin Dry, Noilly Prat. Sabor floral e amargo.", highlight: true },
      { heading: "Vermute Doce (Sweet/Italian)", text: "Mais encorpado, com caramelo e especiarias. Essencial para Manhattan, Negroni e Americano. Marcas: Carpano Antica Formula, Cocchi Vermouth di Torino." },
      { heading: "Vermute Rosé", text: "Meio-termo entre seco e doce. Perfeito para beber puro com gelo e twist de laranja. Ideal para Rosé Spritz." },
      { heading: "ARMAZENAMENTO", text: "GUARDE NA GELADEIRA APÓS ABRIR. Vermute é vinho — oxida em 2-4 semanas fora da geladeira. É o erro mais comum em bares caseiros." },
      { heading: "Proporções Clássicas", text: "Martini Dry: 60ml gin + 15ml vermute seco. Manhattan: 60ml bourbon + 30ml vermute doce. Negroni: 30ml gin + 30ml vermute doce + 30ml Campari." },
      { text: "💡 Antes de abrir uma garrafa cara de Carpano Antica, comece com Cinzano Rosso — é acessível e funciona bem em cocktails de aprendizado." },
    ],
  },
  {
    id: "drinks-estacoes",
    title: "Drinks por Estação do Ano",
    subtitle: "Receitas sazonais que aproveitam o melhor de cada época",
    category: "harmonizacao",
    requiredXP: 180,
    icon: "🍂",
    content: [
      { text: "Beber sazonalmente significa aproveitar frutas da época, temperaturas ideais e ocasiões. Cada estação tem drinks que brilham mais." },
      { heading: "Verão", text: "Mojito, Daiquiri, Gin Tônica, Paloma, Aperol Spritz. Drinks leves, cítricos, refrescantes e com muito gelo. Frutas: melancia, abacaxi, maracujá.", highlight: true },
      { heading: "Outono", text: "Old Fashioned com maple, Penicillin, Apple Cider Cocktail, Bourbon Smash. Sabores de canela, maçã, mel e especiarias quentes." },
      { heading: "Inverno", text: "Irish Coffee, Hot Toddy, Mulled Wine (vinho quente), Hot Buttered Rum. Drinks quentes que aquecem corpo e alma. Use canela, cravo e noz-moscada." },
      { heading: "Primavera", text: "French 75, Clover Club, Hugo Spritz, Gin Fizz. Drinks florais, leves e elegantes. Use flores comestíveis, lavanda e sabugueiro." },
      { text: "💡 Adapte o cardápio à estação: ninguém quer Mojito em julho no sul do Brasil, nem Irish Coffee em dezembro no Nordeste. Contexto importa!" },
    ],
  },

  // ═══════════════════════════════════════════
  // 190 XP
  // ═══════════════════════════════════════════
  {
    id: "amaro-digestivos",
    title: "Amaros e Digestivos Italianos",
    subtitle: "O universo amargo que transformou a coquetelaria",
    category: "tecnica",
    requiredXP: 190,
    icon: "🇮🇹",
    content: [
      { text: "Amaros são licores amargos italianos feitos com ervas, raízes, flores e cascas. São a espinha dorsal de muitos cocktails clássicos e essenciais em qualquer bar." },
      { heading: "Campari", text: "O mais famoso: amargo, cítrico, cor vermelha vibrante. Negroni, Americano, Boulevardier e Jungle Bird todos dependem do Campari.", highlight: true },
      { heading: "Aperol", text: "Primo mais suave do Campari — menos amargo, mais doce e com menor teor alcoólico (11%). Base do Aperol Spritz, o drink mais popular da Europa." },
      { heading: "Fernet-Branca", text: "Extremamente amargo e mentolado. Digestivo argentino favorito. Fernet com Coca-Cola é bebida nacional da Argentina." },
      { heading: "Averna", text: "Amaro siciliano, mais doce e herbáceo. Perfeito para Black Manhattan (substitui o vermute doce). Sabor de laranja amarga e ervas mediterrâneas." },
      { heading: "Montenegro", text: "Equilibrado e acessível — o melhor para iniciantes em amaros. Notas de laranja, baunilha e rosa. Bom puro com gelo ou em cocktails." },
      { text: "💡 Experimente o 'Paper Plane': bourbon + Aperol + Amaro Nonino + limão (partes iguais). Um dos melhores cocktails modernos — simples e genial." },
    ],
  },
  {
    id: "historia-bartenders-lendarios",
    title: "Bartenders que Mudaram a História",
    subtitle: "Os gênios por trás dos drinks que amamos",
    category: "historia",
    requiredXP: 190,
    icon: "👨‍🍳",
    content: [
      { text: "Por trás de cada cocktail icônico existe um bartender visionário. Conhecer essas figuras é entender a evolução da coquetelaria." },
      { heading: "Jerry Thomas (1830-1885)", text: "O 'pai da coquetelaria americana'. Publicou o primeiro livro de receitas de drinks (1862). Criou o Blue Blazer (whisky flamejado) e elevou o bartending a arte.", highlight: true },
      { heading: "Harry Craddock (1876-1963)", text: "Autor do 'Savoy Cocktail Book' (1930), a bíblia dos cocktails. Bartender do Savoy Hotel em Londres. Criou o Corpse Reviver #2 e popularizou o White Lady." },
      { heading: "Constantino 'Constante' Ribalaigua", text: "Bartender do Floridita em Havana. Aperfeiçoou o Daiquiri e criou o Hemingway Daiquiri para Ernest Hemingway. 'O Rei do Daiquiri'." },
      { heading: "Dale DeGroff", text: "Reavivou a coquetelaria clássica nos anos 1980 no Rainbow Room em Nova York. Trouxe de volta frutas frescas e receitas originais. 'King Cocktail'." },
      { heading: "Julie Reiner", text: "Pioneira da coquetelaria moderna em NYC. Abriu o Flatiron Lounge e Clover Club. Provou que mulheres são força dominante na coquetelaria contemporânea." },
      { text: "💡 Estudar os mestres não é nostalgia — é aprender com quem já resolveu os problemas que você vai encontrar. Leia os clássicos!" },
    ],
  },

  // ═══════════════════════════════════════════
  // 200 XP
  // ═══════════════════════════════════════════
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
  {
    id: "batch-cocktails",
    title: "Batch Cocktails: Drinks em Grande Escala",
    subtitle: "Como fazer cocktails para 10, 50 ou 100 pessoas",
    category: "tecnica",
    requiredXP: 200,
    icon: "🫙",
    content: [
      { text: "Festas, eventos e jantares pedem drinks em volume. Batch cocktails são pré-preparados e mantêm qualidade profissional para qualquer número de convidados." },
      { heading: "Regra da Multiplicação", text: "Pegue a receita individual, multiplique pelo número de porções e REDUZA a água/diluição em 15%. O gelo no serviço adiciona diluição extra.", highlight: true },
      { heading: "O Que Pode ser Batcheado", text: "Destilado + licor + vermute + bitters: SIM. Suco de limão/laranja: NÃO (adicione na hora). Ingredientes gaseificados: NUNCA (soda, tônica, espumante)." },
      { heading: "Negroni em Batch", text: "Para 10 porções: 300ml gin + 300ml Campari + 300ml vermute doce + 100ml água. Misture em garrafa, refrigere 24h. Sirva sobre gelo com twist de laranja." },
      { heading: "Margarita em Batch", text: "Para 10 porções: 450ml tequila + 225ml Cointreau + 225ml suco de limão fresco + 100ml xarope de agave. Misture e refrigere. Sirva com sal na borda." },
      { heading: "Punch de Festa", text: "A forma mais antiga de batch cocktail. Rum + chá + limão + açúcar + especiarias. Faça em bowl grande com bloco de gelo. Serve-se com concha." },
      { text: "💡 Pré-dilua com água: adicionar 15-20% de água à mistura antes de refrigerar simula a diluição da coqueteleira. O resultado é drinks prontos para servir sobre gelo." },
    ],
  },

  // ═══════════════════════════════════════════
  // 220 XP
  // ═══════════════════════════════════════════
  {
    id: "especiarias-drinks",
    title: "Especiarias e Temperos em Drinks",
    subtitle: "Canela, pimenta, gengibre e o universo dos sabores",
    category: "harmonizacao",
    requiredXP: 220,
    icon: "🌶️",
    content: [
      { text: "Especiarias adicionam profundidade, calor e complexidade. Usadas corretamente, transformam drinks simples em experiências memoráveis." },
      { heading: "Canela", text: "A mais versátil. Em pau: dentro do drink como mixer (Sangria, Vinho Quente). Em pó: polvilhada sobre espuma (Eggnog, Flip). Xarope de canela: 2 paus em xarope simples quente.", highlight: true },
      { heading: "Gengibre Fresco", text: "Macere fatias finas no fundo do copo ou faça xarope (gengibre + açúcar + água). Essencial no Penicillin. Combina com whisky, rum e vodka." },
      { heading: "Pimenta", text: "Pimenta-do-reino: moída sobre drinks com tomate (Bloody Mary). Jalapeño: fatias em tequila para Spicy Margarita. Chipotle: defumado, combina com mezcal." },
      { heading: "Noz-Moscada", text: "Rale na hora sobre eggnog, flips e drinks com creme. Use pouquíssimo — é muito potente. Um toque sutil faz milagre." },
      { heading: "Cardamomo", text: "Levemente cítrico e mentolado. Esmague sementes e adicione ao xarope simples. Combina magicamente com gin e champagne." },
      { text: "💡 Regra de ouro com especiarias: menos é mais. Comece com metade do que imagina e ajuste. É fácil adicionar, impossível remover." },
    ],
  },
  {
    id: "gelo-decorativo",
    title: "Gelo Decorativo e Artístico",
    subtitle: "Transforme gelo simples em peça de destaque",
    category: "apresentacao",
    requiredXP: 220,
    icon: "💎",
    content: [
      { text: "Gelo decorativo não é luxo — é uma ferramenta de apresentação que adiciona cor, sabor e efeito visual dramático com mínimo esforço." },
      { heading: "Gelo com Flores", text: "Coloque flores comestíveis (violeta, rosa, capuchinha) em formas de gelo grande. Use água destilada para gelo transparente. Congele em duas etapas: metade da água, flores, depois complete.", highlight: true },
      { heading: "Gelo com Frutas", text: "Rodelas de limão, framboesas inteiras, mirtilos ou fatias de morango congeladas em cubos grandes. Conforme derretem, liberam sabor e cor no drink." },
      { heading: "Gelo Colorido", text: "Congele suco de cranberry, grenadine ou butterfly pea tea (chá de ervilha-borboleta). Os cubos tingem o drink gradualmente — efeito visual hipnotizante." },
      { heading: "Bloco de Gelo para Punch", text: "Congele água em forma de bolo ou vasilha grande. Um único bloco grande em bowl de punch derrete muito mais devagar que cubos soltos." },
      { heading: "Gelo Esculpido", text: "Com faca serrilhada e picador de gelo, esculpa esferas ou diamantes a partir de blocos grandes. Técnica japonesa que exige prática mas impressiona." },
      { text: "💡 Congele em camadas para padrões: congele 1/3 de água, adicione frutas, congele mais 1/3, adicione ervas, complete. Resultado: gelo com camadas de elementos." },
    ],
  },

  // ═══════════════════════════════════════════
  // 240 XP
  // ═══════════════════════════════════════════
  {
    id: "shrubs-vinagre",
    title: "Shrubs: A Magia do Vinagre em Drinks",
    subtitle: "Receitas ancestrais que estão na moda novamente",
    category: "tecnica",
    requiredXP: 240,
    icon: "🫗",
    content: [
      { text: "Shrubs são xaropes de fruta preservados em vinagre — uma técnica do século XVII que voltou com força nos bares modernos. Adicionam acidez complexa e profundidade única." },
      { heading: "O que é um Shrub", text: "Fruta + açúcar + vinagre. O açúcar preserva, o vinagre acidifica, a fruta dá sabor. É como um suco concentrado com personalidade — funciona com ou sem álcool.", highlight: true },
      { heading: "Método Frio (Recomendado)", text: "1) Macere frutas com açúcar (1:1) por 24-48h na geladeira. 2) Coe o xarope. 3) Adicione vinagre de maçã (1:1 com o xarope). 4) Guarde na geladeira por 1 semana. Pronto!" },
      { heading: "Combinações Clássicas", text: "Morango + vinagre balsâmico. Framboesa + vinagre de maçã. Abacaxi + vinagre de arroz. Pêssego + vinagre de champagne. Cada vinagre cria um perfil diferente." },
      { heading: "Em Drinks", text: "Use 30ml de shrub no lugar do xarope em qualquer sour. Bourbon + shrub de morango = cocktail memorável. Com soda = refrigerante artesanal instantâneo." },
      { text: "💡 Shrubs duram 6+ meses na geladeira (o vinagre preserva). São perfeitos para aproveitar frutas da estação — compre quando estão baratas e preserve." },
    ],
  },
  {
    id: "drinks-romanticos",
    title: "Drinks para Noite Romântica",
    subtitle: "Receitas elegantes que criam atmosfera especial",
    category: "harmonizacao",
    requiredXP: 240,
    icon: "💕",
    content: [
      { text: "O drink certo pode transformar um jantar em casa em uma experiência de restaurante estrelado. Escolha com cuidado — o drink fala tanto quanto a música e a luz." },
      { heading: "French 75", text: "Gin + limão + xarope + champagne. Elegante, efervescente e sofisticado. Serve em flauta de champagne. O drink mais romântico que existe.", highlight: true },
      { heading: "Espresso Martini", text: "Vodka + Kahlúa + espresso fresco. Energizante e sedutor. A combinação de cafeína e álcool deixa a noite começar e não terminar." },
      { heading: "Kir Royal", text: "Champagne + Crème de Cassis (licor de groselha negra). Cor púrpura encantadora, sabor frutado e festivo. Elegância com simplicidade." },
      { heading: "Aviation", text: "Gin + maraschino + crème de violette + limão. Cor lavanda etérea. Nome e visual que evocam sonhos. Um dos drinks mais bonitos do mundo." },
      { heading: "Hemingway Daiquiri", text: "Rum + maraschino + grapefruit + limão. Refrescante e sofisticado. A versão que Hemingway bebia em Havana — sem açúcar e dupla dose." },
      { text: "💡 Prepare os ingredientes antes. Nada estraga mais o clima do que ficar 10 minutos procurando o limão na geladeira." },
    ],
  },

  // ═══════════════════════════════════════════
  // 250 XP
  // ═══════════════════════════════════════════
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
  {
    id: "bitters-caseiros",
    title: "Como Fazer Bitters Caseiros",
    subtitle: "Crie extratos aromáticos únicos em casa",
    category: "tecnica",
    requiredXP: 250,
    icon: "🧪",
    content: [
      { text: "Bitters caseiros são surpreendentemente fáceis de fazer e adicionam um toque 100% exclusivo aos seus drinks. Nenhum bar do mundo terá o seu bitter." },
      { heading: "Base", text: "Use vodka ou álcool de cereais de alta graduação como base. Quanto mais neutro o álcool, mais os sabores dos botânicos se destacam.", highlight: true },
      { heading: "Bitter de Laranja Caseiro", text: "Cascas de 3 laranjas secas + 1 pau de canela + 5 cravos + 500ml vodka. Infusione por 2-3 semanas em local escuro. Coe com filtro de café. Pronto." },
      { heading: "Bitter de Chocolate", text: "30g de nibs de cacau + 1 fava de baunilha + casca de 1 laranja + 5 grãos de pimenta + 500ml vodka. Infusione 10 dias. Coe." },
      { heading: "Bitter Aromático", text: "Raiz de genciana (amargo), canela, cravo, cardamomo, casca de laranja, alcaçuz. É o perfil do Angostura — mas com seu toque pessoal." },
      { heading: "Adoçar e Equilibrar", text: "Após coar, adicione 1-2 colheres de xarope simples rico. Bitters puros são extremamente amargos — o xarope equilibra sem adoçar demais." },
      { text: "💡 Faça em pequenas quantidades (250-500ml). Teste em drinks simples (Old Fashioned) para avaliar intensidade. Ajuste botânicos no próximo lote." },
    ],
  },

  // ═══════════════════════════════════════════
  // 270 XP
  // ═══════════════════════════════════════════
  {
    id: "historia-gin",
    title: "A História do Gin",
    subtitle: "De remédio holandês a ícone britânico",
    category: "historia",
    requiredXP: 270,
    icon: "🇬🇧",
    content: [
      { text: "O gin tem uma das histórias mais turbulentas de todos os destilados — de medicamento a epidemia de alcoolismo e, finalmente, a sofisticação." },
      { heading: "Genebra Holandesa (1600s)", text: "Tudo começou na Holanda. Médicos destilavam zimbro ('jenever') como remédio para problemas renais. Soldados britânicos na Guerra dos 80 Anos descobriram e levaram para casa.", highlight: true },
      { heading: "Gin Craze (1720-1751)", text: "Em Londres, gin era mais barato que cerveja. A população pobre bebia quantidades letais. Gravuras famosas de Hogarth retratam o caos. O governo precisou regulamentar." },
      { heading: "Gin & Tonic Colonial", text: "No século XIX, soldados britânicos na Índia tomavam quinina (tônica) contra malária. Adicionavam gin para tornar o remédio palatável. Nasceu o Gin Tônica." },
      { heading: "Martini e Hollywood", text: "O Martini se tornou símbolo de sofisticação nos anos 1930-60. James Bond popularizou o Vodka Martini, mas o original é com gin." },
      { heading: "Renascimento (2008+)", text: "A febre do 'craft gin' trouxe centenas de novas marcas. Cada uma com botânicos únicos. Hendrick's, Monkey 47 e Roku revolucionaram o mercado." },
      { text: "💡 O gin é o destilado que mais cresceu no mundo na última década. De 2010 a 2020, o número de destilarias de gin no Reino Unido saltou de 50 para 500+." },
    ],
  },
  {
    id: "drinks-festas",
    title: "Drinks para Festas e Eventos",
    subtitle: "Receitas em escala para animar qualquer celebração",
    category: "harmonizacao",
    requiredXP: 270,
    icon: "🎉",
    themeTag: "tropical",
    content: [
      { text: "Festas pedem drinks em volume, fáceis de servir e que agradem a maioria. Nada de drinks complicados — foco em sabor e praticidade." },
      { heading: "Jungle Juice Premium", text: "Vodka + rum + suco de abacaxi + suco de laranja + grenadine + ginger ale + frutas cortadas. Em bowl grande com bloco de gelo. Serve 30+ pessoas.", highlight: true },
      { heading: "Sangria Fácil", text: "2 garrafas de vinho tinto + 200ml de brandy + 200ml de suco de laranja + frutas da estação + 500ml de soda. Prepare 4h antes. Serve 15 pessoas." },
      { heading: "Margarita Frozen em Jarra", text: "Tequila + Cointreau + limão + xarope de agave + muito gelo. Bata no liquidificador e transfira para jarra. Reponha conforme necessário." },
      { heading: "Cosmopolitan em Batch", text: "Para 20 porções: 900ml vodka + 300ml Cointreau + 300ml suco de cranberry + 200ml suco de limão. Refrigere 24h. Sirva em taça martini." },
      { heading: "Shot Station", text: "Monte uma mesa com 3-4 tipos de shots alinhados: Kamikaze (vodka+Cointreau+limão), B-52 (Kahlúa+Bailey's+Grand Marnier), Lemon Drop (vodka+limão+açúcar)." },
      { text: "💡 Para eventos, calcule 3-4 drinks por pessoa nas primeiras 2 horas, depois 2 drinks por hora. Sempre tenha opções sem álcool disponíveis." },
    ],
  },

  // ═══════════════════════════════════════════
  // 290 XP
  // ═══════════════════════════════════════════
  {
    id: "throwing-technique",
    title: "Técnica de Throwing (Arremesso)",
    subtitle: "A técnica cubana que impressiona e melhora o drink",
    category: "tecnica",
    requiredXP: 290,
    icon: "🤸",
    content: [
      { text: "Throwing é despejar o drink de um recipiente para outro a uma distância de 60-90cm. Não é show — a técnica realmente melhora textura e aeração do drink." },
      { heading: "Quando Usar", text: "Bloody Mary é o drink mais beneficiado pelo throwing. Também funciona em Martini (micro-aeração) e drinks com vermute. Cria uma textura que nem shaking nem stirring alcançam.", highlight: true },
      { heading: "Equipamento", text: "Use um mixing tin (lata de coqueteleira) e um julep strainer no recipiente de cima. O strainer evita que o gelo caia e controla o fluxo do líquido." },
      { heading: "Técnica", text: "1) Comece com os recipientes próximos. 2) Erga o de cima lentamente enquanto despeja. 3) O líquido cai em fio contínuo no recipiente de baixo. 4) Repita 3-5 vezes." },
      { heading: "Praticando", text: "Comece com água e dois copos altos. Distância inicial: 30cm. Aumente gradualmente. Espere derramar MUITO no começo — é normal. Use a pia." },
      { text: "💡 O throwing foi popularizado em Cuba nos anos 1930. Bartenders cubanos desenvolveram a técnica como alternativa à coqueteleira quando queriam drinks menos diluídos." },
    ],
  },
  {
    id: "sustentabilidade-bar",
    title: "Bar Sustentável: Zero Waste",
    subtitle: "Como reduzir desperdício e criar drinks mais conscientes",
    category: "apresentacao",
    requiredXP: 290,
    icon: "♻️",
    content: [
      { text: "A coquetelaria sustentável usa TUDO — cascas, polpas, sobras e subprodutos. É bom para o planeta e cria drinks mais criativos e originais." },
      { heading: "Cascas de Cítricos", text: "Após espremer limões, seque as cascas no forno (80°C por 2h). Use para infusionar destilados, fazer bitters ou oleo saccharum (casca + açúcar = xarope cítrico).", highlight: true },
      { heading: "Super Juice", text: "Técnica que extrai 8x mais suco de cítricos. Misture cascas com ácido cítrico e ácido málico, aguarde 2h, adicione água e coe. Rendimento: 1 limão = 240ml de 'suco'." },
      { heading: "Aquafaba", text: "A água do grão-de-bico substitui clara de ovo perfeitamente em sours. É vegano, disponível e tem a mesma capacidade de espuma." },
      { heading: "Polpas e Sobras", text: "Polpa de abacaxi → Tepache (fermentado mexicano). Sobras de frutas → Shrubs. Ervas murchas → Xaropes. Cascas de maçã → Vinagre artesanal." },
      { heading: "Canudos Sustentáveis", text: "Bambu, inox, papel ou vidro. Canudos de macarrão (bucatini) são comestíveis e resistentes por 30+ minutos. Nada de plástico descartável." },
      { text: "💡 O melhor bar sustentável do mundo, Penicillin em Hong Kong, transforma 100% dos resíduos em novos ingredientes. Inspiração pura." },
    ],
  },

  // ═══════════════════════════════════════════
  // 310 XP
  // ═══════════════════════════════════════════
  {
    id: "historia-whisky",
    title: "A Épica História do Whisky",
    subtitle: "Da Escócia e Irlanda para o mundo inteiro",
    category: "historia",
    requiredXP: 310,
    icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    content: [
      { text: "Whisky (ou whiskey) é destilado há mais de 500 anos. Escócia e Irlanda disputam a invenção — e provavelmente nunca chegarão a um consenso." },
      { heading: "Monges Destiladores", text: "Os primeiros registros datam de 1494 na Escócia. Monges destilavam 'uisge beatha' (água da vida em gaélico) como remédio. A técnica provavelmente veio do Oriente Médio.", highlight: true },
      { heading: "A Era dos Blends", text: "No século XIX, Andrew Usher criou o primeiro blended whisky — misturando single malts com whisky de grãos. Tornou o scotch mais acessível e popular mundialmente." },
      { heading: "Bourbon Americano", text: "Imigrantes escoceses e irlandeses nos EUA substituíram cevada por milho (abundante). Barris novos de carvalho carbonizado deram ao bourbon seu sabor doce e avanilhado característico." },
      { heading: "Whisky Japonês", text: "Masataka Taketsuru estudou destilação na Escócia em 1918 e fundou a Nikka. Suntory's Yamazaki veio depois. Em 2003, o whisky japonês começou a vencer concursos mundiais." },
      { heading: "Presente e Futuro", text: "Hoje, whisky é produzido em 30+ países: Taiwan (Kavalan), Índia (Amrut), Austrália, França. O conceito de 'world whisky' se expande a cada ano." },
      { text: "💡 A diferença entre 'whisky' e 'whiskey': Escócia, Canadá e Japão usam 'whisky'. Irlanda e EUA usam 'whiskey'. A grafia indica a tradição, não a qualidade." },
    ],
  },
  {
    id: "orgeat-especiais",
    title: "Orgeat e Xaropes Especiais",
    subtitle: "Xaropes exóticos que transformam drinks comuns em obras-primas",
    category: "tecnica",
    requiredXP: 310,
    icon: "🥜",
    content: [
      { text: "Além do xarope simples, existem xaropes especiais que são a alma de cocktails icônicos. Dominar esses xaropes é subir de nível na coquetelaria." },
      { heading: "Orgeat (Amêndoa)", text: "Xarope de amêndoa com água de flor de laranjeira. Essencial no Mai Tai e no Japanese Cocktail. Amêndoas + açúcar + água + flor de laranjeira — blend e coe.", highlight: true },
      { heading: "Falernum", text: "Xarope caribenho: lima, gengibre, cravo, amêndoa e rum. Indispensável em drinks Tiki. Versão caseira: macere ingredientes em rum por 24h, adicione xarope simples." },
      { heading: "Oleo Saccharum", text: "Cascas de cítricos + açúcar, maceradas por 6-12h. Os óleos essenciais se misturam ao açúcar criando um xarope intensamente aromático. Base de punch clássico." },
      { heading: "Demerara Syrup", text: "Açúcar demerara + água (2:1). Sabor mais complexo que xarope simples — notas de caramelo e melaço. Perfeito para Old Fashioned e drinks com rum." },
      { heading: "Xarope de Hibisco", text: "Flores de hibisco secas em xarope simples quente. Cor vermelha vibrante e sabor floral-frutado. Combina com gin, tequila e rum. Visualmente espetacular." },
      { text: "💡 Rotule cada xarope com nome e data de fabricação. Sem rótulo, em 2 semanas você não lembra se é orgeat ou xarope de amêndoa com gengibre." },
    ],
  },

  // ═══════════════════════════════════════════
  // 330 XP
  // ═══════════════════════════════════════════
  {
    id: "low-abv-drinks",
    title: "Drinks Low ABV: Menos Álcool, Mais Sabor",
    subtitle: "A tendência que revolucionou a coquetelaria moderna",
    category: "harmonizacao",
    requiredXP: 330,
    icon: "🌱",
    content: [
      { text: "Low ABV (baixo teor alcoólico) é a maior tendência da coquetelaria global. Drinks mais leves permitem beber mais tempo, socializar melhor e aproveitar sabores sutis." },
      { heading: "Sherry Cobbler", text: "Jerez (sherry) + xarope simples + frutas da estação + gelo picado. Um dos cocktails mais antigos (1838) e surpreendentemente sofisticado.", highlight: true },
      { heading: "Americano", text: "Campari + vermute doce + soda + gelo + rodela de laranja. O 'pai' do Negroni, sem gin. Refrescante e amargo, perfeito para aperitivo." },
      { heading: "Spritz Personalizado", text: "Qualquer amaro + espumante + soda. Aperol Spritz é o mais famoso, mas Campari Spritz, Montenegro Spritz e Hugo Spritz são igualmente deliciosos." },
      { heading: "Bamboo", text: "Jerez fino + vermute seco + bitters. Um dos drinks mais elegantes — sutil, complexo e completamente esquecido. Merece revival." },
      { heading: "Adonis", text: "Jerez + vermute doce + orange bitters. Criado em 1884 em Nova York. Perfeito para quem quer complexidade sem peso alcoólico." },
      { text: "💡 Drinks low ABV são ideais para almoço de negócios, brunch ou qualquer ocasião onde embriagar-se seria inadequado mas um drink é bem-vindo." },
    ],
  },
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

  // ═══════════════════════════════════════════
  // 370 XP
  // ═══════════════════════════════════════════
  {
    id: "historia-rum",
    title: "A História do Rum e dos Piratas",
    subtitle: "Do Caribe para o mundo — sangue, ouro e melaço",
    category: "historia",
    requiredXP: 370,
    icon: "🏴‍☠️",
    content: [
      { text: "Rum é o destilado mais associado a aventura, mar e liberdade. Sua história é inseparável da colonização do Caribe, do tráfico de escravos e da pirataria." },
      { heading: "Origens (1600s)", text: "Escravos nas plantações de cana do Caribe descobriram que o melaço (subproduto do açúcar) fermentava naturalmente. Destilaram o resultado — nasceu o rum.", highlight: true },
      { heading: "O Triângulo do Rum", text: "Rota comercial brutal: melaço do Caribe → rum na Nova Inglaterra → rum trocado por escravos na África → escravos levados ao Caribe. O rum financiou um dos capítulos mais sombrios da história." },
      { heading: "Navy Rum", text: "A Marinha Britânica distribuía rum diário (grog) aos marinheiros de 1655 a 1970. 'Splice the mainbrace' significava ração extra de rum em celebração." },
      { heading: "Piratas e Rum", text: "Piratas realmente bebiam rum — era mais seguro que água (que apodrecia nos barris). Blackbeard misturava rum com pólvora. Captain Morgan era um pirata real (privateer galês)." },
      { heading: "Rum Moderno", text: "Hoje, rum é produzido em 80+ países. Destilarias premium como Mount Gay (desde 1703, mais antiga do mundo), Appleton Estate e Diplomatico produzem rums que rivalizam com os melhores whiskies." },
      { text: "💡 31 de agosto é o Dia Internacional do Rum. A cada agosto, bares ao redor do mundo celebram com eventos e drinks especiais. Marque na agenda!" },
    ],
  },
  {
    id: "drinks-aquecedores",
    title: "Drinks Quentes para Aquecer",
    subtitle: "Receitas que abraçam de dentro para fora",
    category: "harmonizacao",
    requiredXP: 370,
    icon: "🔥",
    content: [
      { text: "Drinks quentes são conforto líquido. No frio, um hot cocktail bem feito é mais reconfortante que qualquer cobertor." },
      { heading: "Irish Coffee", text: "Whisky irlandês + café forte + açúcar mascavo + creme de leite flutuante. O creme NÃO se mistura — você bebe o café quente através do creme frio.", highlight: true },
      { heading: "Hot Toddy", text: "Whisky + mel + limão + água quente + canela em pau + cravo. O remédio ancestral para resfriados. Funciona como drink de inverno perfeito." },
      { heading: "Vinho Quente (Mulled Wine)", text: "Vinho tinto + açúcar + canela + cravo + anis-estrelado + casca de laranja. Aqueça sem ferver (ferver evapora o álcool). Tradição natalina europeia." },
      { heading: "Hot Buttered Rum", text: "Rum escuro + manteiga + açúcar mascavo + especiarias + água quente. A manteiga cria textura aveludada única. Drink de marinheiro do século XVIII." },
      { heading: "Carajillo", text: "Espresso + Licor 43 (licor espanhol de baunilha e cítricos). Misture direto e sirva em copo transparente. A versão mexicana é um fenômeno — simples e viciante." },
      { text: "💡 NUNCA ferva álcool. Aqueça até 70°C no máximo. Acima disso, o álcool evapora e você fica com uma bebida quente sem graça." },
    ],
  },

  // ═══════════════════════════════════════════
  // 390 XP
  // ═══════════════════════════════════════════
  {
    id: "licores-mundo",
    title: "Licores Essenciais da Coquetelaria",
    subtitle: "Os modificadores que dão personalidade aos cocktails",
    category: "tecnica",
    requiredXP: 390,
    icon: "🍾",
    content: [
      { text: "Licores são destilados adoçados e aromatizados. São os 'temperos' da coquetelaria — sem eles, drinks clássicos não existiriam." },
      { heading: "Triple Sec / Cointreau", text: "Licor de casca de laranja. Cointreau é o premium. Essencial em Margarita, Cosmopolitan, Sidecar, Mai Tai. Se tivesse que ter UM licor, seria esse.", highlight: true },
      { heading: "Campari", text: "Amaro italiano com 30+ botânicos secretos. Negroni, Americano, Boulevardier. Insubstituível — nenhuma imitação chega perto." },
      { heading: "Kahlúa", text: "Licor de café mexicano. Base do Espresso Martini, White Russian, B-52 e Mudslide. Sabor de café com baunilha e caramelo." },
      { heading: "Maraschino", text: "Licor de cereja marasca. Seco e não doce como outros licores de cereja. Essencial em Aviation, Last Word e Hemingway Daiquiri. Luxardo é a marca referência." },
      { heading: "Chartreuse", text: "Licor francês feito por monges desde 1737. 130 ervas na receita secreta. Green Chartreuse: potente e herbal. Yellow: mais suave. Last Word precisa de Green." },
      { heading: "St-Germain", text: "Licor de flor de sabugueiro. Elegante, floral e versátil. Combina com gin, champagne, vodka e tequila. O 'bartender's ketchup' — funciona em tudo." },
      { text: "💡 Prioridade de compra: 1) Cointreau, 2) Campari, 3) Kahlúa. Com esses 3 + destilados base, você cobre 80% dos cocktails clássicos." },
    ],
  },
  {
    id: "menu-carta-drinks",
    title: "Como Criar um Menu de Drinks",
    subtitle: "Design de carta que conta histórias e vende experiências",
    category: "apresentacao",
    requiredXP: 390,
    icon: "📜",
    content: [
      { text: "Um bom menu de drinks não é uma lista — é um convite para uma experiência. O design, a organização e a linguagem determinam o que as pessoas pedem." },
      { heading: "Estrutura", text: "Organize por perfil de sabor (refrescante → amargo → forte → doce), não por base alcoólica. As pessoas escolhem por sabor, não por destilado.", highlight: true },
      { heading: "Descrição", text: "Cada drink precisa de 1-2 linhas descritivas. Não liste ingredientes — conte o que a pessoa vai sentir. 'Cítrico e refrescante, como uma brisa tropical' vende mais que '50ml vodka, 30ml limão'." },
      { heading: "Preço e Posição", text: "O drink mais rentável deve estar na posição 2 ou 3 da lista — é onde os olhos vão naturalmente. O mais caro vai no topo como 'âncora de preço'." },
      { heading: "Equilíbrio", text: "Inclua: 2-3 drinks leves/refrescantes, 2-3 clássicos conhecidos, 2-3 autorais/especiais, 1-2 sem álcool. Total: 8-12 drinks é o ideal." },
      { heading: "Visual", text: "Fotos de drinks funcionam em casual dining. Para bares sofisticados, ilustrações ou descrições poéticas são mais elegantes." },
      { text: "💡 Troque 2-3 drinks do menu a cada estação. Mantém a carta fresca e permite usar ingredientes sazonais." },
    ],
  },

  // ═══════════════════════════════════════════
  // 420 XP
  // ═══════════════════════════════════════════
  {
    id: "historia-tequila",
    title: "A História da Tequila",
    subtitle: "Da planta sagrada asteca ao shot mais famoso do mundo",
    category: "historia",
    requiredXP: 420,
    icon: "🇲🇽",
    content: [
      { text: "Tequila não é apenas uma bebida — é patrimônio cultural mexicano, protegida por denominação de origem como o Champagne francês." },
      { heading: "Pulque: A Origem", text: "Muito antes da tequila, os astecas fermentavam a seiva do agave em 'pulque' — uma bebida sagrada oferecida aos deuses. Tinha baixo teor alcoólico e textura leitosa.", highlight: true },
      { heading: "Destilação Espanhola", text: "Quando os conquistadores espanhóis ficaram sem brandy no século XVI, aplicaram técnicas de destilação ao agave. Nasceu o mezcal — e mais tarde, a tequila." },
      { heading: "Denominação de Origem", text: "Desde 1974, tequila só pode ser produzida em Jalisco e partes de 4 outros estados mexicanos. Deve usar 100% agave azul. Qualquer outra coisa é mezcal." },
      { heading: "O Boom Global", text: "A Margarita (anos 1940) e o shot de tequila com sal e limão popularizaram a tequila mundialmente. Na década de 2020, tequila ultrapassou whisky em vendas nos EUA." },
      { heading: "Tequila Premium", text: "Marcas como Don Julio, Patrón, Clase Azul e Fortaleza elevaram a tequila ao status de destilado de luxo. Tequilas añejo de US$200+ competem com whiskies raros." },
      { text: "💡 Tequila de qualidade NUNCA precisa de sal e limão. Esses acompanhamentos existem para disfarçar tequila ruim. Boa tequila se bebe pura, em copita." },
    ],
  },
  {
    id: "drinks-delivery",
    title: "Cocktails para Delivery",
    subtitle: "Como embalar e enviar drinks mantendo a qualidade",
    category: "apresentacao",
    requiredXP: 420,
    icon: "📦",
    content: [
      { text: "O delivery de cocktails explodiu durante a pandemia e veio para ficar. Com embalagem correta, o drink chega na casa do cliente tão bom quanto no bar." },
      { heading: "Pré-Batched", text: "Prepare o drink completo (exceto gelo e ingredientes gaseificados). Envie em garrafa de vidro ou plástico com dose exata. Cliente só precisa despejar sobre gelo.", highlight: true },
      { heading: "Drinks que Viajam Bem", text: "Negroni, Old Fashioned, Manhattan, Martini, Margarita (sem gelo). Evite drinks com espuma (Whisky Sour) ou gás (Aperol Spritz) — perdem textura." },
      { heading: "Embalagem", text: "Garrafas de 200-500ml com tampa rosqueável. Lacre de segurança. Rótulo com nome do drink, ingredientes, instrução de servir e data de validade (7-14 dias refrigerado)." },
      { heading: "Kit Cocktail", text: "Alternativa premium: envie ingredientes separados + instruções ilustradas. O cliente monta. Experiência interativa que justifica preço mais alto." },
      { heading: "Diluição Correta", text: "Adicione 15-20% de água ao drink pré-batched para simular a diluição do gelo na coqueteleira. Sem isso, o drink fica forte demais quando servido sobre gelo." },
      { text: "💡 Inclua um QR code que leva a um vídeo mostrando como servir o drink perfeitamente. Experiência completa e marketing elegante." },
    ],
  },

  // ═══════════════════════════════════════════
  // 450 XP
  // ═══════════════════════════════════════════
  {
    id: "pre-diluicao",
    title: "Pré-Diluição Científica",
    subtitle: "A técnica que torna drinks em garrafa tão bons quanto frescos",
    category: "tecnica",
    requiredXP: 450,
    icon: "🔬",
    content: [
      { text: "Pré-diluição é adicionar a quantidade exata de água ao drink antes de engarrafar. O resultado: drinks prontos para servir direto do freezer, sem coqueteleira." },
      { heading: "A Ciência", text: "Quando você agita ou mexe um drink com gelo, 20-25% do volume final é água de diluição. Adicionar essa água antes e congelar replica perfeitamente o resultado.", highlight: true },
      { heading: "Cálculo", text: "Receita base: some todos os ingredientes em ml. Multiplique por 0.25 (25%). Esse é o volume de água a adicionar. Ex: Negroni (90ml total) → 22.5ml de água." },
      { heading: "Negroni em Garrafa", text: "30ml gin + 30ml Campari + 30ml vermute doce + 22ml água. Misture, engarrafe, guarde no freezer. Sirva direto na temperatura do freezer em rocks glass." },
      { heading: "Martini em Garrafa", text: "60ml gin + 15ml vermute seco + 20ml água. Freezer por 4+ horas. Despeje direto na taça gelada. Viscosidade perfeita — quase oleosa — a marca de um grande Martini." },
      { heading: "Vantagens", text: "Consistência perfeita em cada dose. Velocidade de serviço (5 segundos por drink). Drinks de freezer têm textura especial — mais viscosos e suaves." },
      { text: "💡 Dave Arnold (Liquid Intelligence) provou que 25% de diluição é o sweet spot para a maioria dos stirred drinks. Para shaken, use 28-30%." },
    ],
  },
  {
    id: "historia-champagne-cocktails",
    title: "Champagne nos Cocktails",
    subtitle: "A história efervescente dos drinks com espumante",
    category: "historia",
    requiredXP: 450,
    icon: "🥂",
    content: [
      { text: "Champagne em cocktails já foi considerado sacrilégio. Hoje, é celebração — alguns dos drinks mais elegantes do mundo levam espumante." },
      { heading: "Champagne Cocktail (1862)", text: "O primeiro cocktail com champagne documentado. Açúcar em cubo + Angostura + champagne + twist de limão. Jerry Thomas incluiu no primeiro livro de receitas.", highlight: true },
      { heading: "French 75 (1915)", text: "Criado durante a Primeira Guerra Mundial, nomeado pelo canhão francês de 75mm. Gin + limão + xarope + champagne. 'Tão potente quanto o canhão'." },
      { heading: "Bellini (1948)", text: "Giuseppe Cipriani do Harry's Bar em Veneza criou com purê de pêssego branco + prosecco. Nomeado em homenagem ao pintor Giovanni Bellini." },
      { heading: "Kir Royal (1945)", text: "Variação do Kir (vinho branco + cassis), substituindo por champagne. Nomeado em homenagem ao prefeito de Dijon, Félix Kir, que servia a combinação em eventos oficiais." },
      { heading: "Mimosa (1925)", text: "Criada no Hôtel Ritz Paris por Frank Meier. Champagne + suco de laranja. Tornou-se ícone do brunch americano nos anos 1960." },
      { text: "💡 Use prosecco ou cava em lugar de champagne para cocktails. A diferença de sabor em drinks misturados é mínima — a diferença de preço, enorme." },
    ],
  },

  // ═══════════════════════════════════════════
  // 480 XP
  // ═══════════════════════════════════════════
  {
    id: "swizzle-technique",
    title: "A Técnica do Swizzle",
    subtitle: "O método caribenho que cria drinks gelados sem coqueteleira",
    category: "tecnica",
    requiredXP: 480,
    icon: "🌴",
    themeTag: "tropical",
    content: [
      { text: "Swizzle é uma técnica caribenha ancestral: usa um bastão com ramificações (swizzle stick) girado rapidamente entre as palmas para misturar e gelar o drink." },
      { heading: "O Swizzle Stick Original", text: "Feito da raiz da árvore Quararibea turbinata, nativa do Caribe. As ramificações naturais da raiz funcionam como um mixer manual perfeito.", highlight: true },
      { heading: "Técnica", text: "1) Coloque ingredientes no copo com gelo picado (crushed ice). 2) Insira o swizzle stick. 3) Gire rapidamente entre as palmas. 4) O copo fica fosco de condensação em segundos." },
      { heading: "Queen's Park Swizzle", text: "Rum + limão + xarope + hortelã + Angostura. O drink mais famoso feito com esta técnica. Criado no Queen's Park Hotel em Trinidad." },
      { heading: "Alternativa Moderna", text: "Sem swizzle stick? Use colher de bar: coloque no copo com gelo picado e gire rapidamente. Ou use um garfo — funciona surpreendentemente bem." },
      { text: "💡 O swizzle cria uma textura especial: o gelo picado derrete parcialmente e forma uma 'geada' no exterior do copo. É funcional E bonito." },
    ],
  },
  {
    id: "sushi-drinks",
    title: "Sushi e Cocktails: Harmonização Japonesa",
    subtitle: "A arte de combinar drinks com culinária oriental",
    category: "harmonizacao",
    requiredXP: 480,
    icon: "🍣",
    content: [
      { text: "A culinária japonesa é delicada e complexa — os drinks devem respeitar essa sutileza, não competir com ela." },
      { heading: "Highball Japonês", text: "Whisky japonês + soda, construído com técnica precisa: gelo grande, proporção 1:3, mexido exatamente 13.5 vezes (tradição Suntory). Perfeito com sashimi.", highlight: true },
      { heading: "Sake Cocktails", text: "Sake + limão + xarope + soda = Sake Fizz. Sake + pêssego = Fuzzy Sake. O sake é menos alcoólico e combina com a delicadeza do peixe cru." },
      { heading: "Gin Japonês", text: "Roku (sakura, yuzu, chá sencha) + tônica Japanese + gengibre. Os botânicos japoneses do Roku espelham os sabores da culinária." },
      { heading: "Yuzu em Drinks", text: "Suco de yuzu (cítrico japonês) substitui limão com resultado extraordinário. Mais aromático, menos ácido. Perfeito em Gimlet e Margarita 'japonesa'." },
      { heading: "O Que Evitar", text: "Drinks muito doces ou frutados (Piña Colada, Mai Tai) competem com o umami. Drinks extremamente amargos (Negroni) podem sobrepujar sabores delicados." },
      { text: "💡 Para omakase (menu degustação), sirva um único Highball no início e água/chá durante. Múltiplos cocktails atrapalham a progressão dos sabores." },
    ],
  },

  // ═══════════════════════════════════════════
  // 500 XP
  // ═══════════════════════════════════════════
  {
    id: "bar-casa-profissional",
    title: "Monte Seu Bar em Casa como um Pro",
    subtitle: "O guia definitivo do bar doméstico perfeito",
    category: "apresentacao",
    requiredXP: 500,
    icon: "🏠",
    themeTag: "home-bar",
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
  {
    id: "cocktails-filmes",
    title: "Cocktails Famosos do Cinema",
    subtitle: "Os drinks que marcaram a história do cinema",
    category: "historia",
    requiredXP: 500,
    icon: "🎬",
    content: [
      { text: "Hollywood transformou cocktails em personagens. Alguns drinks devem sua fama eterna a uma cena icônica de filme ou série." },
      { heading: "Vodka Martini — James Bond", text: "'Shaken, not stirred.' Sean Connery eternizou a frase em Dr. No (1962). Bond bebe Vodka Martini (heresia para puristas de gin), e Vesper Martini (gin + vodka + Kina Lillet).", highlight: true },
      { heading: "White Russian — The Big Lebowski", text: "The Dude bebe White Russian obsessivamente durante todo o filme (1998). O drink (vodka + Kahlúa + creme) teve aumento de 400% nas vendas após o lançamento." },
      { heading: "Cosmopolitan — Sex and the City", text: "Carrie Bradshaw e suas amigas popularizaram o Cosmo nos anos 1990-2000. O drink rosa (vodka + Cointreau + cranberry + limão) se tornou ícone cultural feminino." },
      { heading: "Old Fashioned — Mad Men", text: "Don Draper bebe Old Fashioned em praticamente todas as reuniões. A série (2007-2015) é creditada por reviver o interesse em cocktails clássicos." },
      { heading: "Mojito — 007 Die Another Day", text: "Bond pede Mojito em Cuba. O drink cubano (rum + hortelã + limão + açúcar + soda) já era popular, mas Bond deu impulso global." },
      { text: "💡 O Cinema é o maior bartender da história. Um drink em uma cena icônica gera mais vendas do que qualquer campanha publicitária." },
    ],
  },

  // ═══════════════════════════════════════════
  // 550 XP
  // ═══════════════════════════════════════════
  {
    id: "sous-vide-drinks",
    title: "Sous Vide na Coquetelaria",
    subtitle: "Controle preciso de temperatura para infusões perfeitas",
    category: "tecnica",
    requiredXP: 550,
    icon: "🌡️",
    content: [
      { text: "Sous vide (cozimento a vácuo em temperatura controlada) revolucionou a coquetelaria moderna. Infusões de dias se fazem em horas com resultados superiores." },
      { heading: "Como Funciona", text: "Sele destilado + ingrediente em saco a vácuo. Coloque em banho-maria com circulador sous vide na temperatura ideal. O calor controlado extrai sabores sem queimar compostos delicados.", highlight: true },
      { heading: "Temperaturas Ideais", text: "Frutas: 55-60°C por 2-3 horas. Especiarias: 65-70°C por 1-2 horas. Ervas frescas: 50-55°C por 1 hora. Baunilha: 60°C por 3 horas. Café: 65°C por 2 horas." },
      { heading: "Bourbon de Baunilha", text: "500ml bourbon + 2 favas de baunilha cortadas. Sous vide a 60°C por 3 horas. Resultado: infusão que normalmente leva 2 semanas, em uma tarde." },
      { heading: "Gin Caseiro", text: "Vodka + botânicos (zimbro, coentro, cascas de cítricos, cardamomo). Sous vide a 55°C por 2 horas. Coe. Você acabou de fazer seu próprio gin personalizado." },
      { heading: "Equipamento", text: "Circulador sous vide (Anova, Joule) custa R$200-500. Sacos de vácuo ou ziplock com método de deslocamento de ar. Balde ou panela grande." },
      { text: "💡 O sous vide não é apenas mais rápido — é MELHOR. A temperatura controlada extrai sabores desejáveis sem os compostos amargos que infusões longas podem desenvolver." },
    ],
  },
  {
    id: "historia-absinto",
    title: "Absinto: A Fada Verde",
    subtitle: "A bebida proibida que inspirou artistas e assustou governos",
    category: "historia",
    requiredXP: 550,
    icon: "🧚",
    content: [
      { text: "Nenhum destilado tem uma história tão dramática quanto o absinto — proibido por quase um século, acusado de causar loucura, e finalmente redimido pela ciência." },
      { heading: "Origens Suíças (1790s)", text: "Criado na Suíça como elixir medicinal. A receita: destilado com absinto (Artemisia absinthium), anis e erva-doce. A cor verde vinha da clorofila das ervas.", highlight: true },
      { heading: "La Belle Époque", text: "Paris, 1880-1914: o absinto era a bebida dos artistas. Van Gogh, Toulouse-Lautrec, Hemingway, Oscar Wilde — todos devotos da 'Fée Verte' (Fada Verde)." },
      { heading: "A Proibição", text: "Em 1905, um homem suíço matou a família após beber absinto (e muito vinho). A culpa caiu no absinto. Banido na maioria dos países até 2007. A tujona (composto da erva absinto) era acusada de causar alucinações." },
      { heading: "A Redenção", text: "Estudos científicos provaram: o absinto histórico continha tujona em níveis inofensivos. As 'alucinações' eram resultado do alto teor alcoólico (68-72%). O absinto foi legalizado na maioria dos países." },
      { heading: "Ritual Clássico", text: "Coloque a dose de absinto no copo. Apoie a colher perfurada com cubo de açúcar. Goteje água gelada sobre o açúcar (3:1 água/absinto). O absinto fica leitoso — o 'louche'." },
      { text: "💡 O Death in the Afternoon (Hemingway): absinto + champagne. 'Beba 3-5 deles lentamente.' Simples, forte e literário." },
    ],
  },

  // ═══════════════════════════════════════════
  // 600 XP
  // ═══════════════════════════════════════════
  {
    id: "fermentacao-tepache",
    title: "Fermentação para Bartenders: Tepache",
    subtitle: "Transforme cascas de abacaxi em refrigerante artesanal",
    category: "tecnica",
    requiredXP: 600,
    icon: "🍍",
    content: [
      { text: "Tepache é uma bebida fermentada mexicana feita com cascas de abacaxi. É o projeto de fermentação mais fácil que existe — e o resultado é espetacular em drinks." },
      { heading: "Receita Básica", text: "Cascas de 1 abacaxi + 200g de piloncillo (ou açúcar mascavo) + 2L de água + 1 pau de canela + 3 cravos. Cubra com pano e deixe 3-5 dias em temperatura ambiente.", highlight: true },
      { heading: "O Processo", text: "Dia 1-2: nada acontece. Dia 3: bolhas começam a aparecer. Dia 4-5: fermentação ativa, sabor levemente ácido e efervescente. Dia 6+: começa a virar vinagre — coe e refrigere." },
      { heading: "Em Drinks", text: "Tepache + mezcal = Tepache Paloma. Tepache + tequila + limão = Margarita de Tepache. Tepache puro = refrigerante artesanal zero desperdício." },
      { heading: "Variações", text: "Adicione gengibre fresco para mais picância. Tamarindo para acidez. Hibisco para cor. Pimenta habanero para versão picante. As possibilidades são infinitas." },
      { heading: "Segurança", text: "Se aparecer mofo (raro), descarte tudo. Bolhas e espuma branca são normais. O ambiente ácido da fermentação é naturalmente seguro contra bactérias nocivas." },
      { text: "💡 Use as cascas de abacaxi que sobram quando faz sucos — tepache é o drink zero-waste por excelência. Sustentável e delicioso." },
    ],
  },
  {
    id: "mulheres-coquetelaria",
    title: "Mulheres que Revolucionaram a Coquetelaria",
    subtitle: "As pioneiras que moldaram o bar moderno",
    category: "historia",
    requiredXP: 600,
    icon: "👩‍🍳",
    content: [
      { text: "A coquetelaria foi historicamente dominada por homens, mas mulheres sempre estiveram presentes — e muitas vezes foram as verdadeiras inovadoras." },
      { heading: "Ada Coleman (1899-1925)", text: "Head bartender do Savoy Hotel em Londres — a primeira mulher no cargo. Criou o Hanky Panky (gin + vermute doce + Fernet-Branca). Serviu Mark Twain e Charlie Chaplin.", highlight: true },
      { heading: "Julie Reiner", text: "Abriu o Flatiron Lounge (2003) e Clover Club (2008) em NYC. Formou uma geração inteira de bartenders. Provou que alta coquetelaria e ambiente acolhedor coexistem." },
      { heading: "Ivy Mix", text: "Co-proprietária do Leyenda em Brooklyn, focado em destilados latino-americanos. Autora de 'Spirits of Latin America'. Campeã Speed Rack (competição feminina de bartending)." },
      { heading: "Lynnette Marrero", text: "Co-fundadora do Speed Rack, competição de bartending feminino que arrecada fundos para pesquisa de câncer de mama. Ativista por igualdade no bar." },
      { heading: "Monica Berg", text: "Norueguesa, co-fundadora do Tayer + Elementary em Londres (entre os melhores bares do mundo). Pioneira em sustentabilidade e fermentação na coquetelaria." },
      { text: "💡 Speed Rack já arrecadou mais de US$1 milhão para pesquisa de câncer de mama. O bar serve comunidade — além de drinks." },
    ],
  },

  // ═══════════════════════════════════════════
  // 650 XP
  // ═══════════════════════════════════════════
  {
    id: "clarificacao-leite",
    title: "Clarificação com Leite (Milk Punch)",
    subtitle: "A técnica do século XVIII que produz drinks cristalinos",
    category: "tecnica",
    requiredXP: 650,
    icon: "🥛",
    content: [
      { text: "Milk Punch clarificado é uma técnica de 1711: adicionar leite quente a um drink ácido. As proteínas coagulam, capturando impurezas. O resultado: drink cristalino com textura sedosa." },
      { heading: "A Ciência", text: "A caseína do leite reage com o ácido cítrico do drink. As proteínas formam coágulos (curds) que capturam taninos, impurezas e cor — mas preservam sabor e aroma.", highlight: true },
      { heading: "Receita Base", text: "1) Faça o punch: destilado + suco cítrico + xarope + chá + especiarias. 2) Adicione leite integral quente (não fervendo). 3) A mistura coagula — NORMAL. 4) Refrigere 24h. 5) Coe com filtro de café — lentamente." },
      { heading: "Resultado", text: "Um líquido perfeitamente transparente (mesmo com suco de limão e chá), sabor suave e complexo, textura aveludada. Dura MESES na geladeira — o processo remove bactérias." },
      { heading: "Clarified Piña Colada", text: "Rum + suco de abacaxi + leite de coco + xarope + limão. Clarificado com leite integral. Resultado: Piña Colada transparente como água, com todo o sabor. Mind-blowing." },
      { text: "💡 O Milk Punch é perfeito para batch cocktails pré-feitos. Faça 5 litros de uma vez, engarrafe e guarde na geladeira por até 6 meses." },
    ],
  },
  {
    id: "bar-cultura-mundial",
    title: "Cultura de Bar ao Redor do Mundo",
    subtitle: "Como cada país bebe e celebra de forma única",
    category: "historia",
    requiredXP: 650,
    icon: "🌍",
    content: [
      { text: "Cada cultura tem uma relação única com bebidas e bares. Viajar pelo mundo dos drinks é viajar pela humanidade." },
      { heading: "Japão — Izakaya e Precision", text: "Bares japoneses são templos de precisão. Gelo esculpido à mão, Highball servido com técnica exata, bartenders em silêncio respeitoso. Cada drink é uma cerimônia.", highlight: true },
      { heading: "Espanha — Tapas e Vermouth", text: "Na Espanha, vermute é bebido puro com azeitonas e tapas. 'La hora del vermut' (hora do vermute) é ritual social, especialmente em Barcelona." },
      { heading: "Cuba — Música e Ron", text: "Em Cuba, rum é vida. Bars como La Bodeguita del Medio (Mojito) e El Floridita (Daiquiri) são patrimônio. Drinks são servidos com salsa e conversa." },
      { heading: "Itália — Aperitivo", text: "Aperitivo é ritual sagrado: das 18h às 21h, italianos bebem Spritz, Negroni ou Americano com petiscos. É social, relaxante e diário." },
      { heading: "Brasil — Boteco", text: "O boteco brasileiro é democrático: cerveja gelada, caipirinha, petiscos e futebol. Sem frescura, sem pretensão — puro prazer social." },
      { heading: "Reino Unido — Pub Culture", text: "O pub britânico é sala de estar coletiva. Ale, gin tônica e conversa. 'Last orders!' às 23h é o grito que encerra a noite." },
      { text: "💡 Quando viajar, visite os bares locais antes dos turísticos. É onde você encontra drinks autênticos, preços justos e histórias reais." },
    ],
  },

  // ═══════════════════════════════════════════
  // 700 XP
  // ═══════════════════════════════════════════
  {
    id: "fat-washing",
    title: "Fat Washing: Gordura nos Destilados",
    subtitle: "A técnica que adiciona sabores impossíveis ao álcool",
    category: "tecnica",
    requiredXP: 700,
    icon: "🥓",
    content: [
      { text: "Fat washing é infundir destilados com gordura (bacon, manteiga, azeite) para transferir sabor. A gordura é depois removida por congelamento. O sabor fica, a gordura sai." },
      { heading: "Como Funciona", text: "Gordura derretida + destilado → misture bem → temperatura ambiente por 4-6 horas → congele por 24h → a gordura solidifica na superfície → retire e coe.", highlight: true },
      { heading: "Bourbon de Bacon", text: "200g de gordura de bacon + 500ml de bourbon. O clássico. Sabor defumado e untuoso que transforma um Old Fashioned em experiência transcendental." },
      { heading: "Rum de Coco", text: "200ml de óleo de coco + 500ml de rum branco. Sabor tropical natural sem dulçor. Perfeito para Piña Colada com textura extra." },
      { heading: "Vodka de Manteiga", text: "100g de manteiga sem sal derretida + 500ml de vodka. Textura aveludada e sabor sutil de manteiga. Funciona em Martini para resultado surpreendente." },
      { heading: "Tequila de Azeite", text: "100ml de azeite extra-virgem + 500ml de tequila blanco. Notas frutadas e herbáceas do azeite complementam o agave. Perfeito para Margarita autoral." },
      { text: "💡 Use gorduras de qualidade: bacon artesanal, manteiga de pasto, azeite premium. A qualidade da gordura determina a qualidade do sabor final." },
    ],
  },
  {
    id: "evolucao-ferramentas",
    title: "A Evolução das Ferramentas de Bar",
    subtitle: "Do punch bowl à coqueteleira molecular",
    category: "historia",
    requiredXP: 700,
    icon: "⚙️",
    content: [
      { text: "As ferramentas de bar evoluíram dramaticamente em 200 anos. Cada inovação permitiu drinks mais complexos e precisos." },
      { heading: "Punch Bowl (1600s)", text: "A primeira 'ferramenta' de coquetelaria: um grande bowl onde ingredientes eram misturados para servir grupos. Sem doses individuais, sem precisão — mas foi o começo.", highlight: true },
      { heading: "Coqueteleira (1848)", text: "Patenteada em 1848 por H.C. Gray, mas popularizada por Jerry Thomas. A coqueteleira Boston (2 peças) e a Cobbler (3 peças com coador embutido) dominam até hoje." },
      { heading: "Jigger (1893)", text: "Cornelius Dungan patenteou o primeiro jigger. Antes disso, bartenders usavam cascas de ovo e copos de olho. A precisão transformou a coquetelaria em ciência." },
      { heading: "Colher de Bar (1900s)", text: "A colher torcida surgiu no início do século XX. O design helicoidal permite girar com uma mão e deslizar líquidos para layering. Forma segue função perfeitamente." },
      { heading: "Sifão e Sous Vide (2000s)", text: "Dave Arnold e o PolyScience revolucionaram com sous vide, centrifugas e nitrogênio líquido. O bar se tornou laboratório de sabores." },
      { heading: "Ferramentas Modernas", text: "Defumadores portáteis, carbonatadores manuais, prensas de gelo japonesas, formas de gelo cristalino. A tecnologia serve o sabor." },
      { text: "💡 A ferramenta mais importante continua sendo o paladar do bartender. Nenhum gadget substitui provar, ajustar e equilibrar o drink." },
    ],
  },

  // ═══════════════════════════════════════════
  // 750 XP
  // ═══════════════════════════════════════════
  {
    id: "drinks-moleculares",
    title: "Introdução à Coquetelaria Molecular",
    subtitle: "O futuro dos drinks está na ciência",
    category: "tecnica",
    requiredXP: 750,
    icon: "🧪",
    themeTag: "molecular",
    content: [
      { text: "Coquetelaria molecular usa técnicas da gastronomia molecular para criar experiências sensoriais impossíveis com métodos tradicionais. Parece difícil, mas algumas técnicas são simples." },
      { heading: "Esferas (Spherification)", text: "Misture suco com alginato de sódio. Goteje em solução de cloreto de cálcio. Cada gota vira uma esfera que 'explode' na boca liberando o suco. Esferas de Aperol em um Negroni são inesquecíveis." },
      { heading: "Espumas com Sifão", text: "Use sifão de chantilly com carga de N2O. Adicione gelatina ao líquido (suco, licor, champagne). Resultado: espumas leves e aromáticas que cobrem o drink como uma nuvem.", highlight: true },
      { heading: "Clarificação com Leite", text: "Técnica do século XVIII! Adicione leite quente ao drink ácido — as proteínas coagulam e capturam impurezas. Coe com filtro de café. Resultado: drink cristalino com sabor complexo." },
      { heading: "Defumação", text: "Use uma cloche (cúpula de vidro) e chips de madeira (nogueira, cerejeira, macieira). Defume por 30 segundos. O aroma é liberado quando o convidado levanta a cúpula — experiência teatral." },
      { text: "💡 Comece com a defumação — é a técnica molecular mais fácil e impressionante. Um defumador manual custa menos de R$100 e transforma qualquer Old Fashioned em uma experiência de bar premium." },
    ],
  },
  {
    id: "historia-cachaca",
    title: "A Saga da Cachaça Brasileira",
    subtitle: "500 anos de história do destilado nacional",
    category: "historia",
    requiredXP: 750,
    icon: "🇧🇷",
    content: [
      { text: "A cachaça é o destilado mais antigo das Américas e carrega 500 anos de história brasileira — de bebida de escravos a patrimônio nacional." },
      { heading: "Origens (1530s)", text: "Escravos em engenhos de açúcar em Pernambuco descobriram que o caldo de cana fermentado podia ser destilado. O resultado era forte e barato — perfeito para o trabalho pesado.", highlight: true },
      { heading: "Proibição Colonial", text: "Portugal tentou proibir a cachaça várias vezes para proteger o vinho e o bagaceiro portugueses. Os brasileiros resistiram — a cachaça virou símbolo de resistência." },
      { heading: "A Revolta da Cachaça (1660)", text: "No Rio de Janeiro, a tentativa de proibição causou revolta popular. Os produtores de cachaça venceram. É uma das primeiras revoltas anticoloniais do Brasil." },
      { heading: "Caipirinha", text: "Origem incerta, mas provavelmente surgiu em São Paulo no início do século XX. Limão, açúcar e cachaça — a receita mais brasileira que existe." },
      { heading: "Reconhecimento Global", text: "Em 2003, o governo brasileiro definiu cachaça como Indicação Geográfica. Desde então, destilarias artesanais produzem cachaças premiadas internacionalmente." },
      { text: "💡 Existem mais de 4.000 produtores de cachaça no Brasil. Minas Gerais é o estado com maior produção artesanal. A diversidade de estilos é comparável à do whisky escocês." },
    ],
  },

  // ═══════════════════════════════════════════
  // 800 XP
  // ═══════════════════════════════════════════
  {
    id: "defumacao-avancada",
    title: "Técnicas Avançadas de Defumação",
    subtitle: "Além do básico — fumaça como ingrediente complexo",
    category: "tecnica",
    requiredXP: 800,
    icon: "💨",
    content: [
      { text: "Defumação em drinks vai muito além da cloche com chips. Dominar os tipos de madeira, técnicas e intensidades é o que cria drinks verdadeiramente memoráveis." },
      { heading: "Madeiras e Perfis", text: "Nogueira (hickory): forte, carnoso. Cerejeira (cherry): doce, frutado. Macieira (apple): suave, adocicado. Mesquite: intenso, terroso. Carvalho (oak): equilibrado, versátil.", highlight: true },
      { heading: "Defumação no Copo", text: "Inverta o copo sobre fumaça por 20-30 segundos. Vire e despeje o drink imediatamente. A fumaça fica presa no copo e se integra ao líquido. Ideal para Old Fashioned." },
      { heading: "Defumação com Cloche", text: "Monte o drink no copo. Coloque a cloche sobre. Insira fumaça pelo orifício (ou levante levemente). Sirva coberto — o convidado levanta e é envolvido pelo aroma." },
      { heading: "Gelo Defumado", text: "Defume água em bandeja aberta por 5 minutos. Congele. Use os cubos em drinks — a fumaça é liberada gradualmente conforme derrete. Efeito prolongado." },
      { heading: "Xarope Defumado", text: "Defume xarope simples em recipiente aberto por 3 minutos. Guarde em garrafa fechada. Use em qualquer receita para adicionar notas defumadas sutis." },
      { text: "💡 Defumação deve complementar, nunca dominar. 10-20 segundos para drinks suaves, 30-60 para intensos. Mais que isso e o drink vira cinzeiro." },
    ],
  },
  {
    id: "competicoes-bartending",
    title: "O Mundo das Competições de Bartending",
    subtitle: "Como os melhores bartenders do mundo são escolhidos",
    category: "historia",
    requiredXP: 800,
    icon: "🏆",
    content: [
      { text: "Competições de bartending são o Olimpo da coquetelaria. Os melhores do mundo competem em técnica, criatividade e apresentação." },
      { heading: "World Class (Diageo)", text: "A maior competição global. Bartenders de 60+ países competem em categorias: speed round, signature cocktail, classic cocktail, hospitality. O campeão ganha reconhecimento mundial.", highlight: true },
      { heading: "Bacardi Legacy", text: "O desafio: criar UM cocktail que se torne 'legado' — um drink simples o suficiente para ser replicado em qualquer bar do mundo, mas único e memorável." },
      { heading: "Speed Rack", text: "Competição feminina de bartending em formato de eliminação rápida. Foco em velocidade e precisão. Arrecada fundos para pesquisa de câncer de mama." },
      { heading: "Tales of the Cocktail", text: "Não é competição, mas o maior festival de coquetelaria do mundo. New Orleans, julho. Seminários, degustações e o Spirited Awards (o 'Oscar' dos bares)." },
      { heading: "Spirited Awards", text: "Categorias: Melhor Bar do Mundo, Melhor Bartender, Melhor Novo Bar. Vencer é o ápice da carreira. Connaught Bar, Licorería Limantour e Paradiso são campeões recentes." },
      { text: "💡 Você não precisa competir para se beneficiar: assista as apresentações no YouTube. Cada competidor ensina técnicas e receitas que você pode aplicar em casa." },
    ],
  },

  // ═══════════════════════════════════════════
  // 850 XP
  // ═══════════════════════════════════════════
  {
    id: "kombucha-cocktails",
    title: "Kombucha e Fermentados em Cocktails",
    subtitle: "A revolução probiotic-chic no bar",
    category: "tecnica",
    requiredXP: 850,
    icon: "🫖",
    content: [
      { text: "Kombucha e fermentados trazem acidez natural, efervescência e complexidade. São alternativas sofisticadas a refrigerantes e mixers artificiais." },
      { heading: "Kombucha como Mixer", text: "Substitua soda ou tônica por kombucha. A carbonatação natural, acidez e sabores complexos elevam qualquer drink. Kombucha de gengibre + rum = Dark 'n' Stormy premium.", highlight: true },
      { heading: "Kefir de Água", text: "Água + açúcar fermentados com grãos de kefir. Resultado: bebida efervescente, levemente ácida e probiótica. Use como base para mocktails sofisticados." },
      { heading: "Jun Tea", text: "Kombucha feita com chá verde e mel (em vez de chá preto e açúcar). Mais delicada e floral. Perfeita com gin e vodka." },
      { heading: "Precauções", text: "Fermentados contêm álcool residual (0.5-2% ABV). Em drinks alcoólicos, isso não é problema. Para mocktails, informe os convidados." },
      { heading: "Sabores que Funcionam", text: "Kombucha de gengibre → whisky e rum. Kombucha de hibisco → tequila e mezcal. Kombucha de maçã → bourbon e brandy. Kombucha de limão → gin e vodka." },
      { text: "💡 Faça kombucha em casa — é fácil, barato e você controla sabores e carbonatação. Um SCOBY (cultura) custa R$20 e dura anos." },
    ],
  },
  {
    id: "cocktails-presidentes",
    title: "Os Drinks Favoritos dos Presidentes",
    subtitle: "O que os líderes mundiais bebiam (e bebem)",
    category: "historia",
    requiredXP: 850,
    icon: "🏛️",
    content: [
      { text: "Presidentes e líderes mundiais sempre tiveram drinks favoritos. Alguns até influenciaram a cultura de bebida de seus países." },
      { heading: "JFK — Daiquiri", text: "Kennedy amava Daiquiri — simples e refrescante. Também apreciava Bloody Mary e champagne Dom Pérignon. A Casa Branca tinha bartender dedicado.", highlight: true },
      { heading: "Churchill — Whisky & Soda", text: "Winston Churchill era famoso pelo consumo de whisky. Bebia Johnnie Walker com soda diariamente. Famosa citação: 'I have taken more out of alcohol than alcohol has taken out of me.'" },
      { heading: "Obama — Martini Dirty", text: "Barack Obama preferia Martini com vodka e azeitonas extras. Também apreciava cerveja artesanal — mandou instalar uma micro-cervejaria na Casa Branca." },
      { heading: "Nixon — Rum & Soda", text: "Richard Nixon era fã de rum com soda — simples e direto. Curiosamente, o presidente que criou a 'War on Drugs' tinha hábitos de bebida bem conhecidos." },
      { heading: "Hemingway (Quase Presidente)", text: "Não era presidente, mas Hemingway influenciou mais a cultura de drinks que qualquer político. Mojito na Bodeguita del Medio, Daiquiri no Floridita, Champagne em Paris." },
      { text: "💡 A única presidente americana a abolir álcool da Casa Branca foi Lucy Hayes (esposa de Rutherford B. Hayes, 1877-1881). Ganhou o apelido de 'Lemonade Lucy'." },
    ],
  },

  // ═══════════════════════════════════════════
  // 900 XP
  // ═══════════════════════════════════════════
  {
    id: "agua-importancia",
    title: "A Importância da Água nos Drinks",
    subtitle: "O ingrediente invisível que faz toda a diferença",
    category: "tecnica",
    requiredXP: 900,
    icon: "💧",
    content: [
      { text: "Água é o ingrediente mais presente nos cocktails — via gelo, diluição e soda. Ignorar a qualidade da água é sabotar todos os outros ingredientes." },
      { heading: "Água no Gelo", text: "Gelo é 100% água. Se sua água de torneira tem cloro ou minerais pesados, seu gelo terá esses sabores. Use água filtrada ou mineral para gelo.", highlight: true },
      { heading: "Água com Gás", text: "Nem toda água com gás é igual. Gás natural (Perrier, San Pellegrino) tem minerais que afetam o sabor. Soda comum é mais neutra. Teste qual funciona melhor no seu Gin Tônica." },
      { heading: "Diluição Controlada", text: "Agitar 10-15 segundos adiciona ~25% de água. Mexer 30 segundos adiciona ~15%. A água não é inimigo — é INGREDIENTE. Controle a quantidade para equilibrar o drink." },
      { heading: "Água no Whisky", text: "3-5 gotas de água em single malt abrem aromas (rompe a tensão superficial e libera compostos voláteis). É ciência, não sacrilégio. Puristas que discordam estão errados." },
      { heading: "Água de Coco", text: "Substitui água em drinks tropicais com resultado incrível. Vodka + água de coco + limão = coquetel praiano leve e hidratante." },
      { text: "💡 Experimento: faça dois Gin Tônicos idênticos — um com água de torneira e outro com água mineral. A diferença é perceptível para qualquer paladar." },
    ],
  },
  {
    id: "futuro-coquetelaria",
    title: "O Futuro da Coquetelaria",
    subtitle: "Para onde caminha a arte dos drinks",
    category: "historia",
    requiredXP: 900,
    icon: "🚀",
    content: [
      { text: "A coquetelaria está em constante evolução. As tendências de hoje moldarão os bares de amanhã. Veja o que está por vir." },
      { heading: "Sustentabilidade Total", text: "Zero-waste não é tendência — é o novo padrão. Bares como Penicillin (Hong Kong) e Lyaness (Londres) transformam 100% dos resíduos em ingredientes.", highlight: true },
      { heading: "IA e Dados", text: "Bares estão usando inteligência artificial para criar receitas baseadas em preferências do cliente. Análise de dados otimiza estoque, custos e cardápios sazonais." },
      { heading: "Drinks sem Álcool Premium", text: "O mercado de bebidas sem álcool cresce 30% ao ano. Destilados zero-proof (Seedlip, Lyre's, Monday) estão em 80% dos melhores bares do mundo." },
      { heading: "Fermentação e Terroir", text: "Assim como vinho, cocktails estão abraçando o conceito de terroir — ingredientes locais que refletem o lugar. Fermentados locais, destilados regionais, frutas nativas." },
      { heading: "Experiências Imersivas", text: "Bares temáticos com realidade aumentada, drinks personalizados por DNA, menus interativos com QR codes. A experiência vai além do líquido no copo." },
      { heading: "Saúde Consciente", text: "Adaptógenos, CBD, probióticos e superfoods em cocktails. Drinks que prometem benefícios funcionais além do sabor." },
      { text: "💡 O futuro da coquetelaria não é sobre tecnologia — é sobre humanidade. Os melhores bares do futuro serão os que conectam pessoas, respeitam o planeta e servem drinks honestos." },
    ],
  },

  // ═══════════════════════════════════════════
  // 950 XP
  // ═══════════════════════════════════════════
  {
    id: "espresso-perfeito-bar",
    title: "O Espresso Perfeito para Cocktails",
    subtitle: "Técnica de café que transforma drinks de café",
    category: "tecnica",
    requiredXP: 950,
    icon: "☕",
    themeTag: "cafe",
    content: [
      { text: "O Espresso Martini é o drink mais pedido da década — e 90% são feitos com café medíocre. Dominar a extração de espresso eleva seu nível exponencialmente." },
      { heading: "Moagem", text: "Café para espresso de cocktail deve ser moído fino (como areia). Moagem grossa sub-extrai e resulta em sabor aguado. Use moedor cônico (burr) — nunca lâmina.", highlight: true },
      { heading: "Dose e Extração", text: "18g de café, 36ml de líquido, 25-30 segundos de extração. Proporção 1:2. Se o espresso escorre rápido demais, moa mais fino. Se escorre devagar demais, moa mais grosso." },
      { heading: "Temperatura", text: "Água entre 90-96°C. Muito quente queima o café (amargo). Muito fria sub-extrai (ácido). Se não tem controle de temperatura, use a máquina no modo padrão." },
      { heading: "Frescor é TUDO", text: "Use o espresso imediatamente — dentro de 30 segundos. Café que espera mais de 1 minuto perde crema e aroma. Time o espresso com a preparação do drink." },
      { heading: "Sem Máquina?", text: "Moka italiana (cafeteira) produz café forte o suficiente para cocktails. Use 20ml de moka como substituto de espresso. Não é idêntico, mas funciona bem." },
      { text: "💡 Para crema perfeita no Espresso Martini: espresso fresquíssimo + agitação vigorosa por 15 segundos. A crema é formada pelas proteínas do café + aeração do shake." },
    ],
  },
  {
    id: "tinturas-extratos",
    title: "Tinturas e Extratos para Bartenders",
    subtitle: "Concentrados de sabor que cabem numa gota",
    category: "tecnica",
    requiredXP: 950,
    icon: "💊",
    content: [
      { text: "Tinturas são extratos concentrados em álcool — cada gota carrega sabor intenso. São os 'temperos secretos' dos melhores bartenders do mundo." },
      { heading: "O que é uma Tintura", text: "Ingrediente aromático macerado em álcool de alta graduação (vodka ou álcool de cereais) por dias a semanas. O álcool extrai compostos aromáticos de forma ultra-concentrada.", highlight: true },
      { heading: "Tintura de Baunilha", text: "3 favas de baunilha cortadas + 200ml de vodka. Deixe 2-4 semanas em local escuro, agitando diariamente. 3-5 gotas em Old Fashioned = transformação." },
      { heading: "Tintura de Jalapeño", text: "5 jalapeños fatiados + 200ml de vodka. 24-48 horas apenas (pimenta extrai rápido). Coe e use gotas em Margaritas para calor preciso." },
      { heading: "Tintura de Cacau", text: "100g nibs de cacau + 200ml vodka. 1 semana. Sabor intenso de chocolate amargo. 5 gotas em Manhattan ou White Russian." },
      { heading: "Uso Correto", text: "Tinturas são CONCENTRADAS — use gotas, não mililitros. Comece com 2-3 gotas, prove, ajuste. Mais é fácil; menos é impossível." },
      { text: "💡 Guarde tinturas em frascos conta-gotas de vidro âmbar. A luz degrada compostos aromáticos. Com frascos corretos, duram 1+ anos." },
    ],
  },

  // ═══════════════════════════════════════════
  // 1000 XP — MESTRE
  // ═══════════════════════════════════════════
  {
    id: "equilibrio-perfeito",
    title: "A Filosofia do Equilíbrio Perfeito",
    subtitle: "O conceito que define os maiores bartenders do mundo",
    category: "tecnica",
    requiredXP: 1000,
    icon: "⚖️",
    content: [
      { text: "O equilíbrio é a alma da coquetelaria. Não importa a técnica, o ingrediente ou a apresentação — se o drink não está equilibrado, nada mais importa." },
      { heading: "Os 5 Sabores", text: "Todo drink navega entre: doce, ácido, amargo, salgado e umami. O equilíbrio perfeito acontece quando nenhum sabor domina — todos se complementam.", highlight: true },
      { heading: "Regra da Compensação", text: "Muito doce? Adicione ácido (limão). Muito ácido? Adicione doce (xarope). Muito amargo? Adicione doce e uma pitada de sal. Muito forte? Diluição ou gelo." },
      { heading: "O Papel do Sal", text: "Uma pitada de sal (PITADA, não colher) em qualquer drink amplia sabores e reduz amargor percebido. É o segredo mais subestimado da coquetelaria. Soluação salina (20% sal + 80% água) permite controle preciso." },
      { heading: "Provar é Lei", text: "SEMPRE prove o drink antes de servir. Use canudo como pipeta: coloque no líquido, tampe a ponta com o dedo, leve à boca. Se o bartender não prova, não confia no próprio drink." },
      { heading: "Intuição Treinada", text: "Com prática, equilibrar se torna instintivo. Você olha uma receita e sabe que precisa de mais ácido ou menos xarope antes de provar. Esse sexto sentido é o que define um mestre." },
      { text: "💡 Dave Arnold diz: 'Um drink equilibrado é aquele que você quer continuar bebendo.' Se após o primeiro gole você quer mais, está equilibrado. Se não, ajuste." },
    ],
  },
  {
    id: "melhores-bares-mundo",
    title: "Os 10 Melhores Bares do Mundo",
    subtitle: "Os templos da coquetelaria que todo entusiasta deve conhecer",
    category: "historia",
    requiredXP: 1000,
    icon: "🌟",
    content: [
      { text: "A lista World's 50 Best Bars é o guia definitivo. Estes bares definem tendências, formam bartenders e estabelecem os padrões da excelência." },
      { heading: "Paradiso (Barcelona)", text: "Número 1 do mundo em 2022-23. Entrada por uma geladeira em uma loja de sanduíches. Drinks moleculares teatrais em ambiente de speakeasy. Cada drink é uma experiência imersiva.", highlight: true },
      { heading: "Handshake Speakeasy (Cidade do México)", text: "Top 3 mundial. Cocktails mexicanos com técnica de altíssimo nível. Mezcal, tequila e ingredientes locais elevados ao extremo." },
      { heading: "Connaught Bar (Londres)", text: "Elegância britânica no Mayfair. O Martini é preparado tableside com carrinho de prata. Perfeição clássica sem pretensão." },
      { heading: "Sips (Barcelona)", text: "Conceito de 'cocktails curtos' — drinks menores, mais concentrados e intensos. Revolucionou o formato de servir cocktails." },
      { heading: "Licorería Limantour (Cidade do México)", text: "Ingredientes mexicanos com técnica global. Acessível, divertido e tecnicamente impecável. Referência em hospitalidade." },
      { heading: "Atlas (Singapura)", text: "Art deco monumental, torre de 15 metros com 1.300 gins. Especializado em gin e champagne. O espaço mais espetacular do mundo dos bares." },
      { text: "💡 Visitar esses bares é investimento em educação. Observe tudo: como servem, como se movem, como tratam cada convidado. A hospitalidade é tão importante quanto o drink." },
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
