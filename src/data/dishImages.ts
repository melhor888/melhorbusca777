// Dish images - realistic AI-generated Mexican food photography
const PLACEHOLDER = "/placeholder.svg";

const dishImages: Record<string, string> = {
  // Receitas Exclusivas (Premium)
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
};

export function getDishImage(dishId: string): string {
  return dishImages[dishId] || PLACEHOLDER;
}

export default dishImages;
