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
  }
];
