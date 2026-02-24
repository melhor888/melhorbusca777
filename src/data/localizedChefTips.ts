import i18n from "@/i18n/config";
import { ChefTip, getChefTip } from "./chefTips";

// English translations for chef tips
const chefTipsEN: Record<string, ChefTip> = {
  "tacos-al-pastor": {
    glass: "Clay plate or rustic tray",
    serve: "Serve with lime, onion, cilantro and salsa verde. Tortillas should be doubled.",
    tip: "The secret is achiote in the marinade and grilled pineapple on top. Use small tortillas (12cm).",
  },
  "tacos-carnitas": {
    glass: "Clay plate with tortillas on the side",
    serve: "Serve with salsa verde, onion, cilantro and lime.",
    tip: "The meat should fry in its own fat until golden — the crispy/tender contrast is key.",
  },
  "tacos-birria": {
    glass: "Plate with a cup of consommé on the side",
    serve: "Dip the taco in consommé before eating — it's the complete experience.",
    tip: "The consommé is as important as the meat. Save the broth and serve hot.",
  },
  "tacos-carne-asada": {
    glass: "Rustic plate or tray",
    serve: "Let the meat rest 5 min before cutting. Tortillas on the griddle until they puff up.",
    tip: "Marinate with lime for max 30 min — too much acid 'cooks' the meat and changes the texture.",
  },
  "tacos-pollo": {
    glass: "Deep plate with salsa on the side",
    serve: "Shred the chicken into medium strands to keep it juicy.",
    tip: "Chipotle gives the smoky flavor — start with 1 chile and adjust. Too much chipotle overwhelms everything.",
  },
  "tacos-pescado": {
    glass: "Lined basket or plate",
    serve: "Serve immediately — the crunch is fleeting.",
    tip: "The beer batter should be cold and the oil very hot (350°F). Firm fish like sea bass works best.",
  },
  "quesadillas": {
    glass: "Plate or wooden board",
    serve: "The cheese should be completely melted and stretchy.",
    tip: "Oaxaca cheese is the only one that gives the perfect 'pull'. In Mexico City, a quesadilla might not have cheese!",
  },
  "enchiladas-rojas": {
    glass: "Clay casserole or deep plate",
    serve: "Cover generously with cream, cheese and onion. Serve hot.",
    tip: "Briefly dip tortillas in oil before the sauce — this prevents them from breaking.",
  },
  "guacamole": {
    glass: "Molcajete (volcanic stone mortar)",
    serve: "Made fresh, in front of the customer. With fresh totopos.",
    tip: "NEVER use a blender — guacamole should have chunks. Ripe but firm avocado.",
  },
  "mole-poblano": {
    glass: "Clay plate with rice",
    serve: "The mole should generously cover the meat. Sprinkle sesame on top.",
    tip: "There are 30+ ingredients and each must be prepared separately. No shortcuts — it's a labor of love.",
  },
  "cochinita-pibil": {
    glass: "Clay plate or tortilla",
    serve: "Serve with pickled red onion and habanero.",
    tip: "Use real achiote paste (not powder). Banana leaf gives a unique aroma — aluminum foil is no substitute.",
  },
  "churros": {
    glass: "Plate with absorbent paper",
    serve: "Hot, crispy and dipped in thick chocolate.",
    tip: "The dough should be thick — if the churrera is hard to squeeze, it's at the right point.",
  },
  "flan-mexicano": {
    glass: "Ceramic plate with caramel dripping",
    serve: "Unmold chilled. The caramel should drip like sauce.",
    tip: "Water bath is mandatory. If the flan has tiny holes, the temperature was too high.",
  },
  "pozole-rojo": {
    glass: "Large clay bowl",
    serve: "Accompaniments on the table: lettuce, radish, oregano, tostadas, lime and chile.",
    tip: "The hominy corn should be open like a flower — a sign it's well cooked.",
  },
  "chilaquiles": {
    glass: "Deep plate with egg on top",
    serve: "The chips should be al dente — not completely soft. Serve immediately.",
    tip: "Use day-old tortillas — they're drier and fry better.",
  },
  "tamales": {
    glass: "Served in the corn husk itself",
    serve: "Open the husk at the table and eat directly. Pair with atole.",
    tip: "The masa should float in water when ready — if it sinks, beat in more lard.",
  },
  "chiles-rellenos": {
    glass: "Plate with tomato sauce",
    serve: "The egg coating should be light and airy. Serve with hot sauce.",
    tip: "Beat the egg whites to stiff peaks separately — this makes the coating fluffy, not heavy.",
  },
  "barbacoa": {
    glass: "Clay plate with consommé",
    serve: "Serve with hot tortillas and all condiments.",
    tip: "Slow cooking is essential — minimum 4 hours. The meat should fall apart on its own.",
  },
  "ceviche-mexicano": {
    glass: "Large glass or deep plate",
    serve: "With tostadas and avocado. The lime 'cooks' the fish.",
    tip: "30 min in lime is enough — any more and the fish gets rubbery.",
  },
  "salsa-roja": {
    glass: "Molcajete or clay bowl",
    serve: "Present at every Mexican table — as essential as salt.",
    tip: "Roast the tomatoes until almost charred — the smoky flavor makes all the difference.",
  },
  "salsa-verde": {
    glass: "Clay bowl",
    serve: "Versatile: use on enchiladas, chilaquiles, tacos or as a dip.",
    tip: "Tomatillos should be cooked whole with the husk — the husk adds a tart flavor.",
  },
  "arroz-rojo": {
    glass: "Plate or serving dish",
    serve: "Each grain should be separate. Never stir during cooking.",
    tip: "Fry the dry rice until translucent before adding liquid — the secret to fluffy rice.",
  },
  "huevos-rancheros": {
    glass: "Clay plate with everything together",
    serve: "Egg with runny yolk — the yolk mixes with the salsa.",
    tip: "Lightly fry the tortilla so it doesn't get soggy with the salsa.",
  },
  "tres-leches": {
    glass: "Deep plate — the cake releases liquid",
    serve: "Should be soaked but not falling apart. Generous whipped cream.",
    tip: "The secret is a well-aerated sponge cake — it absorbs the 3 milks without crumbling.",
  },
};

// Spanish translations for chef tips
const chefTipsES: Record<string, ChefTip> = {
  "tacos-al-pastor": {
    glass: "Plato de barro o bandeja rústica",
    serve: "Sirva con limón, cebolla, cilantro y salsa verde. Las tortillas deben ser dobles.",
    tip: "El secreto es el achiote en la marinada y la piña asada encima. Use tortillas pequeñas (12cm).",
  },
  "tacos-carnitas": {
    glass: "Plato de barro con tortillas al lado",
    serve: "Sirva con salsa verde, cebolla, cilantro y limón.",
    tip: "La carne debe freírse en su propia grasa hasta dorar — el contraste crujiente/suave es fundamental.",
  },
  "tacos-birria": {
    glass: "Plato con vaso de consomé al lado",
    serve: "Sumerja el taco en el consomé antes de comer — es la experiencia completa.",
    tip: "El consomé es tan importante como la carne. Guarde el caldo y sírvalo caliente.",
  },
  "tacos-carne-asada": {
    glass: "Plato rústico o bandeja",
    serve: "La carne debe reposar 5 min antes de cortar. Tortillas en el comal hasta que se inflen.",
    tip: "Marine con limón por máximo 30 min — demasiado ácido 'cocina' la carne y cambia la textura.",
  },
  "quesadillas": {
    glass: "Plato o tabla de madera",
    serve: "El queso debe estar completamente derretido y hacer hilos.",
    tip: "El queso Oaxaca es el único que da el 'hilo' perfecto. ¡En la CDMX la quesadilla puede no llevar queso!",
  },
  "enchiladas-rojas": {
    glass: "Cazuela de barro o plato hondo",
    serve: "Cubra generosamente con crema, queso y cebolla. Sirva caliente.",
    tip: "Pase las tortillas rápidamente por aceite antes de sumergirlas en la salsa — esto evita que se rompan.",
  },
  "guacamole": {
    glass: "Molcajete (mortero de piedra volcánica)",
    serve: "Hecho al momento, frente al cliente. Con totopos frescos.",
    tip: "NUNCA use licuadora — el guacamole debe tener trozos. Aguacate maduro pero firme.",
  },
  "mole-poblano": {
    glass: "Plato de barro con arroz",
    serve: "El mole debe cubrir la carne generosamente. Espolvoree ajonjolí encima.",
    tip: "Son 30+ ingredientes y cada uno debe prepararse por separado. No hay atajos — es trabajo de amor.",
  },
  "cochinita-pibil": {
    glass: "Plato de barro o tortilla",
    serve: "Sirva con cebolla morada curtida en vinagre y habanero.",
    tip: "Use pasta de achiote real (no polvo). La hoja de plátano da un aroma único — el papel aluminio no sustituye.",
  },
  "churros": {
    glass: "Plato con papel absorbente",
    serve: "Calientes, crujientes y sumergidos en chocolate espeso.",
    tip: "La masa debe estar espesa — si la churrera es difícil de apretar, está en el punto correcto.",
  },
  "pozole-rojo": {
    glass: "Tazón grande de barro",
    serve: "Acompañamientos en la mesa: lechuga, rábano, orégano, tostadas, limón y chile.",
    tip: "El maíz pozolero debe estar abierto como flor — señal de que está bien cocido.",
  },
  "chilaquiles": {
    glass: "Plato hondo con huevo encima",
    serve: "Los totopos deben estar al dente — no completamente suaves. Sirva inmediatamente.",
    tip: "Use tortillas del día anterior — están más secas y se fríen mejor.",
  },
  "tamales": {
    glass: "Servido en la propia hoja de maíz",
    serve: "Abra la hoja en la mesa y coma directamente. Acompañe con atole.",
    tip: "La masa debe flotar en el agua cuando está lista — si se hunde, bata más manteca.",
  },
  "chiles-rellenos": {
    glass: "Plato con salsa de tomate",
    serve: "La capa de huevo debe ser ligera y aireada. Sirva con salsa caliente.",
    tip: "Bata las claras a punto de nieve por separado — esto hace la capa esponjosa y no pesada.",
  },
  "barbacoa": {
    glass: "Plato de barro con consomé",
    serve: "Sirva con tortillas calientes y todos los condimentos.",
    tip: "La cocción lenta es fundamental — mínimo 4 horas. La carne debe deshacerse sola.",
  },
  "ceviche-mexicano": {
    glass: "Vaso grande o plato hondo",
    serve: "Con tostadas y aguacate. El limón 'cocina' el pescado.",
    tip: "30 min en limón es suficiente — más que eso y el pescado queda chicloso.",
  },
  "flan-mexicano": {
    glass: "Plato de cerámica con caramelo escurriendo",
    serve: "Desmolde frío. El caramelo debe escurrir como salsa.",
    tip: "El baño maría es obligatorio. Si el flan tiene hoyitos, la temperatura estaba muy alta.",
  },
  "salsa-roja": {
    glass: "Molcajete o tazón de barro",
    serve: "Presente en toda mesa mexicana — tan esencial como la sal.",
    tip: "Ase los tomates hasta casi quemar — el sabor ahumado hace toda la diferencia.",
  },
  "salsa-verde": {
    glass: "Tazón de barro",
    serve: "Versátil: úsela en enchiladas, chilaquiles, tacos o como dip.",
    tip: "Los tomatillos deben cocerse enteros con cáscara — la cáscara da sabor ácido.",
  },
  "arroz-rojo": {
    glass: "Plato o fuente",
    serve: "Cada grano debe estar separado. Nunca revuelva durante la cocción.",
    tip: "Fría el arroz seco hasta que esté translúcido antes de agregar líquido — el secreto del arroz esponjoso.",
  },
  "huevos-rancheros": {
    glass: "Plato de barro con todo junto",
    serve: "Huevo con yema líquida — la yema se mezcla con la salsa.",
    tip: "Fría ligeramente la tortilla para que no se ponga aguada con la salsa.",
  },
  "tres-leches": {
    glass: "Plato hondo — el pastel suelta líquido",
    serve: "Debe estar empapado pero sin desmoronarse. Crema batida generosa.",
    tip: "El secreto es un bizcocho bien aireado — absorbe las 3 leches sin deshacerse.",
  },
};

const translationMaps: Record<string, Record<string, ChefTip>> = {
  en: chefTipsEN,
  es: chefTipsES,
};

export function getLocalizedChefTip(id: string): ChefTip | undefined {
  const original = getChefTip(id);
  if (!original) return undefined;

  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) return original;

  const langKey = lang.startsWith("es") ? "es" : "en";
  const translated = translationMaps[langKey]?.[id];

  return translated || original;
}
