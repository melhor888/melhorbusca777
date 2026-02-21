export interface Dish {
  id: string;
  name: string;
  category: string;
  image: string;
  ingredients: string[];
  steps: string[];
  difficulty: "Fácil" | "Médio" | "Avançado";
  time: string;
  description?: string;
}

export const categories = [
  "Sushi & Sashimi",
  "Massas Japonesas",
  "Pratos Quentes",
  "Street Food",
  "Entradas",
  "Sopas",
  "Sobremesas",
];

export const dishes: Dish[] = [
  // ============ SUSHI & SASHIMI ============
  { id: "nigiri-salmao", name: "Nigiri de Salmão", category: "Sushi & Sashimi", image: "nigiri-salmao",
    ingredients: ["200g de salmão fresco (sashimi grade)", "2 xícaras de arroz japonês", "3 colheres de vinagre de arroz", "1 colher de açúcar", "1/2 colher de sal", "Wasabi a gosto"],
    steps: ["Cozinhe o arroz japonês e tempere com vinagre, açúcar e sal.", "Deixe o arroz esfriar até a temperatura ambiente.", "Corte o salmão em fatias de 5mm de espessura.", "Molde porções de arroz (20g cada) com as mãos úmidas.", "Passe um pouco de wasabi sobre o arroz.", "Coloque a fatia de salmão sobre o arroz e pressione suavemente."],
    difficulty: "Médio", time: "45 min",
    description: "O nigiri é a forma mais pura de sushi — uma fatia de peixe fresco sobre arroz temperado. Originário de Tóquio no séc. XIX." },

  { id: "sashimi-misto", name: "Sashimi Misto", category: "Sushi & Sashimi", image: "sashimi-misto",
    ingredients: ["150g de salmão fresco", "150g de atum fresco", "100g de peixe branco (robalo ou pargo)", "Shoyu para servir", "Wasabi fresco", "Gengibre em conserva (gari)"],
    steps: ["Certifique-se de que os peixes são sashimi grade.", "Corte o salmão em fatias de 5-7mm na diagonal.", "Corte o atum em fatias de 7mm.", "Corte o peixe branco em fatias finas (3mm).", "Organize as fatias em um prato com gelo decorativo.", "Sirva com shoyu, wasabi e gari."],
    difficulty: "Médio", time: "20 min",
    description: "Sashimi é a arte de fatiar peixes crus com precisão. Cada corte deve respeitar a textura do peixe." },

  { id: "temaki-salmao", name: "Temaki de Salmão", category: "Sushi & Sashimi", image: "temaki-salmao",
    ingredients: ["Folhas de nori", "Arroz japonês temperado", "200g de salmão em cubos", "Cream cheese", "Cebolinha picada", "Gergelim"],
    steps: ["Prepare o arroz japonês e tempere.", "Corte o salmão em cubos pequenos.", "Coloque meia folha de nori na mão.", "Espalhe arroz em um dos lados.", "Adicione salmão, cream cheese e cebolinha.", "Enrole em formato de cone e sirva imediatamente."],
    difficulty: "Fácil", time: "30 min",
    description: "Temaki é o sushi em formato de cone, perfeito para comer com as mãos. Popular no Brasil e Japão." },

  { id: "uramaki-california", name: "Uramaki Califórnia", category: "Sushi & Sashimi", image: "uramaki-california",
    ingredients: ["Arroz japonês temperado", "Folhas de nori", "Kani kama", "Pepino", "Abacate", "Gergelim torrado"],
    steps: ["Cubra a esteira de bambu com filme plástico.", "Coloque o nori e espalhe arroz por cima.", "Vire de cabeça para baixo (arroz para fora).", "Coloque kani, pepino e abacate no centro.", "Enrole com a esteira.", "Passe gergelim e corte em 8 pedaços."],
    difficulty: "Médio", time: "40 min",
    description: "Criado nos EUA nos anos 60, o California roll popularizou o sushi no Ocidente." },

  { id: "hosomaki-pepino", name: "Hosomaki de Pepino (Kappamaki)", category: "Sushi & Sashimi", image: "hosomaki-pepino",
    ingredients: ["Arroz japonês temperado", "Folhas de nori", "1 pepino japonês", "Wasabi", "Gergelim"],
    steps: ["Corte o pepino em tiras finas compridas.", "Coloque meia folha de nori sobre a esteira.", "Espalhe uma camada fina de arroz.", "Coloque tiras de pepino no centro.", "Enrole firmemente.", "Corte em 6 pedaços com faca molhada."],
    difficulty: "Fácil", time: "20 min",
    description: "Kappamaki é nomeado em homenagem ao Kappa, criatura aquática do folclore japonês que ama pepino." },

  { id: "futomaki", name: "Futomaki", category: "Sushi & Sashimi", image: "futomaki",
    ingredients: ["Arroz japonês temperado", "Folha inteira de nori", "Omelete japonesa (tamagoyaki)", "Pepino", "Kani kama", "Sakura denbu (pó de peixe rosa)"],
    steps: ["Coloque a folha inteira de nori na esteira.", "Espalhe arroz deixando 2cm na borda superior.", "Disponha os recheios em linha no centro.", "Enrole firmemente com a esteira.", "Deixe descansar 2 minutos.", "Corte em 8 fatias grossas."],
    difficulty: "Médio", time: "45 min",
    description: "Futomaki significa 'rolo gordo' — é o sushi mais farto, com múltiplos recheios." },

  // ============ MASSAS JAPONESAS ============
  { id: "ramen-tonkotsu", name: "Ramen Tonkotsu", category: "Massas Japonesas", image: "ramen-tonkotsu",
    ingredients: ["Macarrão ramen fresco", "1kg de ossos de porco", "4 dentes de alho", "Gengibre fresco", "Shoyu", "Ovos cozidos (ajitama)", "Chashu de porco", "Cebolinha", "Nori"],
    steps: ["Ferva os ossos de porco por 12 horas em fogo baixo.", "Coe o caldo e tempere com shoyu e sal.", "Cozinhe o macarrão ramen por 2 minutos.", "Monte a tigela: caldo quente + macarrão.", "Adicione chashu, ovo cozido marinado e cebolinha.", "Finalize com nori e gergelim."],
    difficulty: "Avançado", time: "12 horas",
    description: "Ramen de Hakata (Fukuoka), com caldo cremoso de ossos de porco fervidos por horas. Um dos pratos mais icônicos do Japão." },

  { id: "udon-kitsune", name: "Udon Kitsune", category: "Massas Japonesas", image: "udon-kitsune",
    ingredients: ["Macarrão udon grosso", "Dashi (caldo japonês)", "Shoyu", "Mirin", "Tofu frito (aburaage)", "Cebolinha", "Kamaboko (fishcake)"],
    steps: ["Prepare o dashi com kombu e bonito flakes.", "Tempere com shoyu e mirin.", "Cozinhe o udon em água fervente por 10 min.", "Escorra e coloque na tigela.", "Adicione o caldo quente.", "Cubra com tofu frito, cebolinha e kamaboko."],
    difficulty: "Fácil", time: "25 min",
    description: "Kitsune udon recebe esse nome do tofu frito, alimento favorito das raposas (kitsune) do folclore japonês." },

  { id: "yakisoba", name: "Yakisoba", category: "Massas Japonesas", image: "yakisoba",
    ingredients: ["Macarrão yakisoba", "200g de carne suína fatiada", "Repolho picado", "Cenoura em tiras", "Molho yakisoba", "Aonori (alga em pó)", "Katsuobushi (bonito flakes)", "Gengibre em conserva"],
    steps: ["Cozinhe o macarrão e reserve.", "Frite a carne em fogo alto.", "Adicione os vegetais e salteie.", "Junte o macarrão e o molho.", "Mexa bem em fogo alto.", "Sirva com aonori, katsuobushi e gengibre."],
    difficulty: "Fácil", time: "20 min",
    description: "Yakisoba é um clássico da culinária de rua japonesa, presente em todos os festivais (matsuri)." },

  { id: "soba-fria", name: "Soba Fria (Zaru Soba)", category: "Massas Japonesas", image: "soba-fria",
    ingredients: ["Macarrão soba (trigo sarraceno)", "Molho tsuyu", "Cebolinha picada", "Wasabi", "Nori picado", "Gengibre ralado"],
    steps: ["Cozinhe o soba em água fervente por 5-6 min.", "Escorra e lave em água gelada.", "Prepare o molho tsuyu frio.", "Disponha o soba sobre uma esteira de bambu.", "Sirva o molho em um copo pequeno.", "Mergulhe o soba no molho antes de comer."],
    difficulty: "Fácil", time: "15 min",
    description: "Prato refrescante consumido no verão japonês. Soba de trigo sarraceno é rico em nutrientes." },

  // ============ PRATOS QUENTES ============
  { id: "tempura-mista", name: "Tempurá Mista", category: "Pratos Quentes", image: "tempura-mista",
    ingredients: ["Camarões grandes", "Batata-doce fatiada", "Berinjela", "Shiso (folha de perila)", "Farinha de trigo", "Água gelada com gás", "1 ovo", "Óleo para fritura"],
    steps: ["Prepare a massa: misture farinha, ovo e água gelada com gás.", "NÃO mexa demais — grumos são bons.", "Aqueça o óleo a 180°C.", "Passe os ingredientes na massa levemente.", "Frite por 2-3 minutos até dourar.", "Sirva com tentsuyu (molho) e daikon ralado."],
    difficulty: "Médio", time: "30 min",
    description: "Tempurá foi introduzido por missionários portugueses no séc. XVI e transformado pelos japoneses em arte." },

  { id: "tonkatsu", name: "Tonkatsu", category: "Pratos Quentes", image: "tonkatsu",
    ingredients: ["Lombo de porco (2cm espessura)", "Farinha de trigo", "Ovos batidos", "Panko (farinha de rosca japonesa)", "Repolho fatiado fino", "Molho tonkatsu", "Arroz japonês"],
    steps: ["Amasse o lombo suavemente com um martelo.", "Tempere com sal e pimenta.", "Passe na farinha, depois no ovo, depois no panko.", "Frite em óleo a 170°C por 5-6 minutos.", "Escorra em papel toalha.", "Corte em tiras e sirva com repolho e molho."],
    difficulty: "Médio", time: "25 min",
    description: "Tonkatsu é a versão japonesa da costeleta empanada, criada na era Meiji como adaptação da culinária ocidental." },

  { id: "gyudon", name: "Gyudon", category: "Pratos Quentes", image: "gyudon",
    ingredients: ["300g de carne bovina fatiada fina", "1 cebola grande", "Dashi", "Shoyu", "Mirin", "Açúcar", "Arroz japonês", "Ovo cru (opcional)", "Gengibre em conserva"],
    steps: ["Fatie a cebola em meias-luas.", "Cozinhe a cebola no caldo de dashi com shoyu, mirin e açúcar.", "Adicione a carne fatiada fina.", "Cozinhe por 3-5 minutos.", "Sirva sobre arroz quente em uma tigela.", "Cubra com ovo cru e gengibre."],
    difficulty: "Fácil", time: "20 min",
    description: "Gyudon é o fast-food japonês por excelência. Yoshinoya e Sukiya servem milhões de tigelas por dia." },

  { id: "karaage", name: "Frango Karaage", category: "Pratos Quentes", image: "karaage",
    ingredients: ["500g de sobrecoxa de frango", "Shoyu", "Sakê", "Gengibre ralado", "Alho ralado", "Amido de milho", "Óleo para fritura", "Limão"],
    steps: ["Corte o frango em pedaços de 3cm.", "Marine com shoyu, sakê, gengibre e alho por 30 min.", "Escorra e passe no amido de milho.", "Frite a 170°C por 5 min, retire.", "Frite novamente a 180°C por 2 min (dupla fritura).", "Sirva com limão espremido."],
    difficulty: "Fácil", time: "45 min",
    description: "Karaage é o frango frito mais popular do Japão. O segredo está na marinada com gengibre e a dupla fritura." },

  { id: "sukiyaki", name: "Sukiyaki", category: "Pratos Quentes", image: "sukiyaki",
    ingredients: ["300g de carne wagyu fatiada", "Tofu firme", "Macarrão shirataki", "Negi (cebolinha japonesa)", "Cogumelos shiitake", "Acelga", "Warishita (shoyu, mirin, açúcar, sakê)", "Ovo cru para mergulhar"],
    steps: ["Prepare o warishita misturando shoyu, mirin, açúcar e sakê.", "Aqueça uma panela de ferro.", "Sele a carne rapidamente.", "Adicione o warishita e os vegetais.", "Cozinhe em fogo médio por 5-10 min.", "Cada pessoa mergulha a carne e vegetais em ovo cru batido."],
    difficulty: "Médio", time: "30 min",
    description: "Sukiyaki é um hot pot japonês consumido no inverno, perfeito para reunir família e amigos." },

  { id: "yakitori", name: "Yakitori", category: "Pratos Quentes", image: "yakitori",
    ingredients: ["500g de sobrecoxa de frango", "Negi (cebolinha japonesa)", "Molho tare (shoyu, mirin, açúcar, sakê)", "Espetos de bambu", "Shichimi togarashi"],
    steps: ["Corte o frango em cubos de 2cm.", "Corte o negi em pedaços de 3cm.", "Espete alternando frango e negi.", "Grelhe em fogo alto virando constantemente.", "Pincele com molho tare nos últimos minutos.", "Sirva com shichimi togarashi."],
    difficulty: "Fácil", time: "25 min",
    description: "Yakitori são espetinhos grelhados, a alma dos izakayas (bares) japoneses." },

  // ============ STREET FOOD ============
  { id: "takoyaki", name: "Takoyaki", category: "Street Food", image: "takoyaki",
    ingredients: ["Massa de takoyaki (farinha, ovo, dashi)", "Polvo cozido em cubos", "Tenkasu (pedaços crocantes)", "Cebolinha", "Gengibre em conserva", "Molho takoyaki", "Maionese japonesa", "Katsuobushi", "Aonori"],
    steps: ["Aqueça a forma de takoyaki e unte com óleo.", "Despeje a massa até quase transbordar.", "Coloque polvo, tenkasu e cebolinha.", "Quando as bordas firmarem, vire com palito.", "Continue virando até ficarem redondos e dourados.", "Sirva com molho, maionese, katsuobushi e aonori."],
    difficulty: "Médio", time: "30 min",
    description: "Bolinhas de polvo de Osaka — o street food mais famoso do Japão. Criado em 1935." },

  { id: "okonomiyaki", name: "Okonomiyaki", category: "Street Food", image: "okonomiyaki",
    ingredients: ["Farinha de trigo", "Dashi ou água", "Ovo", "Repolho picado fino", "Carne de porco fatiada", "Tenkasu", "Molho okonomiyaki", "Maionese japonesa", "Katsuobushi", "Aonori"],
    steps: ["Misture farinha, dashi e ovos.", "Adicione repolho picado e tenkasu.", "Aqueça uma chapa ou frigideira.", "Despeje a massa e cubra com carne de porco.", "Cozinhe 4 min de cada lado.", "Cubra com molho, maionese, katsuobushi e aonori."],
    difficulty: "Médio", time: "25 min",
    description: "A 'pizza japonesa' de Osaka. 'Okonomi' significa 'como você quiser' — cada pessoa escolhe seus ingredientes." },

  { id: "onigiri", name: "Onigiri", category: "Street Food", image: "onigiri",
    ingredients: ["Arroz japonês quente", "Sal", "Umeboshi (ameixa em conserva)", "Salmão grelhado desfiado", "Alga nori"],
    steps: ["Cozinhe o arroz e deixe morno.", "Molhe as mãos e passe sal.", "Coloque uma porção de arroz na mão.", "Faça uma cavidade e adicione o recheio.", "Feche e molde em formato triangular.", "Envolva com uma tira de nori."],
    difficulty: "Fácil", time: "15 min",
    description: "Onigiri é o lanche mais popular do Japão, vendido em todo konbini (loja de conveniência)." },

  { id: "taiyaki", name: "Taiyaki", category: "Street Food", image: "taiyaki",
    ingredients: ["Farinha de trigo", "Fermento", "Açúcar", "Ovo", "Leite", "Anko (pasta de feijão azuki)"],
    steps: ["Misture farinha, fermento, açúcar, ovo e leite.", "Aqueça a forma de taiyaki.", "Despeje massa na forma.", "Adicione anko no centro.", "Cubra com mais massa.", "Feche e cozinhe 3 min de cada lado."],
    difficulty: "Fácil", time: "20 min",
    description: "Bolinho em formato de peixe (tai = pargo), recheado com pasta doce de feijão. Símbolo de boa sorte." },

  // ============ ENTRADAS ============
  { id: "gyoza", name: "Gyoza", category: "Entradas", image: "gyoza",
    ingredients: ["Massa de gyoza (wonton)", "300g de carne suína moída", "Repolho picado fino", "Nira (cebolinha chinesa)", "Gengibre ralado", "Alho ralado", "Shoyu", "Óleo de gergelim"],
    steps: ["Misture a carne com repolho, nira, gengibre e alho.", "Tempere com shoyu e óleo de gergelim.", "Coloque 1 colher de recheio na massa.", "Feche com pregas decorativas.", "Frite de um lado até dourar.", "Adicione água e tampe para vaporizar."],
    difficulty: "Médio", time: "40 min",
    description: "Pastéis japoneses com técnica única: fritos de um lado e vaporizados do outro." },

  { id: "edamame", name: "Edamame", category: "Entradas", image: "edamame",
    ingredients: ["500g de edamame (soja verde)", "Água", "Sal grosso"],
    steps: ["Ferva água com sal.", "Cozinhe o edamame por 4-5 minutos.", "Escorra e polvilhe com sal grosso.", "Sirva quente ou frio.", "Pressione a vagem para liberar os grãos."],
    difficulty: "Fácil", time: "10 min",
    description: "Aperitivo universal dos izakayas. Rico em proteína vegetal." },

  { id: "sunomono", name: "Sunomono", category: "Entradas", image: "sunomono",
    ingredients: ["2 pepinos japoneses", "Vinagre de arroz", "Açúcar", "Sal", "Gergelim", "Wakame (alga)"],
    steps: ["Fatie os pepinos em rodelas finas.", "Hidrate a alga wakame.", "Misture vinagre, açúcar e sal.", "Combine pepino e wakame.", "Tempere com a mistura de vinagre.", "Polvilhe gergelim e sirva gelado."],
    difficulty: "Fácil", time: "15 min",
    description: "Salada refrescante de pepino agridoce, presente em qualquer refeição japonesa." },

  // ============ SOPAS ============
  { id: "missoshiru", name: "Missoshiru", category: "Sopas", image: "missoshiru",
    ingredients: ["Dashi (caldo japonês)", "2 colheres de missô", "Tofu em cubos", "Wakame", "Cebolinha picada"],
    steps: ["Prepare o dashi com kombu e bonito flakes.", "Aqueça o dashi sem ferver.", "Dissolva o missô no caldo.", "Adicione tofu em cubos e wakame.", "NÃO ferva após adicionar o missô.", "Sirva com cebolinha picada."],
    difficulty: "Fácil", time: "15 min",
    description: "A sopa mais importante da culinária japonesa, consumida em praticamente toda refeição." },

  { id: "tonjiru", name: "Tonjiru", category: "Sopas", image: "tonjiru",
    ingredients: ["200g de carne suína fatiada", "Daikon (nabo japonês)", "Cenoura", "Gobo (bardana)", "Konjac", "Missô", "Dashi", "Cebolinha", "Gengibre"],
    steps: ["Corte todos os vegetais em meias-luas.", "Refogue a carne suína com gengibre.", "Adicione os vegetais e o dashi.", "Cozinhe até os vegetais ficarem macios (15 min).", "Dissolva o missô no caldo.", "Sirva quente com cebolinha."],
    difficulty: "Fácil", time: "30 min",
    description: "Versão mais encorpada do missoshiru, com carne de porco e vegetais da raiz." },

  // ============ SOBREMESAS ============
  { id: "mochi", name: "Mochi de Morango (Ichigo Daifuku)", category: "Sobremesas", image: "mochi",
    ingredients: ["Mochiko (farinha de arroz glutinoso)", "Açúcar", "Água", "Anko (pasta de feijão azuki)", "Morangos frescos", "Amido de milho para polvilhar"],
    steps: ["Misture mochiko, açúcar e água.", "Cozinhe no microondas em intervalos de 1 min.", "Mexa até ficar translúcido e elástico.", "Polvilhe amido numa superfície.", "Faça discos de mochi.", "Envolva um morango com anko e cubra com mochi."],
    difficulty: "Médio", time: "30 min",
    description: "Ichigo Daifuku é a sobremesa primaveril mais adorada do Japão — morango fresco envolto em mochi macio." },

  { id: "dorayaki", name: "Dorayaki", category: "Sobremesas", image: "dorayaki",
    ingredients: ["Farinha de trigo", "Ovos", "Açúcar", "Mel", "Mirin", "Fermento", "Anko (pasta de feijão azuki)"],
    steps: ["Bata ovos com açúcar e mel.", "Adicione farinha e fermento.", "Descanse a massa por 15 min.", "Cozinhe panquecas em frigideira baixa.", "Coloque anko entre duas panquecas.", "Pressione levemente para selar."],
    difficulty: "Fácil", time: "25 min",
    description: "Panqueca recheada com anko — o doce favorito do Doraemon! Popular desde a era Edo." },

  { id: "matcha-cheesecake", name: "Cheesecake Japonês de Matcha", category: "Sobremesas", image: "matcha-cheesecake",
    ingredients: ["200g de cream cheese", "60g de açúcar", "3 ovos (separados)", "2 colheres de matcha em pó", "30g de farinha de trigo", "60ml de leite", "Manteiga"],
    steps: ["Derreta cream cheese e manteiga em banho-maria.", "Adicione gemas, leite e matcha peneirado.", "Misture a farinha.", "Bata as claras em neve com açúcar.", "Incorpore delicadamente.", "Asse em banho-maria a 160°C por 60 min."],
    difficulty: "Avançado", time: "90 min",
    description: "Cheesecake ultraleve e tremulante (jiggly), com o amargor elegante do matcha." },
];

export function getDishById(id: string): Dish | undefined {
  return dishes.find((d) => d.id === id);
}

export function getDishesByCategory(category: string): Dish[] {
  return dishes.filter((d) => d.category === category);
}

export function searchDishes(query: string): Dish[] {
  const q = query.toLowerCase();
  return dishes.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.ingredients.some((ing) => ing.toLowerCase().includes(q))
  );
}
