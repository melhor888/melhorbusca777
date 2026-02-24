export interface ChefTip {
  glass: string;
  serve: string;
  tip: string;
}

export function getChefTip(id: string): ChefTip | undefined {
  return chefTips[id];
}

export const chefTips: Record<string, ChefTip> = {
  "tacos-al-pastor": {
    glass: "Prato de barro ou bandeja rústica",
    serve: "Sirva com limão, cebola, coentro e salsa verde. As tortillas devem ser duplas.",
    tip: "O segredo é o achiote na marinada e o abacaxi grelhado por cima. Use tortillas pequenas (12cm).",
  },
  "tacos-carnitas": {
    glass: "Prato de barro com tortillas ao lado",
    serve: "Sirva com salsa verde, cebola, coentro e limão.",
    tip: "A carne deve fritar na própria gordura até dourar — o contraste crocante/macio é fundamental.",
  },
  "tacos-birria": {
    glass: "Prato com copo de consomé ao lado",
    serve: "Mergulhe o taco no consomé antes de comer — é a experiência completa.",
    tip: "O consomé é tão importante quanto a carne. Guarde o caldo e sirva quente.",
  },
  "tacos-carne-asada": {
    glass: "Prato rústico ou bandeja",
    serve: "A carne deve descansar 5 min antes de cortar. Tortillas na chapa até levantarem bolhas.",
    tip: "Marine com limão por no máximo 30 min — ácido demais 'cozinha' a carne e muda a textura.",
  },
  "tacos-pollo": {
    glass: "Prato fundo com salsa ao lado",
    serve: "Desfie o frango em fios médios para manter suculência.",
    tip: "O chipotle dá o sabor defumado — comece com 1 chile e ajuste. Muito chipotle domina tudo.",
  },
  "tacos-pescado": {
    glass: "Cesta forrada com papel ou prato",
    serve: "Sirva imediatamente — a crocância é efêmera.",
    tip: "A massa de cerveja deve estar gelada e o óleo bem quente (180°C). Peixe firme como robalo funciona melhor.",
  },
  "tacos-chorizo": {
    glass: "Prato simples com limões",
    serve: "Chorizo deve estar bem frito, quase crocante.",
    tip: "Retire da tripa para desfazer na frigideira. Chorizo de qualidade não precisa de óleo — tem gordura suficiente.",
  },
  "tacos-lengua": {
    glass: "Prato rústico",
    serve: "Corte a língua em cubos pequenos e grelhe na chapa.",
    tip: "Cozinhe até poder furar facilmente com garfo. A pele sai fácil quando quente.",
  },
  "quesadillas": {
    glass: "Prato ou tábua de madeira",
    serve: "O queijo deve estar completamente derretido e puxando fios.",
    tip: "Queijo Oaxaca é o único que dá o 'fio' perfeito. Na Cidade do México, quesadilla pode não ter queijo!",
  },
  "enchiladas-rojas": {
    glass: "Travessa de barro ou prato fundo",
    serve: "Cubra generosamente com creme, queijo e cebola. Sirva quente.",
    tip: "Passe as tortillas rapidamente no óleo antes de mergulhar no molho — isso evita que quebrem.",
  },
  "chilaquiles": {
    glass: "Prato fundo com ovo por cima",
    serve: "Os chips devem ficar al dente — não totalmente moles. Sirva imediatamente.",
    tip: "Use tortillas do dia anterior — ficam mais secas e fritam melhor.",
  },
  "tamales": {
    glass: "Servido na própria folha de milho",
    serve: "Abra a folha na mesa e coma diretamente. Acompanhe com atole.",
    tip: "A masa deve flutuar na água quando pronta — se afundar, bata mais a banha.",
  },
  "sopes": {
    glass: "Prato de barro",
    serve: "Monte na hora — a base crocante é importante.",
    tip: "Levante as bordas enquanto a masa ainda está quente — esfria rápido e quebra.",
  },
  "gorditas": {
    glass: "Prato simples",
    serve: "Abra com cuidado para não quebrar e recheie generosamente.",
    tip: "A massa deve ser mais grossa que tortilla normal — por isso 'gordita'.",
  },
  "elotes": {
    glass: "Servido no espeto ou em copo (esquites)",
    serve: "Muito queijo cotija e chile. O limão é essencial.",
    tip: "Grelhe na brasa para sabor defumado. Maionese japonesa (Kewpie) é upgrade secreto.",
  },
  "tostadas": {
    glass: "Prato — cuidado, desmorona!",
    serve: "Monte alto e coma sobre o prato. Vai fazer bagunça — faz parte.",
    tip: "A tostada deve ser completamente plana e crocante. Tortillas velhas fritam melhor.",
  },
  "pozole-rojo": {
    glass: "Tigela grande de barro",
    serve: "Acompanhamentos na mesa: alface, rabanete, orégano, tostadas, limão e chile.",
    tip: "O milho hominy deve estar aberto como flor — sinal de que está bem cozido.",
  },
  "sopa-tortilla": {
    glass: "Tigela de barro com toppings",
    serve: "As tiras de tortilla devem ser adicionadas na hora de servir.",
    tip: "Asse os tomates na chapa até carbonizar — isso dá profundidade ao caldo.",
  },
  "menudo": {
    glass: "Tigela muito grande",
    serve: "Orégano, cebola, limão e chile — a mesa deve parecer um bufê de condimentos.",
    tip: "Lave o mondongo muitas vezes. O cozimento longo elimina qualquer cheiro.",
  },
  "caldo-de-pollo": {
    glass: "Tigela grande com arroz ao lado",
    serve: "Sirva o arroz separado — cada pessoa coloca a quantidade desejada.",
    tip: "Não tire a espuma do caldo — ela contém sabor. Use fogo baixo para caldo límpido.",
  },
  "mole-poblano": {
    glass: "Prato de barro com arroz",
    serve: "O mole deve cobrir a carne generosamente. Polvilhe gergelim por cima.",
    tip: "São 30+ ingredientes e cada um deve ser preparado separadamente. Não tem atalho — é trabalho de amor.",
  },
  "cochinita-pibil": {
    glass: "Prato de barro ou tortilla",
    serve: "Sirva com cebola roxa curtida em vinagre e habanero.",
    tip: "Use pasta de achiote real (não pó). A folha de bananeira dá aroma único — papel alumínio não substitui.",
  },
  "chiles-rellenos": {
    glass: "Prato com molho de tomate",
    serve: "A capa de ovo deve ser leve e arejada. Sirva com molho quente.",
    tip: "Bata as claras em neve firme separadas — isso faz a capa ficar fofa e não pesada.",
  },
  "barbacoa": {
    glass: "Prato de barro com consomé",
    serve: "Sirva com tortillas quentes e todos os condimentos.",
    tip: "O cozimento lento é fundamental — mínimo 4 horas. A carne deve desmanchar sozinha.",
  },
  "carne-en-su-jugo": {
    glass: "Tigela funda",
    serve: "O bacon deve ficar crocante no topo — contraste de texturas.",
    tip: "Sele a carne em fogo muito alto para manter os sucos dentro.",
  },
  "guacamole": {
    glass: "Molcajete (pilão de pedra vulcânica)",
    serve: "Feito na hora, na frente do cliente. Com totopos frescos.",
    tip: "NUNCA use liquidificador — o guacamole deve ter pedaços. Abacate maduro mas firme.",
  },
  "salsa-roja": {
    glass: "Molcajete ou tigela de barro",
    serve: "Presente em toda mesa mexicana — tão essencial quanto sal.",
    tip: "Asse os tomates até quase queimar — o sabor defumado faz toda a diferença.",
  },
  "salsa-verde": {
    glass: "Tigela de barro",
    serve: "Versátil: use em enchiladas, chilaquiles, tacos ou como dip.",
    tip: "Tomatillos devem ser cozidos inteiros com casca — a casca dá sabor ácido.",
  },
  "pico-de-gallo": {
    glass: "Tigela ou direto no prato",
    serve: "Fresco e crocante — prepare no máximo 30 min antes de servir.",
    tip: "Todos os ingredientes devem estar no mesmo tamanho — uniformidade é chave.",
  },
  "mole-negro": {
    glass: "Prato de barro",
    serve: "Sirva sobre peru ou frango com arroz. Polvilhe gergelim.",
    tip: "Queimar as sementes de chile é o que dá a cor negra — parece errado mas é a técnica correta.",
  },
  "churros": {
    glass: "Prato com papel absorvente",
    serve: "Quentes, crocantes e mergulhados em chocolate espesso.",
    tip: "A massa deve estar espessa — se a churrera for difícil de apertar, está no ponto certo.",
  },
  "flan-mexicano": {
    glass: "Prato de cerâmica com caramelo escorrendo",
    serve: "Desenforme gelado. O caramelo deve escorrer como molho.",
    tip: "Banho-maria é obrigatório. Se o flan tiver furinhos, a temperatura estava muito alta.",
  },
  "tres-leches": {
    glass: "Prato fundo — o bolo solta líquido",
    serve: "Deve estar encharcado mas não desmoronando. Chantilly generoso.",
    tip: "O segredo é o bolo esponja bem aerado — absorve os 3 leites sem desmanchar.",
  },
  "arroz-con-leche": {
    glass: "Tigela com canela polvilhada",
    serve: "Pode ser quente ou frio — ambas versões são deliciosas.",
    tip: "Mexa constantemente para o arroz não grudar. O leite condensado vai no final.",
  },
  "agua-horchata": {
    glass: "Copo grande com gelo",
    serve: "Bem gelada, cremosa e doce. Perfeita com comida picante.",
    tip: "Deixe de molho 8h — o arroz libera amido que dá a cremosidade.",
  },
  "agua-jamaica": {
    glass: "Copo grande com gelo",
    serve: "Vermelha rubi e refrescante. Ajuste açúcar a gosto.",
    tip: "Não cozinhe demais as flores — 10 min basta. Excesso de cozimento amarga.",
  },
  "chocolate-mexicano": {
    glass: "Caneca de barro (jarro)",
    serve: "Espumoso e quente. Acompanhe com pan dulce.",
    tip: "O molinillo (batedor de madeira) cria espuma impossível de replicar com batedor comum.",
  },
  "ceviche-mexicano": {
    glass: "Copo grande ou prato fundo",
    serve: "Com tostadas e abacate. O limão 'cozinha' o peixe.",
    tip: "30 min no limão é suficiente — mais que isso e o peixe fica borrachudo.",
  },
  "camarones-diabla": {
    glass: "Prato fundo com arroz",
    serve: "Tenha limão e tortillas para amenizar a picância.",
    tip: "Não cozinhe os camarões demais — 2-3 min por lado é suficiente.",
  },
  "arroz-rojo": {
    glass: "Prato ou travessa",
    serve: "Cada grão deve estar separado. Nunca mexer durante o cozimento.",
    tip: "Frite o arroz seco até ficar translúcido antes de adicionar líquido — segredo do arroz soltinho.",
  },
  "frijoles-charros": {
    glass: "Tigela de barro",
    serve: "Caldoso, com pedaços de bacon e chorizo visíveis.",
    tip: "A cerveja adiciona amargor sutil — use cerveja clara mexicana.",
  },
  "frijoles-refritos": {
    glass: "Prato com queijo esfarelado",
    serve: "Cremoso e brilhante. Deve soltar da panela.",
    tip: "Banha de porco é o ingrediente secreto — dá sabor impossível com óleo vegetal.",
  },
  "huevos-rancheros": {
    glass: "Prato de barro com tudo junto",
    serve: "Ovo com gema mole — a gema mistura com a salsa.",
    tip: "Frite a tortilla levemente para não ficar borrachenta com a salsa.",
  },
  "huevos-divorciados": {
    glass: "Prato dividido ao meio",
    serve: "A separação visual é importante — salsa verde de um lado, roja do outro.",
    tip: "Use o feijão como 'muro' entre os dois ovos divorciados.",
  },
  "tamales-dulces": {
    glass: "Na própria folha de milho",
    serve: "Com café ou atole quente.",
    tip: "O corante rosa é tradição — sem ele, não é tamal dulce de verdade.",
  },
  "empanadas-mexicanas": {
    glass: "Prato com salsa ao lado",
    serve: "Quentes e crocantes. O recheio deve estar bem temperado.",
    tip: "Se fritar, o óleo deve estar a 170°C. Se assar, pincele com ovo para dourar.",
  },

  // ============ TORTILLAS & BASES ============
  "tortilla-milho": {
    glass: "Cesto com pano (tortillero)",
    serve: "Quentes, diretamente da chapa. Devem inflar ao cozinhar.",
    tip: "A proporção é 2:1¼ (masa:água). Se a masa rachar nas bordas, adicione mais água.",
  },
  "tortilla-trigo": {
    glass: "Tortillero ou pano limpo",
    serve: "Quentes e flexíveis — devem dobrar sem quebrar.",
    tip: "A banha faz toda a diferença na textura. Descanse a massa 30 min para o glúten relaxar.",
  },
  "gorditas-base": {
    glass: "Prato simples",
    serve: "Abra com cuidado e recheie generosamente.",
    tip: "A massa deve ser mais grossa que tortilla — 2cm. Abra enquanto quente.",
  },
  "sopes-base": {
    glass: "Prato de barro",
    serve: "Monte na hora para manter a crocância.",
    tip: "Levante as bordas imediatamente após tirar da chapa — esfria rápido.",
  },
  "tlacoyos-base": {
    glass: "Prato com salsa",
    serve: "Cubra com nopales e queijo fresco.",
    tip: "O recheio vai dentro da masa antes de cozinhar — não é cobertura.",
  },
  "tostadas-base": {
    glass: "Prato ou cesta",
    serve: "Completamente planas e crocantes.",
    tip: "Tortillas velhas fritam melhor. O óleo deve estar a 180°C.",
  },

  // ============ PRATOS TRADICIONAIS ============
  "enchiladas-verdes": {
    glass: "Travessa de barro",
    serve: "Cubra generosamente com creme e queijo.",
    tip: "Tomatillos cozidos ficam menos ácidos. Para mais frescor, use crus.",
  },
  "burritos": {
    glass: "Embrulhado em papel alumínio",
    serve: "Deve ser grande o suficiente para ser uma refeição completa.",
    tip: "Aqueça a tortilla de farinha na chapa para ficar flexível — se não, vai rasgar.",
  },
  "chimichangas": {
    glass: "Prato com guacamole e creme",
    serve: "Crocante por fora, suculento por dentro.",
    tip: "Prenda bem com palitos antes de fritar — se abrir, o recheio escapa no óleo.",
  },
  "quesadillas-trad": {
    glass: "Prato ou tábua",
    serve: "Queijo deve estar completamente derretido.",
    tip: "Flor de abóbora refogada com epazote é o recheio mais tradicional da CDMX.",
  },
  "fajitas": {
    glass: "Chapa de ferro fumegante",
    serve: "A apresentação fumegante é essencial — aqueça a chapa antes.",
    tip: "Corte sempre contra as fibras da carne para máxima maciez.",
  },
  "chilaquiles-rojos": {
    glass: "Prato fundo com ovo",
    serve: "Al dente — não totalmente moles. Sirva imediatamente.",
    tip: "Use totopos grossos que aguentem a salsa sem desmanchar.",
  },
  "pozole-blanco": {
    glass: "Tigela grande",
    serve: "Com todos os acompanhamentos na mesa.",
    tip: "Sem chile — o sabor vem da carne e do hominy. Perfeito para crianças.",
  },
  "enchiladas-suizas": {
    glass: "Travessa refratária gratinada",
    serve: "Quentes do forno com queijo borbulhando.",
    tip: "O creme de leite suaviza a acidez do tomatillo — esse é o 'suíço' do nome.",
  },
  "tamales-verdes": {
    glass: "Na própria folha de milho",
    serve: "Acompanhe com atole quente.",
    tip: "A masa deve flutuar na água. Bata mais banha se afundar.",
  },
  "enfrijoladas-trad": {
    glass: "Prato fundo",
    serve: "O molho de feijão deve ser sedoso e quente.",
    tip: "Use feijão negro com epazote — o sabor é insubstituível.",
  },
  "mole-amarillo": {
    glass: "Prato de barro",
    serve: "Espessado com masa — textura aveludada.",
    tip: "O chilcostle é essencial e difícil de encontrar fora de Oaxaca — chile ancho é substituto.",
  },

  // ============ QUEIJOS & RECHEIOS ============
  "queijo-oaxaca": {
    glass: "Panela de barro quente",
    serve: "O queijo deve puxar fios longos quando servido.",
    tip: "Queijo Oaxaca é enrolado em novelo como barbante — desfie antes de usar.",
  },
  "queso-fundido": {
    glass: "Panela de barro borbulhando",
    serve: "Sirva imediatamente — endurece rápido.",
    tip: "Use queijo Chihuahua para derreter perfeito. Oaxaca também funciona.",
  },
  "queijo-cotija": {
    glass: "Esfarelado sobre pratos",
    serve: "Não derrete — use esfarelado como parmesão.",
    tip: "O verdadeiro Cotija vem de Michoacán e tem denominação de origem.",
  },
  "recheio-picadillo": {
    glass: "Tigela para recheio",
    serve: "Versátil — use em chiles, empanadas, tacos.",
    tip: "Passas e azeitonas são o toque especial que diferencia o picadillo mexicano.",
  },
  "recheio-tinga": {
    glass: "Tigela para recheio",
    serve: "Desfie o frango em fios médios.",
    tip: "O chipotle em adobo já tem molho — use o molho da lata para mais sabor.",
  },
  "recheio-rajas": {
    glass: "Tigela cremosa",
    serve: "Cremoso e com tiras de poblano visíveis.",
    tip: "Asse o poblano até a pele estalar e ficar preta — mas não queime a carne.",
  },
  "recheio-vegano": {
    glass: "Tigela",
    serve: "Colorido e fresco — monte na hora.",
    tip: "Grelhe os nopales até perder TODA a baba — paciência aqui é fundamental.",
  },

  // ============ CARNES MEXICANAS EXTRAS ============
  "carnitas-michoacan": {
    glass: "Prato de barro ou bandeja",
    serve: "Misture cortes macios e crocantes para variedade de texturas.",
    tip: "A panela de cobre de Michoacán conduz calor uniformemente — use panela grossa.",
  },
  "pollo-asado-mex": {
    glass: "Tábua de corte",
    serve: "A pele deve estar crocante e vermelha da marinada.",
    tip: "Marine por no mínimo 12h — o achiote precisa de tempo para penetrar.",
  },
  "bistec-ranchero": {
    glass: "Prato com tortillas",
    serve: "O molho ranchero deve cobrir a carne.",
    tip: "Sele a carne primeiro em fogo alto — depois cozinhe no molho.",
  },
  "arrachera": {
    glass: "Tábua fumegante",
    serve: "Corte contra as fibras em tiras finas.",
    tip: "A cerveja na marinada amacia as fibras. Não passe do ponto — deve ficar ao ponto.",
  },
  "cecina-yecapixtla": {
    glass: "Prato com guacamole",
    serve: "Rápida na brasa — 2-3 min por lado.",
    tip: "Cecina já é salgada — não adicione sal. O guacamole equilibra.",
  },
  "tasajo-oaxaca": {
    glass: "Prato com nopales",
    serve: "Carne fina e rápida de grelhar.",
    tip: "Compre tasajo nos mercados de Oaxaca — a qualidade varia muito.",
  },
  "suadero-guisado": {
    glass: "Prato com tortillas",
    serve: "Frite até ficar crocante por fora.",
    tip: "Suadero é uma carne única — entre costela e pele. Textura inimitável.",
  },

  // ============ CULTURA & ESCOLA ============
  "historia-taco": {
    glass: "Leitura — não é receita",
    serve: "Acompanhe com tacos de verdade enquanto lê.",
    tip: "A história do taco é a história do México — cada região conta sua versão.",
  },
  "cultura-pimenta": {
    glass: "Leitura educativa",
    serve: "Tenha as pimentas em mãos para comparar.",
    tip: "Comece com poblano (suave) e vá subindo até habanero (extremo) gradualmente.",
  },
  "historia-mole": {
    glass: "Leitura cultural",
    serve: "Experimente um mole enquanto lê sobre sua história.",
    tip: "Cada mole conta uma história de 500 anos de fusão cultural.",
  },
  "dia-muertos": {
    glass: "Leitura cultural",
    serve: "Monte uma ofrenda com as comidas mencionadas.",
    tip: "A ofrenda deve incluir a comida favorita do ente querido — é pessoal.",
  },
  "regioes-gastronomicas": {
    glass: "Leitura educativa",
    serve: "Use como guia para planejar viagens gastronômicas.",
    tip: "Cada estado merece pelo menos uma semana de exploração culinária.",
  },
  "festivais-mexicanos": {
    glass: "Leitura informativa",
    serve: "Planeje viagens em torno dos festivais.",
    tip: "A Guelaguetza em julho é a experiência cultural mais completa.",
  },
  "curso-basico": {
    glass: "Curso completo — 6 módulos",
    serve: "Siga a ordem dos módulos para melhor aprendizado.",
    tip: "Domine tortillas e feijão antes de tudo — são a base de 80% da culinária mexicana.",
  },
  "curso-intermediario": {
    glass: "Curso completo — 6 módulos",
    serve: "Pratique cada módulo 2-3 vezes antes de avançar.",
    tip: "O tamale é o termômetro do cozinheiro mexicano — se fizer tamales bons, está pronto.",
  },
  "curso-avancado": {
    glass: "Masterclass — 6 módulos",
    serve: "Reserve dias inteiros para módulos complexos como mole negro.",
    tip: "Mole negro leva 3 dias — não existe atalho. A paciência é o ingrediente secreto.",
  },
  "tecnica-tortilla-pro": {
    glass: "Aula prática intensiva",
    serve: "Pratique com masa harina antes de usar nixtamal fresco.",
    tip: "A tortillera é investimento essencial. A tortilla perfeita infla na terceira virada.",
  },
  "tecnica-molhos-salsas": {
    glass: "Aula prática — 10 salsas",
    serve: "Faça todas as salsas numa tarde para comparar sabores.",
    tip: "O molcajete dá textura rústica impossível no liquidificador — vale o investimento.",
  },
  "uso-pimentas-pro": {
    glass: "Aula técnica — 15 chiles",
    serve: "Tenha todos os chiles em mãos para comparar aroma, cor e sabor.",
    tip: "Nunca queime os chiles — torre levemente por 10-15 segundos. Queimado = amargo.",
  },
  "fermentacoes-mex": {
    glass: "Aula prática — 3 a 7 dias",
    serve: "Comece com tepache — é o mais fácil e perdoador.",
    tip: "Temperatura de 25-30°C é ideal. Frio demais = fermentação lenta. Quente demais = vinagre.",
  },
  "processos-tradicionais": {
    glass: "Aula teórico-prática",
    serve: "Procure utensílios artesanais autênticos em mercados mexicanos.",
    tip: "Um molcajete novo precisa ser 'curado' — moa arroz até não sair mais pó.",
  },
  "conservacao-alimentos": {
    glass: "Aula técnica",
    serve: "Higiene é fundamental — esterilize todos os recipientes.",
    tip: "Chiles secos duram anos se armazenados em local seco e escuro.",
  },
  "producao-artesanal": {
    glass: "Workshop de produção",
    serve: "Comece com lotes pequenos para testar receitas antes de escalar.",
    tip: "Embalagem profissional aumenta o valor percebido em 40% — invista nela.",
  },

  // ============ MOLHOS EXTRAS ============
  "molho-apimentado-habanero": {
    glass: "Frasco pequeno — use com cautela",
    serve: "Gotas — não colheradas. É MUITO picante.",
    tip: "Use luvas ao manusear habanero. A capsaicina não sai com água — use leite.",
  },
  "molho-suave-aguacate": {
    glass: "Tigela ou squeeze bottle",
    serve: "Cremoso e suave — perfeito para crianças.",
    tip: "Adicione creme ácido para estabilizar a cor verde por mais tempo.",
  },
  "molho-defumado-chipotle": {
    glass: "Squeeze bottle ou pote",
    serve: "Como dipping sauce ou drizzle.",
    tip: "Uma lata de chipotle rende muito — congele o restante em porções.",
  },

  // ============ SOPAS EXTRAS ============
  "caldo-camaron": {
    glass: "Tigela funda",
    serve: "Os camarões devem ficar rosados e firmes — não cozinhe demais.",
    tip: "O caldo das cascas é o segredo — tem mais sabor que os camarões.",
  },
  "caldo-tlalpeno": {
    glass: "Tigela com toppings",
    serve: "Queijo panela em cubos no caldo quente.",
    tip: "O grão de bico deve estar bem cozido — use de lata se necessário.",
  },

  // ============ SOBREMESAS EXTRAS ============
  "helado-nieve": {
    glass: "Cone ou copo",
    serve: "Artesanal e cremosa — sem cristais de gelo.",
    tip: "Mexa a cada 30 min durante o congelamento para textura cremosa.",
  },
  "mazapan": {
    glass: "Embalagem individual",
    serve: "Desmancha na boca — delicado ao manusear.",
    tip: "O amendoim deve virar pó fino — grosso demais não gruda.",
  },
  "pastel-tres-leches": {
    glass: "Prato fundo — solta líquido",
    serve: "Encharcado mas sem desmoronar. Chantilly generoso.",
    tip: "Fure bastante com garfo para absorver os 3 leites uniformemente.",
  },
  "alegrias": {
    glass: "Embalagem ou prato",
    serve: "Barrinhas crocantes e doces.",
    tip: "O mel deve estar no ponto de fio — quente demais queima o amaranto.",
  },

  // ============ BATCH 5 EXTRAS ============
  "tacos-camarao": {
    glass: "Cesta ou prato",
    serve: "Sirva imediatamente — a crocância é efêmera.",
    tip: "Massa de cerveja gelada + óleo quente = empanado perfeito.",
  },
  "tacos-veganos": {
    glass: "Prato ou bandeja",
    serve: "Colorido e fresco — a couve-flor deve estar dourada.",
    tip: "Asse em temperatura alta (220°C) para caramelizar sem amolecer.",
  },
  "tacos-gourmet": {
    glass: "Prato de apresentação",
    serve: "Micro-greens e glace de molho para apresentação premium.",
    tip: "4h de cozimento lento é inegociável — não há atalho para costela perfeita.",
  },
  "pupusas-mex": {
    glass: "Prato simples",
    serve: "Quentes da chapa com feijão e salsa.",
    tip: "Pincele com banha para brilho e sabor extra.",
  },
  "chalupas": {
    glass: "Prato",
    serve: "Pequenas e crocantes — finger food perfeito.",
    tip: "Discos pequenos — menores que sopes. Devem ser planos.",
  },
  "michelada": {
    glass: "Copo grande com borda de sal e tajín",
    serve: "Gelada com bastante gelo.",
    tip: "A qualidade do Clamato faz toda diferença — Clamato mexicano é melhor.",
  },
  "margarita": {
    glass: "Taça coupe ou rocks com borda de sal",
    serve: "Agite bem no shaker com gelo.",
    tip: "Use tequila 100% agave — mixtos comprometem o sabor.",
  },
  "pulque": {
    glass: "Copo ou jícara",
    serve: "Fresco e levemente ácido.",
    tip: "Pulque não pode ser industrializado — só existe artesanal e fresco.",
  },
  "camarones-coconut": {
    glass: "Prato com salsa de manga",
    serve: "A salsa de manga + habanero é o equilíbrio perfeito.",
    tip: "Dupla empanagem (farinha → ovo → coco) para cobertura grossa.",
  },
  "zarandeado": {
    glass: "Prato grande — peixe inteiro",
    serve: "Na mesa inteiro — visual impressionante.",
    tip: "Pargo ou huachinango são os peixes ideais. A pele deve estar crocante.",
  },
  "frijoles-puercos": {
    glass: "Tigela de barro",
    serve: "Caldoso com todos os toppings visíveis.",
    tip: "É a versão 'tudo junto' — quanto mais ingredientes, melhor.",
  },
  "huevos-motulenos": {
    glass: "Prato grande — muitos componentes",
    serve: "Tudo empilhado: tortilla, feijão, ovo, salsa, banana.",
    tip: "Sim, banana frita é essencial — o doce combina com o salgado.",
  },
  "chilaquiles-especiais": {
    glass: "Prato fundo",
    serve: "Queijo Oaxaca deve derreter sobre os chilaquiles.",
    tip: "Adicione o queijo 2 min antes de servir para derreter sem queimar.",
  },
};
