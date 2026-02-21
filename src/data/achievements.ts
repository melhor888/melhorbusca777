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
  { id: "explorer-1", title: "Primeiro Prato", description: "Visualizou sua primeira receita", icon: "🍣" },
  { id: "explorer-5", title: "Curioso da Cozinha", description: "Visualizou 5 receitas", icon: "🔍" },
  { id: "explorer-10", title: "Explorador Japonês", description: "Visualizou 10 receitas", icon: "🧭" },
  { id: "explorer-15", title: "Degustador de Sabores", description: "Visualizou 15 receitas", icon: "👅" },
  { id: "explorer-25", title: "Aventureiro do Washoku", description: "Visualizou 25 receitas", icon: "🗺️" },
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
  { id: "xp-10", title: "Hajimemashite", description: "Acumulou 10 XP — os primeiros passos na cozinha", icon: "🌸", requiredXP: 10 },
  { id: "xp-25", title: "Aprendiz de Cozinha", description: "Acumulou 25 XP", icon: "🌱", requiredXP: 25 },
  { id: "xp-50", title: "Kohai Dedicado", description: "Acumulou 50 XP — seu sensei está orgulhoso", icon: "🎋", requiredXP: 50 },
  { id: "xp-75", title: "Crescendo no Dojo", description: "Acumulou 75 XP", icon: "🍀", requiredXP: 75 },
  { id: "xp-100", title: "Cem Passos", description: "Acumulou 100 XP — ichi hyaku!", icon: "💯", requiredXP: 100 },
  { id: "xp-150", title: "Faca Afiada", description: "Acumulou 150 XP — sua habilidade cresce", icon: "🔪", requiredXP: 150 },
  { id: "xp-200", title: "Cozinheiro Determinado", description: "Acumulou 200 XP", icon: "🍳", requiredXP: 200 },
  { id: "xp-250", title: "Talento Natural", description: "Acumulou 250 XP — um talento nato", icon: "✨", requiredXP: 250 },
  { id: "xp-300", title: "Estrela Ascendente", description: "Acumulou 300 XP", icon: "⭐", requiredXP: 300 },
  { id: "xp-350", title: "Sushiman Promissor", description: "Acumulou 350 XP", icon: "🍣", requiredXP: 350 },
  { id: "xp-400", title: "Itamae em Formação", description: "Acumulou 400 XP", icon: "🏅", requiredXP: 400 },
  { id: "xp-450", title: "Classe Mundial", description: "Acumulou 450 XP", icon: "🌍", requiredXP: 450 },
  { id: "xp-500", title: "Meio Milênio", description: "Acumulou 500 XP — go hyaku!", icon: "🎖️", requiredXP: 500 },
  { id: "xp-600", title: "Espírito do Umami", description: "Acumulou 600 XP", icon: "💎", requiredXP: 600 },
  { id: "xp-700", title: "Mestre do Dashi", description: "Acumulou 700 XP", icon: "🍲", requiredXP: 700 },
  { id: "xp-750", title: "Quase Lenda", description: "Acumulou 750 XP", icon: "🔱", requiredXP: 750 },
  { id: "xp-800", title: "Samurai da Cozinha", description: "Acumulou 800 XP", icon: "⚔️", requiredXP: 800 },
  { id: "xp-900", title: "Shogun Culinário", description: "Acumulou 900 XP", icon: "🏯", requiredXP: 900 },
  { id: "xp-1000", title: "Sen — O Milhar Dourado", description: "Acumulou 1000 XP", icon: "🥇", requiredXP: 1000 },
  { id: "xp-1100", title: "Guardião do Koji", description: "Acumulou 1100 XP", icon: "🧫", requiredXP: 1100 },
  { id: "xp-1250", title: "Veterano do Washoku", description: "Acumulou 1250 XP", icon: "🎗️", requiredXP: 1250 },
  { id: "xp-1500", title: "Mestre Absoluto", description: "Acumulou 1500 XP", icon: "🏆", requiredXP: 1500 },
  { id: "xp-1750", title: "Imortal da Cozinha", description: "Acumulou 1750 XP", icon: "♾️", requiredXP: 1750 },
  { id: "xp-2000", title: "Kami da Gastronomia", description: "Acumulou 2000 XP — um deus culinário", icon: "⛩️", requiredXP: 2000 },
  { id: "xp-2250", title: "Imperador dos Sabores", description: "Acumulou 2250 XP", icon: "👘", requiredXP: 2250 },
  { id: "xp-2500", title: "Transcendência", description: "Acumulou 2500 XP", icon: "🌌", requiredXP: 2500 },
  { id: "xp-2750", title: "Espírito Ancestral", description: "Acumulou 2750 XP", icon: "👻", requiredXP: 2750 },
  { id: "xp-3000", title: "Infinito — Mugen", description: "Acumulou 3000 XP", icon: "🔮", requiredXP: 3000 },
  { id: "xp-3500", title: "Além do Limite", description: "Acumulou 3500 XP", icon: "🌠", requiredXP: 3500 },
  { id: "xp-4000", title: "Lenda Eterna", description: "Acumulou 4000 XP", icon: "🐉", requiredXP: 4000 },

  // ===== NÍVEIS (7) =====
  { id: "level-2", title: "Aprendiz", description: "Alcançou nível 2 — Aprendiz", icon: "⭐" },
  { id: "level-3", title: "Cozinheiro Jr.", description: "Alcançou nível 3 — Cozinheiro Jr.", icon: "🌟" },
  { id: "level-4", title: "Sushiman", description: "Alcançou nível 4 — Sushiman", icon: "🍣" },
  { id: "level-5", title: "Chef Japonês", description: "Alcançou nível 5 — Chef Japonês", icon: "🏅" },
  { id: "level-6", title: "Mestre Itamae", description: "Alcançou nível 6 — Mestre Itamae", icon: "👑" },
  { id: "level-7", title: "Lenda da Cozinha", description: "Alcançou nível máximo!", icon: "🎖️" },

  // ===== ESCOLA JAPONESA & CULTURA (15) =====
  { id: "first-tip", title: "Primeira Lição", description: "Completou sua primeira lição da Escola", icon: "📖" },
  { id: "tips-3", title: "Aluno Aplicado", description: "Completou 3 lições", icon: "📝" },
  { id: "tips-5", title: "Estudante Dedicado", description: "Completou 5 lições", icon: "✏️" },
  { id: "tips-10", title: "Sensei em Treinamento", description: "Completou 10 lições", icon: "🎓" },
  { id: "all-tips", title: "Diploma de Itamae", description: "Completou todas as lições", icon: "🧠" },
  { id: "first-article", title: "Leitor Iniciante", description: "Leu seu primeiro artigo de cultura", icon: "📰" },
  { id: "scholar-3", title: "Estudioso do Japão", description: "Leu 3 artigos de cultura", icon: "📑" },
  { id: "scholar-5", title: "Historiador Jr.", description: "Leu 5 artigos de cultura", icon: "🏛️" },
  { id: "scholar-10", title: "Conhecedor da Cultura", description: "Leu 10 artigos de cultura", icon: "🎓" },
  { id: "articles-all", title: "Mestre Cultural", description: "Leu todos os artigos", icon: "🏯" },
  { id: "learn-dashi", title: "Fundamento do Umami", description: "Aprendeu sobre dashi", icon: "🍲" },
  { id: "learn-sushi-history", title: "Historiador do Sushi", description: "Aprendeu a história do sushi", icon: "📖" },
  { id: "learn-etiqueta", title: "Itadakimasu!", description: "Aprendeu etiqueta japonesa à mesa", icon: "🥢" },
  { id: "learn-kaiseki", title: "Conhecedor de Kaiseki", description: "Aprendeu sobre culinária kaiseki", icon: "🎨" },
  { id: "learn-fermentacao", title: "Mestre do Koji", description: "Aprendeu sobre fermentação japonesa", icon: "🧫" },

  // ===== CATEGORIAS DE COMIDA (20) =====
  { id: "cat-tradicionais-3", title: "Iniciante em Sushi", description: "Viu 3 pratos tradicionais", icon: "🍣" },
  { id: "cat-tradicionais-all", title: "Mestre do Sushi", description: "Viu todos os pratos tradicionais", icon: "🏆" },
  { id: "cat-massas-3", title: "Amante de Ramen", description: "Viu 3 massas japonesas", icon: "🍜" },
  { id: "cat-massas-all", title: "Sensei do Ramen", description: "Viu todas as massas japonesas", icon: "🍥" },
  { id: "cat-quentes-3", title: "Fogo na Panela", description: "Viu 3 pratos quentes", icon: "🔥" },
  { id: "cat-quentes-all", title: "Rei do Teppan", description: "Viu todos os pratos quentes", icon: "♨️" },
  { id: "cat-street-3", title: "Turista em Osaka", description: "Viu 3 street foods", icon: "🏮" },
  { id: "cat-street-all", title: "Rei dos Matsuri", description: "Viu todos os street foods", icon: "🎆" },
  { id: "cat-entradas-3", title: "Aperitivos Japoneses", description: "Viu 3 entradas", icon: "🥟" },
  { id: "cat-entradas-all", title: "Mestre dos Otsumami", description: "Viu todas as entradas", icon: "🍶" },
  { id: "cat-sopas-3", title: "Alma Quente", description: "Viu 3 sopas japonesas", icon: "🥣" },
  { id: "cat-sopas-all", title: "Guardião do Missô", description: "Viu todas as sopas", icon: "🫕" },
  { id: "cat-sobremesas-3", title: "Doce Japonês", description: "Viu 3 sobremesas", icon: "🍡" },
  { id: "cat-sobremesas-all", title: "Wagashi Master", description: "Viu todas as sobremesas", icon: "🍵" },
  { id: "all-categories", title: "Viajante Completo", description: "Viu pratos de todas as categorias", icon: "🌐" },
  { id: "cat-donburi", title: "Rei do Donburi", description: "Viu gyudon, katsudon e oyakodon", icon: "🍚" },
  { id: "cat-hotpot", title: "Nabe Master", description: "Viu sukiyaki e shabu-shabu", icon: "🫕" },
  { id: "cat-frito", title: "Rei da Fritura", description: "Viu tempurá, tonkatsu e karaage", icon: "🍤" },
  { id: "cat-mochi-lover", title: "Mochi Lover", description: "Viu mochi, dango e warabi mochi", icon: "🍡" },
  { id: "cat-matcha-fan", title: "Matcha Addict", description: "Viu cheesecake e parfait de matcha", icon: "🍵" },

  // ===== FAVORITOS (8) =====
  { id: "fav-1", title: "Primeiro Favorito", description: "Favoritou seu primeiro prato", icon: "💕" },
  { id: "fav-3", title: "Apreciador", description: "Favoritou 3 pratos", icon: "💖" },
  { id: "fav-5", title: "Colecionador", description: "Favoritou 5 pratos", icon: "💎" },
  { id: "fav-10", title: "Curador de Pratos", description: "Favoritou 10 pratos", icon: "🎪" },
  { id: "fav-15", title: "Conhecedor", description: "Favoritou 15 pratos", icon: "🍱" },
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

  // ===== HISTÓRIA & CULTURA JAPONESA (15) =====
  { id: "history-washoku", title: "Washoku UNESCO", description: "Aprendeu que washoku é patrimônio da UNESCO", icon: "🏛️" },
  { id: "history-edo", title: "Era Edo", description: "Conheceu a origem do sushi em Edo (Tóquio)", icon: "🏯" },
  { id: "history-meiji", title: "Era Meiji", description: "Aprendeu sobre a abertura do Japão ao Ocidente", icon: "🚂" },
  { id: "history-ramen", title: "A Saga do Ramen", description: "Conheceu a história do ramen no Japão", icon: "🍜" },
  { id: "history-izakaya", title: "Noites de Izakaya", description: "Aprendeu sobre a cultura izakaya", icon: "🏮" },
  { id: "history-matsuri", title: "Espírito de Matsuri", description: "Conheceu os festivais gastronômicos", icon: "🎆" },
  { id: "history-tempura", title: "Herança Portuguesa", description: "Descobriu a origem portuguesa do tempurá", icon: "🍤" },
  { id: "history-umami", title: "Quinto Sabor", description: "Aprendeu sobre o umami e Kikunae Ikeda", icon: "🧪" },
  { id: "history-tea", title: "Caminho do Chá", description: "Conheceu a cerimônia do chá (chanoyu)", icon: "🍵" },
  { id: "history-bento", title: "Cultura do Bentô", description: "Aprendeu sobre a arte do bentô", icon: "🍱" },
  { id: "history-konbini", title: "Konbini Love", description: "Descobriu a comida de conveniência japonesa", icon: "🏪" },
  { id: "history-wagashi", title: "Doces Tradicionais", description: "Conheceu os wagashi (doces japoneses)", icon: "🍡" },
  { id: "history-sake", title: "Caminho do Sakê", description: "Aprendeu sobre a história do sakê", icon: "🍶" },
  { id: "history-tofu", title: "Mil Anos de Tofu", description: "Descobriu a história milenar do tofu", icon: "🧊" },
  { id: "history-nori", title: "Segredos do Mar", description: "Aprendeu sobre as algas japonesas", icon: "🌿" },

  // ===== ESPECIAIS / COMPORTAMENTO (14) =====
  { id: "night-owl", title: "Yoru no Ryōri", description: "Explorou receitas após meia-noite", icon: "🦉" },
  { id: "early-bird", title: "Asa Gohan", description: "Explorou receitas antes das 7h (café da manhã!)", icon: "🌅" },
  { id: "weekend-warrior", title: "Guerreiro do Fim de Semana", description: "Viu 20 receitas em um dia", icon: "⚔️" },
  { id: "binge-viewer", title: "Maratonista", description: "Viu 30 receitas em um dia", icon: "🏃‍♂️" },
  { id: "streak-3", title: "Ganbarimasu!", description: "Voltou ao app 3 dias seguidos", icon: "📅" },
  { id: "streak-7", title: "Isshuukan!", description: "Voltou ao app 7 dias seguidos — uma semana!", icon: "🗓️" },
  { id: "streak-14", title: "Ni-shuukan!", description: "Voltou ao app 14 dias seguidos", icon: "🔥" },
  { id: "streak-30", title: "Ikkagetsu!", description: "Voltou ao app 30 dias seguidos — um mês!", icon: "💪" },
  { id: "first-search", title: "Investigador", description: "Fez sua primeira busca de prato", icon: "🕵️" },
  { id: "speed-learner", title: "Aprendiz Veloz", description: "Ganhou 100 XP em um dia", icon: "⚡" },
  { id: "speed-master", title: "Máquina de XP", description: "Ganhou 200 XP em um dia", icon: "🤖" },
  { id: "completionist", title: "Completionista", description: "Desbloqueou 50 conquistas", icon: "🏅" },
  { id: "mega-completionist", title: "Mega Completionista", description: "Desbloqueou 75 conquistas", icon: "🥇" },
  { id: "ultimate", title: "O Escolhido — Erabareta Mono", description: "Desbloqueou 100 conquistas", icon: "👁️‍🗨️" },
];

export function getAchievementById(id: string): Achievement | undefined {
  return achievements.find((a) => a.id === id);
}
