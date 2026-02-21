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
  "Pratos Tradicionais",
  "Massas Japonesas",
  "Pratos Quentes",
  "Street Food",
  "Entradas",
  "Sopas",
  "Sobremesas Japonesas",
];

export const dishes: Dish[] = [
  // ============ PRATOS TRADICIONAIS ============
  { id: "sushi-misto", name: "Sushi Misto", category: "Pratos Tradicionais", image: "sushi-misto",
    ingredients: ["Arroz japonês temperado", "Salmão fresco", "Atum fresco", "Camarão cozido", "Nori", "Wasabi", "Gengibre em conserva", "Shoyu"],
    steps: ["Cozinhe o arroz japonês e tempere com vinagre, açúcar e sal.", "Corte os peixes em fatias uniformes de 5mm.", "Molde pequenas porções de arroz (20g cada).", "Passe wasabi entre o peixe e o arroz.", "Monte niguiris com cada tipo de peixe.", "Sirva com shoyu, wasabi e gari."],
    difficulty: "Médio", time: "50 min",
    description: "Seleção variada de sushi com diferentes tipos de peixes, ideal para conhecer a diversidade do sushi japonês." },

  { id: "sashimi-misto", name: "Sashimi Misto", category: "Pratos Tradicionais", image: "sashimi-misto",
    ingredients: ["150g de salmão fresco", "150g de atum fresco", "100g de peixe branco (robalo ou pargo)", "Shoyu para servir", "Wasabi fresco", "Gengibre em conserva (gari)"],
    steps: ["Certifique-se de que os peixes são sashimi grade.", "Corte o salmão em fatias de 5-7mm na diagonal.", "Corte o atum em fatias de 7mm.", "Corte o peixe branco em fatias finas (3mm).", "Organize as fatias em um prato com gelo decorativo.", "Sirva com shoyu, wasabi e gari."],
    difficulty: "Médio", time: "20 min",
    description: "Sashimi é a arte de fatiar peixes crus com precisão. Cada corte deve respeitar a textura do peixe." },

  { id: "nigiri-salmao", name: "Nigiri de Salmão", category: "Pratos Tradicionais", image: "nigiri-salmao",
    ingredients: ["200g de salmão fresco (sashimi grade)", "2 xícaras de arroz japonês", "3 colheres de vinagre de arroz", "1 colher de açúcar", "1/2 colher de sal", "Wasabi a gosto"],
    steps: ["Cozinhe o arroz japonês e tempere com vinagre, açúcar e sal.", "Deixe o arroz esfriar até a temperatura ambiente.", "Corte o salmão em fatias de 5mm de espessura.", "Molde porções de arroz (20g cada) com as mãos úmidas.", "Passe um pouco de wasabi sobre o arroz.", "Coloque a fatia de salmão sobre o arroz e pressione suavemente."],
    difficulty: "Médio", time: "45 min",
    description: "O nigiri é a forma mais pura de sushi — uma fatia de peixe fresco sobre arroz temperado. Originário de Tóquio no séc. XIX." },

  { id: "temaki-salmao", name: "Temaki de Salmão", category: "Pratos Tradicionais", image: "temaki-salmao",
    ingredients: ["Folhas de nori", "Arroz japonês temperado", "200g de salmão em cubos", "Cream cheese", "Cebolinha picada", "Gergelim"],
    steps: ["Prepare o arroz japonês e tempere.", "Corte o salmão em cubos pequenos.", "Coloque meia folha de nori na mão.", "Espalhe arroz em um dos lados.", "Adicione salmão, cream cheese e cebolinha.", "Enrole em formato de cone e sirva imediatamente."],
    difficulty: "Fácil", time: "30 min",
    description: "Temaki é o sushi em formato de cone, perfeito para comer com as mãos. Popular no Brasil e Japão." },

  { id: "uramaki-california", name: "Uramaki Califórnia", category: "Pratos Tradicionais", image: "uramaki-california",
    ingredients: ["Arroz japonês temperado", "Folhas de nori", "Kani kama", "Pepino", "Abacate", "Gergelim torrado"],
    steps: ["Cubra a esteira de bambu com filme plástico.", "Coloque o nori e espalhe arroz por cima.", "Vire de cabeça para baixo (arroz para fora).", "Coloque kani, pepino e abacate no centro.", "Enrole com a esteira.", "Passe gergelim e corte em 8 pedaços."],
    difficulty: "Médio", time: "40 min",
    description: "Criado nos EUA nos anos 60, o California roll popularizou o sushi no Ocidente." },

  { id: "hosomaki-pepino", name: "Hosomaki de Pepino (Kappamaki)", category: "Pratos Tradicionais", image: "hosomaki-pepino",
    ingredients: ["Arroz japonês temperado", "Folhas de nori", "1 pepino japonês", "Wasabi", "Gergelim"],
    steps: ["Corte o pepino em tiras finas compridas.", "Coloque meia folha de nori sobre a esteira.", "Espalhe uma camada fina de arroz.", "Coloque tiras de pepino no centro.", "Enrole firmemente.", "Corte em 6 pedaços com faca molhada."],
    difficulty: "Fácil", time: "20 min",
    description: "Kappamaki é nomeado em homenagem ao Kappa, criatura aquática do folclore japonês que ama pepino." },

  { id: "futomaki", name: "Futomaki", category: "Pratos Tradicionais", image: "futomaki",
    ingredients: ["Arroz japonês temperado", "Folha inteira de nori", "Omelete japonesa (tamagoyaki)", "Pepino", "Kani kama", "Sakura denbu (pó de peixe rosa)"],
    steps: ["Coloque a folha inteira de nori na esteira.", "Espalhe arroz deixando 2cm na borda superior.", "Disponha os recheios em linha no centro.", "Enrole firmemente com a esteira.", "Deixe descansar 2 minutos.", "Corte em 8 fatias grossas."],
    difficulty: "Médio", time: "45 min",
    description: "Futomaki significa 'rolo gordo' — é o sushi mais farto, com múltiplos recheios." },

  { id: "nigiri-atum", name: "Nigiri de Atum", category: "Pratos Tradicionais", image: "nigiri-atum",
    ingredients: ["200g de atum fresco (sashimi grade)", "2 xícaras de arroz japonês", "Vinagre de arroz", "Açúcar", "Sal", "Wasabi"],
    steps: ["Prepare o arroz temperado com vinagre.", "Corte o atum em fatias de 5mm.", "Molde porções de arroz (20g) com mãos úmidas.", "Aplique wasabi entre arroz e peixe.", "Coloque a fatia de atum sobre o arroz.", "Pressione suavemente para fixar."],
    difficulty: "Médio", time: "45 min",
    description: "O nigiri de atum (maguro) é considerado o rei do sushi. Akami é o corte magro, chutoro o médio e otoro o mais gorduroso." },

  { id: "temaki-skin", name: "Temaki Skin", category: "Pratos Tradicionais", image: "temaki-skin",
    ingredients: ["Pele de salmão frita (skin)", "Arroz japonês temperado", "Nori", "Cream cheese", "Cebolinha", "Gergelim"],
    steps: ["Frite a pele de salmão até ficar crocante.", "Tempere o arroz com vinagre.", "Coloque nori na mão e espalhe arroz.", "Adicione cream cheese e skin crocante.", "Finalize com cebolinha e gergelim.", "Enrole em formato de cone."],
    difficulty: "Fácil", time: "25 min",
    description: "Temaki brasileiro com pele de salmão crocante — uma invenção criativa que combina textura e sabor." },

  // ============ MASSAS JAPONESAS ============
  { id: "ramen-tonkotsu", name: "Ramen Tonkotsu", category: "Massas Japonesas", image: "ramen-tonkotsu",
    ingredients: ["Macarrão ramen fresco", "1kg de ossos de porco", "4 dentes de alho", "Gengibre fresco", "Shoyu", "Ovos cozidos (ajitama)", "Chashu de porco", "Cebolinha", "Nori"],
    steps: ["Ferva os ossos de porco por 12 horas em fogo baixo.", "Coe o caldo e tempere com shoyu e sal.", "Cozinhe o macarrão ramen por 2 minutos.", "Monte a tigela: caldo quente + macarrão.", "Adicione chashu, ovo cozido marinado e cebolinha.", "Finalize com nori e gergelim."],
    difficulty: "Avançado", time: "12 horas",
    description: "Ramen de Hakata (Fukuoka), com caldo cremoso de ossos de porco fervidos por horas. Um dos pratos mais icônicos do Japão." },

  { id: "ramen-shoyu", name: "Ramen Shoyu", category: "Massas Japonesas", image: "ramen-shoyu",
    ingredients: ["Macarrão ramen", "Caldo de galinha", "Dashi", "Shoyu", "Mirin", "Chashu de porco", "Ovo marinado", "Cebolinha", "Nori", "Menma (broto de bambu)"],
    steps: ["Prepare um caldo claro de galinha (4 horas).", "Combine com dashi e tempere com shoyu e mirin.", "Cozinhe o macarrão al dente.", "Monte: caldo + macarrão.", "Adicione chashu fatiado e ovo marinado.", "Finalize com cebolinha, nori e menma."],
    difficulty: "Avançado", time: "5 horas",
    description: "O estilo mais clássico de Tóquio. Caldo claro à base de shoyu com sabor profundo e elegante." },

  { id: "ramen-miso", name: "Ramen Missô", category: "Massas Japonesas", image: "ramen-miso",
    ingredients: ["Macarrão ramen grosso", "Caldo de porco e galinha", "Missô vermelho", "Manteiga", "Milho", "Carne suína moída", "Broto de feijão", "Cebolinha", "Gengibre"],
    steps: ["Prepare um caldo combinado de porco e galinha.", "Refogue gengibre e alho, adicione carne moída.", "Dissolva missô vermelho no caldo.", "Cozinhe o ramen grosso al dente.", "Monte a tigela com caldo e macarrão.", "Cubra com milho, broto de feijão, manteiga e cebolinha."],
    difficulty: "Avançado", time: "6 horas",
    description: "Originário de Sapporo (Hokkaido), o ramen missô é reconfortante e rico, perfeito para o inverno." },

  { id: "udon-kitsune", name: "Udon Kitsune", category: "Massas Japonesas", image: "udon-kitsune",
    ingredients: ["Macarrão udon grosso", "Dashi (caldo japonês)", "Shoyu", "Mirin", "Tofu frito (aburaage)", "Cebolinha", "Kamaboko (fishcake)"],
    steps: ["Prepare o dashi com kombu e bonito flakes.", "Tempere com shoyu e mirin.", "Cozinhe o udon em água fervente por 10 min.", "Escorra e coloque na tigela.", "Adicione o caldo quente.", "Cubra com tofu frito, cebolinha e kamaboko."],
    difficulty: "Fácil", time: "25 min",
    description: "Kitsune udon recebe esse nome do tofu frito, alimento favorito das raposas (kitsune) do folclore japonês." },

  { id: "udon-tempura", name: "Udon com Tempurá", category: "Massas Japonesas", image: "udon-tempura",
    ingredients: ["Macarrão udon", "Dashi", "Shoyu", "Mirin", "Tempurá de camarão", "Cebolinha", "Tenkasu"],
    steps: ["Prepare o caldo com dashi, shoyu e mirin.", "Cozinhe o udon e escorra.", "Frite tempurá de camarão até dourado.", "Coloque udon na tigela com caldo.", "Posicione o tempurá por cima.", "Finalize com cebolinha e tenkasu."],
    difficulty: "Médio", time: "35 min",
    description: "A combinação perfeita: udon quente com tempurá crocante. Servido em todo o Japão." },

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

  { id: "soba-quente", name: "Soba Quente (Kake Soba)", category: "Massas Japonesas", image: "soba-quente",
    ingredients: ["Macarrão soba", "Dashi", "Shoyu", "Mirin", "Cebolinha", "Nori", "Shichimi togarashi"],
    steps: ["Prepare o caldo com dashi, shoyu e mirin.", "Cozinhe o soba al dente.", "Lave em água fria e escorra.", "Coloque na tigela com caldo quente.", "Adicione cebolinha e nori.", "Sirva com shichimi togarashi."],
    difficulty: "Fácil", time: "20 min",
    description: "Versão quente do soba, perfeita para os dias frios. O caldo leve realça o sabor do trigo sarraceno." },

  // ============ PRATOS QUENTES ============
  { id: "yakitori", name: "Yakitori", category: "Pratos Quentes", image: "yakitori",
    ingredients: ["500g de sobrecoxa de frango", "Negi (cebolinha japonesa)", "Molho tare (shoyu, mirin, açúcar, sakê)", "Espetos de bambu", "Shichimi togarashi"],
    steps: ["Corte o frango em cubos de 2cm.", "Corte o negi em pedaços de 3cm.", "Espete alternando frango e negi.", "Grelhe em fogo alto virando constantemente.", "Pincele com molho tare nos últimos minutos.", "Sirva com shichimi togarashi."],
    difficulty: "Fácil", time: "25 min",
    description: "Yakitori são espetinhos grelhados, a alma dos izakayas (bares) japoneses." },

  { id: "karaage", name: "Frango Karaage", category: "Pratos Quentes", image: "karaage",
    ingredients: ["500g de sobrecoxa de frango", "Shoyu", "Sakê", "Gengibre ralado", "Alho ralado", "Amido de milho", "Óleo para fritura", "Limão"],
    steps: ["Corte o frango em pedaços de 3cm.", "Marine com shoyu, sakê, gengibre e alho por 30 min.", "Escorra e passe no amido de milho.", "Frite a 170°C por 5 min, retire.", "Frite novamente a 180°C por 2 min (dupla fritura).", "Sirva com limão espremido."],
    difficulty: "Fácil", time: "45 min",
    description: "Karaage é o frango frito mais popular do Japão. O segredo está na marinada com gengibre e a dupla fritura." },

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

  { id: "katsudon", name: "Katsudon", category: "Pratos Quentes", image: "katsudon",
    ingredients: ["1 tonkatsu (costeleta empanada)", "2 ovos", "1 cebola fatiada", "Dashi", "Shoyu", "Mirin", "Açúcar", "Arroz japonês", "Mitsuba ou cebolinha"],
    steps: ["Prepare um tonkatsu e corte em tiras.", "Cozinhe cebola em dashi com shoyu, mirin e açúcar.", "Coloque o tonkatsu fatiado na panela.", "Despeje ovos batidos por cima.", "Tampe e cozinhe até o ovo estar semicozido.", "Deslize sobre arroz quente na tigela."],
    difficulty: "Médio", time: "35 min",
    description: "Tonkatsu sobre arroz com ovo. Estudantes comem antes de provas porque 'katsu' soa como 'vitória' em japonês." },

  { id: "oyakodon", name: "Oyakodon", category: "Pratos Quentes", image: "oyakodon",
    ingredients: ["300g de sobrecoxa de frango", "3 ovos", "1 cebola", "Dashi", "Shoyu", "Mirin", "Açúcar", "Arroz japonês", "Mitsuba ou cebolinha"],
    steps: ["Corte o frango em pedaços pequenos e a cebola em fatias.", "Cozinhe cebola e frango no caldo temperado.", "Quando o frango estiver cozido, despeje 2/3 dos ovos batidos.", "Tampe e cozinhe 1 minuto.", "Adicione o restante dos ovos e cozinhe mais 30 segundos.", "Deslize sobre arroz quente."],
    difficulty: "Fácil", time: "20 min",
    description: "Oyakodon significa 'pais e filhos' — frango (mãe) e ovo (filho) sobre arroz. Poético e delicioso." },

  { id: "sukiyaki", name: "Sukiyaki", category: "Pratos Quentes", image: "sukiyaki",
    ingredients: ["300g de carne wagyu fatiada", "Tofu firme", "Macarrão shirataki", "Negi (cebolinha japonesa)", "Cogumelos shiitake", "Acelga", "Warishita (shoyu, mirin, açúcar, sakê)", "Ovo cru para mergulhar"],
    steps: ["Prepare o warishita misturando shoyu, mirin, açúcar e sakê.", "Aqueça uma panela de ferro.", "Sele a carne rapidamente.", "Adicione o warishita e os vegetais.", "Cozinhe em fogo médio por 5-10 min.", "Cada pessoa mergulha a carne e vegetais em ovo cru batido."],
    difficulty: "Médio", time: "30 min",
    description: "Sukiyaki é um hot pot japonês consumido no inverno, perfeito para reunir família e amigos." },

  { id: "shabu-shabu", name: "Shabu-Shabu", category: "Pratos Quentes", image: "shabu-shabu",
    ingredients: ["400g de carne bovina fatiada ultra fina", "Tofu", "Hakusai (acelga chinesa)", "Cogumelos enoki e shiitake", "Macarrão udon ou harusame", "Kombu para caldo", "Molho ponzu", "Molho gomadare (gergelim)"],
    steps: ["Prepare um caldo leve com kombu.", "Disponha todos os ingredientes em pratos separados.", "Aqueça o caldo na mesa com fogareiro.", "Passe a carne no caldo por 2-3 segundos ('shabu shabu').", "Mergulhe no molho ponzu ou gomadare.", "Cozinhe os vegetais no caldo."],
    difficulty: "Fácil", time: "25 min",
    description: "Hot pot elegante onde cada pessoa cozinha sua própria carne. O nome vem do som 'shabu shabu' da carne na água." },

  { id: "teppanyaki", name: "Teppanyaki", category: "Pratos Quentes", image: "teppanyaki",
    ingredients: ["300g de filé mignon", "Camarões", "Abobrinha", "Cogumelos", "Cebola", "Broto de feijão", "Alho", "Manteiga", "Shoyu", "Sakê"],
    steps: ["Aqueça a chapa ou frigideira grossa.", "Grelhe os legumes com manteiga e alho.", "Tempere a carne com sal e pimenta.", "Grelhe em fogo alto até o ponto desejado.", "Grelhe os camarões rapidamente.", "Finalize com shoyu e sakê flamejado."],
    difficulty: "Médio", time: "30 min",
    description: "Culinária performática na chapa quente. O chef cozinha diante dos clientes com movimentos espetaculares." },

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

  { id: "dango", name: "Dango", category: "Street Food", image: "dango",
    ingredients: ["Farinha de arroz glutinoso (shiratamako)", "Tofu macio (sedoso)", "Açúcar", "Molho mitarashi (shoyu, mirin, açúcar, amido)", "Espetos de bambu"],
    steps: ["Misture shiratamako com tofu amassado até formar massa homogênea.", "Divida em bolinhas de 2-3cm.", "Cozinhe em água fervente até flutuarem.", "Transfira para água gelada.", "Espete 3 bolinhas em cada espeto.", "Grelhe levemente e pincele com molho mitarashi."],
    difficulty: "Fácil", time: "25 min",
    description: "Bolinhas de mochi em espeto com molho doce-salgado. Presença obrigatória em festivais e templos." },

  { id: "yakiimo", name: "Yakiimo (Batata-Doce Assada)", category: "Street Food", image: "yakiimo",
    ingredients: ["Batata-doce japonesa (satsuma-imo)", "Pedras ou sal grosso para assar"],
    steps: ["Lave bem a batata-doce sem descascar.", "Envolva em papel alumínio.", "Asse a 200°C por 60-90 min.", "A batata está pronta quando estiver muito macia.", "Abra e sirva quente.", "Pode polvilhar canela ou comer pura."],
    difficulty: "Fácil", time: "90 min",
    description: "No outono e inverno, vendedores de yakiimo percorrem as ruas do Japão com seus carrinhos — o aroma é irresistível." },

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

  { id: "missoshiro-entrada", name: "Missoshiro", category: "Entradas", image: "missoshiro",
    ingredients: ["Dashi", "Missô branco", "Tofu sedoso", "Wakame", "Cebolinha", "Negi"],
    steps: ["Aqueça o dashi sem ferver.", "Dissolva missô branco no caldo.", "Adicione tofu em cubos pequenos.", "Junte wakame hidratada.", "NÃO ferva.", "Sirva com cebolinha picada."],
    difficulty: "Fácil", time: "10 min",
    description: "Versão leve da sopa de missô, servida como entrada para abrir o apetite." },

  { id: "harumaki", name: "Harumaki Japonês", category: "Entradas", image: "harumaki",
    ingredients: ["Massa de harumaki (spring roll)", "200g de carne suína moída", "Repolho picado", "Cenoura ralada", "Broto de feijão", "Harusame (macarrão de vidro)", "Shoyu", "Óleo de gergelim", "Óleo para fritura"],
    steps: ["Hidrate o harusame e pique.", "Refogue a carne com shoyu e gengibre.", "Adicione vegetais e harusame.", "Deixe esfriar o recheio.", "Enrole na massa de harumaki bem apertado.", "Frite a 180°C até dourar."],
    difficulty: "Médio", time: "35 min",
    description: "Rolinho primavera japonês, com recheio de carne e vegetais, frito até ficar dourado e crocante." },

  { id: "agedashi-tofu", name: "Agedashi Tofu", category: "Entradas", image: "agedashi-tofu",
    ingredients: ["Tofu firme", "Amido de milho", "Óleo para fritura", "Dashi", "Shoyu", "Mirin", "Daikon ralado", "Gengibre ralado", "Cebolinha", "Katsuobushi"],
    steps: ["Corte o tofu em cubos e seque bem.", "Passe no amido de milho.", "Frite a 180°C até dourar levemente.", "Prepare o molho: dashi + shoyu + mirin.", "Coloque o tofu frito na tigela.", "Regue com molho e cubra com daikon, gengibre e katsuobushi."],
    difficulty: "Fácil", time: "20 min",
    description: "Tofu frito levemente, servido em caldo quente. Textura crocante por fora e sedosa por dentro." },

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

  { id: "ramen-tradicional-sopa", name: "Ramen Tradicional", category: "Sopas", image: "ramen-tradicional",
    ingredients: ["Macarrão ramen", "Caldo de ossos (tonkotsu ou torigara)", "Shoyu ou missô", "Chashu de porco", "Ovo marinado", "Cebolinha", "Nori", "Broto de feijão", "Menma"],
    steps: ["Prepare o caldo de ossos (12+ horas).", "Tempere com tare (shoyu ou missô).", "Cozinhe o macarrão al dente.", "Monte: caldo quente + macarrão.", "Adicione chashu, ovo, menma.", "Finalize com cebolinha, nori e broto."],
    difficulty: "Avançado", time: "12 horas",
    description: "O ramen é muito mais que uma sopa — é uma obsessão nacional japonesa com milhares de variações regionais." },

  { id: "lamen-artesanal", name: "Lamen Artesanal", category: "Sopas", image: "lamen-artesanal",
    ingredients: ["Farinha de trigo forte", "Água alcalina (kansui)", "Sal", "Caldo de galinha concentrado", "Shoyu", "Óleo de alho negro", "Cebolinha", "Ovo marinado", "Chashu"],
    steps: ["Misture farinha, água alcalina e sal.", "Sove a massa por 15 min e descanse 30 min.", "Abra e corte o macarrão na espessura desejada.", "Prepare o caldo concentrado de galinha.", "Cozinhe o macarrão fresco por 90 segundos.", "Monte com caldo, toppings e óleo aromático."],
    difficulty: "Avançado", time: "6 horas",
    description: "Macarrão feito à mão do zero — a textura elástica e o sabor são incomparáveis ao industrial." },

  { id: "ozoni", name: "Ozoni (Sopa de Ano Novo)", category: "Sopas", image: "ozoni",
    ingredients: ["Mochi (bolinho de arroz)", "Dashi", "Shoyu claro", "Frango ou peixe branco", "Espinafre", "Cenoura", "Kamaboko", "Yuzu (casca)"],
    steps: ["Prepare o dashi claro.", "Tempere com shoyu claro e sal.", "Grelhe ou asse o mochi até dourar.", "Cozinhe frango e vegetais no caldo.", "Adicione o mochi grelhado.", "Finalize com casca de yuzu."],
    difficulty: "Médio", time: "30 min",
    description: "Sopa consumida no Ano Novo japonês. Cada região tem sua versão — é tradição familiar." },

  // ============ SOBREMESAS JAPONESAS ============
  { id: "mochi", name: "Mochi de Morango (Ichigo Daifuku)", category: "Sobremesas Japonesas", image: "mochi",
    ingredients: ["Mochiko (farinha de arroz glutinoso)", "Açúcar", "Água", "Anko (pasta de feijão azuki)", "Morangos frescos", "Amido de milho para polvilhar"],
    steps: ["Misture mochiko, açúcar e água.", "Cozinhe no microondas em intervalos de 1 min.", "Mexa até ficar translúcido e elástico.", "Polvilhe amido numa superfície.", "Faça discos de mochi.", "Envolva um morango com anko e cubra com mochi."],
    difficulty: "Médio", time: "30 min",
    description: "Ichigo Daifuku é a sobremesa primaveril mais adorada do Japão — morango fresco envolto em mochi macio." },

  { id: "dorayaki", name: "Dorayaki", category: "Sobremesas Japonesas", image: "dorayaki",
    ingredients: ["Farinha de trigo", "Ovos", "Açúcar", "Mel", "Mirin", "Fermento", "Anko (pasta de feijão azuki)"],
    steps: ["Bata ovos com açúcar e mel.", "Adicione farinha e fermento.", "Descanse a massa por 15 min.", "Cozinhe panquecas em frigideira baixa.", "Coloque anko entre duas panquecas.", "Pressione levemente para selar."],
    difficulty: "Fácil", time: "25 min",
    description: "Panqueca recheada com anko — o doce favorito do Doraemon! Popular desde a era Edo." },

  { id: "manju", name: "Manju", category: "Sobremesas Japonesas", image: "manju",
    ingredients: ["Farinha de trigo", "Açúcar mascavo", "Fermento", "Água", "Anko (pasta de feijão azuki)"],
    steps: ["Dissolva açúcar mascavo em água morna.", "Misture com farinha e fermento.", "Sove até massa lisa e descanse 30 min.", "Faça discos e recheie com anko.", "Feche e molde em formato oval.", "Cozinhe no vapor por 15 minutos."],
    difficulty: "Fácil", time: "50 min",
    description: "Bolinho cozido no vapor com recheio de feijão doce. Presente clássico quando se visita alguém no Japão." },

  { id: "anmitsu", name: "Anmitsu", category: "Sobremesas Japonesas", image: "anmitsu",
    ingredients: ["Kanten (ágar-ágar)", "Anko", "Frutas variadas (kiwi, pêssego, tangerina)", "Mochi", "Sorvete de baunilha ou matcha", "Kuromitsu (calda de açúcar negro)"],
    steps: ["Dissolva kanten em água e ferva.", "Despeje em forma e refrigere até firmar.", "Corte em cubos pequenos.", "Prepare as frutas e corte em pedaços.", "Monte na tigela: kanten, frutas, anko, mochi.", "Regue com kuromitsu e adicione sorvete."],
    difficulty: "Fácil", time: "40 min",
    description: "Sobremesa clássica japonesa com gelatina de ágar, frutas, mochi e calda escura. Refrescante e bonita." },

  { id: "matcha-cheesecake", name: "Cheesecake Japonês de Matcha", category: "Sobremesas Japonesas", image: "matcha-cheesecake",
    ingredients: ["200g de cream cheese", "60g de açúcar", "3 ovos (separados)", "2 colheres de matcha em pó", "30g de farinha de trigo", "60ml de leite", "Manteiga"],
    steps: ["Derreta cream cheese e manteiga em banho-maria.", "Adicione gemas, leite e matcha peneirado.", "Misture a farinha.", "Bata as claras em neve com açúcar.", "Incorpore delicadamente.", "Asse em banho-maria a 160°C por 60 min."],
    difficulty: "Avançado", time: "90 min",
    description: "Cheesecake ultraleve e tremulante (jiggly), com o amargor elegante do matcha." },

  { id: "matcha-parfait", name: "Parfait de Matcha", category: "Sobremesas Japonesas", image: "matcha-parfait",
    ingredients: ["Sorvete de matcha", "Cornflakes", "Anko", "Mochi", "Chantilly", "Calda de matcha", "Frutas vermelhas"],
    steps: ["Coloque cornflakes na base do copo alto.", "Adicione uma camada de anko.", "Coloque bolas de sorvete de matcha.", "Adicione chantilly e pedaços de mochi.", "Regue com calda de matcha.", "Decore com frutas vermelhas."],
    difficulty: "Fácil", time: "15 min",
    description: "Sundae japonês em camadas com matcha, mochi e anko. Popular em cafeterias de Kyoto e Uji." },

  { id: "warabi-mochi", name: "Warabi Mochi", category: "Sobremesas Japonesas", image: "warabi-mochi",
    ingredients: ["Warabi-ko (amido de samambaia) ou amido de tapioca", "Água", "Açúcar", "Kinako (farinha de soja torrada)", "Kuromitsu (calda escura)"],
    steps: ["Misture warabi-ko, açúcar e água.", "Cozinhe em fogo baixo mexendo constantemente.", "Quando ficar translúcido e elástico, retire.", "Despeje em forma untada com kinako.", "Corte em pedaços e role em kinako.", "Sirva com kuromitsu."],
    difficulty: "Médio", time: "25 min",
    description: "Mochi gelado com cobertura de kinako, textura gelatinosa e macia. Sobremesa refrescante de verão." },
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
