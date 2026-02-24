// Dish images - realistic AI-generated Mexican food photography
const PLACEHOLDER = "/placeholder.svg";

const dishImages: Record<string, string> = {
  // ============ RECEITAS EXCLUSIVAS (Premium/VIP) ============
  "mole-negro-oaxaca-secreto": "/images/dish-mole-negro-oaxaca-secreto.jpg",
  "birria-jalisco-secreta": "/images/dish-birria-jalisco-secreta.jpg",
  "tlayuda-oaxaquena": "/images/dish-tlayuda-oaxaquena.jpg",
  "papadzules-yucatecos": "/images/dish-papadzules-yucatecos.jpg",
  "chiles-en-nogada-premium": "/images/dish-chiles-en-nogada-premium.jpg",
  "mole-amarillo-oaxaca": "/images/dish-mole-amarillo-oaxaca.jpg",
  "taco-wagyu-trufa": "/images/dish-taco-wagyu-trufa.jpg",
  "mole-chocolate-belga": "/images/dish-mole-chocolate-belga.jpg",
  "pozole-seafood-gourmet": "/images/dish-pozole-seafood-gourmet.jpg",
  "enchiladas-langosta": "/images/dish-enchiladas-langosta.jpg",
  "cochinita-pibil-premium": "/images/dish-cochinita-pibil-premium.jpg",
  "barbacoa-borrego-hidalgo": "/images/dish-barbacoa-borrego-hidalgo.jpg",
  "taco-al-pastor-chef": "/images/dish-taco-al-pastor-chef.jpg",
  "carnitas-michoacan-chef": "/images/dish-carnitas-michoacan-chef.jpg",
  "menu-degustacao-mexicano": "/images/dish-menu-degustacao-mexicano.jpg",
  "cena-premium-wagyu-mezcal": "/images/dish-cena-premium-wagyu-mezcal.jpg",

  // ============ TACOS ============
  "tacos-al-pastor": "/images/dish-tacos-al-pastor.jpg",
  "tacos-carnitas": "/images/dish-tacos-carnitas.jpg",
  "tacos-birria": "/images/dish-tacos-birria.jpg",
  "tacos-carne-asada": "/images/dish-tacos-carne-asada.jpg",
  "tacos-pollo": "/images/dish-tacos-pollo.jpg",
  "tacos-pescado": "/images/dish-tacos-pescado.jpg",
  "tacos-chorizo": "/images/dish-tacos-chorizo.jpg",
  "tacos-lengua": "/images/dish-tacos-lengua.jpg",
  "tacos-suadero": "/images/dish-tacos-lengua.jpg",
  "tacos-campechanos": "/images/dish-tacos-chorizo.jpg",
  "tacos-barbacoa-borrego": "/images/dish-barbacoa.jpg",
  "tacos-canasta": "/images/dish-tamales.jpg",
  "tacos-gobernador": "/images/dish-tacos-pescado.jpg",
  "tacos-camarao": "/images/dish-tacos-pescado.jpg",
  "tacos-veganos": "/images/dish-elotes.jpg",
  "tacos-gourmet": "/images/dish-barbacoa.jpg",

  // ============ ANTOJITOS ============
  "quesadillas": "/images/dish-quesadillas.jpg",
  "enchiladas-rojas": "/images/dish-enchiladas-rojas.jpg",
  "chilaquiles": "/images/dish-chilaquiles.jpg",
  "tamales": "/images/dish-tamales.jpg",
  "sopes": "/images/dish-sopes.jpg",
  "gorditas": "/images/dish-gorditas.jpg",
  "elotes": "/images/dish-elotes.jpg",
  "tostadas": "/images/dish-tostadas.jpg",
  "tlacoyos": "/images/dish-sopes.jpg",
  "huaraches": "/images/dish-sopes.jpg",
  "flautas": "/images/dish-enchiladas-rojas.jpg",
  "molletes": "/images/dish-quesadillas.jpg",
  "esquites": "/images/dish-elotes.jpg",

  // ============ SOPAS & CALDOS ============
  "pozole-rojo": "/images/dish-pozole-rojo.jpg",
  "sopa-tortilla": "/images/dish-sopa-tortilla.jpg",
  "menudo": "/images/dish-menudo.jpg",
  "caldo-de-pollo": "/images/dish-caldo-de-pollo.jpg",
  "caldo-res": "/images/dish-caldo-de-pollo.jpg",
  "birria-caldo": "/images/dish-menudo.jpg",
  "sopa-fideo": "/images/dish-sopa-tortilla.jpg",
  "sopa-lima": "/images/dish-sopa-tortilla.jpg",
  "pozole-verde": "/images/dish-pozole-rojo.jpg",
  "pozole-blanco": "/images/dish-pozole-rojo.jpg",

  // ============ CARNES MEXICANAS ============
  "mole-poblano": "/images/dish-mole-poblano.jpg",
  "cochinita-pibil": "/images/dish-cochinita-pibil.jpg",
  "chiles-rellenos": "/images/dish-chiles-rellenos.jpg",
  "barbacoa": "/images/dish-barbacoa.jpg",
  "carne-en-su-jugo": "/images/dish-carne-en-su-jugo.jpg",
  "tinga-res": "/images/dish-barbacoa.jpg",
  "chile-verde": "/images/dish-carne-en-su-jugo.jpg",
  "picadillo": "/images/dish-tacos-chorizo.jpg",
  "pollo-mole-verde": "/images/dish-mole-poblano.jpg",
  "albondigas": "/images/dish-menudo.jpg",
  "carnitas-michoacan": "/images/dish-tacos-carnitas.jpg",
  "pollo-asado-mex": "/images/dish-tacos-pollo.jpg",
  "bistec-ranchero": "/images/dish-carne-en-su-jugo.jpg",
  "arrachera": "/images/dish-tacos-carne-asada.jpg",
  "cecina-yecapixtla": "/images/dish-tacos-carne-asada.jpg",
  "tasajo-oaxaca": "/images/dish-tacos-carne-asada.jpg",
  "suadero-guisado": "/images/dish-tacos-lengua.jpg",

  // ============ MOLHOS & SALSAS ============
  "guacamole": "/images/dish-guacamole.jpg",
  "salsa-verde": "/images/dish-salsa-verde.jpg",
  "salsa-roja": "/images/dish-salsa-roja.jpg",
  "pico-de-gallo": "/images/dish-pico-de-gallo.jpg",
  "salsa-macha": "/images/dish-salsa-roja.jpg",
  "adobo-mexicano": "/images/dish-salsa-roja.jpg",
  "habanero-salsa": "/images/dish-salsa-verde.jpg",

  // ============ SOBREMESAS ============
  "churros": "/images/dish-churros.jpg",
  "flan-mexicano": "/images/dish-flan-mexicano.jpg",
  "tres-leches": "/images/dish-tres-leches.jpg",
  "pan-de-muerto": "/images/dish-churros.jpg",
  "cajeta": "/images/dish-flan-mexicano.jpg",
  "bunuelos": "/images/dish-churros.jpg",
  "gelatina-mosaic": "/images/dish-flan-mexicano.jpg",
  "capirotada": "/images/dish-tres-leches.jpg",
  "pastel-tres-leches": "/images/dish-tres-leches.jpg",
  "alegrias": "/images/dish-churros.jpg",

  // ============ BEBIDAS ============
  "agua-horchata": "/images/dish-agua-horchata.jpg",
  "agua-jamaica": "/images/dish-agua-jamaica.jpg",
  "champurrado": "/images/dish-champurrado.jpg",
  "atole": "/images/dish-champurrado.jpg",
  "tepache": "/images/dish-agua-jamaica.jpg",
  "cafe-de-olla": "/images/dish-champurrado.jpg",
  "michelada": "/images/dish-agua-jamaica.jpg",
  "margarita": "/images/dish-agua-horchata.jpg",
  "pulque": "/images/dish-agua-horchata.jpg",

  // ============ MARISCOS ============
  "ceviche-mexicano": "/images/dish-ceviche-mexicano.jpg",
  "aguachile": "/images/dish-ceviche-mexicano.jpg",
  "coctel-camarones": "/images/dish-ceviche-mexicano.jpg",
  "pescado-zarandeado": "/images/dish-tacos-pescado.jpg",
  "tacos-camaron": "/images/dish-tacos-pescado.jpg",
  "tostada-atun": "/images/dish-ceviche-mexicano.jpg",
  "camarones-coconut": "/images/dish-tacos-pescado.jpg",
  "zarandeado": "/images/dish-tacos-pescado.jpg",

  // ============ ARROZ & FEIJÃO ============
  "arroz-rojo": "/images/dish-arroz-rojo.jpg",
  "arroz-mexicano": "/images/dish-arroz-mexicano.jpg",
  "frijoles-refritos": "/images/dish-frijoles-refritos.jpg",
  "arroz-verde": "/images/dish-arroz-mexicano.jpg",
  "frijoles-negros": "/images/dish-frijoles-refritos.jpg",
  "arroz-con-rajas": "/images/dish-arroz-mexicano.jpg",
  "frijoles-puercos": "/images/dish-frijoles-refritos.jpg",

  // ============ CAFÉ DA MANHÃ ============
  "huevos-rancheros": "/images/dish-huevos-rancheros.jpg",
  "migas": "/images/dish-chilaquiles.jpg",
  "enfrijoladas": "/images/dish-enchiladas-rojas.jpg",
  "machaca": "/images/dish-huevos-rancheros.jpg",
  "entomatadas": "/images/dish-enchiladas-rojas.jpg",
  "pan-dulce": "/images/dish-churros.jpg",
  "huevos-motulenos": "/images/dish-huevos-rancheros.jpg",
  "chilaquiles-especiais": "/images/dish-chilaquiles.jpg",

  // ============ TAMALES & MASSAS ============
  "tamales-oaxaquenos": "/images/dish-tamales.jpg",
  "tamales-rajas": "/images/dish-tamales.jpg",
  "chiles-nogada": "/images/dish-chiles-en-nogada-premium.jpg",
  "torta-ahogada": "/images/dish-gorditas.jpg",
  "cemita-poblana": "/images/dish-gorditas.jpg",
  "tamales-verdes": "/images/dish-tamales.jpg",
  "enfrijoladas-trad": "/images/dish-enchiladas-rojas.jpg",
  "mole-amarillo": "/images/dish-mole-amarillo-oaxaca.jpg",

  // ============ TORTILLAS & BASES ============
  "tortilla-milho": "/images/dish-tacos-al-pastor.jpg",
  "tortilla-trigo": "/images/dish-quesadillas.jpg",
  "gorditas-base": "/images/dish-gorditas.jpg",
  "sopes-base": "/images/dish-sopes.jpg",
  "tlacoyos-base": "/images/dish-sopes.jpg",
  "tostadas-base": "/images/dish-tostadas.jpg",
  "pupusas-mex": "/images/dish-sopes.jpg",
  "chalupas": "/images/dish-tostadas.jpg",

  // ============ PRATOS TRADICIONAIS ============
  "enchiladas-verdes": "/images/dish-enchiladas-rojas.jpg",
  "burritos": "/images/dish-quesadillas.jpg",
  "chimichangas": "/images/dish-quesadillas.jpg",
  "quesadillas-trad": "/images/dish-quesadillas.jpg",
  "fajitas": "/images/dish-tacos-carne-asada.jpg",
  "chilaquiles-rojos": "/images/dish-chilaquiles.jpg",
  "enchiladas-suizas": "/images/dish-enchiladas-rojas.jpg",

  // ============ QUEIJOS & RECHEIOS ============
  "queijo-oaxaca": "/images/dish-quesadillas.jpg",
  "queso-fundido": "/images/dish-quesadillas.jpg",
  "queijo-cotija": "/images/dish-elotes.jpg",
  "recheio-picadillo": "/images/dish-tacos-chorizo.jpg",
  "recheio-tinga": "/images/dish-tacos-pollo.jpg",
  "recheio-rajas": "/images/dish-chiles-rellenos.jpg",
  "recheio-vegano": "/images/dish-elotes.jpg",

  // ============ CULTURA MEXICANA ============
  "historia-taco": "/images/dish-tacos-al-pastor.jpg",
  "cultura-pimenta": "/images/dish-salsa-roja.jpg",
  "historia-mole": "/images/dish-mole-poblano.jpg",
  "dia-muertos": "/images/dish-churros.jpg",
  "regioes-gastronomicas": "/images/dish-tacos-al-pastor.jpg",
  "festivais-mexicanos": "/images/dish-pozole-rojo.jpg",

  // ============ ESCOLA MEXICANA ============
  "curso-basico": "/images/dish-tacos-al-pastor.jpg",
  "curso-intermediario": "/images/dish-mole-poblano.jpg",
};

export function getDishImage(dishId: string): string {
  return dishImages[dishId] || PLACEHOLDER;
}

export default dishImages;
