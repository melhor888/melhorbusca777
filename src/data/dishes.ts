import { dishesBatch2 } from "./dishes-batch2";
import { dishesBatch3 } from "./dishes-batch3";
import { dishesBatch4 } from "./dishes-batch4";

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
  "Molhos & Temperos",
  "Donburi & Arroz",
  "Acompanhamentos",
  "Izakaya & Petiscos",
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

  // ============ MOLHOS & TEMPEROS ============
  { id: "ponzu", name: "Molho Ponzu", category: "Molhos & Temperos", image: "ponzu",
    ingredients: ["100ml de shoyu", "50ml de suco de yuzu ou limão", "30ml de mirin", "30ml de vinagre de arroz", "Kombu (5cm)", "Katsuobushi (punhado)"],
    steps: ["Combine shoyu, suco de yuzu, mirin e vinagre.", "Adicione kombu e katsuobushi.", "Deixe infusionar por 24 horas na geladeira.", "Coe e descarte os sólidos.", "Transfira para um frasco limpo.", "Conserve refrigerado por até 1 mês."],
    difficulty: "Fácil", time: "10 min + 24h infusão",
    description: "Molho cítrico à base de shoyu e yuzu. Perfeito para shabu-shabu, sashimi e saladas." },

  { id: "molho-teriyaki", name: "Molho Teriyaki", category: "Molhos & Temperos", image: "molho-teriyaki",
    ingredients: ["100ml de shoyu", "80ml de mirin", "50ml de sakê", "2 colheres de açúcar", "1 colher de amido (opcional)"],
    steps: ["Combine shoyu, mirin, sakê e açúcar numa panela.", "Leve a fogo médio até ferver.", "Reduza o fogo e cozinhe por 10 min.", "Se quiser mais espesso, dissolva amido em água e adicione.", "Mexa até engrossar.", "Deixe esfriar e armazene em frasco."],
    difficulty: "Fácil", time: "15 min",
    description: "Glaceado doce-salgado brilhante que dá nome à técnica teriyaki. Ideal para frango, salmão e legumes." },

  { id: "tare-yakitori", name: "Tare de Yakitori", category: "Molhos & Temperos", image: "tare-yakitori",
    ingredients: ["150ml de shoyu", "100ml de mirin", "50ml de sakê", "3 colheres de açúcar", "Ossos de frango (opcional)"],
    steps: ["Se usar ossos, grelhe-os antes para caramelizar.", "Combine shoyu, mirin, sakê e açúcar.", "Adicione os ossos grelhados.", "Cozinhe em fogo baixo por 30 min.", "Coe e reduza até consistência de xarope.", "Use para pincelar espetinhos."],
    difficulty: "Fácil", time: "40 min",
    description: "Molho caramelizado dos yakitoris. Nas melhores casas, o tare é envelhecido por anos, ganhando complexidade." },

  { id: "molho-tonkatsu", name: "Molho Tonkatsu", category: "Molhos & Temperos", image: "molho-tonkatsu",
    ingredients: ["4 colheres de ketchup", "2 colheres de molho inglês", "1 colher de shoyu", "1 colher de açúcar", "1/2 colher de mostarda"],
    steps: ["Misture todos os ingredientes.", "Aqueça em fogo baixo por 2 minutos.", "Mexa até homogeneizar.", "Ajuste doçura a gosto.", "Deixe esfriar.", "Sirva com tonkatsu, korokke ou fritos."],
    difficulty: "Fácil", time: "5 min",
    description: "Molho agridoce espesso, essencial para acompanhar tonkatsu e outros empanados japoneses." },

  { id: "gomadare", name: "Gomadare (Molho de Gergelim)", category: "Molhos & Temperos", image: "gomadare",
    ingredients: ["4 colheres de pasta de gergelim (nerigoma)", "2 colheres de shoyu", "2 colheres de vinagre de arroz", "1 colher de açúcar", "1 colher de mirin", "Dashi (2 colheres)"],
    steps: ["Misture a pasta de gergelim com dashi até suavizar.", "Adicione shoyu, vinagre, açúcar e mirin.", "Mexa até ficar cremoso e homogêneo.", "Ajuste a consistência com mais dashi se necessário.", "Transfira para um recipiente.", "Sirva com shabu-shabu, saladas ou macarrão frio."],
    difficulty: "Fácil", time: "5 min",
    description: "Molho cremoso de gergelim, companheiro clássico do shabu-shabu e do cold udon." },

  { id: "wafu-dressing", name: "Wafu Dressing", category: "Molhos & Temperos", image: "wafu-dressing",
    ingredients: ["3 colheres de shoyu", "2 colheres de vinagre de arroz", "1 colher de mirin", "1 colher de óleo de gergelim", "1/2 cebola ralada", "Gergelim torrado"],
    steps: ["Rale a cebola finamente.", "Misture shoyu, vinagre, mirin e óleo de gergelim.", "Adicione a cebola ralada.", "Bata ou mexa bem.", "Deixe descansar 10 min para os sabores se integrarem.", "Sirva sobre saladas frescas."],
    difficulty: "Fácil", time: "10 min",
    description: "Vinagrete japonês com cebola e gergelim. Transforma qualquer salada numa experiência japonesa." },

  { id: "nikiri-shoyu", name: "Nikiri Shoyu", category: "Molhos & Temperos", image: "nikiri-shoyu",
    ingredients: ["100ml de shoyu", "30ml de mirin", "20ml de sakê", "Kombu (pedaço pequeno)"],
    steps: ["Aqueça mirin e sakê para evaporar o álcool.", "Adicione o shoyu e kombu.", "Aqueça em fogo baixo sem ferver.", "Retire do fogo após 5 minutos.", "Coe e deixe esfriar.", "Use com pincel para pincelar sushi (não mergulhar)."],
    difficulty: "Fácil", time: "10 min",
    description: "Shoyu refinado usado por sushimen para pincelar nigiri. A diferença entre sushi comum e omakase." },

  { id: "molho-gyoza", name: "Molho para Gyoza", category: "Molhos & Temperos", image: "molho-gyoza",
    ingredients: ["3 colheres de shoyu", "1 colher de vinagre de arroz", "1/2 colher de óleo de gergelim", "Rayu (óleo de pimenta) a gosto", "Alho picado (opcional)"],
    steps: ["Misture shoyu e vinagre de arroz.", "Adicione óleo de gergelim.", "Pingue rayu a gosto.", "Adicione alho picado se desejar.", "Mexa bem.", "Sirva em pratinhos individuais para mergulhar gyoza."],
    difficulty: "Fácil", time: "3 min",
    description: "Trio clássico de shoyu, vinagre e rayu — simples mas perfeito para gyoza." },

  { id: "yuzu-kosho", name: "Yuzu Koshō", category: "Molhos & Temperos", image: "yuzu-kosho",
    ingredients: ["Casca de 5 yuzu (ou limão siciliano)", "100g de pimenta verde fresca", "30g de sal"],
    steps: ["Rale as cascas de yuzu (só a parte colorida).", "Pique as pimentas verdes finamente.", "Combine yuzu, pimenta e sal.", "Processe até formar uma pasta.", "Transfira para frasco esterilizado.", "Maturar na geladeira por 1 semana antes de usar."],
    difficulty: "Médio", time: "20 min + 7 dias",
    description: "Pasta picante de yuzu e pimenta verde. Condimento premium que eleva qualquer prato — use com moderação." },

  { id: "furikake", name: "Furikake Caseiro", category: "Molhos & Temperos", image: "furikake",
    ingredients: ["2 folhas de nori", "2 colheres de gergelim torrado", "1 colher de katsuobushi", "1/2 colher de sal", "1/2 colher de açúcar", "Shichimi togarashi (opcional)"],
    steps: ["Toste as folhas de nori na chama até crocantes.", "Triture o nori em pedaços pequenos.", "Torre o gergelim em frigideira seca.", "Misture nori, gergelim, katsuobushi, sal e açúcar.", "Adicione shichimi se quiser picante.", "Armazene em recipiente hermético."],
    difficulty: "Fácil", time: "10 min",
    description: "Tempero seco para polvilhar sobre arroz. Cada família japonesa tem sua receita secreta de furikake." },

  { id: "rayu", name: "Rayu (Óleo de Pimenta)", category: "Molhos & Temperos", image: "rayu",
    ingredients: ["200ml de óleo de gergelim", "3 colheres de flocos de pimenta vermelha", "2 dentes de alho fatiados", "1 pedaço de gengibre", "1 estrela de anis", "1 colher de gergelim torrado"],
    steps: ["Aqueça o óleo com alho, gengibre e anis em fogo baixo.", "Quando o alho dourar, retire os sólidos.", "Deixe o óleo esfriar até ~150°C.", "Despeje sobre os flocos de pimenta.", "Mexa e deixe infusionar.", "Adicione gergelim e armazene em frasco."],
    difficulty: "Fácil", time: "15 min",
    description: "Óleo aromático de pimenta e gergelim. Indispensável no ramen, gyoza e qualquer prato que precisa de calor." },

  { id: "shichimi-togarashi", name: "Shichimi Togarashi", category: "Molhos & Temperos", image: "shichimi-togarashi",
    ingredients: ["3 colheres de pimenta vermelha moída", "1 colher de casca de tangerina seca", "1 colher de gergelim", "1/2 colher de sansho (pimenta japonesa)", "1/2 colher de semente de papoula", "1/2 colher de nori triturado", "1/2 colher de gengibre em pó"],
    steps: ["Triture a pimenta vermelha ao grau desejado.", "Rale a casca de tangerina seca.", "Misture todos os 7 ingredientes.", "Ajuste as proporções ao seu gosto.", "Armazene em recipiente hermético.", "Use sobre udon, soba, yakitori e ramen."],
    difficulty: "Fácil", time: "10 min",
    description: "Blend de 7 especiarias japonesas criado no séc. XVII em Tóquio. Cada loja tem sua fórmula secreta." },

  // ============ DONBURI & ARROZ ============
  { id: "unadon", name: "Unadon (Unagi Don)", category: "Donburi & Arroz", image: "unadon",
    ingredients: ["1 filé de unagi (enguia)", "Arroz japonês", "Tare de unagi (shoyu, mirin, açúcar, sakê)", "Sansho em pó", "Nori picado"],
    steps: ["Cozinhe o arroz japonês.", "Prepare o tare: shoyu, mirin, açúcar e sakê reduzidos.", "Grelhe o unagi pincelando tare várias vezes.", "Coloque arroz na tigela.", "Posicione o unagi grelhado por cima.", "Finalize com sansho e nori."],
    difficulty: "Avançado", time: "40 min",
    description: "Enguia grelhada com tare sobre arroz. Prato de força consumido no dia mais quente do verão japonês." },

  { id: "tendon", name: "Tendon", category: "Donburi & Arroz", image: "tendon",
    ingredients: ["Camarões grandes", "Berinjela", "Batata-doce", "Shiso", "Massa de tempurá", "Arroz japonês", "Tentsuyu (dashi, shoyu, mirin)"],
    steps: ["Prepare o tentsuyu concentrado.", "Frite tempurás variados.", "Coloque arroz na tigela.", "Mergulhe brevemente cada tempurá no tentsuyu.", "Arrume sobre o arroz.", "Regue com mais tentsuyu."],
    difficulty: "Médio", time: "35 min",
    description: "Tempurá sobre arroz com molho tentsuyu. A combinação de crocância e molho é viciante." },

  { id: "chirashi", name: "Chirashi Sushi", category: "Donburi & Arroz", image: "chirashi",
    ingredients: ["Arroz de sushi temperado", "Salmão fresco", "Atum fresco", "Camarão cozido", "Ikura (ovas de salmão)", "Tamagoyaki", "Pepino", "Nori picado"],
    steps: ["Prepare o arroz de sushi temperado.", "Corte os peixes em fatias.", "Coloque o arroz na tigela.", "Distribua os peixes e frutos do mar por cima.", "Adicione tamagoyaki, pepino e ikura.", "Decore com nori e gergelim."],
    difficulty: "Médio", time: "40 min",
    description: "Sushi 'espalhado' — todos os ingredientes sobre arroz. Popular em celebrações como Hinamatsuri." },

  { id: "omurice", name: "Omurice", category: "Donburi & Arroz", image: "omurice",
    ingredients: ["Arroz japonês", "Frango picado", "Cebola", "Ketchup", "3 ovos", "Manteiga", "Salsa"],
    steps: ["Refogue cebola e frango picados.", "Adicione arroz cozido e ketchup.", "Mexa bem até o arroz ficar vermelho.", "Bata os ovos e faça um omelete macio.", "Coloque o arroz no prato.", "Cubra com o omelete e regue com ketchup."],
    difficulty: "Médio", time: "25 min",
    description: "Arroz com ketchup coberto por omelete cremoso. Comfort food japonês inspirado na culinária ocidental." },

  { id: "chahan", name: "Chahan (Arroz Frito)", category: "Donburi & Arroz", image: "chahan",
    ingredients: ["Arroz japonês (do dia anterior)", "2 ovos", "Chashu ou presunto picado", "Cebolinha", "Shoyu", "Sal e pimenta", "Óleo de gergelim"],
    steps: ["Aqueça wok ou frigideira em fogo alto.", "Adicione óleo e ovos batidos, mexa rapidamente.", "Adicione o arroz frio e mexa vigorosamente.", "Junte chashu picado.", "Tempere com shoyu e sal.", "Finalize com cebolinha e óleo de gergelim."],
    difficulty: "Fácil", time: "15 min",
    description: "Arroz frito japonês — simples, rápido e delicioso. O segredo é o fogo alto e arroz do dia anterior." },

  { id: "ochazuke", name: "Ochazuke", category: "Donburi & Arroz", image: "ochazuke",
    ingredients: ["Arroz japonês", "Chá verde quente ou dashi", "Salmão grelhado desfiado", "Umeboshi", "Nori picado", "Wasabi", "Gergelim", "Arare (bolinhas de arroz)"],
    steps: ["Coloque arroz na tigela.", "Adicione os toppings: salmão, umeboshi, nori.", "Polvilhe gergelim e arare.", "Despeje chá verde quente ou dashi por cima.", "Adicione um pouco de wasabi.", "Coma imediatamente enquanto quente."],
    difficulty: "Fácil", time: "10 min",
    description: "Arroz com chá verde — o comfort food definitivo japonês. Perfeito para quando está doente ou com ressaca." },

  { id: "tamago-kake-gohan", name: "Tamago Kake Gohan (TKG)", category: "Donburi & Arroz", image: "tamago-kake-gohan",
    ingredients: ["Arroz japonês quente", "1 ovo cru fresco", "Shoyu", "Furikake (opcional)", "Cebolinha (opcional)"],
    steps: ["Sirva arroz bem quente na tigela.", "Quebre o ovo cru sobre o arroz.", "Adicione shoyu a gosto.", "Mexa vigorosamente até cremoso.", "Polvilhe furikake ou cebolinha.", "Coma imediatamente."],
    difficulty: "Fácil", time: "5 min",
    description: "Café da manhã japonês mais simples: ovo cru no arroz quente. Parece básico, é transformador." },

  { id: "hayashi-rice", name: "Hayashi Rice", category: "Donburi & Arroz", image: "hayashi-rice",
    ingredients: ["300g de carne bovina fatiada", "1 cebola grande", "Cogumelos", "Molho demi-glace", "Vinho tinto", "Manteiga", "Arroz japonês", "Salsa"],
    steps: ["Refogue cebola em manteiga até caramelizar.", "Adicione carne e sele rapidamente.", "Junte cogumelos e cozinhe.", "Adicione vinho tinto e reduza.", "Misture o molho demi-glace e cozinhe por 20 min.", "Sirva ao lado do arroz."],
    difficulty: "Médio", time: "40 min",
    description: "Ensopado de carne com molho demi-glace sobre arroz. Yoshoku (culinária ocidental japonesa) no seu melhor." },

  { id: "kare-raisu", name: "Curry Japonês (Kare Raisu)", category: "Donburi & Arroz", image: "kare-raisu",
    ingredients: ["Carne bovina ou frango", "Batata", "Cenoura", "Cebola", "Roux de curry japonês", "Arroz japonês", "Fukujinzuke (conserva vermelha)"],
    steps: ["Corte carne e vegetais em pedaços.", "Refogue cebola até dourar.", "Adicione carne e sele.", "Junte batata, cenoura e água.", "Cozinhe até os vegetais ficarem macios.", "Desligue o fogo, adicione o roux e mexa até dissolver. Sirva com arroz."],
    difficulty: "Fácil", time: "45 min",
    description: "O prato mais popular do Japão. Curry japonês é mais suave e doce que o indiano — crianças adoram." },

  // ============ ACOMPANHAMENTOS ============
  { id: "tamagoyaki", name: "Tamagoyaki", category: "Acompanhamentos", image: "tamagoyaki",
    ingredients: ["4 ovos", "2 colheres de dashi", "1 colher de mirin", "1 colher de açúcar", "1/2 colher de shoyu", "Óleo"],
    steps: ["Misture ovos, dashi, mirin, açúcar e shoyu.", "Aqueça frigideira retangular (tamagoyaki-ki).", "Unte com óleo.", "Despeje uma camada fina de ovo e enrole.", "Repita: nova camada, enrolar sobre a anterior.", "Continue até acabar a mistura. Modele e corte."],
    difficulty: "Médio", time: "15 min",
    description: "Omelete enrolada em camadas, ligeiramente doce. Presente em todo bento box e sushi-ya." },

  { id: "tsukemono", name: "Tsukemono (Conservas)", category: "Acompanhamentos", image: "tsukemono",
    ingredients: ["Pepino japonês", "Daikon", "Nabo", "Cenoura", "Sal", "Vinagre de arroz", "Kombu"],
    steps: ["Corte os vegetais em fatias finas ou palitos.", "Misture com sal e deixe 30 min.", "Esprema o excesso de água.", "Tempere com vinagre e kombu.", "Refrigere por pelo menos 2 horas.", "Sirva como acompanhamento."],
    difficulty: "Fácil", time: "15 min + 2h descanso",
    description: "Conservas japonesas — presentes em toda refeição. Cada região tem suas especialidades." },

  { id: "kinpira-gobo", name: "Kinpira Gobō", category: "Acompanhamentos", image: "kinpira-gobo",
    ingredients: ["1 raiz de gobō (bardana)", "1 cenoura", "Shoyu", "Mirin", "Açúcar", "Óleo de gergelim", "Gergelim torrado", "Shichimi togarashi"],
    steps: ["Corte gobō e cenoura em tiras finas (julienne).", "Deixe o gobō de molho em água com vinagre.", "Salteie em óleo de gergelim em fogo alto.", "Adicione shoyu, mirin e açúcar.", "Cozinhe até o líquido evaporar.", "Finalize com gergelim e shichimi."],
    difficulty: "Fácil", time: "20 min",
    description: "Raiz de bardana e cenoura refogadas. Prato caseiro japonês por excelência — crocante e saboroso." },

  { id: "hijiki-nimono", name: "Hijiki Nimono", category: "Acompanhamentos", image: "hijiki-nimono",
    ingredients: ["30g de hijiki seco", "1/2 cenoura", "Aburaage (tofu frito)", "Edamame", "Dashi", "Shoyu", "Mirin", "Açúcar"],
    steps: ["Hidrate o hijiki por 30 minutos.", "Corte cenoura e aburaage em tiras.", "Refogue hijiki e cenoura.", "Adicione dashi, shoyu, mirin e açúcar.", "Cozinhe em fogo baixo por 15 min.", "Junte edamame e sirva."],
    difficulty: "Fácil", time: "45 min",
    description: "Alga hijiki cozida com legumes. Rico em ferro e cálcio — um clássico da alimentação saudável japonesa." },

  { id: "nasu-dengaku", name: "Nasu Dengaku", category: "Acompanhamentos", image: "nasu-dengaku",
    ingredients: ["2 berinjelas japonesas", "3 colheres de missô branco", "2 colheres de mirin", "1 colher de açúcar", "1 colher de sakê", "Gergelim", "Óleo"],
    steps: ["Corte as berinjelas ao meio no comprido.", "Faça cortes em grade na polpa.", "Frite ou grelhe até dourar e amolecer.", "Misture missô, mirin, açúcar e sakê.", "Espalhe a pasta de missô sobre as berinjelas.", "Gratine e polvilhe gergelim."],
    difficulty: "Fácil", time: "20 min",
    description: "Berinjela grelhada com glace de missô doce. Simples e sofisticado ao mesmo tempo." },

  { id: "nikujaga", name: "Nikujaga", category: "Acompanhamentos", image: "nikujaga",
    ingredients: ["300g de carne bovina fatiada", "3 batatas", "1 cebola", "1 cenoura", "Shirataki (macarrão konjac)", "Dashi", "Shoyu", "Mirin", "Açúcar"],
    steps: ["Corte batatas, cenoura e cebola.", "Refogue a carne rapidamente.", "Adicione cebola e refogue.", "Junte batata, cenoura e shirataki.", "Adicione dashi, shoyu, mirin e açúcar.", "Cozinhe em fogo baixo por 20 min até tudo ficar macio."],
    difficulty: "Fácil", time: "35 min",
    description: "Ensopado de carne e batata — o 'comfort food da mamãe japonesa'. Todo japonês tem saudade do nikujaga da mãe." },

  { id: "chawanmushi", name: "Chawanmushi", category: "Acompanhamentos", image: "chawanmushi",
    ingredients: ["3 ovos", "400ml de dashi frio", "1 colher de shoyu claro", "1 colher de mirin", "Camarão", "Cogumelo shiitake", "Kamaboko", "Mitsuba"],
    steps: ["Misture ovos, dashi, shoyu e mirin sem fazer espuma.", "Coe a mistura.", "Distribua camarão, shiitake e kamaboko nos copos.", "Despeje a mistura de ovo.", "Cozinhe no vapor por 15 min em fogo baixo.", "Decore com mitsuba e sirva."],
    difficulty: "Médio", time: "30 min",
    description: "Flan salgado japonês cozido no vapor. Textura sedosa que derrete na boca." },

  { id: "korokke", name: "Korokke", category: "Acompanhamentos", image: "korokke",
    ingredients: ["3 batatas grandes", "150g de carne moída", "1 cebola picada", "Sal e pimenta", "Farinha de trigo", "Ovos batidos", "Panko"],
    steps: ["Cozinhe as batatas e amasse.", "Refogue carne e cebola, tempere.", "Misture com o purê de batata.", "Modele em formato oval.", "Passe na farinha, ovo e panko.", "Frite a 170°C até dourar."],
    difficulty: "Médio", time: "40 min",
    description: "Croquete japonês derivado do francês. Encontrado em todo konbini e padaria japonesa." },

  { id: "natto", name: "Nattō", category: "Acompanhamentos", image: "natto",
    ingredients: ["1 pacote de nattō (soja fermentada)", "Shoyu (sachê incluso)", "Karashi (mostarda japonesa)", "Cebolinha picada", "Arroz japonês quente"],
    steps: ["Abra o pacote de nattō.", "Adicione shoyu e karashi.", "Mexa vigorosamente por 30 segundos até formar fios.", "Quanto mais mexer, mais saboroso fica.", "Sirva sobre arroz quente.", "Adicione cebolinha por cima."],
    difficulty: "Fácil", time: "3 min",
    description: "Soja fermentada com textura pegajosa. Amado ou odiado — é o superalimento do café da manhã japonês." },

  { id: "hiyayakko", name: "Hiyayakko (Tofu Gelado)", category: "Acompanhamentos", image: "hiyayakko",
    ingredients: ["1 bloco de tofu sedoso", "Gengibre ralado", "Katsuobushi", "Cebolinha picada", "Shoyu", "Nori picado"],
    steps: ["Retire o tofu da embalagem com cuidado.", "Coloque em um prato frio.", "Rale gengibre fresco por cima.", "Adicione cebolinha e katsuobushi.", "Polvilhe nori.", "Regue com shoyu na hora de comer."],
    difficulty: "Fácil", time: "5 min",
    description: "Tofu gelado com toppings simples — o acompanhamento mais refrescante do verão japonês." },

  { id: "ohitashi", name: "Ohitashi de Espinafre", category: "Acompanhamentos", image: "ohitashi",
    ingredients: ["1 maço de espinafre", "Dashi", "Shoyu", "Mirin", "Katsuobushi", "Gergelim"],
    steps: ["Ferva água com sal.", "Cozinhe o espinafre por 30 segundos.", "Transfira para água gelada.", "Esprema bem e corte em pedaços de 3cm.", "Misture dashi, shoyu e mirin para o molho.", "Coloque o espinafre no molho e cubra com katsuobushi."],
    difficulty: "Fácil", time: "10 min",
    description: "Espinafre escalfado com dashi e katsuobushi. Simplicidade e elegância japonesa." },

  { id: "nimono-kabocha", name: "Nimono de Kabocha", category: "Acompanhamentos", image: "nimono-kabocha",
    ingredients: ["1/4 de kabocha (abóbora japonesa)", "200ml de dashi", "2 colheres de shoyu", "2 colheres de mirin", "1 colher de açúcar"],
    steps: ["Corte a kabocha em pedaços de 3cm.", "Coloque na panela com a casca para baixo.", "Adicione dashi, shoyu, mirin e açúcar.", "Cubra com otoshibuta (tampa flutuante).", "Cozinhe em fogo baixo por 15-20 min.", "A kabocha está pronta quando macia mas não desmanchando."],
    difficulty: "Fácil", time: "25 min",
    description: "Abóbora japonesa cozida em dashi doce. Textura aveludada e sabor reconfortante." },

  // ============ IZAKAYA & PETISCOS ============
  { id: "kushikatsu", name: "Kushikatsu", category: "Izakaya & Petiscos", image: "kushikatsu",
    ingredients: ["Carne bovina", "Camarão", "Cebola", "Aspargo", "Queijo", "Farinha", "Ovo", "Panko fino", "Molho kushikatsu"],
    steps: ["Corte ingredientes em pedaços de 2-3cm.", "Espete em palitos de bambu.", "Passe na farinha, ovo e panko fino.", "Frite em óleo a 180°C por 2-3 min.", "Escorra e sirva imediatamente.", "Mergulhe no molho uma única vez (regra de Osaka!)."],
    difficulty: "Médio", time: "30 min",
    description: "Espetinhos fritos de Osaka. Regra sagrada: NUNCA mergulhe duas vezes no molho compartilhado!" },

  { id: "motsu-nikomi", name: "Motsu Nikomi", category: "Izakaya & Petiscos", image: "motsu-nikomi",
    ingredients: ["500g de motsu (miúdos bovinos)", "Daikon", "Cenoura", "Konnyaku", "Missô", "Gengibre", "Cebolinha", "Shichimi togarashi"],
    steps: ["Limpe bem o motsu e ferva 2 vezes para remover impurezas.", "Corte vegetais em pedaços.", "Cozinhe motsu e vegetais em dashi por 1 hora.", "Adicione missô e gengibre.", "Cozinhe mais 30 min em fogo baixo.", "Sirva com cebolinha e shichimi."],
    difficulty: "Médio", time: "2 horas",
    description: "Ensopado de miúdos em missô — prato rústico de izakaya que aquece a alma no inverno." },

  { id: "tebasaki", name: "Tebasaki", category: "Izakaya & Petiscos", image: "tebasaki",
    ingredients: ["1kg de asinhas de frango", "Shoyu", "Mirin", "Açúcar", "Alho ralado", "Gengibre", "Pimenta preta", "Gergelim"],
    steps: ["Tempere as asas com sal e pimenta.", "Frite em óleo a 170°C até dourar.", "Frite novamente a 180°C para crocância extra.", "Prepare o molho: shoyu, mirin, açúcar, alho.", "Misture as asas fritas no molho.", "Polvilhe gergelim e pimenta."],
    difficulty: "Fácil", time: "30 min",
    description: "Asinhas de frango estilo Nagoya — fritas duas vezes e glaceadas. Perfeitas com cerveja gelada." },

  { id: "tataki-maguro", name: "Tataki de Atum", category: "Izakaya & Petiscos", image: "tataki-maguro",
    ingredients: ["300g de atum fresco (bloco)", "Shoyu", "Suco de limão ou ponzu", "Gengibre ralado", "Alho fatiado", "Cebolinha", "Gergelim", "Shiso"],
    steps: ["Sele o atum em frigideira muito quente por 30s cada lado.", "Transfira para água gelada para parar o cozimento.", "Seque e fatie em fatias de 5mm.", "Disponha as fatias no prato.", "Regue com ponzu ou shoyu com limão.", "Cubra com alho, gengibre, cebolinha e gergelim."],
    difficulty: "Fácil", time: "15 min",
    description: "Atum selado por fora e cru por dentro. Técnica tataki realça o sabor sem cozinhar completamente." },

  { id: "mentaiko", name: "Mentaiko", category: "Izakaya & Petiscos", image: "mentaiko",
    ingredients: ["Ovas de bacalhau (tarako)", "Pimenta vermelha em pó", "Sakê", "Mirin", "Dashi", "Arroz japonês", "Nori"],
    steps: ["Tempere as ovas com pimenta, sakê, mirin e dashi.", "Marine por 24-48 horas na geladeira.", "Retire da marinada.", "Grelhe levemente (opcional) ou sirva cru.", "Coloque sobre arroz quente.", "Envolva com nori e coma."],
    difficulty: "Médio", time: "15 min + 24h marinada",
    description: "Ovas de bacalhau picantes de Fukuoka. Sabor intenso do mar que explode na boca." },

  { id: "yaki-onigiri", name: "Yaki Onigiri", category: "Izakaya & Petiscos", image: "yaki-onigiri",
    ingredients: ["Arroz japonês", "Shoyu", "Mirin", "Óleo de gergelim", "Missô (opcional)"],
    steps: ["Molde onigiri triangulares bem compactos.", "Misture shoyu com mirin para o glaze.", "Aqueça frigideira ou grelha.", "Grelhe o onigiri sem mexer por 3 min cada lado.", "Pincele com glaze de shoyu.", "Grelhe mais 1 min de cada lado até caramelizar."],
    difficulty: "Fácil", time: "20 min",
    description: "Onigiri grelhado com crosta de shoyu caramelizado. Sabor defumado irresistível." },

  { id: "dashimaki-tamago", name: "Dashimaki Tamago", category: "Izakaya & Petiscos", image: "dashimaki-tamago",
    ingredients: ["4 ovos", "80ml de dashi", "1 colher de shoyu claro", "1 colher de mirin", "Daikon ralado", "Óleo"],
    steps: ["Misture ovos, dashi, shoyu e mirin sem fazer espuma.", "Coe a mistura.", "Aqueça a frigideira retangular com óleo.", "Despeje camada fina e enrole quando semicozido.", "Empurre para o lado e adicione nova camada.", "Repita até acabar. O interior deve ficar úmido e macio."],
    difficulty: "Avançado", time: "15 min",
    description: "Versão de izakaya do tamagoyaki, com mais dashi — tão macio que quase desmancha. Teste de habilidade do chef." },
  ...dishesBatch2,
  ...dishesBatch3,
  ...dishesBatch4,
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
