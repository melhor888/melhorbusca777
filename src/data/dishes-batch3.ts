import { Dish } from "./dishes";

export const dishesBatch3: Dish[] = [
  // ============ PRATOS TRADICIONAIS (9) ============
  {
    id: "negitoro-maki", name: "Negitoro Maki", category: "Pratos Tradicionais", image: "negitoro-maki",
    ingredients: ["200g de barriga de atum (toro) raspada", "Cebolinha (negi) picada fina", "Arroz japonês temperado", "Folhas de nori", "Gergelim", "Wasabi"],
    steps: ["Pique o toro do atum finamente até formar pasta.", "Misture com cebolinha picada e um toque de shoyu.", "Coloque nori sobre a esteira de bambu.", "Espalhe arroz sobre o nori.", "Distribua a mistura de negitoro no centro.", "Enrole firme e corte em 6-8 pedaços."],
    difficulty: "Médio", time: "30 min", description: "Negitoro combina a gordura cremosa do toro com cebolinha fresca. Um dos makis mais populares do Japão." },
  {
    id: "inari-sushi", name: "Inari Sushi", category: "Pratos Tradicionais", image: "inari-sushi",
    ingredients: ["8 bolsinhas de aburaage (tofu frito)", "2 xícaras de arroz de sushi", "200ml de dashi", "3 col. de açúcar", "2 col. de shoyu", "Gergelim torrado"],
    steps: ["Cozinhe o aburaage em dashi, açúcar e shoyu até absorver.", "Deixe esfriar e abra os bolsinhos com cuidado.", "Prepare o arroz de sushi e misture com gergelim.", "Recheie cada bolsinho com arroz temperado.", "Feche dobrando a abertura para baixo.", "Sirva em temperatura ambiente."],
    difficulty: "Fácil", time: "40 min", description: "Sushi em bolsinha de tofu frito doce. Nomeado em honra a Inari, divindade das raposas que adoram tofu frito." },
  {
    id: "kanpyo-maki", name: "Kanpyo Maki", category: "Pratos Tradicionais", image: "kanpyo-maki",
    ingredients: ["Kanpyo (tiras de cabaça seca)", "Arroz japonês temperado", "Nori", "Shoyu", "Mirin", "Açúcar", "Dashi"],
    steps: ["Hidrate o kanpyo em água por 30 minutos.", "Cozinhe em dashi, shoyu, mirin e açúcar até macio.", "Prepare o arroz de sushi.", "Coloque nori na esteira, espalhe arroz.", "Disponha tiras de kanpyo cozido no centro.", "Enrole e corte em pedaços."],
    difficulty: "Fácil", time: "50 min", description: "Maki tradicional com tiras de cabaça cozidas em molho doce. Um dos sushis mais antigos e clássicos do Japão." },
  {
    id: "ebi-nigiri", name: "Nigiri de Ebi (Camarão)", category: "Pratos Tradicionais", image: "ebi-nigiri",
    ingredients: ["8 camarões grandes", "Arroz japonês temperado", "Wasabi", "Espetos de bambu", "Vinagre de arroz"],
    steps: ["Espete os camarões retos com espetos de bambu.", "Cozinhe em água fervente por 2 minutos.", "Resfrie em água gelada e remova espetos e cascas.", "Abra os camarões em borboleta pela barriga.", "Molde porções de arroz de 20g.", "Coloque wasabi e o camarão sobre o arroz."],
    difficulty: "Médio", time: "35 min", description: "Nigiri de camarão cozido é um clássico da vitrine de sushi. O camarão deve ficar reto e com cor rosada vibrante." },
  {
    id: "tobiuo-sushi", name: "Tobiko Gunkan", category: "Pratos Tradicionais", image: "tobiuo-sushi",
    ingredients: ["100g de tobiko (ovas de peixe voador)", "Arroz japonês temperado", "Tiras de nori", "Pepino em cubinhos", "Wasabi"],
    steps: ["Molde porções ovais de arroz.", "Envolva cada porção com tira de nori.", "Adicione um toque de wasabi.", "Preencha com tobiko generosamente.", "Decore com cubinhos de pepino.", "Sirva imediatamente."],
    difficulty: "Fácil", time: "20 min", description: "Gunkan com ovas de peixe voador — crocantes e estourantes. As ovas podem ser naturais (laranja) ou temperadas (wasabi, yuzu)." },
  {
    id: "anago-sushi", name: "Anago Sushi (Congro)", category: "Pratos Tradicionais", image: "anago-sushi",
    ingredients: ["200g de anago (congro do mar) cozido", "Arroz japonês temperado", "Molho nitsume (redução de caldo de anago)", "Gergelim", "Sansho"],
    steps: ["Aqueça o anago cozido brevemente no vapor.", "Corte em fatias do tamanho do nigiri.", "Molde porções de arroz.", "Coloque o anago sobre o arroz.", "Pincele com molho nitsume.", "Polvilhe gergelim e sansho."],
    difficulty: "Médio", time: "30 min", description: "Anago é congro do mar, mais delicado que unagi. É o sushi de encerramento em muitos omakase de Tóquio." },
  {
    id: "futomaki-deluxe", name: "Futomaki Deluxe", category: "Pratos Tradicionais", image: "futomaki-deluxe",
    ingredients: ["Arroz japonês temperado", "Nori inteiro", "Kanpyo cozido", "Shiitake cozido", "Pepino", "Tamagoyaki", "Denbu (flocos de peixe rosa)", "Camarão cozido"],
    steps: ["Prepare todos os recheios em tiras longas.", "Coloque nori inteiro na esteira de bambu.", "Espalhe arroz generosamente, deixando 2cm no topo.", "Disponha os recheios em linha no centro.", "Enrole com firmeza usando a esteira.", "Corte em 8 fatias com faca molhada."],
    difficulty: "Avançado", time: "50 min", description: "O futomaki deluxe tem 7+ recheios e é cortado revelando um corte transversal colorido. Presente em celebrações." },
  {
    id: "tai-sashimi", name: "Sashimi de Tai (Pargo)", category: "Pratos Tradicionais", image: "tai-sashimi",
    ingredients: ["200g de tai (pargo vermelho) fresco", "Shoyu", "Wasabi fresco", "Gengibre em conserva", "Shiso", "Daikon em fios"],
    steps: ["Filé o pargo removendo pele e espinhas.", "Corte em fatias finas de 3mm (usuzukuri).", "Disponha as fatias em leque sobre o prato.", "Decore com fios de daikon e folhas de shiso.", "Sirva com wasabi fresco e shoyu à parte.", "Acompanhe com gengibre em conserva."],
    difficulty: "Avançado", time: "20 min", description: "Tai (pargo) é o peixe mais nobre da culinária japonesa, servido em celebrações. O corte fino (usuzukuri) é essencial." },
  {
    id: "kohada-sushi", name: "Kohada Sushi (Sardinha Curada)", category: "Pratos Tradicionais", image: "kohada-sushi",
    ingredients: ["4 sardinhas kohada pequenas", "Sal grosso", "Vinagre de arroz", "Arroz japonês temperado", "Gengibre em conserva"],
    steps: ["Limpe as sardinhas removendo escamas e vísceras.", "Abra em borboleta e cure em sal por 30 min.", "Lave e marine em vinagre de arroz por 30 min.", "Remova a pele prateada parcialmente (para visual).", "Molde o arroz e coloque a kohada por cima.", "O brilho prateado é a marca deste sushi."],
    difficulty: "Avançado", time: "1h 30min", description: "Kohada curada é considerada o sushi que revela a habilidade do itamae. A cura perfeita equilibra sal, vinagre e frescor." },

  // ============ MASSAS JAPONESAS (9) ============
  {
    id: "champon", name: "Champon (Ramen de Nagasaki)", category: "Massas Japonesas", image: "champon",
    ingredients: ["200g de macarrão champon (grosso)", "Carne de porco fatiada", "Camarões e lulas", "Repolho e moyashi", "Kamaboko", "Caldo de frango e porco com leite", "Óleo de gergelim"],
    steps: ["Refogue a carne de porco em óleo quente.", "Adicione frutos do mar e refogue rapidamente.", "Acrescente vegetais e refogue por 2 min.", "Despeje o caldo e leve para ferver.", "Adicione o macarrão direto no caldo.", "Cozinhe até o macarrão ficar al dente."],
    difficulty: "Médio", time: "30 min", description: "Ramen de origem chinesa adaptado em Nagasaki. Diferente do ramen comum, o macarrão cozinha direto no caldo com os ingredientes." },
  {
    id: "sara-udon", name: "Sara Udon (Macarrão Crocante)", category: "Massas Japonesas", image: "sara-udon",
    ingredients: ["200g de macarrão fino crocante (frito)", "Carne de porco", "Camarões", "Repolho e cenoura", "Moyashi", "Caldo engrossado com amido"],
    steps: ["Frite o macarrão fino até ficar crocante.", "Refogue carne e frutos do mar separadamente.", "Adicione vegetais e refogue.", "Prepare o caldo e engrosse com amido.", "Disponha o macarrão crocante no prato.", "Despeje os ingredientes com molho por cima."],
    difficulty: "Médio", time: "25 min", description: "Macarrão crocante de Nagasaki coberto com vegetais em molho espesso. A textura crocante amolecendo no molho é a graça." },
  {
    id: "wanko-soba", name: "Wanko Soba", category: "Massas Japonesas", image: "wanko-soba",
    ingredients: ["500g de soba fresca", "Caldo tsuyu quente", "Toppings variados: nori, cebolinha, wasabi", "Tempura kakiage", "Ovo de codorna", "Gengibre", "Gergelim"],
    steps: ["Cozinhe a soba e divida em pequenas porções.", "Aqueça o caldo tsuyu.", "Prepare todos os toppings em pratinhos separados.", "Sirva uma porção de soba em tigela pequena.", "Despeje caldo quente por cima.", "Reponha a cada tigela vazia — o desafio é comer muitas!"],
    difficulty: "Fácil", time: "30 min", description: "Tradição de Iwate: soba servida em mini tigelas continuamente até o cliente tampar a tigela. Competições chegam a 100+ tigelas!" },
  {
    id: "ankake-yakisoba", name: "Ankake Yakisoba", category: "Massas Japonesas", image: "ankake-yakisoba",
    ingredients: ["200g de macarrão chinês crocante", "Carne de porco fatiada", "Repolho e cenoura", "Cogumelos kikurage", "Broto de feijão", "Caldo de frango engrossado com amido"],
    steps: ["Frite o macarrão em frigideira até crocante.", "Refogue a carne e os vegetais em fogo alto.", "Adicione caldo de frango e tempere com shoyu.", "Engrosse com amido diluído em água.", "Coloque o macarrão crocante no prato.", "Despeje o ankake (molho espesso) por cima."],
    difficulty: "Médio", time: "25 min", description: "Especialidade de Nagoya: macarrão crocante coberto com molho espesso (ankake). O contraste de texturas é viciante." },
  {
    id: "zaru-soba", name: "Zaru Soba (Soba Fria no Bambu)", category: "Massas Japonesas", image: "zaru-soba",
    ingredients: ["200g de soba seca ou fresca", "Mentsuyu (molho de mergulho)", "Cebolinha picada", "Wasabi", "Nori picado", "Gengibre ralado"],
    steps: ["Cozinhe a soba em bastante água fervente.", "Escorra e lave em água corrente gelada.", "Esfregue os nódulos para remover amido.", "Disponha sobre a esteira de bambu (zaru).", "Prepare o mentsuyu gelado em copos individuais.", "Mergulhe a soba no molho e saboreie."],
    difficulty: "Fácil", time: "15 min", description: "A forma mais pura de apreciar soba: fria, sobre bambu, com molho à parte. No verão japonês é refeição diária." },
  {
    id: "curry-udon", name: "Curry Udon", category: "Massas Japonesas", image: "curry-udon",
    ingredients: ["200g de udon fresco", "Curry japonês (restos ou preparado)", "Caldo dashi", "Carne de porco fatiada", "Negi (cebolinha grossa)", "Aburaage"],
    steps: ["Diluia o curry japonês em caldo dashi quente.", "Cozinhe o udon separadamente.", "Refogue a carne e o negi brevemente.", "Adicione o caldo de curry e cozinhe.", "Coloque o udon na tigela.", "Despeje o curry por cima. Cuidado: espirra!"],
    difficulty: "Fácil", time: "20 min", description: "Fusão perfeita: udon em caldo de curry japonês. Prato popular para reaproveitar curry do dia anterior." },
  {
    id: "kitsune-soba", name: "Kitsune Soba", category: "Massas Japonesas", image: "kitsune-soba",
    ingredients: ["200g de soba", "Caldo tsuyu quente", "2 pedaços de aburaage doce", "Negi fatiado", "Kamaboko", "Shichimi togarashi"],
    steps: ["Cozinhe o aburaage em dashi, shoyu, mirin e açúcar.", "Prepare o caldo tsuyu (dashi + shoyu + mirin).", "Cozinhe a soba e escorra.", "Coloque a soba na tigela com caldo quente.", "Disponha o aburaage doce por cima.", "Finalize com negi e shichimi."],
    difficulty: "Fácil", time: "20 min", description: "Soba com tofu frito doce — o mesmo conceito do kitsune udon. Kitsune (raposa) adora aburaage na mitologia japonesa." },
  {
    id: "tanuki-udon", name: "Tanuki Udon", category: "Massas Japonesas", image: "tanuki-udon",
    ingredients: ["200g de udon", "Caldo kakejiru (dashi + shoyu + mirin)", "Tenkasu (pedaços de tempura)", "Negi fatiado", "Kamaboko", "Wakame"],
    steps: ["Prepare o caldo kakejiru aquecido.", "Cozinhe o udon e escorra.", "Coloque o udon na tigela.", "Despeje o caldo quente.", "Adicione tenkasu generosamente.", "Finalize com negi, kamaboko e wakame."],
    difficulty: "Fácil", time: "15 min", description: "Udon simples com pedacinhos crocantes de massa de tempura (tenkasu). O nome 'tanuki' (guaxinim) vem do conceito de 'imitação' — tempura sem o recheio." },
  {
    id: "tsukimi-soba", name: "Tsukimi Soba (Soba da Lua)", category: "Massas Japonesas", image: "tsukimi-soba",
    ingredients: ["200g de soba", "Caldo tsuyu quente", "1 ovo cru", "Nori", "Negi fatiado", "Mitsuba"],
    steps: ["Prepare o caldo tsuyu bem quente.", "Cozinhe a soba e escorra.", "Coloque a soba na tigela com caldo.", "Abra o ovo cru delicadamente no centro.", "Adicione nori e negi ao redor.", "O ovo cru representa a lua cheia — 'tsukimi'."],
    difficulty: "Fácil", time: "15 min", description: "Soba com ovo cru que representa a lua cheia. Consumido especialmente durante o festival Tsukimi (contemplação da lua) no outono." },

  // ============ PRATOS QUENTES (9) ============
  {
    id: "torinabe", name: "Torinabe (Hot Pot de Frango)", category: "Pratos Quentes", image: "torinabe",
    ingredients: ["400g de coxa de frango", "Hakusai", "Negi grosso", "Tofu", "Shirataki", "Cogumelos", "Caldo de frango com sal", "Ponzu para mergulhar"],
    steps: ["Prepare caldo de frango claro.", "Corte o frango e vegetais em pedaços.", "Coloque tudo no donabe com o caldo.", "Cozinhe na mesa em fogo médio.", "Sirva com ponzu e momiji oroshi.", "Finalize com arroz ou udon no caldo restante."],
    difficulty: "Fácil", time: "40 min", description: "Hot pot de frango simples e reconfortante. Popular na região de Hakata (Fukuoka) no inverno." },
  {
    id: "motsunabe", name: "Motsunabe (Hot Pot de Miúdos)", category: "Pratos Quentes", image: "motsunabe",
    ingredients: ["300g de motsu (tripas) de boi limpo", "Nira (cebolinha chinesa) em abundância", "Repolho fatiado", "Tofu", "Alho fatiado", "Caldo miso ou shoyu", "Pimenta togarashi"],
    steps: ["Limpe os miúdos cozinhando em água fervente.", "Prepare o caldo base (miso ou shoyu).", "Disponha repolho e tofu no fundo do donabe.", "Coloque os miúdos por cima.", "Adicione nira, alho e pimenta.", "Cozinhe até o repolho murchar e sirva."],
    difficulty: "Médio", time: "45 min", description: "Especialidade de Fukuoka: hot pot de tripas com muito nira e alho. Rico em colágeno e sabor profundo." },
  {
    id: "mizutaki", name: "Mizutaki (Hot Pot Estilo Hakata)", category: "Pratos Quentes", image: "mizutaki",
    ingredients: ["500g de frango com osso", "Hakusai", "Negi", "Cogumelos", "Tofu", "Caldo de frango leitoso (colágeno)", "Ponzu e momiji oroshi"],
    steps: ["Cozinhe o frango com osso em água por 2h até caldo ficar leitoso.", "Corte vegetais e tofu.", "Sirva o caldo no donabe na mesa.", "Adicione frango e vegetais gradualmente.", "Mergulhe cada peça em ponzu com momiji oroshi.", "Finalize com arroz no caldo (zosui)."],
    difficulty: "Médio", time: "2h 30min", description: "Hot pot de Hakata com caldo de frango opaco rico em colágeno. Diferente de outros nabemono, o caldo é a estrela." },
  {
    id: "ishikari-nabe", name: "Ishikari Nabe (Hot Pot de Salmão)", category: "Pratos Quentes", image: "ishikari-nabe",
    ingredients: ["300g de salmão em postas", "Batata em cubos", "Cenoura", "Hakusai", "Tofu", "Caldo dashi com miso", "Manteiga", "Negi"],
    steps: ["Prepare o caldo dashi e dissolva miso.", "Adicione batata e cenoura primeiro.", "Cozinhe por 10 minutos.", "Adicione salmão, tofu e hakusai.", "Cozinhe mais 10 minutos.", "Finalize com um pedaço de manteiga e negi."],
    difficulty: "Fácil", time: "35 min", description: "Hot pot de Hokkaido com salmão e miso. A adição de manteiga é típica da culinária do norte do Japão." },
  {
    id: "nikujaga-yoshoku", name: "Nikujaga Clássico", category: "Pratos Quentes", image: "nikujaga-yoshoku",
    ingredients: ["300g de carne bovina fatiada fina", "3 batatas grandes", "1 cebola", "Cenoura", "Shirataki", "Shoyu, mirin, sake, açúcar", "Dashi"],
    steps: ["Refogue a carne até dourar.", "Adicione cebola e refogue.", "Acrescente batata, cenoura e shirataki.", "Despeje dashi e tempere com shoyu, mirin, sake e açúcar.", "Coloque otoshibuta (tampa flutuante).", "Cozinhe em fogo baixo por 25 min até batata ficar macia."],
    difficulty: "Fácil", time: "40 min", description: "O prato mais 'mãe' do Japão. Nikujaga é comfort food definitivo — todo japonês tem memória afetiva dele." },
  {
    id: "buri-daikon", name: "Buri Daikon (Peixe com Nabo)", category: "Pratos Quentes", image: "buri-daikon",
    ingredients: ["400g de buri (yellowtail) em postas", "1 daikon grande em rodelas", "Shoyu", "Mirin", "Sake", "Açúcar", "Gengibre fatiado"],
    steps: ["Cozinhe o daikon em água de arroz por 20 min (remove amargor).", "Escalde o buri em água fervente e lave em água fria.", "Em uma panela, coloque buri, daikon e gengibre.", "Adicione sake, mirin, açúcar e água.", "Cozinhe por 20 min, adicione shoyu.", "Continue cozinhando até o molho reduzir e brilhar."],
    difficulty: "Médio", time: "1h", description: "Prato de inverno clássico: peixe yellowtail cozido com nabo. O daikon absorve todo o sabor do peixe e do molho." },
  {
    id: "kakuni", name: "Kakuni (Barriga de Porco Cozida)", category: "Pratos Quentes", image: "kakuni",
    ingredients: ["500g de barriga de porco em bloco", "Negi (parte verde)", "Gengibre", "Sake", "Shoyu", "Mirin", "Açúcar", "Mostarda karashi"],
    steps: ["Corte a barriga em cubos de 4cm.", "Cozinhe em água com negi e gengibre por 1h.", "Descarte a água e lave a carne.", "Cozinhe novamente em sake, mirin, açúcar e shoyu.", "Fogo muito baixo por 2h com otoshibuta.", "A carne deve desmanchar com o hashi. Sirva com karashi."],
    difficulty: "Fácil", time: "3h 30min", description: "Barriga de porco que desmancha na boca. Originária de Nagasaki por influência chinesa (dongpo rou). Paciência é o ingrediente secreto." },
  {
    id: "chicken-nanban", name: "Chicken Nanban", category: "Pratos Quentes", image: "chicken-nanban",
    ingredients: ["400g de coxa de frango", "Farinha e ovo para empanar", "Molho nanban (shoyu, vinagre, açúcar)", "Molho tártaro japonês", "Alface para servir"],
    steps: ["Corte o frango em pedaços grandes.", "Empane com farinha e ovo.", "Frite a 170°C até dourar.", "Mergulhe imediatamente no molho nanban quente.", "Prepare tártaro: maionese, ovo cozido, cebola, pickles.", "Sirva o frango com tártaro generoso por cima."],
    difficulty: "Médio", time: "35 min", description: "Frango frito mergulhado em molho agridoce e coberto com tártaro. Especialidade de Miyazaki, sul do Japão." },
  {
    id: "niku-dofu", name: "Niku Dofu (Carne com Tofu)", category: "Pratos Quentes", image: "niku-dofu",
    ingredients: ["200g de carne bovina fatiada", "1 bloco de tofu firme", "1 cebola", "Negi", "Shoyu, mirin, sake, açúcar", "Dashi"],
    steps: ["Corte o tofu em blocos grossos.", "Refogue a carne brevemente.", "Adicione cebola fatiada.", "Acrescente dashi e temperos.", "Coloque o tofu e cozinhe em fogo baixo.", "O tofu absorve o sabor da carne. Sirva com arroz."],
    difficulty: "Fácil", time: "25 min", description: "Versão simplificada do sukiyaki para o dia a dia. Carne e tofu cozidos juntos em molho doce — prato caseiro por excelência." },

  // ============ STREET FOOD (9) ============
  {
    id: "karaage-kun", name: "Karaage Kun (Frango de Konbini)", category: "Street Food", image: "karaage-kun",
    ingredients: ["300g de peito de frango", "Shoyu e sake para marinar", "Gengibre e alho", "Amido de batata", "Óleo para fritura", "Limão"],
    steps: ["Corte o frango em cubos pequenos.", "Marine em shoyu, sake, gengibre e alho por 15 min.", "Empane com amido de batata.", "Frite em porções a 170°C.", "Frite novamente a 180°C para extra crocância.", "Sirva com limão em saquinho de papel."],
    difficulty: "Fácil", time: "30 min", description: "Versão caseira do famoso karaage vendido em konbinis japoneses. Crocante por fora, suculento por dentro." },
  {
    id: "nikuman", name: "Nikuman (Pão Cozido no Vapor)", category: "Street Food", image: "nikuman",
    ingredients: ["Massa: farinha, fermento, açúcar, leite", "Recheio: carne de porco moída", "Cebola, gengibre, shoyu", "Óleo de gergelim", "Ostra sauce"],
    steps: ["Prepare a massa com farinha, fermento, açúcar e leite.", "Descanse a massa por 1h até dobrar.", "Misture o recheio de carne com temperos.", "Divida a massa e recheie cada uma.", "Feche torcendo no topo.", "Cozinhe no vapor por 15 minutos."],
    difficulty: "Médio", time: "2h", description: "Versão japonesa do baozi chinês. Vendido quente em konbinis no inverno — é um abraço em forma de pão." },
  {
    id: "yakitori-kawa", name: "Yakitori de Pele (Kawa)", category: "Street Food", image: "yakitori-kawa",
    ingredients: ["Pele de frango", "Espetos de bambu", "Sal ou molho tare", "Shichimi togarashi"],
    steps: ["Estique a pele de frango e dobre em sanfona.", "Espete em espetos de bambu.", "Grelhe em fogo alto virando frequentemente.", "A gordura deve derreter e a pele ficar ultra crocante.", "Tempere com sal ou pincele tare.", "Sirva com shichimi."],
    difficulty: "Fácil", time: "15 min", description: "O yakitori mais viciante: pele de frango dobrada em sanfona e grelhada até crocantíssima. Gordura caramelizada pura." },
  {
    id: "crepe-harajuku", name: "Crepe de Harajuku", category: "Street Food", image: "crepe-harajuku",
    ingredients: ["Massa de crepe fina", "Chantilly fresco", "Morangos e banana", "Chocolate derretido", "Sorvete", "Granola"],
    steps: ["Prepare a massa de crepe fina e cozinhe.", "Espalhe chantilly generosamente.", "Adicione frutas frescas cortadas.", "Regue com chocolate derretido.", "Adicione uma bola de sorvete.", "Enrole em formato de cone e sirva no papel."],
    difficulty: "Fácil", time: "15 min", description: "Crepes de Harajuku são ícone do street food de Tóquio. Servidos em cone, são coloridos e fotogênicos." },
  {
    id: "age-manju", name: "Age Manju (Manju Frito)", category: "Street Food", image: "age-manju",
    ingredients: ["Massa de manju (farinha, fermento)", "Anko (pasta de feijão azuki)", "Óleo para fritura", "Açúcar de confeiteiro"],
    steps: ["Prepare a massa de manju.", "Recheie com anko e feche.", "Aqueça o óleo a 170°C.", "Frite os manjus até dourar.", "Escorra em papel absorvente.", "Polvilhe açúcar de confeiteiro e sirva quente."],
    difficulty: "Fácil", time: "30 min", description: "Manju frito crocante com recheio quente de anko. Vendido em templos e áreas turísticas de todo o Japão." },
  {
    id: "menchi-katsu", name: "Menchi Katsu (Hambúrguer Frito)", category: "Street Food", image: "menchi-katsu",
    ingredients: ["300g de carne moída mista (boi e porco)", "Cebola picada refogada", "Ovo, panko, farinha", "Noz-moscada", "Molho tonkatsu", "Repolho fatiado"],
    steps: ["Misture a carne com cebola refogada fria, ovo e temperos.", "Molde em formato oval.", "Passe na farinha, ovo batido e panko.", "Frite a 170°C por 5-6 minutos.", "Escorra e corte ao meio (deve sair suculento).", "Sirva com repolho e molho tonkatsu."],
    difficulty: "Médio", time: "35 min", description: "Hambúrguer empanado e frito, crocante por fora e jugoso por dentro. Popular em açougues e barracas de rua." },
  {
    id: "dango-mitarashi", name: "Mitarashi Dango", category: "Street Food", image: "dango-mitarashi",
    ingredients: ["150g de joshinko (farinha de arroz)", "100g de shiratamako (farinha de arroz glutinoso)", "Água morna", "Molho: shoyu, mirin, açúcar, amido"],
    steps: ["Misture as farinhas com água até formar massa macia.", "Forme bolinhas de 2cm.", "Cozinhe em água fervente até flutuarem.", "Espete 3-4 bolinhas por espeto.", "Grelhe levemente até marcar.", "Pincele com molho mitarashi (shoyu-doce) quente."],
    difficulty: "Fácil", time: "30 min", description: "Bolinhas de arroz no espeto com molho doce-salgado de shoyu. O aroma caramelizando no grill é irresistível nos festivais." },
  {
    id: "baby-castella", name: "Baby Castella", category: "Street Food", image: "baby-castella",
    ingredients: ["Farinha de trigo", "Ovos", "Açúcar", "Mel", "Leite", "Forma especial de baby castella"],
    steps: ["Bata ovos com açúcar até espumar.", "Adicione mel e leite.", "Incorpore a farinha peneirada.", "Aqueça a forma especial untada.", "Despeje a massa nas cavidades.", "Cozinhe virando até dourar dos dois lados."],
    difficulty: "Fácil", time: "20 min", description: "Mini bolinhos de castella vendidos em saquinhos nos matsuri (festivais). Macios e com aroma de mel irresistível." },
  {
    id: "kakigori", name: "Kakigori (Raspado de Gelo)", category: "Street Food", image: "kakigori",
    ingredients: ["Gelo em bloco (puro)", "Xarope de morango, matcha ou limão", "Leite condensado", "Mochi pequeno (opcional)", "Anko (opcional)", "Frutas frescas"],
    steps: ["Raspe o bloco de gelo na máquina especial (lâmina fina).", "Monte em uma tigela alta formando montanha.", "Despeje xarope generosamente.", "Adicione leite condensado.", "Decore com frutas, mochi ou anko.", "Sirva imediatamente antes de derreter."],
    difficulty: "Fácil", time: "5 min", description: "Sobremesa de verão essencial no Japão. O gelo deve ser raspado fino como neve — nada de granita grossa." },

  // ============ ENTRADAS (9) ============
  {
    id: "mozuku-su", name: "Mozuku Su (Alga em Vinagre)", category: "Entradas", image: "mozuku-su",
    ingredients: ["100g de mozuku (alga)", "Vinagre de arroz", "Shoyu claro", "Açúcar", "Gengibre ralado", "Pepino em fatias finas"],
    steps: ["Lave o mozuku em água corrente.", "Misture vinagre, shoyu e açúcar para o sanbaizu.", "Coloque o mozuku em tigelas pequenas.", "Despeje o sanbaizu.", "Decore com gengibre ralado.", "Sirva gelado como entrada refrescante."],
    difficulty: "Fácil", time: "10 min", description: "Alga mozuku de Okinawa em vinagre. Rica em nutrientes, é uma das entradas mais saudáveis da culinária japonesa." },
  {
    id: "nasu-nibitashi", name: "Nasu Nibitashi (Berinjela em Dashi)", category: "Entradas", image: "nasu-nibitashi",
    ingredients: ["3 berinjelas japonesas", "300ml de dashi", "2 col. de shoyu", "1 col. de mirin", "Gengibre ralado", "Katsuobushi"],
    steps: ["Corte berinjelas ao meio e faça cortes na pele.", "Grelhe ou frite brevemente.", "Prepare o dashi com shoyu e mirin.", "Coloque as berinjelas no caldo quente.", "Refrigere por 2h ou mais (melhor overnight).", "Sirva frio com gengibre e katsuobushi."],
    difficulty: "Fácil", time: "15 min + marinada", description: "Berinjela marinada fria em dashi. Perfeita para o verão — pode ser preparada no dia anterior." },
  {
    id: "takowasa", name: "Takowasa (Polvo com Wasabi)", category: "Entradas", image: "takowasa",
    ingredients: ["200g de polvo cozido", "Wasabi fresco ou em pasta", "Shoyu", "Gergelim"],
    steps: ["Corte o polvo em cubos pequenos.", "Misture com wasabi fresco a gosto.", "Adicione um fio de shoyu.", "Polvilhe gergelim.", "Refrigere por 10 min.", "Sirva gelado como petisco de izakaya."],
    difficulty: "Fácil", time: "10 min", description: "Petisco de izakaya simples e viciante: polvo em cubos com wasabi. Perfeito com cerveja gelada." },
  {
    id: "tataki-kyuri", name: "Tataki Kyuri (Pepino Esmagado)", category: "Entradas", image: "tataki-kyuri",
    ingredients: ["2 pepinos japoneses", "Sal", "Óleo de gergelim", "Vinagre de arroz", "Alho ralado", "Pimenta togarashi"],
    steps: ["Esmague os pepinos com o lado plano da faca.", "Quebre em pedaços irregulares com as mãos.", "Tempere com sal e deixe descansar 10 min.", "Esprema o excesso de água.", "Tempere com óleo de gergelim, vinagre e alho.", "Sirva gelado."],
    difficulty: "Fácil", time: "15 min", description: "A técnica de esmagar (tataki) quebra as fibras e permite absorver mais tempero. Petisco refrescante em segundos." },
  {
    id: "shirasu-oroshi", name: "Shirasu Oroshi", category: "Entradas", image: "shirasu-oroshi",
    ingredients: ["100g de shirasu (filhotes de sardinha)", "Daikon ralado", "Shoyu", "Limão ou sudachi", "Cebolinha"],
    steps: ["Rale o daikon finamente.", "Esprema o excesso de água.", "Coloque o daikon em uma tigela.", "Distribua shirasu por cima.", "Regue com shoyu e suco cítrico.", "Decore com cebolinha."],
    difficulty: "Fácil", time: "5 min", description: "Shirasu (sardinha bebê) sobre daikon ralado. Prato de Shonan/Kamakura que celebra o sabor do mar." },
  {
    id: "umeboshi-kyuri", name: "Umeboshi com Pepino", category: "Entradas", image: "umeboshi-kyuri",
    ingredients: ["2 pepinos", "3 umeboshi (ameixa em conserva)", "Katsuobushi", "Shoyu", "Gergelim"],
    steps: ["Corte pepinos em rodelas ou bastões.", "Desfaça as umeboshi removendo o caroço.", "Misture a pasta de umeboshi com pepino.", "Adicione katsuobushi.", "Tempere com um fio de shoyu.", "Polvilhe gergelim e sirva."],
    difficulty: "Fácil", time: "5 min", description: "Combinação clássica da cozinha caseira: a acidez da ameixa japonesa com o frescor do pepino." },
  {
    id: "nagaimo-toro", name: "Nagaimo Tororo (Inhame Ralado)", category: "Entradas", image: "nagaimo-toro",
    ingredients: ["200g de nagaimo (inhame japonês)", "Shoyu", "Wasabi", "Nori picado", "Ovo de codorna", "Katsuobushi"],
    steps: ["Descasque o nagaimo (use luvas — é escorregadio).", "Rale finamente até formar creme pegajoso.", "Sirva em uma tigela pequena.", "Adicione shoyu, wasabi e ovo de codorna.", "Decore com nori e katsuobushi.", "Misture tudo antes de comer."],
    difficulty: "Fácil", time: "10 min", description: "Nagaimo ralado tem textura viscosa única. Rico em enzimas digestivas, é considerado alimento medicinal no Japão." },
  {
    id: "yuba-sashimi", name: "Yuba Sashimi (Pele de Leite de Soja)", category: "Entradas", image: "yuba-sashimi",
    ingredients: ["Yuba fresca (pele de leite de soja)", "Shoyu", "Wasabi", "Gengibre ralado", "Cebolinha"],
    steps: ["Disponha as folhas de yuba fresca em um prato.", "Adicione wasabi e gengibre ao lado.", "Sirva com shoyu em pratinho separado.", "Mergulhe a yuba no shoyu como sashimi.", "A textura sedosa e o sabor delicado são a estrela."],
    difficulty: "Fácil", time: "5 min", description: "Yuba é a película que se forma ao aquecer leite de soja. Especialidade de Kyoto e Nikko, de textura sedosa." },
  {
    id: "maguro-yamakake", name: "Maguro Yamakake", category: "Entradas", image: "maguro-yamakake",
    ingredients: ["200g de atum fresco em cubos", "150g de nagaimo ralado", "Shoyu", "Wasabi", "Nori picado", "Cebolinha"],
    steps: ["Corte o atum em cubos de 1.5cm.", "Rale o nagaimo até formar creme viscoso.", "Disponha o atum na tigela.", "Cubra com o nagaimo ralado.", "Tempere com shoyu e wasabi.", "Finalize com nori e cebolinha."],
    difficulty: "Fácil", time: "10 min", description: "Atum cru coberto com inhame japonês ralado. A combinação de texturas é surpreendente e viciante." },

  // ============ SOPAS (9) ============
  {
    id: "asari-misoshiru", name: "Missoshiru de Asari (Vôngole)", category: "Sopas", image: "asari-misoshiru",
    ingredients: ["300g de asari (vôngole)", "400ml de água", "2 col. de miso", "Negi fatiado", "Kombu pequeno"],
    steps: ["Deixe as vôngoles em água salgada por 2h para limpar.", "Aqueça água com kombu.", "Adicione as vôngoles e cozinhe até abrirem.", "Retire do fogo e dissolva o miso.", "Sirva em tigelas com negi.", "As vôngoles fazem seu próprio dashi!"],
    difficulty: "Fácil", time: "15 min + 2h limpeza", description: "Missoshiru com vôngoles frescas — o dashi natural dos mariscos dispensa katsuobushi. Prato de ressaca no Japão." },
  {
    id: "corn-potage", name: "Corn Potage (Sopa Cremosa de Milho)", category: "Sopas", image: "corn-potage",
    ingredients: ["3 espigas de milho", "300ml de leite", "Manteiga", "Caldo de frango", "Sal e pimenta branca", "Salsinha"],
    steps: ["Cozinhe o milho e retire os grãos.", "Bata no liquidificador com leite e caldo.", "Coe para ficar cremoso.", "Aqueça com manteiga, sal e pimenta branca.", "Sirva quente decorado com grãos de milho.", "Popular em konbinis no inverno!"],
    difficulty: "Fácil", time: "30 min", description: "Sopa cremosa de milho adorada no Japão. Vendida quente em máquinas automáticas e konbinis no inverno." },
  {
    id: "suiton", name: "Suiton (Sopa com Bolinhos)", category: "Sopas", image: "suiton",
    ingredients: ["Farinha de trigo", "Água", "Caldo dashi", "Carne de porco", "Daikon, cenoura, gobo", "Shoyu e mirin", "Negi"],
    steps: ["Misture farinha com água para massa mole.", "Prepare caldo com carne e raízes.", "Cozinhe vegetais até ficarem macios.", "Puxe pedaços de massa e jogue no caldo.", "Cozinhe até os bolinhos flutuarem.", "Tempere com shoyu e sirva com negi."],
    difficulty: "Fácil", time: "35 min", description: "Sopa caseira de tempos de guerra que se tornou comfort food. Os bolinhos irregulares de farinha são a alma do prato." },
  {
    id: "noppei-jiru", name: "Noppei Jiru", category: "Sopas", image: "noppei-jiru",
    ingredients: ["Satoimo (taro japonês)", "Daikon", "Cenoura", "Gobo (bardana)", "Shiitake", "Caldo dashi com shoyu", "Amido para engrossar"],
    steps: ["Corte todos os vegetais em pedaços pequenos.", "Cozinhe em caldo dashi.", "Tempere com shoyu, mirin e sal.", "Engrosse levemente com amido.", "Cozinhe até os vegetais ficarem macios.", "Sirva quente — a textura espessa aquece."],
    difficulty: "Fácil", time: "35 min", description: "Sopa espessa de raízes de Niigata. O amido natural do taro já ajuda a engrossar. Prato de inverno reconfortante." },
  {
    id: "zosui", name: "Zosui (Arroz em Caldo)", category: "Sopas", image: "zosui",
    ingredients: ["1 xícara de arroz cozido", "Caldo dashi ou sobras de nabe", "Ovo batido", "Negi", "Nori", "Shoyu", "Gergelim"],
    steps: ["Aqueça o caldo (pode ser sobra de hot pot).", "Adicione o arroz cozido.", "Cozinhe por 5 min até o arroz absorver sabor.", "Despeje ovo batido em fio e mexa.", "Finalize com negi, nori e gergelim.", "A textura é entre arroz e mingau."],
    difficulty: "Fácil", time: "10 min", description: "Zosui é o aproveitamento perfeito do caldo de nabe. Confortante, leve e saboroso — a melhor parte do hot pot." },
  {
    id: "nameko-misoshiru", name: "Missoshiru de Nameko", category: "Sopas", image: "nameko-misoshiru",
    ingredients: ["100g de cogumelos nameko", "400ml de dashi", "2 col. de miso", "Tofu macio em cubos", "Negi fatiado"],
    steps: ["Aqueça o dashi.", "Adicione nameko e tofu.", "Cozinhe por 2 minutos.", "Desligue o fogo e dissolva o miso.", "Aqueça novamente sem ferver.", "Sirva com negi."],
    difficulty: "Fácil", time: "10 min", description: "Nameko são cogumelos pequenos e escorregadios que dão textura única ao missoshiru. Muito popular no Japão." },
  {
    id: "kakitama-jiru", name: "Kakitama Jiru (Sopa de Ovo)", category: "Sopas", image: "kakitama-jiru",
    ingredients: ["2 ovos", "400ml de dashi", "Shoyu claro", "Mirin", "Amido de batata", "Mitsuba ou cebolinha"],
    steps: ["Aqueça o dashi e tempere com shoyu e mirin.", "Engrosse levemente com amido diluído.", "Bata os ovos levemente.", "Com o caldo fervendo, despeje o ovo em fio circular.", "Espere 10 segundos sem mexer.", "Mexa suavemente e sirva com mitsuba."],
    difficulty: "Fácil", time: "10 min", description: "Sopa clara com flocos de ovo — elegante e reconfortante. Técnica de despejar o ovo em fio cria textura delicada." },
  {
    id: "imoni", name: "Imoni (Sopa de Taro)", category: "Sopas", image: "imoni",
    ingredients: ["300g de satoimo (taro)", "200g de carne bovina fatiada", "Konnyaku", "Negi grosso", "Cogumelos", "Shoyu, sake, mirin", "Dashi"],
    steps: ["Descasque e corte o taro em pedaços.", "Cozinhe em dashi até ficar macio.", "Adicione carne, konnyaku e cogumelos.", "Tempere com shoyu, sake e mirin.", "Cozinhe por mais 10 minutos.", "Sirva com negi fatiado."],
    difficulty: "Fácil", time: "40 min", description: "Festival de imoni no outono de Yamagata: centenas de pessoas cozinham em panelas gigantes ao ar livre. Tradição regional amada." },
  {
    id: "sumashi-jiru", name: "Sumashi Jiru", category: "Sopas", image: "sumashi-jiru",
    ingredients: ["400ml de dashi premium", "Shoyu usukuchi", "Sal", "Tofu em cubos", "Wakame", "Fu (glúten de trigo decorativo)", "Yuzu"],
    steps: ["Prepare dashi com kombu e katsuobushi.", "Tempere com shoyu claro e sal.", "Adicione tofu e wakame.", "Aqueça sem ferver.", "Sirva em tigelas laqueadas.", "Finalize com fu e raspa de yuzu."],
    difficulty: "Fácil", time: "15 min", description: "Sopa clara japonesa servida em refeições formais. A transparência do caldo demonstra a pureza dos ingredientes." },

  // ============ SOBREMESAS JAPONESAS (10) ============
  {
    id: "shiratama-zenzai", name: "Shiratama Zenzai", category: "Sobremesas Japonesas", image: "shiratama-zenzai",
    ingredients: ["100g de shiratamako", "Água", "200g de anko (doce)", "Mochi pequeno grelhado", "Sal"],
    steps: ["Misture shiratamako com água até formar massa.", "Forme bolinhas e cozinhe em água fervente.", "Retire quando flutuarem e resfrie em água gelada.", "Aqueça o anko com um pouco de água.", "Sirva as bolinhas no anko quente.", "Adicione mochi grelhado e uma pitada de sal."],
    difficulty: "Fácil", time: "25 min", description: "Bolinhas de arroz glutinoso em sopa doce de feijão azuki. Servido quente no inverno, é aconchego em tigela." },
  {
    id: "yokan", name: "Yokan (Gelatina de Feijão)", category: "Sobremesas Japonesas", image: "yokan",
    ingredients: ["200g de anko (koshian/liso)", "5g de ágar-ágar em pó", "150ml de água", "80g de açúcar"],
    steps: ["Dissolva o ágar-ágar na água e aqueça.", "Adicione açúcar e mexa até dissolver.", "Incorpore o anko e misture bem.", "Cozinhe por 5 minutos mexendo.", "Despeje na forma retangular.", "Refrigere por 3h e corte em fatias."],
    difficulty: "Fácil", time: "20 min + 3h geladeira", description: "Doce tradicional denso de feijão azuki com ágar-ágar. Acompanha perfeitamente chá verde matcha." },
  {
    id: "kinako-mochi", name: "Kinako Mochi", category: "Sobremesas Japonesas", image: "kinako-mochi",
    ingredients: ["Mochi fresco ou kirimochi", "Kinako (farinha de soja torrada)", "Açúcar", "Sal", "Kuromitsu (calda de açúcar mascavo)"],
    steps: ["Grelhe ou cozinhe o mochi até ficar macio e elástico.", "Misture kinako com açúcar e uma pitada de sal.", "Mergulhe o mochi mole em água quente.", "Role no kinako açucarado.", "Regue com kuromitsu.", "Sirva imediatamente enquanto macio."],
    difficulty: "Fácil", time: "10 min", description: "Mochi coberto com farinha de soja torrada e açúcar. O sabor terroso do kinako é nostálgico para todo japonês." },
  {
    id: "kuzumochi", name: "Kuzumochi", category: "Sobremesas Japonesas", image: "kuzumochi",
    ingredients: ["100g de kuzu (amido de kudzu)", "300ml de água", "Kinako", "Kuromitsu (calda de açúcar mascavo)"],
    steps: ["Dissolva o kuzu em água fria.", "Cozinhe em fogo médio mexendo constantemente.", "Quando ficar transparente e espesso, retire do fogo.", "Despeje em forma molhada e resfrie.", "Corte em pedaços.", "Sirva com kinako e kuromitsu."],
    difficulty: "Fácil", time: "20 min", description: "Doce transparente de amido de kudzu com textura única. Especialidade de verão, servido gelado." },
  {
    id: "mitsu-mame", name: "Mitsumame", category: "Sobremesas Japonesas", image: "mitsu-mame",
    ingredients: ["Kanten (ágar-ágar) em cubos", "Anko", "Mikan (tangerina em calda)", "Ervilhas verdes cozidas", "Mochi colorido", "Kuromitsu"],
    steps: ["Prepare o kanten e corte em cubos.", "Cozinhe ervilhas em água com açúcar.", "Prepare ou compre frutas em calda.", "Monte em uma taça: kanten, ervilhas, frutas.", "Adicione anko e mochi.", "Regue com kuromitsu gelado."],
    difficulty: "Fácil", time: "30 min", description: "Sobremesa colorida com cubos de gelatina, frutas e feijão doce. Quando leva sorvete, vira 'cream anmitsu'." },
  {
    id: "sakura-mochi", name: "Sakura Mochi", category: "Sobremesas Japonesas", image: "sakura-mochi",
    ingredients: ["100g de domyojiko (arroz moído grosso)", "Corante rosa alimentício", "Anko", "Folhas de sakura em conserva (salgadas)"],
    steps: ["Cozinhe domyojiko com água e açúcar até ficar macio.", "Adicione corante rosa.", "Divida em porções e recheie com anko.", "Molde em formato oval.", "Envolva com folha de sakura.", "A folha é comestível — o sabor salgado complementa o doce."],
    difficulty: "Fácil", time: "40 min", description: "Doce da primavera envolto em folha de cerejeira. A combinação doce-salgada e o perfume floral são icônicos do hanami." },
  {
    id: "kurikinton", name: "Kurikinton (Purê de Castanha)", category: "Sobremesas Japonesas", image: "kurikinton",
    ingredients: ["300g de batata doce", "10 castanhas em calda (kuri)", "Açúcar", "Mirin", "Gardênia (para cor amarela)"],
    steps: ["Cozinhe batata doce descascada até macia.", "Amasse e passe pela peneira.", "Cozinhe com açúcar e mirin.", "Adicione calda de gardênia para cor dourada.", "Misture as castanhas inteiras.", "Moldando em formato de montanha."],
    difficulty: "Médio", time: "45 min", description: "Doce do Ano Novo (osechi ryori). A cor dourada simboliza riqueza e prosperidade para o ano que vem." },
  {
    id: "zunda-mochi", name: "Zunda Mochi", category: "Sobremesas Japonesas", image: "zunda-mochi",
    ingredients: ["Mochi fresco", "200g de edamame descascado", "Açúcar", "Sal", "Água"],
    steps: ["Cozinhe edamame e descasque.", "Triture no processador com açúcar e sal.", "Deixe com textura levemente granulada.", "Prepare mochi fresco macio.", "Cubra o mochi com a pasta de zunda.", "Sirva em temperatura ambiente."],
    difficulty: "Fácil", time: "25 min", description: "Especialidade de Sendai: mochi coberto com pasta verde de edamame. Sabor doce e vegetal surpreendente." },
  {
    id: "ohagi", name: "Ohagi (Bolinho de Arroz com Anko)", category: "Sobremesas Japonesas", image: "ohagi",
    ingredients: ["1 xícara de mochigome (arroz glutinoso)", "1/2 xícara de arroz comum", "Anko (tsubuan/com pedaços)", "Kinako", "Gergelim preto"],
    steps: ["Cozinhe os dois arrozes juntos.", "Amasse parcialmente (metade dos grãos inteiros).", "Molde em bolas ovais.", "Para anko: envolva o arroz com anko por fora.", "Para kinako: coloque anko dentro e role no kinako.", "Para gergelim: mesmo processo, role no gergelim."],
    difficulty: "Fácil", time: "1h", description: "Bolinho de arroz semi-amassado com anko. Feito durante o equinócio de outono (ohigan) para homenagear ancestrais." },
  {
    id: "nama-chocolate", name: "Nama Chocolate", category: "Sobremesas Japonesas", image: "nama-chocolate",
    ingredients: ["200g de chocolate amargo", "100ml de creme de leite fresco", "1 col. de manteiga", "Cacau em pó", "Matcha em pó (variação)"],
    steps: ["Pique o chocolate e derreta em banho-maria.", "Aqueça o creme sem ferver e despeje sobre o chocolate.", "Adicione manteiga e misture até liso.", "Despeje em forma forrada e refrigere 3h.", "Corte em cubos perfeitos.", "Polvilhe cacau ou matcha antes de servir."],
    difficulty: "Fácil", time: "20 min + 3h geladeira", description: "Chocolate 'fresco' japonês — macio e que derrete na boca. Popularizado por Royce em Hokkaido, é presente favorito." },

  // ============ DONBURI & ARROZ (9) ============
  {
    id: "maguro-don", name: "Maguro Don (Donburi de Atum)", category: "Donburi & Arroz", image: "maguro-don",
    ingredients: ["200g de atum fresco", "Arroz japonês", "Shoyu e mirin para marinar", "Wasabi", "Nori", "Gergelim", "Gema de ovo"],
    steps: ["Corte atum em cubos e marine em shoyu e mirin.", "Prepare arroz quente no donburi.", "Disponha o atum marinado sobre o arroz.", "Adicione gema de ovo no centro.", "Polvilhe gergelim e nori.", "Sirva com wasabi ao lado."],
    difficulty: "Fácil", time: "15 min", description: "Donburi simples com atum marinado em shoyu. Prato rápido e elegante dos mercados de peixe japoneses." },
  {
    id: "butadon", name: "Butadon (Donburi de Porco)", category: "Donburi & Arroz", image: "butadon",
    ingredients: ["300g de barriga de porco fatiada", "Cebola fatiada", "Shoyu, mirin, sake, açúcar", "Gengibre", "Arroz japonês", "Benishoga (gengibre vermelho)"],
    steps: ["Grelhe a barriga de porco até dourar.", "Refogue a cebola até caramelizar.", "Adicione shoyu, mirin, sake e açúcar.", "Cozinhe a carne no molho até absorver.", "Sirva sobre arroz quente.", "Decore com benishoga."],
    difficulty: "Fácil", time: "25 min", description: "Especialidade de Hokkaido: barriga de porco grelhada e caramelizada sobre arroz. Simples e irresistível." },
  {
    id: "negitoro-don", name: "Negitoro Don", category: "Donburi & Arroz", image: "negitoro-don",
    ingredients: ["200g de toro de atum raspado", "Cebolinha picada", "Arroz de sushi", "Wasabi", "Shoyu", "Nori picado", "Gema de ovo"],
    steps: ["Pique o toro finamente ou raspe com colher.", "Misture com cebolinha.", "Coloque arroz de sushi na tigela.", "Disponha o negitoro por cima.", "Adicione gema de ovo crua no centro.", "Sirva com wasabi e shoyu."],
    difficulty: "Fácil", time: "10 min", description: "Negitoro don é luxo acessível: a gordura do toro com cebolinha sobre arroz. Prato de 5 minutos dos pescadores." },
  {
    id: "stamina-don", name: "Stamina Don", category: "Donburi & Arroz", image: "stamina-don",
    ingredients: ["200g de carne bovina", "Nira (cebolinha chinesa)", "Moyashi (broto de feijão)", "Alho fatiado", "Shoyu, mirin, sake", "Gochujang ou doubanjiang", "Ovo frito", "Arroz"],
    steps: ["Refogue alho em óleo quente.", "Adicione a carne e grelhe em fogo alto.", "Acrescente nira e moyashi.", "Tempere com shoyu, mirin e gochujang.", "Sirva sobre arroz quente.", "Cubra com ovo frito (gema mole)."],
    difficulty: "Fácil", time: "15 min", description: "Donburi energético com carne, alho e nira. O nome 'stamina' reflete seu propósito: dar energia máxima." },
  {
    id: "sake-chazuke", name: "Sake Chazuke", category: "Donburi & Arroz", image: "sake-chazuke",
    ingredients: ["Arroz japonês cozido", "Salmão grelhado desfiado", "Chá verde quente ou dashi", "Wasabi", "Nori picado", "Umeboshi", "Gergelim", "Mitsuba"],
    steps: ["Coloque arroz na tigela.", "Disponha salmão grelhado desfiado por cima.", "Adicione wasabi, nori, umeboshi.", "Despeje chá verde quente ou dashi por cima.", "Polvilhe gergelim.", "Misture e saboreie — simples e perfeito."],
    difficulty: "Fácil", time: "10 min", description: "Ochazuke de salmão é o comfort food noturno do Japão. Chá quente sobre arroz com salmão — refeição de 2 minutos." },
  {
    id: "ikura-don", name: "Ikura Don", category: "Donburi & Arroz", image: "ikura-don",
    ingredients: ["150g de ikura (ovas de salmão)", "Arroz de sushi", "Shoyu e mirin (para marinar ikura)", "Shiso", "Wasabi", "Nori picado"],
    steps: ["Marine ikura em shoyu e mirin por 30 min.", "Prepare arroz de sushi.", "Coloque folhas de shiso sobre o arroz.", "Despeje ikura generosamente por cima.", "Decore com nori e wasabi.", "Cada colherada deve ter ovas estourando na boca."],
    difficulty: "Fácil", time: "15 min + marinada", description: "Donburi coberto de ovas de salmão brilhantes. Especialidade de Hokkaido, servido em temporada de salmão." },
  {
    id: "tenshindon", name: "Tenshindon (Donburi de Omelete)", category: "Donburi & Arroz", image: "tenshindon",
    ingredients: ["3 ovos", "Kani kamaboko (surimi)", "Ervilhas", "Cogumelos", "Caldo de frango com amido", "Arroz", "Vinagre de arroz"],
    steps: ["Bata ovos e misture com surimi e ervilhas.", "Faça omelete macia em frigideira.", "Coloque arroz no donburi.", "Deslize a omelete sobre o arroz.", "Prepare o molho: caldo de frango engrossado com amido.", "Despeje o molho brilhante sobre a omelete."],
    difficulty: "Fácil", time: "15 min", description: "Omelete de caranguejo sobre arroz com molho brilhante. Prato sino-japonês popular em restaurantes chineses do Japão." },
  {
    id: "shogayaki-don", name: "Shogayaki Don", category: "Donburi & Arroz", image: "shogayaki-don",
    ingredients: ["300g de porco fatiado fino", "Gengibre fresco ralado", "Shoyu, mirin, sake", "Cebola fatiada", "Repolho fatiado", "Arroz"],
    steps: ["Marine o porco em shoyu, mirin, sake e gengibre.", "Grelhe em fogo alto até caramelizar.", "Refogue a cebola junto.", "Disponha repolho fatiado sobre arroz.", "Coloque o porco grelhado por cima.", "O gengibre dá frescor à gordura do porco."],
    difficulty: "Fácil", time: "20 min", description: "Shogayaki (porco com gengibre) sobre arroz é refeição padrão de trabalhadores japoneses. Rápido, barato e delicioso." },
  {
    id: "una-tama-don", name: "Una-tama Don (Unagi com Ovo)", category: "Donburi & Arroz", image: "una-tama-don",
    ingredients: ["200g de unagi (enguia) grelhada", "3 ovos", "Cebola fatiada", "Dashi, shoyu, mirin", "Arroz", "Sansho"],
    steps: ["Corte a unagi em pedaços.", "Cozinhe cebola em dashi, shoyu e mirin.", "Adicione os pedaços de unagi.", "Despeje ovo batido por cima.", "Tampe e cozinhe até o ovo ficar semicozido.", "Deslize sobre arroz e polvilhe sansho."],
    difficulty: "Médio", time: "20 min", description: "Fusão de unadon com oyakodon: enguia grelhada envolta em ovo macio sobre arroz. Melhor dos dois mundos." },

  // ============ ACOMPANHAMENTOS (9) ============
  {
    id: "hijiki-salada", name: "Hijiki no Nimono", category: "Acompanhamentos", image: "hijiki-salada",
    ingredients: ["30g de hijiki seco", "Aburaage", "Cenoura em tiras", "Edamame", "Shoyu, mirin, sake, açúcar", "Dashi", "Óleo de gergelim"],
    steps: ["Hidrate hijiki em água por 30 min.", "Refogue em óleo de gergelim.", "Adicione cenoura e aburaage.", "Acrescente dashi e temperos.", "Cozinhe em fogo baixo por 20 min.", "Finalize com edamame. Sirva frio."],
    difficulty: "Fácil", time: "50 min", description: "Alga hijiki cozida é acompanhamento caseiro clássico. Rico em ferro e cálcio — presença diária nas refeições." },
  {
    id: "hakusai-tsukemono", name: "Hakusai no Sokuseki Tsukemono", category: "Acompanhamentos", image: "hakusai-tsukemono",
    ingredients: ["1/4 de hakusai (acelga chinesa)", "Sal", "Kombu em tiras", "Pimenta togarashi seca", "Yuzu ou limão (casca)"],
    steps: ["Corte o hakusai em pedaços.", "Polvilhe sal generosamente.", "Adicione kombu, pimenta e yuzu.", "Coloque peso por cima.", "Deixe na geladeira por 2-4 horas.", "Esprema o excesso de água e sirva."],
    difficulty: "Fácil", time: "10 min + 4h", description: "Tsukemono rápido de acelga. Pronto em horas (não dias), é o acompanhamento perfeito para qualquer refeição." },
  {
    id: "kabocha-korokke", name: "Kabocha Korokke", category: "Acompanhamentos", image: "kabocha-korokke",
    ingredients: ["300g de abóbora kabocha", "Cebola picada", "Queijo", "Farinha, ovo, panko", "Sal e pimenta", "Óleo para fritura"],
    steps: ["Cozinhe a kabocha e amasse.", "Refogue cebola e misture com a abóbora.", "Adicione queijo em cubos.", "Molde em forma oval.", "Empane: farinha, ovo, panko.", "Frite a 170°C até dourar."],
    difficulty: "Fácil", time: "40 min", description: "Croquete de abóbora japonesa doce. A kabocha naturalmente adocicada com queijo derretido é combinação perfeita." },
  {
    id: "buta-kakuni-tamago", name: "Nitamago (Ovo Marinado)", category: "Acompanhamentos", image: "buta-kakuni-tamago",
    ingredients: ["6 ovos", "100ml de shoyu", "100ml de mirin", "50ml de sake", "1 col. de açúcar"],
    steps: ["Cozinhe ovos por 6,5 min (gema mole).", "Resfrie em água gelada e descasque.", "Misture shoyu, mirin, sake e açúcar.", "Coloque os ovos em saco ziplock com o molho.", "Marine na geladeira por 6-12h.", "Corte ao meio — a gema deve estar laranja e mole."],
    difficulty: "Fácil", time: "15 min + marinada", description: "Ovo marinado perfeito para ramen. A gema mole e alaranjada absorve o molho criando camadas de sabor." },
  {
    id: "daigaku-imo", name: "Daigaku Imo (Batata Doce Caramelizada)", category: "Acompanhamentos", image: "daigaku-imo",
    ingredients: ["2 batatas doces", "Óleo para fritura", "Açúcar", "Shoyu", "Mirin", "Gergelim preto", "Vinagre"],
    steps: ["Corte batata doce em pedaços irregulares.", "Frite a 160°C até dourar.", "Prepare a calda: açúcar, shoyu, mirin e vinagre.", "Cozinhe a calda até borbulhar e ficar espessa.", "Misture a batata frita na calda.", "Polvilhe gergelim preto."],
    difficulty: "Fácil", time: "30 min", description: "Petisco de universitários (daigaku = universidade). Batata doce frita caramelizada — doce e viciante." },
  {
    id: "gobo-salada", name: "Gobo Salada (Salada de Bardana)", category: "Acompanhamentos", image: "gobo-salada",
    ingredients: ["1 raiz de gobo (bardana)", "1 cenoura", "Maionese japonesa", "Gergelim", "Shoyu", "Vinagre de arroz", "Açúcar"],
    steps: ["Raspe a casca do gobo e corte em tiras finas.", "Deixe de molho em água com vinagre.", "Cozinhe brevemente (deve ficar crocante).", "Corte cenoura em tiras e cozinhe.", "Misture com maionese, shoyu e gergelim.", "Sirva frio como salada."],
    difficulty: "Fácil", time: "25 min", description: "Salada de bardana com maionese é acompanhamento onipresente nos bentôs e konbinis japoneses." },
  {
    id: "komatsuna-ohitashi", name: "Komatsuna Ohitashi", category: "Acompanhamentos", image: "komatsuna-ohitashi",
    ingredients: ["1 maço de komatsuna", "Dashi", "Shoyu claro", "Mirin", "Katsuobushi"],
    steps: ["Cozinhe komatsuna em água fervente por 30 seg.", "Resfrie em água gelada.", "Esprema a água e corte em pedaços de 3cm.", "Misture dashi, shoyu e mirin.", "Despeje o molho sobre a verdura.", "Finalize com katsuobushi."],
    difficulty: "Fácil", time: "10 min", description: "Verdura cozida em dashi — acompanhamento diário japonês. Qualquer folha verde funciona: espinafre, agrião, etc." },
  {
    id: "ume-kyuri", name: "Umeboshi Tataki Kyuri", category: "Acompanhamentos", image: "ume-kyuri",
    ingredients: ["3 pepinos japoneses", "2 umeboshi", "Katsuobushi", "Shoyu", "Óleo de gergelim"],
    steps: ["Esmague pepinos com o lado da faca.", "Quebre em pedaços irregulares.", "Desfaça umeboshi removendo caroço.", "Misture tudo com katsuobushi.", "Adicione shoyu e óleo de gergelim.", "Sirva gelado."],
    difficulty: "Fácil", time: "5 min", description: "Pepino esmagado com umeboshi — feito em 5 minutos. Acompanha qualquer refeição japonesa perfeitamente." },
  {
    id: "satsumaimo-gohan", name: "Satsumaimo Gohan", category: "Acompanhamentos", image: "satsumaimo-gohan",
    ingredients: ["2 xícaras de arroz", "1 batata doce média", "Sake", "Sal", "Gergelim preto"],
    steps: ["Lave o arroz e deixe de molho.", "Corte batata doce em cubos.", "Coloque arroz na panela com sake e sal.", "Distribua batata doce por cima.", "Cozinhe normalmente.", "Misture delicadamente e sirva com gergelim."],
    difficulty: "Fácil", time: "45 min", description: "Arroz cozido com batata doce — prato de outono. A doçura natural da batata perfuma todo o arroz." },

  // ============ IZAKAYA & PETISCOS (9) ============
  {
    id: "tori-kawa-gyoza", name: "Tori Kawa Gyoza (Gyoza de Pele)", category: "Izakaya & Petiscos", image: "tori-kawa-gyoza",
    ingredients: ["Pele de frango", "Nira (cebolinha chinesa)", "Alho", "Gengibre", "Shoyu", "Óleo de gergelim"],
    steps: ["Estique a pele de frango.", "Recheie com nira, alho e gengibre picados.", "Enrole como gyoza.", "Grelhe em frigideira com óleo.", "Adicione água e tampe para vaporizar.", "Finalize em fogo alto para crocância. O colágeno é irresistível."],
    difficulty: "Médio", time: "30 min", description: "Gyoza feito com pele de frango em vez de massa. Rico em colágeno e ultra crocante — hit de izakaya." },
  {
    id: "tataki-gobo", name: "Tataki Gobo", category: "Izakaya & Petiscos", image: "tataki-gobo",
    ingredients: ["1 raiz de gobo", "Gergelim branco torrado", "Vinagre de arroz", "Shoyu", "Açúcar", "Dashi"],
    steps: ["Raspe o gobo e corte em pedaços de 5cm.", "Cozinhe em água com vinagre até levemente macio.", "Bata levemente com rolo para abrir fibras.", "Triture gergelim e misture com vinagre, shoyu e açúcar.", "Misture gobo com o molho de gergelim.", "Sirva em temperatura ambiente."],
    difficulty: "Fácil", time: "25 min", description: "Bardana levemente esmagada em molho de gergelim. Petisco crocante de Ano Novo que simboliza estabilidade." },
  {
    id: "shishamo", name: "Shishamo Grelhado", category: "Izakaya & Petiscos", image: "shishamo",
    ingredients: ["8 shishamo (capelin) com ovas", "Sal", "Limão"],
    steps: ["Polvilhe sal nos peixes.", "Grelhe em fogo médio por 3-4 min de cada lado.", "Os peixes devem ficar crocantes e as ovas cremosas.", "Sirva com limão espremido.", "Coma inteiro — cabeça, espinha e tudo!"],
    difficulty: "Fácil", time: "10 min", description: "Peixe pequeno grelhado inteiro, comido com ovas e tudo. O estourar das ovas na boca é a melhor parte." },
  {
    id: "potato-salada", name: "Potato Salada Japonesa", category: "Izakaya & Petiscos", image: "potato-salada",
    ingredients: ["3 batatas", "1 pepino", "1 cenoura", "Presunto", "Maionese japonesa (Kewpie)", "Vinagre de arroz", "Sal e pimenta"],
    steps: ["Cozinhe batatas e amasse (deixe pedaços).", "Fatie pepino fino, polvilhe sal e esprema.", "Corte cenoura em cubos e cozinhe.", "Corte presunto em tiras.", "Misture tudo com maionese e vinagre.", "Sirva fria — é diferente da ocidental!"],
    difficulty: "Fácil", time: "30 min", description: "Salada de batata japonesa é mais cremosa e com textura. Presença garantida em izakayas e bentôs." },
  {
    id: "chikuwa-isobe", name: "Chikuwa Isobe Age", category: "Izakaya & Petiscos", image: "chikuwa-isobe",
    ingredients: ["4 chikuwa (tubo de peixe)", "Farinha de trigo", "Aonori (alga verde em flocos)", "Água gelada", "Óleo para fritura"],
    steps: ["Corte chikuwa ao meio ou em diagonal.", "Misture farinha, água e aonori para massa.", "Mergulhe chikuwa na massa.", "Frite a 170°C até dourar e ficar crocante.", "Escorra em papel absorvente.", "Sirva quente — perfeito com cerveja."],
    difficulty: "Fácil", time: "15 min", description: "Chikuwa frito com massa de aonori. Petisco barato, rápido e delicioso — clássico de izakaya e bentô." },
  {
    id: "nasu-miso", name: "Nasu Miso Itame", category: "Izakaya & Petiscos", image: "nasu-miso",
    ingredients: ["3 berinjelas japonesas", "Carne de porco moída", "Miso", "Mirin", "Sake", "Açúcar", "Alho e gengibre", "Negi"],
    steps: ["Corte berinjelas em meias-luas.", "Frite em óleo até dourar.", "Refogue carne moída com alho e gengibre.", "Misture miso, mirin, sake e açúcar.", "Combine berinjela com a carne e o molho.", "Finalize com negi."],
    difficulty: "Fácil", time: "20 min", description: "Berinjela refogada com carne e miso — prato caseiro que todo japonês ama. Perfeito sobre arroz quente." },
  {
    id: "toriwasa", name: "Toriwasa (Frango Semicru)", category: "Izakaya & Petiscos", image: "toriwasa",
    ingredients: ["200g de peito de frango fresco (qualidade sashimi)", "Wasabi fresco", "Shoyu", "Gengibre ralado", "Cebolinha", "Gergelim"],
    steps: ["Use frango de altíssima qualidade/frescor.", "Escalfe brevemente em água fervente (30 seg).", "Resfrie imediatamente em água gelada.", "Fatie finamente (o interior fica rosa).", "Sirva com wasabi, shoyu e gengibre.", "Polvilhe cebolinha e gergelim."],
    difficulty: "Avançado", time: "15 min", description: "Sashimi de frango — prato de confiança. Só possível com frango de qualidade sashimi-grade. Petisco de izakayas premium." },
  {
    id: "eihire", name: "Eihire (Asa de Raia Seca)", category: "Izakaya & Petiscos", image: "eihire",
    ingredients: ["Eihire (asa de raia desidratada)", "Maionese japonesa", "Shichimi togarashi", "Limão"],
    steps: ["Grelhe a eihire em fogo baixo até inflar.", "Não deixe queimar — deve ficar levemente tostada.", "Rasgue em tiras com as mãos.", "Sirva com maionese e shichimi.", "Esprema limão por cima.", "Mastigue lentamente — o sabor se intensifica."],
    difficulty: "Fácil", time: "10 min", description: "Petisco seco de izakaya: asa de raia grelhada, rasgada e mergulhada em maionese. Combina perfeitamente com sake." },
  {
    id: "hiyashi-tomato", name: "Hiyashi Tomato", category: "Izakaya & Petiscos", image: "hiyashi-tomato",
    ingredients: ["2 tomates maduros grandes", "Cebola em fatias finas", "Shoyu", "Óleo de gergelim", "Katsuobushi", "Shiso"],
    steps: ["Corte tomates em rodelas grossas.", "Disponha em prato com fatias de cebola.", "Regue com shoyu e óleo de gergelim.", "Cubra com katsuobushi.", "Decore com folhas de shiso.", "Sirva bem gelado."],
    difficulty: "Fácil", time: "5 min", description: "Tomate frio fatiado com katsuobushi é petisco de verão instantâneo. A simplicidade é a sofisticação." },

  // ============ MOLHOS & TEMPEROS (9) ============
  {
    id: "negi-shio-dare", name: "Negi Shio Dare (Molho de Cebolinha e Sal)", category: "Molhos & Temperos", image: "negi-shio-dare",
    ingredients: ["2 talos de negi picados fino", "2 col. de óleo de gergelim", "1 col. de sal", "Suco de limão", "Pimenta preta"],
    steps: ["Pique o negi bem finamente.", "Misture com sal e deixe descansar 5 min.", "Adicione óleo de gergelim e limão.", "Misture e deixe marinar 15 min.", "Use sobre frango grelhado, gyutan ou tofu."],
    difficulty: "Fácil", time: "20 min", description: "Molho universal de izakaya: cebolinha com sal e gergelim. Transforma qualquer proteína grelhada." },
  {
    id: "tosazu", name: "Tosazu (Vinagre com Dashi)", category: "Molhos & Temperos", image: "tosazu",
    ingredients: ["100ml de vinagre de arroz", "50ml de dashi", "2 col. de shoyu claro", "1 col. de mirin", "Katsuobushi"],
    steps: ["Aqueça dashi e adicione katsuobushi.", "Infusione por 5 minutos e coe.", "Misture com vinagre, shoyu e mirin.", "Deixe esfriar completamente.", "Use para sunomono, saladas e marinadas."],
    difficulty: "Fácil", time: "10 min", description: "Vinagre enriquecido com umami do dashi. Base para sunomono e marinadas — muito mais saboroso que vinagre simples." },
  {
    id: "goma-shoyu", name: "Goma Shoyu (Shoyu de Gergelim)", category: "Molhos & Temperos", image: "goma-shoyu",
    ingredients: ["3 col. de gergelim torrado", "3 col. de shoyu", "1 col. de mirin", "1 col. de vinagre", "1 col. de óleo de gergelim", "Açúcar"],
    steps: ["Torre e triture o gergelim.", "Misture com shoyu, mirin e vinagre.", "Adicione óleo de gergelim e açúcar.", "Mexa até dissolver.", "Use para saladas, tofu frio ou verduras."],
    difficulty: "Fácil", time: "5 min", description: "Shoyu cremoso de gergelim para saladas e hiyayakko. O gergelim triturado dá corpo e sabor de nozes." },
  {
    id: "umeboshi-dare", name: "Umeboshi Dare (Molho de Ameixa)", category: "Molhos & Temperos", image: "umeboshi-dare",
    ingredients: ["5 umeboshi grandes", "2 col. de mirin", "1 col. de shoyu", "1 col. de mel", "Katsuobushi moído"],
    steps: ["Remova caroços e amasse as umeboshi.", "Misture com mirin aquecido.", "Adicione shoyu e mel.", "Misture katsuobushi para umami extra.", "Use para peixes grelhados, saladas ou onigiri."],
    difficulty: "Fácil", time: "10 min", description: "Molho agridoce e salgado de ameixa japonesa. Corta a gordura de peixes grelhados perfeitamente." },
  {
    id: "shio-koji", name: "Shio Koji (Sal Fermentado)", category: "Molhos & Temperos", image: "shio-koji",
    ingredients: ["200g de koji (arroz inoculado com Aspergillus)", "60g de sal", "200ml de água"],
    steps: ["Misture koji, sal e água em um pote de vidro.", "Mexa uma vez ao dia.", "Deixe fermentar em temperatura ambiente por 7-10 dias.", "Quando ficar cremoso e doce, está pronto.", "Armazene na geladeira.", "Use para marinar carnes, peixes ou vegetais."],
    difficulty: "Fácil", time: "15 min + 10 dias fermentação", description: "Tempero fermentado mágico que transforma proteínas: amaciante natural e realçador de umami. Revolução da cozinha japonesa moderna." },
  {
    id: "mentsuyu-caseiro", name: "Mentsuyu Caseiro", category: "Molhos & Temperos", image: "mentsuyu-caseiro",
    ingredients: ["200ml de shoyu", "200ml de mirin", "20g de katsuobushi", "1 pedaço de kombu"],
    steps: ["Aqueça mirin para evaporar o álcool.", "Adicione shoyu e kombu.", "Leve para ferver e adicione katsuobushi.", "Cozinhe por 3 minutos.", "Coe e guarde em garrafa.", "Dilua 1:3 com água fria para soba, 1:2 quente para udon."],
    difficulty: "Fácil", time: "15 min", description: "Molho base para todas as massas japonesas. Caseiro é infinitamente melhor que industrializado." },
  {
    id: "dengaku-miso", name: "Dengaku Miso", category: "Molhos & Temperos", image: "dengaku-miso",
    ingredients: ["100g de miso vermelho (hatcho ou aka)", "3 col. de açúcar", "2 col. de mirin", "1 col. de sake", "Gema de ovo"],
    steps: ["Misture miso, açúcar, mirin e sake em panela.", "Cozinhe em fogo baixo mexendo constantemente.", "Adicione gema e continue mexendo.", "Cozinhe até engrossar (5-7 min).", "Use sobre berinjela, tofu ou konnyaku grelhados."],
    difficulty: "Fácil", time: "15 min", description: "Pasta doce de miso para grelhar. Dengaku é a técnica de pincelar miso em ingredientes e grelhar até caramelizar." },
  {
    id: "karashi-su-miso", name: "Karashi Su Miso", category: "Molhos & Temperos", image: "karashi-su-miso",
    ingredients: ["3 col. de miso branco", "1 col. de vinagre de arroz", "1 col. de açúcar", "1 col. de karashi (mostarda japonesa)", "Mirin"],
    steps: ["Misture miso branco com açúcar.", "Adicione vinagre e mirin.", "Incorpore karashi a gosto.", "Mexa até ficar cremoso.", "Use para wakame, takenoko ou lula."],
    difficulty: "Fácil", time: "5 min", description: "Molho agridoce picante de miso com mostarda. Acompanhamento clássico de wakame e frutos do mar." },
  {
    id: "amazu-shoga", name: "Gari Caseiro (Gengibre em Conserva)", category: "Molhos & Temperos", image: "amazu-shoga",
    ingredients: ["200g de gengibre jovem (shin shoga)", "100ml de vinagre de arroz", "3 col. de açúcar", "1 col. de sal"],
    steps: ["Fatie o gengibre finamente com mandolina.", "Escalde em água fervente por 30 seg.", "Misture vinagre, açúcar e sal.", "Coloque o gengibre no vinagre doce.", "Refrigere por pelo menos 24h.", "O gengibre ficará rosado naturalmente."],
    difficulty: "Fácil", time: "15 min + 24h", description: "Gari caseiro é incomparavelmente melhor que industrial. O gengibre jovem fica rosado naturalmente pelo contato com vinagre." },
];
