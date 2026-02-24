import { Dish } from "./dishes";

export const dishesBatch4: Dish[] = [
  // ============ PRATOS TRADICIONAIS (8) ============
  {
    id: "temari-sushi", name: "Temari Sushi (Sushi Bolinha)", category: "Pratos Tradicionais", image: "temari-sushi",
    ingredients: ["Arroz japonês temperado", "Salmão fatiado fino", "Atum fatiado fino", "Camarão cozido", "Pepino fino", "Shiso", "Gergelim"],
    steps: ["Prepare o arroz de sushi temperado.", "Corte os peixes em fatias finas de 3-4cm.", "Coloque uma fatia de peixe no centro de um filme plástico.", "Adicione uma bolinha de arroz (15g) por cima.", "Torça o filme formando uma esfera perfeita.", "Decore com gergelim ou shiso e sirva."],
    difficulty: "Fácil", time: "30 min", description: "Sushi em formato de bolinha colorida, perfeito para festas e hanami. O nome 'temari' vem de uma bola tradicional de tecido."
  },
  {
    id: "saba-sushi", name: "Saba Sushi (Sushi de Cavala)", category: "Pratos Tradicionais", image: "saba-sushi",
    ingredients: ["2 filés de saba (cavala) fresca", "Arroz japonês temperado", "Sal grosso", "Vinagre de arroz", "Kombu", "Gengibre em conserva"],
    steps: ["Cure a cavala em sal grosso por 3 horas.", "Lave e marine em vinagre de arroz por 1 hora.", "Remova espinhas com pinça.", "Coloque arroz temperado sobre o filé.", "Envolva em filme plástico e molde em formato cilíndrico.", "Descanse 30 minutos, corte e sirva."],
    difficulty: "Avançado", time: "5h", description: "Sushi prensado de cavala curada, uma das formas mais antigas de sushi do Japão. Especialidade de Kyoto (sabazushi)."
  },
  {
    id: "tekka-maki", name: "Tekka Maki (Maki de Atum)", category: "Pratos Tradicionais", image: "tekka-maki",
    ingredients: ["200g de atum fresco (sashimi grade)", "Arroz japonês temperado", "Nori", "Wasabi", "Gergelim"],
    steps: ["Corte o atum em tiras longas de 1cm de espessura.", "Coloque meia folha de nori na esteira.", "Espalhe arroz fina e uniformemente.", "Passe wasabi no centro e coloque a tira de atum.", "Enrole firmemente com a esteira.", "Corte em 6 pedaços com faca molhada."],
    difficulty: "Fácil", time: "20 min", description: "O hosomaki mais clássico do Japão. 'Tekka' significa ferro quente, referência ao vermelho intenso do atum."
  },
  {
    id: "chirashi-kyoto", name: "Chirashi Kyoto Style", category: "Pratos Tradicionais", image: "chirashi-kyoto",
    ingredients: ["Arroz de sushi", "Shiitake cozido", "Renkon (lotus root) cozido", "Takenoko cozido", "Kinshi tamago (ovo em tiras)", "Kamaboko", "Kinu-saya (ervilha torta)", "Nori"],
    steps: ["Prepare arroz de sushi.", "Cozinhe shiitake, renkon e takenoko em dashi doce.", "Misture os vegetais cozidos com o arroz.", "Prepare kinshi tamago (omelete fino em tiras).", "Decore com tiras de ovo, kamaboko e ervilha.", "Sirva em bandeja lacada."],
    difficulty: "Médio", time: "1h", description: "Versão de Kyoto do chirashi, com vegetais cozidos em vez de peixe cru. Servido em festivais e celebrações."
  },
  {
    id: "bara-chirashi", name: "Bara Chirashi", category: "Pratos Tradicionais", image: "bara-chirashi",
    ingredients: ["Arroz de sushi", "Salmão em cubos", "Atum em cubos", "Ikura", "Camarão", "Pepino em cubos", "Tamagoyaki em cubos", "Nori picado"],
    steps: ["Prepare arroz de sushi e coloque na tigela.", "Corte todos os peixes e tamagoyaki em cubos de 1cm.", "Distribua os cubos sobre o arroz aleatoriamente.", "Adicione ikura por cima.", "Polvilhe nori picado.", "Sirva com shoyu e wasabi ao lado."],
    difficulty: "Fácil", time: "20 min", description: "Chirashi 'espalhado' com peixes em cubos misturados ao arroz. Versão casual e colorida, popular em mercados de peixe."
  },
  {
    id: "ika-somen", name: "Ika Somen (Lula como Somen)", category: "Pratos Tradicionais", image: "ika-somen",
    ingredients: ["1 lula fresca (sashimi grade)", "Shoyu", "Wasabi", "Gengibre ralado", "Shiso", "Negi picado"],
    steps: ["Limpe a lula e remova a pele.", "Abra o corpo da lula em uma folha plana.", "Corte em tiras finíssimas como macarrão somen.", "Disponha em prato como se fosse macarrão.", "Sirva com shoyu, wasabi e gengibre.", "Misture como se fosse somen e saboreie."],
    difficulty: "Avançado", time: "20 min", description: "Lula crua cortada em fios finíssimos imitando macarrão somen. A técnica de corte é impressionante."
  },
  {
    id: "uzaku", name: "Uzaku (Enguia com Pepino)", category: "Pratos Tradicionais", image: "uzaku",
    ingredients: ["200g de unagi grelhada", "2 pepinos japoneses", "Sanbaizu (vinagre, shoyu, açúcar)", "Gengibre em conserva", "Gergelim"],
    steps: ["Corte o pepino em fatias finas e salgue.", "Esprema o excesso de água.", "Corte a unagi em tiras.", "Misture pepino e unagi.", "Tempere com sanbaizu gelado.", "Sirva frio com gergelim e gengibre."],
    difficulty: "Fácil", time: "15 min", description: "Entrada refrescante de verão: unagi grelhada com pepino em vinagrete. Combina o umami da enguia com o frescor do pepino."
  },
  {
    id: "kabu-sushi", name: "Kabura Sushi (Sushi de Nabo)", category: "Pratos Tradicionais", image: "kabu-sushi",
    ingredients: ["Nabo grande (kabu)", "Buri (yellowtail) curado", "Arroz koji fermentado", "Cenoura em tiras", "Pimenta yuzu", "Sal"],
    steps: ["Fatie o nabo fino e cure em sal.", "Cure o buri em sal por 1 dia.", "Prepare arroz fermentado com koji.", "Monte camadas: nabo, buri, arroz fermentado.", "Prense e fermente por 3-5 dias.", "Corte em pedaços e sirva."],
    difficulty: "Avançado", time: "5 dias", description: "Sushi fermentado de Kanazawa (narezushi). Uma das formas mais antigas e nobres de preparar sushi no Japão."
  },

  // ============ MASSAS JAPONESAS (6) ============
  {
    id: "yaki-udon", name: "Yaki Udon (Udon Frito)", category: "Massas Japonesas", image: "yaki-udon",
    ingredients: ["200g de udon fresco", "Carne de porco fatiada", "Repolho picado", "Cenoura em tiras", "Moyashi", "Shoyu", "Molho ostra", "Katsuobushi"],
    steps: ["Cozinhe o udon e escorra.", "Frite a carne em fogo alto.", "Adicione vegetais e salteie.", "Junte o udon e tempere com shoyu e molho ostra.", "Mexa em fogo alto até tudo estar integrado.", "Sirva com katsuobushi dançando por cima."],
    difficulty: "Fácil", time: "15 min", description: "Udon frito no estilo de Kitakyushu. Mais grosso e chewy que yakisoba, com sabor intenso de shoyu."
  },
  {
    id: "tori-nanban-udon", name: "Tori Nanban Udon", category: "Massas Japonesas", image: "tori-nanban-udon",
    ingredients: ["200g de udon", "Coxa de frango", "Negi grosso", "Caldo dashi com shoyu e mirin", "Shichimi togarashi", "Yuzu (casca)"],
    steps: ["Grelhe o frango e fatie em pedaços grossos.", "Grelhe o negi até ficar marcado.", "Prepare o caldo dashi temperado.", "Cozinhe o udon e coloque na tigela.", "Despeje caldo quente, adicione frango e negi.", "Finalize com shichimi e casca de yuzu."],
    difficulty: "Fácil", time: "25 min", description: "Udon quente com frango grelhado e negi caramelizado. Prato de inverno reconfortante com toque cítrico de yuzu."
  },
  {
    id: "hoto", name: "Hōtō (Macarrão Plano de Yamanashi)", category: "Massas Japonesas", image: "hoto",
    ingredients: ["200g de macarrão hōtō (largo e plano)", "Kabocha (abóbora)", "Daikon", "Cenoura", "Hakusai", "Miso", "Dashi"],
    steps: ["Corte vegetais em pedaços grandes.", "Cozinhe em dashi até ficarem macios.", "Adicione o macarrão hōtō cru diretamente no caldo.", "Cozinhe por 10-15 minutos.", "Dissolva miso no caldo.", "Sirva na panela — é um prato rústico."],
    difficulty: "Fácil", time: "40 min", description: "Macarrão plano e largo cozido em sopa de miso com abóbora. Prato regional de Yamanashi, ao pé do Monte Fuji."
  },
  {
    id: "niku-soba", name: "Niku Soba (Soba com Carne)", category: "Massas Japonesas", image: "niku-soba",
    ingredients: ["200g de soba", "200g de carne bovina fatiada fina", "Negi", "Caldo tsuyu quente", "Shichimi", "Gengibre em conserva"],
    steps: ["Refogue a carne com shoyu, mirin e açúcar.", "Cozinhe a soba e escorra.", "Prepare caldo tsuyu quente.", "Coloque soba na tigela com caldo.", "Adicione a carne refogada por cima.", "Finalize com negi e shichimi."],
    difficulty: "Fácil", time: "20 min", description: "Soba quente coberta com carne bovina doce. Prato de inverno que combina o trigo sarraceno com umami da carne."
  },
  {
    id: "shoyu-ramen", name: "Shoyu Ramen Caseiro", category: "Massas Japonesas", image: "shoyu-ramen",
    ingredients: ["200g de ramen fresco", "Caldo de frango caseiro", "Tare de shoyu", "Chashu fatiado", "Nori", "Negi", "Ovo marinado", "Menma"],
    steps: ["Prepare caldo de frango (3-4h).", "Faça o tare: shoyu, mirin, sake, alho.", "Coloque tare no fundo da tigela.", "Despeje o caldo quente e mexa.", "Adicione ramen cozido al dente.", "Monte toppings: chashu, ovo, nori, negi, menma."],
    difficulty: "Avançado", time: "4h", description: "Ramen shoyu feito do zero em casa. O caldo claro e aromático é a base mais antiga do ramen japonês."
  },
  {
    id: "miso-nikomi", name: "Miso Nikomi Soba", category: "Massas Japonesas", image: "miso-nikomi",
    ingredients: ["200g de soba", "Caldo dashi", "Miso hatcho", "Frango", "Hakusai", "Shiitake", "Ovo", "Negi"],
    steps: ["Dissolva miso hatcho em dashi.", "Adicione frango cortado e cozinhe.", "Acrescente hakusai e shiitake.", "Adicione soba diretamente no caldo.", "Quebre o ovo por cima.", "Sirva borbulhando no donabe."],
    difficulty: "Médio", time: "30 min", description: "Soba cozida em miso forte estilo Nagoya. Prato substancial de inverno servido em panela de barro."
  },

  // ============ PRATOS QUENTES (8) ============
  {
    id: "hamburg-steak", name: "Hamburg Steak (Hambāgu)", category: "Pratos Quentes", image: "hamburg-steak",
    ingredients: ["300g de carne moída mista", "1 cebola picada refogada", "Panko", "Ovo", "Leite", "Noz-moscada", "Molho demi-glace", "Arroz"],
    steps: ["Refogue cebola até translúcida e esfrie.", "Misture carne, cebola, panko, ovo, leite e temperos.", "Sove a mistura até ficar homogênea.", "Molde em formato oval e faça cavidade no centro.", "Sele em fogo alto dos dois lados.", "Cozinhe coberto em fogo baixo. Sirva com molho demi-glace."],
    difficulty: "Médio", time: "35 min", description: "O hambúrguer japonês: oval, servido com molho demi-glace e arroz. Comfort food yoshoku amado por todas as idades."
  },
  {
    id: "ebi-fry", name: "Ebi Fry (Camarão Empanado)", category: "Pratos Quentes", image: "ebi-fry",
    ingredients: ["8 camarões grandes", "Farinha de trigo", "Ovos batidos", "Panko", "Repolho fatiado", "Molho tártaro", "Limão"],
    steps: ["Limpe os camarões e faça cortes na barriga para não enrolar.", "Estique-os pressionando suavemente.", "Passe na farinha, ovo e panko.", "Frite a 170°C por 3-4 minutos.", "Escorra em grade.", "Sirva com repolho, tártaro e limão."],
    difficulty: "Fácil", time: "25 min", description: "Camarão empanado em panko crocante — um dos pratos yoshoku mais populares do Japão."
  },
  {
    id: "hire-katsu", name: "Hire Katsu (Lombo Empanado)", category: "Pratos Quentes", image: "hire-katsu",
    ingredients: ["400g de filé mignon suíno", "Farinha", "Ovos", "Panko", "Repolho fatiado", "Molho tonkatsu", "Karashi"],
    steps: ["Corte o lombo em medalhões de 3cm.", "Amasse levemente com martelo.", "Empane: farinha, ovo, panko.", "Frite a 170°C por 5-6 minutos.", "Escorra e corte em tiras.", "Sirva com repolho, molho e karashi."],
    difficulty: "Médio", time: "25 min", description: "Versão mais magra do tonkatsu, usando lombo (hire). A carne mais macia combina com a crocância do panko."
  },
  {
    id: "kaki-fry", name: "Kaki Fry (Ostras Empanadas)", category: "Pratos Quentes", image: "kaki-fry",
    ingredients: ["12 ostras frescas", "Farinha", "Ovos", "Panko", "Repolho fatiado", "Molho tártaro", "Limão"],
    steps: ["Limpe as ostras e seque bem.", "Passe na farinha, ovo e panko.", "Frite a 180°C por 2-3 minutos.", "Não cozinhe demais — o interior deve ser cremoso.", "Escorra em grade.", "Sirva com tártaro e limão."],
    difficulty: "Médio", time: "20 min", description: "Ostras frescas empanadas em panko — iguaria de outono/inverno. Hiroshima é famosa por suas ostras."
  },
  {
    id: "shogayaki", name: "Shogayaki (Porco com Gengibre)", category: "Pratos Quentes", image: "shogayaki",
    ingredients: ["400g de lombo suíno fatiado fino", "Gengibre fresco ralado (3cm)", "Shoyu", "Mirin", "Sake", "Cebola fatiada", "Repolho fatiado", "Arroz"],
    steps: ["Marine a carne em shoyu, mirin, sake e gengibre.", "Aqueça a frigideira em fogo alto.", "Grelhe a carne rapidamente de cada lado.", "Adicione a cebola e o restante da marinada.", "Cozinhe até o molho caramelizar.", "Sirva sobre arroz com repolho fatiado."],
    difficulty: "Fácil", time: "20 min", description: "Porco grelhado com gengibre é o teishoku (set meal) mais pedido no Japão. Rápido, barato e absurdamente bom."
  },
  {
    id: "mabo-dofu", name: "Mabō Dōfu (Mapo Tofu Japonês)", category: "Pratos Quentes", image: "mabo-dofu",
    ingredients: ["1 bloco de tofu macio", "150g de carne moída", "Doubanjiang", "Shoyu", "Sake", "Caldo de frango", "Amido", "Negi", "Sansho"],
    steps: ["Corte tofu em cubos de 2cm e escalde em água quente.", "Refogue carne moída com doubanjiang e alho.", "Adicione caldo de frango, shoyu e sake.", "Acrescente o tofu e cozinhe 5 minutos.", "Engrosse com amido.", "Finalize com negi e sansho."],
    difficulty: "Fácil", time: "20 min", description: "Versão japonesa do mapo tofu chinês — menos picante, mais suave. Adaptado por Chen Kenmin para o paladar japonês."
  },
  {
    id: "subuta", name: "Subuta (Agridoce Japonês)", category: "Pratos Quentes", image: "subuta",
    ingredients: ["300g de lombo suíno", "Pimentão verde e vermelho", "Cebola", "Abacaxi", "Amido", "Ketchup", "Vinagre", "Açúcar", "Shoyu"],
    steps: ["Corte a carne em cubos e passe no amido.", "Frite a 170°C até dourar.", "Corte vegetais em pedaços grandes.", "Salteie os vegetais rapidamente.", "Prepare molho: ketchup, vinagre, açúcar, shoyu.", "Misture tudo com o molho. Sirva com arroz."],
    difficulty: "Médio", time: "30 min", description: "Sweet and sour pork estilo japonês — mais equilibrado e menos gorduroso que a versão chinesa."
  },
  {
    id: "chinjao-rosu", name: "Chinjao Rōsu (Carne com Pimentão)", category: "Pratos Quentes", image: "chinjao-rosu",
    ingredients: ["300g de carne bovina em tiras", "Pimentão verde", "Takenoko (broto de bambu)", "Shoyu", "Sake", "Ostra sauce", "Amido", "Óleo de gergelim"],
    steps: ["Corte tudo em tiras finas (julienne).", "Marine a carne com shoyu, sake e amido.", "Aqueça wok em fogo alto.", "Salteie a carne rapidamente e reserve.", "Salteie pimentão e takenoko.", "Junte tudo com ostra sauce e sirva."],
    difficulty: "Fácil", time: "15 min", description: "Carne com pimentão e bambu ao estilo chinês-japonês. Prato de chuka ryori (culinária chinesa adaptada) muito popular."
  },

  // ============ STREET FOOD (5) ============
  {
    id: "curry-pan", name: "Curry Pan (Pão de Curry Frito)", category: "Street Food", image: "curry-pan",
    ingredients: ["Massa de pão (farinha, fermento, leite)", "Curry japonês espesso (sobras)", "Panko", "Ovo", "Óleo para fritura"],
    steps: ["Prepare massa de pão e descanse 1h.", "Divida em porções de 60g.", "Abra discos e recheie com curry espesso.", "Feche e molde em formato oval.", "Passe no ovo e panko.", "Frite a 170°C até dourar. O interior deve ser quente e cremoso."],
    difficulty: "Médio", time: "2h", description: "Pão frito recheado com curry — inventado no Japão. Crocante por fora, curry quente por dentro. Best-seller de padarias."
  },
  {
    id: "melon-pan", name: "Melon Pan", category: "Street Food", image: "melon-pan",
    ingredients: ["Massa de pão (farinha, fermento, manteiga)", "Massa cookie (farinha, açúcar, manteiga, ovo)", "Açúcar cristal"],
    steps: ["Prepare massa de pão e descanse até dobrar.", "Prepare massa de cookie separadamente.", "Divida em porções e envolva pão com cookie.", "Faça marcações em grade na superfície.", "Polvilhe açúcar cristal.", "Asse a 180°C por 15 minutos."],
    difficulty: "Médio", time: "3h", description: "Pão com cobertura de cookie crocante em formato de melão. Não tem sabor de melão — o nome vem do visual!"
  },
  {
    id: "anpan", name: "Anpan (Pão de Anko)", category: "Street Food", image: "anpan",
    ingredients: ["Massa de pão doce", "Anko (pasta de feijão azuki)", "Gergelim preto", "Ovo para pincelar"],
    steps: ["Prepare massa de pão doce e descanse.", "Divida em porções de 60g.", "Abra e recheie com 30g de anko.", "Feche e molde em bola.", "Pincele com ovo e coloque gergelim no topo.", "Asse a 180°C por 12-15 minutos."],
    difficulty: "Fácil", time: "2h", description: "Pão recheado com pasta de feijão doce — criado em 1874 por Kimuraya. O pão que uniu a cultura japonesa e ocidental."
  },
  {
    id: "katsu-sando", name: "Katsu Sando (Sanduíche de Tonkatsu)", category: "Street Food", image: "katsu-sando",
    ingredients: ["Tonkatsu (costeleta empanada)", "Shokupan (pão de forma japonês)", "Repolho fatiado fino", "Molho tonkatsu", "Karashi (mostarda)"],
    steps: ["Prepare um tonkatsu crocante.", "Torre levemente o shokupan.", "Passe karashi em um lado, molho tonkatsu no outro.", "Coloque repolho e o tonkatsu.", "Feche e corte as bordas.", "Corte em triângulos e sirva."],
    difficulty: "Fácil", time: "15 min", description: "Sanduíche de tonkatsu em pão macio japonês — encontrado em konbinis e depachika (delis de departamento)."
  },
  {
    id: "onigirazu", name: "Onigirazu (Sanduíche de Arroz)", category: "Street Food", image: "onigirazu",
    ingredients: ["Arroz japonês", "Folha inteira de nori", "Spam ou presunto", "Ovo frito fino", "Alface", "Maionese"],
    steps: ["Coloque nori em losango sobre filme plástico.", "Espalhe arroz no centro formando quadrado.", "Adicione camadas: alface, ovo, spam, maionese.", "Cubra com mais arroz.", "Dobre o nori como envelope.", "Embrulhe em filme, descanse e corte ao meio."],
    difficulty: "Fácil", time: "15 min", description: "Sanduíche de arroz sem moldar — mais fácil que onigiri. Viralizou nas redes e é perfeito para bentôs criativos."
  },

  // ============ ENTRADAS (5) ============
  {
    id: "tofu-salad", name: "Tofu Salad", category: "Entradas", image: "tofu-salad",
    ingredients: ["1 bloco de tofu sedoso", "Mix de folhas verdes", "Tomate cereja", "Pepino", "Wafu dressing", "Katsuobushi", "Nori picado"],
    steps: ["Drene o tofu e corte em cubos grandes.", "Lave e seque as folhas verdes.", "Corte tomate e pepino.", "Monte a salada com folhas e vegetais.", "Coloque o tofu por cima.", "Regue com wafu dressing, katsuobushi e nori."],
    difficulty: "Fácil", time: "10 min", description: "Salada fresca com tofu sedoso e molho wafu. Entrada leve encontrada em todo restaurante japonês."
  },
  {
    id: "nasu-hasami", name: "Nasu Hasami Age (Berinjela Recheada)", category: "Entradas", image: "nasu-hasami",
    ingredients: ["3 berinjelas japonesas", "150g de carne moída", "Gengibre", "Negi", "Amido", "Shoyu", "Dashi"],
    steps: ["Corte berinjelas em fatias de 1cm (sem separar completamente).", "Misture carne moída com gengibre e negi.", "Recheie entre as fatias de berinjela.", "Passe no amido e frite.", "Prepare molho de dashi e shoyu.", "Sirva com molho por cima."],
    difficulty: "Médio", time: "30 min", description: "Berinjela em sanduíche recheada com carne, frita e servida em molho de dashi. Prato caseiro reconfortante."
  },
  {
    id: "agedashi-nasu", name: "Agedashi Nasu (Berinjela Frita em Dashi)", category: "Entradas", image: "agedashi-nasu",
    ingredients: ["3 berinjelas japonesas", "Amido de milho", "Óleo para fritura", "Dashi", "Shoyu", "Mirin", "Daikon ralado", "Gengibre", "Katsuobushi"],
    steps: ["Corte berinjelas em pedaços e faça cortes na pele.", "Passe no amido e frite a 180°C.", "Prepare molho: dashi + shoyu + mirin.", "Coloque berinjelas fritas na tigela.", "Regue com molho quente.", "Cubra com daikon, gengibre e katsuobushi."],
    difficulty: "Fácil", time: "20 min", description: "Versão de berinjela do famoso agedashi tofu. A berinjela absorve o caldo criando uma explosão de sabor."
  },
  {
    id: "uzura-tamago", name: "Uzura Tamago (Ovos de Codorna)", category: "Entradas", image: "uzura-tamago",
    ingredients: ["12 ovos de codorna", "Molho tsuyu", "Mirin", "Gergelim", "Nori picado"],
    steps: ["Cozinhe ovos de codorna por 2 minutos.", "Resfrie em água gelada e descasque.", "Prepare tsuyu com mirin.", "Marine os ovos por 2-4 horas.", "Espete 3 em cada palito.", "Sirva como aperitivo de izakaya."],
    difficulty: "Fácil", time: "15 min + marinada", description: "Ovos de codorna marinados em tsuyu — petisco de izakaya adorável e saboroso. Perfeitos como aperitivo."
  },
  {
    id: "age-dashi-renkon", name: "Renkon Manju (Bolinho de Lotus)", category: "Entradas", image: "age-dashi-renkon",
    ingredients: ["300g de renkon (raiz de lotus)", "Camarão picado", "Amido", "Sal", "Dashi", "Shoyu", "Mirin", "Gengibre"],
    steps: ["Rale o renkon grosseiramente.", "Misture com camarão picado e amido.", "Molde em bolinhas e frite a 170°C.", "Prepare molho: dashi + shoyu + mirin.", "Sirva com molho quente.", "Decore com gengibre ralado."],
    difficulty: "Médio", time: "30 min", description: "Bolinho de lotus ralado frito com camarão, servido em caldo quente. Textura exterior crocante, interior mochi-mochi."
  },

  // ============ SOPAS (4) ============
  {
    id: "sanpei-jiru", name: "Sanpei Jiru (Sopa de Salmão Hokkaido)", category: "Sopas", image: "sanpei-jiru",
    ingredients: ["300g de salmão em postas", "Batata", "Daikon", "Cenoura", "Negi", "Kombu", "Shoyu", "Sake"],
    steps: ["Corte salmão e vegetais em pedaços.", "Prepare caldo com kombu.", "Adicione batata, daikon e cenoura.", "Cozinhe até ficar macio.", "Adicione salmão e cozinhe 5 min.", "Tempere com shoyu e sake. Sirva com negi."],
    difficulty: "Fácil", time: "30 min", description: "Sopa de salmão dos Ainu de Hokkaido. Prato histórico dos indígenas do norte, usando ingredientes locais."
  },
  {
    id: "arajiru", name: "Arajiru (Sopa de Cabeça de Peixe)", category: "Sopas", image: "arajiru",
    ingredients: ["Cabeça e espinha de peixe (tai ou salmão)", "Daikon", "Tofu", "Negi", "Miso", "Gengibre", "Dashi"],
    steps: ["Escalde as partes do peixe e lave.", "Prepare dashi com as partes do peixe.", "Adicione daikon e cozinhe.", "Acrescente tofu em cubos.", "Dissolva miso no caldo.", "Sirva com negi e gengibre."],
    difficulty: "Fácil", time: "30 min", description: "Sopa nutritiva feita com partes 'descartadas' do peixe. Zero desperdício — filosofia mottainai japonesa em ação."
  },
  {
    id: "kayaku-gohan-jiru", name: "Kenchinjiru Vegano", category: "Sopas", image: "kayaku-gohan-jiru",
    ingredients: ["Daikon", "Cenoura", "Gobo", "Konnyaku", "Tofu firme", "Satoimo", "Caldo de kombu e shiitake", "Shoyu"],
    steps: ["Corte todos os vegetais em pedaços irregulares.", "Refogue em óleo de gergelim.", "Adicione caldo de kombu e shiitake.", "Cozinhe até todos os vegetais ficarem macios.", "Adicione tofu esfarelado.", "Tempere com shoyu e sirva quente."],
    difficulty: "Fácil", time: "35 min", description: "Sopa de templo budista 100% vegetal. Originária do templo Kencho-ji em Kamakura, é shojin ryori (culinária monástica)."
  },
  {
    id: "kasujiru", name: "Kasujiru (Sopa de Borra de Sake)", category: "Sopas", image: "kasujiru",
    ingredients: ["200g de sake kasu (borra de sake)", "Salmão ou barriga de porco", "Daikon", "Cenoura", "Gobo", "Konnyaku", "Miso", "Negi"],
    steps: ["Dissolva sake kasu em um pouco de caldo morno.", "Corte vegetais e carne em pedaços.", "Cozinhe em dashi até ficar macio.", "Adicione sake kasu dissolvido.", "Dissolva miso por último.", "Sirva quente — aquece o corpo inteiro."],
    difficulty: "Fácil", time: "40 min", description: "Sopa de inverno com borra de sake que aquece de dentro para fora. Rica em probióticos e enzimas."
  },

  // ============ SOBREMESAS JAPONESAS (5) ============
  {
    id: "monaka", name: "Monaka (Wafer com Anko)", category: "Sobremesas Japonesas", image: "monaka",
    ingredients: ["Wafers de monaka (mochigome)", "Anko (tsubuan com pedaços)", "Mochi fino (opcional)", "Sorvete (variação moderna)"],
    steps: ["Prepare anko caseiro ou use pronto.", "Coloque anko generoso em uma metade do wafer.", "Se usar mochi, coloque entre o anko.", "Feche com a outra metade.", "Pressione levemente para selar.", "Sirva imediatamente para manter a crocância."],
    difficulty: "Fácil", time: "10 min", description: "Wafer crocante de arroz recheado com anko. A textura crocante/macia é a assinatura deste wagashi clássico."
  },
  {
    id: "annindofu", name: "Annin Dōfu (Tofu de Amêndoa)", category: "Sobremesas Japonesas", image: "annindofu",
    ingredients: ["200ml de leite", "100ml de creme de leite", "Essência de amêndoa", "5g de gelatina", "Açúcar", "Frutas em calda (lichia, mikan)"],
    steps: ["Hidrate a gelatina em água fria.", "Aqueça leite, creme e açúcar.", "Adicione a gelatina e a essência de amêndoa.", "Despeje em formas e refrigere 3h.", "Desenforme ou corte em losangos.", "Sirva com frutas em calda."],
    difficulty: "Fácil", time: "15 min + 3h geladeira", description: "Sobremesa chinesa adaptada pelo Japão. Textura sedosa de pudim com perfume de amêndoa — finale perfeito de refeição."
  },
  {
    id: "uji-kintoki", name: "Uji Kintoki (Kakigori de Matcha)", category: "Sobremesas Japonesas", image: "uji-kintoki",
    ingredients: ["Gelo em bloco", "Calda de matcha (Uji)", "Anko", "Mochi shiratama", "Leite condensado", "Matcha em pó"],
    steps: ["Raspe o gelo em montanha fofa.", "Despeje calda de matcha generosamente.", "Adicione anko e shiratama.", "Regue com leite condensado.", "Polvilhe matcha em pó no topo.", "Sirva imediatamente."],
    difficulty: "Fácil", time: "10 min", description: "O rei do kakigori: gelo raspado com matcha de Uji, anko e mochi. Sobremesa de verão definitiva em Kyoto."
  },
  {
    id: "mizu-yokan", name: "Mizu Yokan (Yokan de Verão)", category: "Sobremesas Japonesas", image: "mizu-yokan",
    ingredients: ["200g de anko liso (koshian)", "3g de ágar-ágar", "200ml de água", "50g de açúcar", "Pitada de sal"],
    steps: ["Dissolva ágar-ágar em água e aqueça.", "Adicione açúcar e mexa.", "Incorpore anko e misture bem.", "Cozinhe por 3 minutos.", "Despeje em forma e refrigere 3h.", "Corte e sirva gelado."],
    difficulty: "Fácil", time: "15 min + 3h", description: "Versão refrescante do yokan com mais água, perfeita para o verão. Textura mais leve e suave que o yokan tradicional."
  },
  {
    id: "raindrop-cake", name: "Mizu Shingen Mochi (Raindrop Cake)", category: "Sobremesas Japonesas", image: "raindrop-cake",
    ingredients: ["5g de ágar-ágar", "300ml de água mineral", "Kinako", "Kuromitsu"],
    steps: ["Dissolva ágar-ágar em água mineral.", "Aqueça até ferver, mexendo.", "Despeje em moldes esféricos.", "Refrigere por 2h.", "Desenforme com cuidado.", "Sirva com kinako e kuromitsu — deve ser transparente como gota d'água."],
    difficulty: "Fácil", time: "10 min + 2h", description: "Sobremesa transparente como uma gota de água. Viralizou mundialmente — é puro visual e textura delicada."
  },

  // ============ DONBURI & ARROZ (5) ============
  {
    id: "tai-meshi", name: "Tai Meshi (Arroz de Pargo)", category: "Donburi & Arroz", image: "tai-meshi",
    ingredients: ["1 pargo inteiro (tai)", "3 xícaras de arroz", "Dashi", "Shoyu claro", "Sake", "Mirin", "Gengibre em tiras", "Mitsuba"],
    steps: ["Limpe e tempere o pargo com sal.", "Grelhe até dourar.", "Coloque arroz lavado na panela com dashi, shoyu, sake e mirin.", "Posicione o pargo inteiro sobre o arroz.", "Cozinhe normalmente.", "Desfihe o peixe, misture e sirva com mitsuba."],
    difficulty: "Médio", time: "50 min", description: "Arroz cozido com pargo inteiro — prato de celebração. O sabor elegante do tai perfuma cada grão de arroz."
  },
  {
    id: "maze-gohan", name: "Maze Gohan (Arroz Misturado)", category: "Donburi & Arroz", image: "maze-gohan",
    ingredients: ["3 xícaras de arroz", "Frango desfiado", "Cenoura", "Gobo", "Shiitake", "Aburaage", "Shoyu, mirin, sake", "Dashi"],
    steps: ["Corte todos os ingredientes em pedaços pequenos.", "Cozinhe-os em dashi com temperos.", "Escorra reservando o caldo.", "Cozinhe o arroz usando o caldo como líquido.", "Quando pronto, misture os ingredientes.", "Sirva quente com mitsuba."],
    difficulty: "Fácil", time: "45 min", description: "Arroz misturado com vegetais e frango. Diferente do takikomi gohan, os ingredientes são cozidos separados e misturados."
  },
  {
    id: "taco-rice", name: "Taco Rice", category: "Donburi & Arroz", image: "taco-rice",
    ingredients: ["Arroz japonês", "Carne moída temperada (chili, cominho)", "Alface picada", "Tomate em cubos", "Queijo ralado", "Salsa ou molho picante"],
    steps: ["Tempere e refogue a carne moída.", "Coloque arroz quente no prato.", "Cubra com carne temperada.", "Adicione alface, tomate e queijo.", "Regue com salsa ou molho.", "Misture tudo antes de comer."],
    difficulty: "Fácil", time: "15 min", description: "Fusão okinawana: arroz com cobertura de taco mexicano. Criado em 1984 perto da base militar americana em Okinawa."
  },
  {
    id: "gomoku-gohan", name: "Gomoku Gohan (Arroz de 5 Ingredientes)", category: "Donburi & Arroz", image: "gomoku-gohan",
    ingredients: ["3 xícaras de arroz", "Frango", "Gobo", "Cenoura", "Shiitake", "Konnyaku", "Dashi", "Shoyu, mirin, sake"],
    steps: ["Corte todos os 5 ingredientes em pedaços pequenos.", "Coloque arroz lavado na panela.", "Adicione dashi, shoyu, mirin e sake como líquido.", "Distribua os ingredientes por cima do arroz.", "Cozinhe normalmente — NÃO mexa.", "Misture delicadamente ao servir."],
    difficulty: "Fácil", time: "45 min", description: "Arroz cozido com 5 ingredientes — prato caseiro fundamental. O aroma ao abrir a tampa é inesquecível."
  },
  {
    id: "natto-don", name: "Nattō Don", category: "Donburi & Arroz", image: "natto-don",
    ingredients: ["Arroz japonês quente", "1 pacote de nattō", "Gema de ovo", "Cebolinha", "Shoyu", "Karashi", "Nori picado"],
    steps: ["Misture nattō vigorosamente 50 vezes.", "Adicione shoyu e karashi.", "Coloque arroz quente na tigela.", "Despeje nattō sobre o arroz.", "Coloque gema de ovo no centro.", "Decore com cebolinha e nori."],
    difficulty: "Fácil", time: "5 min", description: "Donburi mais simples do Japão: nattō com ovo sobre arroz quente. Café da manhã de milhões de japoneses diariamente."
  },

  // ============ ACOMPANHAMENTOS (5) ============
  {
    id: "horenso-gomaae", name: "Hōrenso Gomaae (Espinafre com Gergelim)", category: "Acompanhamentos", image: "horenso-gomaae",
    ingredients: ["1 maço de espinafre", "3 col. de gergelim torrado", "1 col. de açúcar", "1 col. de shoyu", "Dashi (1 col.)"],
    steps: ["Cozinhe espinafre por 30 segundos.", "Resfrie em água gelada e esprema.", "Triture gergelim no suribachi.", "Misture com açúcar, shoyu e dashi.", "Corte espinafre em pedaços de 3cm.", "Misture com molho de gergelim."],
    difficulty: "Fácil", time: "10 min", description: "Espinafre com molho de gergelim — acompanhamento mais comum do Japão. Presente em 90% dos teishoku."
  },
  {
    id: "moyashi-namul", name: "Moyashi Namul (Broto de Feijão)", category: "Acompanhamentos", image: "moyashi-namul",
    ingredients: ["200g de moyashi (broto de feijão)", "Óleo de gergelim", "Sal", "Alho ralado", "Gergelim torrado"],
    steps: ["Ferva água e cozinhe moyashi por 1 minuto.", "Escorra e esfrie em água gelada.", "Esprema bem a água.", "Tempere com óleo de gergelim, sal e alho.", "Polvilhe gergelim.", "Sirva frio como acompanhamento."],
    difficulty: "Fácil", time: "5 min", description: "Acompanhamento coreano adotado pelo Japão. Rápido, barato e nutritivo — perfeito para yakiniku."
  },
  {
    id: "renkon-kinpira", name: "Renkon Kinpira (Lotus Root Frito)", category: "Acompanhamentos", image: "renkon-kinpira",
    ingredients: ["200g de renkon (raiz de lotus)", "Shoyu", "Mirin", "Açúcar", "Pimenta togarashi", "Óleo de gergelim", "Gergelim"],
    steps: ["Fatie o renkon em meias-luas finas.", "Deixe em água com vinagre 5 min.", "Salteie em óleo de gergelim em fogo alto.", "Tempere com shoyu, mirin e açúcar.", "Cozinhe até o líquido evaporar.", "Finalize com pimenta e gergelim."],
    difficulty: "Fácil", time: "15 min", description: "Raiz de lotus salteada em estilo kinpira. A textura crocante e o formato de flor fazem deste prato especial."
  },
  {
    id: "nasu-itame", name: "Nasu Itame (Berinjela Refogada com Miso)", category: "Acompanhamentos", image: "nasu-itame",
    ingredients: ["3 berinjelas japonesas", "Miso", "Mirin", "Açúcar", "Sake", "Óleo", "Negi", "Gergelim"],
    steps: ["Corte berinjelas em meias-luas.", "Frite em óleo até dourar.", "Misture miso, mirin, açúcar e sake.", "Adicione o molho de miso às berinjelas.", "Refogue até o molho cobrir tudo.", "Sirva com negi e gergelim."],
    difficulty: "Fácil", time: "15 min", description: "Berinjela refogada com miso doce — prato caseiro que cada família japonesa faz à sua maneira."
  },
  {
    id: "wafu-pasta", name: "Wafu Pasta (Pasta Japonesa)", category: "Acompanhamentos", image: "wafu-pasta",
    ingredients: ["200g de espaguete", "Mentaiko ou tarako", "Manteiga", "Shoyu", "Shiso picado", "Nori picado", "Limão"],
    steps: ["Cozinhe o espaguete al dente.", "Misture mentaiko com manteiga derretida.", "Adicione um fio de shoyu.", "Misture com a pasta quente.", "Decore com shiso e nori picados.", "Sirva com uma fatia de limão."],
    difficulty: "Fácil", time: "15 min", description: "Pasta estilo japonês com mentaiko e manteiga. Fusion que se tornou clássico — encontrado em todo kissaten do Japão."
  },

  // ============ IZAKAYA & PETISCOS (4) ============
  {
    id: "tofu-steak", name: "Tofu Steak", category: "Izakaya & Petiscos", image: "tofu-steak",
    ingredients: ["1 bloco de tofu firme", "Amido de milho", "Manteiga", "Shoyu", "Alho", "Negi", "Gergelim"],
    steps: ["Drene e prense o tofu por 30 min.", "Corte em fatias grossas de 2cm.", "Passe no amido de milho.", "Sele em manteiga até dourar dos dois lados.", "Adicione shoyu e alho na frigideira.", "Sirva com negi e gergelim."],
    difficulty: "Fácil", time: "15 min", description: "Tofu grelhado em manteiga com shoyu e alho. Petisco de izakaya leve mas satisfatório — perfeito com cerveja."
  },
  {
    id: "buta-bara-yaki", name: "Buta Bara Yaki (Barriga de Porco Grelhada)", category: "Izakaya & Petiscos", image: "buta-bara-yaki",
    ingredients: ["300g de barriga de porco fatiada fina", "Sal e pimenta", "Limão", "Shichimi togarashi", "Negi"],
    steps: ["Tempere a barriga com sal e pimenta.", "Grelhe em fogo alto até crocante.", "A gordura deve caramelizar.", "Corte em pedaços.", "Sirva com limão e shichimi.", "Acompanhe com cerveja gelada."],
    difficulty: "Fácil", time: "10 min", description: "Barriga de porco grelhada até crocante — petisco de izakaya irresistível. A gordura caramelizada é viciante."
  },
  {
    id: "ika-maruyaki", name: "Ika Maruyaki (Lula Inteira Grelhada)", category: "Izakaya & Petiscos", image: "ika-maruyaki",
    ingredients: ["1 lula inteira", "Shoyu", "Mirin", "Gengibre", "Limão", "Shichimi"],
    steps: ["Limpe a lula removendo vísceras.", "Faça cortes superficiais em diagonal.", "Grelhe em fogo alto 2-3 min de cada lado.", "Pincele com shoyu e mirin.", "Corte em anéis.", "Sirva com limão e shichimi."],
    difficulty: "Fácil", time: "15 min", description: "Lula inteira grelhada — aroma irresistível das barracas de festival. Cortes em cruz evitam que enrole."
  },
  {
    id: "negima-buta", name: "Negima Buta (Espeto de Porco e Negi)", category: "Izakaya & Petiscos", image: "negima-buta",
    ingredients: ["300g de barriga de porco fatiada fina", "3 talos de negi grosso", "Molho tare", "Shichimi", "Espetos de bambu"],
    steps: ["Corte negi em pedaços de 3cm.", "Envolva cada pedaço de negi com fatia de porco.", "Espete em espetos de bambu.", "Grelhe em fogo alto virando constantemente.", "Pincele com tare nos últimos segundos.", "Sirva com shichimi."],
    difficulty: "Fácil", time: "20 min", description: "Espeto de porco com negi — variação do yakitori clássico. O negi caramelizado dentro do porco é divino."
  },
];
