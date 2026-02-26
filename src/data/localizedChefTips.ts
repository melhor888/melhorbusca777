import i18n from "@/i18n/config";
import { ChefTip, getChefTip } from "./chefTips";
import { chefTipsBatch8_18EN } from "./localizedChefTipsBatch8_18-en";
import { chefTipsBatch8_18ES } from "./localizedChefTipsBatch8_18-es";

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
  "tacos-chorizo": {
    glass: "Simple plate with limes",
    serve: "Chorizo should be well-fried, almost crispy.",
    tip: "Remove from casing to crumble in the pan. Quality chorizo doesn't need oil — it has enough fat.",
  },
  "tacos-lengua": {
    glass: "Rustic plate",
    serve: "Cut the tongue into small cubes and sear on the griddle.",
    tip: "Cook until you can easily pierce with a fork. The skin peels off easily when hot.",
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
  "sopes": {
    glass: "Clay plate",
    serve: "Assemble fresh — the crispy base is important.",
    tip: "Raise the edges while the masa is still hot — it cools fast and breaks.",
  },
  "gorditas": {
    glass: "Simple plate",
    serve: "Open carefully to avoid breaking and fill generously.",
    tip: "The dough should be thicker than a regular tortilla — that's why it's called 'gordita' (chubby).",
  },
  "elotes": {
    glass: "Served on the cob or in a cup (esquites)",
    serve: "Lots of cotija cheese and chile. Lime is essential.",
    tip: "Grill over charcoal for smoky flavor. Japanese mayo (Kewpie) is the secret upgrade.",
  },
  "tostadas": {
    glass: "Plate — careful, it crumbles!",
    serve: "Stack high and eat over the plate. It will get messy — that's part of it.",
    tip: "The tostada must be completely flat and crispy. Day-old tortillas fry better.",
  },
  "pozole-rojo": {
    glass: "Large clay bowl",
    serve: "Accompaniments on the table: lettuce, radish, oregano, tostadas, lime and chile.",
    tip: "The hominy corn should be open like a flower — a sign it's well cooked.",
  },
  "sopa-tortilla": {
    glass: "Clay bowl with toppings",
    serve: "Tortilla strips should be added right when serving.",
    tip: "Roast the tomatoes on the griddle until charred — this gives depth to the broth.",
  },
  "menudo": {
    glass: "Very large bowl",
    serve: "Oregano, onion, lime and chile — the table should look like a condiment buffet.",
    tip: "Wash the tripe many times. The long cooking eliminates any smell.",
  },
  "caldo-de-pollo": {
    glass: "Large bowl with rice on the side",
    serve: "Serve the rice separately — each person adds their desired amount.",
    tip: "Don't skim the foam — it contains flavor. Use low heat for clear broth.",
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
  "carne-en-su-jugo": {
    glass: "Deep bowl",
    serve: "The bacon should be crispy on top — contrast of textures.",
    tip: "Sear the meat over very high heat to keep the juices inside.",
  },
  "guacamole": {
    glass: "Molcajete (volcanic stone mortar)",
    serve: "Made fresh, in front of the customer. With fresh totopos.",
    tip: "NEVER use a blender — guacamole should have chunks. Ripe but firm avocado.",
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
  "pico-de-gallo": {
    glass: "Bowl or directly on the plate",
    serve: "Fresh and crunchy — prepare at most 30 min before serving.",
    tip: "All ingredients should be the same size — uniformity is key.",
  },
  "mole-negro": {
    glass: "Clay plate",
    serve: "Serve over turkey or chicken with rice. Sprinkle sesame.",
    tip: "Burning the chile seeds is what gives the black color — it looks wrong but it's the correct technique.",
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
  "tres-leches": {
    glass: "Deep plate — the cake releases liquid",
    serve: "Should be soaked but not falling apart. Generous whipped cream.",
    tip: "The secret is a well-aerated sponge cake — it absorbs the 3 milks without crumbling.",
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
  "huevos-divorciados": {
    glass: "Plate divided in half",
    serve: "The visual separation is important — salsa verde on one side, roja on the other.",
    tip: "Use beans as the 'wall' between the two divorced eggs.",
  },
  "arroz-con-leche": {
    glass: "Bowl with sprinkled cinnamon",
    serve: "Can be hot or cold — both versions are delicious.",
    tip: "Stir constantly so the rice doesn't stick. Condensed milk goes in at the end.",
  },
  "agua-horchata": {
    glass: "Large glass with ice",
    serve: "Very cold, creamy and sweet. Perfect with spicy food.",
    tip: "Soak for 8 hours — the rice releases starch that gives the creaminess.",
  },
  "agua-jamaica": {
    glass: "Large glass with ice",
    serve: "Ruby red and refreshing. Adjust sugar to taste.",
    tip: "Don't overcook the flowers — 10 min is enough. Over-cooking makes it bitter.",
  },
  "chocolate-mexicano": {
    glass: "Clay mug (jarro)",
    serve: "Frothy and hot. Pair with pan dulce.",
    tip: "The molinillo (wooden whisk) creates foam impossible to replicate with a regular whisk.",
  },
  "ceviche-mexicano": {
    glass: "Large glass or deep plate",
    serve: "With tostadas and avocado. The lime 'cooks' the fish.",
    tip: "30 min in lime is enough — any more and the fish gets rubbery.",
  },
  "camarones-diabla": {
    glass: "Deep plate with rice",
    serve: "Have lime and tortillas to tame the spiciness.",
    tip: "Don't overcook the shrimp — 2-3 min per side is enough.",
  },
  "frijoles-charros": {
    glass: "Clay bowl",
    serve: "Brothy, with visible pieces of bacon and chorizo.",
    tip: "Beer adds a subtle bitterness — use a Mexican-style light lager.",
  },
  "frijoles-refritos": {
    glass: "Plate with crumbled cheese",
    serve: "Creamy and shiny. Should release from the pan easily.",
    tip: "Lard is the secret ingredient — gives a flavor impossible to achieve with vegetable oil.",
  },
  "tamales-dulces": {
    glass: "In the corn husk itself",
    serve: "With coffee or hot atole.",
    tip: "Pink food coloring is tradition — without it, it's not a real tamal dulce.",
  },
  "empanadas-mexicanas": {
    glass: "Plate with salsa on the side",
    serve: "Hot and crispy. The filling should be well seasoned.",
    tip: "If frying, oil should be at 340°F. If baking, brush with egg for browning.",
  },
  "tortilla-milho": {
    glass: "Basket with cloth (tortillero)",
    serve: "Hot, directly from the griddle. They should puff up while cooking.",
    tip: "The ratio is 2:1¼ (masa:water). If the masa cracks at the edges, add more water.",
  },
  "tortilla-trigo": {
    glass: "Tortillero or clean cloth",
    serve: "Hot and flexible — they should fold without breaking.",
    tip: "Lard makes all the difference in texture. Rest the dough 30 min for the gluten to relax.",
  },
  "gorditas-base": {
    glass: "Simple plate",
    serve: "Open carefully and fill generously.",
    tip: "The dough should be thicker than a tortilla — 2cm. Open while still hot.",
  },
  "sopes-base": {
    glass: "Clay plate",
    serve: "Assemble fresh to keep the crunch.",
    tip: "Raise the edges immediately after removing from the griddle — they cool fast.",
  },
  "tlacoyos-base": {
    glass: "Plate with salsa",
    serve: "Top with nopales and fresh cheese.",
    tip: "The filling goes inside the masa before cooking — it's not a topping.",
  },
  "tostadas-base": {
    glass: "Plate or basket",
    serve: "Completely flat and crispy.",
    tip: "Day-old tortillas fry better. Oil should be at 350°F.",
  },
  "enchiladas-verdes": {
    glass: "Clay casserole",
    serve: "Cover generously with cream and cheese.",
    tip: "Cooked tomatillos are less acidic. For more freshness, use them raw.",
  },
  "burritos": {
    glass: "Wrapped in aluminum foil",
    serve: "Should be big enough to be a complete meal.",
    tip: "Heat the flour tortilla on the griddle to make it flexible — otherwise it will tear.",
  },
  "chimichangas": {
    glass: "Plate with guacamole and cream",
    serve: "Crispy outside, juicy inside.",
    tip: "Secure well with toothpicks before frying — if it opens, the filling escapes into the oil.",
  },
  "quesadillas-trad": {
    glass: "Plate or board",
    serve: "Cheese should be completely melted.",
    tip: "Squash blossom sautéed with epazote is the most traditional filling in Mexico City.",
  },
  "fajitas": {
    glass: "Sizzling iron plate",
    serve: "The sizzling presentation is essential — heat the plate first.",
    tip: "Always cut against the grain for maximum tenderness.",
  },
  "chilaquiles-rojos": {
    glass: "Deep plate with egg",
    serve: "Al dente — not completely soft. Serve immediately.",
    tip: "Use thick totopos that can withstand the salsa without falling apart.",
  },
  "pozole-blanco": {
    glass: "Large bowl",
    serve: "With all accompaniments on the table.",
    tip: "No chile — the flavor comes from the meat and hominy. Perfect for kids.",
  },
  "enchiladas-suizas": {
    glass: "Oven-safe baking dish, gratinated",
    serve: "Hot from the oven with cheese bubbling.",
    tip: "Heavy cream softens the tomatillo's acidity — that's the 'Swiss' in the name.",
  },
  "tamales-verdes": {
    glass: "In the corn husk itself",
    serve: "Pair with hot atole.",
    tip: "The masa should float in water. Beat in more lard if it sinks.",
  },
  "enfrijoladas-trad": {
    glass: "Deep plate",
    serve: "The bean sauce should be silky and hot.",
    tip: "Use black beans with epazote — the flavor is irreplaceable.",
  },
  "mole-amarillo": {
    glass: "Clay plate",
    serve: "Thickened with masa — velvety texture.",
    tip: "Chilcostle is essential and hard to find outside Oaxaca — chile ancho is a substitute.",
  },
  "queijo-oaxaca": {
    glass: "Hot clay pot",
    serve: "The cheese should pull into long strings when served.",
    tip: "Oaxaca cheese is wound into a ball like string — unravel before using.",
  },
  "queso-fundido": {
    glass: "Bubbling clay pot",
    serve: "Serve immediately — it hardens fast.",
    tip: "Use Chihuahua cheese for perfect melting. Oaxaca also works.",
  },
  "queijo-cotija": {
    glass: "Crumbled over dishes",
    serve: "Doesn't melt — use crumbled like parmesan.",
    tip: "Real Cotija comes from Michoacán and has a denomination of origin.",
  },
  "recheio-picadillo": {
    glass: "Bowl for filling",
    serve: "Versatile — use in chiles, empanadas, tacos.",
    tip: "Raisins and olives are the special touch that sets Mexican picadillo apart.",
  },
  "recheio-tinga": {
    glass: "Bowl for filling",
    serve: "Shred the chicken into medium strands.",
    tip: "Canned chipotle in adobo already has sauce — use the sauce from the can for more flavor.",
  },
  "recheio-rajas": {
    glass: "Creamy bowl",
    serve: "Creamy with visible poblano strips.",
    tip: "Roast the poblano until the skin blisters and turns black — but don't burn the flesh.",
  },
  "recheio-vegano": {
    glass: "Bowl",
    serve: "Colorful and fresh — assemble at the last minute.",
    tip: "Grill the nopales until ALL the slime is gone — patience here is key.",
  },
  "carnitas-michoacan": {
    glass: "Clay plate or tray",
    serve: "Mix tender and crispy cuts for variety of textures.",
    tip: "Michoacán's copper pot conducts heat evenly — use a heavy-bottomed pot.",
  },
  "pollo-asado-mex": {
    glass: "Cutting board",
    serve: "The skin should be crispy and red from the marinade.",
    tip: "Marinate for at least 12h — the achiote needs time to penetrate.",
  },
  "bistec-ranchero": {
    glass: "Plate with tortillas",
    serve: "The ranchero sauce should cover the meat.",
    tip: "Sear the meat first over high heat — then cook in the sauce.",
  },
  "arrachera": {
    glass: "Sizzling board",
    serve: "Cut against the grain into thin strips.",
    tip: "Beer in the marinade tenderizes the fibers. Don't overcook — it should be medium.",
  },
  "cecina-yecapixtla": {
    glass: "Plate with guacamole",
    serve: "Quick on the grill — 2-3 min per side.",
    tip: "Cecina is already salted — don't add salt. The guacamole balances it.",
  },
  "tasajo-oaxaca": {
    glass: "Plate with nopales",
    serve: "Thin meat, quick to grill.",
    tip: "Buy tasajo at Oaxacan markets — quality varies greatly.",
  },
  "suadero-guisado": {
    glass: "Plate with tortillas",
    serve: "Fry until crispy on the outside.",
    tip: "Suadero is a unique cut — between the rib and the skin. Inimitable texture.",
  },
  "historia-taco": {
    glass: "Reading — not a recipe",
    serve: "Enjoy with real tacos while reading.",
    tip: "The history of the taco is the history of Mexico — each region tells its own version.",
  },
  "cultura-pimenta": {
    glass: "Educational reading",
    serve: "Have the peppers on hand to compare.",
    tip: "Start with poblano (mild) and gradually work up to habanero (extreme).",
  },
  "historia-mole": {
    glass: "Cultural reading",
    serve: "Try a mole while reading about its history.",
    tip: "Each mole tells a 500-year story of cultural fusion.",
  },
  "dia-muertos": {
    glass: "Cultural reading",
    serve: "Set up an ofrenda with the foods mentioned.",
    tip: "The ofrenda should include the loved one's favorite food — it's personal.",
  },
  "regioes-gastronomicas": {
    glass: "Educational reading",
    serve: "Use as a guide to plan culinary trips.",
    tip: "Each state deserves at least a week of culinary exploration.",
  },
  "festivais-mexicanos": {
    glass: "Informative reading",
    serve: "Plan trips around the festivals.",
    tip: "The Guelaguetza in July is the most complete cultural experience.",
  },
  "curso-basico": {
    glass: "Complete course — 6 modules",
    serve: "Follow the module order for best learning.",
    tip: "Master tortillas and beans before anything — they're the base of 80% of Mexican cuisine.",
  },
  "curso-intermediario": {
    glass: "Complete course — 6 modules",
    serve: "Practice each module 2-3 times before advancing.",
    tip: "Tamales are the thermometer of a Mexican cook — if you make good tamales, you're ready.",
  },
  "curso-avancado": {
    glass: "Masterclass — 6 modules",
    serve: "Reserve full days for complex modules like mole negro.",
    tip: "Mole negro takes 3 days — there are no shortcuts. Patience is the secret ingredient.",
  },
  "tecnica-tortilla-pro": {
    glass: "Intensive practical class",
    serve: "Practice with masa harina before using fresh nixtamal.",
    tip: "A tortilla press is an essential investment. The perfect tortilla puffs on the third flip.",
  },
  "tecnica-molhos-salsas": {
    glass: "Practical class — 10 salsas",
    serve: "Make all salsas in one afternoon to compare flavors.",
    tip: "The molcajete gives a rustic texture impossible in a blender — worth the investment.",
  },
  "uso-pimentas-pro": {
    glass: "Technical class — 15 chiles",
    serve: "Have all chiles on hand to compare aroma, color and flavor.",
    tip: "Never burn the chiles — toast lightly for 10-15 seconds. Burned = bitter.",
  },
  "fermentacoes-mex": {
    glass: "Practical class — 3 to 7 days",
    serve: "Start with tepache — it's the easiest and most forgiving.",
    tip: "Temperature of 77-86°F is ideal. Too cold = slow fermentation. Too hot = vinegar.",
  },
  "processos-tradicionais": {
    glass: "Theory & practice class",
    serve: "Look for authentic artisanal utensils at Mexican markets.",
    tip: "A new molcajete needs to be 'cured' — grind rice until no more powder comes out.",
  },
  "conservacao-alimentos": {
    glass: "Technical class",
    serve: "Hygiene is fundamental — sterilize all containers.",
    tip: "Dried chiles last years if stored in a dry, dark place.",
  },
  "producao-artesanal": {
    glass: "Production workshop",
    serve: "Start with small batches to test recipes before scaling.",
    tip: "Professional packaging increases perceived value by 40% — invest in it.",
  },
  "molho-apimentado-habanero": {
    glass: "Small bottle — use with caution",
    serve: "Drops — not spoonfuls. It's VERY spicy.",
    tip: "Wear gloves when handling habanero. Capsaicin doesn't wash off with water — use milk.",
  },
  "molho-suave-aguacate": {
    glass: "Bowl or squeeze bottle",
    serve: "Creamy and mild — perfect for kids.",
    tip: "Add sour cream to stabilize the green color for longer.",
  },
  "molho-defumado-chipotle": {
    glass: "Squeeze bottle or jar",
    serve: "As a dipping sauce or drizzle.",
    tip: "One can of chipotle goes a long way — freeze the rest in portions.",
  },
  "caldo-camaron": {
    glass: "Deep bowl",
    serve: "The shrimp should be pink and firm — don't overcook.",
    tip: "The shell broth is the secret — it has more flavor than the shrimp themselves.",
  },
  "caldo-tlalpeno": {
    glass: "Bowl with toppings",
    serve: "Panela cheese cubes in the hot broth.",
    tip: "Chickpeas should be well cooked — use canned if needed.",
  },
  "helado-nieve": {
    glass: "Cone or cup",
    serve: "Artisanal and creamy — no ice crystals.",
    tip: "Stir every 30 min during freezing for creamy texture.",
  },
  "mazapan": {
    glass: "Individual packaging",
    serve: "Melts in your mouth — handle delicately.",
    tip: "The peanuts must become fine powder — too coarse and it won't hold together.",
  },
  "pastel-tres-leches": {
    glass: "Deep plate — it releases liquid",
    serve: "Soaked but not crumbling. Generous whipped cream.",
    tip: "Poke plenty of holes with a fork to absorb the 3 milks evenly.",
  },
  "alegrias": {
    glass: "Packaging or plate",
    serve: "Crunchy and sweet bars.",
    tip: "The honey should be at thread stage — too hot and it burns the amaranth.",
  },
  "tacos-camarao": {
    glass: "Basket or plate",
    serve: "Serve immediately — the crunch is fleeting.",
    tip: "Cold beer batter + hot oil = perfect coating.",
  },
  "tacos-veganos": {
    glass: "Plate or tray",
    serve: "Colorful and fresh — the cauliflower should be golden.",
    tip: "Roast at high temperature (425°F) to caramelize without softening.",
  },
  "tacos-gourmet": {
    glass: "Presentation plate",
    serve: "Micro-greens and sauce glaze for premium presentation.",
    tip: "4h of slow cooking is non-negotiable — there's no shortcut for perfect ribs.",
  },
  "pupusas-mex": {
    glass: "Simple plate",
    serve: "Hot from the griddle with beans and salsa.",
    tip: "Brush with lard for extra shine and flavor.",
  },
  "chalupas": {
    glass: "Plate",
    serve: "Small and crispy — perfect finger food.",
    tip: "Small discs — smaller than sopes. They should be flat.",
  },
  "michelada": {
    glass: "Large glass with salt and tajín rim",
    serve: "Ice cold with plenty of ice.",
    tip: "The quality of Clamato makes all the difference — Mexican Clamato is best.",
  },
  "margarita": {
    glass: "Coupe or rocks glass with salt rim",
    serve: "Shake well in a shaker with ice.",
    tip: "Use 100% agave tequila — mixtos compromise the flavor.",
  },
  "pulque": {
    glass: "Glass or jícara",
    serve: "Fresh and slightly tart.",
    tip: "Pulque can't be industrialized — it only exists artisanal and fresh.",
  },
  "camarones-coconut": {
    glass: "Plate with mango salsa",
    serve: "The mango + habanero salsa is the perfect balance.",
    tip: "Double breading (flour → egg → coconut) for a thick coating.",
  },
  "zarandeado": {
    glass: "Large plate — whole fish",
    serve: "Whole at the table — impressive visual.",
    tip: "Red snapper or huachinango are the ideal fish. The skin should be crispy.",
  },
  "frijoles-puercos": {
    glass: "Clay bowl",
    serve: "Brothy with all toppings visible.",
    tip: "It's the 'everything in' version — the more ingredients, the better.",
  },
  "huevos-motulenos": {
    glass: "Large plate — many components",
    serve: "Everything stacked: tortilla, beans, egg, salsa, banana.",
    tip: "Yes, fried banana is essential — the sweet pairs with the savory.",
  },
  "chilaquiles-especiais": {
    glass: "Deep plate",
    serve: "Oaxaca cheese should melt over the chilaquiles.",
    tip: "Add the cheese 2 min before serving to melt without burning.",
  },
  "quesadillas-flor": {
    glass: "Plate or wooden board",
    serve: "The squash blossom should be visible through the melted cheese.",
    tip: "Sauté the blossoms with epazote first — raw blossoms release too much moisture.",
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
  "tacos-pollo": {
    glass: "Plato hondo con salsa al lado",
    serve: "Deshilachar el pollo en hebras medianas para mantener la jugosidad.",
    tip: "El chipotle da el sabor ahumado — empiece con 1 chile y ajuste. Demasiado chipotle domina todo.",
  },
  "tacos-pescado": {
    glass: "Cesta forrada o plato",
    serve: "Sirva inmediatamente — lo crujiente es efímero.",
    tip: "La masa de cerveza debe estar fría y el aceite muy caliente (180°C). Pescado firme como robalo funciona mejor.",
  },
  "tacos-chorizo": {
    glass: "Plato simple con limones",
    serve: "El chorizo debe estar bien frito, casi crujiente.",
    tip: "Retire de la tripa para desmenuzar en la sartén. El chorizo de calidad no necesita aceite — tiene suficiente grasa.",
  },
  "tacos-lengua": {
    glass: "Plato rústico",
    serve: "Corte la lengua en cubos pequeños y séllela en la plancha.",
    tip: "Cocine hasta poder pinchar fácilmente con un tenedor. La piel se quita fácil cuando está caliente.",
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
  "sopes": {
    glass: "Plato de barro",
    serve: "Monte al momento — la base crujiente es importante.",
    tip: "Levante los bordes mientras la masa aún está caliente — se enfría rápido y se quiebra.",
  },
  "gorditas": {
    glass: "Plato simple",
    serve: "Abra con cuidado para no romper y rellene generosamente.",
    tip: "La masa debe ser más gruesa que una tortilla normal — por eso se llama 'gordita'.",
  },
  "elotes": {
    glass: "Servido en el elote o en vaso (esquites)",
    serve: "Mucho queso cotija y chile. El limón es esencial.",
    tip: "Ase a la brasa para sabor ahumado. La mayonesa japonesa (Kewpie) es el upgrade secreto.",
  },
  "tostadas": {
    glass: "Plato — ¡cuidado, se desmorona!",
    serve: "Monte alto y coma sobre el plato. Se va a ensuciar — es parte de la experiencia.",
    tip: "La tostada debe estar completamente plana y crujiente. Las tortillas viejas fríen mejor.",
  },
  "pozole-rojo": {
    glass: "Tazón grande de barro",
    serve: "Acompañamientos en la mesa: lechuga, rábano, orégano, tostadas, limón y chile.",
    tip: "El maíz pozolero debe estar abierto como flor — señal de que está bien cocido.",
  },
  "sopa-tortilla": {
    glass: "Tazón de barro con toppings",
    serve: "Las tiras de tortilla deben añadirse al momento de servir.",
    tip: "Ase los tomates en el comal hasta carbonizar — esto da profundidad al caldo.",
  },
  "menudo": {
    glass: "Tazón muy grande",
    serve: "Orégano, cebolla, limón y chile — la mesa debe parecer un buffet de condimentos.",
    tip: "Lave la panza muchas veces. La cocción larga elimina cualquier olor.",
  },
  "caldo-de-pollo": {
    glass: "Tazón grande con arroz al lado",
    serve: "Sirva el arroz por separado — cada persona pone la cantidad deseada.",
    tip: "No quite la espuma del caldo — contiene sabor. Use fuego bajo para caldo claro.",
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
  "carne-en-su-jugo": {
    glass: "Tazón hondo",
    serve: "El tocino debe quedar crujiente encima — contraste de texturas.",
    tip: "Selle la carne a fuego muy alto para mantener los jugos dentro.",
  },
  "guacamole": {
    glass: "Molcajete (mortero de piedra volcánica)",
    serve: "Hecho al momento, frente al cliente. Con totopos frescos.",
    tip: "NUNCA use licuadora — el guacamole debe tener trozos. Aguacate maduro pero firme.",
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
  "pico-de-gallo": {
    glass: "Tazón o directamente en el plato",
    serve: "Fresco y crujiente — prepare máximo 30 min antes de servir.",
    tip: "Todos los ingredientes deben tener el mismo tamaño — la uniformidad es clave.",
  },
  "mole-negro": {
    glass: "Plato de barro",
    serve: "Sirva sobre pavo o pollo con arroz. Espolvoree ajonjolí.",
    tip: "Quemar las semillas de chile es lo que da el color negro — parece error pero es la técnica correcta.",
  },
  "churros": {
    glass: "Plato con papel absorbente",
    serve: "Calientes, crujientes y sumergidos en chocolate espeso.",
    tip: "La masa debe estar espesa — si la churrera es difícil de apretar, está en el punto correcto.",
  },
  "flan-mexicano": {
    glass: "Plato de cerámica con caramelo escurriendo",
    serve: "Desmolde frío. El caramelo debe escurrir como salsa.",
    tip: "El baño maría es obligatorio. Si el flan tiene hoyitos, la temperatura estaba muy alta.",
  },
  "tres-leches": {
    glass: "Plato hondo — el pastel suelta líquido",
    serve: "Debe estar empapado pero sin desmoronarse. Crema batida generosa.",
    tip: "El secreto es un bizcocho bien aireado — absorbe las 3 leches sin deshacerse.",
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
  "huevos-divorciados": {
    glass: "Plato dividido a la mitad",
    serve: "La separación visual es importante — salsa verde de un lado, roja del otro.",
    tip: "Use frijoles como 'muro' entre los dos huevos divorciados.",
  },
  "arroz-con-leche": {
    glass: "Tazón con canela espolvoreada",
    serve: "Puede ser caliente o frío — ambas versiones son deliciosas.",
    tip: "Revuelva constantemente para que el arroz no se pegue. La leche condensada va al final.",
  },
  "agua-horchata": {
    glass: "Vaso grande con hielo",
    serve: "Bien fría, cremosa y dulce. Perfecta con comida picante.",
    tip: "Deje en remojo 8 horas — el arroz libera almidón que da la cremosidad.",
  },
  "agua-jamaica": {
    glass: "Vaso grande con hielo",
    serve: "Rojo rubí y refrescante. Ajuste azúcar al gusto.",
    tip: "No cocine de más las flores — 10 min basta. El exceso de cocción amarga.",
  },
  "chocolate-mexicano": {
    glass: "Taza de barro (jarro)",
    serve: "Espumoso y caliente. Acompañe con pan dulce.",
    tip: "El molinillo crea espuma imposible de replicar con batidor normal.",
  },
  "ceviche-mexicano": {
    glass: "Vaso grande o plato hondo",
    serve: "Con tostadas y aguacate. El limón 'cocina' el pescado.",
    tip: "30 min en limón es suficiente — más que eso y el pescado queda chicloso.",
  },
  "camarones-diabla": {
    glass: "Plato hondo con arroz",
    serve: "Tenga limón y tortillas para aminorar lo picante.",
    tip: "No cocine los camarones de más — 2-3 min por lado es suficiente.",
  },
  "frijoles-charros": {
    glass: "Tazón de barro",
    serve: "Caldoso, con pedazos de tocino y chorizo visibles.",
    tip: "La cerveza añade un amargor sutil — use cerveza clara tipo lager.",
  },
  "frijoles-refritos": {
    glass: "Plato con queso desmoronado",
    serve: "Cremoso y brillante. Debe soltarse de la sartén.",
    tip: "La manteca de cerdo es el ingrediente secreto — da sabor imposible con aceite vegetal.",
  },
  "tamales-dulces": {
    glass: "En la propia hoja de maíz",
    serve: "Con café o atole caliente.",
    tip: "El colorante rosa es tradición — sin él, no es un tamal dulce de verdad.",
  },
  "empanadas-mexicanas": {
    glass: "Plato con salsa al lado",
    serve: "Calientes y crujientes. El relleno debe estar bien sazonado.",
    tip: "Si fríe, el aceite debe estar a 170°C. Si hornea, pincele con huevo para dorar.",
  },
  "tortilla-milho": {
    glass: "Cesto con trapo (tortillero)",
    serve: "Calientes, directamente del comal. Deben inflarse al cocinar.",
    tip: "La proporción es 2:1¼ (masa:agua). Si la masa se agrieta en los bordes, añada más agua.",
  },
  "tortilla-trigo": {
    glass: "Tortillero o trapo limpio",
    serve: "Calientes y flexibles — deben doblarse sin romperse.",
    tip: "La manteca hace toda la diferencia en la textura. Repose la masa 30 min para que el gluten se relaje.",
  },
  "gorditas-base": {
    glass: "Plato simple",
    serve: "Abra con cuidado y rellene generosamente.",
    tip: "La masa debe ser más gruesa que una tortilla — 2cm. Abra mientras está caliente.",
  },
  "sopes-base": {
    glass: "Plato de barro",
    serve: "Monte al momento para mantener lo crujiente.",
    tip: "Levante los bordes inmediatamente después de sacar del comal — se enfrían rápido.",
  },
  "tlacoyos-base": {
    glass: "Plato con salsa",
    serve: "Cubra con nopales y queso fresco.",
    tip: "El relleno va dentro de la masa antes de cocinar — no es cobertura.",
  },
  "tostadas-base": {
    glass: "Plato o cesta",
    serve: "Completamente planas y crujientes.",
    tip: "Las tortillas viejas fríen mejor. El aceite debe estar a 180°C.",
  },
  "enchiladas-verdes": {
    glass: "Cazuela de barro",
    serve: "Cubra generosamente con crema y queso.",
    tip: "Los tomatillos cocidos son menos ácidos. Para más frescura, úselos crudos.",
  },
  "burritos": {
    glass: "Envuelto en papel aluminio",
    serve: "Debe ser grande para ser una comida completa.",
    tip: "Caliente la tortilla de harina en el comal para que sea flexible — si no, se romperá.",
  },
  "chimichangas": {
    glass: "Plato con guacamole y crema",
    serve: "Crujiente por fuera, jugoso por dentro.",
    tip: "Asegure bien con palillos antes de freír — si se abre, el relleno se escapa en el aceite.",
  },
  "quesadillas-trad": {
    glass: "Plato o tabla",
    serve: "El queso debe estar completamente derretido.",
    tip: "La flor de calabaza salteada con epazote es el relleno más tradicional de la CDMX.",
  },
  "fajitas": {
    glass: "Plancha de hierro humeante",
    serve: "La presentación humeante es esencial — caliente la plancha antes.",
    tip: "Corte siempre contra las fibras de la carne para máxima suavidad.",
  },
  "chilaquiles-rojos": {
    glass: "Plato hondo con huevo",
    serve: "Al dente — no completamente suaves. Sirva inmediatamente.",
    tip: "Use totopos gruesos que aguanten la salsa sin desmoronarse.",
  },
  "pozole-blanco": {
    glass: "Tazón grande",
    serve: "Con todos los acompañamientos en la mesa.",
    tip: "Sin chile — el sabor viene de la carne y el maíz pozolero. Perfecto para niños.",
  },
  "enchiladas-suizas": {
    glass: "Refractario gratinado",
    serve: "Calientes del horno con queso burbujeando.",
    tip: "La crema suaviza la acidez del tomatillo — eso es lo 'suizo' del nombre.",
  },
  "tamales-verdes": {
    glass: "En la propia hoja de maíz",
    serve: "Acompañe con atole caliente.",
    tip: "La masa debe flotar en el agua. Bata más manteca si se hunde.",
  },
  "enfrijoladas-trad": {
    glass: "Plato hondo",
    serve: "La salsa de frijol debe ser sedosa y caliente.",
    tip: "Use frijol negro con epazote — el sabor es insustituible.",
  },
  "mole-amarillo": {
    glass: "Plato de barro",
    serve: "Espesado con masa — textura aterciopelada.",
    tip: "El chilcostle es esencial y difícil de encontrar fuera de Oaxaca — el chile ancho es sustituto.",
  },
  "queijo-oaxaca": {
    glass: "Olla de barro caliente",
    serve: "El queso debe hacer hilos largos al servir.",
    tip: "El queso Oaxaca se enrolla en bola como hilo — deshiláchelo antes de usar.",
  },
  "queso-fundido": {
    glass: "Olla de barro burbujeante",
    serve: "Sirva inmediatamente — se endurece rápido.",
    tip: "Use queso Chihuahua para derretido perfecto. El Oaxaca también funciona.",
  },
  "queijo-cotija": {
    glass: "Desmoronado sobre platos",
    serve: "No se derrite — úselo desmoronado como parmesano.",
    tip: "El verdadero Cotija viene de Michoacán y tiene denominación de origen.",
  },
  "recheio-picadillo": {
    glass: "Tazón para relleno",
    serve: "Versátil — use en chiles, empanadas, tacos.",
    tip: "Las pasas y aceitunas son el toque especial que diferencia al picadillo mexicano.",
  },
  "recheio-tinga": {
    glass: "Tazón para relleno",
    serve: "Deshilache el pollo en hebras medianas.",
    tip: "El chipotle en adobo ya tiene salsa — use la salsa de la lata para más sabor.",
  },
  "recheio-rajas": {
    glass: "Tazón cremoso",
    serve: "Cremoso con tiras de poblano visibles.",
    tip: "Ase el poblano hasta que la piel se ampole y se ponga negra — pero no queme la carne.",
  },
  "recheio-vegano": {
    glass: "Tazón",
    serve: "Colorido y fresco — monte al último momento.",
    tip: "Ase los nopales hasta que se les quite TODA la baba — la paciencia aquí es fundamental.",
  },
  "carnitas-michoacan": {
    glass: "Plato de barro o bandeja",
    serve: "Mezcle cortes suaves y crujientes para variedad de texturas.",
    tip: "La olla de cobre de Michoacán conduce el calor uniformemente — use olla gruesa.",
  },
  "pollo-asado-mex": {
    glass: "Tabla de cortar",
    serve: "La piel debe estar crujiente y roja de la marinada.",
    tip: "Marine por mínimo 12h — el achiote necesita tiempo para penetrar.",
  },
  "bistec-ranchero": {
    glass: "Plato con tortillas",
    serve: "La salsa ranchera debe cubrir la carne.",
    tip: "Selle la carne primero a fuego alto — después cocine en la salsa.",
  },
  "arrachera": {
    glass: "Tabla humeante",
    serve: "Corte contra las fibras en tiras finas.",
    tip: "La cerveza en la marinada ablanda las fibras. No pase de cocción — debe quedar al punto.",
  },
  "cecina-yecapixtla": {
    glass: "Plato con guacamole",
    serve: "Rápida a la brasa — 2-3 min por lado.",
    tip: "La cecina ya está salada — no añada sal. El guacamole equilibra.",
  },
  "tasajo-oaxaca": {
    glass: "Plato con nopales",
    serve: "Carne fina y rápida de asar.",
    tip: "Compre tasajo en los mercados de Oaxaca — la calidad varía mucho.",
  },
  "suadero-guisado": {
    glass: "Plato con tortillas",
    serve: "Fría hasta que quede crujiente por fuera.",
    tip: "El suadero es un corte único — entre la costilla y la piel. Textura inimitable.",
  },
  "historia-taco": {
    glass: "Lectura — no es receta",
    serve: "Acompañe con tacos de verdad mientras lee.",
    tip: "La historia del taco es la historia de México — cada región cuenta su versión.",
  },
  "cultura-pimenta": {
    glass: "Lectura educativa",
    serve: "Tenga los chiles en mano para comparar.",
    tip: "Empiece con poblano (suave) y suba gradualmente hasta habanero (extremo).",
  },
  "historia-mole": {
    glass: "Lectura cultural",
    serve: "Pruebe un mole mientras lee sobre su historia.",
    tip: "Cada mole cuenta una historia de 500 años de fusión cultural.",
  },
  "dia-muertos": {
    glass: "Lectura cultural",
    serve: "Monte una ofrenda con las comidas mencionadas.",
    tip: "La ofrenda debe incluir la comida favorita del ser querido — es personal.",
  },
  "regioes-gastronomicas": {
    glass: "Lectura educativa",
    serve: "Use como guía para planear viajes gastronómicos.",
    tip: "Cada estado merece al menos una semana de exploración culinaria.",
  },
  "festivais-mexicanos": {
    glass: "Lectura informativa",
    serve: "Planee viajes alrededor de los festivales.",
    tip: "La Guelaguetza en julio es la experiencia cultural más completa.",
  },
  "curso-basico": {
    glass: "Curso completo — 6 módulos",
    serve: "Siga el orden de los módulos para mejor aprendizaje.",
    tip: "Domine tortillas y frijoles antes que nada — son la base del 80% de la cocina mexicana.",
  },
  "curso-intermediario": {
    glass: "Curso completo — 6 módulos",
    serve: "Practique cada módulo 2-3 veces antes de avanzar.",
    tip: "El tamal es el termómetro del cocinero mexicano — si hace buenos tamales, está listo.",
  },
  "curso-avancado": {
    glass: "Masterclass — 6 módulos",
    serve: "Reserve días enteros para módulos complejos como mole negro.",
    tip: "El mole negro lleva 3 días — no hay atajos. La paciencia es el ingrediente secreto.",
  },
  "tecnica-tortilla-pro": {
    glass: "Clase práctica intensiva",
    serve: "Practique con masa harina antes de usar nixtamal fresco.",
    tip: "La prensa de tortillas es inversión esencial. La tortilla perfecta se infla en la tercera vuelta.",
  },
  "tecnica-molhos-salsas": {
    glass: "Clase práctica — 10 salsas",
    serve: "Haga todas las salsas en una tarde para comparar sabores.",
    tip: "El molcajete da textura rústica imposible en licuadora — vale la inversión.",
  },
  "uso-pimentas-pro": {
    glass: "Clase técnica — 15 chiles",
    serve: "Tenga todos los chiles en mano para comparar aroma, color y sabor.",
    tip: "Nunca queme los chiles — tueste ligeramente por 10-15 segundos. Quemado = amargo.",
  },
  "fermentacoes-mex": {
    glass: "Clase práctica — 3 a 7 días",
    serve: "Empiece con tepache — es el más fácil y perdonador.",
    tip: "Temperatura de 25-30°C es ideal. Muy frío = fermentación lenta. Muy caliente = vinagre.",
  },
  "processos-tradicionais": {
    glass: "Clase teórico-práctica",
    serve: "Busque utensilios artesanales auténticos en mercados mexicanos.",
    tip: "Un molcajete nuevo necesita 'curarse' — muela arroz hasta que no salga más polvo.",
  },
  "conservacao-alimentos": {
    glass: "Clase técnica",
    serve: "La higiene es fundamental — esterilice todos los recipientes.",
    tip: "Los chiles secos duran años si se almacenan en lugar seco y oscuro.",
  },
  "producao-artesanal": {
    glass: "Taller de producción",
    serve: "Empiece con lotes pequeños para probar recetas antes de escalar.",
    tip: "El empaque profesional aumenta el valor percibido en un 40% — invierta en él.",
  },
  "molho-apimentado-habanero": {
    glass: "Frasco pequeño — use con precaución",
    serve: "Gotas — no cucharadas. Es MUY picante.",
    tip: "Use guantes al manejar habanero. La capsaicina no se quita con agua — use leche.",
  },
  "molho-suave-aguacate": {
    glass: "Tazón o botella squeeze",
    serve: "Cremosa y suave — perfecta para niños.",
    tip: "Añada crema ácida para estabilizar el color verde por más tiempo.",
  },
  "molho-defumado-chipotle": {
    glass: "Botella squeeze o frasco",
    serve: "Como dipping sauce o drizzle.",
    tip: "Una lata de chipotle rinde mucho — congele el resto en porciones.",
  },
  "caldo-camaron": {
    glass: "Tazón hondo",
    serve: "Los camarones deben quedar rosados y firmes — no cocine de más.",
    tip: "El caldo de las cáscaras es el secreto — tiene más sabor que los camarones.",
  },
  "caldo-tlalpeno": {
    glass: "Tazón con toppings",
    serve: "Cubos de queso panela en el caldo caliente.",
    tip: "Los garbanzos deben estar bien cocidos — use de lata si es necesario.",
  },
  "helado-nieve": {
    glass: "Cono o vaso",
    serve: "Artesanal y cremoso — sin cristales de hielo.",
    tip: "Revuelva cada 30 min durante el congelamiento para textura cremosa.",
  },
  "mazapan": {
    glass: "Empaque individual",
    serve: "Se deshace en la boca — manéjelo con delicadeza.",
    tip: "El cacahuate debe volverse polvo fino — muy grueso y no se compacta.",
  },
  "pastel-tres-leches": {
    glass: "Plato hondo — suelta líquido",
    serve: "Empapado pero sin desmoronarse. Crema batida generosa.",
    tip: "Pique bastante con tenedor para absorber las 3 leches uniformemente.",
  },
  "alegrias": {
    glass: "Empaque o plato",
    serve: "Barritas crujientes y dulces.",
    tip: "La miel debe estar a punto de hilo — muy caliente quema el amaranto.",
  },
  "tacos-camarao": {
    glass: "Cesta o plato",
    serve: "Sirva inmediatamente — lo crujiente es efímero.",
    tip: "Masa de cerveza fría + aceite caliente = empanizado perfecto.",
  },
  "tacos-veganos": {
    glass: "Plato o bandeja",
    serve: "Colorido y fresco — la coliflor debe estar dorada.",
    tip: "Ase a temperatura alta (220°C) para caramelizar sin ablandar.",
  },
  "tacos-gourmet": {
    glass: "Plato de presentación",
    serve: "Micro-greens y glaseado de salsa para presentación premium.",
    tip: "4h de cocción lenta es innegociable — no hay atajo para costilla perfecta.",
  },
  "pupusas-mex": {
    glass: "Plato simple",
    serve: "Calientes de la plancha con frijoles y salsa.",
    tip: "Pincele con manteca para brillo y sabor extra.",
  },
  "chalupas": {
    glass: "Plato",
    serve: "Pequeñas y crujientes — finger food perfecto.",
    tip: "Discos pequeños — más chicos que sopes. Deben ser planos.",
  },
  "michelada": {
    glass: "Vaso grande con borde de sal y tajín",
    serve: "Bien fría con bastante hielo.",
    tip: "La calidad del Clamato hace toda la diferencia — el Clamato mexicano es mejor.",
  },
  "margarita": {
    glass: "Copa coupe o vaso rocks con borde de sal",
    serve: "Agite bien en la coctelera con hielo.",
    tip: "Use tequila 100% agave — los mixtos comprometen el sabor.",
  },
  "pulque": {
    glass: "Vaso o jícara",
    serve: "Fresco y ligeramente ácido.",
    tip: "El pulque no se puede industrializar — solo existe artesanal y fresco.",
  },
  "camarones-coconut": {
    glass: "Plato con salsa de mango",
    serve: "La salsa de mango + habanero es el equilibrio perfecto.",
    tip: "Doble empanizado (harina → huevo → coco) para cobertura gruesa.",
  },
  "zarandeado": {
    glass: "Plato grande — pescado entero",
    serve: "Entero en la mesa — visual impresionante.",
    tip: "El pargo o huachinango son los pescados ideales. La piel debe quedar crujiente.",
  },
  "frijoles-puercos": {
    glass: "Tazón de barro",
    serve: "Caldoso con todos los toppings visibles.",
    tip: "Es la versión 'todo junto' — cuantos más ingredientes, mejor.",
  },
  "huevos-motulenos": {
    glass: "Plato grande — muchos componentes",
    serve: "Todo apilado: tortilla, frijoles, huevo, salsa, plátano.",
    tip: "Sí, el plátano frito es esencial — lo dulce combina con lo salado.",
  },
  "chilaquiles-especiais": {
    glass: "Plato hondo",
    serve: "El queso Oaxaca debe derretirse sobre los chilaquiles.",
    tip: "Añada el queso 2 min antes de servir para derretir sin quemar.",
  },
  "quesadillas-flor": {
    glass: "Plato o tabla de madera",
    serve: "La flor de calabaza debe ser visible a través del queso derretido.",
    tip: "Saltee las flores con epazote primero — las flores crudas sueltan demasiada humedad.",
  },
};

const translationMaps: Record<string, Record<string, ChefTip>> = {
  en: { ...chefTipsEN, ...chefTipsBatch8_18EN },
  es: { ...chefTipsES, ...chefTipsBatch8_18ES },
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
