// Preço médio, curiosidade e origem para cada receita
export interface DishExtra {
  price: string;
  curiosity: string;
  origin: string;
}

export const dishExtras: Record<string, DishExtra> = {
  // ============ PRATOS TRADICIONAIS ============
  "sushi-misto": { price: "¥1.500 (~R$55)", origin: "Tóquio, Japão", curiosity: "O sushi como conhecemos (nigiri) foi inventado por Hanaya Yohei em 1824, como fast food de Edo (atual Tóquio)." },
  "sashimi-misto": { price: "¥1.800 (~R$65)", origin: "Japão (todo o país)", curiosity: "A palavra 'sashimi' significa 'corpo perfurado' — antigamente a barbatana do peixe era espetada na fatia para identificar a espécie." },
  "nigiri-salmao": { price: "¥300 (~R$11)", origin: "Tóquio, Japão", curiosity: "Salmão no sushi é uma invenção relativamente recente — só se popularizou nos anos 1980, graças a uma campanha de marketing da Noruega." },
  "temaki-salmao": { price: "¥400 (~R$15)", origin: "Tóquio, Japão", curiosity: "O temaki foi popularizado no Brasil nos anos 1990 e se tornou mais popular aqui do que no próprio Japão." },
  "uramaki-california": { price: "¥500 (~R$18)", origin: "Los Angeles, EUA", curiosity: "Foi criado pelo chef Ichiro Mashita nos anos 1960 para americanos que tinham medo de ver a alga por fora." },
  "hosomaki-pepino": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "O kappa do nome é uma criatura aquática do folclore japonês obcecada por pepinos — por isso o maki de pepino leva seu nome." },
  "futomaki": { price: "¥600 (~R$22)", origin: "Osaka, Japão", curiosity: "No Setsubun (3 de fevereiro), japoneses comem um futomaki inteiro sem cortar, virados para a direção da sorte do ano." },
  "nigiri-atum": { price: "¥400 (~R$15)", origin: "Tóquio, Japão", curiosity: "O atum otoro (barriga gordurosa) era descartado até o século XX — hoje é o corte mais caro do sushi, podendo custar ¥10.000 por peça." },
  "temaki-skin": { price: "¥350 (~R$13)", origin: "São Paulo, Brasil", curiosity: "O temaki de skin é uma invenção 100% brasileira que não existe no Japão — aproveitamento criativo da pele do salmão." },

  // ============ MASSAS JAPONESAS ============
  "ramen-tonkotsu": { price: "¥900 (~R$33)", origin: "Fukuoka (Hakata), Japão", curiosity: "O caldo tonkotsu é fervido por 12-18 horas até os ossos se dissolverem — o resultado é um caldo branco e cremoso com colágeno puro." },
  "ramen-shoyu": { price: "¥850 (~R$31)", origin: "Tóquio, Japão", curiosity: "O primeiro restaurante de ramen do Japão, Rairaiken, abriu em Tóquio em 1910 e servia ramen shoyu com receita de um cozinheiro chinês." },
  "ramen-miso": { price: "¥900 (~R$33)", origin: "Sapporo, Hokkaido", curiosity: "O ramen miso foi inventado em 1955 por Morito Omiya no restaurante Aji no Sanpei. Ele adicionou miso ao caldo a pedido de um cliente." },
  "udon-kitsune": { price: "¥600 (~R$22)", origin: "Osaka, Japão", curiosity: "Kitsune (raposa) adora tofu frito segundo o folclore japonês — por isso udon com aburaage se chama kitsune udon." },
  "udon-tempura": { price: "¥800 (~R$29)", origin: "Japão (todo o país)", curiosity: "O udon mais grosso do Japão é o de Sanuki (Kagawa), onde há mais restaurantes de udon per capita do que qualquer outro lugar." },
  "yakisoba": { price: "¥500 (~R$18)", origin: "Japão (adaptado da China)", curiosity: "Apesar do nome conter 'soba', yakisoba não usa macarrão de trigo sarraceno — usa macarrão de trigo comum estilo chinês." },
  "soba-fria": { price: "¥700 (~R$25)", origin: "Nagano, Japão", curiosity: "No Japão, come-se soba na virada do ano (toshikoshi soba) para simbolizar longevidade — os fios longos representam vida longa." },
  "soba-quente": { price: "¥650 (~R$24)", origin: "Japão (todo o país)", curiosity: "Fazer barulho ao comer soba é considerado educado no Japão — o som indica que você está apreciando a refeição." },

  // ============ PRATOS QUENTES ============
  "yakitori": { price: "¥150/espeto (~R$5)", origin: "Tóquio, Japão", curiosity: "Existem mais de 30 partes diferentes de frango servidas como yakitori — incluindo coração, cartilagem e até crista." },
  "karaage": { price: "¥500 (~R$18)", origin: "Nakatsu, Ōita", curiosity: "A cidade de Nakatsu em Ōita se proclama a 'capital do karaage' e realiza um festival anual com mais de 100 barracas." },
  "tempura-mista": { price: "¥1.200 (~R$44)", origin: "Nagasaki, Japão", curiosity: "Tempurá vem do português 'têmporas' — período de jejum religioso em que portugueses comiam legumes fritos no séc. XVI." },
  "tonkatsu": { price: "¥1.000 (~R$37)", origin: "Tóquio, Japão", curiosity: "Estudantes japoneses comem tonkatsu antes de provas porque 'katsu' soa como 'vitória' (勝つ) — é um amuleto comestível." },
  "gyudon": { price: "¥500 (~R$18)", origin: "Tóquio, Japão", curiosity: "A rede Yoshinoya serve gyudon desde 1899 e vende mais de 1 bilhão de tigelas por ano em todo o mundo." },
  "katsudon": { price: "¥800 (~R$29)", origin: "Tóquio, Japão", curiosity: "Policiais em séries japonesas sempre oferecem katsudon a suspeitos durante interrogatórios — é um clichê cultural." },
  "oyakodon": { price: "¥600 (~R$22)", origin: "Tóquio, Japão", curiosity: "O nome 'oyakodon' (pais e filhos) é um trocadilho culinário — a galinha (mãe) e o ovo (filho) estão juntos na mesma tigela." },
  "sukiyaki": { price: "¥2.500 (~R$92)", origin: "Yokohama, Japão", curiosity: "Sukiyaki se tornou popular após a Era Meiji (1868), quando o Japão levantou a proibição de comer carne bovina que durava 1.200 anos." },
  "shabu-shabu": { price: "¥3.000 (~R$110)", origin: "Osaka, Japão", curiosity: "O nome 'shabu-shabu' é onomatopeia — imita o som da carne sendo agitada no caldo quente. Foi registrado como marca em 1952." },
  "teppanyaki": { price: "¥3.500 (~R$130)", origin: "Kobe, Japão", curiosity: "Teppanyaki como show de cozinha foi criado pela rede Benihana nos EUA em 1964 — no Japão era um estilo simples de grelhado." },
  "okonomiyaki": { price: "¥800 (~R$29)", origin: "Osaka/Hiroshima, Japão", curiosity: "Osaka e Hiroshima disputam há décadas qual cidade tem o melhor okonomiyaki — são estilos completamente diferentes." },
  "takoyaki": { price: "¥500 (~R$18)", origin: "Osaka, Japão", curiosity: "Quase toda casa em Osaka tem uma forma de takoyaki — é tão essencial quanto uma panela de arroz." },
  "gyoza": { price: "¥400 (~R$15)", origin: "Utsunomiya, Japão", curiosity: "Utsunomiya e Hamamatsu competem anualmente pelo título de 'cidade que mais consome gyoza per capita' no Japão." },

  // ============ ENTRADAS ============
  "edamame": { price: "¥300 (~R$11)", origin: "Japão (todo o país)", curiosity: "Edamame significa 'feijão no galho' e é cultivado há mais de 2.000 anos no leste asiático." },
  "hiyayakko": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "O nome 'yakko' vem dos servos samurais que cortavam tofu em cubos — o mesmo formato quadrado dos seus brasões." },
  "sunomono": { price: "¥300 (~R$11)", origin: "Japão (todo o país)", curiosity: "Sunomono usa vinagre de arroz que era originalmente um subproduto da fabricação de sake." },
  "chawanmushi": { price: "¥500 (~R$18)", origin: "Nagasaki, Japão", curiosity: "Chawanmushi é o único prato japonês tradicionalmente comido com colher — todos os outros usam hashis." },
  "tamagoyaki": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "Cada sushiman é avaliado pela qualidade do seu tamagoyaki — é considerado o teste definitivo de habilidade." },
  "tsukemono": { price: "¥150 (~R$5)", origin: "Japão (todo o país)", curiosity: "Existem mais de 600 variedades de tsukemono no Japão, usando métodos que variam de sal simples a fermentação de meses." },

  // ============ SOPAS ============
  "missoshiru": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "93% dos japoneses tomam missoshiru pelo menos uma vez por dia — é tão essencial quanto arroz." },
  "tonjiru": { price: "¥400 (~R$15)", origin: "Japão (todo o país)", curiosity: "Tonjiru era a sopa dos trabalhadores — substancial e barata, perfeita para aquecer em dias frios de trabalho pesado." },

  // ============ SOBREMESAS ============
  "mochi": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "Todo Ano Novo, pessoas morrem engasgadas com mochi no Japão — os bombeiros de Tóquio fazem campanhas anuais de segurança." },
  "dorayaki": { price: "¥200 (~R$7)", origin: "Tóquio, Japão", curiosity: "Dorayaki é o doce favorito do Doraemon, o gato-robô do futuro — isso popularizou o doce entre crianças de todo o mundo." },
  "taiyaki": { price: "¥200 (~R$7)", origin: "Tóquio, Japão", curiosity: "A forma de peixe (tai/dourada) foi escolhida porque tai é caro e raramente consumido — o taiyaki era o 'tai do povo'." },
  "matcha-parfait": { price: "¥800 (~R$29)", origin: "Kyoto, Japão", curiosity: "Uji, perto de Kyoto, produz o melhor matcha do mundo há mais de 800 anos, desde o período Kamakura." },
  "dango": { price: "¥150 (~R$5)", origin: "Japão (todo o país)", curiosity: "O emoji de dango 🍡 é um dos poucos emojis de comida japonesa no Unicode — há uma expressão: 'hana yori dango' (dango ao invés de flores)." },
  "kakigori": { price: "¥500 (~R$18)", origin: "Japão (todo o país)", curiosity: "O primeiro kakigori foi servido na era Heian (794-1185) — era um luxo reservado à nobreza, com gelo armazenado em montanhas." },
  "purin": { price: "¥300 (~R$11)", origin: "Japão (inspirado no flan ocidental)", curiosity: "O 'purin' japonês é mais firme e menos doce que o flan ocidental. É o doce #1 em vendas nos konbinis." },
  "ichigo-daifuku": { price: "¥300 (~R$11)", origin: "Tóquio, Japão", curiosity: "O ichigo daifuku foi inventado nos anos 1980 e causou uma revolução nos wagashi ao combinar fruta fresca com mochi." },

  // ============ MOLHOS & TEMPEROS ============
  "ponzu": { price: "¥300/garrafa (~R$11)", origin: "Japão (todo o país)", curiosity: "A palavra 'ponzu' vem do holandês 'pons' (ponche) — o Japão importou o conceito de molho cítrico durante o período Edo." },
  "furikake": { price: "¥200/pacote (~R$7)", origin: "Kumamoto, Japão", curiosity: "Furikake foi inventado em 1927 como suplemento de cálcio — ossos de peixe moídos para combater deficiência nutricional." },

  // ============ DONBURI & ARROZ ============
  // gyudon already defined above
  "onigiri": { price: "¥150 (~R$5)", origin: "Japão (todo o país)", curiosity: "O onigiri triangular foi popularizado pelos konbinis nos anos 1980. Antes disso, a forma variava por região." },
  "ochazuke": { price: "¥400 (~R$15)", origin: "Kyoto, Japão", curiosity: "Ochazuke era a refeição da madrugada dos gueixas em Kyoto — rápido, quente e perfeito após horas de entretenimento." },
  "omurice": { price: "¥700 (~R$25)", origin: "Tóquio/Osaka, Japão", curiosity: "O omurice do restaurante Kichi Kichi em Kyoto é famoso mundialmente — o chef corta a omelete na frente do cliente em um show." },
  "kare-raisu": { price: "¥600 (~R$22)", origin: "Yokosuka, Japão", curiosity: "O curry japonês veio da Marinha Britânica no séc. XIX e era servido nos navios da Marinha Imperial Japonesa." },

  // ============ ACOMPANHAMENTOS ============
  "kinpira-gobo": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "Kinpira leva o nome de Kintarō, herói do folclore japonês — o prato é 'forte' como ele, com raiz de bardana resistente." },
  "nikujaga": { price: "¥500 (~R$18)", origin: "Maizuru/Kure, Japão", curiosity: "Nikujaga foi criado por um chef da Marinha que tentou recriar o beef stew britânico sem ter os ingredientes ocidentais." },
  "ohitashi": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "Ohitashi demonstra o conceito 'hikidashi' — extrair o melhor sabor natural do vegetal com mínima interferência." },

  // ============ IZAKAYA & PETISCOS ============
  "kushikatsu": { price: "¥150/espeto (~R$5)", origin: "Osaka, Japão", curiosity: "Em Osaka, a regra de ouro do kushikatsu é: NUNCA mergulhe o espeto duas vezes no molho compartilhado." },
  "motsu-nikomi": { price: "¥500 (~R$18)", origin: "Nagoya, Japão", curiosity: "Motsu-nikomi ficou popular no pós-guerra quando carne era escassa — miúdos eram baratos e nutritivos." },
  "dashimaki-tamago": { price: "¥400 (~R$15)", origin: "Kyoto, Japão", curiosity: "A versão de Kyoto usa mais dashi que a de Tóquio, resultando em uma omelete tão macia que quase derrete." },

  // ============ BATCH 2 PRATOS ============
  "oshi-sushi": { price: "¥800 (~R$29)", origin: "Osaka, Japão", curiosity: "Oshi sushi (sushi prensado) é a forma original de sushi de Osaka — anterior ao nigiri de Tóquio." },
  "aburi-sushi": { price: "¥400 (~R$15)", origin: "Japão moderno", curiosity: "A técnica aburi (flambado) foi popularizada pela rede de kaiten-zushi para criar um sabor único." },
  "inari-sushi": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "Inari é o deus do arroz e das raposas — por isso o bolsinho de tofu frito (comida de raposa) leva seu nome." },
  "chirashi": { price: "¥1.200 (~R$44)", origin: "Japão (todo o país)", curiosity: "Chirashi significa 'espalhado' — era originalmente uma forma econômica de servir sushi sem a técnica do nigiri." },
  "anago-sushi": { price: "¥500 (~R$18)", origin: "Edomae, Tóquio", curiosity: "Anago (congro) é o sushi que define o estilo Edomae — sempre cozido, nunca cru, ao contrário da maioria dos peixes." },
  "ramen-tradicional": { price: "¥800 (~R$29)", origin: "Yokohama, Japão", curiosity: "O primeiro ramen do Japão foi servido em Yokohama Chinatown — uma adaptação dos noodles chineses para o paladar japonês." },
  "tsukemen": { price: "¥900 (~R$33)", origin: "Tóquio, Japão", curiosity: "Tsukemen foi inventado por Kazuo Yamagishi em 1961 no restaurante Taishoken — inicialmente era comida de funcionários." },
  "champon": { price: "¥800 (~R$29)", origin: "Nagasaki, Japão", curiosity: "Champon foi criado por um restaurante chinês em Nagasaki para alimentar estudantes chineses pobres com ingredientes baratos." },
  "mazesoba": { price: "¥800 (~R$29)", origin: "Nagoya, Japão", curiosity: "Mazesoba ('soba misturada') foi criado para quem achava ramen muito pesado — sem caldo, puro sabor concentrado." },
  "tantanmen": { price: "¥900 (~R$33)", origin: "Sichuan (China) → Japão", curiosity: "A versão japonesa é mais suave que a chinesa e ganhou caldo cremoso — na China original era seco." },
  "nabeyaki-udon": { price: "¥900 (~R$33)", origin: "Japão (todo o país)", curiosity: "É um dos poucos pratos japoneses servidos na panela de barro em que foi cozido, direto na mesa borbulhando." },
  "curry-udon": { price: "¥700 (~R$25)", origin: "Tóquio, Japão", curiosity: "Curry udon é famoso por respingar na roupa — japoneses frequentemente usam avental de papel ao comer." },
  "ankake-yakisoba": { price: "¥700 (~R$25)", origin: "Nagoya, Japão", curiosity: "A versão de Nagoya é distinta: macarrão super crocante coberto com molho espesso — textura oposta ao yakisoba normal." },
  "sara-udon": { price: "¥800 (~R$29)", origin: "Nagasaki, Japão", curiosity: "Sara udon significa 'udon no prato' e é irmão do champon — ambos nasceram em Nagasaki da culinária sino-japonesa." },
  "hiyashi-chuka": { price: "¥700 (~R$25)", origin: "Sendai, Japão", curiosity: "Hiyashi chuka é o anúncio oficial do verão — quando os restaurantes colocam a placa, o verão chegou." },
  "wanko-soba": { price: "¥3.000 (~R$110)", origin: "Morioka, Iwate", curiosity: "No desafio wanko soba, garçons enchiam sua tigela infinitamente até você tampar — o recorde é mais de 500 tigelas." },
  "oden": { price: "¥500 (~R$18)", origin: "Japão (todo o país)", curiosity: "Cada região do Japão tem seu oden distinto — em Nagoya usam miso, em Shizuoka caldo escuro, em Okinawa pé de porco." },
  "chanko-nabe": { price: "¥1.500 (~R$55)", origin: "Ryōgoku, Tóquio", curiosity: "Chanko nabe é a dieta dos lutadores de sumô — eles comem até 10.000 calorias por dia neste prato." },
  "kimchi-nabe": { price: "¥800 (~R$29)", origin: "Japão (influência coreana)", curiosity: "Kimchi nabe se tornou popular no Japão nos anos 1990 com o boom da culinária coreana — é mais suave que o jjigae coreano." },
  "nabe-yose": { price: "¥1.200 (~R$44)", origin: "Japão (todo o país)", curiosity: "Yose nabe é o 'hot pot da amizade' — cada pessoa traz um ingrediente, criando uma combinação única a cada vez." },
  "ishikari-nabe": { price: "¥1.500 (~R$55)", origin: "Hokkaido, Japão", curiosity: "Leva o nome do rio Ishikari em Hokkaido, onde salmões selvagens sobem para desovar — o ingrediente principal do prato." },
  "mizutaki": { price: "¥2.000 (~R$73)", origin: "Fukuoka (Hakata), Japão", curiosity: "Mizutaki de Hakata usa apenas água e frango — o caldo se torna branco e rico apenas com a cocção longa do frango." },
  "motsunabe": { price: "¥1.000 (~R$37)", origin: "Fukuoka, Japão", curiosity: "Motsunabe ficou popular no pós-guerra como 'comida dos trabalhadores' — era barato e cheio de colágeno." },
  "chicken-nanban": { price: "¥700 (~R$25)", origin: "Miyazaki, Japão", curiosity: "Chicken nanban combina influência portuguesa (nanban=sul) com tártaro ocidental — fusão perfeita de três culturas." },
  "nikujaga-yoshoku": { price: "¥600 (~R$22)", origin: "Base naval de Maizuru", curiosity: "Nikujaga nasceu da tentativa de recriar beef stew inglês — o almirante Tōgō pediu ao chef que replicasse um prato que comeu na Inglaterra." },
  "korokke": { price: "¥200 (~R$7)", origin: "Japão (da croquete francesa)", curiosity: "O korokke japonês é descendente direto da croquete francesa, mas evoluiu para ter mais batata e menos béchamel." },
  "hayashi-rice": { price: "¥700 (~R$25)", origin: "Tóquio, Japão", curiosity: "O nome pode vir de 'hashed beef rice' ou do Dr. Hayashi que o servia a pacientes convalescentes." },
  "shishamo": { price: "¥400 (~R$15)", origin: "Hokkaido, Japão", curiosity: "Shishamo com ovas é tão popular que 90% do consumido no Japão é na verdade capelin importado — o real é raro e caro." },
  "tebasaki": { price: "¥500 (~R$18)", origin: "Nagoya, Japão", curiosity: "A rede Fūraibō de Nagoya popularizou as asinhas temperadas nos anos 1960 — são tão icônicas quanto o KFC." },
  // kushikatsu already defined above
  "nankotsu-karaage": { price: "¥400 (~R$15)", origin: "Japão (todo o país)", curiosity: "Cartilagem crocante (nankotsu) é apreciada pela textura única — crocante como chips, mas de origem animal." },
  "menchi-katsu": { price: "¥300 (~R$11)", origin: "Tóquio, Japão", curiosity: "Menchi vem de 'mince' (inglês) — carne moída empanada. É o snack favorito das shōtengai (ruas de compras)." },
  "negima-yakitori": { price: "¥150 (~R$5)", origin: "Tóquio, Japão", curiosity: "Originalmente negima usava atum (maguro) e negi — a versão com frango é uma adaptação mais acessível." },
  "tsukune-yakitori": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "Tsukune de boa qualidade usa cartilagem moída junto com a carne para dar textura — sinal de um izakaya autêntico." },
  "yakitori-kawa": { price: "¥100 (~R$4)", origin: "Fukuoka, Japão", curiosity: "Pele de frango grelhada é tão popular em Fukuoka que há barracas especializadas só neste espetinho." },
  "eihire": { price: "¥500 (~R$18)", origin: "Japão (todo o país)", curiosity: "As nadadeiras de arraia secas e grelhadas são petisco de sake — quanto mais secas e tostadas, melhor o sabor." },
  "karaage-kun": { price: "¥200 (~R$7)", origin: "Japão (Lawson konbini)", curiosity: "Karaage-kun é exclusivo da rede Lawson e vende mais de 300 milhões de unidades por ano." },
  "chikuwa-isobe": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "Isobe-age leva alga nori na massa — o nome vem da praia de Isobe, famosa por suas algas." },
  // takoyaki already defined above

  // ============ SOBREMESAS ============
  "sakura-mochi": { price: "¥200 (~R$7)", origin: "Tóquio, Japão", curiosity: "A folha de cerejeira salgada que envolve o mochi PODE ser comida — e o contraste salgado-doce é intencional." },
  "ohagi": { price: "¥200 (~R$7)", origin: "Japão (todo o país)", curiosity: "Ohagi e botamochi são o mesmo doce com nomes diferentes — ohagi é no outono (hagi=arbusto), botamochi na primavera (botan=peônia)." },
  "yokan": { price: "¥300 (~R$11)", origin: "China → Japão", curiosity: "Yokan dura meses sem refrigeração — por isso é estocado como comida de emergência no Japão." },
  "warabi-mochi": { price: "¥400 (~R$15)", origin: "Nara, Japão", curiosity: "Warabi mochi autêntico usa amido de samambaia (warabi), que é extremamente raro e caro — a maioria usa substitutos." },
  "anmitsu": { price: "¥500 (~R$18)", origin: "Tóquio (Ginza)", curiosity: "Anmitsu foi criado em 1930 na confeitaria Wakamatsu de Ginza, combinando agar-agar com anko e frutas." },
  "castella": { price: "¥1.000 (~R$37)", origin: "Nagasaki, Japão", curiosity: "Castella vem do bolo português 'pão de Castela' trazido por missionários no séc. XVI — o Japão aperfeiçoou a receita." },
  "matcha-cheesecake": { price: "¥500 (~R$18)", origin: "Japão moderno", curiosity: "O cheesecake japonês é famoso por ser leve e jiggly — a versão com matcha adiciona amargor elegante." },
  "nama-chocolate": { price: "¥800 (~R$29)", origin: "Sapporo, Hokkaido", curiosity: "Royce' de Hokkaido popularizou o nama chocolate nos anos 1990 — 'nama' significa fresco/cru, referindo-se ao creme." },
  "daigaku-imo": { price: "¥300 (~R$11)", origin: "Tóquio, Japão", curiosity: "O nome significa 'batata-doce da universidade' — era o snack barato que estudantes compravam perto dos campi nos anos 1920." },

  // ============ BATCH 3 PRATOS ============
  "negitoro-maki": { price: "¥500 (~R$18)", origin: "Tóquio, Japão", curiosity: "Negitoro usa a gordura raspada da espinha do atum (nakaochi) — antes era descartada pelos sushimans." },
  "kohada-sushi": { price: "¥300 (~R$11)", origin: "Edomae, Tóquio", curiosity: "Kohada é o sushi mais difícil de preparar — o equilíbrio da cura em vinagre define a habilidade do sushiman." },
  "tobiuo-sushi": { price: "¥400 (~R$15)", origin: "Yakushima, Japão", curiosity: "Peixes-voadores podem planar por até 400 metros acima da água — suas ovas (tobiko) são usadas em sushi." },
  "ebi-nigiri": { price: "¥300 (~R$11)", origin: "Tóquio, Japão", curiosity: "O camarão do nigiri é escalfado e aberto em borboleta — técnica que requer prática para manter a forma perfeita." },
  "ikura-gunkan": { price: "¥400 (~R$15)", origin: "Hokkaido, Japão", curiosity: "Ikura vem do russo 'ikra' (caviar) — o gunkan-maki foi inventado em 1941 especificamente para servir ikura." },
  "kanpyo-maki": { price: "¥200 (~R$7)", origin: "Tochigi, Japão", curiosity: "Kanpyō é a cabaça seca descascada em tiras — Tochigi produz 98% de todo o kanpyō do Japão." },
  "battera-sushi": { price: "¥600 (~R$22)", origin: "Osaka, Japão", curiosity: "O nome 'battera' vem do português 'bateira' (barco) — a forma do sushi prensado lembrava um barquinho." },

  // ============ BATCH 4 PRATOS ============
  "temari-sushi": { price: "¥300 (~R$11)", origin: "Japão (todo o país)", curiosity: "Temari era uma bola de tecido colorida dada a meninas no Ano Novo — o sushi bolinha imita suas cores vibrantes." },
  "saba-sushi": { price: "¥800 (~R$29)", origin: "Kyoto, Japão", curiosity: "Saba-zushi foi criado em Kyoto, longe do mar — a cura em sal e vinagre era necessária para conservar o peixe durante o transporte." },
  "tekka-maki": { price: "¥300 (~R$11)", origin: "Tóquio, Japão", curiosity: "'Tekka' significa ferro quente — o atum vermelho lembra ferro em brasa. Também era comido em casas de jogo (tekka-ba)." },
  "hamburg-steak": { price: "¥800 (~R$29)", origin: "Japão (yoshoku ocidental)", curiosity: "Hamburg steak japonês não é hambúrguer — é servido no prato com molho demi-glace, mais próximo de um bife Salisbury." },
  "ebi-fry": { price: "¥800 (~R$29)", origin: "Tóquio, Japão", curiosity: "Nagoya chama ebi fry de 'ebi furya' (com sotaque local) e é obsecada — há até shinkansen temático de ebi fry." },
  "mabo-dofu": { price: "¥600 (~R$22)", origin: "Sichuan (China) → Japão", curiosity: "Chen Kenmin, pai da culinária chinesa no Japão, adaptou o mapo tofu para o paladar japonês — menos pimenta, mais umami." },
  "onigirazu": { price: "¥300 (~R$11)", origin: "Japão moderno", curiosity: "Onigirazu viralizou em 2014 após aparecer em um mangá de culinária dos anos 1990 — 25 anos depois de ser criado." },
  "raindrop-cake": { price: "¥500 (~R$18)", origin: "Yamanashi, Japão", curiosity: "O mizu shingen mochi só pode ser comido em 30 minutos — depois disso, derrete e desaparece completamente." },
  "taco-rice": { price: "¥600 (~R$22)", origin: "Okinawa, Japão", curiosity: "Taco rice foi inventado em 1984 em Kin Town, Okinawa, perto de uma base militar americana — fusão de taco mexicano com arroz japonês." },
  "wafu-pasta": { price: "¥700 (~R$25)", origin: "Japão moderno", curiosity: "Pasta wafu (estilo japonês) com mentaiko foi inventada em Fukuoka — combina espaguete italiano com ovas de bacalhau japonesas." },
};

export function getDishExtra(id: string): DishExtra | undefined {
  return dishExtras[id];
}
