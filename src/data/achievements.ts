export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredXP?: number;
  condition?: string;
}

export const achievements: Achievement[] = [
  { id: "explorer-5", title: "Curioso", description: "Visualizou 5 receitas", icon: "🔍" },
  { id: "explorer-10", title: "Explorador", description: "Visualizou 10 receitas", icon: "🧭" },
  { id: "explorer-25", title: "Aventureiro", description: "Visualizou 25 receitas", icon: "🗺️" },
  { id: "explorer-50", title: "Mestre Explorador", description: "Visualizou 50 receitas", icon: "🏆" },
  { id: "level-2", title: "Aprendiz", description: "Alcançou nível 2", icon: "⭐" },
  { id: "level-3", title: "Bartender Jr.", description: "Alcançou nível 3", icon: "🌟" },
  { id: "level-4", title: "Mixologista", description: "Alcançou nível 4", icon: "💫" },
  { id: "level-5", title: "Bartender Pro", description: "Alcançou nível 5", icon: "🏅" },
  { id: "level-6", title: "Mestre dos Drinks", description: "Alcançou nível 6", icon: "👑" },
  { id: "level-7", title: "Lenda do Bar", description: "Alcançou nível máximo", icon: "🎖️" },
  { id: "first-tip", title: "Primeira Lição", description: "Desbloqueou sua primeira dica", icon: "📖" },
  { id: "all-tips", title: "Enciclopédia Viva", description: "Desbloqueou todas as dicas", icon: "📚" },
];

export function getAchievementById(id: string): Achievement | undefined {
  return achievements.find((a) => a.id === id);
}
