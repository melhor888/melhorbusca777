export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredXP?: number;
  condition?: string;
}

export const achievements: Achievement[] = [
  // Exploração de receitas
  { id: "explorer-5", title: "Curioso", description: "Visualizou 5 receitas", icon: "🔍" },
  { id: "explorer-10", title: "Explorador", description: "Visualizou 10 receitas", icon: "🧭" },
  { id: "explorer-25", title: "Aventureiro", description: "Visualizou 25 receitas", icon: "🗺️" },
  { id: "explorer-50", title: "Mestre Explorador", description: "Visualizou 50 receitas", icon: "🏆" },
  { id: "explorer-100", title: "Enciclopédia Viva", description: "Visualizou 100 receitas", icon: "📚" },
  { id: "explorer-150", title: "Devorador de Receitas", description: "Visualizou 150 receitas", icon: "🔥" },

  // Níveis
  { id: "level-2", title: "Aprendiz", description: "Alcançou nível 2", icon: "⭐" },
  { id: "level-3", title: "Bartender Jr.", description: "Alcançou nível 3", icon: "🌟" },
  { id: "level-4", title: "Mixologista", description: "Alcançou nível 4", icon: "💫" },
  { id: "level-5", title: "Bartender Pro", description: "Alcançou nível 5", icon: "🏅" },
  { id: "level-6", title: "Mestre dos Drinks", description: "Alcançou nível 6", icon: "👑" },
  { id: "level-7", title: "Lenda do Bar", description: "Alcançou nível máximo", icon: "🎖️" },

  // Dicas e artigos
  { id: "first-tip", title: "Primeira Lição", description: "Desbloqueou sua primeira dica", icon: "📖" },
  { id: "all-tips", title: "Sábio do Bar", description: "Desbloqueou todas as dicas", icon: "🧠" },
  { id: "first-article", title: "Leitor Iniciante", description: "Leu seu primeiro artigo", icon: "📰" },
  { id: "articles-5", title: "Leitor Ávido", description: "Leu 5 artigos completos", icon: "📑" },
  { id: "articles-10", title: "Intelectual do Bar", description: "Leu 10 artigos completos", icon: "🎓" },
  { id: "articles-all", title: "Mestre do Conhecimento", description: "Leu todos os artigos", icon: "🏛️" },

  // Categorias de drinks
  { id: "cat-classicos", title: "Tradicionalista", description: "Viu 10 drinks clássicos", icon: "🥃" },
  { id: "cat-tropicais", title: "Alma Tropical", description: "Viu 10 drinks tropicais", icon: "🌴" },
  { id: "cat-sem-alcool", title: "Sobriedade Elegante", description: "Viu 5 drinks sem álcool", icon: "🍹" },
  { id: "cat-shots", title: "Vida Noturna", description: "Viu 5 shots e doses", icon: "🎯" },
  { id: "cat-cafe", title: "Cafeínado", description: "Viu todos os drinks com café", icon: "☕" },
  { id: "cat-refrescantes", title: "Brisa Gelada", description: "Viu 10 drinks refrescantes", icon: "❄️" },

  // Favoritos
  { id: "fav-1", title: "Primeiro Amor", description: "Favoritou seu primeiro drink", icon: "💕" },
  { id: "fav-5", title: "Colecionador", description: "Favoritou 5 drinks", icon: "💎" },
  { id: "fav-10", title: "Curador de Drinks", description: "Favoritou 10 drinks", icon: "🎪" },
  { id: "fav-25", title: "Sommelier Pessoal", description: "Favoritou 25 drinks", icon: "🍷" },

  // Especiais
  { id: "night-owl", title: "Coruja Noturna", description: "Explorou receitas após meia-noite", icon: "🦉" },
  { id: "weekend-warrior", title: "Guerreiro do Fim de Semana", description: "Viu 20 receitas em um dia", icon: "⚔️" },
  { id: "streak-3", title: "Consistente", description: "Voltou ao app 3 dias seguidos", icon: "📅" },
  { id: "streak-7", title: "Dedicado", description: "Voltou ao app 7 dias seguidos", icon: "🗓️" },
  { id: "first-search", title: "Investigador", description: "Fez sua primeira busca", icon: "🕵️" },
  { id: "speed-learner", title: "Aprendiz Veloz", description: "Ganhou 100 XP em um dia", icon: "⚡" },
];

export function getAchievementById(id: string): Achievement | undefined {
  return achievements.find((a) => a.id === id);
}
