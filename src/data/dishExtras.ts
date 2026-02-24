export interface DishExtra {
  price: string;
  curiosity: string;
  origin: string;
}

export function getDishExtra(id: string): DishExtra | undefined {
  return dishExtras[id];
}

export const dishExtras: Record<string, DishExtra> = {
  // ============ TACOS ============
  "tacos-al-pastor": { price: "$15 MXN (~R$5)", origin: "Cidade do México", curiosity: "Inspirado no shawarma libanês trazido por imigrantes árabes nos anos 1920. O trompo vertical é a versão mexicana do espeto giratório." },
  "tacos-carnitas": { price: "$18 MXN (~R$6)", origin: "Michoacán, México", curiosity: "As melhores carnitas são de Quiroga, Michoacán, onde famílias preparam em enormes panelas de cobre desde o período colonial." },
  "tacos-birria": { price: "$25 MXN (~R$8)", origin: "Jalisco, México", curiosity: "A birria viralizou nos EUA em 2020 como 'birria tacos' e se tornou o prato mexicano mais buscado no TikTok." },
  "tacos-carne-asada": { price: "$20 MXN (~R$7)", origin: "Sonora, México", curiosity: "A tradição de carne asada no norte do México é tão forte que churrascos dominicais são instituição familiar sagrada." },
  "tacos-pollo": { price: "$15 MXN (~R$5)", origin: "Puebla, México", curiosity: "A tinga é um dos poucos pratos mexicanos que usa chipotle como ingrediente principal — o sabor defumado define o prato." },
  "tacos-pescado": { price: "$30 MXN (~R$10)", origin: "Ensenada, Baja California", curiosity: "Os tacos de peixe originais eram de cação empanado. Hoje Ensenada tem uma rota turística só de tacos de peixe." },
  "tacos-chorizo": { price: "$15 MXN (~R$5)", origin: "Toluca, Estado do México", curiosity: "Toluca é a capital do chorizo mexicano — a cor vermelha vem do chile e achiote, não de corante artificial." },
  "tacos-lengua": { price: "$25 MXN (~R$8)", origin: "México (todo o país)", curiosity: "Língua é considerada o corte mais fino para tacos — mais macia que filé mignon quando bem preparada." },

  // ============ ANTOJITOS ============
  "quesadillas": { price: "$20 MXN (~R$7)", origin: "México (todo o país)", curiosity: "Na Cidade do México, existe debate eterno: quesadilla PRECISA ter queijo? Para chilangos, não necessariamente!" },
  "enchiladas-rojas": { price: "$50 MXN (~R$17)", origin: "México (todo o país)", curiosity: "A palavra 'enchilada' vem do náhuatl 'chīlli' — as primeiras eram apenas tortillas com chile, sem recheio." },
  "chilaquiles": { price: "$45 MXN (~R$15)", origin: "México (todo o país)", curiosity: "Chilaquiles são chamados de 'remédio para la cruda' (ressaca) — considerados a melhor cura do mundo." },
  "tamales": { price: "$15 MXN (~R$5)", origin: "Mesoamérica (3000 a.C.)", curiosity: "Tamales existem há 5.000 anos — os astecas os preparavam para guerreiros em batalha como ração de combate." },
  "sopes": { price: "$20 MXN (~R$7)", origin: "Centro do México", curiosity: "Sopes já existiam antes da chegada dos espanhóis — são um dos antojitos mais antigos da culinária mexicana." },
  "gorditas": { price: "$15 MXN (~R$5)", origin: "Centro e Norte do México", curiosity: "Em alguns estados as gorditas são fritas, em outros são na chapa — o debate regional é acalorado." },
  "elotes": { price: "$20 MXN (~R$7)", origin: "México (todo o país)", curiosity: "O milho foi domesticado no México há 9.000 anos — é literalmente a base da civilização mexicana." },
  "tostadas": { price: "$25 MXN (~R$8)", origin: "México (todo o país)", curiosity: "Tostadas nasceram da necessidade de não desperdiçar tortillas velhas — fritas, ganhavam nova vida." },

  // ============ SOPAS & CALDOS ============
  "pozole-rojo": { price: "$80 MXN (~R$27)", origin: "Guerrero/Jalisco, México", curiosity: "Os astecas preparavam pozole como prato cerimonial — a versão original usava carne humana de sacrifícios rituais." },
  "sopa-tortilla": { price: "$50 MXN (~R$17)", origin: "Centro do México", curiosity: "Cada estado tem sua versão — em alguns leva chipotle, em outros pasilla. A base é sempre tomate assado." },
  "menudo": { price: "$80 MXN (~R$27)", origin: "Norte do México", curiosity: "Menudo é vendido aos domingos de manhã em todo México — é considerado medicinal para recuperar dos excessos de sábado." },
  "caldo-de-pollo": { price: "$60 MXN (~R$20)", origin: "México (todo o país)", curiosity: "Chamado de 'levanta muertos' (levanta mortos) — receita de toda mãe e avó mexicana para curar qualquer doença." },

  // ============ CARNES & GUISADOS ============
  "mole-poblano": { price: "$120 MXN (~R$40)", origin: "Puebla, México", curiosity: "Lenda diz que freiras do Convento de Santa Rosa criaram o mole em desespero para receber o bispo — misturaram tudo que tinham." },
  "cochinita-pibil": { price: "$30 MXN (~R$10)", origin: "Yucatán, México", curiosity: "Pibil vem do maia 'pib' (enterrado) — originalmente cozida em forno de terra por 12 horas." },
  "chiles-rellenos": { price: "$80 MXN (~R$27)", origin: "Puebla, México", curiosity: "O chile poblano foi nomeado em honra a Puebla — tem picância suave e é o chile mais versátil da culinária." },
  "barbacoa": { price: "$30 MXN (~R$10)", origin: "Hidalgo/Estado do México", curiosity: "A palavra 'barbecue' em inglês vem de 'barbacoa' — a técnica de cozinhar em forno de terra." },
  "carne-en-su-jugo": { price: "$90 MXN (~R$30)", origin: "Guadalajara, Jalisco", curiosity: "Criado nos anos 1960 no restaurante 'Las 9 Esquinas' — rapidamente se tornou prato símbolo de Guadalajara." },

  // ============ MOLHOS & SALSAS ============
  "guacamole": { price: "$50 MXN (~R$17)", origin: "México (pré-hispânico)", curiosity: "O nome vem do náhuatl 'āhuacamōlli' (molho de abacate). Os astecas já comiam guacamole há mais de 500 anos." },
  "salsa-roja": { price: "$10 MXN (~R$3)", origin: "México (todo o país)", curiosity: "Existem mais de 500 variedades de salsa vermelha documentadas no México — cada família tem sua versão." },
  "salsa-verde": { price: "$10 MXN (~R$3)", origin: "México (todo o país)", curiosity: "Tomatillos não são tomates verdes — são uma fruta completamente diferente, da família das fisalis." },
  "pico-de-gallo": { price: "$15 MXN (~R$5)", origin: "México (todo o país)", curiosity: "Também chamada 'salsa bandera' (salsa bandeira) porque tem as 3 cores da bandeira mexicana." },
  "mole-negro": { price: "$150 MXN (~R$50)", origin: "Oaxaca, México", curiosity: "Oaxaca tem 7 moles tradicionais — o negro é o mais complexo e pode levar 3 dias para preparar." },

  // ============ SOBREMESAS ============
  "churros": { price: "$20 MXN (~R$7)", origin: "Espanha → México", curiosity: "Churros espanhóis não têm recheio. No México e Brasil, ganharam recheios como doce de leite e chocolate." },
  "flan-mexicano": { price: "$30 MXN (~R$10)", origin: "Espanha → México", curiosity: "O flan chegou ao México com os espanhóis no séc. XVI e foi adaptado com leite condensado e cream cheese." },
  "tres-leches": { price: "$40 MXN (~R$13)", origin: "México/Nicarágua", curiosity: "A receita apareceu nas latas de leite condensado Nestlé nos anos 1940 — ninguém sabe se a Nestlé inventou ou copiou." },
  "arroz-con-leche": { price: "$25 MXN (~R$8)", origin: "Espanha → México", curiosity: "Existe uma canção infantil mexicana famosa: 'Arroz con leche, me quiero casar...' que toda criança conhece." },

  // ============ BEBIDAS ============
  "agua-horchata": { price: "$20 MXN (~R$7)", origin: "Valência, Espanha → México", curiosity: "A horchata espanhola usa chufa (tubérculo). A mexicana usa arroz e canela — sabores completamente diferentes." },
  "agua-jamaica": { price: "$15 MXN (~R$5)", origin: "África → México", curiosity: "As flores de hibisco (jamaica) chegaram ao México no período colonial via comércio com a África." },
  "chocolate-mexicano": { price: "$25 MXN (~R$8)", origin: "México (pré-hispânico)", curiosity: "Os astecas bebiam 'xocolātl' amargo com pimenta — os espanhóis adicionaram açúcar e conquistaram o mundo." },

  // ============ MARISCOS ============
  "ceviche-mexicano": { price: "$80 MXN (~R$27)", origin: "Costa mexicana", curiosity: "Diferente do peruano, o ceviche mexicano sempre leva tomate e se come em tostadas, não em prato." },
  "camarones-diabla": { price: "$120 MXN (~R$40)", origin: "Costa do Pacífico", curiosity: "A la diabla significa 'ao estilo do diabo' — a picância deve fazer suar e chorar de felicidade." },

  // ============ ARROZ & FEIJÃO ============
  "arroz-rojo": { price: "$10 MXN (~R$3)", origin: "México (todo o país)", curiosity: "O arroz chegou ao México via Filipinas no séc. XVI pelo Galeão de Manila — e virou acompanhamento nacional." },
  "frijoles-charros": { price: "$30 MXN (~R$10)", origin: "Norte do México", curiosity: "Nomeados em honra aos charros (cowboys mexicanos) que cozinhavam feijão com o que tinham no acampamento." },
  "frijoles-refritos": { price: "$10 MXN (~R$3)", origin: "México (todo o país)", curiosity: "O nome 'refrito' não significa frito duas vezes — 'refrito' em espanhol antigo significa 'bem frito'." },

  // ============ CAFÉ DA MANHÃ ============
  "huevos-rancheros": { price: "$50 MXN (~R$17)", origin: "Campo mexicano", curiosity: "Originalmente era o café da manhã dos trabalhadores rurais — substancial para aguentar um dia no campo." },
  "huevos-divorciados": { price: "$55 MXN (~R$18)", origin: "México", curiosity: "O nome humorístico surgiu porque os dois ovos estão separados por salsas diferentes — como um casal divorciado." },

  // ============ TAMALES & MASSAS ============
  "tamales-dulces": { price: "$15 MXN (~R$5)", origin: "México (todo o país)", curiosity: "No Dia de Reis (6 de janeiro), quem acha o bonequinho na Rosca de Reyes deve pagar tamales em 2 de fevereiro." },
  "empanadas-mexicanas": { price: "$20 MXN (~R$7)", origin: "Espanha → México", curiosity: "As empanadas mexicanas de picadillo são menores e mais apimentadas que as argentinas." },
};
