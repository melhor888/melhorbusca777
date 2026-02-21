import { VipDrink } from "./types";

export const masterclassTecnicas: VipDrink[] = [
  {
    id: "mt-afiar-facas-japonesas",
    name: "Como Afiar Facas Japonesas",
    category: "Masterclass de Técnicas",
    image: "mt-facas",
    ingredients: [
      "Pedra de afiar #1000 (pedra média)",
      "Pedra de afiar #3000 (pedra fina)",
      "Pedra de afiar #6000 (pedra de polimento, opcional)",
      "Recipiente com água",
      "Toalha úmida antiderrapante",
      "Faca japonesa (gyuto, santoku ou yanagiba)",
      "Nagura (pedra de correção, opcional)"
    ],
    steps: [
      "Mergulhe a pedra #1000 em água por 15-20 minutos até parar de borbulhar.",
      "Coloque sobre toalha úmida para fixar. A pedra não deve se mover.",
      "Segure a faca a 15° em relação à pedra (facas japonesas usam ângulo menor que ocidentais).",
      "Com pressão moderada, deslize a lâmina da base à ponta em movimento de arco.",
      "Repita 20-30 vezes de cada lado até sentir uma rebarba (burr) no lado oposto.",
      "Passe para a pedra #3000. Repita com pressão mais leve, 15-20 vezes por lado.",
      "Opcional: finalize na #6000 para polimento espelhado (kasumi ou mirror finish).",
      "Remova a rebarba final passando a faca suavemente em ângulo raso.",
      "Teste cortando uma folha de papel — deve cortar sem resistência."
    ],
    difficulty: "Médio",
    time: "30 min",
    description: "As facas japonesas são forjadas com aço mais duro (60-67 HRC na escala Rockwell) que as ocidentais, permitindo um fio mais fino e afiado. A técnica de afiação com whetstones é passada por gerações — em Sakai, cidade das facas, artesãos dedicam a vida inteira a esta arte."
  },
  {
    id: "mt-dashi-perfeito",
    name: "Dashi Perfeito (Ichiban Dashi)",
    category: "Masterclass de Técnicas",
    image: "mt-dashi",
    ingredients: [
      "20g de kombu ma-kombu (Hokkaido, grau premium)",
      "30g de katsuobushi (bonito seco, flocos grossos hon-karebushi)",
      "1 litro de água filtrada suave",
      "Termômetro culinário"
    ],
    steps: [
      "Use água com baixo teor mineral — água dura inibe a extração do glutamato.",
      "Limpe o kombu com pano úmido. NÃO lave — o pó branco é umami puro.",
      "Coloque kombu na água fria. Aqueça lentamente em fogo baixo por 30-40 min.",
      "Monitore a temperatura: retire o kombu a EXATAMENTE 60°C. Nunca ferva o kombu.",
      "Eleve a temperatura a 85°C (não ferva). Adicione o katsuobushi de uma vez.",
      "Deixe infundir por exatamente 30 segundos a 1 minuto. Sem mexer.",
      "Coe com pano de algodão (sarashi). NÃO esprema — isso turva o dashi.",
      "O resultado deve ser dourado-claro, transparente e com aroma limpo do mar.",
      "Use imediatamente — o dashi perde aroma em horas."
    ],
    difficulty: "Médio",
    time: "50 min",
    description: "O Ichiban Dashi é a alma da culinária japonesa — base de missoshiru, molhos e cozidos. A extração a 60°C libera glutamato e inosinato sem amargor. Chefs kaiseki de Kyoto consideram o dashi tão importante que treinam anos apenas para dominar esta técnica."
  },
  {
    id: "mt-corte-sashimi",
    name: "Técnicas de Corte para Sashimi",
    category: "Masterclass de Técnicas",
    image: "mt-corte-sashimi",
    ingredients: [
      "Faca yanagiba (lâmina longa de 27-30cm)",
      "Filé de salmão ou atum sashimi-grade",
      "Tábua de madeira hinoki ou plástico",
      "Toalha úmida",
      "Daikon para ken (julienne decorativo)",
      "Shiso fresco"
    ],
    steps: [
      "Hirazukuri (corte plano): posicione o peixe com as fibras perpendiculares à faca.",
      "Puxe a yanagiba em um único movimento longo da base à ponta — NUNCA use movimento de serra.",
      "Cada fatia deve ter 7-10mm de espessura para sashimi padrão.",
      "Sogizukuri (corte angular): incline a faca a 45° para peixes de carne firme como tai.",
      "Usuzukuri (corte ultrafino): para fugu e hirame, corte fatias translúcidas de 1-2mm.",
      "Kakuzukuri (corte em cubos): para atum em tartare ou poke — cubos de 1,5cm uniformes.",
      "Ito-zukuri (corte em fios): para lula, corte tiras de 3mm de largura.",
      "Monte sobre ken de daikon e folha de shiso — o daikon absorve a umidade.",
      "Sirva imediatamente — cada minuto após o corte diminui a qualidade."
    ],
    difficulty: "Avançado",
    time: "20 min",
    description: "O corte de sashimi é onde a maestria do itamae se revela. A yanagiba, com lâmina de um só fio (kataba), corta as fibras sem esmagar as células — preservando a textura e o brilho natural do peixe. Mestres no Japão dizem: 'O sashimi é cortado com a alma, não com a mão.'"
  },
  {
    id: "mt-tecnica-tempura",
    name: "Técnica Perfeita de Tempurá",
    category: "Masterclass de Técnicas",
    image: "mt-tempura",
    ingredients: [
      "Farinha de trigo com baixo teor de glúten (cake flour)",
      "Gema de ovo grande",
      "Água mineral com gás (muito gelada)",
      "Óleo de gergelim torrado (20%)",
      "Óleo vegetal neutro (80%)",
      "Termômetro para fritura",
      "Ingredientes variados: camarão, shiso, renkon, kabocha, nasu"
    ],
    steps: [
      "REGRA 1: Tudo gelado. Coloque a farinha no freezer por 1h antes. Água com gás direto da geladeira.",
      "REGRA 2: Misture POUCO. Coloque gema + água gelada, mexa. Adicione farinha de uma vez. Mexa 3-4 vezes com hashi.",
      "REGRA 3: Grumos são bons. Um batter com grumos cria textura crocante e irregular.",
      "Aqueça o óleo a 170°C para vegetais densos, 180°C para camarões e folhas.",
      "Teste: pingue uma gota de batter — deve afundar e voltar rapidamente à superfície.",
      "Mergulhe cada ingrediente no batter e solte gentilmente no óleo.",
      "Frite poucos pedaços por vez — muitos ingredientes derrubam a temperatura.",
      "REGRA 4: Ouça o som. Chiado alto e constante = temperatura certa. Som fraco = muito frio.",
      "Retire quando o borbulhar diminuir — indica que a água do batter evaporou.",
      "Escorra em grade (nunca papel toalha) e sirva em 30 segundos."
    ],
    difficulty: "Médio",
    time: "25 min",
    description: "A tempurá perfeita deve ser leve como uma nuvem — crocante por fora, ingrediente perfeitamente cozido por dentro. O segredo que mestres de tempurá em Tóquio guardam: água com gás gelada no batter e óleo com 20% de gergelim para aroma. O batter nunca é preparado com antecedência."
  },
  {
    id: "mt-arroz-shari",
    name: "Shari: Arroz para Sushi Perfeito",
    category: "Masterclass de Técnicas",
    image: "mt-shari",
    ingredients: [
      "500g de arroz koshihikari (safra nova, shinmai)",
      "550ml de água filtrada",
      "80ml de vinagre de arroz (akazu para sabor mais complexo)",
      "30g de açúcar",
      "15g de sal",
      "Hangiri (balde de madeira de cipreste)",
      "Shamoji (espátula de madeira)",
      "Uchiwa (leque)"
    ],
    steps: [
      "Lave o arroz com movimentos suaves — 7 lavagens até a água sair quase transparente.",
      "Escorra e deixe descansar fora da água por 30 minutos (absorção controlada).",
      "Cozinhe: fogo alto até ferver, fogo médio por 12 min, fogo baixo por 3 min. Desligue.",
      "Abafe com a tampa por 15 minutos — NÃO abra durante este tempo.",
      "Transfira para o hangiri (previamente umedecido). O cipreste absorve umidade excess.",
      "Prepare o awasezu: aqueça vinagre + açúcar + sal até dissolver. Resfrie.",
      "Despeje o awasezu sobre o arroz em fio. Corte e vire com shamoji — NUNCA esmague.",
      "Simultaneamente, abanem com uchiwa para resfriar rapidamente — cria o brilho do shari.",
      "O shari está pronto quando atinge 36-38°C (temperatura corporal humana).",
      "Cubra com pano úmido. Use dentro de 1 hora — depois disso, o vinagre oxida."
    ],
    difficulty: "Avançado",
    time: "75 min",
    description: "O shari é 80% do sushi — mestres itamae passam anos apenas dominando o arroz. O grão deve ter brilho perolado, sabor levemente ácido-doce, e cada grão separado mas coeso. A temperatura exata de 36°C faz o shari 'derreter' na boca. Em Ginza, o shari define o ranking do sushiya."
  },
  {
    id: "mt-katsuramuki",
    name: "Katsuramuki: Corte Rotativo do Daikon",
    category: "Masterclass de Técnicas",
    image: "mt-katsuramuki",
    ingredients: [
      "1 daikon grande e reto (pelo menos 20cm)",
      "Faca usuba (lâmina fina e reta)",
      "Tábua de corte grande",
      "Água gelada",
      "Paciência"
    ],
    steps: [
      "Corte um cilindro de daikon de 10cm de comprimento. Descasque.",
      "Segure o daikon na mão esquerda. Posicione a usuba paralela à superfície.",
      "Gire o daikon lentamente com a mão esquerda enquanto a lâmina corta continuamente.",
      "O objetivo: uma folha contínua de 1mm de espessura, sem furos ou variações.",
      "Mantenha pressão constante — a mão direita (faca) quase não se move.",
      "Continue até chegar ao centro do daikon — uma folha pode ter 1 metro de comprimento.",
      "Enrole a folha e corte em julienne finíssimo (ken) para base de sashimi.",
      "Mergulhe o ken em água gelada por 10 minutos para ficar crocante e curvado.",
      "Este é o exercício fundamental que todo aprendiz de cozinha japonesa deve dominar."
    ],
    difficulty: "Avançado",
    time: "20 min",
    description: "O Katsuramuki é o teste definitivo de habilidade com a faca na culinária japonesa. Aprendizes passam meses praticando até conseguir uma folha contínua, fina e uniforme. Em escolas de culinária em Tóquio, é o primeiro ano inteiro de treinamento — antes de tocar qualquer peixe."
  },
  {
    id: "mt-nimono-tecnica",
    name: "Nimono: A Arte do Cozido Japonês",
    category: "Masterclass de Técnicas",
    image: "mt-nimono",
    ingredients: [
      "300g de kabocha (abóbora japonesa)",
      "200g de satoimo (inhame japonês)",
      "2 pedaços de konnyaku",
      "150g de frango ou peixe (opcional)",
      "400ml de dashi primário",
      "3 colheres de sopa de molho de soja",
      "2 colheres de sopa de mirin",
      "1 colher de sopa de açúcar",
      "Otoshibuta (tampa flutuante de madeira ou papel)"
    ],
    steps: [
      "Corte a kabocha em pedaços iguais. Chanfre os cantos (mentori) para não quebrar.",
      "Pré-cozinhe o satoimo para remover a mucilagem. Corte em hexágonos (rokkaku).",
      "Corte o konnyaku com técnica tazuna (torção) para absorver mais sabor.",
      "A REGRA DO OTOSHIBUTA: use uma tampa menor que a panela, diretamente sobre os ingredientes.",
      "O otoshibuta distribui o calor uniformemente e impede que os ingredientes se movam e quebrem.",
      "Cozinhe em fogo BAIXO — nunca fervura forte. Nimono é sobre paciência.",
      "Adicione temperos na ordem: SA-SHI-SU-SE-SO (açúcar, sal, vinagre, soja, missô).",
      "A soja e o missô vão por ÚLTIMO — adicionados cedo endurecem as proteínas.",
      "Cozinhe até o líquido reduzir pela metade. Desligue e deixe esfriar na panela.",
      "O sabor penetra ao esfriar — sirva morno, não quente."
    ],
    difficulty: "Médio",
    time: "45 min",
    description: "Nimono é a técnica de cozimento lento japonês, onde a regra SA-SHI-SU-SE-SO (ordem dos temperos) é fundamental. O otoshibuta — uma tampa flutuante — é o segredo que mantém os ingredientes intactos enquanto distribuem sabor uniformemente. Em casas japonesas, o nimono da avó é o prato mais nostálgico."
  },
  {
    id: "mt-yakimono-grelhados",
    name: "Yakimono: Técnica de Grelhados",
    category: "Masterclass de Técnicas",
    image: "mt-yakimono",
    ingredients: [
      "4 espetos de frango yakitori (momo, negima, tsukune, kawa)",
      "200ml de tare yakitori (soja + mirin + sakê + açúcar, reduzido)",
      "Sal fino (shio)",
      "Binchotan (carvão branco japonês) ou carvão de alta qualidade",
      "Espetos de bambu (embebidos em água por 1h)",
      "Sansho (pimenta japonesa)",
      "Shichimi togarashi"
    ],
    steps: [
      "Acenda o binchotan 30 min antes — deve estar branco sem chama. Calor radiante puro.",
      "A distância ideal da brasa: 10-15cm. Use uchiwa para controlar o calor.",
      "SHIO (sal): tempere com sal fino ANTES de grelhar. Grelhe sem tare.",
      "TARE: grelhe primeiro sem nada até 70% cozido. Mergulhe no tare, volte à grelha.",
      "Repita o banho de tare 2-3 vezes — cada camada carameliza sobre a anterior.",
      "Gire os espetos a cada 30 segundos — yakitori é sobre atenção constante.",
      "O ponto perfeito: exterior caramelizado com marcas de grelha, interior suculento.",
      "Tsukune (almôndega): deve estar firme por fora, levemente mole no centro.",
      "Kawa (pele): deve estar extremamente crocante — grelhe devagar em calor indireto.",
      "Sirva imediatamente sobre o espeto. Yakitori esfria rápido."
    ],
    difficulty: "Médio",
    time: "35 min",
    description: "O Yakimono com binchotan produz calor infravermelho sem fumaça, grelhando o alimento por dentro e por fora simultaneamente. Em Tóquio, os melhores yakitori-ya são pequenos balcões com 6-8 lugares onde o chef grelha na sua frente. O domínio do fogo é o que separa o bom do extraordinário."
  },
  {
    id: "mt-fermentacao-japonesa",
    name: "Fermentação Japonesa (Koji & Miso)",
    category: "Masterclass de Técnicas",
    image: "mt-fermentacao",
    ingredients: [
      "500g de soja cozida e amassada",
      "250g de koji de arroz (Aspergillus oryzae)",
      "125g de sal marinho",
      "Recipiente de cerâmica ou vidro esterilizado",
      "Filme plástico",
      "Peso (pedra ou prato pesado)",
      "Sakê para esterilizar superfícies"
    ],
    steps: [
      "Cozinhe a soja até ficar macia o suficiente para amassar entre os dedos.",
      "Amasse a soja ainda quente — pode ser rústico, com pedaços.",
      "Misture o koji com o sal (shio-koji mistura) para ativar as enzimas.",
      "Combine a soja amassada com o shio-koji. Misture uniformemente.",
      "Forme bolas do tamanho de uma laranja e jogue com força no recipiente (remove ar).",
      "Pressione para eliminar bolsas de ar — inimigo da fermentação.",
      "Cubra a superfície com sal extra e filme plástico rente à pasta.",
      "Coloque o peso por cima. Cubra com pano e guarde em local fresco e escuro.",
      "Após 1 mês, abra e remova qualquer mofo da superfície (normal).",
      "Fermente por 6-12 meses. Quanto mais longo, mais escuro e intenso o sabor."
    ],
    difficulty: "Avançado",
    time: "12 meses",
    description: "O koji (Aspergillus oryzae) é o fungo mais importante da culinária japonesa — responsável por missô, shoyu, sakê, mirin e vinagre de arroz. Fazer missô caseiro é um ritual anual no Japão (miso-zukuri). O processo de 12 meses transforma soja simples em um concentrado de umami impossível de replicar industrialmente."
  },
  {
    id: "mt-arte-bento",
    name: "A Arte do Bento Japonês",
    category: "Masterclass de Técnicas",
    image: "mt-bento",
    ingredients: [
      "Arroz japonês cozido (onigiri ou gohan)",
      "Proteína: tamagoyaki, karaage ou salmão grelhado",
      "Vegetais: brócolis, cenoura decorativa, edamame",
      "Tsukemono (conservas): umeboshi, takuan",
      "Fruta da estação",
      "Caixa bento de madeira (magewappa) ou lacada",
      "Separadores de silicone e folhas de shiso/sasa",
      "Cortadores decorativos para vegetais"
    ],
    steps: [
      "REGRA DOS 3 CORES: cada bento deve ter vermelho, verde e amarelo/branco.",
      "PROPORÇÃO 4:3:2:1 — arroz : proteína : vegetais : conserva/fruta.",
      "Cozinhe e resfrie TODOS os itens antes de montar — umidade é o inimigo do bento.",
      "Comece pelo arroz: coloque primeiro e crie uma 'parede' para separar seções.",
      "Adicione a proteína principal ao lado do arroz.",
      "Preencha espaços com vegetais — NÃO deve haver espaço vazio (evita que tudo se mova).",
      "Use separadores de silicone ou folhas de shiso entre itens úmidos e secos.",
      "Corte cenoura em formato de flor (hanagata) com cortador ou faca.",
      "Umeboshi vai sobre o arroz — além de decorar, é conservante natural.",
      "Feche e embale com furoshiki (lenço japonês). O bento deve ser bonito ao abrir."
    ],
    difficulty: "Fácil",
    time: "40 min",
    description: "O bento japonês é uma forma de arte comestível — cada caixa é uma composição visual equilibrada. Mães japonesas acordam às 5h para preparar o bento dos filhos. A estética segue o conceito de 'ichigo ichie' (cada momento é único), por isso cada bento é diferente. As melhores caixas magewappa são feitas de cedro japonês curvado a vapor."
  }
];
