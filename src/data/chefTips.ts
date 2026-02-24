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
};
