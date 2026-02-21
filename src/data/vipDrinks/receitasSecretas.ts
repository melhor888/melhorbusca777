import { VipDrink } from "./types";

export const receitasSecretas: VipDrink[] = [
  {
    id: "wagyu-a5-teppanyaki",
    name: "Wagyu A5 Teppanyaki",
    category: "Receitas Secretas do Chef",
    image: "wagyu-a5",
    ingredients: [
      "200g de Wagyu A5 (corte striploin)",
      "Flor de sal",
      "Pimenta-do-reino moída na hora",
      "1 colher de sopa de manteiga sem sal",
      "Wasabi fresco ralado",
      "Molho ponzu",
      "Cebolinha picada",
      "Alho laminado (opcional)"
    ],
    steps: [
      "Retire o Wagyu da geladeira 30 minutos antes de preparar.",
      "Corte em fatias de 1,5cm de espessura, contra as fibras.",
      "Aqueça a chapa teppanyaki ou frigideira de ferro em fogo muito alto.",
      "Tempere o Wagyu apenas com flor de sal e pimenta.",
      "Sele cada lado por 30-45 segundos — a gordura do A5 já lubrifica a superfície.",
      "Adicione a manteiga nos últimos 10 segundos para dourar.",
      "Sirva imediatamente com wasabi fresco e ponzu ao lado.",
      "Finalize com cebolinha picada por cima."
    ],
    difficulty: "Avançado",
    time: "15 min",
    description: "O Wagyu A5 é o ápice da pecuária japonesa — cada fatia derrete na boca com sabor umami intenso. Este preparo teppanyaki respeita o ingrediente, usando calor extremo e poucos temperos para revelar a marmorização perfeita. Servido em restaurantes exclusivos de Kobe e Matsusaka."
  },
  {
    id: "kaiseki-sakizuke",
    name: "Kaiseki Sakizuke (Entrada)",
    category: "Receitas Secretas do Chef",
    image: "kaiseki-sakizuke",
    ingredients: [
      "100g de tofu de seda fresco",
      "50g de uni (ouriço-do-mar)",
      "Dashi primário (ichiban dashi)",
      "1 colher de chá de molho de soja usukuchi",
      "Folha de shiso",
      "Yuzu ralado",
      "Geleia de dashi (dashi gelee)",
      "Flores comestíveis para decoração"
    ],
    steps: [
      "Prepare o ichiban dashi com kombu e katsuobushi de primeira qualidade.",
      "Para a geleia: dissolva 2g de ágar-ágar em 200ml de dashi, adicione usukuchi. Resfrie até firmar.",
      "Corte o tofu de seda em cubos perfeitos de 3cm.",
      "Monte no centro de uma tigela kaiseki — tofu na base, uni por cima.",
      "Quebre a geleia de dashi em cubos delicados ao redor.",
      "Finalize com raspas de yuzu, folha de shiso e flores comestíveis.",
      "Sirva imediatamente a 12°C — temperatura ideal para apreciar cada sabor."
    ],
    difficulty: "Avançado",
    time: "45 min",
    description: "O Sakizuke é o primeiro prato de um jantar Kaiseki, a mais alta expressão da culinária japonesa. Cada elemento representa a estação do ano. Este prato combina a cremosidade do uni com a pureza do tofu, unidos pela geleia de dashi — uma técnica exclusiva de restaurantes com estrela Michelin em Kyoto."
  },
  {
    id: "omakase-sushi-supreme",
    name: "Omakase Sushi Supreme",
    category: "Receitas Secretas do Chef",
    image: "omakase-sushi",
    ingredients: [
      "300g de arroz japonês koshihikari",
      "60ml de vinagre de arroz premium",
      "20g de açúcar",
      "10g de sal",
      "100g de otoro (ventre gordo de atum)",
      "100g de salmão selvagem do Alasca",
      "100g de hamachi (olho-de-boi)",
      "Wasabi fresco (não em pasta)",
      "Gari (gengibre curtido) caseiro",
      "Molho de soja nikiri"
    ],
    steps: [
      "Lave o arroz 7 vezes até a água sair transparente. Deixe descansar 30 min.",
      "Cozinhe o arroz na proporção 1:1,1 (arroz:água). Abafe por 15 min após cozinhar.",
      "Prepare o shari: misture vinagre, açúcar e sal. Incorpore ao arroz com movimentos cortantes usando shamoji.",
      "Resfrie o shari com leque enquanto mistura — deve ficar a 36°C (temperatura corporal).",
      "Corte cada peixe em fatias de 7mm, no ângulo de 45° contra as fibras.",
      "Molde o nigiri: 18g de shari com pressão precisa — firme mas que desfaça na boca.",
      "Aplique um toque de wasabi fresco entre peixe e shari.",
      "Pincele nikiri shoyu por cima — o cliente não deve precisar usar soja.",
      "Sirva peça por peça, na ordem: shiromi (branco), akami (vermelho), toro (gordo)."
    ],
    difficulty: "Avançado",
    time: "90 min",
    description: "Omakase significa 'deixo nas suas mãos' — o chef decide o melhor da temporada. Este sushi supreme segue a tradição dos itamae (mestres sushi) de Tsukiji. A temperatura do shari, o ângulo do corte e a ordem de servir são segredos transmitidos por gerações."
  },
  {
    id: "fugu-sashimi-tessa",
    name: "Fugu Sashimi (Tessa)",
    category: "Receitas Secretas do Chef",
    image: "fugu-sashimi",
    ingredients: [
      "1 baiacu torafugu inteiro (já limpo por chef licenciado)",
      "Ponzu de yuzu premium",
      "Cebolinha em anéis finíssimos",
      "Momiji oroshi (daikon com pimenta)",
      "Folhas de shiso",
      "Prato de porcelana translúcida"
    ],
    steps: [
      "ATENÇÃO: Apenas chefs com licença fugu podem preparar este prato. A tetrodotoxina é letal.",
      "Com a faca yanagiba afiada, corte o fugu em fatias translúcidas de 1mm.",
      "Disponha as fatias em padrão circular (usuzukuri) sobre prato translúcido — a porcelana deve ser visível através do peixe.",
      "Crie um padrão de flor de crisântemo com as fatias sobrepostas.",
      "Coloque momiji oroshi e cebolinha no centro como garnish.",
      "Sirva com ponzu de yuzu em recipiente separado.",
      "O cliente pega 2-3 fatias com hashi, mergulha brevemente no ponzu e aprecia."
    ],
    difficulty: "Avançado",
    time: "40 min",
    description: "O Tessa é o sashimi de baiacu, um dos pratos mais exclusivos e perigosos do Japão. Apenas chefs com anos de treinamento e licença especial podem prepará-lo. As fatias são tão finas que o prato sob elas fica visível — uma demonstração de maestria com a faca. Servido nos melhores restaurantes de Shimonoseki."
  },
  {
    id: "unagi-kabayaki-artesanal",
    name: "Unagi Kabayaki Artesanal",
    category: "Receitas Secretas do Chef",
    image: "unagi-kabayaki",
    ingredients: [
      "2 enguias frescas (já abertas e espinhadas)",
      "200ml de molho de soja",
      "200ml de mirin",
      "100ml de sakê de cozinha",
      "80g de açúcar",
      "Espetos de bambu",
      "Sansho (pimenta japonesa)",
      "Arroz japonês cozido"
    ],
    steps: [
      "Prepare o tare: combine soja, mirin, sakê e açúcar. Reduza em fogo baixo por 30 min até engrossar.",
      "Reserve as espinhas e cabeça da enguia — adicione ao tare para dar mais corpo (técnica secreta).",
      "Espete a enguia nos espetos de bambu em formato de leque.",
      "Grelhe primeiro sem tare por 5 minutos — a gordura natural vai pingar e criar fumaça aromática.",
      "Mergulhe a enguia no tare e volte à grelha. Repita 3-4 vezes (técnica nagareboshi).",
      "A cada banho de tare, a camada anterior carameliza criando um glaze brilhante.",
      "Sirva sobre arroz quente em caixa jubako. Polvilhe sansho por cima.",
      "O molho restante vai em um recipiente ao lado."
    ],
    difficulty: "Avançado",
    time: "60 min",
    description: "O Kabayaki é a técnica milenar de grelhar enguia com tare — um molho que em restaurantes tradicionais é mantido e reabastecido por décadas, acumulando camadas de sabor. Em Tóquio, no bairro de Nihonbashi, existem casas de unagi com mais de 200 anos usando o mesmo tare ancestral."
  },
  {
    id: "sukiyaki-imperial",
    name: "Sukiyaki Imperial",
    category: "Receitas Secretas do Chef",
    image: "sukiyaki-imperial",
    ingredients: [
      "400g de carne bovina wagyu fatiada finamente",
      "1 bloco de tofu firme cortado em cubos",
      "200g de shirataki (macarrão de konjac)",
      "1 alho-poró japonês (negi) fatiado na diagonal",
      "150g de shungiku (crisântemo comestível)",
      "4 ovos caipiras frescos",
      "100ml de molho de soja",
      "80ml de mirin",
      "50ml de sakê",
      "40g de açúcar",
      "Gordura de wagyu para a panela"
    ],
    steps: [
      "Prepare o warishita: misture soja, mirin, sakê e açúcar. Reserve.",
      "Aqueça a panela de ferro sukiyaki. Derreta a gordura de wagyu.",
      "Grelhe as fatias de wagyu brevemente no açúcar — técnica Kanto style.",
      "Adicione o warishita sobre a carne.",
      "Disponha tofu, shirataki, negi e shungiku em setores separados na panela.",
      "Cozinhe em fogo médio, cada convidado serve-se diretamente da panela.",
      "Bata um ovo cru em tigela individual — mergulhe cada pedaço no ovo antes de comer.",
      "Reponha ingredientes conforme forem consumidos."
    ],
    difficulty: "Médio",
    time: "40 min",
    description: "O Sukiyaki Imperial usa wagyu premium e a técnica Kanto de grelhar a carne no açúcar antes de adicionar o caldo. O ovo cru batido serve como molho — a temperatura da carne cozinha levemente o ovo, criando uma textura sedosa. Prato de celebração no inverno japonês."
  },
  {
    id: "ramen-tonkotsu-48h",
    name: "Ramen Tonkotsu 48 Horas",
    category: "Receitas Secretas do Chef",
    image: "ramen-tonkotsu-48h",
    ingredients: [
      "2kg de ossos de porco (fêmur e coluna)",
      "500g de pés de porco",
      "1 cabeça de alho inteira",
      "50g de gengibre",
      "Chashu de barriga de porco",
      "Ovos marinados (ajitsuke tamago)",
      "Macarrão fino fresco (hosomen)",
      "Tare de soja",
      "Óleo de alho negro (mayu)",
      "Negi, nori, gergelim"
    ],
    steps: [
      "Dia 1: Ferva os ossos por 10 min, descarte a água (blanching). Lave bem cada osso.",
      "Cubra com água limpa. Ferva em fogo alto — NÃO reduza o fogo. A fervura vigorosa é essencial.",
      "Após 12h, a gordura e colágeno emulsificam, criando o caldo branco leitoso.",
      "Continue fervendo por mais 12h, repondo água conforme necessário.",
      "Dia 2: Após 24h, adicione alho e gengibre. Continue por mais 24h.",
      "O caldo final deve ser opaco, cremoso e grudento ao esfriar (gelatinoso).",
      "Prepare o chashu: enrole a barriga de porco, braseie em soja, mirin e sakê por 3h.",
      "Ajitsuke tamago: ovos cozidos 6min30s, marinados em tare por 12h.",
      "Monte: tare no fundo, caldo quente, macarrão, chashu fatiado, ovo, mayu, nori, negi."
    ],
    difficulty: "Avançado",
    time: "48h",
    description: "O verdadeiro tonkotsu leva 48 horas de fervura ininterrupta. O segredo está na emulsificação da gordura e colágeno dos ossos, que cria aquele caldo branco e cremoso impossível de replicar com atalhos. Nos yatai (barracas de rua) de Fukuoka, este é o padrão ouro."
  },
  {
    id: "tempura-edomae",
    name: "Tempura Edomae do Mestre",
    category: "Receitas Secretas do Chef",
    image: "tempura-edomae",
    ingredients: [
      "4 camarões grandes (sem casca, nervura removida)",
      "1 berinjela japonesa",
      "1 batata-doce japonesa (satsumaimo)",
      "Shiso fresco",
      "100g de farinha de trigo (cake flour, bem fria)",
      "1 gema de ovo",
      "200ml de água com gás gelada",
      "Óleo de gergelim + óleo vegetal (proporção 3:7)",
      "Tentsuyu (molho de tempurá com dashi)",
      "Daikon ralado, gengibre ralado"
    ],
    steps: [
      "Gele a farinha, o ovo e a água — todos DEVEM estar quase congelando.",
      "Aqueça o óleo a 180°C. Use termômetro — a precisão é crucial.",
      "Prepare o batter: misture gema + água gelada. Adicione a farinha DE UMA VEZ.",
      "Mexa apenas 3-4 vezes com hashi — grumos são DESEJADOS. Overmixing arruina tudo.",
      "Faça cortes no ventre dos camarões para endireitar. Pressione para remover ar.",
      "Mergulhe cada ingrediente no batter e ao óleo. Vegetais a 170°C, camarões a 180°C.",
      "Escute o som: deve ser um chiado agudo e constante. Se diminuir, aumente o fogo.",
      "Retire quando o batter parar de borbulhar — sinal de que a água evaporou.",
      "Sirva em papel washi sobre prato quente, com tentsuyu, daikon e gengibre."
    ],
    difficulty: "Avançado",
    time: "30 min",
    description: "A Tempura Edomae segue a tradição de Edo (antiga Tóquio) onde cada peça é frita individualmente na frente do cliente. O segredo está no batter: farinha gelada, mistura mínima, e grumos que criam aquela textura crocante e leve como renda. Mestres de tempurá treinam por 10 anos."
  },
  {
    id: "soba-teuchi",
    name: "Soba Teuchi (Artesanal)",
    category: "Receitas Secretas do Chef",
    image: "soba-teuchi",
    ingredients: [
      "400g de farinha de trigo sarraceno (sobako)",
      "100g de farinha de trigo comum",
      "220ml de água filtrada",
      "Tsuyu gelado (dashi + soja + mirin)",
      "Negi fatiado fino",
      "Wasabi fresco ralado",
      "Nori em tiras (kizami nori)"
    ],
    steps: [
      "Misture as farinhas (proporção ni-hachi: 80% sarraceno, 20% trigo).",
      "Adicione 70% da água e misture com as mãos em movimento circular.",
      "Aos poucos, adicione o restante da água até formar uma massa que se una.",
      "Amasse por 10 minutos — a massa deve ter a consistência do lóbulo da orelha.",
      "Descanse por 15 minutos enrolada em filme.",
      "Abra com rolo longo (menbo) em retângulo fino de 1,5mm.",
      "Dobre em camadas e corte com faca soba-kiri em fios de 1,5mm uniformes.",
      "Cozinhe em água abundante fervendo por exatamente 60 segundos.",
      "Mergulhe imediatamente em água gelada. Escorra bem.",
      "Sirva sobre esteira de bambu (zaru) com tsuyu, negi e wasabi ao lado."
    ],
    difficulty: "Avançado",
    time: "60 min",
    description: "Teuchi significa 'feito à mão'. Em Tóquio, os melhores mestres de soba cortam cada fio com precisão milimétrica — cada porção tem exatamente o mesmo número de fios. A farinha de sarraceno fresca tem aroma de nozes que desaparece em horas, por isso a massa é feita no momento."
  },
  {
    id: "matcha-kaiseki-dessert",
    name: "Sobremesa Kaiseki de Matcha",
    category: "Receitas Secretas do Chef",
    image: "matcha-kaiseki",
    ingredients: [
      "10g de matcha cerimonial (grau A)",
      "200ml de leite fresco",
      "100ml de creme de leite fresco",
      "50g de açúcar",
      "3 folhas de gelatina",
      "Pasta de feijão azuki (anko)",
      "Mochi fresco cortado em cubos",
      "Folha de ouro comestível",
      "Kuromitsu (calda de açúcar mascavo japonês)"
    ],
    steps: [
      "Peneire o matcha 3 vezes para remover grumos.",
      "Aqueça o leite a 70°C (não ferva). Dissolva o matcha batendo com chasen ou fouet.",
      "Hidrate a gelatina em água gelada por 5 min. Esprema e dissolva no leite com matcha.",
      "Adicione açúcar e creme. Misture bem.",
      "Despeje em moldes individuais. Refrigere por 4 horas.",
      "Prepare bolinhas de anko — devem ter textura lisa e brilhante.",
      "Monte: panna cotta de matcha na base, anko ao lado, cubos de mochi.",
      "Finalize com kuromitsu em fio e uma folha de ouro.",
      "Sirva acompanhado de chá matcha batido (usucha)."
    ],
    difficulty: "Médio",
    time: "4h30",
    description: "Esta sobremesa une a tradição do chá japonês com técnicas modernas de confeitaria. O matcha cerimonial grau A vem de Uji, Kyoto — as folhas são sombreadas por 3 semanas antes da colheita para intensificar o sabor. Combinado com anko e mochi, é a essência do wagashi elevado ao nível kaiseki."
  },
  {
    id: "shabu-shabu-premium",
    name: "Shabu-Shabu Premium",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["400g de wagyu fatiado ultrafino", "1 bloco de tofu momen", "200g de hakusai", "100g de enoki", "100g de shimeji", "Macarrão udon fresco", "Kombu para caldo", "Ponzu caseiro", "Gomadare (molho de gergelim)", "Cebolinha e momiji oroshi"],
    steps: ["Prepare o caldo: coloque kombu em água fria e aqueça lentamente. Retire antes de ferver.", "Corte todos os vegetais e disponha em prato grande.", "O wagyu deve estar fatiado tão fino que se vê através dele.", "Cada convidado pega uma fatia com hashi e mergulha no caldo fervente.", "Agite 2-3 vezes no caldo (shabu-shabu = som do movimento). Retire rosado.", "Mergulhe no ponzu ou gomadare antes de comer.", "Adicione vegetais e tofu ao caldo conforme a refeição avança.", "No final, cozinhe udon no caldo enriquecido — o melhor momento da refeição."],
    difficulty: "Médio",
    time: "45 min",
    description: "Shabu-shabu é a fondue japonesa — elegante, interativa e deliciosa. O nome imita o som da carne sendo agitada no caldo. Em restaurantes premium de Tóquio como o Seryna, o wagyu é tão fino que cada fatia cozinha em 2 segundos."
  },
  {
    id: "chirashi-zushi-edomae",
    name: "Chirashi-zushi Edomae",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["400g de shari", "80g de maguro", "80g de salmão", "60g de hamachi", "40g de ikura", "40g de uni", "4 fatias de tamagoyaki", "Shiso fresco", "Wasabi fresco", "Nori kizami", "Gari caseiro"],
    steps: ["Prepare o shari perfeito e deixe atingir temperatura corporal (36°C).", "Corte cada peixe no estilo sashimi — fatias de 7mm com corte único.", "Coloque o shari na tigela de laca, pressionando levemente.", "Arrume os peixes sobre o arroz em padrão visual harmonioso.", "Coloque o uni e ikura por último.", "Intercale folhas de shiso entre as peças.", "Finalize com raspas de nori kizami e wasabi fresco.", "Sirva com gari ao lado e molho de soja nikiri separado."],
    difficulty: "Avançado",
    time: "50 min",
    description: "O Chirashi-zushi Edomae é o 'sushi espalhado' de Tóquio — uma tigela de shari coberta com os melhores peixes do dia. É a refeição de celebração do Dia da Menina (Hinamatsuri) em 3 de março."
  },
  {
    id: "tonkatsu-perfeito",
    name: "Tonkatsu Perfeito do Chef",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["2 filés de lombo suíno de 2,5cm de espessura", "Farinha de trigo", "2 ovos batidos", "Panko fresco", "Óleo para fritura (banha + vegetal)", "Repolho fatiado finíssimo", "Molho tonkatsu", "Karashi", "Arroz e missoshiru"],
    steps: ["Retire o nervo central do filé. Faça cortes suaves na borda.", "Tempere com sal e pimenta. Bata levemente com martelo de carne.", "Empane na ordem: farinha, ovo, panko. Pressione o panko suavemente.", "Aqueça o óleo a 170°C com mix de banha + óleo vegetal.", "Frite por 4 min de um lado, vire, mais 3 min.", "Retire e descanse em grade por 4 minutos — o calor residual termina o cozimento.", "O interior deve estar rosado, suculento. O exterior crocante dourado.", "Corte em fatias e monte sobre repolho. Sirva com karashi e molho."],
    difficulty: "Médio",
    time: "30 min",
    description: "O Tonkatsu perfeito tem crosta de panko crocante como vidro e interior suculento ainda rosado. Em Tóquio, restaurantes como Maisen e Butagumi são templos do tonkatsu — filas de 1 hora são normais."
  },
  {
    id: "gyukatsu-wagyu",
    name: "Gyukatsu de Wagyu",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["300g de filé mignon wagyu em peça", "Panko fresco", "Farinha de trigo", "1 ovo batido", "Óleo para fritura a 200°C", "Molho de soja com wasabi", "Sal de trufa", "Arroz japonês", "Missoshiru"],
    steps: ["Corte o wagyu em fatias de 1,5cm de espessura.", "Tempere levemente com sal e pimenta.", "Empane na sequência: farinha, ovo, panko.", "Frite em óleo a 200°C por apenas 30 segundos de cada lado.", "O interior deve ficar CRU — vermelho vivo. Apenas a crosta é crocante.", "Sirva com pedra quente na mesa para o cliente grelhar se desejar.", "Acompanhe com 3 molhos: soja-wasabi, sal de trufa, molho tonkatsu.", "O contraste entre panko crocante e carne crua é a experiência."],
    difficulty: "Avançado",
    time: "20 min",
    description: "Gyukatsu é a versão bovina do tonkatsu — mas a carne é servida praticamente crua por dentro. Criado em Tóquio, tornou-se sensação com filas enormes em Shibuya e Shinjuku."
  },
  {
    id: "kaiseki-hassun",
    name: "Kaiseki Hassun (Prato Sazonal)",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["Salmão marinado em missô 48h (saikyozuke)", "Castanhas japonesas glaceadas", "Camarão cozido em dashi", "Edamame descascados", "Tamago-yaki com dashi", "Lotus root em vinagrete", "Ginnan grelhado", "Folhas decorativas sazonais", "Tábua de cedro"],
    steps: ["Prepare cada item individualmente com máxima atenção.", "Saikyozuke: marine o salmão em missô branco de Kyoto por 48h. Grelhe.", "Kuri kanroni: cozinhe castanhas em calda com gardênia para cor dourada.", "Cozinhe camarões em dashi com casca — a apresentação com antenas intactas é essencial.", "Monte 7-9 itens na tábua seguindo o princípio 'mar e montanha'.", "Itens do mar de um lado, itens da terra do outro.", "Decore com folhas sazonais: momiji (outono), bambu (inverno), sakura (primavera).", "O hassun é servido com sake harmonizado pelo chef."],
    difficulty: "Avançado",
    time: "3h",
    description: "O Hassun é o segundo prato do kaiseki e representa a essência da estação. Em ryotei de Kyoto, o hassun é onde o chef demonstra sua filosofia culinária e sensibilidade sazonal."
  },
  {
    id: "kamameshi-matsutake",
    name: "Kamameshi de Matsutake",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["300g de arroz koshihikari", "100g de cogumelo matsutake fresco", "Dashi de kombu e katsuobushi", "2 colheres de sake", "1 colher de usukuchi shoyu", "1 colher de chá de sal", "Mitsuba", "Yuzu para finalizar"],
    steps: ["Lave o arroz e deixe de molho por 30 minutos.", "Limpe o matsutake com pano úmido — NUNCA lave com água.", "Corte o matsutake em fatias de 3mm.", "Coloque o arroz no kama com dashi, sake, shoyu e sal.", "Disponha as fatias de matsutake sobre o arroz — não misture.", "Cozinhe em fogo alto até ferver, reduza para fogo baixo por 12 min.", "Desligue e abafe por 15 minutos sem abrir a tampa.", "Misture delicadamente, finalize com mitsuba e raspas de yuzu."],
    difficulty: "Médio",
    time: "50 min",
    description: "O matsutake é o cogumelo mais caro do Japão — pode custar ¥100.000/kg. Seu aroma intenso de pinheiro é impossível de cultivar. O kamameshi de matsutake é um luxo sazonal servido apenas em setembro-outubro."
  },
  {
    id: "ankimo-monkfish-liver",
    name: "Ankimo (Fígado de Tamboril)",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["300g de fígado de tamboril fresco", "Sal para desgordurar", "Sake para marinar", "Ponzu de yuzu", "Momiji oroshi", "Cebolinha em anéis finos", "Papel alumínio"],
    steps: ["Limpe o ankimo removendo veias e membranas.", "Salgue generosamente e deixe por 1 hora para remover gordura.", "Lave o sal e marine em sake por 30 minutos.", "Enrole firmemente em papel alumínio formando um cilindro.", "Cozinhe no vapor por 20-25 minutos.", "Resfrie completamente na geladeira por 2 horas.", "Corte em fatias de 1cm — textura cremosa como foie gras.", "Sirva com ponzu, momiji oroshi e cebolinha."],
    difficulty: "Avançado",
    time: "4h",
    description: "Ankimo é chamado de 'foie gras do mar' — o fígado de tamboril tem textura cremosa e sabor umami profundo. É um dos chinmi mais apreciados no inverno japonês."
  },
  {
    id: "chawanmushi-trufa",
    name: "Chawanmushi com Trufa Negra",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["3 ovos grandes", "400ml de dashi ichiban", "1 colher de chá de usukuchi shoyu", "1 colher de chá de mirin", "Camarão limpo", "Kamaboko fatiado", "Mitsuba", "Trufa negra fresca ralada"],
    steps: ["Prepare o dashi e deixe esfriar a 60°C.", "Bata os ovos suavemente — sem criar bolhas.", "Misture dashi, shoyu e mirin. Coe 2 vezes.", "Distribua camarão e kamaboko no fundo dos copos.", "Despeje a mistura de ovo delicadamente.", "Cubra com alumínio. Cozinhe no vapor por 12-15 min em fogo baixo.", "A superfície deve ser lisa como espelho — sem furos.", "Finalize com mitsuba e trufa negra fresca ralada."],
    difficulty: "Médio",
    time: "30 min",
    description: "Chawanmushi é o creme de ovo japonês cozido no vapor. Esta versão premium com trufa negra é servida em restaurantes kaiseki com estrela Michelin."
  },
  {
    id: "nabe-chanko",
    name: "Chanko Nabe dos Lutadores de Sumô",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["500g de frango com osso", "300g de carne suína fatiada", "200g de tofu firme", "200g de hakusai", "2 alho-poró", "200g de cogumelos variados", "200g de udon fresco", "1,5L de dashi de frango", "Sake, shoyu, mirin", "Ponzu e shichimi"],
    steps: ["Prepare o caldo torigara: ferva ossos de frango por 4h com gengibre.", "Corte todos os vegetais em pedaços grandes e rústicos.", "Em donabe, aqueça o caldo.", "Adicione primeiro: frango, tofu, hakusai.", "Em camadas, adicione cogumelos, negi e carne suína.", "Cozinhe em fogo médio por 20 min com tampa.", "Cada pessoa serve-se diretamente da panela.", "No final, adicione udon ao caldo — o shime (finalização)."],
    difficulty: "Fácil",
    time: "1h",
    description: "Chanko nabe é a refeição diária dos lutadores de sumô. Nos heya de Ryogoku, Tóquio, os lutadores juniores cozinham para os seniores."
  },
  {
    id: "taimeshi-tai-gohan",
    name: "Tai-meshi (Arroz com Pargo)",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["1 pargo inteiro de 800g", "400g de arroz japonês", "500ml de dashi de kombu", "2 colheres de sake", "1 colher de usukuchi shoyu", "1 colher de chá de sal", "Gengibre fatiado", "Mitsuba e nori kizami"],
    steps: ["Lave o arroz e descanse por 30 minutos.", "Tempere o pargo com sal e grelhe levemente ambos os lados.", "Coloque o arroz no donabe com dashi, sake, shoyu e sal.", "Coloque o pargo inteiro sobre o arroz.", "Cozinhe: fogo alto até ferver, baixo por 15 min. Abafe 10 min.", "O pargo deve estar dourado e o arroz perfumado.", "Remova o pargo, desfie descartando espinhas.", "Misture ao arroz. Sirva com mitsuba e nori."],
    difficulty: "Médio",
    time: "50 min",
    description: "Tai-meshi é o arroz cozido com pargo inteiro — um prato de celebração e boa sorte no Japão. O tai é considerado o peixe mais auspicioso."
  },
  {
    id: "nikujaga-caseiro",
    name: "Nikujaga da Vovó Japonesa",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["300g de carne bovina fatiada fina", "4 batatas médias", "2 cenouras", "1 cebola grande", "200g de shirataki", "400ml de dashi", "3 colheres de shoyu", "2 colheres de mirin", "2 colheres de sake", "1 colher de açúcar"],
    steps: ["Corte batatas em quartos, cenouras em meias-luas, cebola em gomos.", "Refogue a carne em óleo até mudar de cor.", "Adicione cebola e refogue até translúcida.", "Adicione batatas e cenouras. Mexa por 2 min.", "Adicione dashi, sake e açúcar. Ferva.", "Reduza o fogo, adicione shirataki. Coloque otoshibuta.", "Cozinhe por 15 min em fogo baixo.", "Adicione shoyu e mirin nos últimos 5 min. Deixe esfriar na panela."],
    difficulty: "Fácil",
    time: "40 min",
    description: "Nikujaga é o prato caseiro mais nostálgico do Japão. Criado por um chef da Marinha Imperial tentando recriar beef stew com ingredientes japoneses."
  },
  {
    id: "katsudon-champion",
    name: "Katsudon do Campeão",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["1 tonkatsu frito", "2 ovos", "1 cebola fatiada", "150ml de dashi", "2 colheres de shoyu", "1 colher de mirin", "1 colher de sake", "Arroz japonês quente", "Mitsuba"],
    steps: ["Corte o tonkatsu em fatias de 2cm.", "Em frigideira oyakodon-nabe, aqueça dashi, shoyu, mirin e sake.", "Adicione cebola e cozinhe 3 minutos.", "Coloque fatias de tonkatsu sobre a cebola.", "Bata ovos levemente — gemas devem estar visíveis.", "Despeje 2/3 dos ovos sobre o tonkatsu. Tampe 1 min.", "Adicione 1/3 restante. Tampe 30 segundos.", "O ovo deve estar hanjuku — cremoso. Deslize sobre arroz."],
    difficulty: "Médio",
    time: "25 min",
    description: "Katsudon é o 'prato da vitória' — estudantes comem antes de provas e atletas antes de competições, pois 'katsu' soa como 'vitória'."
  },
  {
    id: "gyutan-sendai",
    name: "Gyutan de Sendai (Língua Bovina)",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["400g de língua bovina fatiada fina", "Sal e pimenta", "Suco de limão", "Shichimi togarashi", "Arroz de cevada (mugi-meshi)", "Oxtail soup", "Tsukemono variados", "Negi fatiado"],
    steps: ["A língua deve estar fatiada em fatias de 3-4mm.", "Tempere apenas com sal e pimenta.", "Grelhe em carvão binchotan ou grelha muito quente.", "Grelhe 20-30 segundos de cada lado — levemente rosada.", "Exterior com marcas de grelha definidas.", "Sirva com suco de limão espremido na hora.", "Acompanhe OBRIGATORIAMENTE com mugi-meshi e oxtail soup.", "Tsukemono como palate cleanser entre cada porção."],
    difficulty: "Médio",
    time: "20 min",
    description: "Gyutan é a especialidade de Sendai — língua bovina grelhada. Criada após a Segunda Guerra pelo chef Keishiro Sano. Hoje é indústria bilionária com restaurantes como Rikyu e Kisuke."
  },
  {
    id: "kaisen-don-hokkaido",
    name: "Kaisen-don de Hokkaido",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["300g de arroz para sushi temperado", "80g de uni fresco", "60g de ikura marinado", "60g de hotate (vieira crua)", "60g de kani (caranguejo)", "40g de amaebi (camarão doce cru)", "Wasabi fresco", "Shoyu", "Shiso fresco", "Nori kizami"],
    steps: ["Prepare shari perfeito e coloque quente na tigela.", "Corte as vieiras em fatias de 5mm.", "Disponha cada fruto do mar em seu setor sobre o arroz.", "O uni vai no centro — ingrediente mais valioso.", "Ikura em montinho generoso — as ovas devem brilhar.", "Amaebi cru ao lado do kani desfiado.", "Coloque wasabi fresco no centro.", "Finalize com shiso e nori kizami."],
    difficulty: "Médio",
    time: "30 min",
    description: "Kaisen-don é a tigela de frutos do mar sobre arroz. Em Hokkaido, no Mercado de Otaru e Nijo Market, é o café da manhã dos sonhos."
  },
  {
    id: "yakitori-omakase",
    name: "Yakitori Omakase (8 Espetos)",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["2 coxas de frango desossadas", "Peito (sasami)", "Coração (hatsu)", "Moela (sunagimo)", "Pele (kawa)", "Fígado (reba)", "Tsukune com gema", "Negi entre pedaços", "Tare yakitori", "Sal fino, sansho, shichimi"],
    steps: ["Prepare o tare: reduza shoyu + mirin + sake + açúcar + ossos por 1 hora.", "Corte cada parte do frango em pedaços de 2,5cm.", "Monte os espetos: 4-5 pedaços por espeto.", "Tsukune: misture carne moída com ovo, gengibre e cebolinha.", "Grelhe em binchotan — distância de 10-15cm.", "Espetos shio: momo, sasami, hatsu — tempere antes.", "Espetos tare: kawa, reba, negima, tsukune — banhe 2-3 vezes.", "Ordem: sasami → momo → hatsu → negima → kawa → sunagimo → reba → tsukune."],
    difficulty: "Avançado",
    time: "1h",
    description: "Yakitori omakase é a experiência completa — 8+ espetos servidos na ordem do chef. Em Tóquio, os melhores como Bird Land (Ginza) usam frango jidori e binchotan de Wakayama."
  },
  {
    id: "dashimaki-tamago-chef",
    name: "Dashimaki Tamago do Chef",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["5 ovos grandes", "100ml de dashi ichiban frio", "1 colher de chá de usukuchi shoyu", "1 colher de chá de mirin", "Pitada de sal", "Óleo vegetal", "Daikon oroshi", "Frigideira retangular tamagoyaki"],
    steps: ["Bata os ovos SUAVEMENTE — sem espuma.", "Misture dashi frio, shoyu e mirin. Coe por peneira.", "Aqueça a frigideira retangular em fogo médio-baixo.", "Despeje fina camada de ovo (1/5). Estoure bolhas com hashi.", "Quando quase firme, enrole de uma ponta à outra.", "Empurre o rolo e lubrifique novamente.", "Repita até usar todo o ovo — 5-6 camadas.", "Pressione em makisu por 5 min. Corte em fatias mostrando espiral."],
    difficulty: "Avançado",
    time: "20 min",
    description: "Dashimaki tamago é a omelete japonesa com dashi — o teste definitivo de habilidade. A versão de Kyoto usa proporção 1:1 com textura quase líquida no centro."
  },
  {
    id: "ochazuke-premium",
    name: "Ochazuke Premium do Chef",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["Arroz japonês recém-cozido", "50g de salmão grelhado desfiado", "Wasabi fresco", "Nori kizami", "Umeboshi", "Mitsuba", "Arare (bolinhas de arroz crocantes)", "Dashi quente ou hojicha", "Gergelim torrado"],
    steps: ["Coloque arroz quente em tigela funda de cerâmica.", "Disponha toppings sobre o arroz: salmão, umeboshi, nori.", "Adicione arare para crocância e gergelim torrado.", "Coloque wasabi fresco ao lado.", "Na mesa, despeje dashi quente por cima na frente do comensal.", "O som do líquido quente é parte da experiência.", "Misture levemente com hashi e coma fumegante.", "A combinação de texturas (crocante + macio + quente) é mágica."],
    difficulty: "Fácil",
    time: "15 min",
    description: "Ochazuke é o comfort food definitivo — arroz com dashi quente. Nos ryotei de Kyoto, ochazuke de tai é a finalização de um jantar kaiseki."
  },
  {
    id: "takikomi-gohan-outono",
    name: "Takikomi Gohan de Outono",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["300g de arroz japonês", "100g de maitake", "100g de shimeji", "1 pedaço de gobo raspado", "1 pedaço de renkon fatiado", "50g de frango desfiado", "400ml de dashi", "2 colheres de sake", "1 colher de shoyu", "1 colher de chá de sal", "Mitsuba"],
    steps: ["Lave o arroz e descanse 30 minutos.", "Corte gobo em sasagaki e deixe em água com vinagre.", "Fatie renkon finamente e separe cogumelos em buquês.", "Coloque arroz no donabe com dashi, sake, shoyu e sal.", "Disponha ingredientes sobre o arroz SEM misturar.", "Cozinhe: fogo alto até ferver, médio 12 min, baixo 3 min.", "Abafe 15 minutos sem abrir.", "Misture delicadamente e sirva com mitsuba fresca."],
    difficulty: "Médio",
    time: "50 min",
    description: "Takikomi gohan é o arroz cozido com ingredientes sazonais — no outono, cogumelos e raízes dominam. Celebra o conceito de 'shun' (ingredientes no auge)."
  },
  {
    id: "nasu-dengaku-chef",
    name: "Nasu Dengaku do Mestre",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["4 berinjelas japonesas", "3 colheres de missô branco", "2 colheres de missô vermelho", "2 colheres de mirin", "1 colher de sake", "1 colher de açúcar", "Gergelim branco torrado", "Kinome para decorar", "Óleo de gergelim"],
    steps: ["Corte berinjelas ao meio. Faça cortes em xadrez na polpa.", "Deixe de molho em água por 10 min.", "Prepare dois dengaku miso: branco (doce) e vermelho (salgado).", "Para cada: misture miso + mirin + sake + açúcar em fogo baixo.", "Seque as berinjelas e pincele com óleo de gergelim.", "Grelhe ou asse a 200°C por 15 min até macia.", "Espalhe o dengaku miso: metade branco, metade vermelho.", "Gratine 2 min. Finalize com gergelim e kinome."],
    difficulty: "Fácil",
    time: "30 min",
    description: "Dengaku é a técnica de glazear com missô. A berinjela japonesa é menor e mais doce que a ocidental. Prato simples que exige missô de qualidade."
  },
  {
    id: "tofu-yudofu-kyoto",
    name: "Yudofu de Kyoto (Tofu Quente)",
    category: "Receitas Secretas do Chef",
    image: "",
    ingredients: ["2 blocos de tofu artesanal extra fresco", "1 pedaço de kombu (10cm)", "Água filtrada", "Ponzu caseiro de yuzu", "Katsuobushi em flocos", "Negi fatiado", "Momiji oroshi", "Gengibre ralado", "Nori em tiras"],
    steps: ["Use tofu artesanal fresco do dia — qualidade é 90% do prato.", "Coloque kombu em água fria em donabe.", "Corte tofu em cubos grandes de 5cm.", "Aqueça lentamente — o tofu aquece junto com a água.", "NUNCA ferva — temperatura ideal 70-80°C.", "Quando o tofu flutuar levemente, está pronto.", "Retire com concha perfurada.", "Sirva com ponzu, katsuobushi e condimentos ao lado."],
    difficulty: "Fácil",
    time: "20 min",
    description: "Yudofu é o prato mais zen do Japão. Os templos de Kyoto, como Nanzenji, são famosos por seu yudofu servido em jardins contemplativos."
  }
];
