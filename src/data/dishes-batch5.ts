import { Dish } from "./dishes";

export const dishesBatch5: Dish[] = [
  // ============ PRATOS TRADICIONAIS (15) ============
  { id: "tai-sashimi", name: "Tai Sashimi (Sashimi de Dourada)", category: "Pratos Tradicionais", image: "tai-sashimi",
    ingredients: ["300g de tai (dourada) fresco sashimi grade", "Shiso", "Daikon em fios", "Wasabi fresco", "Shoyu", "Limão"],
    steps: ["Filete o tai removendo espinhas com pinça.", "Corte em fatias finas de usuzukuri (3mm).", "Disponha em leque sobre prato com gelo.", "Decore com shiso, daikon e wasabi.", "Sirva com shoyu e limão.", "Coma imediatamente — frescor é tudo."],
    difficulty: "Avançado", time: "20 min", description: "O tai (dourada) é o peixe mais nobre do Japão, símbolo de celebrações e boa sorte." },

  { id: "maguro-yamakake", name: "Maguro Yamakake", category: "Pratos Tradicionais", image: "maguro-yamakake",
    ingredients: ["200g de atum fresco em cubos", "100g de nagaimo ralado", "Shoyu", "Wasabi", "Nori picado", "Cebolinha"],
    steps: ["Corte o atum em cubos de 1.5cm.", "Rale o nagaimo até formar pasta viscosa.", "Tempere o atum com shoyu e wasabi.", "Coloque o atum em tigela.", "Cubra com nagaimo ralado.", "Finalize com nori e cebolinha."],
    difficulty: "Fácil", time: "10 min", description: "Atum cru com inhame ralado viscoso — texturas contrastantes que se complementam perfeitamente." },

  { id: "tataki-maguro", name: "Tataki de Atum", category: "Pratos Tradicionais", image: "tataki-maguro",
    ingredients: ["300g de atum fresco bloco", "Gergelim branco e preto", "Negi picado", "Gengibre ralado", "Ponzu", "Shiso"],
    steps: ["Passe gergelim em toda superfície do atum.", "Sele rapidamente em frigideira muito quente (10s cada lado).", "Mergulhe em água gelada.", "Seque e corte em fatias de 8mm.", "Disponha em prato com gengibre e negi.", "Regue com ponzu gelado."],
    difficulty: "Médio", time: "15 min", description: "Técnica tataki: selar por fora, cru por dentro. Contraste perfeito de texturas." },

  { id: "ikura-don", name: "Ikura Don (Tigela de Ovas de Salmão)", category: "Pratos Tradicionais", image: "ikura-don",
    ingredients: ["200g de ikura marinada", "Arroz japonês quente", "Shiso", "Nori picado", "Wasabi", "Shoyu"],
    steps: ["Prepare arroz japonês perfeitamente.", "Coloque na tigela donburi.", "Cubra generosamente com ikura.", "Decore com nori picado e shiso.", "Sirva com wasabi ao lado.", "Coma com shoyu a gosto."],
    difficulty: "Fácil", time: "15 min", description: "Tigela luxuosa coberta com ovas de salmão brilhantes como rubis — joia da culinária de Hokkaido." },

  { id: "negitoro-don", name: "Negitoro Don", category: "Pratos Tradicionais", image: "negitoro-don",
    ingredients: ["200g de barriga de atum raspada", "Cebolinha picada", "Arroz japonês", "Nori", "Gema de ovo", "Wasabi", "Shoyu"],
    steps: ["Pique o toro do atum finamente.", "Misture com cebolinha picada.", "Coloque arroz na tigela.", "Cubra com negitoro.", "Coloque gema de ovo no centro.", "Sirva com wasabi e shoyu."],
    difficulty: "Fácil", time: "15 min", description: "A gordura cremosa do toro com cebolinha sobre arroz quente — comfort food dos mercados de peixe." },

  { id: "kaisen-don", name: "Kaisen Don (Tigela de Frutos do Mar)", category: "Pratos Tradicionais", image: "kaisen-don",
    ingredients: ["Salmão fatiado", "Atum fatiado", "Camarão", "Ikura", "Uni (ouriço)", "Arroz japonês", "Wasabi", "Shoyu", "Shiso"],
    steps: ["Prepare arroz de sushi.", "Corte todos os frutos do mar.", "Coloque arroz na tigela grande.", "Arranje os frutos do mar artisticamente.", "Adicione ikura e uni.", "Sirva com wasabi e shoyu."],
    difficulty: "Médio", time: "30 min", description: "A tigela mais luxuosa do Japão — um arco-íris de frutos do mar frescos sobre arroz." },

  { id: "futomaki-deluxe", name: "Futomaki Deluxe", category: "Pratos Tradicionais", image: "futomaki-deluxe",
    ingredients: ["Arroz temperado", "Nori", "Unagi (enguia)", "Tamagoyaki", "Pepino", "Kanpyō", "Denbu rosa", "Shiitake cozido"],
    steps: ["Prepare todos os recheios previamente.", "Coloque nori inteiro na esteira.", "Espalhe arroz deixando 3cm na borda.", "Disponha recheios em linha.", "Enrole firme com a esteira.", "Corte em 8 fatias com faca molhada."],
    difficulty: "Avançado", time: "1h", description: "O futomaki mais elaborado com 6+ recheios — peça de arte comestível para ocasiões especiais." },

  { id: "unagi-nigiri", name: "Unagi Nigiri (Nigiri de Enguia)", category: "Pratos Tradicionais", image: "unagi-nigiri",
    ingredients: ["200g de unagi grelhada (kabayaki)", "Arroz japonês temperado", "Tare de unagi", "Sansho (pimenta japonesa)", "Nori fino"],
    steps: ["Corte unagi em fatias para nigiri.", "Molde porções de arroz (20g).", "Coloque tira de nori como cinta.", "Posicione unagi sobre o arroz.", "Pincele com tare.", "Polvilhe sansho."],
    difficulty: "Médio", time: "30 min", description: "Enguia grelhada com molho doce sobre arroz — sabor único que define o sushi premium." },

  { id: "tekkadon", name: "Tekka Don (Tigela de Atum)", category: "Pratos Tradicionais", image: "tekkadon",
    ingredients: ["250g de atum fresco fatiado", "Arroz japonês", "Wasabi", "Shoyu", "Nori picado", "Cebolinha", "Gergelim"],
    steps: ["Prepare arroz de sushi.", "Fatie o atum em lâminas finas.", "Coloque arroz na tigela.", "Arranje fatias de atum cobrindo o arroz.", "Polvilhe nori, gergelim e cebolinha.", "Sirva com wasabi e shoyu."],
    difficulty: "Fácil", time: "20 min", description: "Tigela de atum cru simples e elegante — o vermelho vibrante do maguro sobre arroz branco." },

  { id: "maguro-don", name: "Maguro Don Especial", category: "Pratos Tradicionais", image: "maguro-don",
    ingredients: ["100g de akami (atum magro)", "100g de chutoro (atum médio)", "50g de negitoro", "Arroz japonês", "Wasabi", "Shoyu", "Gema de ovo"],
    steps: ["Prepare arroz de sushi perfeito.", "Corte akami e chutoro em fatias.", "Monte arroz na tigela.", "Arranje akami, chutoro e negitoro em seções.", "Coloque gema no centro.", "Sirva com wasabi e shoyu."],
    difficulty: "Médio", time: "25 min", description: "Três texturas de atum na mesma tigela — magro, médio e gorduroso. Experiência completa de maguro." },

  { id: "sake-chazuke", name: "Sake Chazuke (Chazuke de Salmão)", category: "Pratos Tradicionais", image: "sake-chazuke",
    ingredients: ["Salmão grelhado desfiado", "Arroz japonês", "Chá verde quente ou dashi", "Nori picado", "Wasabi", "Umeboshi", "Gergelim", "Cebolinha"],
    steps: ["Grelhe o salmão e desfie.", "Coloque arroz na tigela.", "Adicione salmão, nori e gergelim.", "Despeje chá verde ou dashi quente.", "Coloque wasabi e umeboshi.", "Mexa levemente e coma."],
    difficulty: "Fácil", time: "10 min", description: "Arroz com salmão regado com chá — a refeição de encerramento perfeita após uma noite de sake." },

  { id: "natto-gohan", name: "Nattō Gohan", category: "Pratos Tradicionais", image: "natto-gohan",
    ingredients: ["1 pacote de nattō", "Arroz japonês quente", "Shoyu", "Karashi (mostarda)", "Negi picado", "Ovo cru (opcional)"],
    steps: ["Mexa o nattō vigorosamente 50+ vezes.", "Adicione shoyu e karashi.", "Mexa mais até formar fios longos.", "Coloque sobre arroz quente.", "Adicione negi e ovo cru se desejar.", "Misture e coma imediatamente."],
    difficulty: "Fácil", time: "5 min", description: "Café da manhã japonês por excelência — fermentado, nutritivo e dividindo opiniões há séculos." },

  { id: "tamago-kake-gohan", name: "Tamago Kake Gohan (TKG)", category: "Pratos Tradicionais", image: "tamago-kake-gohan",
    ingredients: ["Arroz japonês quente", "1 ovo fresco", "Shoyu", "Furikake (opcional)", "Cebolinha"],
    steps: ["Coloque arroz quente na tigela.", "Quebre o ovo cru diretamente sobre o arroz.", "Adicione shoyu a gosto.", "Mexa vigorosamente até ficar cremoso.", "Adicione furikake se desejar.", "Coma imediatamente enquanto quente."],
    difficulty: "Fácil", time: "3 min", description: "A refeição mais simples e perfeita do Japão — apenas arroz, ovo cru e shoyu. Pura simplicidade." },

  { id: "takikomi-gohan", name: "Takikomi Gohan (Arroz Cozido)", category: "Pratos Tradicionais", image: "takikomi-gohan",
    ingredients: ["2 xícaras de arroz japonês", "Shiitake", "Cenoura", "Gobō (bardana)", "Konnyaku", "Aburaage", "Dashi", "Shoyu", "Mirin", "Sake"],
    steps: ["Lave o arroz e deixe de molho 30 min.", "Corte vegetais em pedaços pequenos.", "Coloque arroz na panela com dashi temperado.", "Distribua vegetais por cima (NÃO misture).", "Cozinhe normalmente.", "Ao terminar, misture delicadamente e sirva."],
    difficulty: "Fácil", time: "45 min", description: "Arroz cozido com vegetais sazonais — cada estação tem sua versão. Comfort food japonês atemporal." },

  { id: "takenoko-gohan", name: "Takenoko Gohan (Arroz de Bambu)", category: "Pratos Tradicionais", image: "takenoko-gohan",
    ingredients: ["2 xícaras de arroz", "200g de broto de bambu fresco", "Dashi", "Shoyu claro", "Mirin", "Sake", "Kinome (folhas de sansho)"],
    steps: ["Fatie o broto de bambu fino.", "Lave o arroz e coloque na panela.", "Adicione dashi, shoyu, mirin e sake.", "Distribua bambu por cima.", "Cozinhe normalmente.", "Sirva com kinome fresco."],
    difficulty: "Fácil", time: "45 min", description: "Receita de primavera com broto de bambu fresco — sabor delicado que marca a chegada da estação." },

  // ============ MASSAS JAPONESAS (10) ============
  { id: "lamen-artesanal", name: "Lamen Artesanal Completo", category: "Massas Japonesas", image: "lamen-artesanal",
    ingredients: ["Macarrão ramen fresco", "Chashu de porco", "Ajitama (ovo marinado)", "Menma", "Nori", "Negi", "Caldo tonkotsu ou shoyu", "Tare", "Óleo aromático"],
    steps: ["Prepare o caldo (12h para tonkotsu, 4h para shoyu).", "Faça o tare (base de tempero concentrada).", "Prepare o óleo aromático (alho, cebolinha).", "Cozinhe ramen 90 segundos.", "Monte: tare + caldo + óleo + macarrão.", "Adicione toppings e sirva imediatamente."],
    difficulty: "Avançado", time: "12h", description: "Ramen feito completamente do zero — um projeto de amor que requer paciência e técnica." },

  { id: "nikomi-udon", name: "Nikomi Udon (Udon Guisado)", category: "Massas Japonesas", image: "nikomi-udon",
    ingredients: ["200g de udon", "Frango", "Negi", "Shiitake", "Ovo", "Kamaboko", "Miso", "Dashi"],
    steps: ["Prepare caldo com dashi e miso.", "Cozinhe frango e vegetais no caldo.", "Adicione udon diretamente.", "Cozinhe até o udon absorver sabor.", "Quebre ovo por cima.", "Sirva borbulhando na panela de barro."],
    difficulty: "Fácil", time: "25 min", description: "Udon cozido diretamente no caldo até ficar macio e saboroso — prato de inverno reconfortante." },

  { id: "kitsune-soba", name: "Kitsune Soba", category: "Massas Japonesas", image: "kitsune-soba",
    ingredients: ["200g de soba", "Aburaage doce", "Caldo tsuyu", "Negi", "Shichimi", "Nori"],
    steps: ["Cozinhe aburaage em dashi doce.", "Prepare caldo tsuyu quente.", "Cozinhe soba e lave em água fria.", "Coloque soba na tigela com caldo.", "Adicione aburaage doce por cima.", "Finalize com negi e shichimi."],
    difficulty: "Fácil", time: "20 min", description: "Soba com tofu frito doce — versão soba do clássico kitsune udon." },

  { id: "tanuki-udon", name: "Tanuki Udon", category: "Massas Japonesas", image: "tanuki-udon",
    ingredients: ["200g de udon", "Tenkasu (migalhas de tempura)", "Caldo tsuyu", "Negi", "Kamaboko", "Wakame"],
    steps: ["Prepare caldo tsuyu quente.", "Cozinhe udon al dente.", "Coloque udon na tigela com caldo.", "Adicione tenkasu generosamente.", "Coloque kamaboko, negi e wakame.", "Sirva imediatamente."],
    difficulty: "Fácil", time: "15 min", description: "Udon com migalhas de tempura — simples, barato e delicioso. O 'tanuki' (guaxinim) do nome é um trickster." },

  { id: "tsukimi-soba", name: "Tsukimi Soba", category: "Massas Japonesas", image: "tsukimi-soba",
    ingredients: ["200g de soba", "Caldo tsuyu quente", "1 ovo cru", "Nori", "Negi", "Mitsuba"],
    steps: ["Prepare caldo tsuyu quente.", "Cozinhe soba e escorra.", "Coloque soba na tigela com caldo.", "Delicadamente coloque o ovo cru por cima.", "O calor do caldo cozinhará parcialmente.", "Decore com nori, negi e mitsuba."],
    difficulty: "Fácil", time: "15 min", description: "A gema do ovo lembra a lua cheia — tsukimi significa 'contemplar a lua'. Poesia na tigela." },

  { id: "zaru-soba", name: "Zaru Soba Artesanal", category: "Massas Japonesas", image: "zaru-soba",
    ingredients: ["200g de soba artesanal de trigo sarraceno", "Molho tsuyu concentrado", "Negi", "Wasabi fresco", "Daikon ralado", "Nori picado"],
    steps: ["Ferva água abundante.", "Cozinhe soba 4-5 minutos (não exceda).", "Lave em água gelada esfregando.", "Disponha sobre esteira de bambu (zaru).", "Prepare tsuyu concentrado gelado.", "Sirva com condimentos ao lado."],
    difficulty: "Fácil", time: "15 min", description: "Soba fria sobre esteira de bambu — prato de verão que valoriza o sabor do trigo sarraceno puro." },

  { id: "dango-jiru", name: "Dango Jiru (Sopa de Bolinhos)", category: "Massas Japonesas", image: "dango-jiru",
    ingredients: ["Farinha de trigo e água (dango)", "Cenoura", "Daikon", "Gobō", "Konnyaku", "Negi", "Miso ou shoyu", "Dashi"],
    steps: ["Misture farinha e água, sove até liso.", "Forme bolinhos achatados.", "Prepare caldo com vegetais.", "Cozinhe dango no caldo.", "Quando flutuarem, estão prontos.", "Tempere com miso ou shoyu."],
    difficulty: "Fácil", time: "30 min", description: "Sopa rústica com bolinhos de farinha — comida caseira japonesa das montanhas." },

  { id: "suiton", name: "Suiton (Sopa de Guerra)", category: "Massas Japonesas", image: "suiton",
    ingredients: ["Farinha de trigo", "Cenoura", "Daikon", "Batata", "Negi", "Shiitake", "Dashi", "Shoyu"],
    steps: ["Misture farinha com água até pasta grossa.", "Prepare caldo com todos os vegetais.", "Rasgue pedaços de massa e jogue no caldo.", "Cozinhe até os pedaços flutuarem.", "Tempere com shoyu.", "Sirva quente com negi."],
    difficulty: "Fácil", time: "25 min", description: "Sopa da era da guerra — quando arroz era escasso, a farinha salvava. Prato de sobrevivência que virou comfort food." },

  { id: "noppei-jiru", name: "Noppei Jiru", category: "Massas Japonesas", image: "noppei-jiru",
    ingredients: ["Satoimo (inhame)", "Cenoura", "Shiitake", "Konnyaku", "Tofu", "Dashi", "Shoyu", "Amido para engrossar"],
    steps: ["Corte vegetais em pedaços irregulares.", "Cozinhe em dashi.", "Adicione tofu e konnyaku.", "Tempere com shoyu.", "Engrosse com amido diluído.", "Sirva quente — ideal para dias frios."],
    difficulty: "Fácil", time: "30 min", description: "Sopa engrossada com vegetais raízes de Niigata — aquece corpo e alma no inverno rigoroso." },

  { id: "imoni", name: "Imoni (Sopa de Inhame)", category: "Massas Japonesas", image: "imoni",
    ingredients: ["Satoimo (inhame japonês)", "Carne bovina fatiada", "Konnyaku", "Negi", "Shiitake", "Shoyu", "Sake", "Açúcar"],
    steps: ["Cozinhe satoimo até macio.", "Adicione carne e konnyaku.", "Tempere com shoyu, sake e açúcar.", "Adicione shiitake e negi.", "Cozinhe até todos os sabores se fundirem.", "Sirva ao ar livre — tradição do festival."],
    difficulty: "Fácil", time: "40 min", description: "Sopa de outono de Yamagata cozida ao ar livre em grandes panelas comunitárias — festival famoso." },

  // ============ PRATOS QUENTES (15) ============
  { id: "buri-daikon", name: "Buri Daikon (Yellowtail com Nabo)", category: "Pratos Quentes", image: "buri-daikon",
    ingredients: ["400g de buri (yellowtail) em postas", "1 daikon grande", "Shoyu", "Mirin", "Sake", "Açúcar", "Gengibre"],
    steps: ["Corte daikon em rodelas de 3cm e pré-cozinhe.", "Escalde o buri em água quente para remover odor.", "Cozinhe gengibre em dashi.", "Adicione buri e daikon.", "Tempere com shoyu, mirin, sake e açúcar.", "Cozinhe em fogo baixo 40 min até o daikon ficar translúcido."],
    difficulty: "Médio", time: "1h", description: "Prato de inverno icônico — yellowtail gordo com nabo que absorve todo o umami do peixe." },

  { id: "kakuni", name: "Kakuni (Barriga de Porco Cozida)", category: "Pratos Quentes", image: "kakuni",
    ingredients: ["800g de barriga de porco em bloco", "Negi", "Gengibre", "Shoyu", "Sake", "Mirin", "Açúcar", "Karashi"],
    steps: ["Corte a barriga em cubos de 5cm.", "Ferva com negi e gengibre por 1h.", "Descarte a água e lave a carne.", "Cozinhe novamente em shoyu, sake, mirin e açúcar.", "Cozinhe em fogo baixo por 2h.", "Sirva com karashi e o molho reduzido."],
    difficulty: "Médio", time: "3h", description: "Barriga de porco cozida lentamente até derreter na boca — influência chinesa que se tornou clássico japonês." },

  { id: "buta-kakuni-tamago", name: "Kakuni com Ovo", category: "Pratos Quentes", image: "buta-kakuni-tamago",
    ingredients: ["800g de barriga de porco", "4 ovos cozidos", "Shoyu", "Sake", "Mirin", "Açúcar", "Gengibre", "Negi"],
    steps: ["Prepare o kakuni base.", "Cozinhe ovos por 7 minutos (gema mole).", "Descasque os ovos.", "Na última hora de cozimento, adicione os ovos.", "Os ovos absorverão o molho e ficarão marrons.", "Sirva kakuni com ovo cortado ao meio."],
    difficulty: "Médio", time: "3h", description: "Versão completa do kakuni com ovos marinados — a gema mole misturada ao molho é divina." },

  { id: "niku-dofu", name: "Niku Dofu (Carne com Tofu)", category: "Pratos Quentes", image: "niku-dofu",
    ingredients: ["300g de carne bovina fatiada", "1 bloco de tofu firme", "Negi", "Shiitake", "Shoyu", "Mirin", "Sake", "Açúcar", "Dashi"],
    steps: ["Corte tofu em cubos grandes.", "Fatie negi e shiitake.", "Prepare caldo com dashi, shoyu, mirin e açúcar.", "Cozinhe tofu e vegetais no caldo.", "Adicione a carne fatiada.", "Cozinhe até a carne absorver o sabor."],
    difficulty: "Fácil", time: "20 min", description: "Versão simplificada do sukiyaki — carne e tofu no caldo doce. Comfort food do dia a dia." },

  { id: "nimono-kabocha", name: "Nimono de Kabocha (Abóbora Cozida)", category: "Pratos Quentes", image: "nimono-kabocha",
    ingredients: ["1/4 de kabocha", "Dashi", "Shoyu", "Mirin", "Açúcar", "Sake"],
    steps: ["Corte a kabocha em pedaços com casca.", "Coloque em panela com casca para baixo.", "Adicione dashi até cobrir metade.", "Tempere com shoyu, mirin e açúcar.", "Cozinhe em fogo baixo com tampa (otoshibuta).", "Cozinhe até macia — não mexa."],
    difficulty: "Fácil", time: "25 min", description: "Abóbora japonesa cozida em dashi doce — demonstra a filosofia nimono: extrair sabor com delicadeza." },

  { id: "butadon", name: "Butadon (Tigela de Porco)", category: "Pratos Quentes", image: "butadon",
    ingredients: ["400g de lombo suíno fatiado", "Cebola", "Shoyu", "Mirin", "Sake", "Açúcar", "Gengibre", "Arroz japonês"],
    steps: ["Fatie a cebola em meias-luas.", "Grelhe a carne em fogo alto.", "Adicione cebola e refogue.", "Tempere com shoyu, mirin, sake e açúcar.", "Cozinhe até o molho caramelizar.", "Sirva sobre arroz quente."],
    difficulty: "Fácil", time: "20 min", description: "A versão porco do gyudon — popular em Hokkaido, especialmente em Obihiro." },

  { id: "unadon", name: "Unadon (Tigela de Enguia)", category: "Pratos Quentes", image: "unadon",
    ingredients: ["2 filés de unagi (enguia)", "Tare (shoyu, mirin, sake, açúcar)", "Arroz japonês", "Sansho", "Nori picado"],
    steps: ["Prepare o tare fervendo shoyu, mirin, sake e açúcar.", "Grelhe a unagi pincelando tare.", "Grelhe-flipe-pincele 3 vezes.", "Coloque arroz na tigela donburi.", "Regue com tare.", "Coloque unagi sobre o arroz e polvilhe sansho."],
    difficulty: "Médio", time: "30 min", description: "Tigela de enguia grelhada — prato de verão no Japão, consumido no dia do Boi (Doyo no Ushi no Hi)." },

  { id: "tendon", name: "Tendon (Tigela de Tempurá)", category: "Pratos Quentes", image: "tendon",
    ingredients: ["Camarões para tempurá", "Berinjela", "Shiso", "Batata-doce", "Massa de tempurá", "Tare doce", "Arroz japonês"],
    steps: ["Prepare massa de tempurá gelada.", "Frite todos os ingredientes.", "Prepare tare: dashi + shoyu + mirin fervidos.", "Coloque arroz na tigela.", "Regue com tare.", "Arranje tempurás sobre o arroz."],
    difficulty: "Médio", time: "30 min", description: "Tempurá crocante sobre arroz com molho doce — quando a crocância encontra o molho, é mágico." },

  { id: "soboro-don", name: "Soboro Don (Tigela Tricolor)", category: "Pratos Quentes", image: "soboro-don",
    ingredients: ["200g de frango moído", "3 ovos", "100g de vagem", "Shoyu", "Mirin", "Açúcar", "Gengibre", "Arroz"],
    steps: ["Refogue frango moído com shoyu, mirin e gengibre.", "Mexendo constantemente até ficar solto (soboro).", "Prepare iri-tamago (ovos mexidos em fios finos).", "Cozinhe vagens e pique.", "Monte: arroz + 3 faixas coloridas.", "Arrume frango, ovo e vagem em seções."],
    difficulty: "Fácil", time: "25 min", description: "Tigela tricolor linda — frango, ovo e verde. Perfeita para bentôs e visual Instagram." },

  { id: "stamina-don", name: "Stamina Don", category: "Pratos Quentes", image: "stamina-don",
    ingredients: ["300g de carne bovina", "Nira (cebolinha chinesa)", "Moyashi", "Negi", "Alho", "Gengibre", "Shoyu", "Gochujang", "Ovo", "Arroz"],
    steps: ["Salteie alho e gengibre em fogo alto.", "Adicione carne e sele.", "Junte nira, moyashi e negi.", "Tempere com shoyu e gochujang.", "Sirva sobre arroz quente.", "Cubra com ovo cru ou frito."],
    difficulty: "Fácil", time: "15 min", description: "Tigela energética para recuperar forças — popular entre trabalhadores e estudantes." },

  { id: "tenshindon", name: "Tenshindon (Omelete sobre Arroz)", category: "Pratos Quentes", image: "tenshindon",
    ingredients: ["4 ovos", "Kani kama", "Cebolinha", "Caldo de frango", "Shoyu", "Vinagre", "Açúcar", "Amido", "Arroz"],
    steps: ["Bata ovos com kani desfiado e cebolinha.", "Prepare molho doce com caldo, shoyu, vinagre e açúcar.", "Engrosse com amido.", "Faça omelete macia (não seque).", "Coloque sobre arroz na tigela.", "Cubra com molho brilhante."],
    difficulty: "Fácil", time: "15 min", description: "Omelete de carangueijo sobre arroz com molho agridoce — prato sino-japonês adorado por crianças." },

  { id: "chukadon", name: "Chūkadon (Arroz com Legumes Chinês)", category: "Pratos Quentes", image: "chukadon",
    ingredients: ["Carne ou frutos do mar", "Hakusai", "Cenoura", "Broto de bambu", "Cogumelos", "Caldo de frango", "Amido", "Óleo de gergelim", "Arroz"],
    steps: ["Corte todos os vegetais.", "Salteie carne/frutos do mar em wok.", "Adicione vegetais em ordem de cozimento.", "Junte caldo temperado.", "Engrosse com amido.", "Sirva sobre arroz quente."],
    difficulty: "Fácil", time: "20 min", description: "Versão japonesa do chop suey sobre arroz — culinária chinesa adaptada ao gosto japonês." },

  { id: "hayashi-don", name: "Hayashi Don", category: "Pratos Quentes", image: "hayashi-don",
    ingredients: ["300g de carne fatiada", "Cebola", "Cogumelos", "Molho demi-glace", "Vinho tinto", "Manteiga", "Arroz"],
    steps: ["Refogue cebola em manteiga até caramelizar.", "Sele a carne e reserve.", "Adicione cogumelos.", "Junte molho demi-glace e vinho.", "Retorne a carne e cozinhe 20 min.", "Sirva sobre arroz."],
    difficulty: "Médio", time: "40 min", description: "Carne em molho demi-glace sobre arroz — yoshoku elegante que parece de restaurante." },

  { id: "una-tama-don", name: "Una-Tama Don (Unagi com Ovo)", category: "Pratos Quentes", image: "una-tama-don",
    ingredients: ["1 filé de unagi grelhada", "3 ovos", "Cebola", "Dashi", "Shoyu", "Mirin", "Arroz", "Sansho"],
    steps: ["Corte unagi em tiras.", "Cozinhe cebola em dashi temperado.", "Adicione tiras de unagi.", "Despeje ovos batidos por cima.", "Tampe e cozinhe até ovo semicozido.", "Deslize sobre arroz e polvilhe sansho."],
    difficulty: "Fácil", time: "15 min", description: "Fusão de unadon com katsudon — enguia com ovo sobre arroz. O melhor dos dois mundos." },

  { id: "shogayaki-don", name: "Shogayaki Don", category: "Pratos Quentes", image: "shogayaki-don",
    ingredients: ["400g de lombo suíno fatiado", "Gengibre fresco", "Shoyu", "Mirin", "Sake", "Cebola", "Repolho", "Arroz"],
    steps: ["Marine carne com gengibre, shoyu, mirin e sake.", "Grelhe em fogo alto.", "Adicione cebola e caramelize.", "Fatie repolho fino.", "Monte: arroz + repolho + carne.", "Regue com molho da panela."],
    difficulty: "Fácil", time: "20 min", description: "Shogayaki na versão donburi — porco com gengibre sobre arroz, refeição rápida perfeita." },

  // ============ STREET FOOD (10) ============
  { id: "ikayaki", name: "Ikayaki (Lula Grelhada)", category: "Street Food", image: "ikayaki",
    ingredients: ["2 lulas inteiras", "Shoyu", "Mirin", "Gengibre", "Limão"],
    steps: ["Limpe as lulas.", "Grelhe em fogo alto.", "Pincele com shoyu e mirin.", "Grelhe até ficar marcada.", "Corte em anéis.", "Sirva com limão."],
    difficulty: "Fácil", time: "10 min", description: "Lula grelhada inteira em brasas — aroma irresistível dos matsuri (festivais)." },

  { id: "baby-castella", name: "Baby Castella", category: "Street Food", image: "baby-castella",
    ingredients: ["Farinha", "Ovos", "Açúcar", "Mel", "Leite", "Fermento"],
    steps: ["Misture ingredientes secos.", "Adicione ovos, mel e leite.", "Despeje na forma de bolinhas.", "Asse em forma giratória.", "Vire quando dourar.", "Sirva quentes em saco de papel."],
    difficulty: "Fácil", time: "15 min", description: "Mini castellas em formato de bolinha — snack de festival que as crianças adoram." },

  { id: "imagawayaki", name: "Imagawayaki", category: "Street Food", image: "imagawayaki",
    ingredients: ["Farinha", "Ovos", "Açúcar", "Leite", "Anko (pasta de feijão)", "Creme de baunilha"],
    steps: ["Prepare massa fluida.", "Despeje na forma circular.", "Adicione recheio (anko ou creme).", "Cubra com mais massa.", "Feche e asse até dourar.", "Sirva quente."],
    difficulty: "Fácil", time: "20 min", description: "Panqueca grossa recheada cozida na chapa — antepassado do taiyaki, mais antigo e igualmente delicioso." },

  { id: "yakiimo", name: "Yakiimo (Batata-Doce Assada)", category: "Street Food", image: "yakiimo",
    ingredients: ["Batatas-doces japonesas (beni haruka ou anno imo)", "Pedras quentes (ou forno)"],
    steps: ["Lave as batatas sem descascar.", "Asse lentamente em pedras quentes ou forno a 160°C.", "Asse por 90 minutos.", "A batata deve ficar caramelizada naturalmente.", "Quebre ao meio — deve ter textura cremosa.", "Coma com a casca se desejar."],
    difficulty: "Fácil", time: "90 min", description: "Batata-doce assada em pedras quentes — vendida por caminhões que tocam uma melodia nostálgica no inverno." },

  { id: "korokke-pan", name: "Korokke Pan (Pão de Croquete)", category: "Street Food", image: "korokke-pan",
    ingredients: ["Pão de cachorro-quente", "Korokke (croquete)", "Repolho fatiado", "Molho tonkatsu"],
    steps: ["Prepare ou compre korokke pronto.", "Torre o pão levemente.", "Coloque repolho fatiado.", "Adicione o korokke quente.", "Regue com molho tonkatsu.", "Feche e sirva."],
    difficulty: "Fácil", time: "10 min", description: "Croquete no pão — a invenção genial das padarias japonesas. Almoço rápido por ¥200." },

  { id: "crepe-harajuku", name: "Crepe de Harajuku", category: "Street Food", image: "crepe-harajuku",
    ingredients: ["Massa de crepe", "Chantilly", "Morangos", "Banana", "Chocolate", "Sorvete"],
    steps: ["Prepare massa fina de crepe.", "Asse em chapa circular.", "Recheie com chantilly e frutas.", "Adicione sorvete ou chocolate.", "Enrole em formato de cone.", "Sirva em papel decorado."],
    difficulty: "Fácil", time: "10 min", description: "Crepes enrolados em cone de Harajuku, Tóquio — símbolo da cultura kawaii dos anos 80-90." },

  { id: "dango-mitarashi", name: "Mitarashi Dango", category: "Street Food", image: "dango-mitarashi",
    ingredients: ["Farinha de arroz (joshinko)", "Farinha de arroz glutinoso (shiratamako)", "Água", "Shoyu", "Mirin", "Açúcar", "Amido"],
    steps: ["Misture farinhas com água até massa macia.", "Forme bolinhas de 2cm.", "Cozinhe em água fervente até flutuarem.", "Espete 3-4 em cada palito.", "Grelhe até marcas aparecerem.", "Cubra com calda de shoyu doce."],
    difficulty: "Fácil", time: "25 min", description: "Bolinhas de arroz grelhadas com calda salgada-doce — snack milenar que vem do santuário Shimogamo em Kyoto." },

  { id: "nikuman", name: "Nikuman (Pão Cozido no Vapor)", category: "Street Food", image: "nikuman",
    ingredients: ["Massa de pão (farinha, fermento)", "Carne suína moída", "Negi", "Gengibre", "Shoyu", "Óleo de gergelim", "Shiitake"],
    steps: ["Prepare massa de pão e descanse.", "Misture recheio de carne temperada.", "Divida massa e abra discos.", "Recheie e feche com pregas.", "Cozinhe no vapor por 15 minutos.", "Sirva quente — perfeito no inverno."],
    difficulty: "Médio", time: "2h", description: "Pãozinho recheado de carne cozido no vapor — vendido em konbinis por todo o Japão no inverno." },

  { id: "kabocha-korokke", name: "Korokke de Kabocha", category: "Street Food", image: "kabocha-korokke",
    ingredients: ["1/4 kabocha", "Cebola picada", "Queijo (opcional)", "Farinha", "Ovo", "Panko"],
    steps: ["Cozinhe e amasse a kabocha.", "Refogue cebola e misture.", "Adicione queijo se desejar.", "Forme croquetes ovais.", "Empane: farinha, ovo, panko.", "Frite a 170°C até dourar."],
    difficulty: "Fácil", time: "30 min", description: "Croquete de abóbora japonesa — doce natural e cremoso por dentro, crocante por fora." },

  { id: "yakiimo-street", name: "Yaki Imo de Festival", category: "Street Food", image: "yakiimo-street",
    ingredients: ["Batatas-doces japonesas selecionadas", "Carvão ou pedras vulcânicas"],
    steps: ["Selecione batatas uniformes.", "Lave sem remover a casca.", "Asse em brasa lenta por 60-90 min.", "Vire periodicamente.", "Teste com palito — deve deslizar facilmente.", "Quebre ao meio e sirva fumegando."],
    difficulty: "Fácil", time: "90 min", description: "A versão de festival da batata assada — mais defumada e caramelizada que a versão caseira." },

  // ============ ENTRADAS & PETISCOS (10) ============
  { id: "mozuku-su", name: "Mozuku Su (Alga em Vinagre)", category: "Entradas", image: "mozuku-su",
    ingredients: ["100g de mozuku (alga)", "Vinagre de arroz", "Shoyu", "Açúcar", "Gengibre ralado", "Pepino"],
    steps: ["Lave o mozuku em água.", "Prepare sanbaizu (vinagre temperado).", "Fatie pepino fino.", "Misture mozuku com pepino.", "Tempere com sanbaizu.", "Sirva gelado com gengibre."],
    difficulty: "Fácil", time: "10 min", description: "Alga de Okinawa em vinagrete — rica em minerais e com textura escorregadia única." },

  { id: "shirasu-oroshi", name: "Shirasu Oroshi", category: "Entradas", image: "shirasu-oroshi",
    ingredients: ["100g de shirasu (sardinha baby)", "Daikon ralado", "Shoyu", "Limão", "Cebolinha"],
    steps: ["Rale o daikon e escorra o excesso.", "Monte o daikon ralado em monticule.", "Coloque shirasu por cima.", "Regue com shoyu.", "Esprema limão.", "Sirva como appetizer."],
    difficulty: "Fácil", time: "5 min", description: "Sardinhas baby com nabo ralado — entrada de verão refrescante, popular em Shonan/Kamakura." },

  { id: "nagaimo-toro", name: "Nagaimo Tororō", category: "Entradas", image: "nagaimo-toro",
    ingredients: ["200g de nagaimo", "Dashi", "Shoyu", "Ovo de codorna", "Nori picado", "Wasabi"],
    steps: ["Rale o nagaimo finamente.", "Misture com dashi e shoyu.", "Sirva em tigela pequena.", "Coloque ovo de codorna no centro.", "Adicione nori e wasabi.", "Mexa e coma com arroz."],
    difficulty: "Fácil", time: "5 min", description: "Inhame japonês ralado com textura viscosa — parece estranho mas é viciante e nutritivo." },

  { id: "karashi-renkon", name: "Karashi Renkon", category: "Entradas", image: "karashi-renkon",
    ingredients: ["1 raiz de renkon (lotus root)", "Miso amarelo", "Karashi (mostarda)", "Farinha", "Cúrcuma", "Óleo para fritura"],
    steps: ["Cozinhe o renkon inteiro.", "Misture miso com karashi.", "Preencha os buracos do renkon com a pasta.", "Prepare massa com farinha e cúrcuma.", "Passe o renkon recheado na massa.", "Frite e corte em rodelas."],
    difficulty: "Avançado", time: "40 min", description: "Raiz de lótus recheada com mostarda — especialidade de Kumamoto, visualmente impressionante." },

  { id: "toriwasa", name: "Toriwasa (Frango Semi-Cru)", category: "Entradas", image: "toriwasa",
    ingredients: ["200g de peito de frango (qualidade premium)", "Wasabi fresco", "Shoyu", "Shiso", "Myōga"],
    steps: ["Use frango de qualidade garantida.", "Escalde brevemente em água fervente (30 segundos).", "Mergulhe em água gelada.", "Fatie finamente como sashimi.", "Disponha no prato com shiso.", "Sirva com wasabi fresco e shoyu."],
    difficulty: "Avançado", time: "10 min", description: "Sashimi de frango — iguaria controversa que requer frango de qualidade premium absoluta." },

  { id: "hiyashi-tomato", name: "Hiyashi Tomato", category: "Entradas", image: "hiyashi-tomato",
    ingredients: ["Tomates maduros", "Shoyu", "Dashi gelado", "Shiso", "Cebola", "Azeite de gergelim"],
    steps: ["Corte tomates em fatias grossas.", "Prepare dashi gelado com shoyu.", "Disponha tomates no prato.", "Regue com dashi gelado.", "Decore com shiso e cebola.", "Finalize com azeite de gergelim."],
    difficulty: "Fácil", time: "10 min", description: "Tomates gelados com dashi — simplicidade japonesa que realça o sabor natural do tomate." },

  { id: "tataki-kyuri", name: "Tataki Kyūri (Pepino Esmigalhado)", category: "Entradas", image: "tataki-kyuri",
    ingredients: ["3 pepinos japoneses", "Sal", "Shoyu", "Vinagre de arroz", "Óleo de gergelim", "Pimenta", "Alho"],
    steps: ["Esmague pepinos com a lateral da faca.", "Quebre em pedaços irregulares.", "Salgue e deixe 10 minutos.", "Esprema a água.", "Tempere com shoyu, vinagre, gergelim e alho.", "Sirva gelado."],
    difficulty: "Fácil", time: "15 min", description: "Pepino esmigalhado que absorve mais tempero que o cortado — técnica simples e genial." },

  { id: "nasu-dengaku", name: "Nasu Dengaku (Berinjela com Miso)", category: "Entradas", image: "nasu-dengaku",
    ingredients: ["4 berinjelas japonesas", "Miso branco", "Mirin", "Açúcar", "Sake", "Gergelim"],
    steps: ["Corte berinjelas ao meio.", "Faça cortes em grade na polpa.", "Frite ou grelhe até macias.", "Prepare pasta de miso doce.", "Espalhe miso sobre as berinjelas.", "Gratine e polvilhe gergelim."],
    difficulty: "Fácil", time: "20 min", description: "Berinjela grelhada com pasta de miso doce — dengaku é uma das técnicas mais antigas de cozinha japonesa." },

  { id: "mentaiko", name: "Mentaiko (Ovas de Bacalhau Temperadas)", category: "Entradas", image: "mentaiko",
    ingredients: ["200g de ovas de bacalhau (tarako)", "Pimenta coreana", "Sake", "Mirin", "Shoyu", "Yuzu"],
    steps: ["Limpe delicadamente as ovas.", "Marine em sake, mirin e shoyu.", "Adicione pimenta coreana e yuzu.", "Deixe marinar 24-48 horas.", "Corte em porções.", "Sirva com arroz ou como pasta."],
    difficulty: "Médio", time: "48h (marinada)", description: "Ovas de bacalhau temperadas com pimenta — especialidade de Fukuoka, presente em onigiri de konbini." },

  { id: "ume-kyuri", name: "Ume Kyūri (Pepino com Ameixa)", category: "Entradas", image: "ume-kyuri",
    ingredients: ["3 pepinos japoneses", "3 umeboshi (ameixa em conserva)", "Shoyu", "Mirin", "Katsuobushi"],
    steps: ["Corte pepinos em rodelas.", "Desfie umeboshi removendo o caroço.", "Misture pepino com pasta de umeboshi.", "Tempere com shoyu e mirin.", "Cubra com katsuobushi.", "Sirva gelado."],
    difficulty: "Fácil", time: "10 min", description: "Pepino com ameixa salgada — combinação refrescante e azeda perfeita para o verão." },

  // ============ SOPAS (10) ============
  { id: "asari-misoshiru", name: "Asari Misoshiru (Missoshiru de Amêijoa)", category: "Sopas", image: "asari-misoshiru",
    ingredients: ["300g de amêijoas (asari)", "Miso branco", "Água", "Negi", "Tofu"],
    steps: ["Deixe amêijoas em água salgada 2h.", "Coloque em panela com água fria.", "Aqueça até abrirem.", "Dissolva miso.", "Adicione tofu em cubos.", "Sirva com negi."],
    difficulty: "Fácil", time: "20 min", description: "Missoshiru com amêijoas — o caldo das conchas substitui o dashi, criando sabor oceânico profundo." },

  { id: "kakitama-jiru", name: "Kakitama Jiru (Sopa de Ovo)", category: "Sopas", image: "kakitama-jiru",
    ingredients: ["2 ovos", "Dashi", "Shoyu claro", "Mirin", "Amido", "Mitsuba", "Sal"],
    steps: ["Prepare dashi e tempere com shoyu e mirin.", "Engrosse levemente com amido.", "Bata os ovos.", "Despeje em fio fino no caldo fervente.", "Mexa delicadamente em uma direção.", "Sirva com mitsuba."],
    difficulty: "Fácil", time: "10 min", description: "Sopa clara com fios de ovo flutuando — visual delicado e sabor reconfortante." },

  { id: "sumashi-jiru", name: "Sumashi Jiru (Consomê Japonês)", category: "Sopas", image: "sumashi-jiru",
    ingredients: ["Dashi premium", "Shoyu claro", "Sal", "Tofu", "Wakame", "Mitsuba", "Yuzu"],
    steps: ["Prepare dashi com kombu e katsuobushi.", "Tempere delicadamente com shoyu claro e sal.", "O caldo deve ser cristalino.", "Adicione tofu e wakame.", "Sirva em tigela lacada.", "Decore com mitsuba e casca de yuzu."],
    difficulty: "Médio", time: "20 min", description: "O consomê japonês — transparente como água, mas com profundidade de sabor. O teste de um bom chef." },

  { id: "suimono", name: "Suimono (Sopa Clara Kaiseki)", category: "Sopas", image: "suimono",
    ingredients: ["Dashi ichiban (primeira extração)", "Sal marinho", "Shoyu usukuchi", "Camarão ou peixe branco", "Mitsuba", "Yuzu"],
    steps: ["Extraia dashi ichiban perfeito.", "Tempere minimamente com sal e shoyu claro.", "Prepare o wan-dane (ingrediente principal).", "Coloque na tigela lacada.", "Despeje caldo delicadamente.", "Decore com tsuma e suikuchi (aroma)."],
    difficulty: "Avançado", time: "30 min", description: "A sopa mais refinada da culinária kaiseki — cada elemento tem significado e proporção exata." },

  { id: "kenchinjiru", name: "Kenchin Jiru", category: "Sopas", image: "kenchinjiru",
    ingredients: ["Daikon", "Cenoura", "Gobō", "Konnyaku", "Tofu", "Satoimo", "Óleo de gergelim", "Dashi", "Shoyu"],
    steps: ["Corte vegetais em pedaços irregulares.", "Refogue em óleo de gergelim.", "Adicione dashi e cozinhe.", "Acrescente tofu esfarelado.", "Tempere com shoyu.", "Sirva quente com negi."],
    difficulty: "Fácil", time: "30 min", description: "Sopa de templo budista (shojin ryori) — originária do templo Kencho-ji em Kamakura." },

  { id: "butajiru", name: "Butajiru (Sopa de Porco com Miso)", category: "Sopas", image: "butajiru",
    ingredients: ["200g de barriga de porco fatiada", "Daikon", "Cenoura", "Konnyaku", "Gobō", "Tofu", "Miso", "Negi"],
    steps: ["Corte porco e vegetais.", "Refogue o porco levemente.", "Adicione vegetais e água.", "Cozinhe até macio.", "Dissolva miso.", "Sirva com negi abundante."],
    difficulty: "Fácil", time: "30 min", description: "Tonjiru mais substancial — a gordura do porco enriquece o miso. Refeição completa em uma tigela." },

  { id: "nameko-misoshiru", name: "Nameko Misoshiru", category: "Sopas", image: "nameko-misoshiru",
    ingredients: ["100g de nameko (cogumelo escorregadio)", "Miso", "Dashi", "Tofu", "Negi"],
    steps: ["Prepare dashi.", "Adicione nameko (não precisa cortar).", "Cozinhe 2 minutos.", "Adicione tofu em cubos.", "Dissolva miso.", "Sirva com negi."],
    difficulty: "Fácil", time: "10 min", description: "Missoshiru com cogumelos nameko — textura escorregadia única que os japoneses adoram." },

  { id: "ozoni", name: "Ozōni (Sopa de Ano Novo)", category: "Sopas", image: "ozoni",
    ingredients: ["Mochi", "Frango", "Cenoura", "Daikon", "Mitsuba", "Yuzu", "Dashi claro", "Shoyu claro"],
    steps: ["Prepare dashi com frango.", "Corte vegetais em formas decorativas.", "Cozinhe vegetais no caldo.", "Grelhe mochi até inflar.", "Coloque mochi na tigela.", "Despeje caldo com vegetais. Decore com yuzu."],
    difficulty: "Médio", time: "40 min", description: "Sopa de Ano Novo com mochi — cada região tem receita diferente. É a tradição mais sagrada do Oshōgatsu." },

  { id: "zoni-kanto", name: "Zōni Estilo Kantō", category: "Sopas", image: "zoni-kanto",
    ingredients: ["Mochi quadrado grelhado", "Frango", "Kamaboko", "Komatsuna", "Cenoura", "Dashi", "Shoyu claro"],
    steps: ["Prepare dashi claro.", "Cozinhe frango e vegetais.", "Grelhe mochi quadrado até inflar.", "Arranje ingredientes na tigela.", "Despeje caldo cristalino.", "Decore com yuzu."],
    difficulty: "Médio", time: "30 min", description: "Versão de Tóquio: caldo claro, mochi quadrado grelhado. Oposto ao estilo Kansai que usa miso branco." },

  { id: "corn-potage", name: "Corn Potage (Sopa de Milho)", category: "Sopas", image: "corn-potage",
    ingredients: ["3 espigas de milho doce", "Manteiga", "Cebola", "Leite", "Creme de leite", "Sal", "Pimenta branca"],
    steps: ["Refogue cebola em manteiga.", "Adicione milho e cozinhe.", "Adicione leite e cozinhe 20 min.", "Bata no liquidificador.", "Passe na peneira.", "Finalize com creme. Sirva quente ou frio."],
    difficulty: "Fácil", time: "30 min", description: "Sopa de milho cremosa — vendida em máquinas automáticas quentes no inverno japonês. Comfort food universal." },

  // ============ SOBREMESAS (10) ============
  { id: "matcha-tiramisu", name: "Matcha Tiramisù", category: "Sobremesas Japonesas", image: "matcha-tiramisu",
    ingredients: ["Mascarpone", "Matcha premium", "Biscoitos champagne", "Ovos", "Açúcar", "Leite", "Cacau ou matcha para polvilhar"],
    steps: ["Prepare creme com mascarpone, gemas e açúcar.", "Dissolva matcha em leite morno.", "Mergulhe biscoitos no leite de matcha.", "Monte camadas: biscoito + creme.", "Refrigere 6 horas.", "Polvilhe matcha ou cacau."],
    difficulty: "Médio", time: "6h", description: "Tiramisù com matcha — fusão italo-japonesa que se tornou sensação mundial." },

  { id: "coffee-jelly", name: "Coffee Jelly (Gelatina de Café)", category: "Sobremesas Japonesas", image: "coffee-jelly",
    ingredients: ["Café forte", "Gelatina", "Açúcar", "Creme de leite fresco", "Leite condensado"],
    steps: ["Prepare café forte e adoce.", "Dissolva gelatina no café quente.", "Despeje em formas e refrigere.", "Corte em cubos quando firme.", "Sirva com creme fresco.", "Regue com leite condensado."],
    difficulty: "Fácil", time: "4h", description: "Gelatina de café servida com creme — sobremesa de kissaten (café japonês) popular desde os anos 1960." },

  { id: "shiratama-zenzai", name: "Shiratama Zenzai", category: "Sobremesas Japonesas", image: "shiratama-zenzai",
    ingredients: ["Shiratamako (farinha de arroz glutinoso)", "Anko (pasta de feijão)", "Sal", "Água"],
    steps: ["Misture shiratamako com água até massa macia.", "Forme bolinhas de 2cm.", "Cozinhe em água fervente até flutuarem.", "Mergulhe em água gelada.", "Aqueça anko com água.", "Sirva bolinhas em sopa de anko quente."],
    difficulty: "Fácil", time: "25 min", description: "Bolinhas de arroz em sopa doce de feijão — sobremesa de inverno que aquece a alma." },

  { id: "kinako-mochi", name: "Kinako Mochi", category: "Sobremesas Japonesas", image: "kinako-mochi",
    ingredients: ["Mochi fresco ou grelhado", "Kinako (farinha de soja torrada)", "Açúcar", "Sal", "Kuromitsu (melado preto)"],
    steps: ["Grelhe ou aqueça o mochi.", "Misture kinako com açúcar e pitada de sal.", "Role o mochi quente no kinako.", "Disponha em prato.", "Regue com kuromitsu.", "Coma enquanto quente e macio."],
    difficulty: "Fácil", time: "10 min", description: "Mochi coberto com farinha de soja torrada — sabor nostálgico que remete à infância japonesa." },

  { id: "manju", name: "Manjū", category: "Sobremesas Japonesas", image: "manju",
    ingredients: ["Farinha de trigo", "Açúcar mascavo", "Fermento", "Anko", "Água"],
    steps: ["Misture farinha, açúcar e fermento.", "Adicione água até massa macia.", "Descanse 30 minutos.", "Divida e recheie com anko.", "Feche e molde.", "Cozinhe no vapor 15 minutos."],
    difficulty: "Fácil", time: "1h", description: "Bolinho cozido no vapor recheado com pasta de feijão — presente de viagem (omiyage) clássico." },

  { id: "kuzumochi", name: "Kuzumochi", category: "Sobremesas Japonesas", image: "kuzumochi",
    ingredients: ["Amido de kuzu (arrowroot)", "Água", "Kinako", "Kuromitsu"],
    steps: ["Dissolva kuzu em água.", "Cozinhe mexendo até ficar translúcido.", "Despeje em forma úmida.", "Refrigere até firmar.", "Corte em pedaços.", "Sirva com kinako e kuromitsu."],
    difficulty: "Fácil", time: "2h", description: "Mochi translúcido feito de kuzu — textura bouncy e refrescante. Especialidade dos templos de Kamakura." },

  { id: "mitsu-mame", name: "Mitsu Mame", category: "Sobremesas Japonesas", image: "mitsu-mame",
    ingredients: ["Kanten (agar-agar)", "Mame (ervilhas verdes)", "Mikan (tangerina)", "Mochi", "Anko", "Kuromitsu"],
    steps: ["Prepare gelatina de kanten e corte em cubos.", "Cozinhe ervilhas.", "Prepare pedaços de frutas.", "Monte em tigela: kanten + frutas + mame.", "Adicione anko e mochi.", "Regue com kuromitsu gelado."],
    difficulty: "Fácil", time: "1h", description: "Salada de frutas japonesa com kanten e feijão — sobremesa colorida e refrescante de verão." },

  { id: "age-manju", name: "Age Manjū (Manjū Frito)", category: "Sobremesas Japonesas", image: "age-manju",
    ingredients: ["Manjū preparado", "Massa de tempurá", "Óleo para fritura", "Matcha em pó"],
    steps: ["Prepare manjū e esfrie.", "Faça massa de tempurá leve.", "Mergulhe manjū na massa.", "Frite a 170°C até dourar.", "Escorra bem.", "Polvilhe matcha. Sirva quente."],
    difficulty: "Médio", time: "30 min", description: "Manjū frito em massa de tempurá — a crocância quente com anko cremoso é irresistível." },

  { id: "zunda-mochi", name: "Zunda Mochi", category: "Sobremesas Japonesas", image: "zunda-mochi",
    ingredients: ["Mochi fresco", "Edamame descascado", "Açúcar", "Sal", "Água"],
    steps: ["Cozinhe edamame e descasque.", "Processe até formar pasta grossa.", "Adicione açúcar e sal.", "Prepare mochi fresco.", "Cubra mochi com pasta de edamame.", "Sirva em tigela decorada."],
    difficulty: "Fácil", time: "30 min", description: "Mochi com pasta verde de edamame — especialidade de Sendai/Miyagi que explodiu em popularidade." },

  { id: "kurikinton", name: "Kurikinton (Purê de Castanha)", category: "Sobremesas Japonesas", image: "kurikinton",
    ingredients: ["Castanhas japonesas (kuri)", "Batata-doce", "Açúcar", "Mirin", "Gardênia (para cor)"],
    steps: ["Cozinhe batata-doce e amasse.", "Cozinhe castanhas e quebre ao meio.", "Misture purê com açúcar e mirin.", "Junte as castanhas.", "Cozinhe até brilhante.", "Molde e sirva como parte do osechi."],
    difficulty: "Médio", time: "1h", description: "Purê dourado de castanha — obrigatório no osechi (comida de Ano Novo). A cor dourada simboliza riqueza." },

  // ============ MOLHOS & TEMPEROS (5) ============
  { id: "mentsuyu-caseiro", name: "Mentsuyu Caseiro", category: "Molhos & Temperos", image: "mentsuyu-caseiro",
    ingredients: ["Shoyu", "Mirin", "Sake", "Katsuobushi", "Kombu", "Açúcar"],
    steps: ["Aqueça mirin e sake para evaporar álcool.", "Adicione shoyu e açúcar.", "Junte kombu e katsuobushi.", "Cozinhe 5 minutos.", "Coe e esfrie.", "Conserve na geladeira por 2 semanas."],
    difficulty: "Fácil", time: "15 min", description: "Base universal para soba, udon, tempurá e muito mais — ter mentsuyu caseiro muda tudo." },

  { id: "gomadare", name: "Gomadare (Molho de Gergelim)", category: "Molhos & Temperos", image: "gomadare",
    ingredients: ["Tahine de gergelim", "Shoyu", "Vinagre de arroz", "Açúcar", "Dashi", "Miso (opcional)"],
    steps: ["Misture tahine com shoyu.", "Adicione vinagre e açúcar.", "Acrescente dashi para diluir.", "Adicione miso se desejar.", "Mexa até homogêneo.", "Use para shabu-shabu e saladas."],
    difficulty: "Fácil", time: "5 min", description: "Molho cremoso de gergelim — parceiro inseparável do shabu-shabu e saladas japonesas." },

  { id: "rayu", name: "Rayu (Óleo de Pimenta)", category: "Molhos & Temperos", image: "rayu",
    ingredients: ["Óleo de gergelim", "Pimenta vermelha seca", "Alho", "Gengibre", "Negi", "Sansho", "Sal"],
    steps: ["Pique pimentas, alho e gengibre.", "Aqueça óleo a 180°C.", "Despeje sobre a mistura de pimentas.", "Vai estalar e borbulhar.", "Adicione sansho e sal.", "Deixe descansar 24h antes de usar."],
    difficulty: "Fácil", time: "24h", description: "Óleo de pimenta japonês — essencial para ramen e gyoza. Versão caseira é muito superior à comprada." },

  { id: "shichimi-togarashi", name: "Shichimi Togarashi Caseiro", category: "Molhos & Temperos", image: "shichimi-togarashi",
    ingredients: ["Pimenta vermelha", "Sansho", "Gergelim", "Nori", "Casca de yuzu seca", "Gengibre seco", "Semente de cânhamo"],
    steps: ["Torre cada ingrediente separadamente.", "Moa grosseiramente no pilão.", "Misture as 7 especiarias.", "Ajuste proporções ao gosto.", "Armazene em pote hermético.", "Use em udon, soba, yakitori e mais."],
    difficulty: "Fácil", time: "20 min", description: "Blend de 7 especiarias — cada loja em Kyoto tem sua receita secreta desde o século XVII." },

  { id: "nikiri-shoyu", name: "Nikiri Shoyu (Shoyu de Sushiman)", category: "Molhos & Temperos", image: "nikiri-shoyu",
    ingredients: ["Shoyu premium", "Mirin", "Sake", "Dashi (opcional)"],
    steps: ["Ferva mirin e sake para evaporar álcool.", "Adicione shoyu.", "Aqueça sem ferver.", "Coe se necessário.", "Esfrie.", "Use para pincelar sushi — nunca mergulhe."],
    difficulty: "Fácil", time: "10 min", description: "O shoyu refinado que sushimans pincelam no nigiri — mais suave e aromático que shoyu puro." },
];
