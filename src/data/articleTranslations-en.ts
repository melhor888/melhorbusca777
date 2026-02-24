export interface ArticleTranslation {
  title: string;
  subtitle: string;
  modules: { title: string; content: string }[];
}

export const articleTranslationsEN: Record<string, ArticleTranslation> = {
  // ===== FUNDAMENTOS (20) =====
  "guia-milho-mexicano": {
    title: "Complete Guide to Mexican Corn",
    subtitle: "The sacred ingredient that sustains all of Mexican cuisine",
    modules: [
      { title: "Corn is sacred", content: "In Mayan mythology, humans were created from corn. Mexico has over 60 native corn varieties: white, yellow, blue, red, black, and multicolored. The process of nixtamalization — cooking corn with lime (calcium hydroxide) — was invented over 3,500 years ago and is what makes corn nutritious and pliable for tortillas." },
      { title: "Masa and tortillas", content: "Masa (nixtamalized corn dough) is the base of everything: tortillas, tamales, sopes, gorditas, tlacoyos, huaraches, and pupusas. An artisanal corn tortilla, handmade at the tortillera, is incomparable to the industrial version. Each region has its preferred corn — blue corn from Oaxaca is especially prized. Without corn, Mexico doesn't exist." },
    ],
  },
  "guia-chiles-mexicanos": {
    title: "Complete Guide to Mexican Chiles",
    subtitle: "Over 60 varieties — each with its own personality",
    modules: [
      { title: "Fresh vs dried chiles", content: "Each chile changes its name when dried: Poblano → Ancho, Jalapeño → Chipotle, Chilaca → Pasilla, Mirasol → Guajillo. Fresh: Poblano (mild), Serrano (medium), Jalapeño (medium), Habanero (extreme). Dried: Ancho (sweet), Guajillo (fruity), Chipotle (smoky), Pasilla (bitter), Chile de Árbol (fiery)." },
      { title: "How to use each chile", content: "Ancho: base for mole, adobo, and salsas. Guajillo: red salsas, pozole, birria. Chipotle: smoky sauces, marinades. Pasilla: mole negro, table salsas. Habanero: Yucatán salsas with bitter orange. Morita: a less intense version of chipotle. To use dried: toast briefly, hydrate in hot water for 20 min, blend." },
    ],
  },
  "guia-feijao-mexicano": {
    title: "Beans in Mexican Cuisine",
    subtitle: "Black, pinto, bayo, peruano — each in its place",
    modules: [
      { title: "Types of beans", content: "Black beans: dominant in the south (Oaxaca, Yucatán, Veracruz), earthy and deep flavor. Pinto beans: king of the north, for frijoles charros and refritos. Bayo beans: mild and creamy. Peruano beans: yellowish, used in broths. Epazote is the herb that defines Mexican beans — besides adding flavor, it aids digestion." },
      { title: "Classic preparations", content: "Frijoles de olla: soupy, simple, with epazote. Frijoles refritos: mashed and fried in lard. Frijoles charros: soupy with bacon, chorizo, and sausage. Frijoles puercos: the most indulgent version. NEVER add salt at the beginning — it hardens the beans. Salt goes in only when they're already soft." },
    ],
  },
  "guia-tortillas": {
    title: "The Art of the Perfect Tortilla",
    subtitle: "Corn vs flour — techniques and secrets",
    modules: [
      { title: "Corn tortilla", content: "Uses masa harina (nixtamalized corn flour). Ratio: 2 cups masa to 1¼ cups warm water. The dough should be pliable like Play-Doh, without cracking at the edges. Press in a tortilla press between plastic sheets. Cook on a hot griddle for 1 min per side. The sign of perfection: the tortilla puffs up forming an air bubble." },
      { title: "Flour tortilla", content: "Originating from northern Mexico (Sonora, Chihuahua). Uses wheat flour + lard for softness. Lard is irreplaceable — margarine doesn't give the same result. Rest the dough for 30 min before rolling. More flexible than corn, perfect for burritos and large quesadillas." },
    ],
  },
  "guia-queijos-mexicanos": {
    title: "Mexican Cheeses",
    subtitle: "Oaxaca, Cotija, Chihuahua, Panela, and more",
    modules: [
      { title: "Essential cheeses", content: "Queso Oaxaca: the 'Mexican mozzarella', pulls long strings, perfect for quesadillas. Queso Cotija: dry and salty like Parmesan, for sprinkling on elotes and enchiladas. Queso Chihuahua (Mennonite): melts perfectly for fundido. Queso Panela: fresh and soft, doesn't melt. Queso Fresco: crumbled over everything. Requesón: creamy, for enchiladas and tlacoyos." },
    ],
  },
  "guia-tomatillos": {
    title: "Tomatillos and Tomatoes in Mexico",
    subtitle: "The two pillars of Mexican salsas",
    modules: [
      { title: "Tomatillo vs tomato", content: "Tomatillo (green tomato): fruit with a husk, acidic and fresh — the base of all salsa verde. Mexico is the center of origin of the tomato — the word comes from the Nahuatl 'tomatl'. Jitomate (red tomato): for salsas rojas, arroz rojo, stews. For salsas: roast on the griddle until charred for depth of flavor, or boil for smoothness." },
    ],
  },
  "guia-abacate-mexicano": {
    title: "Avocado and Guacamole",
    subtitle: "From Aztec ahuacatl to global superfood",
    modules: [
      { title: "The sacred fruit", content: "The word avocado comes from the Nahuatl 'ahuacatl'. Mexico is the world's largest producer — Michoacán accounts for 80% of production. The Hass variety is the most popular. Authentic guacamole is made in a molcajete: avocado mashed with a fork (NEVER in a blender), tomato, onion, cilantro, serrano, lime, and salt. It should have chunks. Serve immediately — it oxidizes quickly." },
    ],
  },
  "guia-ervas-mexicanas": {
    title: "Mexican Herbs and Aromatics",
    subtitle: "Epazote, cilantro, hierba santa, hoja santa",
    modules: [
      { title: "Essential herbs", content: "Epazote: the most Mexican herb — irreplaceable in black beans and quesadillas. Cilantro: fresh, for salsas, tacos, and guacamole. Hierba santa (hoja santa): large, fragrant leaf for tamales and mole verde. Mexican oregano: different from Mediterranean, more earthy. Pápalo: strong-flavored herb, essential in Puebla's cemitas. Each herb has its dish — swapping them is a culinary sin." },
    ],
  },
  "guia-banha-gorduras": {
    title: "Fats in Mexican Cuisine",
    subtitle: "Lard, oil, and butter — each in its place",
    modules: [
      { title: "Lard is queen", content: "Pork lard (manteca) is the traditional Mexican fat — used in tamales, flour tortillas, refried beans, and carnitas. It gives unmatched flavor and texture. For frying totopos and tostadas, vegetable oil works. Butter is used for sweet tamales and some dishes of Spanish influence. NEVER substitute lard for margarine in tamales — the difference is abysmal." },
    ],
  },
  "guia-especiarias-mex": {
    title: "Mexican Spices",
    subtitle: "Cumin, oregano, achiote, cinnamon, and more",
    modules: [
      { title: "Fundamental spices", content: "Cumin: omnipresent in meats, salsas, and beans. Mexican oregano: different from Italian, more citrusy and minty. Achiote (annatto): red paste from Yucatán for cochinita pibil and tacos al pastor. Cinnamon (Ceylon): for chocolate, arroz con leche, and atole. Cloves and allspice: for moles and pipianes. Black pepper and bay leaf: for broths and meats." },
      { title: "Toasting is mandatory", content: "The golden rule of Mexican spices: ALWAYS toast before using. Heat on a dry griddle for 30 seconds until fragrant. This activates essential oils and intensifies flavor 3-4x. Never buy pre-ground when possible — grind fresh in a molcajete or coffee grinder." },
    ],
  },
  "guia-molcajete": {
    title: "Molcajete: The Mexican Mortar",
    subtitle: "Volcanic stone that transforms salsas and guacamole",
    modules: [
      { title: "The ancestral utensil", content: "Made from volcanic stone (basalt), the molcajete has been used for 7,000+ years. Before first use, 'cure' it by grinding rice and salt until the stone stops releasing grains. A salsa made in a molcajete has incomparable texture and flavor to a blender — the stone grinds fibers differently, releasing oils and aromas. In authentic restaurants, guacamole is prepared tableside in the molcajete." },
    ],
  },
  "guia-limao-mexicano": {
    title: "Lime in Mexico",
    subtitle: "There's no Mexican food without lime",
    modules: [
      { title: "Lime is mandatory", content: "The Mexican lime (key lime) is smaller, more acidic, and more aromatic than the Persian lime. It's present in EVERYTHING: tacos, soups, ceviches, beverages, salsas, marinades. Lime acid 'cooks' proteins in ceviche. Mineral water with lime is the most consumed drink. Salsa with little lime is incomplete salsa. In Mexico, even beer gets lime." },
    ],
  },
  "guia-nopal-cacto": {
    title: "Nopal: The Edible Cactus",
    subtitle: "An Aztec ingredient that is Mexican heritage",
    modules: [
      { title: "Cactus in cuisine", content: "The nopal is on Mexico's flag — it's a national symbol. It's extremely nutritious: fiber, vitamins, and low calorie. To prepare: remove the thorns, cut into strips, and grill or boil. The 'baba' (mucilaginous substance) comes out when grilling or boiling with onion skin. Used in tacos, salads, soups, and as a side for meats. Nopales with egg is a classic breakfast." },
    ],
  },
  "guia-piloncillo": {
    title: "Piloncillo and Mexican Sugars",
    subtitle: "The Mexican panela that sweetens moles and beverages",
    modules: [
      { title: "Piloncillo", content: "Piloncillo is unrefined cane sugar, sold in hard cones. More complex flavor than white sugar — caramel, honey, and molasses. Used in: champurrado, buñuelos, capirotada, café de olla, tepache, and churro syrup. To melt: grate or cook in hot water. There's no exact substitute — dark brown sugar is the closest, but not the same." },
    ],
  },
  "guia-chocolate-mexicano": {
    title: "Mexican Chocolate",
    subtitle: "The gift of the gods — from xocoatl to mole",
    modules: [
      { title: "The origin of chocolate", content: "The Aztecs and Maya drank chocolate (xocoatl) — bitter, with chili and vanilla. Mexico is the birthplace of chocolate. Mexican tablets (Abuelita, Ibarra) contain cinnamon and sugar. Chocolate is whipped with a molinillo (wooden whisk). Culinary uses: mole poblano, mole negro, champurrado, hot chocolate, and sweets. Cacao from Tabasco and Chiapas is among the finest in the world." },
    ],
  },
  "guia-arroz-mexicano": {
    title: "Rice in Mexican Cuisine",
    subtitle: "Arroz rojo, verde, and con leche — essential techniques",
    modules: [
      { title: "Mexican rice", content: "Mexican rice is FRIED before cooking — this is fundamental. Arroz Rojo: fried in oil, then cooked in tomato purée and chicken broth. Arroz Verde: with poblano, spinach, and cilantro. Arroz con Leche: creamy dessert with cinnamon and condensed milk. Golden rule: don't stir the rice during cooking! Each grain should be loose and individual." },
    ],
  },
  "guia-cebola-coentro": {
    title: "Onion, Cilantro, and Aromatics",
    subtitle: "The holy trinity of every taco",
    modules: [
      { title: "Base aromatics", content: "White onion: the quintessential Mexican onion — spicier than yellow, essential in raw salsas. Red onion: pickled in lime to accompany cochinita pibil and tacos. Fresh cilantro: the most important aromatic — without cilantro there's no authentic taco. Garlic: sautéed as the base of every stew. Green onion (cebollín): for soups and broths. This base appears in 90% of Mexican recipes." },
    ],
  },
  "guia-conservas-mex": {
    title: "Mexican Pickles and Preserves",
    subtitle: "Pickled onion, jalapeños, and chiles en escabeche",
    modules: [
      { title: "Essential preserves", content: "Pickled red onion: in lime and salt, companion to cochinita pibil. Jalapeños en escabeche: with carrot and onion, present on every taqueria table. Chipotle chiles in adobo: canned, smoked in tomato sauce. Rajas de poblano in vinegar: for tortas and tacos. Pickled nopales: practical for salads. Pickled habaneros: with onion and bitter orange — a Yucatecan explosion." },
    ],
  },
  "guia-carne-seca": {
    title: "Mexican Dried Meats",
    subtitle: "Cecina, tasajo, machaca, and chicharrón",
    modules: [
      { title: "Preservation traditions", content: "Cecina: salt-dried beef from Yecapixtla, Morelos. Tasajo: ultra-thin sliced dried meat from Oaxaca. Machaca: shredded dried meat from the north, for breakfast with eggs. Chicharrón: fried pork skin, crispy — for tacos, tlacoyos, and stews. Chicharrón prensado: a cooked version in salsa. Each technique preserves meat differently and creates unique flavors." },
    ],
  },

  // ===== TÉCNICAS (20) =====
  "tecnica-nixtamalizacao": {
    title: "Nixtamalization: The Sacred Process",
    subtitle: "How corn transforms into masa — 3,500 years of science",
    modules: [
      { title: "The process", content: "Cook corn in water with lime (calcium hydroxide) for 30-45 min, then soak for 8-12h. The lime softens the hull, releases niacin (vitamin B3) which prevents pellagra, and makes corn proteins more digestible. Without nixtamalization, populations dependent on corn became ill — Mesoamericans discovered this millennia before modern science." },
      { title: "From nixtamal to masa", content: "After soaking, wash the nixtamal until the water runs clear. Grind on a metate (grinding stone) or mill. The result is fresh masa — pliable, aromatic, and alive. Masa harina (industrialized flour) is convenient but inferior. The best Mexican restaurants use fresh masa every day. The texture and flavor are incomparable." },
    ],
  },
  "tecnica-salsas": {
    title: "The Art of Mexican Salsas",
    subtitle: "Preparation techniques that change everything",
    modules: [
      { title: "Preparation methods", content: "Raw salsa (pico de gallo): fresh chopped ingredients. Salsa asada: charred tomatoes and chiles on the griddle — deep, smoky flavor. Salsa cocida: boiled and blended ingredients — smoother. Salsa de molcajete: ground in stone — incomparable rustic texture. Salsa macha: chiles fried in oil with peanuts — keeps for months." },
      { title: "Golden rules", content: "1) Always roast the tomatoes/tomatillos before blending — depth of flavor. 2) Toast dried chiles for 30 sec (don't burn!) to activate flavor. 3) Salt and lime are the final balancers. 4) Salsa tastes better after resting 30 min. 5) In the molcajete, start with garlic and salt, then chile, then tomato. The order matters!" },
    ],
  },
  "tecnica-mole": {
    title: "The Art of Making Mole",
    subtitle: "30+ ingredients, hours of work, sublime result",
    modules: [
      { title: "The 7 moles of Oaxaca", content: "Negro: the most complex, with burnt chile seeds. Rojo: from chile ancho and guajillo. Coloradito: with chocolate and chile ancho. Amarillo: with hierba santa and masa for thickening. Verde: with pepitas and herbs. Chichilo: with chile chilhuacle and milpa. Manchamanteles: sweet-and-sour with tropical fruits." },
      { title: "Universal technique", content: "1) Toast and hydrate each chile SEPARATELY. 2) Toast dry spices. 3) Fry seeds and nuts. 4) Blend everything into a paste. 5) Fry the paste in hot oil (careful: it splatters!). 6) Gradually add broth. 7) Cook on low heat for 1-2h stirring constantly. Mole improves with time — it's even better the next day." },
    ],
  },
  "tecnica-tamales": {
    title: "The Art of Tamales",
    subtitle: "Beaten masa, perfect filling, and steam cooking",
    modules: [
      { title: "Tamale masa", content: "The secret is in BEATEN lard. Beat the lard for 10+ min until white and fluffy (test: a small ball should float in water). Mix with masa, hot broth, and salt. The consistency should be like soft butter. For sweet tamales, add sugar, food coloring, and raisins." },
      { title: "Assembly and cooking", content: "Hydrate corn husks in hot water for 30 min. Spread masa with a spoon, not your hand. Place filling in the center. Fold the sides and bottom tip. Steam for 1-1.5h — they're done when the masa easily pulls away from the husk. Never open during cooking! Tamales in banana leaves (Oaxaca, Yucatán) are more aromatic." },
    ],
  },
  "tecnica-carnitas": {
    title: "Carnitas: Mexican-Style Pork Confit",
    subtitle: "Cooking in its own fat to perfection",
    modules: [
      { title: "The Michoacán technique", content: "Use various cuts: leg, ribs, ear, stomach — each gives different texture. Cook in a large pot (ideally copper) with lard, orange juice, and Coca-Cola (or condensed milk). Medium heat for 2h until water evaporates. When the meat starts frying in the fat, increase heat to brown. The result: crispy outside, juicy inside. The meat should fall off the bone." },
    ],
  },
  "tecnica-birria": {
    title: "Birria: The Red Stew of Jalisco",
    subtitle: "Meat slowly cooked in chile broth",
    modules: [
      { title: "The birria technique", content: "Traditionally made with lamb, now more common with beef. Hydrate guajillo, ancho, and morita chiles. Blend with tomato, spices, and vinegar to create the adobo. Marinate the meat for 12h. Cook slowly for 3-4h in a covered pot until it falls apart. The consomé (broth) is as important as the meat — red, aromatic, and fatty. For quesabirria: dip the tortilla in consomé, grill with cheese and meat. Serve with consomé for dipping." },
    ],
  },
  "tecnica-barbacoa": {
    title: "Barbacoa: Ancestral Cooking",
    subtitle: "From the earth to the plate — a millennial technique",
    modules: [
      { title: "The traditional method", content: "True barbacoa is cooked in an earth oven (hoyo): dig a hole, heat with firewood until the stones glow red, place a pot to collect the consomé, cover with maguey leaves and the meat, seal with earth, and cook for 8-12h overnight. To adapt at home: marinate in adobo, wrap in banana leaves, and bake at 300°F for 5h. The barbacoa consomé with chickpeas is served as a starter." },
    ],
  },
  "tecnica-cochinita": {
    title: "Cochinita Pibil: The Buried Pork of Yucatán",
    subtitle: "Achiote, bitter orange, and banana leaf",
    modules: [
      { title: "Mayan technique", content: "'Pibil' means 'buried' in Mayan — originally cooked underground in a pib (stone oven). The achiote paste with bitter orange juice and spices gives the vibrant orange color. Marinate the meat for 12-24h. Wrap in banana leaves (which perfume the meat) and bake for 3-4h at 320°F. Shred and serve with pickled red onion and habanero. The tortilla must be corn and very hot." },
    ],
  },
  "tecnica-pozole": {
    title: "Pozole: The Sacred Soup",
    subtitle: "The Aztec ritual dish reinvented",
    modules: [
      { title: "Three colors of pozole", content: "Rojo (red): with guajillo and ancho chiles — the most popular. Verde (green): with tomatillo, pepitas, and poblano chile — from Guerrero. Blanco (white): without chile, pure broth — the oldest. Universal base: pork + hominy corn (cacahuazintle). The hominy must 'bloom' — cook until it opens like a flower. Serve with garnishes: lettuce, radish, oregano, tostadas, and lime. Each person seasons their own." },
    ],
  },
  "tecnica-tacos-arte": {
    title: "The Art of the Perfect Taco",
    subtitle: "Tortilla, meat, salsa — balance is everything",
    modules: [
      { title: "Taco secrets", content: "1) The tortilla must be small (5-6 inches) and HOT — never cold. 2) Double-tortilla for juicy tacos so they don't tear. 3) Onion and cilantro finely chopped. 4) Salsa in the right amount — enhance, don't hide. 5) Lime squeezed fresh. 6) Eat leaning forward. 7) The fat from the trompo/griddle should drip onto the tortilla. The best taco isn't the most expensive — it's the one with perfect balance between tortilla, meat, and salsa." },
    ],
  },
  "tecnica-chiles-rellenos": {
    title: "Chiles Rellenos: Complete Technique",
    subtitle: "Roast, peel, stuff, batter, and fry",
    modules: [
      { title: "The complete process", content: "1) Roast poblanos directly over flame until all skin is charred and blistered. 2) Place in a plastic bag for 10 min (the steam loosens the skin). 3) Remove skin under running water, make an incision and remove seeds WITHOUT tearing. 4) Stuff with Oaxaca cheese or picadillo. 5) Dust with flour. 6) Dip in egg white (beaten to stiff peaks). 7) Fry in hot oil until golden. 8) Serve with tomato caldillo." },
    ],
  },
  "tecnica-enchiladas": {
    title: "Enchiladas: Techniques and Variations",
    subtitle: "Rojas, verdes, suizas, mole — each region has its own",
    modules: [
      { title: "The enchilada technique", content: "1) Prepare the salsa (roja from guajillo, verde from tomatillo, or mole). 2) Briefly pass tortillas through hot oil to soften. 3) Dip in the salsa. 4) Fill with shredded chicken, cheese, or beans. 5) Roll and arrange in a baking dish. 6) Cover with more salsa. 7) Garnish with cream, cheese, and red onion. Variations: Suizas (creamy green sauce gratinéed), Enfrijoladas (bean sauce), Entomatadas (tomato sauce), Enmoladas (mole)." },
    ],
  },
  "tecnica-ceviche": {
    title: "Mexican Ceviche and Aguachile",
    subtitle: "The power of lime — cooking without fire",
    modules: [
      { title: "Acidification techniques", content: "Mexican ceviche: cubes of white fish in plenty of lime + tomato, onion, cucumber, cilantro, and serrano. Marinate for 30 min until the fish turns opaque. Aguachile: butterflied shrimp, lime sauce with blended serrano — more aggressive and spicier than ceviche. The lime acid denatures proteins (like cooking). Use ultra-fresh fish. Serve with tostadas, not a fork. Campechano: mixed seafood." },
    ],
  },
  "tecnica-grelhados-mex": {
    title: "Mexican Grilling: Al Carbon",
    subtitle: "Carne asada, arrachera, and the art of the ember",
    modules: [
      { title: "The art of Mexican grilling", content: "Carne asada: sirloin marinated in lime, garlic, and chile — grill over HIGH heat, rest 5 min before slicing against the grain. Arrachera (skirt steak): marinate in beer, lime, and chipotle for 4h+. Pollo asado: chicken marinated in chile adobo. Cebollas asadas: whole onion and jalapeños on the coals. The charcoal should have white-hot embers, no flames. Always cut AGAINST the grain." },
    ],
  },
  "tecnica-fritura-mexicana": {
    title: "Mexican Frying Techniques",
    subtitle: "Totopos, chicharrón, empanadas, and buñuelos",
    modules: [
      { title: "The art of frying", content: "Totopos: cut old tortillas into triangles, fry at 350°F until crispy — 10x better than industrial nachos. Chicharrón: pork skin boiled, dried, and fried — should expand 3x. Empanadas: dough with a crimped edge, fry until golden. Buñuelos: thin stretched dough, fried and covered with piloncillo syrup. Gorditas de masa: fried masa discs, split open and stuffed. Oil temperature is EVERYTHING — too low soaks, too high burns the outside." },
    ],
  },
  "tecnica-asar-chiles": {
    title: "Roasting and Hydrating Chiles",
    subtitle: "The base of almost every Mexican sauce",
    modules: [
      { title: "Fundamental technique", content: "Dried chiles: toast on a dry griddle for 15-30 sec (they should release aroma, NOT burn — they'll turn bitter). Remove seeds and veins (they control spiciness). Hydrate in hot water for 15-20 min. Blend with garlic, onion, and spices. Fresh chiles (poblano, serrano, habanero): roast directly over the stove flame, turning with tongs until all skin is charred and blistered. The roasted flavor is completely different from raw." },
    ],
  },
  "tecnica-caldos": {
    title: "Mexican Broths and Consomés",
    subtitle: "The liquid soul of Mexican cuisine",
    modules: [
      { title: "The great broths", content: "Caldo de pollo: chicken with vegetables — Mexico's universal remedy. Consomé de birria: red, fatty, aromatic — the hangover cure. Caldo de res: bone-in beef with assorted vegetables — a Sunday meal. Caldo tlalpeño: with chipotle, chickpeas, and avocado. Consomé de barbacoa: with chickpeas. All share the base: bone-in meat + onion + garlic + salt. The fat floating on the broth is flavor, not a flaw." },
    ],
  },
  "tecnica-fermentacao-mex": {
    title: "Mexican Fermentation",
    subtitle: "Tepache, pulque, mezcal, and more",
    modules: [
      { title: "Fermented beverages", content: "Tepache: pineapple peel with piloncillo, cinnamon, and cloves — ferments naturally for 3 days. Pulque: fermented agave sap — sacred Aztec drink with 2,000+ years of history. Pozol: fermented corn drink from Tabasco and Chiapas. Tejuino: fermented corn from Jalisco, served with lime and salt. Mexican fermentation is as old as Mesoamerican civilization itself." },
    ],
  },
  "tecnica-presentacao-mex": {
    title: "Mexican Food Presentation",
    subtitle: "Vibrant colors and visual abundance",
    modules: [
      { title: "Mexican visual principles", content: "Mexican food celebrates COLORS: green from cilantro and lime, white from cream and cheese, red from salsas, yellow from melted cheese. Serve in barro (clay pottery) when possible. Separate garnishes for each person to assemble. Abundance is a virtue — a full plate is a generous plate. The flag colors (green, white, red) appear naturally in dishes. Chiles en nogada are the supreme example of patriotic presentation." },
    ],
  },

  // ===== CULTURA (20) =====
  "historia-gastronomia-mexicana": {
    title: "History of Mexican Gastronomy",
    subtitle: "From the Aztecs to UNESCO — heritage of humanity",
    modules: [
      { title: "Pre-Hispanic roots", content: "Mexican cuisine is 10,000+ years old. Mesoamericans domesticated corn, beans, squash, chile, tomato, avocado, cacao, and vanilla. The 'milpa' (corn+beans+squash farming system) is one of the most sustainable in the world. The Aztecs had enormous markets (tianguis) — Hernán Cortés described Tlatelolco as larger than any European market." },
      { title: "UNESCO Heritage", content: "In 2010, Mexican cuisine was declared Intangible Cultural Heritage of Humanity by UNESCO — the first in the Americas. The recognition cites: ancestrality, traditional techniques (nixtamalization), cultivation of native ingredients, communal rituals, and generational transmission. Each Mexican region is a complete gastronomic universe." },
    ],
  },
  "cultura-dia-muertos": {
    title: "Day of the Dead and Food",
    subtitle: "The altar, pan de muerto, and the celebration of memory",
    modules: [
      { title: "Food on the altars", content: "Day of the Dead (November 1-2) is Mexico's most emblematic celebration. The ofrendas (altars) include: Pan de Muerto (sweet bread with 'bones'), mole, tamales, sugar skulls, fruits, hot chocolate, and the deceased's favorite food. It's believed that spirits return to eat the essence of the food. It's not mourning — it's a celebration with cempasúchil flowers (marigold), candles, and music." },
    ],
  },
  "cultura-taqueria": {
    title: "The Taqueria Culture",
    subtitle: "Where real Mexican food is born",
    modules: [
      { title: "The taqueria universe", content: "The taqueria is Mexico's gastronomic heart — more democratic than any restaurant. From corner stands to legendary spots. The taquero is an artist: mastering the trompo (vertical spit for al pastor), the griddle, the knife, and the lime. Huge lines = sign of quality. Best time: night (tacos nocturnos). Tacos de canasta for breakfast. Gorditas and sopes for lunch. Suadero and tripa for the brave." },
    ],
  },
  "cultura-mercados-mexicanos": {
    title: "Mexican Markets",
    subtitle: "The tianguis — 5,000 years of trading tradition",
    modules: [
      { title: "The great markets", content: "The tianguis (outdoor market) comes from the Aztecs — Tlatelolco had 60,000+ daily visitors. Today: Mercado de La Merced (CDMX) — Latin America's largest. Mercado de San Juan (CDMX) — gourmet ingredients. Mercado de Benito Juárez (Oaxaca) — moles, chapulines, and mezcal. Mercado de Lucas de Galvez (Mérida) — cochinita and Yucatecan recados. Eating at the market is a must — the fondas (stalls) serve extraordinary food at rock-bottom prices." },
    ],
  },
  "cultura-street-food": {
    title: "Mexican Street Food",
    subtitle: "The most diverse street food on the planet",
    modules: [
      { title: "The street universe", content: "Tacos in every form. Elotes and esquites. Tamales in the morning. Tortas of all kinds. Tlayudas in Oaxaca. Churros and buñuelos. Aguas frescas (horchata, jamaica, tamarindo). Candies: alegrías, mazapán, ate con queso. The street vendor with their cart is living heritage. The WHO considered Mexican street food surprisingly safe — turnover is so high that everything is always fresh." },
    ],
  },
  "cultura-regional-mexico": {
    title: "Regional Cuisine of Mexico",
    subtitle: "32 states, 32 gastronomic universes",
    modules: [
      { title: "The great regions", content: "Oaxaca: land of the 7 moles, chapulines, tlayudas, and mezcal. Yucatán: cochinita pibil, papadzules, sopa de lima — Mayan influence. Puebla: mole poblano, chiles en nogada, cemitas — birthplace of haute cuisine. CDMX: trompo tacos, suadero, quesabirria — taco capital. Jalisco: birria, tortas ahogadas, tequila. Michoacán: carnitas, corundas, uchepos. Sonora and Sinaloa: carne asada, burritos, seafood. Veracruz: seafood with African and Spanish influence." },
      { title: "North vs South", content: "North: carne asada, flour burritos, cabrito, machaca — cowboy and desert influence. South: moles, banana leaf tamales, chapulines, insects — indigenous and tropical influence. Center: synthesis of both. Each state has fierce pride in its dishes — saying another state's birria is better than Jalisco's could start a war." },
    ],
  },
  "cultura-bebidas-mexicanas": {
    title: "The Great Mexican Beverages",
    subtitle: "Tequila, mezcal, pulque, and aguas frescas",
    modules: [
      { title: "An overview", content: "Tequila: exclusively from blue agave, mainly from Jalisco. Mezcal: from various agaves, smoky, artisanal. Pulque: fermented agave sap, sacred Aztec drink. Aguas frescas: horchata (rice+cinnamon), jamaica (hibiscus), tamarindo, limón. Michelada: beer with lime, salt, salsa, and Clamato. Atole: hot corn-based drink with chocolate or fruit. Tepache: fermented pineapple. Mexican hot chocolate with molinillo. Each beverage has its perfect moment and companion dish." },
    ],
  },
  "cultura-insetos-comestiveis": {
    title: "Edible Insects in Mexico",
    subtitle: "Chapulines, escamoles, and gusanos — pre-Hispanic tradition",
    modules: [
      { title: "Mexican entomophagy", content: "Mexico has consumed insects for 3,000+ years — it's not novel, it's tradition. Chapulines: grasshoppers toasted with garlic, lime, and chile — crunchy and flavorful, from Oaxaca. Escamoles: ant larvae — 'Mexican caviar', nutty flavor. Gusanos de maguey: maguey worms — fried or in mezcal salt. Chicatanas: winged ants, base for a special salsa. They're rich in protein and sustainable. The FAO recommends insects as food of the future — Mexico already knew." },
    ],
  },
  "cultura-tortilleria": {
    title: "The Tortillería: Temple of Corn",
    subtitle: "The most important place in every neighborhood",
    modules: [
      { title: "The Mexican tortillería", content: "Every neighborhood has at least one tortillería — it's as essential as a bakery. Mexicans buy FRESH tortillas every day. The automatic tortilla machine was invented in 1947. Handmade ones (hechas a mano) are more valued. The price of tortillas is politically sensitive — it's the basic food of the population. Average consumption is 165 lbs of tortillas per person per year. Without tortilla, it's not a meal." },
    ],
  },
  "cultura-mole-historia": {
    title: "Mole: The Culinary Soul of Mexico",
    subtitle: "The history behind the most complex dish of the Americas",
    modules: [
      { title: "Origins of mole", content: "Legend says Mole Poblano was created at the Convent of Santa Rosa in Puebla by Sor Andrea de la Asunción to impress the Bishop. Another version attributes it to pre-Hispanic cooks who already combined chiles, chocolate, and spices. Oaxaca is the 'land of 7 moles' — each with a different color, flavor, and technique. Making mole is a communal act: entire families participate. A good mole takes 30+ ingredients and 6+ hours. It's served at weddings, baptisms, funerals, and patron saint festivals — present at every important moment of Mexican life." },
    ],
  },
  "cultura-tequila-mezcal": {
    title: "Tequila and Mezcal: The Agave Spirits",
    subtitle: "Artisanal production, denomination of origin, and ritual",
    modules: [
      { title: "Tequila", content: "Made exclusively from blue agave (tequilana weber) in 5 states (mainly Jalisco). The agave takes 7-10 years to mature. The jimador harvests with a coa (special machete). The piñas are cooked in ovens and then distilled. Blanco: pure. Reposado: rested in barrels 2-12 months. Añejo: 1-3 years. Extra añejo: 3+ years." },
      { title: "Mezcal", content: "All tequila is mezcal, but not all mezcal is tequila. Can use 200+ agave species. The agave is cooked in an earth oven (gives the smoky flavor). Artisanal distillation in copper or clay stills. 'Artisanal mezcal' vs 'ancestral mezcal' — ancestral uses a clay still. Oaxaca produces 85%. 'He who doesn't know mezcal, doesn't know Mexico.' Drink slowly, in a jicara or copita, accompanied by orange and sal de gusano." },
    ],
  },
  "cultura-comida-familia": {
    title: "Food and the Mexican Family",
    subtitle: "Abuela's recipes, Sunday meals, and traditions",
    modules: [
      { title: "Family traditions", content: "The 'comida' (main meal, at 2-3 PM) is sacred — the whole family gathers. Sunday: barbacoa, pozole, or carnitas with family. Recipes pass from grandmother to mother to daughter — many were never written down. 'Sazón' is each cook's personal seasoning — non-transferable. The kitchen is the heart of the Mexican home. Saying 'she cooks like my grandmother' is the highest praise possible." },
    ],
  },
  "cultura-influencias": {
    title: "Influences on Mexican Cuisine",
    subtitle: "Spanish, Arab, French, African, and Asian",
    modules: [
      { title: "Fusion of cultures", content: "Spanish: brought pork, beef, chicken, wheat, rice, onion, garlic, cheese, olive oil, and wine. Arab-Lebanese: immigrants brought the shawarma that became tacos al pastor (vertical spit). French: influence on pastry and fine dining techniques during Maximilian's empire. African: brought banana, coffee, and influenced Veracruz's cuisine. Asian: the Manila Galleon brought spices, tamarind, and techniques. Mexico absorbed everything and transformed it into something unique." },
    ],
  },
  "cultura-patrimonio-milpa": {
    title: "The Milpa: Ancestral Agricultural System",
    subtitle: "Corn, beans, and squash — the three sisters",
    modules: [
      { title: "The three sisters", content: "The milpa is the 7,000+ year old Mesoamerican farming system: corn (vertical support), beans (fix nitrogen in soil, climb the corn), squash (covers soil, retains moisture). It's one of the most sustainable agricultural systems ever invented. The base of the Mexican diet comes from the milpa. Today, the milpa is threatened by industrial monoculture and GMOs. Movements like Slow Food México and Sin Maíz No Hay País fight for preservation." },
    ],
  },
  "cultura-chile-cultura": {
    title: "Chile in Mexican Culture",
    subtitle: "Much more than spiciness — national identity",
    modules: [
      { title: "Chile as culture", content: "Chile is Mexican identity. Expressions: 'enchilarse' (to get chile burn), 'ser chile' (to be silly), 'a medias chiles' (halfway). Capsaicin activates endorphins — eating chile literally makes you happier. Mexico has the world's hottest chile (Carolina Reaper was surpassed by Pepper X, but Mexican habaneros are the most famous). In 7,000 BC, Mexicans were already cultivating chiles." },
    ],
  },
  "cultura-musica-comida": {
    title: "Music, Food, and Cantinas",
    subtitle: "Mariachi, mezcal, and botanas in the Mexican cantina",
    modules: [
      { title: "The Mexican cantina", content: "The traditional cantina is bar+restaurant: drinks always come with food (botanas). Free botanas with each round of drinks — a sacred tradition. Mariachi plays live on weekends. Cantina food: chicharrón, ceviche, flautas, sopes. Historic cantinas: La Opera (CDMX, 1876), El Nivel, Salón Tenampa. Many were exclusively male until the 1980s. Today they are cultural heritage." },
    ],
  },
  "cultura-chocolate-historia": {
    title: "The History of Chocolate in Mexico",
    subtitle: "From sacred royal beverage to global ingredient",
    modules: [
      { title: "Xocoatl", content: "The Olmecs (1500 BC) were the first to use cacao. The Maya created 'xocoatl' — a bitter drink with chili, vanilla, and water. The Aztecs believed it was a gift from Quetzalcoatl. Cacao beans served as currency. The Spanish added sugar and brought it to Europe. Mexican chocolate today: tablets with cinnamon (Abuelita, Ibarra), whisked with a molinillo. Cacao from Tabasco and Chiapas is among the world's finest. Without Mexico, chocolate wouldn't exist." },
    ],
  },

  // ===== INGREDIENTES/DESTILADOS (10) =====
  "guia-capsaicina": {
    title: "The Science of Capsaicin",
    subtitle: "Why chile burns and why we love it",
    modules: [
      { title: "The science of heat", content: "Capsaicin activates TRPV1 receptors (the same as heat) — that's why we feel a 'burn'. The Scoville scale measures heat: Poblano 1,000-2,000, Jalapeño 2,500-8,000, Serrano 10,000-23,000, Chile de Árbol 15,000-30,000, Habanero 100,000-350,000. Capsaicin releases endorphins — that's why chile is addictive! Drinking water DOESN'T help (capsaicin is oily) — use milk, cream, or bread. The veins and seeds have more capsaicin than the flesh." },
    ],
  },
  "guia-agave": {
    title: "Agave: Mexico's Sacred Plant",
    subtitle: "From tequila to syrup — the plant of 1,000 uses",
    modules: [
      { title: "Uses of agave", content: "Over 200 species, 75% endemic to Mexico. Uses: tequila (blue agave), mezcal (espadín and others), pulque (fermented aguamiel), agave syrup (sweetener), fibers for fabric (ixtle), paper (amate). Agave takes 7-25 years to mature. When it flowers (quiote), it dies — it's a monocarpic plant. The jimador is the artisan who harvests, using a coa, an ancestral tool. The piña (heart) can weigh 110-220 lbs." },
    ],
  },
  "guia-insetos-ingredientes": {
    title: "Insects as Ingredients",
    subtitle: "High in protein, sustainable, and delicious",
    modules: [
      { title: "Protein of the future, tradition of the past", content: "Chapulines: grasshoppers from Oaxaca — toasted with garlic, lime, and chile. 70% protein. Escamoles: ant larvae — 'Mexican caviar', buttery and nutty flavor. Very expensive per kilo. Gusanos de maguey: chinicuiles (red) and white — fried or in the mezcal bottle. Sal de gusano: salt with ground gusano and chile — accompanies mezcal. Jumiles: stink bugs with a cinnamon flavor — raw or toasted. Mexico consumes 549 insect species — the greatest entomophagic diversity in the world." },
    ],
  },
  "guia-baunilha-mexicana": {
    title: "Mexican Vanilla",
    subtitle: "Mexico invented it — the world copied it",
    modules: [
      { title: "The queen of aromas", content: "Vanilla originates from Veracruz (Papantla region) — the Totonacs cultivated it for 1,000+ years. The Vanilla planifolia orchid was only naturally pollinated by the melipona (stingless bee). Today it's hand-pollinated. Madagascar produces more, but Mexican vanilla is considered the most complex in aroma. The bean should be flexible, oily, and aromatic. Artificial extract uses synthetic vanillin — incomparable to the real thing." },
    ],
  },
  "guia-maguey-pulque": {
    title: "Maguey and Pulque",
    subtitle: "The drink of the Aztec gods — 2,000 years of tradition",
    modules: [
      { title: "The maguey and its liquid", content: "The maguey (agave salmiana and others) produces aguamiel — sweet sap extracted from the plant's heart. The tlachiquero extracts it with an acocote (gourd). The aguamiel ferments naturally in 1-2 days, producing pulque (4-8% alcohol). Pulque curado: blended with fruits (mango, guava, strawberry, pine nut). It was a sacred drink — only priests and warriors could drink it. Pulquerías are making a comeback in CDMX. It's a natural probiotic and nutritious." },
    ],
  },
  "guia-mariscos-mex": {
    title: "Seafood in Mexico",
    subtitle: "Shrimp, abalone, crab, and fish — coast to coast",
    modules: [
      { title: "Mexican seafood", content: "Mexico has 6,800 miles of coastline — Pacific and Gulf. Sinaloa shrimp is the most famous. Baja California abalone: premium mollusk, nearly extinct. Jaiba (crab): for empanadas and cocktails. Pulpo (octopus): Yucatán style, grilled or in ceviche. Huachinango (red snapper): for zarandeado and veracruzana. Oysters: from the Pacific, with lime and chile. The marisquería is the seafood restaurant — from the simplest carts to sophisticated venues." },
    ],
  },
  "guia-flor-abobora": {
    title: "Squash Blossom and Edible Flowers",
    subtitle: "Delicate ingredients that elevate Mexican cuisine",
    modules: [
      { title: "Flowers in cuisine", content: "Squash blossom (flor de calabaza): sautéed with epazote for quesadillas — delicate and elegant flavor. Colorín flower: petals of a tropical tree, for soups and fritters. Garambullo flower: flowering cactus, for gourmet salads. Izote flower (yucca): for tortas and stews. Jamaica flower (hibiscus): for agua fresca and flower enchiladas. The use of flowers in Mexican cuisine comes from the Aztecs — it's millennial floral cooking." },
    ],
  },
  "guia-quelites": {
    title: "Quelites: Wild Edible Plants",
    subtitle: "The forgotten green treasure of Mexican cuisine",
    modules: [
      { title: "Mexican quelites", content: "Quelite comes from the Nahuatl 'quilitl'. They are wild edible herbs consumed for millennia. Quintonil (amaranth): nutritious leaves, sautéed. Huauzontle: florets battered in egg. Romerito: for Christmas, with mole and dried shrimp. Verdolaga (purslane): succulent, for pork stews. Epazote, pápalo, pipicha: wild aromatic herbs. Mexico has 500+ quelite species — they are the country's edible biodiversity." },
    ],
  },
  "guia-cafe-mexicano": {
    title: "Mexican Coffee",
    subtitle: "From Chiapas and Veracruz to café de olla",
    modules: [
      { title: "Mexico's coffee", content: "Mexico is the 10th largest producer worldwide. Regions: Chiapas (Soconusco — premium), Veracruz (Coatepec), Oaxaca (Pluma Hidalgo), Puebla, Guerrero. Varieties: high-altitude Arabica, mostly organic. Café de olla: brewed in a clay pot with piloncillo and cinnamon — incomparable aroma. Café con leche: natural foam. Mexico's coffee tradition is less known than Colombia's but equally rich." },
    ],
  },
  "guia-frutas-mexicanas": {
    title: "Mexican Fruits",
    subtitle: "Guava, tuna, mamey, sapote, and more",
    modules: [
      { title: "Native fruits", content: "Guava: pink inside, for ate (fruit paste) and aguas frescas. Tuna: nopal (cactus) fruit, sweet and refreshing. Mamey: salmon-colored flesh, for licuados (smoothies). Black sapote: naturally looks like chocolate pudding! Pitahaya: cactus fruit, vibrant pink. Zapote: various types, sweet and creamy. Tejocote: hawthorn fruit, for Christmas ponche. Capulín: Mexican cherry. Chicozapote: source of chicle (chewing gum). Many of these fruits are unknown outside Mexico." },
    ],
  },

  // ===== AVANÇADO (10) =====
  "alta-cocina-mexicana": {
    title: "Mexican Haute Cuisine",
    subtitle: "From Enrique Olvera to Daniela Soto-Innes",
    modules: [
      { title: "The gastronomic revolution", content: "Enrique Olvera (Pujol, CDMX): elevated Mexican ingredients to haute gastronomy — his 'mole madre' has layers of mole aged for 1,500+ days. Jorge Vallejo (Quintonil): quelites and endemic ingredients with contemporary technique. Daniela Soto-Innes: youngest chef to win 'Best Female Chef' at World's 50 Best. Roberto Solís (Néctar, Mérida): avant-garde Yucatecan cuisine. Mexico has 3 restaurants on the World's 50 Best list. The message: ancestral ingredients with cutting-edge technique." },
    ],
  },
  "tecnica-ahumado": {
    title: "Mexican Smoking Techniques",
    subtitle: "Chipotle, mezcal, and the flavor of smoke",
    modules: [
      { title: "Mexican smoking", content: "Chipotle: smoked jalapeño with pecan or mesquite wood — the most famous. Mezcal: agave cooked in an underground oven with firewood = smoky flavor. Carne al pastor: trompo near the charcoal captures subtle smoke. Barbacoa: cooked in an earth oven with embers. Maguey: the maguey leaves used in barbacoa add a smoky note. Smoking isn't generic — each method produces a different profile. Mesquite wood is favored in the north, while the south uses tropical firewood." },
    ],
  },
  "tecnica-moles-avancado": {
    title: "Advanced Moles: Negro, Manchamanteles, and Pipián",
    subtitle: "The most complex moles and their secret techniques",
    modules: [
      { title: "Mole Negro", content: "The most difficult mole of all: chile chilhuacle seeds are BURNED until black (done outdoors — the smoke is intense). This gives the black color and unique bitter-complex flavor. Chile chilhuacle only exists in Oaxaca — there's no substitute. Each cook has her secret ratio. A good mole negro takes 2 days of work." },
      { title: "Manchamanteles and Pipián", content: "Manchamanteles ('tablecloth stainer'): sweet-savory mole with pineapple, apple, plantain, and chile ancho. It stains everything it touches — hence the name. Pipián verde: pepita (pumpkin seed) base with tomatillo and herbs — lighter than mole but equally complex. Pipián rojo: with chile ancho and peanuts. Both pipianes come from pre-Hispanic royal cuisine — Montezuma ate them." },
    ],
  },
  "nixtamalizacao-avancada": {
    title: "Advanced Nixtamalization",
    subtitle: "Variables that separate the amateur from the master",
    modules: [
      { title: "Advanced variables", content: "The amount of lime varies by corn type: dried corn = more lime, fresh corn = less. Excess lime = bitter, yellowish masa. Insufficient lime = sticky masa that lacks cohesion. Soaking time (nejayote): 8-16h depending on corn hardness. Grinding must be slow to avoid heating — heat degrades masa. Restaurants like Pujol and Máximo Bistrot use nixtamal from specific creole corn varieties (bolita, olotillo, mushito) for tortillas of extraordinary flavor and color. The texture of a tortilla from hand-nixtamalized creole corn is a revelation." },
    ],
  },
  "chiles-raros": {
    title: "Rare and Regional Chiles",
    subtitle: "Chilhuacle, cascabel, xcatic, and endemic varieties",
    modules: [
      { title: "Special chiles", content: "Chilhuacle (negro, rojo, amarillo): exclusive to Oaxaca, essential for mole negro — the most valuable. Cascabel: round, seeds rattle (like a rattlesnake) — nutty flavor. Xcatic: from Yucatán, yellow, for escabeche. Chile de agua: fresh, from Oaxaca, mild and elegant. Chilaca: long and dark, fresh → dried = pasilla. Piquín: tiny and extremely spicy — wild. Chile manzano: looks like a yellow bell pepper, very hot, from high altitude. Each exists in a microregion and substituting it means losing the dish." },
    ],
  },
  "cozinha-prehispanica": {
    title: "Contemporary Pre-Hispanic Cuisine",
    subtitle: "Recovering ancestral techniques and ingredients",
    modules: [
      { title: "The ancestral recovery", content: "Contemporary chefs are recovering forgotten ingredients: amaranth (Aztec pseudocereal), chia (Mayan seed), xoconostle (acidic tuna), huauzontle, wild quelites, insects, lake algae (spirulina — the Aztecs already consumed it!). Techniques: metate cooking, earth oven, natural fermentation. The 'nueva cocina mexicana' movement values endemic over imported ingredients. It's gastronomy that's also a political act of food decolonization." },
    ],
  },
  "sustentabilidade-mexicana": {
    title: "Sustainability in Mexican Cuisine",
    subtitle: "Milpa, zero waste, and ancestral wisdom",
    modules: [
      { title: "Sustainable tradition", content: "The milpa is one of the most sustainable agricultural systems in the world — no pesticides, no irrigation, regenerates soil. Total use: pineapple peel becomes tepache, leftover tortilla becomes chilaquiles or enchiladas, bones become broth, leftover meat becomes tacos. Nopales grow without water. Insects are the planet's most sustainable protein. Mexico has practiced sustainable agriculture for 7,000 years. Modern chefs preaching 'nose-to-tail' and 'zero waste' are rediscovering what Mexican grandmothers always did." },
    ],
  },
  "harmonizacao-mexicana": {
    title: "Pairing: Mexican Food + Drink",
    subtitle: "Tequila, mezcal, beer, and aguas frescas with every dish",
    modules: [
      { title: "Pairing rules", content: "Tacos al pastor + piña: jamaica or light beer. Mole + reposado tequila: the wood complements the chocolate. Seafood (ceviche, aguachile) + young mezcal or craft beer. Carnitas + dark beer or michelada. Barbacoa + pulque curado. Cochinita pibil + Montejo beer or horchata. Chiles en nogada + Mexican red wine (Valle de Guadalupe). Churros + hot chocolate. Late-night suadero tacos + soda (Mexican Coca-Cola in a glass bottle with real sugar). The golden rule: what grows together, pairs together." },
    ],
  },
  "futuro-gastronomia-mexicana": {
    title: "The Future of Mexican Gastronomy",
    subtitle: "Preservation, innovation, and global recognition",
    modules: [
      { title: "Trends and challenges", content: "Preservation of creole corn vs GMOs — 'Sin Maíz No Hay País' (Without Corn There's No Country). Recovery of endemic ingredients and ancestral techniques. Mexican haute cuisine gaining ground on World's 50 Best. Artisanal mezcal as a cultural movement (not just a drink). Creole corn tortillerías opening in world cities. Insects as sustainable protein — the FAO points to Mexico as a model. The challenge: preserving authenticity while the world discovers and demands more. The answer lies in indigenous and rural communities that keep alive 10,000-year-old traditions." },
    ],
  },

  // ===== NEGÓCIOS (10) =====
  "negocio-taqueria": {
    title: "How to Open a Taqueria",
    subtitle: "From plan to your first taco sold",
    modules: [
      { title: "Planning", content: "Define your niche: al pastor, birria, seafood, gourmet. Location is everything — foot traffic and parking. Minimum equipment: griddle, trompo (if al pastor), commercial stove, refrigeration. A lean menu = quality. Start with 4-6 types of taco. Competitive pricing — tacos are democratic. Fresh tortilla is differentiator #1. Homemade salsas are mandatory (verde, roja, habanero). Pickled onion and plenty of limes." },
      { title: "Operations and costs", content: "Ingredient cost: 25-35% of selling price. Meat portion per taco: 60-80g. Tortilla per taco: 2 (double). Average markup: 3-4x the ingredient cost. Break-even: calculate rent + supplies + labor. Trompo tacos (al pastor, suadero) have high margins. Beverages (aguas frescas, sodas) are high margin. Delivery is growing but tacos are better in person — the experience matters." },
    ],
  },
  "negocio-food-truck": {
    title: "Mexican Food Truck",
    subtitle: "Mobility, low investment, and high demand",
    modules: [
      { title: "Advantages and planning", content: "Lower initial investment than a fixed restaurant. Mobility: events, fairs, parties, offices. Menu: maximum 8-10 items — total quality focus. Best items for food truck: tacos, burritos, quesadillas, nachos, churros. Adaptation for local market: adjust spiciness, accessible names, local ingredients. The truck's visual is marketing — invest in vibrant Mexican design (colors, skulls, sombreros, cacti)." },
      { title: "Operations tips", content: "Pre-prepare everything you can (marinated meats, salsas, beans). Assemble to order. Tortilla MUST be heated on the griddle live — it's a show. Practical packaging: aluminum foil or kraft paper baskets. Social media: post location daily. Corporate events and weddings pay well. Trend: quesabirria is viral — take advantage." },
    ],
  },
  "negocio-precificacao": {
    title: "Pricing Mexican Food",
    subtitle: "How much to charge for tacos, burritos, and dishes",
    modules: [
      { title: "Price ranges", content: "Individual taco: $3-5 (simple) / $5-8 (gourmet). 3-taco combo + drink: $12-18. Burrito: $8-12. Quesadilla: $7-10. Loaded nachos: $10-15. Guacamole portion: $6-9. Mole with rice: $12-18. Margarita: $8-12. The rule: dish cost x 3.5-4 = selling price. Include fixed costs (rent, utilities, gas, packaging) in the calculation." },
      { title: "Margin per item", content: "Highest margin: beverages (aguas frescas, lemonade), nachos, churros. Good margin: tacos al pastor, quesadillas, guacamole. Lower margin: dishes with premium meat (arrachera, shrimp). To increase average ticket: combos, dessert, Mexican drinks. Delivery: factor in platform fees (20-30%). Tip: digital menu with beautiful photos increases sales by 30%." },
    ],
  },
  "negocio-ingredientes-brasil": {
    title: "Where to Find Mexican Ingredients Locally",
    subtitle: "Substitutes, imports, and growing your own",
    modules: [
      { title: "Ingredients and substitutes", content: "Masa harina: imported (Maseca) from specialty stores or online. Chipotle chiles: canned (La Costeña) from importers. Tomatillos: hard to find — grow them or substitute with green tomato + lime. Oaxaca cheese: fresh buffalo mozzarella is the closest. Epazote: grow in a pot — grows easily. Achiote: found as annatto in local markets. Tortillas: make with masa harina or buy frozen. Habanero chile: grow it — thrives in warm climates." },
    ],
  },
  "negocio-cardapio": {
    title: "Building a Mexican Menu",
    subtitle: "Balance between authenticity and local market",
    modules: [
      { title: "Menu structure", content: "Starters: guacamole, nachos, queso fundido, ceviche. Tacos (3-6 options): al pastor, carnitas, birria, carne asada, chicken, vegetarian. Mains: enchiladas, burritos, quesadillas, fajitas. Sides: arroz rojo, frijoles, elotes. Desserts: churros, flan, tres leches. Drinks: margarita, michelada, aguas frescas. Common mistake: menu too large — 15-20 items is ideal. Authenticity wins — don't over-localize. Offer 3 salsas: mild, medium, and hot — the customer chooses." },
    ],
  },
  "negocio-delivery-mex": {
    title: "Mexican Food Delivery",
    subtitle: "How to package tacos that arrive perfect",
    modules: [
      { title: "Packaging and logistics", content: "The challenge: tortilla gets soggy, crispiness dies, salsa leaks. Solution: package components separately — warm tortilla in aluminum foil, meat in sealed container, salsa in small cups. The customer assembles at home. For burritos: aluminum wrapping is perfect. For nachos: totopos separate from queso. Include assembly instructions. Salsa kit is an easy upsell. Ghost kitchen (no dining room) reduces costs by 40%." },
    ],
  },
  "negocio-eventos": {
    title: "Mexican Buffet for Events",
    subtitle: "Weddings, parties, and corporate — how to serve",
    modules: [
      { title: "Event service", content: "Live taco station: taquero preparing on the spot — it's both spectacle and food. Mexican buffet: rice, beans, meats (carnitas, al pastor, carne asada), salsas, live guacamole, quesadillas made to order. Drink station: margarita, michelada, aguas frescas. Dessert: churros made fresh or flan. Price per person varies by menu. Corporate events love taco bars — they're interactive and fun. Mexican-themed weddings are growing 30% annually." },
    ],
  },
  "negocio-marca": {
    title: "Branding for a Mexican Restaurant",
    subtitle: "Name, visual identity, and positioning",
    modules: [
      { title: "Building the brand", content: "Name: short, memorable, with Mexican personality (avoid clichés like 'arriba' or 'amigos'). Colors: Mexican flag (green, white, red), terracotta, turquoise, mustard yellow. Typography: bold, festive but legible. Décor: papel picado, clay, cacti, murals with skulls, Frida Kahlo, lotería mexicana. Music: mariachi, cumbia, regional mexicano. Spotify playlist is essential. Social media: preparation videos (spinning trompo, puffing tortilla) go viral." },
    ],
  },
  "negocio-franquia": {
    title: "Mexican Food Franchises",
    subtitle: "Opportunities, investment, and trends",
    modules: [
      { title: "The market", content: "Mexican food is the fastest-growing category in food service. Chains like Taco Bell, Chipotle (expanding) and national brands show the demand. Franchise investment varies widely. Own operation requires less capital. People love bold flavors and meat — Mexican food delivers perfectly. Differentiators: authenticity (real ingredients), experience (décor, music), customizable spiciness. Gourmet niche is growing but affordable tacos have volume." },
    ],
  },
  "negocio-redes-sociais": {
    title: "Digital Marketing for Mexican Food",
    subtitle: "Instagram, TikTok, and how to go viral",
    modules: [
      { title: "Digital strategies", content: "Instagram: photos with vibrant colors, reels of preparation (meat on the trompo, tortilla on the griddle, cheese melting). TikTok: short process videos (cutting meat, assembling tacos, serving). Hashtags: #mexicanfood #tacos #comidamexicana. Engagement: ask customers to film and tag. Promotions: 'Taco Tuesday' (weekly discount). Google My Business: essential for local search. Reviews: respond to ALL. Local foodie influencers: invite them to dinner. The algorithm loves food — use that!" },
    ],
  },
};
