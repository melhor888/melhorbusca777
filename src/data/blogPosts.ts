export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML content
  category: string;
  tags: string[];
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
  relatedRecipes: string[]; // dish IDs
}

export const blogCategories = [
  { id: "historia", label: "História & Cultura", icon: "📜" },
  { id: "tecnicas", label: "Técnicas", icon: "🔪" },
  { id: "ingredientes", label: "Ingredientes", icon: "🌶️" },
  { id: "regionais", label: "Cozinha Regional", icon: "🗺️" },
  { id: "receitas", label: "Receitas & Dicas", icon: "🍽️" },
  { id: "tacos", label: "Tacos", icon: "🌮" },
  { id: "burritos", label: "Burritos", icon: "🌯" },
  { id: "enchiladas", label: "Enchiladas", icon: "🫔" },
  { id: "tamales", label: "Tamales", icon: "🫕" },
  { id: "quesadillas", label: "Quesadillas", icon: "🧀" },
  { id: "nachos", label: "Nachos", icon: "🔺" },
  { id: "molhos", label: "Molhos Mexicanos", icon: "🥣" },
  { id: "sopas", label: "Sopas Mexicanas", icon: "🍲" },
  { id: "bebidas", label: "Bebidas Típicas", icon: "🍹" },
  { id: "doces", label: "Doces & Sobremesas", icon: "🍮" },
  { id: "comida-rua", label: "Comida de Rua", icon: "🛒" },
  { id: "tradicionais", label: "Pratos Tradicionais", icon: "🏛️" },
  { id: "ancestral", label: "Cozinha Ancestral", icon: "🏺" },
  { id: "moderna", label: "Cozinha Moderna", icon: "✨" },
  { id: "festivos", label: "Pratos Festivos", icon: "🎉" },
  { id: "religiosos", label: "Pratos Religiosos", icon: "⛪" },
  { id: "street-premium", label: "Street Food Premium", icon: "🌟" },
  { id: "tortillas", label: "Tortillas", icon: "🫓" },
];

import { blogPostsBatch2 } from "./blogPosts-batch2";
import { blogPostsBatch3 } from "./blogPosts-batch3";
import { blogPostsBatch4 } from "./blogPosts-batch4";

const blogPostsBase: BlogPost[] = [
  {
    id: "blog-1",
    title: "A História dos Tacos al Pastor: Da Espada ao Trompo",
    slug: "historia-tacos-al-pastor",
    excerpt: "Descubra como imigrantes libaneses no México criaram um dos tacos mais icônicos do mundo, fundindo o shawarma com ingredientes mexicanos.",
    category: "historia",
    tags: ["tacos", "al pastor", "história", "gastronomia"],
    image: "/images/dish-tacos-al-pastor.jpg",
    author: "Chef Ricardo",
    publishedAt: "2026-02-20",
    readTime: "12 min",
    relatedRecipes: ["tacos-al-pastor", "tacos-campechanos", "salsa-roja"],
    content: `
<h2>A Origem Libanesa que Transformou a Culinária Mexicana</h2>

<p>Poucos pratos no mundo possuem uma história tão fascinante quanto os tacos al pastor. Essa criação culinária, que hoje é considerada um patrimônio gastronômico da Cidade do México, nasceu de um encontro improvável entre culturas: a tradição árabe do shawarma e a riqueza dos ingredientes mexicanos. Para entender como isso aconteceu, precisamos voltar ao início do século XX, quando ondas de imigrantes libaneses chegaram às costas mexicanas fugindo do domínio otomano.</p>

<p>Entre 1880 e 1930, milhares de famílias libanesas se estabeleceram em cidades como Puebla, Veracruz e a Cidade do México. Trouxeram consigo suas tradições culinárias, incluindo a técnica de cozinhar carne em um espeto vertical — o famoso shawarma. No entanto, no México, eles não encontravam os ingredientes tradicionais do Levante. Não havia pão pita abundante, nem as especiarias exatas que usavam em casa. O que havia era uma abundância de chiles, abacaxi, tortillas de milho e uma cultura culinária vibrante disposta a absorver influências.</p>

<h2>A Transformação: Do Shawarma ao Trompo</h2>

<p>A genialidade dos tacos al pastor está justamente nessa adaptação. Os imigrantes substituíram o cordeiro pelo porco — carne muito mais acessível e popular no México. A marinada original de especiarias árabes foi substituída por uma pasta de chiles secos (guajillo, ancho e pasilla) com achiote, que dava à carne aquela cor vermelha vibrante característica. E a grande revolução: em vez de servir no pão pita, passaram a usar tortillas de milho.</p>

<p>O espeto vertical, que no mundo árabe é chamado de "shawarma" ou "döner", ganhou no México o nome de "trompo" — pela semelhança visual com um pião (trompo em espanhol). E assim nasceu uma técnica que se tornaria onipresente nas ruas mexicanas: camadas de carne marinada empilhadas verticalmente, girando lentamente ao lado de uma chama, cozinhando por fora enquanto os sucos internos se redistribuem.</p>

<h2>O Papel do Abacaxi</h2>

<p>Um dos elementos mais distintivos dos tacos al pastor é a fatia de abacaxi colocada no topo do trompo. Essa adição não é meramente decorativa — é um golpe de gênio culinário. O abacaxi contém bromelina, uma enzima que ajuda a amaciar a carne enquanto o trompo gira. Os sucos do abacaxi escorrem pela carne, criando uma camada caramelizada que é pura magia gustativa. Quando o taquero corta fatias finas do trompo, cada pedaço traz consigo um toque de doçura tropical que contrasta perfeitamente com a especiaria dos chiles e o ácido do limão.</p>

<p>A técnica de corte é uma arte em si. O taquero segura uma tortilla em uma mão e, com a outra, usa uma faca afiada ou um instrumento especial para fatiar a carne diretamente na tortilla. Os melhores taqueros conseguem cortar pedaços finíssimos e uniformes em velocidade impressionante, finalizando com uma fatia de abacaxi que cai perfeitamente sobre a carne. É um espetáculo que atrai multidões nas esquinas da CDMX.</p>

<h2>A Marinada Perfeita: Segredos dos Mestres</h2>

<p>A marinada é onde cada taquero guarda seus segredos mais preciosos. A base universal inclui chiles guajillo (para cor e sabor frutado), chile ancho (para profundidade e doçura), e achiote (para aquela cor vermelha inconfundível). Mas é nos detalhes que cada trompo se diferencia. Alguns adicionam suco de abacaxi à marinada, outros usam vinagre. Há quem coloque cominho, orégano mexicano, pimenta-da-jamaica ou até um toque de canela.</p>

<p>O tempo de marinada também é crucial. No mínimo 4 horas, idealmente 12 a 24 horas. A carne deve ser cortada em fatias finas e uniformes antes de marinar, para que cada pedaço absorva igualmente os sabores. A proporção de carne magra para gordura também importa — gordura demais e o trompo desmorona; de menos e a carne fica seca. O equilíbrio perfeito é cerca de 80% carne magra e 20% gordura.</p>

<h2>A Geopolítica do Taco al Pastor</h2>

<p>Os tacos al pastor não são uniformes em todo o México — cada região desenvolveu sua versão. Na Cidade do México, a versão clássica usa tortilla pequena de milho, com cebola picada, coentro e salsa verde ou roja. Em Puebla, onde a influência libanesa foi mais forte, os "tacos árabes" usam pão pita em vez de tortilla e são servidos com chipotle. Em Monterrey, influenciados pela cultura norteña, preferem tortilla de farinha.</p>

<p>Em Jalisco, a versão local substitui parte do chile por achiote puro, criando um sabor mais terroso. No Bajío (Guanajuato, Querétaro), é comum encontrar tacos al pastor com queijo derretido. E em Oaxaca, a influência do mole se faz sentir em marinadas que incluem chocolate amargo e especiarias complexas.</p>

<h2>A Técnica do Trompo em Casa</h2>

<p>Reproduzir tacos al pastor autênticos em casa é um desafio, mas não impossível. Sem o trompo vertical, a melhor alternativa é usar uma grelha ou chapa bem quente. A chave está em fatiar a carne finíssima depois de marinada e cozinhá-la rapidamente em fogo alto, criando aquela crosta caramelizada (chamada de "costra") que é a assinatura do prato. Outra técnica caseira é empilhar as fatias marinadas em uma assadeira e assar em forno alto (220°C), virando a cada 15 minutos e cortando as bordas crocantes.</p>

<p>O segredo que os taqueros nunca compartilham abertamente é a "salsa do trompo" — o líquido que escorre durante o cozimento, uma mistura de gordura da carne, suco de abacaxi caramelizado e especiarias concentradas. Muitos taqueros recolhem esse líquido e o usam para pincelar a carne ou como base para suas salsas exclusivas.</p>

<h2>O Impacto Cultural e Econômico</h2>

<p>Hoje, os tacos al pastor são considerados o taco mais consumido no México e um dos pratos de rua mais populares do mundo. Em 2019, o Taste Atlas elegeu os tacos al pastor como o melhor prato do mundo. Na Cidade do México, estima-se que existam mais de 20.000 trompos girando simultaneamente em qualquer noite de sexta-feira. O mercado de tacos al pastor movimenta bilhões de pesos anualmente e sustenta centenas de milhares de famílias.</p>

<p>Mais do que um prato, os tacos al pastor são um símbolo da identidade mexicana — uma prova viva de que a grandeza da culinária nasce quando culturas diferentes se encontram, se respeitam e criam algo novo juntas. Da diáspora libanesa à esquina mais movimentada da CDMX, cada taco al pastor conta essa história de fusão, adaptação e genialidade culinária.</p>

<h2>Receitas Relacionadas para Praticar</h2>

<p>Agora que você conhece a história completa, está na hora de colocar a mão na masa. No nosso acervo, você encontra a receita tradicional de Tacos al Pastor com a marinada clássica de 3 chiles, a técnica de montagem do trompo caseiro, e salsas que complementam perfeitamente o prato. Clique nos links abaixo para explorar cada receita em detalhes e começar sua jornada como mestre dos tacos al pastor.</p>
`
  },

  {
    id: "blog-2",
    title: "O Mole Poblano: A Sinfonia de 30 Ingredientes",
    slug: "mole-poblano-sinfonia-ingredientes",
    excerpt: "Conheça a história do molho mais complexo do mundo e aprenda os segredos que fazem cada mole ser único e inesquecível.",
    category: "historia",
    tags: ["mole", "puebla", "chocolate", "história"],
    image: "/images/dish-mole-poblano.jpg",
    author: "Chef Ricardo",
    publishedAt: "2026-02-18",
    readTime: "14 min",
    relatedRecipes: ["mole-poblano", "mole-negro", "enmoladas"],
    content: `
<h2>O Molho Mais Complexo do Mundo</h2>

<p>Se existe um prato que encapsula toda a complexidade, a história e a alma da culinária mexicana em uma única preparação, esse prato é o mole. E entre todos os moles — são centenas de variações — o Mole Poblano ocupa o trono como o mais emblemático, o mais celebrado e, possivelmente, o mais complexo molho já criado pela humanidade. Com seus 30 ou mais ingredientes, que incluem chiles secos, chocolate, especiarias, frutas, sementes e horas de trabalho meticuloso, o mole poblano é uma verdadeira sinfonia gastronômica.</p>

<p>A palavra "mole" vem do nahuatl "molli", que significa simplesmente "molho" ou "mistura". Mas chamar o mole de "molho" é como chamar a Nona Sinfonia de Beethoven de "barulhinho". O mole é uma categoria inteira da culinária mexicana, com variações que vão do negro intenso de Oaxaca ao verde herbal de Guerrero, do amarelo de Oaxaca ao rosado de Michoacán.</p>

<h2>A Lenda das Freiras</h2>

<p>A história mais popular sobre a origem do mole poblano nos leva ao Convento de Santa Rosa, em Puebla, no século XVII. Segundo a lenda, as freiras dominicanas do convento receberam a notícia de que o vice-rei visitaria a cidade e precisavam preparar um banquete digno. Em desespero, Sor Andrea de la Asunción reuniu todos os ingredientes disponíveis na cozinha — chiles secos de diferentes tipos, chocolate, especiarias trazidas da Europa e da Ásia pela Nau de Manila, sementes nativas, frutas e muito mais — e começou a combiná-los em uma preparação épica.</p>

<p>O resultado foi um molho escuro, espesso, com camadas de sabor que pareciam infinitas: o calor dos chiles, a amargura do chocolate, o doce das frutas, o terroso das sementes, o picante das especiarias. O vice-rei ficou tão impressionado que o prato se tornou a especialidade de Puebla e, eventualmente, um dos pratos nacionais do México.</p>

<p>Historiadores gastronômicos, no entanto, apontam que a verdade provavelmente é mais complexa. Moles já existiam em versões mais simples desde antes da chegada dos espanhóis — os astecas preparavam molhos de chile com sementes de abóbora e cacau. O que as freiras fizeram foi sofisticar e enriquecer essas preparações com ingredientes europeus e asiáticos, criando a versão barroca que conhecemos hoje.</p>

<h2>Os Ingredientes: Uma Análise Profunda</h2>

<p>Um mole poblano autêntico pode conter de 20 a 35 ingredientes, cada um com função específica. Vamos analisar os principais grupos:</p>

<p><strong>Chiles (a espinha dorsal):</strong> Chile ancho (seco do poblano) — doce, frutado, cor vermelha escura. Chile mulato — semelhante ao ancho mas mais amargo e achocolatado. Chile pasilla — delicado, com notas de frutas secas. Chile chipotle — defumado, profundo. Cada chile é desvenado, tostado levemente na chapa e hidratado em água quente. A proporção entre eles define o perfil de sabor — mais ancho para doçura, mais pasilla para elegância, mais chipotle para profundidade.</p>

<p><strong>Chocolate e sementes:</strong> Chocolate amargo mexicano (com canela), não chocolate ao leite. Amêndoas ou amendoim torrados. Pepitas de abóbora. Gergelim (fundamental — é a assinatura do mole poblano). As sementes são torradas até dourar, liberando óleos e aromas que darão corpo e cremosidade ao molho.</p>

<p><strong>Especiarias:</strong> Canela (ceilão, não cassia), cravo, pimenta-da-jamaica, cominho, orégano mexicano, pimenta preta, louro. Cada especiaria deve ser torrada individualmente — cada uma tem seu ponto ideal. Queimar é inaceitável, pois traz amargura irrecuperável.</p>

<p><strong>Frutas e vegetais:</strong> Passas (doçura e corpo), banana macho frita, tomate assado, cebola assada, alho assado. As frutas equilibram a acidez dos tomates e a picância dos chiles.</p>

<p><strong>Outros:</strong> Tortilla queimada (espessante e cor), pão frito (corpo), caldo de frango (líquido base). Cada ingrediente tem seu momento de entrada na preparação.</p>

<h2>O Processo: Paciência como Ingrediente Principal</h2>

<p>Fazer mole é um exercício de paciência e atenção. O processo leva entre 4 e 8 horas — não existe atalho que não comprometa o resultado. Cada grupo de ingredientes é preparado separadamente: chiles são hidratados, especiarias são torradas, sementes são tostadas, frutas são fritas. Depois, tudo é batido em tandas no liquidificador com caldo de frango até formar uma pasta espessa.</p>

<p>A etapa crucial é a fritura do mole. Em uma panela grande com banha de porco ou óleo, a pasta é frita em fogo médio por pelo menos 30-40 minutos, mexendo constantemente. Esse processo carameliza os açúcares, integra os sabores e escurece o molho. O mole está pronto quando "muda de cor" — escurece visivelmente — e quando uma gota colocada no dorso da mão não escorre. A consistência deve ser aveludada, nem líquida nem pastosa.</p>

<p>O chocolate é adicionado apenas nos últimos minutos, para que não queime. E o sal é sempre o último ingrediente — ajustar com cuidado, pois um mole excessivamente salgado é irreversível.</p>

<h2>Os 7 Moles de Oaxaca</h2>

<p>Se Puebla tem seu mole poblano, Oaxaca — chamada "La Tierra de los Siete Moles" — tem uma família inteira. Os sete moles tradicionais de Oaxaca são: Negro (o mais complexo, com chile chilhuacle negro), Rojo (chile ancho e guajillo), Coloradito (mais doce, com banana), Amarillo (com chile chilcostle), Verde (ervas frescas e pepitas), Manchamanteles (com frutas, "mancha toalhas") e Chichilo (o mais raro, defumado e intenso).</p>

<p>Cada um é servido em ocasiões específicas. O negro é para casamentos e festas maiores. O coloradito para domingos em família. O amarillo para dias de semana. O verde para ocasiões informais. Essa codificação social dos moles revela como a culinária mexicana está entrelaçada com a vida comunitária e ritualística.</p>

<h2>A Filosofia do Mole</h2>

<p>O mole ensina algo profundo sobre a culinária mexicana: a grandeza não vem da simplicidade ou de ingredientes caros, mas da paciência, do conhecimento acumulado por gerações e da capacidade de harmonizar elementos aparentemente contraditórios. Chocolate e chile. Doce e salgado. Amargo e frutado. Picante e reconfortante. O mole é a prova de que a complexidade, quando bem executada, cria algo maior que a soma de suas partes.</p>

<p>Se você quer se aventurar na preparação de mole, comece pelo mole rojo (mais simples) antes de encarar o poblano completo. E lembre-se: o melhor mole do mundo é aquele feito com paciência, ingredientes de qualidade e, principalmente, com amor. Como dizem no México: "El mole se hace con las manos y con el corazón."</p>
`
  },

  {
    id: "blog-3",
    title: "Chiles Mexicanos: O Guia Definitivo de Variedades e Usos",
    slug: "guia-definitivo-chiles-mexicanos",
    excerpt: "Do suave poblano ao ardente habanero — conheça mais de 50 variedades de chiles e aprenda quando e como usar cada um.",
    category: "ingredientes",
    tags: ["chiles", "pimenta", "ingredientes", "guia"],
    image: "/images/dish-chiles-rellenos.jpg",
    author: "Chef Ricardo",
    publishedAt: "2026-02-15",
    readTime: "15 min",
    relatedRecipes: ["chiles-rellenos", "salsa-verde", "salsa-roja", "aguachile"],
    content: `
<h2>O Chile é a Alma da Culinária Mexicana</h2>

<p>Não existe culinária mexicana sem chile. Ponto. Enquanto outras cozinhas do mundo usam pimenta como tempero secundário, no México o chile é o ingrediente principal, o protagonista, a razão de ser de centenas de pratos. O México domesticou os chiles há mais de 7.000 anos — muito antes dos europeus saberem da existência desse continente. E nesse milênios de experimentação, os mexicanos desenvolveram uma relação com o chile que vai muito além da picância: é sabor, aroma, cor, textura e identidade cultural.</p>

<p>Para entender os chiles mexicanos, é preciso primeiro abandonar a ideia de que chile = pimenta ardida. No México, existem chiles que não ardem nada (o poblano tem 1.000-2.000 na escala Scoville, praticamente nada), chiles que são usados por sua cor (o ancho), por seu aroma defumado (o chipotle), por seu sabor frutado (o guajillo) ou por sua complexidade amarga (o pasilla). A picância é apenas uma das muitas dimensões do chile mexicano.</p>

<h2>Chiles Frescos: Os Vivos</h2>

<p><strong>Chile Poblano (1.000-2.000 SHU):</strong> O mais versátil. Grande, largo, cor verde escura. Suave, com sabor herbáceo e terroso. É o chile dos chiles rellenos (recheados com queijo ou picadillo e fritos em ovo). Também usado em rajas (tiras) com creme, no arroz verde e em sopas. Quando seco, vira chile ancho. Quando tostado e descascado, revela um sabor defumado delicado.</p>

<p><strong>Chile Serrano (10.000-25.000 SHU):</strong> Pequeno, fino, verde brilhante. É o chile "do dia a dia" — usado em salsas verdes cruas, pico de gallo e guacamole. Mais picante que o jalapeño, mas com sabor mais limpo e fresco. No México, é picado cru e adicionado diretamente aos pratos. Quanto menor, mais picante.</p>

<p><strong>Chile Jalapeño (2.500-8.000 SHU):</strong> O mais famoso internacionalmente, mas no México é considerado "suave". Usado em escabeche (em conserva com cenoura e cebola), recheado com queijo, ou fatiado para nachos. Quando defumado e seco, torna-se chipotle — um dos chiles secos mais valorizados.</p>

<p><strong>Chile Habanero (100.000-350.000 SHU):</strong> O rei da picância mexicana. Originário de Yucatán, é pequeno, lanterna, em cores vibrantes (laranja, vermelho, amarelo). Apesar da ardência extrema, tem sabor frutado e floral incomparável. Usado na salsa xni-pec (cru, com cebola e laranja amarga) e em molhos yucatecos. Manipule com luvas.</p>

<p><strong>Chile de Agua (1.000-2.000 SHU):</strong> Exclusivo de Oaxaca. Longo, verde claro, suave. Assado na brasa e servido como acompanhamento com sal e limão. É tão valorizado que quase não sai de Oaxaca — encontrar em outros estados é raridade.</p>

<p><strong>Chile Chilaca (1.000-2.500 SHU):</strong> Longo, escuro, curvo. Sabor suave e levemente amargo. Quando seco, vira chile pasilla. Usado fresco em rajas e caldos no centro do México.</p>

<h2>Chiles Secos: Os Transformados</h2>

<p>A secagem transforma completamente o chile — concentra sabores, desenvolve notas de caramelo, frutas secas e terra, e muda até o nome. Essa dualidade é uma das belezas da culinária mexicana.</p>

<p><strong>Chile Ancho:</strong> O poblano seco. Cor vermelho-escuro quase negro, pele enrugada. Sabor doce, frutado, com notas de ameixa e chocolate. É a base do mole poblano, adobos e salsas vermelhas. O chile seco mais usado no México.</p>

<p><strong>Chile Guajillo:</strong> Cor vermelho-alaranjado brilhante, pele lisa. Sabor frutado, levemente ácido, com notas de chá verde. Usado em salsas, birria, pozole e marinadas. Dá cor vibrante aos pratos sem muita picância.</p>

<p><strong>Chile Chipotle:</strong> Jalapeño defumado em madeira de carvalho ou mesquite. Sabor profundamente defumado, com calor médio. Vendido seco ou em lata (chipotles en adobo). Transforma qualquer molho com seu caráter único. Um pouco vai longe.</p>

<p><strong>Chile Pasilla:</strong> Chilaca seco. Cor negro-púrpura. Sabor amargo-elegante, com notas de cacau e ervas. Essencial no mole negro. Quando frito em óleo, fica crocante e se usa como guarnição.</p>

<p><strong>Chile de Árbol:</strong> Pequeno, fino, vermelho brilhante. Calor intenso mas limpo. O chile das salsas taqueras — torrado e moído, dá cor e picância. Também se usa inteiro em óleos infusionados.</p>

<p><strong>Chile Morita:</strong> Versão menor e mais seca do chipotle. Menos defumado, mais frutado. Usado em salsas e adobos quando se quer sabor defumado mais sutil.</p>

<p><strong>Chile Cascabel:</strong> Redondo como uma bola, quando seco as sementes chacoalham dentro (daí o nome). Sabor terroso, amendoado, com calor moderado. Usado em salsas de mesa e guisados do centro do México.</p>

<h2>Como Preparar Chiles Secos: A Técnica Universal</h2>

<p>1. <strong>Desvene:</strong> Abra o chile com as mãos, remova cabo, sementes e veias internas. As veias contêm a capsaicina — remover reduz a picância. 2. <strong>Torre:</strong> Na chapa seca e quente, pressione o chile por 15-30 segundos de cada lado. Deve mudar levemente de cor e soltar aroma. NUNCA queime — amargura irreversível. 3. <strong>Hidrate:</strong> Cubra com água quente e deixe por 15-20 minutos até ficar maleável. 4. <strong>Bata:</strong> No liquidificador com um pouco da água de hidratação. A água de hidratação é saborosa — use-a.</p>

<p>Essa técnica básica se aplica a qualquer chile seco e é a fundação de centenas de salsas, moles, adobos e guisados mexicanos. Domine essa técnica e você terá acesso a um universo inteiro de sabores.</p>

<h2>A Escala Scoville e o Paladar Mexicano</h2>

<p>A Escala Scoville mede unidades de calor (SHU) — quanto maior, mais picante. Mas para os mexicanos, a picância não é sobre machismo ou resistência. É sobre sabor. Cada nível de calor ativa diferentes receptores gustativos e libera endorfinas que modificam a percepção de todos os outros sabores do prato. Um caldo sem chile é "insípido" não por falta de sal, mas por falta daquela dimensão de calor que os mexicanos consideram essencial para a experiência completa.</p>

<p>Se você está começando sua jornada com chiles, comece pelo poblano e pelo ancho. São suaves, saborosos e perdoam erros. Gradualmente, explore o guajillo, depois o chipotle, e quando estiver confiante, aventure-se no serrano e no habanero. O paladar se adapta — o que hoje parece impossível, em meses se torna prazeroso.</p>

<h2>Conservação e Compra</h2>

<p>Chiles frescos devem ser firmes, brilhantes e sem manchas. Guardem na geladeira por até 2 semanas. Chiles secos devem ser flexíveis (não quebradiços — isso indica velhice). Guardem em local seco e escuro por até 6 meses. Nunca comprem pré-moídos quando podem comprar inteiros — a diferença de sabor é abismal. E lembrem-se: no mundo dos chiles mexicanos, cada variedade é um universo de possibilidades esperando para ser explorado.</p>
`
  },

  {
    id: "blog-4",
    title: "Street Food na Cidade do México: Um Roteiro Gastronômico Completo",
    slug: "street-food-cidade-mexico-roteiro",
    excerpt: "Das esquinas de Coyoacán aos mercados de Tepito — um guia completo pela melhor comida de rua da CDMX.",
    category: "regionais",
    tags: ["street food", "CDMX", "roteiro", "antojitos"],
    image: "/images/dish-elotes.jpg",
    author: "Chef Ricardo",
    publishedAt: "2026-02-10",
    readTime: "13 min",
    relatedRecipes: ["elotes", "sopes", "pambazos", "tacos-suadero", "quesadillas"],
    content: `
<h2>A Capital Mundial da Comida de Rua</h2>

<p>A Cidade do México é, sem exagero, a capital mundial da comida de rua. Em nenhuma outra metrópole do planeta você encontra tamanha diversidade, qualidade e acessibilidade de alimentos preparados ao ar livre. São mais de 500.000 vendedores ambulantes (aproximação conservadora) servindo uma população faminta que aprendeu, desde a infância, que as melhores refeições não estão nos restaurantes — estão nas esquinas, nos mercados e nos postos improvisados que aparecem quando o sol se põe.</p>

<p>A comida de rua mexicana não é fast food — é "slow food servida rápido". Cada taquero que opera seu trompo à noite carrega décadas de técnica transmitida por gerações. Cada señora que faz gorditas na manhã sabe a temperatura exata do comal e a consistência perfeita da masa sem precisar de termômetro ou balança. É conhecimento empírico refinado por séculos de prática coletiva.</p>

<h2>Manhã (6h-11h): O Desayuno Callejero</h2>

<p>O dia na CDMX começa cedo e com fome. Nas esquinas do Centro Histórico e em praticamente todos os bairros, encontram-se os postos de tamales e atole. Os tamaleros começam a montar suas vaporizadoras (panelas de vapor gigantes) às 5h da manhã. Os tamales — de verde (salsa verde com frango), de mole (com frango em mole poblano), de rajas (poblano com queijo) e doces (de fresa, piña ou chocolate) — são embrulhados em folha de milho ou bananeira e cozidos no vapor por horas.</p>

<p>O acompanhamento obrigatório é o atole — bebida espessa de masa de milho com sabores como champurrado (chocolate), guayaba, vainilla ou fresa. E aqui vem um hábito que choca os estrangeiros: o "guajolote" ou "torta de tamal" — um tamal dentro de um bolillo (pão). Carboidrato dentro de carboidrato. Parece loucura, mas as texturas contrastantes (o macio do tamal com o crocante do pão) criam algo surpreendentemente satisfatório.</p>

<p>Para quem prefere algo mais substancial, há os postos de quesadillas. Na CDMX (e apenas na CDMX, isso gera debates acalorados com o resto do país), "quesadilla" pode não ter queijo — sim, leu corretamente. Você encontra quesadillas de huitlacoche (fungo do milho), de flor de calabaza (flor de abóbora), de tinga (frango em chipotle), de papa (batata), de chicharrón prensado e, claro, de queijo. São feitas na hora em masa azul ou branca, fritas em óleo ou na chapa.</p>

<h2>Meio-dia (12h-15h): A Comida</h2>

<p>O almoço no México é a refeição principal — chamada simplesmente de "la comida" (a comida, singular, definitiva). Nas ruas, isso se traduz em postos de guisados onde enormes cazuelas (panelas de barro) exibem 10, 15, 20 guisados diferentes: chicharrón en salsa verde, pollo en mole, tinga de res, picadillo, rajas con crema, albóndigas en caldillo. Você escolhe dois ou três, e são servidos com arroz, feijão, tortillas e salsa.</p>

<p>Os mercados são o epicentro dessa experiência. O Mercado de la Merced, o maior mercado da CDMX, tem um andar inteiro dedicado a comida preparada. Cada puesto (barraca) é especializado: um faz apenas caldos, outro só birria, outro se dedica exclusivamente a mariscos. A competição é feroz e a qualidade, extraordinária.</p>

<p>Para os amantes de sopas, o caldo de pollo (frango) é universal — servido em pratos enormes com arroz, garbanzos, legumes e tortillas. O pozole aparece especialmente aos sábados e domingos. E o consomé de barbacoa — caldo rico e gorduroso onde a carne de borrego foi cozida — é acompanhamento obrigatório dos tacos de barbacoa que dominam os domingos.</p>

<h2>Noite (18h em diante): O Reino dos Tacos</h2>

<p>Quando o sol se põe, a CDMX se transforma na maior taquería a céu aberto do mundo. Os trompos de pastor começam a girar, as chapas de suadero são aquecidas, as parrillas de carne asada são acesas. Cada esquina vira um ponto de encontro gastronômico.</p>

<p>Os tacos de suadero (carne da região entre a costela e a pele bovina, frita lentamente em sua própria gordura até ficar crocante por fora e macia por dentro) são uma obsessão da CDMX. Os melhores ficam em postos improvisados em calçadas, com apenas uma chapa, um balde de salsa verde e outro de salsa roja. A fila é o termômetro — se tem fila, é bom.</p>

<p>Os tacos de canasta (tacos de cesta) são uma categoria única: tacos já montados (de frijol, papa, chicharrón ou mole) empilhados em uma cesta forrada com papel manteiga e cobertor, marinando em banha derretida. São servidos à temperatura morna e custam quase nada. É o taco mais democrático do México.</p>

<h2>Os Mercados Imperdíveis</h2>

<p>Mercado de San Juan: o mercado gourmet. Carnes exóticas (crocodilo, javali, avestruz), queijos artesanais, frutos do mar premium. Mercado de Jamaica: flores e frutas tropicais em quantidade absurda. Mercado de Coyoacán: churros, tostadas e um ambiente boêmio. Mercado de la Ciudadela: não é de comida, mas os artesanatos incluem molcajetes, prensas de tortilla e artigos culinários. Mercado de Tepito: caótico, intenso, mas com comida incrivelmente autêntica.</p>

<p>Cada mercado é um microcosmo da diversidade mexicana. Num mesmo corredor você encontra senhora oaxaqueña vendendo tlayudas, família yucateca com panuchos e don de Jalisco com birria. É o México inteiro concentrado em poucos quarteirões.</p>

<h2>Dicas Práticas para o Viajante Gastronômico</h2>

<p>1. Vá onde os locais comem — fila de mexicanos é o melhor Michelin. 2. Não tenha medo de postos "humildes" — aparência não indica qualidade. 3. Comece suave: peça salsa à parte e vá adicionando. 4. Carregue moedas — muitos postos são cash only. 5. O horário importa: cada comida de rua tem seu momento do dia. 6. Prove os aguas frescas: jamaica, horchata, tamarindo — refrescantes e deliciosas. 7. Converse com o taquero — mexicanos adoram falar sobre comida e vão indicar seus melhores pratos com orgulho.</p>

<p>A comida de rua da CDMX não é apenas alimentação — é experiência cultural, social e sensorial. É democracia gastronômica: o empresário de terno e o pedreiro suado comem lado a lado no mesmo puesto, dividindo a mesma salsa. Nenhum restaurante estrelado jamais replicará essa experiência. E isso é o que torna a CDMX a capital culinária do mundo.</p>
`
  },

  {
    id: "blog-5",
    title: "Tortillas de Milho Artesanais: Da Nixtamalização à Mesa",
    slug: "tortillas-milho-artesanais-nixtamalizacao",
    excerpt: "Aprenda o processo completo de nixtamalização e produção de tortillas artesanais — a base de toda a culinária mexicana.",
    category: "tecnicas",
    tags: ["tortillas", "nixtamalização", "masa", "técnica"],
    image: "/images/dish-tortilla-milho.jpg",
    author: "Chef Ricardo",
    publishedAt: "2026-02-05",
    readTime: "14 min",
    relatedRecipes: ["gorditas", "sopes", "tlacoyos", "tacos-al-pastor"],
    content: `
<h2>A Tortilla é o Coração do México</h2>

<p>Se o México fosse uma casa, a tortilla seria seu alicerce. Nenhum outro alimento no mundo tem a importância cultural, nutricional e culinária que a tortilla de milho tem para os mexicanos. São consumidas em todas as refeições — café da manhã, almoço, jantar e lanches. Estimativas indicam que o México produz mais de 12 milhões de toneladas de tortillas por ano. É o alimento mais consumido do país, superando até o arroz e o pão. E por trás de cada tortilla autêntica está um processo ancestral que tem mais de 3.500 anos: a nixtamalização.</p>

<p>Antes de falar sobre técnicas de produção, é preciso entender por que a nixtamalização é tão revolucionária. Os povos mesoamericanos descobriram, milênios antes da ciência moderna, que cozinhar milho em água com cal (hidróxido de cálcio, ou "cal viva" apagada) transformava fundamentalmente o grão. A cal dissolve a casca exterior do milho (pericarpo), libera niacina (vitamina B3) que seria inacessível de outra forma, aumenta a disponibilidade de aminoácidos essenciais e torna o amido mais digerível.</p>

<h2>O Processo de Nixtamalização: Passo a Passo</h2>

<p>O processo começa com a seleção do milho. No México, existem mais de 60 raças nativas de milho — cada uma com características diferentes de cor, textura, sabor e rendimento. Para tortillas, os mais valorizados são: milho branco (Tuxpeño, Olotillo) para tortillas clássicas, milho azul para tortillas coloridas e nutritivas, milho rojo para tortillas especiais. O milho deve ser seco, inteiro e sem fungos.</p>

<p><strong>Passo 1 — Cozimento:</strong> Coloque 1kg de milho em 3 litros de água com 1-2 colheres de sopa de cal viva apagada (cal para nixtamal, encontrada em mercados mexicanos). Aqueça até ferver. O tempo de cozimento varia: milho macio (1-2h), milho duro (2-3h), milho crioulo velho (até 4h). O milho está pronto quando a casca começa a se soltar facilmente ao esfregar entre os dedos.</p>

<p><strong>Passo 2 — Repouso (nejayote):</strong> Desligue o fogo e deixe o milho descansando na água com cal (chamada "nejayote") por 8-12 horas, idealmente de um dia para outro. Durante esse tempo, a cal continua agindo, amolecendo o grão e desenvolvendo sabores complexos. A água fica amarelada e viscosa — isso é normal e desejável.</p>

<p><strong>Passo 3 — Lavagem:</strong> Escorra o nejayote e lave o nixtamal (milho nixtamalizado) em água corrente, esfregando os grãos entre as mãos para remover os restos de casca (pericarpo). A água deve sair limpa. Não lave excessivamente — um pouco de cal residual dá sabor e textura. O ponto ideal é quando os grãos estão macios, inchados e levemente translúcidos.</p>

<p><strong>Passo 4 — Moagem:</strong> Tradicionalmente, o nixtamal é moído no metate — uma pedra plana de basalto com uma pedra cilíndrica para moer. Hoje, a maioria usa moinho industrial (molino), que produz masa com textura mais uniforme. Em casa, um processador de alimentos potente funciona — adicione pequenas quantidades de água conforme necessário. A masa deve ficar úmida, maleável e não grudenta. Se rachar ao apertar, precisa de mais água. Se grudar nas mãos, tem água demais.</p>

<h2>Formando e Cozinhando: A Dança da Tortillera</h2>

<p>A formação da tortilla pode ser feita à mão (palmoteando — a técnica tradicional que exige anos de prática) ou na prensa de tortillas (tortillera). Para a prensa: corte dois pedaços de plástico (sacola cortada funciona), coloque um na base da prensa, posicione uma bolinha de masa (30-35g), cubra com o outro plástico e pressione. A tortilla deve ter cerca de 15cm de diâmetro e espessura uniforme.</p>

<p>O comal (chapa de ferro fundido ou barro) deve estar bem quente — sem óleo ou gordura. Coloque a tortilla e cozinhe 45-60 segundos do primeiro lado, até que a borda comece a secar e se solte facilmente. Vire e cozinhe mais 60 segundos. Vire novamente — se a masa está boa e o comal na temperatura certa, a tortilla vai inflar, formando uma bolha de vapor. Esse "poof" é o sinal de perfeição — significa que as camadas internas estão cozidas e que a estrutura está correta.</p>

<p>As tortillas prontas vão para a tortillera (cesta forrada com pano) ou para um recipiente com tampa, onde se mantêm quentes e úmidas por absorção mútua do vapor. Uma tortilla de milho artesanal bem feita tem aroma de milho fresco, textura flexível sem ser borrachuda, sabor levemente adocicado e terroso, e aquela cor que nenhuma tortilla industrial consegue reproduzir.</p>

<h2>Masa Harina vs Masa Fresca</h2>

<p>Masa harina (farinha de milho nixtamalizado industrializada, como Maseca ou Minsa) é conveniente — basta adicionar água e está pronto. Mas a diferença para masa fresca é como comparar café solúvel com café de grão recém-moído. A masa fresca tem umidade natural, óleos essenciais do milho preservados, textura mais complexa e sabor incomparavelmente superior.</p>

<p>No entanto, masa harina é uma alternativa viável fora do México, onde nixtamal fresco é raro. A proporção clássica para masa harina é 2 xícaras de farinha para 1¼ xícara de água morna. Misture, sove por 2-3 minutos e descanse 15 minutos coberto com pano úmido. A masa deve ter consistência de massinha de modelar — moldável sem rachar nas bordas.</p>

<h2>Variações Regionais</h2>

<p>No México, cada região tem suas particularidades na tortilla. Em Oaxaca, as tlayudas são tortillas gigantes (30cm+) cozidas em comal de barro até ficarem semi-crocantes. Em Sonora, as tortillas de farinha de trigo são enormes e finas como papel. No centro do México, as memelas são tortillas grossas pinçadas nas bordas. Em Guerrero, as tortillas de milho azul são especialmente valorizadas.</p>

<p>A tortilla não é apenas base para tacos — é prato, talher, acompanhamento e ingrediente. Quando frita, vira tostada. Quando cortada e frita, vira totopos (chips). Quando envelhecida e cozida em salsa, vira chilaquiles. Quando enrolada com recheio e coberta de molho, vira enchilada. A versatilidade da tortilla é infinita — e tudo começa com um grão de milho, um punhado de cal e milhares de anos de sabedoria acumulada.</p>

<h2>Dicas Finais para a Tortilla Perfeita</h2>

<p>A temperatura do comal é tudo: muito frio e a tortilla gruda; muito quente e queima antes de cozinhar por dentro. O ponto ideal é quando um gota d'água evapora em 2 segundos. Não pressione a tortilla no comal — resista à tentação. Pressionar expulsa o vapor que deveria inflá-la. E finalmente: tortilla fresca é melhor que tortilla perfeita. Mesmo uma tortilla um pouco irregular, feita em casa com masa de qualidade, será infinitamente superior a qualquer tortilla industrial de supermercado. A imperfeição é a assinatura do artesanal.</p>
`
  },
];

/** All blog posts, aggregated from all batch files */
export const blogPosts: BlogPost[] = [
  ...blogPostsBase,
  ...blogPostsBatch2,
  ...blogPostsBatch3,
  ...blogPostsBatch4,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "todos") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
