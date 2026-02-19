export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredXP?: number;
  condition?: string;
}

export const achievements: Achievement[] = [
  // ===== EXPLORAÇÃO DE RECEITAS (15) =====
  { id: "explorer-1", title: "Primeiro Gole", description: "Visualizou sua primeira receita", icon: "🍸" },
  { id: "explorer-5", title: "Curioso", description: "Visualizou 5 receitas", icon: "🔍" },
  { id: "explorer-10", title: "Explorador", description: "Visualizou 10 receitas", icon: "🧭" },
  { id: "explorer-15", title: "Degustador", description: "Visualizou 15 receitas", icon: "👅" },
  { id: "explorer-25", title: "Aventureiro", description: "Visualizou 25 receitas", icon: "🗺️" },
  { id: "explorer-35", title: "Viajante do Bar", description: "Visualizou 35 receitas", icon: "✈️" },
  { id: "explorer-50", title: "Mestre Explorador", description: "Visualizou 50 receitas", icon: "🏆" },
  { id: "explorer-75", title: "Colecionador de Receitas", description: "Visualizou 75 receitas", icon: "📋" },
  { id: "explorer-100", title: "Enciclopédia Viva", description: "Visualizou 100 receitas", icon: "📚" },
  { id: "explorer-120", title: "Maratonista de Drinks", description: "Visualizou 120 receitas", icon: "🏃" },
  { id: "explorer-140", title: "Guru dos Cocktails", description: "Visualizou 140 receitas", icon: "🧘" },
  { id: "explorer-150", title: "Devorador de Receitas", description: "Visualizou 150 receitas", icon: "🔥" },
  { id: "explorer-170", title: "Mestre Supremo", description: "Visualizou 170 receitas", icon: "⚡" },
  { id: "explorer-180", title: "Lenda Ambulante", description: "Visualizou 180 receitas", icon: "🌟" },
  { id: "explorer-all", title: "Omnisciente", description: "Visualizou todas as receitas", icon: "👁️" },

  // ===== MARCOS DE XP (25) =====
  { id: "xp-10", title: "Primeiros Passos", description: "Acumulou 10 XP", icon: "🌱", requiredXP: 10 },
  { id: "xp-25", title: "Esquentando", description: "Acumulou 25 XP", icon: "🌿", requiredXP: 25 },
  { id: "xp-50", title: "Meio Caminho", description: "Acumulou 50 XP", icon: "🌳", requiredXP: 50 },
  { id: "xp-75", title: "Crescendo", description: "Acumulou 75 XP", icon: "🍀", requiredXP: 75 },
  { id: "xp-100", title: "Centenário", description: "Acumulou 100 XP", icon: "💯", requiredXP: 100 },
  { id: "xp-150", title: "Determinado", description: "Acumulou 150 XP", icon: "💪", requiredXP: 150 },
  { id: "xp-200", title: "Imparável", description: "Acumulou 200 XP", icon: "🚀", requiredXP: 200 },
  { id: "xp-250", title: "Talento Natural", description: "Acumulou 250 XP", icon: "✨", requiredXP: 250 },
  { id: "xp-300", title: "Estrela Ascendente", description: "Acumulou 300 XP", icon: "⭐", requiredXP: 300 },
  { id: "xp-350", title: "Profissional", description: "Acumulou 350 XP", icon: "🎯", requiredXP: 350 },
  { id: "xp-400", title: "Bartender de Elite", description: "Acumulou 400 XP", icon: "🏅", requiredXP: 400 },
  { id: "xp-450", title: "Classe Mundial", description: "Acumulou 450 XP", icon: "🌍", requiredXP: 450 },
  { id: "xp-500", title: "Meio Milênio", description: "Acumulou 500 XP", icon: "🎖️", requiredXP: 500 },
  { id: "xp-600", title: "Seis Centenas", description: "Acumulou 600 XP", icon: "💎", requiredXP: 600 },
  { id: "xp-700", title: "Setecentos!", description: "Acumulou 700 XP", icon: "👑", requiredXP: 700 },
  { id: "xp-750", title: "Quase Lenda", description: "Acumulou 750 XP", icon: "🔱", requiredXP: 750 },
  { id: "xp-800", title: "Oitocentos", description: "Acumulou 800 XP", icon: "🏛️", requiredXP: 800 },
  { id: "xp-900", title: "Novecentos", description: "Acumulou 900 XP", icon: "⚜️", requiredXP: 900 },
  { id: "xp-1000", title: "Milhar Dourado", description: "Acumulou 1000 XP", icon: "🥇", requiredXP: 1000 },
  { id: "xp-1250", title: "Veterano", description: "Acumulou 1250 XP", icon: "🎗️", requiredXP: 1250 },
  { id: "xp-1500", title: "Mestre Absoluto", description: "Acumulou 1500 XP", icon: "🏆", requiredXP: 1500 },
  { id: "xp-1750", title: "Imortal do Bar", description: "Acumulou 1750 XP", icon: "♾️", requiredXP: 1750 },
  { id: "xp-2000", title: "Deus dos Cocktails", description: "Acumulou 2000 XP", icon: "⚡", requiredXP: 2000 },
  { id: "xp-2500", title: "Transcendência", description: "Acumulou 2500 XP", icon: "🌌", requiredXP: 2500 },
  { id: "xp-3000", title: "Infinito", description: "Acumulou 3000 XP", icon: "🔮", requiredXP: 3000 },

  // ===== NÍVEIS (7) =====
  { id: "level-2", title: "Aprendiz", description: "Alcançou nível 2", icon: "⭐" },
  { id: "level-3", title: "Bartender Jr.", description: "Alcançou nível 3", icon: "🌟" },
  { id: "level-4", title: "Mixologista", description: "Alcançou nível 4", icon: "💫" },
  { id: "level-5", title: "Bartender Pro", description: "Alcançou nível 5", icon: "🏅" },
  { id: "level-6", title: "Mestre dos Drinks", description: "Alcançou nível 6", icon: "👑" },
  { id: "level-7", title: "Lenda do Bar", description: "Alcançou nível máximo", icon: "🎖️" },

  // ===== DICAS E ARTIGOS (10) =====
  { id: "first-tip", title: "Primeira Lição", description: "Desbloqueou sua primeira dica", icon: "📖" },
  { id: "tips-5", title: "Aluno Dedicado", description: "Desbloqueou 5 dicas", icon: "📝" },
  { id: "all-tips", title: "Sábio do Bar", description: "Desbloqueou todas as dicas", icon: "🧠" },
  { id: "first-article", title: "Leitor Iniciante", description: "Leu seu primeiro artigo", icon: "📰" },
  { id: "scholar-3", title: "Estudioso", description: "Leu 3 artigos completos", icon: "📑" },
  { id: "scholar-5", title: "Leitor Ávido", description: "Leu 5 artigos completos", icon: "📑" },
  { id: "articles-5", title: "Intelectual", description: "Leu 5 artigos no total", icon: "📑" },
  { id: "scholar-10", title: "Intelectual do Bar", description: "Leu 10 artigos completos", icon: "🎓" },
  { id: "articles-10", title: "Professor", description: "Leu 10 artigos no total", icon: "🎓" },
  { id: "articles-all", title: "Mestre do Conhecimento", description: "Leu todos os artigos", icon: "🏛️" },

  // ===== CATEGORIAS DE DRINKS (18) =====
  { id: "cat-vodka-5", title: "Vodka Lover", description: "Viu 5 drinks de vodka", icon: "🍸" },
  { id: "cat-vodka-all", title: "Czar da Vodka", description: "Viu todos os drinks de vodka", icon: "🐻" },
  { id: "cat-rum-5", title: "Pirata", description: "Viu 5 drinks de rum", icon: "🏴‍☠️" },
  { id: "cat-rum-all", title: "Capitão do Rum", description: "Viu todos os drinks de rum", icon: "⚓" },
  { id: "cat-gin-5", title: "Botânico", description: "Viu 5 drinks de gin", icon: "🌿" },
  { id: "cat-gin-all", title: "Rei do Gin", description: "Viu todos os drinks de gin", icon: "👑" },
  { id: "cat-tequila-5", title: "Viva México!", description: "Viu 5 drinks de tequila", icon: "🌵" },
  { id: "cat-tequila-all", title: "Don Tequila", description: "Viu todos os drinks de tequila", icon: "🇲🇽" },
  { id: "cat-whisky-5", title: "Gentleman", description: "Viu 5 drinks de whisky", icon: "🥃" },
  { id: "cat-whisky-all", title: "Lord do Whisky", description: "Viu todos os drinks de whisky", icon: "🎩" },
  { id: "cat-classicos", title: "Tradicionalista", description: "Viu 10 drinks clássicos", icon: "🥃" },
  { id: "cat-classicos-all", title: "Guardião dos Clássicos", description: "Viu todos os clássicos", icon: "🏰" },
  { id: "cat-tropicais", title: "Alma Tropical", description: "Viu 10 drinks tropicais", icon: "🌴" },
  { id: "cat-tropicais-all", title: "Rei da Praia", description: "Viu todos os tropicais", icon: "🏖️" },
  { id: "cat-sem-alcool", title: "Sobriedade Elegante", description: "Viu 5 drinks sem álcool", icon: "🍹" },
  { id: "cat-sem-alcool-all", title: "Mestre Mocktail", description: "Viu todos sem álcool", icon: "🌈" },
  { id: "cat-shots", title: "Vida Noturna", description: "Viu 5 shots e doses", icon: "🎯" },
  { id: "cat-cafe", title: "Cafeínado", description: "Viu todos os drinks com café", icon: "☕" },
  { id: "cat-refrescantes", title: "Brisa Gelada", description: "Viu 10 drinks refrescantes", icon: "❄️" },
  { id: "cat-champagne", title: "Elegância Borbulhante", description: "Viu 5 drinks de champagne", icon: "🥂" },
  { id: "cat-champagne-all", title: "Aristocrata", description: "Viu todos de champagne", icon: "👸" },
  { id: "cat-exoticos", title: "Cidadão do Mundo", description: "Viu 5 drinks exóticos", icon: "🌏" },
  { id: "cat-exoticos-all", title: "Explorador Global", description: "Viu todos os exóticos", icon: "🗺️" },

  // ===== FAVORITOS (8) =====
  { id: "fav-1", title: "Primeiro Amor", description: "Favoritou seu primeiro drink", icon: "💕" },
  { id: "fav-3", title: "Apreciador", description: "Favoritou 3 drinks", icon: "💖" },
  { id: "fav-5", title: "Colecionador", description: "Favoritou 5 drinks", icon: "💎" },
  { id: "fav-10", title: "Curador de Drinks", description: "Favoritou 10 drinks", icon: "🎪" },
  { id: "fav-15", title: "Conhecedor", description: "Favoritou 15 drinks", icon: "🍷" },
  { id: "fav-20", title: "Sommelier Jr.", description: "Favoritou 20 drinks", icon: "🎭" },
  { id: "fav-25", title: "Sommelier Pessoal", description: "Favoritou 25 drinks", icon: "🍷" },
  { id: "fav-50", title: "Super Sommelier", description: "Favoritou 50 drinks", icon: "🏆" },

  // ===== LISTA DE COMPRAS (5) =====
  { id: "shop-1", title: "Planejador", description: "Adicionou primeiro drink à lista de compras", icon: "🛒" },
  { id: "shop-3", title: "Organizador", description: "3 drinks na lista de compras", icon: "📋" },
  { id: "shop-5", title: "Festa Planejada", description: "5 drinks na lista de compras", icon: "🎉" },
  { id: "shop-10", title: "Barman do Evento", description: "10 drinks na lista de compras", icon: "🎊" },
  { id: "shop-20", title: "Anfitrião Supreme", description: "20 drinks na lista de compras", icon: "🏡" },

  // ===== DIFICULDADE (6) =====
  { id: "diff-easy-10", title: "Começando Fácil", description: "Viu 10 drinks fáceis", icon: "🟢" },
  { id: "diff-easy-25", title: "Rei do Fácil", description: "Viu 25 drinks fáceis", icon: "✅" },
  { id: "diff-medium-5", title: "Subindo de Nível", description: "Viu 5 drinks médios", icon: "🟡" },
  { id: "diff-medium-15", title: "Desafiador", description: "Viu 15 drinks médios", icon: "🟠" },
  { id: "diff-hard-3", title: "Corajoso", description: "Viu 3 drinks avançados", icon: "🔴" },
  { id: "diff-hard-all", title: "Sem Medo", description: "Viu todos os drinks avançados", icon: "💀" },

  // ===== ESPECIAIS / COMPORTAMENTO (15) =====
  { id: "night-owl", title: "Coruja Noturna", description: "Explorou receitas após meia-noite", icon: "🦉" },
  { id: "early-bird", title: "Madrugador", description: "Explorou receitas antes das 7h", icon: "🐦" },
  { id: "weekend-warrior", title: "Guerreiro do Fim de Semana", description: "Viu 20 receitas em um dia", icon: "⚔️" },
  { id: "binge-viewer", title: "Maratonista", description: "Viu 30 receitas em um dia", icon: "🏃‍♂️" },
  { id: "streak-3", title: "Consistente", description: "Voltou ao app 3 dias seguidos", icon: "📅" },
  { id: "streak-7", title: "Dedicado", description: "Voltou ao app 7 dias seguidos", icon: "🗓️" },
  { id: "streak-14", title: "Duas Semanas!", description: "Voltou ao app 14 dias seguidos", icon: "🔥" },
  { id: "streak-30", title: "Hábito Formado", description: "Voltou ao app 30 dias seguidos", icon: "💪" },
  { id: "first-search", title: "Investigador", description: "Fez sua primeira busca", icon: "🕵️" },
  { id: "speed-learner", title: "Aprendiz Veloz", description: "Ganhou 100 XP em um dia", icon: "⚡" },
  { id: "speed-master", title: "Máquina de XP", description: "Ganhou 200 XP em um dia", icon: "🤖" },
  { id: "completionist", title: "Completionista", description: "Desbloqueou 50 conquistas", icon: "🏅" },
  { id: "mega-completionist", title: "Mega Completionista", description: "Desbloqueou 75 conquistas", icon: "🥇" },
  { id: "ultimate", title: "O Escolhido", description: "Desbloqueou 100 conquistas", icon: "👁️‍🗨️" },
  { id: "all-categories", title: "Mixologista Universal", description: "Viu drinks de todas as categorias", icon: "🌐" },
];

export function getAchievementById(id: string): Achievement | undefined {
  return achievements.find((a) => a.id === id);
}
