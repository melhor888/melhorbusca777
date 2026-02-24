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

  // ============ ANTOJITOS ============
  "quesadillas": "/images/dish-quesadillas.jpg",
  "enchiladas-rojas": "/images/dish-enchiladas-rojas.jpg",
  "chilaquiles": "/images/dish-chilaquiles.jpg",
  "tamales": "/images/dish-tamales.jpg",

  // ============ SOPAS & CALDOS ============
  "pozole-rojo": "/images/dish-pozole-rojo.jpg",
  "sopa-tortilla": "/images/dish-sopa-tortilla.jpg",

  // ============ CARNES MEXICANAS ============
  "mole-poblano": "/images/dish-mole-poblano.jpg",
  "cochinita-pibil": "/images/dish-cochinita-pibil.jpg",

  // ============ MOLHOS & SALSAS ============
  "guacamole": "/images/dish-guacamole.jpg",

  // ============ SOBREMESAS ============
  "churros": "/images/dish-churros.jpg",
  "flan-mexicano": "/images/dish-flan-mexicano.jpg",
  "tres-leches": "/images/dish-tres-leches.jpg",

  // ============ BEBIDAS ============
  "agua-horchata": "/images/dish-agua-horchata.jpg",

  // ============ MARISCOS ============
  "ceviche-mexicano": "/images/dish-ceviche-mexicano.jpg",

  // ============ ARROZ & FEIJÃO ============
  "arroz-rojo": "/images/dish-arroz-rojo.jpg",

  // ============ CAFÉ DA MANHÃ ============
  "huevos-rancheros": "/images/dish-huevos-rancheros.jpg",
};

export function getDishImage(dishId: string): string {
  return dishImages[dishId] || PLACEHOLDER;
}

export default dishImages;
