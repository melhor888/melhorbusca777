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
  { id: "explorer-1", title: "Primeiro Prato", description: "Visualizou sua primeira receita", icon: "🌮" },
  { id: "explorer-5", title: "Curioso da Cozinha", description: "Visualizou 5 receitas", icon: "🔍" },
  { id: "explorer-10", title: "Explorador Mexicano", description: "Visualizou 10 receitas", icon: "🧭" },
  { id: "explorer-15", title: "Degustador de Sabores", description: "Visualizou 15 receitas", icon: "👅" },
  { id: "explorer-25", title: "Aventureiro da Cocina", description: "Visualizou 25 receitas", icon: "🗺️" },
  { id: "explorer-35", title: "Viajante Gastronômico", description: "Visualizou 35 receitas", icon: "✈️" },
  { id: "explorer-50", title: "Mestre Explorador", description: "Visualizou 50 receitas", icon: "🏆" },
  { id: "explorer-75", title: "Colecionador de Receitas", description: "Visualizou 75 receitas", icon: "📋" },
  { id: "explorer-100", title: "Enciclopédia Viva", description: "Visualizou 100 receitas", icon: "📚" },
  { id: "explorer-120", title: "Maratonista de Pratos", description: "Visualizou 120 receitas", icon: "🏃" },
  { id: "explorer-140", title: "Guru da Culinária", description: "Visualizou 140 receitas", icon: "🧘" },
  { id: "explorer-150", title: "Devorador de Receitas", description: "Visualizou 150 receitas", icon: "🔥" },
  { id: "explorer-170", title: "Mestre Supremo", description: "Visualizou 170 receitas", icon: "⚡" },
  { id: "explorer-180", title: "Lenda Ambulante", description: "Visualizou 180 receitas", icon: "🌟" },
  { id: "explorer-all", title: "Omnisciente", description: "Visualizou todas as receitas", icon: "👁️" },

  // ===== MARCOS DE XP (30) =====
  { id: "xp-10", title: "¡Bienvenido!", description: "Acumulou 10 XP — os primeiros passos na cozinha", icon: "🌵", requiredXP: 10 },
  { id: "xp-25", title: "Aprendiz de Cozinha", description: "Acumulou 25 XP", icon: "🌱", requiredXP: 25 },
  { id: "xp-50", title: "Cocinero Dedicado", description: "Acumulou 50 XP — seu maestro está orgulhoso", icon: "🌶️", requiredXP: 50 },
  { id: "xp-75", title: "Crescendo na Cocina", description: "Acumulou 75 XP", icon: "🍀", requiredXP: 75 },
  { id: "xp-100", title: "Cem Passos", description: "Acumulou 100 XP — ¡cien!", icon: "💯", requiredXP: 100 },
  { id: "xp-150", title: "Faca Afiada", description: "Acumulou 150 XP — sua habilidade cresce", icon: "🔪", requiredXP: 150 },
  { id: "xp-200", title: "Cozinheiro Determinado", description: "Acumulou 200 XP", icon: "🍳", requiredXP: 200 },
  { id: "xp-250", title: "Talento Natural", description: "Acumulou 250 XP — um talento nato", icon: "✨", requiredXP: 250 },
  { id: "xp-300", title: "Estrela Ascendente", description: "Acumulou 300 XP", icon: "⭐", requiredXP: 300 },
  { id: "xp-350", title: "Taquero Promissor", description: "Acumulou 350 XP", icon: "🌮", requiredXP: 350 },
  { id: "xp-400", title: "Chef em Formação", description: "Acumulou 400 XP", icon: "🏅", requiredXP: 400 },
  { id: "xp-450", title: "Classe Mundial", description: "Acumulou 450 XP", icon: "🌍", requiredXP: 450 },
  { id: "xp-500", title: "Meio Milênio", description: "Acumulou 500 XP — ¡quinientos!", icon: "🎖️", requiredXP: 500 },
  { id: "xp-600", title: "Espírito do Sabor", description: "Acumulou 600 XP", icon: "💎", requiredXP: 600 },
  { id: "xp-700", title: "Mestre do Mole", description: "Acumulou 700 XP", icon: "🫕", requiredXP: 700 },
  { id: "xp-750", title: "Quase Lenda", description: "Acumulou 750 XP", icon: "🔱", requiredXP: 750 },
  { id: "xp-800", title: "Guerreiro da Cozinha", description: "Acumulou 800 XP", icon: "⚔️", requiredXP: 800 },
  { id: "xp-900", title: "Maestro Culinário", description: "Acumulou 900 XP", icon: "🏛️", requiredXP: 900 },
  { id: "xp-1000", title: "O Milhar Dourado", description: "Acumulou 1000 XP", icon: "🥇", requiredXP: 1000 },
  { id: "xp-1100", title: "Guardião das Receitas", description: "Acumulou 1100 XP", icon: "📜", requiredXP: 1100 },
  { id: "xp-1250", title: "Veterano da Cocina", description: "Acumulou 1250 XP", icon: "🎗️", requiredXP: 1250 },
  { id: "xp-1500", title: "Mestre Absoluto", description: "Acumulou 1500 XP", icon: "🏆", requiredXP: 1500 },
  { id: "xp-1750", title: "Imortal da Cozinha", description: "Acumulou 1750 XP", icon: "♾️", requiredXP: 1750 },
  { id: "xp-2000", title: "Deus da Gastronomia", description: "Acumulou 2000 XP — um deus culinário", icon: "🌮", requiredXP: 2000 },
  { id: "xp-2250", title: "Imperador dos Sabores", description: "Acumulou 2250 XP", icon: "👑", requiredXP: 2250 },
  { id: "xp-2500", title: "Transcendência", description: "Acumulou 2500 XP", icon: "🌌", requiredXP: 2500 },
  { id: "xp-2750", title: "Espírito Ancestral", description: "Acumulou 2750 XP", icon: "👻", requiredXP: 2750 },
  { id: "xp-3000", title: "Infinito", description: "Acumulou 3000 XP", icon: "🔮", requiredXP: 3000 },
  { id: "xp-3500", title: "Além do Limite", description: "Acumulou 3500 XP", icon: "🌠", requiredXP: 3500 },
  { id: "xp-4000", title: "Lenda Eterna", description: "Acumulou 4000 XP", icon: "🐉", requiredXP: 4000 },

  // ===== NÍVEIS (7) =====
  { id: "level-2", title: "Aprendiz", description: "Alcançou nível 2 — Aprendiz", icon: "⭐" },
  { id: "level-3", title: "Cozinheiro Jr.", description: "Alcançou nível 3 — Cozinheiro Jr.", icon: "🌟" },
  { id: "level-4", title: "Taquero", description: "Alcançou nível 4 — Taquero", icon: "🌮" },
  { id: "level-5", title: "Chef Mexicano", description: "Alcançou nível 5 — Chef Mexicano", icon: "🏅" },
  { id: "level-6", title: "Mestre da Cocina", description: "Alcançou nível 6 — Mestre da Cocina", icon: "👑" },
  { id: "level-7", title: "Lenda da Cozinha", description: "Alcançou nível máximo!", icon: "🎖️" },

  // ===== ESCOLA MEXICANA & CULTURA (15) =====
  { id: "first-tip", title: "Primeira Lição", description: "Completou sua primeira lição da Escola", icon: "📖" },
  { id: "tips-3", title: "Aluno Aplicado", description: "Completou 3 lições", icon: "📝" },
  { id: "tips-5", title: "Estudante Dedicado", description: "Completou 5 lições", icon: "✏️" },
  { id: "tips-10", title: "Maestro em Treinamento", description: "Completou 10 lições", icon: "🎓" },
  { id: "all-tips", title: "Diploma de Chef", description: "Completou todas as lições", icon: "🧠" },
  { id: "first-article", title: "Leitor Iniciante", description: "Leu seu primeiro artigo de cultura", icon: "📰" },
  { id: "scholar-3", title: "Estudioso do México", description: "Leu 3 artigos de cultura", icon: "📑" },
  { id: "scholar-5", title: "Historiador Jr.", description: "Leu 5 artigos de cultura", icon: "🏛️" },
  { id: "scholar-10", title: "Conhecedor da Cultura", description: "Leu 10 artigos de cultura", icon: "🎓" },
  { id: "articles-all", title: "Mestre Cultural", description: "Leu todos os artigos", icon: "🏛️" },
  { id: "learn-dashi", title: "Fundamento do Sabor", description: "Aprendeu sobre molhos mexicanos", icon: "🫕" },
  { id: "learn-sushi-history", title: "Historiador do Taco", description: "Aprendeu a história do taco", icon: "📖" },
  { id: "learn-etiqueta", title: "¡Buen Provecho!", description: "Aprendeu etiqueta mexicana à mesa", icon: "🍽️" },
  { id: "learn-kaiseki", title: "Conhecedor de Mole", description: "Aprendeu sobre o mole poblano", icon: "🎨" },
  { id: "learn-fermentacao", title: "Mestre do Chile", description: "Aprendeu sobre pimentas mexicanas", icon: "🌶️" },

  // ===== CATEGORIAS DE COMIDA (20) =====
  { id: "cat-tradicionais-3", title: "Iniciante em Tacos", description: "Viu 3 tacos", icon: "🌮" },
  { id: "cat-tradicionais-all", title: "Mestre do Taco", description: "Viu todos os tacos", icon: "🏆" },
  { id: "cat-massas-3", title: "Amante de Tamales", description: "Viu 3 tamales", icon: "🫔" },
  { id: "cat-massas-all", title: "Senhor dos Tamales", description: "Viu todos os tamales", icon: "🏅" },
  { id: "cat-quentes-3", title: "Fogo na Panela", description: "Viu 3 sopas & caldos", icon: "🔥" },
  { id: "cat-quentes-all", title: "Rei do Pozole", description: "Viu todas as sopas & caldos", icon: "♨️" },
  { id: "cat-street-3", title: "Turista em Oaxaca", description: "Viu 3 antojitos", icon: "🏮" },
  { id: "cat-street-all", title: "Rei dos Antojitos", description: "Viu todos os antojitos", icon: "🎆" },
  { id: "cat-entradas-3", title: "Aperitivos Mexicanos", description: "Viu 3 mariscos", icon: "🦐" },
  { id: "cat-entradas-all", title: "Mestre dos Mariscos", description: "Viu todos os mariscos", icon: "🐟" },
  { id: "cat-sopas-3", title: "Alma Quente", description: "Viu 3 caldos mexicanos", icon: "🥣" },
  { id: "cat-sopas-all", title: "Guardião do Caldo", description: "Viu todos os caldos", icon: "🫕" },
  { id: "cat-sobremesas-3", title: "Doce Mexicano", description: "Viu 3 sobremesas", icon: "🍮" },
  { id: "cat-sobremesas-all", title: "Mestre dos Churros", description: "Viu todas as sobremesas", icon: "🍩" },
  { id: "all-categories", title: "Viajante Completo", description: "Viu pratos de todas as categorias", icon: "🌐" },
  { id: "cat-donburi", title: "Rei do Burrito", description: "Viu burrito, quesadilla e enchilada", icon: "🌯" },
  { id: "cat-hotpot", title: "Mestre do Guisado", description: "Viu birria e barbacoa", icon: "🫕" },
  { id: "cat-frito", title: "Rei da Fritura", description: "Viu taquitos, flautas e chimichangas", icon: "🍤" },
  { id: "cat-mochi-lover", title: "Churro Lover", description: "Viu churros, flan e tres leches", icon: "🍩" },
  { id: "cat-matcha-fan", title: "Horchata Addict", description: "Viu horchata, agua fresca e atole", icon: "🥤" },

  // ===== FAVORITOS (8) =====
  { id: "fav-1", title: "Primeiro Favorito", description: "Favoritou seu primeiro prato", icon: "💕" },
  { id: "fav-3", title: "Apreciador", description: "Favoritou 3 pratos", icon: "💖" },
  { id: "fav-5", title: "Colecionador", description: "Favoritou 5 pratos", icon: "💎" },
  { id: "fav-10", title: "Curador de Pratos", description: "Favoritou 10 pratos", icon: "🎪" },
  { id: "fav-15", title: "Conhecedor", description: "Favoritou 15 pratos", icon: "🌮" },
  { id: "fav-20", title: "Gourmet Pessoal", description: "Favoritou 20 pratos", icon: "🎭" },
  { id: "fav-25", title: "Sommelier da Comida", description: "Favoritou 25 pratos", icon: "🏅" },
  { id: "fav-50", title: "Super Gourmet", description: "Favoritou 50 pratos", icon: "🏆" },

  // ===== LISTA DE COMPRAS (5) =====
  { id: "shop-1", title: "Planejador", description: "Adicionou primeiro prato à lista", icon: "🛒" },
  { id: "shop-3", title: "Organizador", description: "3 pratos na lista de compras", icon: "📋" },
  { id: "shop-5", title: "Jantar Planejado", description: "5 pratos na lista de compras", icon: "🎉" },
  { id: "shop-10", title: "Banquete Planejado", description: "10 pratos na lista de compras", icon: "🎊" },
  { id: "shop-20", title: "Anfitrião Supreme", description: "20 pratos na lista de compras", icon: "🏡" },

  // ===== DIFICULDADE (6) =====
  { id: "diff-easy-10", title: "Começando Fácil", description: "Viu 10 pratos fáceis", icon: "🟢" },
  { id: "diff-easy-25", title: "Rei do Fácil", description: "Viu 25 pratos fáceis", icon: "✅" },
  { id: "diff-medium-5", title: "Subindo de Nível", description: "Viu 5 pratos médios", icon: "🟡" },
  { id: "diff-medium-15", title: "Desafiador", description: "Viu 15 pratos médios", icon: "🟠" },
  { id: "diff-hard-3", title: "Corajoso na Cozinha", description: "Viu 3 pratos avançados", icon: "🔴" },
  { id: "diff-hard-all", title: "Sem Medo do Fogo", description: "Viu todos os pratos avançados", icon: "🐉" },

  // ===== HISTÓRIA & CULTURA MEXICANA (15) =====
  { id: "history-washoku", title: "UNESCO Mexicana", description: "Aprendeu que a culinária mexicana é patrimônio da UNESCO", icon: "🏛️" },
  { id: "history-edo", title: "Era Asteca", description: "Conheceu a origem do taco na civilização asteca", icon: "🏛️" },
  { id: "history-meiji", title: "Revolução Mexicana", description: "Aprendeu sobre a influência na gastronomia", icon: "🇲🇽" },
  { id: "history-ramen", title: "A Saga do Mole", description: "Conheceu a história do mole poblano", icon: "🫕" },
  { id: "history-izakaya", title: "Cantinas Mexicanas", description: "Aprendeu sobre a cultura das cantinas", icon: "🍺" },
  { id: "history-matsuri", title: "Espírito de Fiesta", description: "Conheceu os festivais gastronômicos mexicanos", icon: "🎆" },
  { id: "history-tempura", title: "Herança Espanhola", description: "Descobriu a influência espanhola na culinária mexicana", icon: "🇪🇸" },
  { id: "history-umami", title: "Quinto Sabor", description: "Aprendeu sobre o chile e suas variedades", icon: "🌶️" },
  { id: "history-tea", title: "Caminho do Chocolate", description: "Conheceu a história do chocolate mexicano", icon: "🍫" },
  { id: "history-bento", title: "Cultura da Tortilla", description: "Aprendeu sobre a arte da tortilla", icon: "🫓" },
  { id: "history-konbini", title: "Mercado Mexicano", description: "Descobriu os mercados tradicionais", icon: "🏪" },
  { id: "history-wagashi", title: "Doces Tradicionais", description: "Conheceu os dulces mexicanos", icon: "🍮" },
  { id: "history-sake", title: "Caminho da Tequila", description: "Aprendeu sobre a história da tequila", icon: "🥃" },
  { id: "history-tofu", title: "Mil Anos de Milho", description: "Descobriu a história milenar do milho", icon: "🌽" },
  { id: "history-nori", title: "Segredos do Chile", description: "Aprendeu sobre as pimentas mexicanas", icon: "🌶️" },

  // ===== ESPECIAIS / COMPORTAMENTO (14) =====
  { id: "night-owl", title: "Cocina Nocturna", description: "Explorou receitas após meia-noite", icon: "🦉" },
  { id: "early-bird", title: "Desayuno", description: "Explorou receitas antes das 7h (café da manhã!)", icon: "🌅" },
  { id: "weekend-warrior", title: "Guerreiro do Fim de Semana", description: "Viu 20 receitas em um dia", icon: "⚔️" },
  { id: "binge-viewer", title: "Maratonista", description: "Viu 30 receitas em um dia", icon: "🏃‍♂️" },
  { id: "streak-3", title: "¡Ándale!", description: "Voltou ao app 3 dias seguidos", icon: "📅" },
  { id: "streak-7", title: "¡Una Semana!", description: "Voltou ao app 7 dias seguidos — uma semana!", icon: "🗓️" },
  { id: "streak-14", title: "¡Dos Semanas!", description: "Voltou ao app 14 dias seguidos", icon: "🔥" },
  { id: "streak-30", title: "¡Un Mes!", description: "Voltou ao app 30 dias seguidos — um mês!", icon: "💪" },
  { id: "first-search", title: "Investigador", description: "Fez sua primeira busca de prato", icon: "🕵️" },
  { id: "speed-learner", title: "Aprendiz Veloz", description: "Ganhou 100 XP em um dia", icon: "⚡" },
  { id: "speed-master", title: "Máquina de XP", description: "Ganhou 200 XP em um dia", icon: "🤖" },
  { id: "completionist", title: "Completionista", description: "Desbloqueou 50 conquistas", icon: "🏅" },
  { id: "mega-completionist", title: "Mega Completionista", description: "Desbloqueou 75 conquistas", icon: "🥇" },
  { id: "ultimate", title: "O Escolhido", description: "Desbloqueou 100 conquistas", icon: "👁️‍🗨️" },
];

export function getAchievementById(id: string): Achievement | undefined {
  return achievements.find((a) => a.id === id);
}
