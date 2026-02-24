import { DishTranslation } from "./index";

export const dishTranslationsEN: Record<string, DishTranslation> = {
  // ============ TACOS ============
  "tacos-al-pastor": {
    name: "Tacos al Pastor",
    ingredients: ["500g thinly sliced pork loin", "4 dried guajillo chiles", "2 dried ancho chiles", "1 ripe pineapple", "White onion", "Fresh cilantro", "Corn tortillas", "Achiote (annatto)", "Apple cider vinegar"],
    steps: ["Soak chiles in hot water for 20 min, blend with achiote and vinegar.", "Marinate meat in chile paste for at least 2 hours.", "Grill meat on high heat until caramelized.", "Grill pineapple slices until golden.", "Chop meat, pineapple, onion and cilantro.", "Serve on warm corn tortillas."],
    description: "The king of Mexican tacos, inspired by Lebanese shawarma brought by immigrants. The combination of marinated meat and grilled pineapple is irresistible."
  },
  "tacos-carnitas": {
    name: "Carnitas Tacos",
    ingredients: ["1kg pork shoulder", "1 orange (juice)", "1 lime (juice)", "4 garlic cloves", "Lard", "Onion", "Salt and pepper", "Corn tortillas", "Cilantro and onion for serving"],
    steps: ["Cut meat into large cubes.", "Cook in lard with orange and lime juice for 2h.", "Increase heat to brown and shred the meat.", "Meat should be crispy outside and tender inside.", "Serve on tortillas with chopped onion and cilantro.", "Accompany with green salsa and lime."],
    description: "From Michoacán, carnitas are pork confited in its own fat until golden and shredded."
  },
  "tacos-birria": {
    name: "Birria Tacos",
    ingredients: ["1kg beef (chuck)", "6 guajillo chiles", "3 ancho chiles", "Tomato", "Onion", "Garlic", "Cumin", "Mexican oregano", "Corn tortillas", "Oaxaca cheese"],
    steps: ["Soak chiles and blend with tomato, onion and spices.", "Marinate meat in paste and slow cook for 3h.", "Shred meat and reserve the consommé.", "Dip tortillas in consommé and grill with cheese.", "Fill with shredded meat.", "Serve with hot consommé for dipping."],
    description: "Originally from Jalisco, birria went viral worldwide. The tacos dipped in red consommé are addictive."
  },
  "tacos-carne-asada": {
    name: "Carne Asada Tacos",
    ingredients: ["500g sirloin steak", "Lime juice", "Garlic", "Cilantro", "Jalapeño", "Onion", "Salt and pepper", "Corn tortillas", "Guacamole"],
    steps: ["Marinate meat with lime, garlic, cilantro and jalapeño.", "Grill on high heat to desired doneness.", "Rest meat 5 min and cut into small cubes.", "Heat tortillas on the griddle.", "Serve with grilled onion and guacamole.", "Finish with cilantro and lime."],
    description: "Charcoal-grilled meat tacos — simple, straightforward and delicious. The backbone of Mexican taquerías."
  },
  "tacos-pollo": {
    name: "Chicken Tinga Tacos",
    ingredients: ["500g chicken breast", "4 tomatoes", "2 chipotle chiles in adobo", "Onion", "Garlic", "Oregano", "Corn tortillas", "Sour cream", "Lettuce"],
    steps: ["Cook and shred the chicken.", "Sauté onion and garlic, add tomatoes.", "Add chipotles and seasonings.", "Add shredded chicken and cook 15 min.", "Serve on tortillas with cream and lettuce.", "Accompany with green salsa."],
    description: "Chicken tinga is a classic from Puebla — shredded chicken in tomato-chipotle sauce with a smoky flavor."
  },
  "tacos-pescado": {
    name: "Fish Tacos",
    ingredients: ["400g white fish fillet", "All-purpose flour", "Cold beer", "Shredded purple cabbage", "Sour cream", "Chipotle sauce", "Lime", "Corn tortillas"],
    steps: ["Prepare batter: flour, beer and salt.", "Coat fish in batter and fry until golden.", "Thinly slice purple cabbage.", "Mix sour cream with chipotle.", "Assemble: tortilla, cabbage, fried fish.", "Finish with chipotle sauce and lime."],
    description: "Originally from Ensenada, Baja California. Crispy battered fish with cabbage and creamy sauce."
  },
  "tacos-chorizo": {
    name: "Chorizo Tacos",
    ingredients: ["400g Mexican chorizo", "Cooked diced potatoes", "Onion", "Cilantro", "Corn tortillas", "Green salsa", "Lime"],
    steps: ["Remove chorizo from casing and crumble in pan.", "Fry until very crispy.", "Add diced potatoes and mix.", "Heat tortillas.", "Serve with onion, cilantro and green salsa.", "Squeeze lime on top."],
    description: "Mexican chorizo is very different from Spanish — it's raw, seasoned with chile and achiote, and turns an intense red."
  },
  "tacos-lengua": {
    name: "Beef Tongue Tacos",
    ingredients: ["1 beef tongue", "Onion", "Garlic", "Bay leaf", "Peppercorns", "Salt", "Corn tortillas", "Green salsa", "Chopped cilantro and onion"],
    steps: ["Pressure cook tongue with aromatics for 1h30.", "Remove skin and cut into small cubes.", "Sear on griddle with a little oil until golden.", "Heat tortillas.", "Serve with onion, cilantro and salsa.", "Squeeze lime."],
    description: "A Mexican delicacy — slowly cooked tongue becomes butter-tender with intense flavor."
  },
  "tacos-suadero": {
    name: "Suadero Tacos",
    ingredients: ["500g suadero (meat between rib and skin)", "Lard for frying", "Salt", "Corn tortillas", "Onion", "Cilantro", "Green salsa"],
    steps: ["Cook suadero in water for 1h.", "Fry in lard until golden and crispy.", "Chop into small pieces.", "Heat tortillas on griddle.", "Serve with onion, cilantro and salsa.", "Squeeze lime."],
    description: "Suadero is a cut unique to Mexico — it sits between the rib and skin. Unique texture and deep flavor."
  },
  "tacos-campechanos": {
    name: "Campechanos Tacos",
    ingredients: ["Beef steak", "Mexican chorizo", "Longaniza", "Chicharrón", "Corn tortillas", "Salsa", "Onion and cilantro"],
    steps: ["Grill meat on the griddle.", "Fry chorizo and longaniza.", "Break chicharrón into pieces.", "Mix all meats together.", "Serve on tortillas with salsa.", "The secret is the combination of textures."],
    description: "A mix of various meats in one taco — steak, chorizo, longaniza and chicharrón. Flavor explosion."
  },
  "tacos-barbacoa-borrego": {
    name: "Lamb Barbacoa Tacos",
    ingredients: ["1kg lamb meat", "Maguey leaves", "Guajillo chiles", "Garlic and onion", "Cumin and oregano", "Corn tortillas"],
    steps: ["Prepare paste with chiles, garlic and spices.", "Cover meat with paste.", "Wrap in maguey leaves.", "Cook in pot for 4-5h.", "Shred and serve in tacos.", "Accompany with consommé."],
    description: "True lamb barbacoa from the State of Mexico — cooked in maguey leaves with an unmistakable aroma."
  },
  "tacos-canasta": {
    name: "Basket Tacos",
    ingredients: ["Corn tortillas", "Refried beans", "Potato with chorizo", "Pressed chicharrón", "Oil or lard", "Basket with cloth"],
    steps: ["Prepare fillings separately.", "Fill and fold tacos.", "Arrange in cloth-lined basket.", "Sprinkle hot oil over tacos.", "Cover with cloth and let steam.", "Tacos become soft and oily — perfect."],
    description: "Basket or 'sweated' tacos — carried in covered baskets. Cheap, tasty and ubiquitous on the streets."
  },
  "tacos-gobernador": {
    name: "Governor's Tacos",
    ingredients: ["400g shrimp", "Oaxaca cheese", "Bell pepper", "Onion", "Tomato", "Flour tortillas", "Butter"],
    steps: ["Sauté shrimp with bell pepper, onion and tomato.", "Heat flour tortilla with butter.", "Add cheese, shrimp and more cheese.", "Fold and grill until cheese melts.", "Cut in half.", "Serve with guacamole."],
    description: "Created in Mazatlán, Sinaloa — a shrimp quesadilla that became a taco. Named in honor of a governor."
  },
  "tacos-cochinita": {
    name: "Cochinita Pibil Tacos",
    ingredients: ["500g shredded cochinita pibil", "Red onion pickled in lime", "Habanero chile", "Corn tortillas", "Black beans", "Cilantro"],
    steps: ["Prepare cochinita pibil or use pre-made shredded.", "Pickle red onion in lime and salt for 30 min.", "Heat tortillas on griddle.", "Fill generously with cochinita.", "Top with pickled red onion.", "Serve with habanero on the side — VERY spicy."],
    description: "Yucatecan tacos with shredded cochinita pibil and pickled red onion — the perfect Yucatán combination."
  },
  "tacos-veganos": {
    name: "Vegan Cauliflower Tacos",
    ingredients: ["1 cauliflower in florets", "Ancho chile powder", "Cumin", "Lime", "Black beans", "Avocado", "Red onion", "Cilantro", "Corn tortillas"],
    steps: ["Season cauliflower with chile and cumin.", "Roast at 220°C for 25 min until golden.", "Prepare seasoned beans.", "Slice avocado.", "Assemble tacos with beans, cauliflower and avocado.", "Finish with red onion and cilantro."],
    description: "100% vegan tacos with roasted cauliflower — crunchy, flavorful and completely plant-based."
  },
  "tacos-gourmet": {
    name: "Gourmet Short Rib Tacos",
    ingredients: ["1kg beef short ribs", "Dark beer", "Ancho chile", "Pasilla chile", "Dark chocolate", "Cinnamon", "Artisanal tortillas", "Micro-greens"],
    steps: ["Sear ribs in hot pan.", "Add beer, chiles and chocolate.", "Cook on low heat for 4h.", "Shred meat — it should fall off the bone.", "Reduce sauce to a glaze.", "Serve on artisanal tortillas with micro-greens."],
    description: "Beer and chocolate braised short rib tacos — a gourmet version worthy of fine dining."
  },

  // ============ ANTOJITOS ============
  "quesadillas": {
    name: "Quesadillas",
    ingredients: ["Flour or corn tortillas", "300g Oaxaca cheese", "Squash blossom (optional)", "Mushrooms", "Epazote", "Red salsa"],
    steps: ["Heat tortilla on griddle.", "Add Oaxaca cheese generously.", "Add filling: squash blossom or mushrooms.", "Fold in half and grill until cheese melts.", "Cut in half.", "Serve with red salsa and cream."],
    description: "Mexico's most versatile antojito — quesadillas accept any filling, but Oaxaca cheese is mandatory."
  },
  "enchiladas-rojas": {
    name: "Red Enchiladas",
    ingredients: ["12 corn tortillas", "500g shredded chicken", "6 guajillo chiles", "3 tomatoes", "Onion and garlic", "Sour cream", "Fresh cheese", "Red onion rings"],
    steps: ["Soak chiles and blend with tomato, onion and garlic.", "Strain sauce and fry in hot oil.", "Dip tortillas in sauce.", "Fill with chicken and roll.", "Arrange in dish and cover with more sauce.", "Top with cream, cheese and red onion."],
    description: "Tortillas bathed in chile sauce and filled with chicken — ancestral Mexican dish with pre-Hispanic roots."
  },
  "chilaquiles": {
    name: "Green Chilaquiles",
    ingredients: ["Cut and fried corn tortillas", "Green salsa (tomatillo)", "Sour cream", "Fresh cheese", "Red onion", "Fried egg", "Refried beans", "Cilantro"],
    steps: ["Cut tortillas into triangles and fry until crispy.", "Prepare green salsa with tomatillos and chiles.", "Mix chips into hot salsa.", "Cook 2-3 min — should be slightly soft.", "Serve with cream, cheese and red onion.", "Top with a fried egg."],
    description: "The most Mexican breakfast there is — fried tortillas drenched in salsa. Perfect for curing la cruda (hangover)."
  },
  "tamales": {
    name: "Chicken Tamales",
    ingredients: ["2 cups masa harina", "Whipped lard", "Chicken broth", "Dried corn husks", "500g shredded chicken", "Green or red salsa", "Salt"],
    steps: ["Whip lard until fluffy and mix with masa and broth.", "Soak corn husks in hot water.", "Spread masa on corn husk.", "Place chicken with salsa in center.", "Fold and close like a package.", "Steam for 1h until firm."],
    description: "Ancient Mesoamerican tradition — corn masa steamed in corn husks. Present at every celebration."
  },
  "sopes": {
    name: "Sopes",
    ingredients: ["Corn masa", "Refried beans", "Shredded meat or chorizo", "Chopped lettuce", "Sour cream", "Grated fresh cheese", "Salsa"],
    steps: ["Shape masa discs and cook on griddle.", "While hot, pinch up edges to form a small boat.", "Lightly fry in oil.", "Spread refried beans on base.", "Add meat, lettuce, cream and cheese.", "Finish with salsa."],
    description: "Small masa discs with raised edges forming stuffed boats. Classic Mexican street antojito."
  },
  "gorditas": {
    name: "Gorditas",
    ingredients: ["Corn masa", "Refried beans", "Pressed chicharrón (pork rind)", "Fresh cheese", "Green salsa", "Sour cream", "Lettuce"],
    steps: ["Shape thick masa discs.", "Cook on griddle until golden on both sides.", "Open in half like pita bread.", "Fill with beans, chicharrón and cheese.", "Add salsa, cream and lettuce.", "Serve hot."],
    description: "Means 'little fatties' — thicker masa discs, split open and stuffed. Popular in central Mexico."
  },
  "elotes": {
    name: "Elotes (Mexican Street Corn)",
    ingredients: ["Corn on the cob", "Mayonnaise", "Sour cream", "Chile powder (tajín)", "Grated cotija cheese", "Lime", "Cayenne pepper"],
    steps: ["Grill corn until slightly charred.", "Spread mayo and sour cream on the cob.", "Sprinkle cotija cheese generously.", "Add chile powder and pepper.", "Squeeze lime on top.", "Serve on a stick."],
    description: "Grilled corn with mayo, cheese and chile — Mexico's most iconic street food."
  },
  "tostadas": {
    name: "Tinga Tostadas",
    ingredients: ["Flat-fried corn tortillas", "Shredded chicken tinga", "Refried beans", "Chopped lettuce", "Sour cream", "Fresh cheese", "Red salsa"],
    steps: ["Fry tortillas flat and crispy.", "Spread refried beans on tostada.", "Top with chicken tinga.", "Add lettuce, cream and cheese.", "Finish with red salsa.", "Eat with your hands — it will be messy!"],
    description: "Flat fried crispy tortilla served as a base for various toppings. Crunchiness is essential."
  },
  "tlacoyos": {
    name: "Tlacoyos",
    ingredients: ["Blue or white corn masa", "Beans or requesón", "Chopped nopales", "Fresh cheese", "Green salsa", "Sour cream"],
    steps: ["Shape masa into oval form.", "Fill with beans or requesón in center.", "Close and flatten into diamond shape.", "Cook on griddle until golden on both sides.", "Top with nopales, cheese and salsa.", "Serve with sour cream."],
    description: "Pre-Hispanic antojito — diamond-shaped masa filled with beans. Found in markets since Aztec times."
  },
  "huaraches": {
    name: "Huaraches",
    ingredients: ["Corn masa", "Refried beans", "Al pastor or bistec meat", "Green salsa", "Sour cream", "Fresh cheese", "Onion and cilantro"],
    steps: ["Shape masa into sandal shape (elongated oval).", "Cook on griddle.", "Spread refried beans.", "Top with meat.", "Add salsa, cream and cheese.", "Finish with onion and cilantro."],
    description: "Sandal-shaped recipe — thick masa base topped with meats and salsas."
  },
  "flautas": {
    name: "Flautas",
    ingredients: ["Corn tortillas", "Shredded chicken", "Oil for frying", "Sour cream", "Green salsa", "Lettuce", "Fresh cheese"],
    steps: ["Fill tortillas with chicken.", "Roll tightly.", "Secure with toothpick if needed.", "Fry until crispy and golden.", "Serve with cream, salsa and lettuce.", "Top with crumbled cheese."],
    description: "Tortillas rolled and fried like flutes (the instrument). Crispy outside, juicy filling inside."
  },
  "molletes": {
    name: "Molletes",
    ingredients: ["Bolillos (Mexican French bread)", "Refried beans", "Oaxaca or manchego cheese", "Pico de gallo", "Pickled jalapeños"],
    steps: ["Cut bolillos in half.", "Spread refried beans generously.", "Cover with cheese.", "Broil until cheese melts.", "Top with pico de gallo.", "Serve with jalapeños."],
    description: "Toasted bread with beans and cheese — quick and comforting breakfast. Every Mexican grew up eating molletes."
  },
  "esquites": {
    name: "Esquites",
    ingredients: ["4 ears of corn (kernels)", "Butter", "Epazote", "Serrano chile", "Lime", "Mayonnaise", "Cotija cheese", "Chile powder"],
    steps: ["Sauté corn kernels in butter.", "Add epazote and serrano chile.", "Cook until corn is tender.", "Serve in a cup.", "Add mayo, lime and cheese.", "Sprinkle chile powder."],
    description: "Cup version of elote — cooked corn kernels with epazote, served with mayo and cheese. Classic street food."
  },

  // ============ SOPAS & CALDOS ============
  "pozole-rojo": {
    name: "Red Pozole",
    ingredients: ["500g pork shoulder", "250g hominy corn", "6 guajillo chiles", "3 ancho chiles", "Garlic", "Onion", "Oregano", "Lettuce, radish, tostadas for serving"],
    steps: ["Cook meat with onion and garlic until tender.", "Soak chiles and blend with garlic.", "Strain salsa and fry in oil.", "Add meat broth and hominy.", "Cook 30 min until flavors meld.", "Serve with lettuce, radish, oregano and tostadas."],
    description: "Sacred Aztec soup with hominy corn and pork in chile broth. A dish of celebration and festivity."
  },
  "sopa-tortilla": {
    name: "Tortilla Soup",
    ingredients: ["Fried corn tortilla strips", "4 tomatoes", "2 pasilla chiles", "Onion and garlic", "Chicken broth", "Avocado", "Sour cream", "Fresh cheese", "Chipotle"],
    steps: ["Roast tomatoes, onion and garlic and blend with chiles.", "Fry salsa in hot oil.", "Add chicken broth and simmer 20 min.", "Fry tortilla strips until crispy.", "Serve broth with crispy strips.", "Top with avocado, cream, cheese and fried chipotle."],
    description: "Tomato and chile broth with crispy tortilla strips — comforting soup that represents the soul of Mexico."
  },
  "menudo": {
    name: "Red Menudo",
    ingredients: ["1kg cleaned tripe", "Pig's foot", "6 guajillo chiles", "2 ancho chiles", "Hominy corn", "Oregano", "Onion", "Garlic", "Lime"],
    steps: ["Pressure cook tripe and pig's foot for 3h.", "Soak and blend chiles with garlic.", "Add salsa to broth.", "Add hominy and cook 30 more min.", "Season with oregano and salt.", "Serve with onion, oregano, lime and chile."],
    description: "Mexico's hangover cure. Tripe soup slowly cooked with chile and hominy."
  },
  "caldo-de-pollo": {
    name: "Mexican Chicken Soup",
    ingredients: ["1 whole chicken, cut up", "3 carrots", "3 potatoes", "2 zucchini", "Onion", "Garlic", "Rice", "Cilantro", "Lime", "Serrano chile"],
    steps: ["Cook chicken with onion and garlic.", "Add carrot and potato.", "Cook until vegetables are tender.", "Add zucchini in the last 10 min.", "Prepare white rice on the side.", "Serve broth with rice, cilantro and lime."],
    description: "Mexican chicken broth is a cure for everything — flu, sadness and hunger. Served with lime and rice."
  },
  "caldo-res": {
    name: "Beef Broth",
    ingredients: ["500g bone-in beef (shank)", "Corn on the cob", "Carrot", "Potato", "Zucchini", "Cabbage", "Chayote", "Cilantro"],
    steps: ["Cook meat with onion and garlic for 1h.", "Add corn and carrot.", "Cook 20 more min.", "Add potato, chayote and zucchini.", "Finish with cabbage in the last 10 min.", "Serve with rice, lime and chile."],
    description: "Complete broth with beef and vegetables — an entire meal in a bowl. Traditional Sunday dish."
  },
  "birria-caldo": {
    name: "Birria Broth",
    ingredients: ["1kg beef or lamb", "Guajillo and ancho chiles", "Tomato", "Spices", "Onion", "Garlic", "Oregano", "Lime"],
    steps: ["Slowly cook meat with aromatics.", "Prepare salsa with soaked chiles.", "Add salsa to broth.", "Cook 3h until meat falls apart.", "Serve in deep bowl.", "Accompany with onion, cilantro, lime and tortillas."],
    description: "The aromatic red consommé of birria — perfect for curing any ailment."
  },
  "sopa-fideo": {
    name: "Fideo Soup",
    ingredients: ["200g fideo noodles", "Tomato", "Onion", "Garlic", "Chicken broth", "Cilantro", "Lime", "Serrano chile"],
    steps: ["Toast fideo in oil until golden.", "Blend tomato, onion and garlic.", "Add salsa to fideo.", "Pour in chicken broth.", "Cook until fideo is tender.", "Serve with cilantro and lime."],
    description: "Thin noodle soup in tomato broth — Mexican comfort food that every mamá makes."
  },
  "sopa-lima": {
    name: "Yucatecan Lime Soup",
    ingredients: ["Shredded chicken", "Lima (Yucatecan lime)", "Fried tortilla strips", "Tomato", "Onion", "Bell pepper", "Chicken broth", "Yucatecan oregano"],
    steps: ["Prepare aromatic chicken broth.", "Sauté onion, tomato and bell pepper.", "Add broth and shredded chicken.", "Squeeze lime juice generously.", "Fry tortilla strips.", "Serve with crispy strips and fresh lime."],
    description: "Citrusy Yucatecan soup with fresh lime and tortilla strips. Fragrant and comforting."
  },
  "pozole-verde": {
    name: "Green Pozole",
    ingredients: ["500g pork", "Hominy corn", "Tomatillos", "Poblano chile", "Serrano chile", "Pumpkin seeds", "Cilantro", "Lettuce and radish"],
    steps: ["Cook meat and hominy.", "Blend tomatillos, chiles and pumpkin seeds.", "Add green sauce to broth.", "Cook 30 min.", "Serve with lettuce, radish and oregano.", "Accompany with tostadas."],
    description: "Green version of pozole, from Guerrero — fresher and more herbal than the red one."
  },
  "pozole-blanco": {
    name: "White Pozole",
    ingredients: ["500g pork", "250g hominy", "Onion", "Garlic", "Oregano", "Lettuce", "Radish", "Lime", "Tostadas"],
    steps: ["Cook meat with onion and garlic.", "Add hominy and cook 30 min.", "Broth should be clear and clean.", "Serve with chopped lettuce.", "Accompany with radish, oregano and lime.", "Tostadas on the side are essential."],
    description: "White and mild version of pozole, without chile — perfect for those who want flavor without heat."
  },
  "caldo-camaron": {
    name: "Shrimp Broth",
    ingredients: ["500g shrimp", "Guajillo chile", "Ancho chile", "Tomato", "Onion", "Garlic", "Potato", "Carrot", "Chipotle"],
    steps: ["Cook shrimp shells for broth.", "Soak and blend chiles with tomato.", "Fry salsa and add broth.", "Add potato and carrot.", "When tender, add shrimp.", "Cook 3-4 min and serve with lime and crackers."],
    description: "Red shrimp broth — comforting and spicy. A Lenten specialty in Mexico."
  },
  "caldo-tlalpeno": {
    name: "Tlalpeño Broth",
    ingredients: ["Shredded chicken", "Chickpeas", "Chipotle chile", "Carrot", "Zucchini", "Onion", "Garlic", "Panela cheese", "Avocado"],
    steps: ["Prepare aromatic chicken broth.", "Add chickpeas, carrot and zucchini.", "Add chipotles for smoky flavor.", "Add shredded chicken.", "Serve with panela cheese cubes.", "Finish with avocado and lime."],
    description: "Broth from Tlalpan, south of Mexico City — with chickpeas, chipotle and panela cheese."
  },

  // ============ CARNES MEXICANAS ============
  "mole-poblano": {
    name: "Mole Poblano",
    ingredients: ["8 chiles (mulato, ancho, pasilla, chipotle)", "Dark chocolate", "Almonds", "Sesame seeds", "Raisins", "Banana", "Cinnamon", "Cloves", "Dried tortillas", "Cooked turkey or chicken"],
    steps: ["Toast and soak each type of chile separately.", "Toast almonds, sesame and spices.", "Blend everything with chocolate and tortillas.", "Fry paste in hot oil.", "Add broth and cook 1h stirring constantly.", "Mole should have a velvety consistency. Serve over turkey or chicken."],
    description: "The king of Mexican cuisine — over 30 ingredients including chocolate, chiles and spices. Recipe from Puebla, UNESCO heritage."
  },
  "cochinita-pibil": {
    name: "Cochinita Pibil",
    ingredients: ["1kg pork shoulder", "100g achiote paste (annatto)", "Bitter orange juice", "Lime juice", "Banana leaves", "Pickled red onion", "Habanero"],
    steps: ["Dissolve achiote in orange and lime juice.", "Marinate meat for 12h.", "Wrap in banana leaves.", "Bake at 160°C for 3-4h until falling apart.", "Shred meat.", "Serve with pickled red onion and habanero."],
    description: "Mayan dish from Yucatán — pork marinated in achiote and baked in banana leaves. Vibrant orange color."
  },
  "chiles-rellenos": {
    name: "Stuffed Chiles",
    ingredients: ["6 poblano chiles", "300g Oaxaca cheese or ground beef", "4 eggs", "All-purpose flour", "Tomato sauce", "Sour cream"],
    steps: ["Roast chiles directly over flame until skin blisters.", "Place in plastic bag 10 min and remove skin.", "Stuff with cheese or meat.", "Dredge in flour and whipped egg whites.", "Fry until golden.", "Serve with tomato sauce and cream."],
    description: "Roasted poblano chiles, stuffed and fried in egg batter. Emblematic dish of Mexican home cooking."
  },
  "barbacoa": {
    name: "Barbacoa",
    ingredients: ["1kg beef (cheeks or chuck)", "Guajillo and ancho chiles", "Agave or banana leaves", "Garlic", "Cumin", "Cloves", "Oregano", "Vinegar"],
    steps: ["Soak and blend chiles with spices.", "Cover meat with paste.", "Wrap in agave or banana leaves.", "Cook in oven at 150°C for 5h.", "Shred meat.", "Serve in tacos with consommé, onion and cilantro."],
    description: "Meat slowly cooked in an earth oven, shredded and succulent. A Sunday tradition in central Mexico."
  },
  "carne-en-su-jugo": {
    name: "Carne en su Jugo",
    ingredients: ["500g chopped beef", "Bacon", "Cooked pinto beans", "Green tomatillos", "Serrano chile", "Cilantro", "Onion", "Garlic"],
    steps: ["Roast tomatillos and chiles and blend with cilantro.", "Fry bacon until crispy.", "Quickly sear meat on high heat.", "Add green sauce and beans.", "Cook 15 min.", "Serve with onion, cilantro, tortillas and lime."],
    description: "Guadalajara specialty — beef in green broth with beans and bacon. Intense and comforting flavor."
  },
  "tinga-res": {
    name: "Beef Tinga",
    ingredients: ["500g beef (chuck)", "Chipotle chiles in adobo", "Tomato", "Onion", "Garlic", "Oregano", "Bay leaf"],
    steps: ["Cook meat until tender and shred.", "Sauté onion and add tomato.", "Add chipotles and broth.", "Add shredded meat.", "Cook 20 min.", "Serve on tostadas with cream and cheese."],
    description: "Shredded beef in chipotle sauce — smoky and mildly spicy flavor."
  },
  "chile-verde": {
    name: "Chile Verde with Pork",
    ingredients: ["600g pork shoulder cubed", "Tomatillos", "Serrano chile", "Poblano chile", "Onion", "Garlic", "Cilantro"],
    steps: ["Sear meat in hot pan.", "Cook tomatillos and chiles.", "Blend with onion, garlic and cilantro.", "Add salsa to meat.", "Cook 40 min.", "Serve with rice and tortillas."],
    description: "Pork stew in tomatillo sauce — tangy, fresh and comforting."
  },
  "picadillo": {
    name: "Picadillo",
    ingredients: ["500g ground beef", "Diced potato", "Diced carrot", "Tomato", "Onion", "Chipotle chile", "Cumin", "Peas"],
    steps: ["Fry ground beef until browned.", "Add onion and garlic.", "Add tomato, potato and carrot.", "Season with chipotle and cumin.", "Cook until vegetables are tender.", "Serve with rice and tortillas."],
    description: "Ground beef with potato — Mexican comfort food. Used for tacos, empanadas and chiles rellenos."
  },
  "pollo-mole-verde": {
    name: "Chicken in Green Mole",
    ingredients: ["1 chicken in pieces", "Tomatillos", "Poblano chile", "Pumpkin seeds", "Lettuce", "Cilantro", "Epazote", "Onion"],
    steps: ["Cook chicken and reserve broth.", "Blend tomatillos, chiles, pumpkin seeds and herbs.", "Fry salsa in oil.", "Add broth to desired consistency.", "Simmer chicken in green mole.", "Serve with rice and tortillas."],
    description: "Green pumpkin seed mole — lighter than poblano but equally delicious. Tradition of Oaxaca and Puebla."
  },
  "albondigas": {
    name: "Meatballs in Chipotle",
    ingredients: ["500g ground beef", "Cooked rice", "Egg", "Cumin", "Chipotle chiles", "Tomato", "Onion", "Chicken broth"],
    steps: ["Mix meat, rice, egg and seasonings.", "Form into balls and set aside.", "Blend tomato with chipotle.", "Fry salsa and add broth.", "Cook meatballs in salsa for 25 min.", "Serve with rice and tortillas."],
    description: "Mexican meatballs with rice inside, cooked in chipotle salsa. Homey and comforting."
  },
  "carnitas-michoacan": {
    name: "Michoacán-Style Carnitas",
    ingredients: ["2kg pork shoulder (various cuts)", "1 orange", "Coca-Cola or condensed milk", "Lard", "Garlic", "Cumin", "Bay leaf"],
    steps: ["Cut meat into large pieces.", "Place in large pot with lard.", "Add orange juice and Coca-Cola.", "Cook on medium heat for 2h.", "Increase heat to brown.", "Meat should be crispy outside and tender inside."],
    description: "The authentic Michoacán method uses copper pots and different cuts for varying textures."
  },
  "pollo-asado-mex": {
    name: "Mexican Grilled Chicken",
    ingredients: ["1 whole chicken", "Ancho chile", "Guajillo chile", "Garlic", "Cumin", "Oregano", "Vinegar", "Achiote"],
    steps: ["Soak chiles and blend with spices.", "Marinate chicken for 12h.", "Grill or bake at 200°C.", "Baste with marinade during cooking.", "Cook until skin is golden and crispy.", "Serve with tortillas, rice and beans."],
    description: "Chicken marinated in chile paste and grilled — smoky flavor and vibrant color."
  },
  "bistec-ranchero": {
    name: "Ranchero Steak",
    ingredients: ["500g beef steak (shoulder)", "Tomato", "Serrano chile", "Onion", "Garlic", "Cilantro", "Tortillas"],
    steps: ["Sear steaks in hot pan.", "Remove meat.", "Sauté onion, garlic and chile.", "Add chopped tomato.", "Return meat to sauce.", "Cook 15 min and serve with tortillas."],
    description: "Steak in ranchero tomato and chile sauce — quick and hearty countryside meal."
  },
  "arrachera": {
    name: "Arrachera (Grilled Skirt Steak)",
    ingredients: ["800g skirt steak", "Lime juice", "Beer", "Garlic", "Chipotle chile", "Onion", "Flour tortillas"],
    steps: ["Marinate skirt steak with lime, beer and chipotle.", "Let marinate for minimum 4h.", "Grill on high heat 4-5 min each side.", "Rest 5 min before cutting.", "Cut against the grain into strips.", "Serve with tortillas, guacamole and grilled onions."],
    description: "Arrachera (skirt steak) is the premium cut for norteño tacos — juicy and full of flavor."
  },
  "cecina-yecapixtla": {
    name: "Cecina from Yecapixtla",
    ingredients: ["500g cecina (salted dried meat)", "Guacamole", "Green salsa", "Refried beans", "Tortillas", "Sour cream", "Oaxaca cheese"],
    steps: ["Cecina comes pre-salted and semi-dried.", "Grill on charcoal or hot griddle.", "Cook only 2-3 min each side.", "Meat should be tender, not crispy.", "Serve with guacamole and beans.", "Accompany with tortillas and cream."],
    description: "Sun-dried salted meat from Yecapixtla, Morelos — grilled over charcoal with guacamole."
  },
  "tasajo-oaxaca": {
    name: "Oaxacan Tasajo",
    ingredients: ["500g tasajo (thinly sliced dried meat)", "Grilled nopales", "Pasilla salsa", "Black beans", "Corn tortillas", "Oaxaca cheese"],
    steps: ["Tasajo is thinly sliced and dried meat.", "Grill quickly over charcoal.", "Grill nopales until they lose their slime.", "Prepare salsa with pasilla chile.", "Serve meat with nopales and beans.", "Accompany with tortillas and salsa."],
    description: "Thin dried meat from Oaxaca — grilled and served with nopales, the meat of Oaxacan markets."
  },
  "suadero-guisado": {
    name: "Suadero in Green Salsa",
    ingredients: ["500g suadero", "Tomatillos", "Serrano chile", "Onion", "Garlic", "Cilantro", "Tortillas"],
    steps: ["Cook suadero for 1h.", "Fry in lard until golden.", "Prepare green salsa with tomatillos.", "Cut suadero into pieces.", "Serve in tacos with salsa.", "The flavor is unique — between meat and fat."],
    description: "Suadero is a cut unique to Mexico — fatty and flavorful, fried and served in tacos."
  },

  // ============ MOLHOS & SALSAS ============
  "guacamole": {
    name: "Guacamole",
    ingredients: ["3 ripe avocados", "1 chopped tomato", "Chopped white onion", "Fresh cilantro", "Serrano chile", "Lime juice", "Salt"],
    steps: ["Cut avocados in half and remove pit.", "Mash with fork — don't make it smooth, keep chunks.", "Add chopped tomato, onion and cilantro.", "Finely chop serrano chile and mix in.", "Season with lime and salt.", "Serve immediately with tortilla chips."],
    description: "The original Aztec sauce — ahuacamolli. Made in a molcajete (volcanic stone mortar) with fresh avocado."
  },
  "salsa-roja": {
    name: "Red Salsa",
    ingredients: ["5 tomatoes", "3 dried árbol chiles", "2 guajillo chiles", "2 garlic cloves", "Onion", "Salt"],
    steps: ["Char tomatoes and onion on griddle.", "Toast dried chiles for 30 seconds.", "Blend everything with garlic and salt.", "Adjust consistency with water.", "Taste and adjust salt and heat.", "Serve at room temperature."],
    description: "Red salsa is ubiquitous on the Mexican table. Every family has their recipe — this is the classic roasted version."
  },
  "salsa-verde": {
    name: "Green Salsa",
    ingredients: ["500g tomatillos", "3 serrano chiles", "Cilantro (1 bunch)", "Onion", "Garlic", "Salt"],
    steps: ["Cook tomatillos and chiles in water for 10 min.", "Blend with onion, garlic and cilantro.", "Adjust salt and heat.", "Can be served raw or cooked.", "Gets spicier as it rests.", "Use on enchiladas, chilaquiles and tacos."],
    description: "Made with green tomatillos and serrano chile — tangy, fresh and versatile. Indispensable in Mexican cooking."
  },
  "pico-de-gallo": {
    name: "Pico de Gallo",
    ingredients: ["4 ripe tomatoes", "1 white onion", "Fresh cilantro", "2 serrano chiles", "Juice of 2 limes", "Salt"],
    steps: ["Dice tomatoes into small cubes.", "Dice onion the same size.", "Finely chop cilantro and serrano chile.", "Mix everything in a bowl.", "Season with lime and salt.", "Rest 15 min before serving."],
    description: "Fresh raw salsa — the perfect complement for any Mexican dish. Also called 'salsa mexicana' for the flag colors."
  },
  "mole-negro": {
    name: "Oaxacan Black Mole",
    ingredients: ["Chilhuacle negro, mulato and pasilla chiles", "Oaxacan chocolate", "Burnt chile seeds", "Almonds", "Walnuts", "Sesame", "Plantain", "White bread", "Cinnamon and spices"],
    steps: ["Toast and soak each chile separately.", "Burn chile seeds until black.", "Toast nuts, almonds and sesame.", "Blend everything with chocolate and bread.", "Fry in oil and add broth.", "Cook 2h stirring constantly."],
    description: "The most complex of Oaxaca's 7 moles — deep black color with over 30 ingredients. A culinary masterpiece."
  },
  "salsa-macha": {
    name: "Salsa Macha",
    ingredients: ["Dried árbol chiles", "Morita chiles", "Garlic", "Olive oil or vegetable oil", "Peanuts", "Sesame", "Vinegar", "Salt"],
    steps: ["Fry dried chiles in oil until darkened.", "Fry garlic, peanuts and sesame.", "Blend coarsely (should not be smooth).", "Add vinegar and salt.", "Store in jar covered with oil.", "Improves with time — lasts months."],
    description: "Oil-based salsa with fried chiles, peanuts and sesame — from Veracruz. Addictive on everything."
  },
  "adobo-mexicano": {
    name: "Mexican Adobo",
    ingredients: ["Ancho and guajillo chiles", "Tomato", "Garlic", "Onion", "Vinegar", "Oregano", "Cumin", "Cloves"],
    steps: ["Soak chiles in hot water.", "Roast tomato, garlic and onion.", "Blend everything with vinegar and spices.", "Strain for smooth texture.", "Use to marinate meats.", "Can be stored for weeks."],
    description: "Chile paste for marinating meats — the foundation of many Mexican dishes."
  },
  "habanero-salsa": {
    name: "Yucatecan Habanero Salsa",
    ingredients: ["6 habanero chiles", "1 red onion", "Bitter orange juice", "Salt", "Cilantro"],
    steps: ["Roast habaneros and onion.", "Blend with bitter orange juice.", "Add salt and cilantro.", "Salsa should be liquid.", "VERY hot — use with caution.", "Essential accompaniment for cochinita pibil."],
    description: "Mexico's hottest salsa — habanero with bitter orange. Emblematic of Yucatán."
  },
  "molho-apimentado-habanero": {
    name: "Extra Spicy Habanero Sauce",
    ingredients: ["10 habanero chiles", "Ripe mango", "Vinegar", "Salt", "Red onion", "Garlic"],
    steps: ["Roast habaneros on griddle.", "Peel and chop mango.", "Blend habaneros with mango, vinegar and garlic.", "Add salt to taste.", "Strain if desired for smooth texture.", "WARNING: wear gloves when handling habaneros."],
    description: "Extremely spicy habanero sauce with mango — tropical sweetness that intensifies the heat."
  },
  "molho-suave-aguacate": {
    name: "Mild Avocado & Tomatillo Sauce",
    ingredients: ["2 ripe avocados", "4 tomatillos", "Cilantro", "Onion", "Lime", "Sour cream", "Salt"],
    steps: ["Cook tomatillos for 5 min.", "Blend with avocado and cilantro.", "Add sour cream and lime.", "Season with salt.", "Texture should be creamy.", "Perfect for those who don't like spicy."],
    description: "Creamy and mild avocado sauce — perfect for children and those who prefer no heat."
  },
  "molho-defumado-chipotle": {
    name: "Smoky Chipotle Sauce",
    ingredients: ["1 can chipotles in adobo", "Mayonnaise", "Sour cream", "Lime", "Garlic", "Salt"],
    steps: ["Blend chipotles with mayo and cream.", "Add garlic and lime.", "Season with salt.", "Texture should be smooth and creamy.", "Serve as dipping sauce.", "The smoky flavor goes with everything."],
    description: "Creamy sauce with the iconic smoky flavor of chipotle — dried and smoked jalapeño."
  },

  // ============ SOBREMESAS ============
  "churros": {
    name: "Churros with Chocolate",
    ingredients: ["1 cup all-purpose flour", "1 cup water", "2 tbsp butter", "1 egg", "Sugar and cinnamon", "Oil for frying", "Mexican chocolate (Abuelita)"],
    steps: ["Boil water with butter and salt.", "Add flour all at once and stir until dough pulls from pan.", "Cool and add egg.", "Pipe through churro maker and fry in hot oil.", "Roll in cinnamon sugar.", "Serve with hot chocolate for dipping."],
    description: "Mexican churros are thicker and served with thick hot chocolate. A tradition since colonial times."
  },
  "flan-mexicano": {
    name: "Mexican Flan",
    ingredients: ["1 can condensed milk", "1 can evaporated milk", "5 eggs", "1 tbsp vanilla", "1 cup sugar for caramel", "Cream cheese (optional)"],
    steps: ["Make caramel with sugar and coat the mold.", "Blend eggs, condensed milk, evaporated milk and vanilla.", "Optionally add cream cheese for Neapolitan flan.", "Pour into caramelized mold.", "Bake in water bath for 1h at 180°C.", "Refrigerate 4h and unmold."],
    description: "Mexican flan is denser and creamier than Spanish. The Neapolitan version with cream cheese is irresistible."
  },
  "tres-leches": {
    name: "Tres Leches Cake",
    ingredients: ["Sponge cake (flour, eggs, sugar)", "Condensed milk", "Evaporated milk", "Heavy cream", "Whipped cream", "Ground cinnamon", "Cherries for decoration"],
    steps: ["Bake sponge cake and let cool.", "Mix the 3 milks.", "Poke holes in cake and pour milk mixture.", "Refrigerate at least 4 hours.", "Cover with whipped cream.", "Sprinkle cinnamon and decorate with cherries."],
    description: "Cake soaked in three types of milk — absurdly moist and sweet. Favorite dessert across Latin America."
  },
  "arroz-con-leche": {
    name: "Rice Pudding",
    ingredients: ["1 cup rice", "4 cups milk", "1 can condensed milk", "1 cinnamon stick", "Lemon peel", "Raisins", "Ground cinnamon"],
    steps: ["Cook rice in water until soft.", "Add milk and cinnamon stick.", "Cook on low heat stirring always.", "Add condensed milk and raisins.", "Cook until creamy.", "Serve cold or warm with sprinkled cinnamon."],
    description: "Rice pudding with milk and cinnamon — Mexican comfort food that every abuela makes perfectly."
  },
  "pan-de-muerto": {
    name: "Day of the Dead Bread",
    ingredients: ["500g flour", "Eggs", "Butter", "Sugar", "Orange blossom water", "Orange zest", "Yeast", "Salt"],
    steps: ["Mix flour, yeast, sugar and salt.", "Add eggs, butter and orange blossom water.", "Knead 15 min until smooth.", "Rest 2h until doubled.", "Shape into round form with decorative 'bones'.", "Bake at 180°C for 25 min and coat with sugar."],
    description: "Traditional Day of the Dead sweet bread — with orange blossom aroma and bone-shaped decorations."
  },
  "cajeta": {
    name: "Cajeta (Goat Milk Caramel)",
    ingredients: ["1 liter goat milk", "1 cup sugar", "1/4 tsp baking soda", "1 cinnamon stick", "Vanilla"],
    steps: ["Heat milk with sugar and cinnamon.", "Add baking soda (it will foam).", "Cook on low heat stirring constantly.", "Reduce until thick and golden (1h30).", "Remove cinnamon and add vanilla.", "Serve over ice cream, fruit or wafers."],
    description: "Goat milk caramel from Celaya — more complex and caramelized than dulce de leche. Pride of Guanajuato."
  },
  "buñuelos": {
    name: "Buñuelos",
    ingredients: ["2 cups flour", "1 egg", "Milk", "Butter", "Salt", "Cinnamon", "Piloncillo (raw cane sugar)", "Oil for frying"],
    steps: ["Mix flour, egg, milk and butter.", "Knead until smooth and rest 30 min.", "Roll into thin discs.", "Fry in hot oil until golden.", "Prepare syrup: piloncillo, cinnamon and water.", "Serve buñuelos with warm syrup."],
    description: "Thin fried dough discs served with piloncillo syrup. Mexican Christmas tradition."
  },
  "gelatina-mosaic": {
    name: "Mosaic Gelatin",
    ingredients: ["Gelatin in various flavors (4 colors)", "Condensed milk", "Heavy cream", "Unflavored gelatin", "Vanilla"],
    steps: ["Prepare each colored gelatin and refrigerate.", "Cut into small cubes.", "Mix condensed milk, cream and unflavored gelatin.", "Place colored cubes in a mold.", "Pour milk mixture on top.", "Refrigerate 4h and unmold."],
    description: "Multicolored gelatin in milk base — mandatory at Mexican parties and posadas."
  },
  "capirotada": {
    name: "Capirotada",
    ingredients: ["Bolillos (bread) in slices", "Piloncillo (raw cane sugar)", "Cinnamon", "Fresh cheese", "Raisins", "Peanuts", "Banana", "Butter"],
    steps: ["Fry bread slices in butter.", "Prepare piloncillo syrup with cinnamon.", "Layer: bread, cheese, raisins, peanuts.", "Drizzle each layer with syrup.", "Repeat layers.", "Bake at 180°C for 20 min."],
    description: "Mexican Lenten bread pudding — layers of bread, cheese, fruit and piloncillo syrup."
  },
  "chongos-zamoranos": {
    name: "Chongos Zamoranos",
    ingredients: ["1 liter fresh milk", "Rennet tablet", "Sugar", "Cinnamon stick", "Vanilla"],
    steps: ["Heat milk to 37°C.", "Add rennet and wait for it to curdle.", "Cut curd into squares.", "Add sugar and cinnamon.", "Cook on very low heat for 3h without stirring.", "Curds should be firm and caramelized. Serve cold."],
    description: "Colonial dessert from Zamora, Michoacán — milk slowly curdled and caramelized with cinnamon."
  },
  "alegrias": {
    name: "Alegrías (Amaranth Bars)",
    ingredients: ["2 cups popped amaranth", "Honey or piloncillo", "Raisins", "Peanuts", "Pumpkin seeds"],
    steps: ["Heat honey or piloncillo to thick thread stage.", "Mix with popped amaranth.", "Add dried fruits and seeds.", "Press into rectangular mold.", "Let cool and harden.", "Cut into bars."],
    description: "Amaranth bars with honey — pre-Hispanic sweet that the Aztecs considered sacred food."
  },
  "helado-nieve": {
    name: "Oaxacan Nieves (Ice Cream)",
    ingredients: ["Leche quemada (burnt milk)", "Tuna (prickly pear fruit)", "Mango", "Lime", "Milk", "Sugar"],
    steps: ["Nieves are artisanal ice creams from Oaxaca.", "Leche quemada: milk slowly caramelized.", "Tuna: prickly pear fruit blended with sugar.", "Prepare base and freeze, stirring every 30 min.", "Texture should be creamy without crystals.", "Tradition of 'nieveros' selling in the plazas."],
    description: "Artisanal ice creams from Oaxaca with unique flavors — burnt milk, prickly pear and mango."
  },
  "mazapan": {
    name: "Mexican Mazapán",
    ingredients: ["2 cups roasted peanuts", "1 cup powdered sugar", "Pinch of salt"],
    steps: ["Grind peanuts to fine powder.", "Mix with powdered sugar.", "Mixture should stick when pressed.", "Press into molds or make discs.", "Mazapán should melt in your mouth.", "No baking needed — it's raw."],
    description: "Mexican peanut candy that melts in your mouth — 2 ingredients and pure nostalgia."
  },

  // ============ BEBIDAS ============
  "agua-horchata": {
    name: "Horchata Water",
    ingredients: ["1 cup rice", "1/2 cup almonds", "1 cinnamon stick", "Sugar", "Vanilla", "Water", "Ice"],
    steps: ["Soak rice, almonds and cinnamon for 8h.", "Blend with water.", "Strain through fine cloth.", "Add sugar and vanilla.", "Serve very cold with ice.", "Can add a touch of condensed milk."],
    description: "Refreshing rice, almond and cinnamon drink. Mexico's most popular agua fresca."
  },
  "agua-jamaica": {
    name: "Jamaica Water (Hibiscus Tea)",
    ingredients: ["2 cups dried hibiscus flowers", "1 cup sugar", "8 cups water", "Ice", "Lime (optional)"],
    steps: ["Boil hibiscus flowers in 4 cups water.", "Cook 10 min and strain.", "Dissolve sugar in hot liquid.", "Top up with cold water.", "Serve very cold with ice.", "Squeeze lime if desired."],
    description: "Iced hibiscus tea — ruby red, tart and refreshing. Present at every fonda and taquería."
  },
  "chocolate-mexicano": {
    name: "Mexican Hot Chocolate",
    ingredients: ["Mexican chocolate tablets (Abuelita or Ibarra)", "Milk", "Cinnamon", "Ancho chile (optional)", "Vanilla"],
    steps: ["Heat milk without boiling.", "Add chocolate tablet and stir.", "Add cinnamon and vanilla.", "Beat with molinillo (wooden whisk) until foamy.", "For spicy version, add ancho chile powder.", "Serve hot and frothy."],
    description: "Hot chocolate with cinnamon whisked with a molinillo — tradition from the Aztecs. The cinnamon aroma is unmistakable."
  },
  "atole": {
    name: "Vanilla Atole",
    ingredients: ["Corn masa or cornstarch", "Milk", "Piloncillo or sugar", "Cinnamon stick", "Vanilla"],
    steps: ["Dissolve masa in cold water.", "Heat milk with cinnamon and piloncillo.", "Add dissolved masa.", "Stir constantly to prevent lumps.", "Cook until thickened.", "Serve hot — perfect accompaniment for tamales."],
    description: "Hot thick corn drink — pre-Hispanic tradition. Inseparable from tamales at breakfast."
  },
  "tepache": {
    name: "Tepache",
    ingredients: ["Peels from 2 pineapples", "Piloncillo (raw cane sugar)", "Cinnamon stick", "Cloves", "Water", "Árbol chile (optional)"],
    steps: ["Place pineapple peels in large jar.", "Add piloncillo, cinnamon and cloves.", "Cover with water.", "Cover with cloth and ferment 3 days.", "Strain and serve cold.", "Light natural effervescence."],
    description: "Fermented pineapple peel drink — refreshing, slightly alcoholic and creative recycling."
  },
  "cafe-de-olla": {
    name: "Café de Olla",
    ingredients: ["Coarsely ground coffee", "Piloncillo", "Cinnamon stick", "Cloves", "Orange peel", "Water"],
    steps: ["Boil water with piloncillo and cinnamon.", "Add cloves and orange peel.", "When boiling, add coffee.", "Cook on low heat for 5 min.", "Remove from heat and let settle.", "Strain and serve in clay mugs."],
    description: "Mexican coffee brewed in clay pot with raw sugar and cinnamon. A flavor no coffee machine can reproduce."
  },
  "champurrado": {
    name: "Champurrado",
    ingredients: ["Corn masa or cornstarch", "Mexican chocolate", "Milk", "Piloncillo", "Cinnamon", "Vanilla", "Water"],
    steps: ["Dissolve masa in water.", "Heat milk with piloncillo and cinnamon.", "Add dissolved masa stirring constantly.", "Add chocolate and stir until melted.", "Cook until thick and homogeneous.", "Serve hot — the Mexican version of hot chocolate."],
    description: "Thick chocolate atole — corn masa combined with Mexican chocolate. The warmest embrace in a cup."
  },
  "michelada": {
    name: "Michelada",
    ingredients: ["Mexican light beer", "Lime juice", "Worcestershire sauce", "Hot sauce", "Salt", "Tajín", "Ice", "Clamato (optional)"],
    steps: ["Rub lime on glass rim.", "Dip in salt and tajín.", "Add ice, lime and sauces.", "Top with cold beer.", "Stir gently.", "Clamato variation: beer with tomato juice and seafood."],
    description: "Prepared beer with lime, salt and sauces — the perfect Mexican drink for hot days."
  },
  "margarita": {
    name: "Classic Margarita",
    ingredients: ["60ml blanco tequila", "30ml Cointreau", "30ml lime juice", "Salt for rim", "Ice"],
    steps: ["Rub lime on glass rim.", "Dip in salt.", "Add tequila, Cointreau and lime to shaker.", "Add ice and shake 15 seconds.", "Strain into glass with ice.", "Garnish with lime wheel."],
    description: "The world's most famous Mexican cocktail — tequila, lime and Cointreau in perfect balance."
  },
  "pulque": {
    name: "Pulque",
    ingredients: ["Aguamiel (agave sap)", "Fermentation time", "Fruits for curado (optional)"],
    steps: ["Extract aguamiel from agave heart.", "Ferment naturally for 1-2 days.", "Result is milky and slightly acidic drink.", "For curado: blend with fruits (mango, strawberry, guava).", "Serve fresh in glass.", "Aztec tradition with 2,000+ years."],
    description: "Sacred Aztec drink — fermented agave sap. The ancestor of tequila and mezcal."
  },

  // ============ MARISCOS ============
  "ceviche-mexicano": {
    name: "Mexican Ceviche",
    ingredients: ["500g fresh white fish", "Juice of 10 limes", "2 chopped tomatoes", "Red onion", "Cucumber", "Cilantro", "Serrano chile", "Avocado"],
    steps: ["Cut fish into small cubes.", "Cover with lime juice and marinate 30 min.", "When fish turns opaque, drain some lime.", "Add tomato, onion, cucumber and cilantro.", "Season with chile, salt and pepper.", "Serve with tostadas and sliced avocado."],
    description: "Fresh fish 'cooked' in lime with fresh vegetables. Unlike Peruvian, Mexican ceviche has tomato and is eaten on tostadas."
  },
  "camarones-diabla": {
    name: "Deviled Shrimp",
    ingredients: ["500g large shrimp", "6 árbol chiles", "4 guajillo chiles", "Tomato", "Garlic", "Onion", "Achiote", "Lime", "White rice"],
    steps: ["Soak and blend chiles with tomato and garlic.", "Fry salsa in hot oil.", "Add shrimp and cook 5 min.", "Adjust heat and salt.", "Serve with white rice and lime.", "Accompany with warm tortillas."],
    description: "Shrimp in super spicy chile sauce — 'a la diabla' because it burns like the devil. For heat lovers."
  },
  "aguachile": {
    name: "Green Aguachile",
    ingredients: ["500g fresh shrimp", "10 limes", "Serrano chile", "Cucumber", "Red onion", "Cilantro", "Salt"],
    steps: ["Butterfly the shrimp.", "Blend lime with serrano chile and cilantro.", "Pour aguachile over shrimp.", "Add cucumber and red onion.", "Marinate for 15 min.", "Serve with tostadas."],
    description: "Raw shrimp in lime and chile — spicier and fresher than ceviche. Sinaloa specialty."
  },
  "coctel-camarones": {
    name: "Shrimp Cocktail",
    ingredients: ["500g cooked shrimp", "Ketchup", "Lime juice", "Chopped onion", "Cilantro", "Avocado", "Serrano chile", "Cucumber"],
    steps: ["Cook shrimp and cool.", "Mix ketchup with lime juice.", "Add onion, cilantro and chile.", "Add shrimp to sauce.", "Add cucumber and avocado.", "Serve in large glass with tostadas."],
    description: "Shrimp in citrusy tomato sauce — served in large glasses at beaches and marisquerías."
  },
  "pescado-zarandeado": {
    name: "Zarandeado Fish",
    ingredients: ["1 whole fish (sea bass or snapper)", "Guajillo and ancho chiles", "Mayonnaise", "Lime", "Garlic", "Onion", "Salt and pepper"],
    steps: ["Butterfly the fish.", "Blend chiles with garlic and spices.", "Mix paste with mayonnaise.", "Cover fish with mixture.", "Grill over charcoal for 20-25 min.", "Serve with tortillas, lime and salsa."],
    description: "Whole fish grilled over charcoal covered in chile paste — Nayarit specialty."
  },
  "camarones-ajillo": {
    name: "Garlic Butter Shrimp",
    ingredients: ["500g large shrimp", "10 sliced garlic cloves", "Butter", "Guajillo chile powder", "Lime", "Cilantro", "White rice"],
    steps: ["Melt butter in hot pan.", "Fry sliced garlic until lightly golden.", "Add shrimp and guajillo chile.", "Cook 2-3 min each side.", "Squeeze lime generously.", "Serve with white rice and cilantro."],
    description: "Garlic butter shrimp — a classic from Mexican seafood restaurants, simple and irresistible."
  },
  "tacos-camaron": {
    name: "Grilled Shrimp Tacos",
    ingredients: ["500g shrimp", "Ancho chile powder", "Lime", "Garlic", "Purple cabbage", "Chipotle sour cream", "Corn tortillas"],
    steps: ["Marinate shrimp with lime, garlic and chile.", "Grill on high heat 2 min each side.", "Thinly slice purple cabbage.", "Mix cream with chipotle.", "Assemble tacos with cabbage and shrimp.", "Finish with sauce and lime."],
    description: "Grilled chile shrimp in corn tortillas — fresh, quick and delicious."
  },
  "tostada-atun": {
    name: "Tuna Tostada",
    ingredients: ["300g sashimi-grade fresh tuna", "Lime juice", "Soy sauce", "Serrano chile", "Cucumber", "Avocado", "Tostadas", "Chipotle mayo"],
    steps: ["Dice tuna into small cubes.", "Mix with lime, soy and chile.", "Dice cucumber and avocado.", "Spread chipotle mayo on tostada.", "Assemble with cucumber, tuna and avocado.", "Finish with sesame and cilantro."],
    description: "Mexican-Japanese fusion — fresh tuna with lime and soy on crispy tostada."
  },
  "tacos-marlín": {
    name: "Smoked Marlin Tacos",
    ingredients: ["300g shredded smoked marlin", "Tomato", "Onion", "Chipotle chile", "Sour cream", "Corn tortillas", "Cabbage", "Lime"],
    steps: ["Shred smoked marlin.", "Sauté onion and tomato.", "Add chipotle and marlin.", "Cook 10 min stirring.", "Assemble tacos with cabbage and cream.", "Serve with lime."],
    description: "Smoked marlin tacos — Baja California Sur specialty. Sea flavor with intense smokiness."
  },

  // ============ ARROZ & FEIJÃO ============
  "arroz-rojo": {
    name: "Mexican Red Rice",
    ingredients: ["2 cups rice", "2 tomatoes", "Onion", "Garlic", "Chicken broth", "Peas and carrot", "Cilantro"],
    steps: ["Blend tomato with onion and garlic.", "Fry rice in oil until golden.", "Add tomato mixture and fry.", "Pour in hot broth and add peas and carrot.", "Cover and cook on low for 20 min.", "Don't stir! Fluff with fork at the end."],
    description: "Mexican red rice is fried before cooking in tomato broth — each grain comes out loose and flavorful."
  },
  "frijoles-charros": {
    name: "Charro Beans",
    ingredients: ["500g pinto beans", "Bacon", "Chorizo", "Sausage", "Tomato", "Onion", "Serrano chile", "Cilantro", "Beer (optional)"],
    steps: ["Pressure cook beans for 40 min.", "Fry bacon, chorizo and sausage.", "Add tomato, onion and chile.", "Mix into beans with broth.", "Add beer if desired.", "Cook 20 more min. Serve with cilantro."],
    description: "Cowboy beans — soupy with bacon, chorizo and sausage. Favorite side dish for barbecues."
  },
  "frijoles-refritos": {
    name: "Refried Beans",
    ingredients: ["2 cups cooked pinto beans", "Lard or oil", "Onion", "Salt", "Fresh cheese for serving"],
    steps: ["Sauté chopped onion in lard.", "Add cooked beans with some broth.", "Mash with potato masher.", "Keep cooking and mashing until creamy.", "Beans should pull away from the pan.", "Serve with crumbled fresh cheese on top."],
    description: "Fried and mashed beans — the ubiquitous side dish at every Mexican meal."
  },
  "arroz-verde": {
    name: "Green Rice",
    ingredients: ["2 cups rice", "Poblano", "Spinach", "Cilantro", "Chicken broth", "Onion", "Garlic", "Sour cream"],
    steps: ["Blend poblano, spinach and cilantro with broth.", "Fry rice in oil.", "Add green mixture.", "Cover and cook 20 min.", "Don't stir during cooking.", "Fluff with fork and serve."],
    description: "Green rice with poblano and spinach — colorful variation of classic Mexican rice."
  },
  "frijoles-negros": {
    name: "Black Beans from the Pot",
    ingredients: ["500g black beans", "Onion", "Epazote", "Salt", "Serrano chile"],
    steps: ["Wash beans and soak for 8h.", "Cook with onion and epazote.", "Cook until soft (1h30 or 40min in pressure cooker).", "Add salt only at the end.", "Broth should be dark and aromatic.", "Serve with tortillas and chile."],
    description: "Black beans cooked with epazote — the herb that defines the flavor. Base of southern Mexican cuisine."
  },
  "arroz-con-rajas": {
    name: "Rice with Poblano Strips and Corn",
    ingredients: ["2 cups rice", "Poblano chile strips", "Corn kernels", "Sour cream", "Cheese", "Chicken broth"],
    steps: ["Fry rice in oil.", "Add broth and cook.", "Roast and peel poblanos into strips.", "Mix strips and corn into cooked rice.", "Add cream and cheese.", "Broil if desired."],
    description: "Rice with poblano chile strips and corn — festive and comforting dish."
  },
  "frijoles-puercos": {
    name: "Frijoles Puercos (Loaded Beans)",
    ingredients: ["Cooked bayo beans", "Bacon", "Chorizo", "Chicharrón", "Cheese", "Jalapeño chile", "Sour cream"],
    steps: ["Fry bacon and chorizo.", "Add cooked beans with broth.", "Break chicharrón and mix in.", "Add chopped jalapeño.", "Serve with cheese and cream.", "The indulgent version of Mexican beans."],
    description: "The most indulgent version of Mexican beans — with bacon, chorizo, chicharrón and everything."
  },
  "arroz-mexicano": {
    name: "Mexican Rice",
    ingredients: ["2 cups rice", "Tomato", "Onion", "Garlic", "Chicken broth", "Peas", "Carrot", "Cilantro"],
    steps: ["Blend tomato with onion and garlic.", "Fry rice until golden.", "Add tomato mixture.", "Pour hot broth.", "Add vegetables, cover and cook 20 min.", "Fluff with fork."],
    description: "Classic Mexican rice cooked in tomato broth — the essential side dish."
  },

  // ============ CAFÉ DA MANHÃ ============
  "huevos-rancheros": {
    name: "Ranchero Eggs",
    ingredients: ["4 eggs", "Corn tortillas", "Red salsa", "Refried beans", "Fresh cheese", "Sour cream", "Avocado", "Cilantro"],
    steps: ["Lightly fry tortillas in oil.", "Prepare red salsa.", "Fry eggs (sunny side up).", "Assemble: tortilla, beans, egg, salsa.", "Top with cheese, cream and avocado.", "Serve with cilantro and lime."],
    description: "Sunny side up eggs on tortilla with red salsa and beans — the Mexican ranch breakfast."
  },
  "huevos-divorciados": {
    name: "Divorced Eggs",
    ingredients: ["2 eggs", "Red salsa", "Green salsa", "Corn tortillas", "Refried beans", "Fresh cheese", "Chilaquiles"],
    steps: ["Fry 2 sunny side up eggs.", "Prepare red and green salsa.", "Place each egg on a tortilla.", "Drench one egg in green salsa, the other in red.", "Separate with a line of refried beans.", "Serve with cheese and chilaquiles."],
    description: "Two 'divorced' eggs — one with green salsa, one with red. Separated by beans. Mexican humor on a plate."
  },
  "migas": {
    name: "Migas",
    ingredients: ["Fried tortilla strips", "Eggs", "Green or red salsa", "Refried beans", "Fresh cheese", "Sour cream"],
    steps: ["Fry tortilla strips until crispy.", "Beat eggs and add to tortillas.", "Mix with salsa.", "Cook stirring gently.", "Serve with beans and cheese.", "Accompany with warm tortillas."],
    description: "Scrambled eggs with tortilla strips and salsa — quick and comforting breakfast."
  },
  "enfrijoladas": {
    name: "Enfrijoladas",
    ingredients: ["Corn tortillas", "Blended black beans", "Shredded chicken", "Sour cream", "Fresh cheese", "Red onion", "Epazote"],
    steps: ["Blend cooked beans with epazote and broth.", "Dip tortillas in bean sauce.", "Fill with chicken.", "Fold and arrange on plate.", "Cover with more bean sauce.", "Decorate with cream, cheese and onion."],
    description: "Tortillas bathed in black bean sauce — an alternative to enchiladas with a deeper, earthier flavor."
  },
  "machaca": {
    name: "Machaca with Eggs",
    ingredients: ["200g shredded dried beef", "4 eggs", "Tomato", "Onion", "Serrano chile", "Flour tortillas"],
    steps: ["Sauté onion and tomato.", "Add serrano chile.", "Add shredded dried beef.", "Beat eggs and add.", "Stir until cooked.", "Serve with flour tortillas."],
    description: "Dried beef with eggs — northern Mexico breakfast, especially Sonora and Chihuahua."
  },
  "entomatadas": {
    name: "Entomatadas",
    ingredients: ["Corn tortillas", "6 tomatoes", "Onion and garlic", "Shredded chicken", "Fresh cheese", "Sour cream", "Oregano"],
    steps: ["Roast and blend tomatoes with onion and garlic.", "Fry sauce in oil.", "Dip tortillas in sauce.", "Fill with chicken and fold.", "Cover with sauce, cheese and cream.", "Sprinkle oregano."],
    description: "Tortillas in tomato sauce — milder than enchiladas, perfect for breakfast."
  },
  "pan-dulce": {
    name: "Pan Dulce (Conchas)",
    ingredients: ["All-purpose flour", "Sugar", "Eggs", "Butter", "Yeast", "Vanilla", "Topping: flour, sugar, butter, cocoa"],
    steps: ["Prepare sweet dough with flour, eggs and butter.", "Knead and rest for 2h.", "Prepare topping with flour, sugar and butter.", "Shape balls and cover with topping disc.", "Score shell pattern with cutter.", "Bake at 180°C for 18 min."],
    description: "Conchas are Mexico's most iconic sweet bread — crunchy topping over soft and fluffy bread."
  },
  "huevos-motulenos": {
    name: "Motuleño Eggs",
    ingredients: ["Fried eggs", "Tortillas", "Black beans", "Tomato salsa", "Ham", "Peas", "Fried banana", "Fresh cheese"],
    steps: ["Lightly fry tortillas.", "Spread black beans on top.", "Place fried egg over beans.", "Cover with tomato salsa.", "Add ham, peas and cheese.", "Garnish with fried banana — yes, banana!"],
    description: "Extravagant Yucatecan breakfast — egg, beans, ham, fried banana and salsa. From Motul, Yucatán."
  },
  "chilaquiles-especiais": {
    name: "Chilaquiles with Chicken",
    ingredients: ["Tortilla chips", "Green salsa", "Shredded chicken", "Sour cream", "Oaxaca cheese", "Red onion", "Cilantro"],
    steps: ["Fry tortilla chips until crispy.", "Heat green salsa.", "Mix chips with salsa.", "Top with shredded chicken.", "Add melted Oaxaca cheese.", "Finish with cream, onion and cilantro."],
    description: "Chilaquiles with shredded chicken and Oaxaca cheese — Mexico's most popular breakfast."
  },

  // ============ TAMALES & MASSAS ============
  "tamales-dulces": {
    name: "Sweet Tamales",
    ingredients: ["Masa harina", "Whipped lard", "Sugar", "Pink food coloring", "Raisins", "Corn husks", "Milk"],
    steps: ["Whip lard until fluffy.", "Mix masa, sugar and milk.", "Add pink coloring and raisins.", "Spread on corn husk.", "Fold and close.", "Steam for 1h."],
    description: "Pink sweet tamales with raisins — Mexican breakfast tradition, especially on Three Kings Day."
  },
  "empanadas-mexicanas": {
    name: "Picadillo Empanadas",
    ingredients: ["Corn or wheat masa", "300g ground beef", "Diced potato", "Diced carrot", "Chipotle chile", "Tomato", "Raisins", "Cumin"],
    steps: ["Prepare picadillo: sauté meat, potato and carrot.", "Season with chipotle, tomato and spices.", "Shape masa discs.", "Fill and seal into half-moons.", "Fry or bake until golden.", "Serve with salsa and cream."],
    description: "Empanadas filled with picadillo — ground beef with potato, carrot and chile. Fried or baked."
  },
  "tamales-oaxaquenos": {
    name: "Oaxacan Tamales",
    ingredients: ["Corn masa", "Whipped lard", "Black mole", "Shredded chicken", "Banana leaves", "Chicken broth"],
    steps: ["Whip lard until fluffy, mix with masa.", "Prepare or use pre-made black mole.", "Mix chicken with mole.", "Spread masa on banana leaves.", "Add mole chicken filling.", "Fold and steam for 1h."],
    description: "Tamales in banana leaves with black mole — the most sophisticated and aromatic version from Oaxaca."
  },
  "tamales-rajas": {
    name: "Rajas and Cheese Tamales",
    ingredients: ["Corn masa", "Whipped lard", "Poblano chile strips (rajas)", "Oaxaca cheese", "Sour cream", "Corn husks"],
    steps: ["Roast and peel poblanos, cut into strips.", "Whip lard and mix with masa.", "Spread masa on corn husk.", "Add rajas, cheese and cream.", "Fold and close.", "Steam for 1h."],
    description: "Vegetarian tamales with poblano chile and melted cheese — one of the most popular fillings."
  },
  "tamales-verdes": {
    name: "Green Chicken Tamales",
    ingredients: ["Corn masa", "Whipped lard", "Chicken broth", "Shredded chicken", "Tomatillo green salsa", "Corn husks"],
    steps: ["Whip lard until fluffy, mix with masa and broth.", "Soak corn husks in hot water.", "Mix chicken with green salsa.", "Spread masa on husk.", "Place filling in center.", "Fold, close and steam for 1h."],
    description: "Classic tamales filled with chicken in green tomatillo salsa — age-old tradition."
  },
  "chiles-nogada": {
    name: "Chiles en Nogada",
    ingredients: ["Poblano chiles", "Picadillo with meat and fruits", "Walnuts", "Goat cheese", "Cream", "Milk", "Pomegranate", "Parsley"],
    steps: ["Roast and peel poblanos.", "Prepare picadillo with meat, fruits and spices.", "Stuff the chiles.", "Blend walnuts with cheese, cream and milk for nogada.", "Bathe chiles with white nogada.", "Decorate with pomegranate and parsley — green, white and red."],
    description: "Patriotic dish: stuffed chile with walnut sauce and pomegranate — the colors of the Mexican flag. Served in September."
  },
  "torta-ahogada": {
    name: "Torta Ahogada (Drowned Sandwich)",
    ingredients: ["Birotes (hard Guadalajara bread)", "Pork carnitas", "Árbol chile salsa", "Tomato salsa", "Onion", "Lime"],
    steps: ["Open birote and fill with carnitas.", "Prepare spicy árbol chile salsa.", "Prepare mild tomato salsa.", "Drown sandwich in salsa (ahogada = drowned).", "Top with chopped onion.", "Serve with lime."],
    description: "Sandwich 'drowned' in spicy salsa — Guadalajara icon. The hard birote bread holds without falling apart."
  },
  "cemita-poblana": {
    name: "Cemita Poblana",
    ingredients: ["Cemita bread (with sesame)", "Breaded cutlet", "Oaxaca cheese", "Avocado", "Pápalo (herb)", "Chipotle", "Beans"],
    steps: ["Prepare breaded cutlet and fry.", "Cut cemita bread in half.", "Spread beans and chipotle.", "Add cutlet, cheese and avocado.", "Add fresh pápalo.", "Close and serve."],
    description: "Monumental sandwich from Puebla — cutlet, cheese, avocado and the pápalo herb that defines the flavor."
  },

  // ============ TORTILLAS & BASES ============
  "tortilla-milho": {
    name: "Artisanal Corn Tortilla",
    ingredients: ["2 cups masa harina", "1¼ cups warm water", "Pinch of salt"],
    steps: ["Mix masa harina with water and salt.", "Knead until smooth and pliable.", "Make walnut-sized balls.", "Press in tortilla press or between plastic.", "Cook on hot griddle 1 min each side.", "Tortilla should puff slightly — sign of perfection."],
    description: "The foundation of all Mexican cuisine. Nixtamalized corn tortilla is Mexico's cultural heritage."
  },
  "tortilla-trigo": {
    name: "Flour Tortilla",
    ingredients: ["3 cups all-purpose flour", "1/3 cup lard or oil", "1 tsp salt", "1 cup warm water"],
    steps: ["Mix flour and salt.", "Add lard and work with hands.", "Add water gradually.", "Knead 5 min and rest 30 min.", "Divide into balls and roll flat.", "Cook on hot griddle until golden bubbles."],
    description: "From northern Mexico, flour tortilla is soft and flexible — perfect for burritos and quesadillas."
  },
  "gorditas-base": {
    name: "Gorditas de Masa",
    ingredients: ["Corn masa", "Lard", "Salt", "Filling of choice"],
    steps: ["Mix masa with lard and salt.", "Form thick discs (2cm).", "Cook on griddle until golden.", "Open in half while hot.", "Fill generously.", "Serve with salsa."],
    description: "Versatile base of Mexican cuisine — thick masa discs split open and stuffed."
  },
  "sopes-base": {
    name: "Artisanal Sopes",
    ingredients: ["Corn masa", "Salt", "Oil for frying", "Refried beans", "Various toppings"],
    steps: ["Shape 10cm masa discs.", "Cook on griddle until firm.", "While hot, pinch up edges.", "Briefly fry in oil.", "Spread beans on base.", "Top with toppings of choice."],
    description: "Masa boats with raised edges — pre-Hispanic antojito perfect for any filling."
  },
  "tlacoyos-base": {
    name: "Bean Tlacoyos",
    ingredients: ["Blue corn masa", "Black beans", "Fresh cheese", "Nopales", "Green salsa", "Sour cream"],
    steps: ["Prepare masa with blue corn.", "Shape oval and fill with beans in center.", "Close and flatten into diamond shape.", "Cook on griddle until golden on both sides.", "Top with nopales, cheese and salsa.", "Finish with sour cream."],
    description: "Ancient antojito in diamond shape — bean-filled and topped with nopales. Living Aztec tradition."
  },
  "tostadas-base": {
    name: "Crispy Tostadas",
    ingredients: ["Corn tortillas", "Oil for frying", "Salt"],
    steps: ["Use day-old tortillas (drier).", "Heat oil to 180°C.", "Fry one tortilla at a time keeping flat.", "Fry 1-2 min each side until golden.", "Drain on paper towels.", "Season with salt and use as base."],
    description: "The crispy base for infinite combinations — from ceviche to tinga. Tortillas fried to perfection."
  },
  "pupusas-mex": {
    name: "Memelas",
    ingredients: ["Corn masa", "Lard", "Refried beans", "Green salsa", "Fresh cheese", "Onion"],
    steps: ["Form oval masa discs.", "Cook on griddle until golden.", "Brush with lard.", "Spread refried beans.", "Top with salsa and cheese.", "Serve hot."],
    description: "Oval masa discs brushed with lard and topped with beans — Oaxacan morning antojito."
  },
  "chalupas": {
    name: "Chalupas Poblanas",
    ingredients: ["Corn masa", "Shredded meat or chorizo", "Green or red salsa", "Chopped onion", "Oil"],
    steps: ["Form small masa discs.", "Fry in oil until golden and crispy.", "Top with salsa.", "Add meat or chorizo.", "Sprinkle chopped onion.", "Eat with your hands."],
    description: "Small fried discs topped with salsa and meat — classic Puebla antojito."
  },

  // ============ PRATOS TRADICIONAIS ============
  "enchiladas-verdes": {
    name: "Green Enchiladas",
    ingredients: ["12 corn tortillas", "500g shredded chicken", "Tomatillos", "Serrano chile", "Onion and garlic", "Cilantro", "Sour cream", "Fresh cheese"],
    steps: ["Cook tomatillos with serrano chile.", "Blend with onion, garlic and cilantro.", "Fry green salsa in oil.", "Dip tortillas in oil then salsa.", "Fill with chicken and roll.", "Cover with salsa, cream and cheese."],
    description: "Enchiladas bathed in green tomatillo salsa — fresher and tangier than the red ones."
  },
  "burritos": {
    name: "Beef Burritos",
    ingredients: ["Large flour tortillas", "500g grilled beef", "Mexican rice", "Refried beans", "Guacamole", "Sour cream", "Cheese", "Salsa"],
    steps: ["Grill and chop beef.", "Prepare rice and beans.", "Heat large flour tortilla.", "Add rice, beans, meat in center.", "Add guacamole, cream and cheese.", "Fold sides and roll tightly."],
    description: "From Ciudad Juárez, Chihuahua — giant flour tortilla rolled with various fillings."
  },
  "chimichangas": {
    name: "Chimichangas",
    ingredients: ["Large flour tortillas", "400g shredded meat or chicken", "Refried beans", "Cheese", "Oil for frying", "Guacamole", "Sour cream", "Salsa"],
    steps: ["Prepare filling with meat, beans and cheese.", "Assemble like a tightly sealed burrito.", "Secure with toothpicks if needed.", "Deep fry in hot oil until golden and crispy.", "Drain on paper towels.", "Serve with guacamole, cream and salsa."],
    description: "Deep-fried burrito until crispy — legend says it was an accident when someone dropped a burrito in the fryer."
  },
  "quesadillas-trad": {
    name: "Squash Blossom Quesadillas",
    ingredients: ["Corn or flour tortillas", "Oaxaca cheese", "Squash blossom", "Epazote", "Onion", "Poblano chile"],
    steps: ["Sauté onion with poblano chile.", "Add squash blossom and epazote.", "Cook 3-4 min until wilted.", "Add cheese to tortilla.", "Add filling and fold.", "Grill on griddle until cheese melts."],
    description: "Quesadilla with squash blossom — one of the most traditional and delicate fillings in Mexican cuisine."
  },
  "fajitas": {
    name: "Beef and Chicken Fajitas",
    ingredients: ["300g sirloin", "300g chicken breast", "Colorful bell peppers", "Onion", "Lime", "Cumin", "Flour tortillas", "Guacamole", "Sour cream"],
    steps: ["Marinate meats with lime, cumin and garlic.", "Grill meats on high heat.", "Grill peppers and onion.", "Cut everything into strips.", "Serve sizzling on iron plate.", "Assemble fajitas with tortillas and sides."],
    description: "Grilled meats served sizzling with peppers — created by Texan-Mexican cowboys."
  },
  "chilaquiles-rojos": {
    name: "Red Chilaquiles",
    ingredients: ["Cut corn tortillas", "6 guajillo chiles", "3 tomatoes", "Onion and garlic", "Sour cream", "Fresh cheese", "Fried egg", "Refried beans"],
    steps: ["Cut tortillas into triangles and fry.", "Soak chiles and blend with tomato.", "Fry sauce in oil.", "Add chips to sauce.", "Cook 2-3 min — should be al dente.", "Serve with cream, cheese and fried egg."],
    description: "Red version of chilaquiles with guajillo chile sauce — equally perfect for breakfast."
  },
  "enchiladas-suizas": {
    name: "Swiss Enchiladas",
    ingredients: ["12 corn tortillas", "Shredded chicken", "Tomatillos", "Poblano chile", "Heavy cream", "Gratin cheese", "Onion", "Garlic"],
    steps: ["Prepare green salsa with tomatillos and poblano.", "Mix with heavy cream.", "Dip tortillas in salsa.", "Fill with chicken and roll.", "Cover with creamy salsa.", "Broil with cheese in oven."],
    description: "Enchiladas in creamy green sauce, gratinated — created at Sanborns in Mexico City in the 1950s."
  },
  "papadzules": {
    name: "Yucatecan Papadzules",
    ingredients: ["12 corn tortillas", "6 hard-boiled eggs", "Pumpkin seeds", "Epazote", "Tomato", "Habanero chile", "Salt"],
    steps: ["Toast pumpkin seeds and grind with epazote and salt.", "Add hot water and blend until creamy — this is the pepita salsa.", "Cook and chop eggs.", "Dip tortillas in pepita salsa.", "Fill with chopped egg and roll.", "Cover with pepita salsa and drizzle tomato sauce on top."],
    description: "Mayan pumpkin seed enchiladas — pre-Hispanic Yucatecan dish, egg-filled and bathed in green seed sauce."
  },
  "mole-amarillo": {
    name: "Oaxacan Yellow Mole",
    ingredients: ["Chilcostle chile", "Ancho chile", "Tomato", "Tomatillo", "Hierba santa", "Corn masa", "Chayote", "Green beans", "Chicken"],
    steps: ["Toast and soak chiles.", "Roast tomatoes and tomatillos.", "Blend everything with hierba santa.", "Fry sauce and add broth.", "Thicken with corn masa.", "Add vegetables and chicken — cook 20 min."],
    description: "One of Oaxaca's 7 moles — vibrant yellow, with hierba santa and thickened with masa."
  },

  // ============ QUEIJOS & RECHEIOS ============
  "queijo-oaxaca": {
    name: "Melted Oaxaca Cheese",
    ingredients: ["300g Oaxaca cheese", "Mexican chorizo", "Poblano chile strips", "Flour tortillas"],
    steps: ["Place Oaxaca cheese in clay pot.", "Add fried chorizo on top.", "Add poblano strips.", "Bake or griddle until melted.", "Cheese should be stretching long strings.", "Eat with flour tortillas."],
    description: "Oaxaca cheese is the 'Mexican mozzarella' — melts perfectly and stretches into long strings."
  },
  "queso-fundido": {
    name: "Queso Fundido",
    ingredients: ["300g Chihuahua or Oaxaca cheese", "Mexican chorizo", "Poblano chile", "Onion", "Flour tortillas"],
    steps: ["Fry chorizo until crispy.", "Sauté onion and poblano strips.", "Place cheese in clay pot.", "Add chorizo and strips.", "Broil until melted and bubbling.", "Serve immediately with tortillas."],
    description: "Oven-melted cheese with chorizo — irresistible appetizer eaten with tortillas."
  },
  "queijo-cotija": {
    name: "Cotija Cheese — The Mexican Parmesan",
    ingredients: ["Cotija cheese", "Elotes or esquites", "Beans", "Enchiladas", "Salads"],
    steps: ["Cotija cheese is dry and salty — it doesn't melt.", "Crumble over elotes and esquites.", "Use in salads and soups.", "Sprinkle over beans and enchiladas.", "Substitute for parmesan in Mexican recipes.", "Store in refrigerator for weeks."],
    description: "Dry and salty cheese from Cotija, Michoacán — the Mexican parmesan, essential for elotes and antojitos."
  },
  "recheio-picadillo": {
    name: "Picadillo Filling",
    ingredients: ["500g ground beef", "Diced potato", "Carrot", "Tomato", "Onion", "Raisins", "Olives", "Cumin"],
    steps: ["Fry ground beef with onion.", "Add chopped tomato.", "Add diced potato and carrot.", "Season with cumin and pepper.", "Add raisins and olives.", "Cook until vegetables are tender."],
    description: "Universal Mexican filling — used for chiles rellenos, empanadas, tacos and tamales."
  },
  "recheio-tinga": {
    name: "Chicken Tinga Filling",
    ingredients: ["500g shredded chicken", "Chipotles in adobo", "Tomato", "Onion", "Garlic", "Oregano"],
    steps: ["Cook and shred chicken.", "Sauté onion and garlic.", "Add tomato and chipotles.", "Add shredded chicken.", "Cook 15 min.", "Use on tostadas, tacos or sopes."],
    description: "Smoky and mildly spicy filling — tinga is Puebla's most versatile filling."
  },
  "recheio-rajas": {
    name: "Rajas with Cream Filling",
    ingredients: ["6 poblano chiles", "Onion", "Corn", "Sour cream", "Oaxaca cheese", "Epazote"],
    steps: ["Roast poblanos over direct flame.", "Place in plastic bag 10 min.", "Remove skin and cut into strips (rajas).", "Sauté with onion and corn.", "Add cream and cheese.", "Cook until creamy."],
    description: "Poblano chile strips with cream — creamy filling for quesadillas, tamales and tacos."
  },
  "recheio-vegano": {
    name: "Vegan Nopales and Bean Filling",
    ingredients: ["4 nopal paddles", "Cooked black beans", "Corn", "Tomato", "Onion", "Cilantro", "Serrano chile", "Lime"],
    steps: ["Clean and cut nopales into strips.", "Grill until they lose their slime.", "Sauté with onion and chile.", "Add beans and corn.", "Season with cilantro and lime.", "Use in tacos, sopes or tlacoyos."],
    description: "100% vegan filling with nopales (cactus) and beans — authentic and nutritious, pre-Hispanic tradition."
  },

  // ============ CULTURA MEXICANA ============
  "historia-taco": {
    name: "The History of the Taco",
    ingredients: ["Ancestral knowledge", "Thousand-year tradition", "Culinary evolution"],
    steps: ["Tacos have existed for at least 500 years in Mexico.", "The word 'taco' may come from colonial mining.", "Tacos al pastor emerged from Lebanese immigration in the 1920s.", "Each region of Mexico has its own tacos.", "Los Angeles and Mexico City are the world taco capitals.", "The taco is Mexico's intangible cultural heritage."],
    description: "From pre-Hispanic Mexico to TikTok — the 5,000-year journey of the world's most democratic food."
  },
  "cultura-pimenta": {
    name: "Complete Guide to Mexican Chiles",
    ingredients: ["Ancho chile", "Guajillo chile", "Chipotle chile", "Habanero chile", "Serrano chile", "Poblano chile", "Pasilla chile", "Árbol chile"],
    steps: ["Ancho: dried, sweet, medium — mole base.", "Guajillo: dried, fruity, medium — salsas and adobos.", "Chipotle: smoked jalapeño — deep flavor.", "Habanero: extreme — use with extreme caution.", "Serrano: fresh, hot — for raw salsas.", "Poblano: fresh, mild — chiles rellenos and rajas."],
    description: "Mexico has over 60 chile varieties. Learn the main ones and when to use each."
  },
  "historia-mole": {
    name: "Mole — The Soul of Mexico",
    ingredients: ["30+ ingredients per recipe", "Tradition of Puebla and Oaxaca", "Chocolate, chiles and spices"],
    steps: ["Mole comes from Nahuatl 'molli' (sauce).", "Oaxaca has 7 traditional moles (negro, rojo, amarillo, verde, coloradito, chichilo, manchamanteles).", "Legend of the Puebla nuns who created mole poblano.", "Each family guards their secret recipe.", "Mole can take up to 3 days to prepare.", "It's served at weddings, baptisms and funerals."],
    description: "The history of the world's most complex sauce — from 30+ ingredients to UNESCO heritage."
  },
  "dia-muertos": {
    name: "Day of the Dead — Ritual Gastronomy",
    ingredients: ["Pan de muerto", "Sugar skulls", "Mole", "Tamales", "Atole", "Jamaica water", "Marigold flower"],
    steps: ["Day of the Dead (November 1-2) is UNESCO heritage.", "Ofrendas include the deceased's favorite food.", "Pan de muerto is bread decorated with dough 'bones'.", "Sugar skulls are decorated sugar skulls.", "Each region celebrates differently.", "It's a celebration of life, not mourning."],
    description: "Day of the Dead gastronomy — how food connects the living and dead in Mexican tradition."
  },
  "regioes-gastronomicas": {
    name: "Gastronomic Regions of Mexico",
    ingredients: ["North: grilled meats and flour tortillas", "Center: moles and antojitos", "South: tamales and chocolate", "Coast: seafood and ceviches", "Yucatán: cochinita and habanero", "Oaxaca: moles and mezcal"],
    steps: ["North (Sonora, Chihuahua): carne asada, burritos, machaca.", "Center (CDMX, Puebla): mole poblano, chilaquiles, tamales.", "Oaxaca: 7 moles, tlayudas, chapulines.", "Yucatán: cochinita pibil, papadzules, sopa de lima.", "Pacific Coast (Sinaloa): aguachile, seafood.", "Each region is a complete gastronomic universe."],
    description: "Mexico has 32 states and each is a culinary world. Learn about the 6 macro gastronomic regions."
  },
  "festivais-mexicanos": {
    name: "Mexican Food Festivals",
    ingredients: ["Festival del Mole (Puebla)", "Feria del Taco (CDMX)", "Guelaguetza (Oaxaca)", "Festival de la Barbacoa (Hidalgo)", "Feria del Chile en Nogada (Puebla)"],
    steps: ["Guelaguetza (July): Zapotec cultural celebration with food and dance.", "Festival del Mole (October): mole competitions in Puebla.", "Feria del Taco (March): hundreds of taquerías compete in CDMX.", "Each festival lasts several days.", "They combine gastronomy, music and culture.", "They are the best way to experience authentic Mexico."],
    description: "Mexico's greatest food festivals — from Oaxaca to Puebla, celebrating food as art."
  },

  // ============ ESCOLA MEXICANA ============
  "curso-basico": {
    name: "🎓 Challenge: Basic Mexican Cooking",
    ingredients: ["Corn and flour tortillas", "Refried beans", "Mexican red rice", "Fresh guacamole", "Pico de gallo", "Homemade red salsa", "Cheese quesadillas", "Simple assembled tacos"],
    steps: [
      "🎯 CHALLENGE: Prepare a complete Mexican dinner for 4 following the 6 modules below. Use AI as your sous-chef — ask for detailed recipes, technique tips and ingredient substitutions!",
      "📘 Module 1 — Artisanal Tortillas: Make corn tortillas with masa harina (2 cups masa + 1¼ cups warm water). Knead to Play-Doh consistency, press in tortillera and cook on comal 30s each side. 🤖 Ask AI: 'Teach me corn tortillas step by step'.",
      "📘 Module 2 — Beans and Rice Base: Refried beans with lard and onion. Mexican rice: sauté with blended tomato, add broth 2:1. 🤖 Ask AI: 'What's the secret to non-soggy Mexican red rice?'.",
      "📘 Module 3 — Fresh Salsas: Guacamole (3 avocados + onion + tomato + cilantro + lime). Pico de gallo. Red salsa (roasted tomatoes and chiles). 🤖 Ask AI: 'Give me guacamole variations with different ingredients'.",
      "📘 Module 4 — Taco and Quesadilla Assembly: Heated tortillas + beans + melted cheese. 🤖 Ask AI: 'What are the 10 most popular taco fillings in Mexico?'.",
      "📘 Module 5 — Essential Seasonings: Cumin, Mexican oregano, ancho chile powder and epazote. 🤖 Ask AI: 'Explain the difference between Mexican and regular oregano'.",
      "📘 Module 6 — Final Practice: Set the complete table and photograph! 🤖 Ask AI: 'How to set a beautiful Mexican table?'.",
      "🏆 Completed? You've mastered the basics! Move on to Intermediate Course."
    ],
    description: "🎯 Beginner CHALLENGE! Prepare a complete Mexican dinner from scratch. Use AI as your assistant — ask recipes, get tips and learn by doing!"
  },
  "curso-intermediario": {
    name: "🎓 Challenge: Intermediate Cooking",
    ingredients: ["Green and red enchiladas", "Chilaquiles with egg", "Chicken tamales", "Pork carnitas", "Simple mole (12 ingredients)", "Cheese stuffed chiles", "Tortilla soup", "Beef fajitas"],
    steps: [
      "🎯 CHALLENGE: Prepare an intermediate Mexican banquet! Use AI for advanced techniques!",
      "📘 Module 1 — Enchiladas: Make with 3 sauces (red, green, suizas). 🤖 Ask AI: 'Teach me authentic suizas enchiladas'.",
      "📘 Module 2 — Tamales: Masa with whipped lard + chicken in green salsa, steam 1h. 🤖 Ask AI: 'How to know when tamale masa is ready?'.",
      "📘 Module 3 — Carnitas: Pork shoulder in lard with orange, 3h low heat. 🤖 Ask AI: 'Michoacán-style carnitas technique'.",
      "📘 Module 4 — Simplified Mole: 12 ingredients: chiles, tomato, peanuts, chocolate, spices. 🤖 Ask AI: 'Beginner mole poblano recipe'.",
      "📘 Module 5 — Chiles Rellenos: Roast poblanos, stuff with cheese, batter and fry. 🤖 Ask AI: 'How to peel chiles without tearing?'.",
      "📘 Module 6 — Event Menu: 5-course menu. 🤖 Ask AI: 'Plan Mexican menu for 12 with schedule'.",
      "🏆 Completed? You cook like a chef! Ready for Advanced?"
    ],
    description: "🎯 Intermediate CHALLENGE! Enchiladas, tamales, carnitas and mole. AI is your personal mentor!"
  },
  "curso-avancado": {
    name: "🎓 Challenge: Advanced Cooking",
    ingredients: ["Black mole (30+ ingredients)", "Authentic cochinita pibil", "Lamb barbacoa", "Beef birria", "Red pozole", "Chiles en nogada", "Nixtamalized corn", "Mezcal for pairing"],
    steps: [
      "🎯 SUPREME CHALLENGE: Mexico's most complex dishes. Each module is a 1-3 day project!",
      "📘 Module 1 — Black Mole (3 days): 6 types of chile, 30+ ingredients. 🤖 Ask AI: 'Guide me through Oaxacan black mole day by day'.",
      "📘 Module 2 — Cochinita Pibil: 12h achiote marinade, banana leaf, 5h at 160°C. 🤖 Ask AI: 'How to make homemade achiote paste?'.",
      "📘 Module 3 — Barbacoa and Birria: Lamb in maguey 8h / beef in chiles 4h. 🤖 Ask AI: 'Difference between barbacoa and birria with authentic recipes'.",
      "📘 Module 4 — Chiles en Nogada: Picadillo with fruits, walnut nogada, pomegranate. 🤖 Ask AI: 'Step-by-step chiles en nogada — perfect nogada'.",
      "📘 Module 5 — Nixtamalization: Corn + lime 12h, wash and grind. Tortillas with fresh masa. 🤖 Ask AI: 'Chemical process of nixtamalization'.",
      "📘 Module 6 — Pairing: Tequila, mezcal and pulque with each dish. 🤖 Ask AI: 'Tasting menu with spirit pairings'.",
      "🏆 Completed? You are a master of Mexican cuisine! 🇲🇽"
    ],
    description: "🎯 SUPREME CHALLENGE! Black mole, nixtamalization, chiles en nogada. AI is your consulting chef!"
  },
  "tecnica-tortilla-pro": {
    name: "🔥 Challenge: Perfect Tortilla",
    ingredients: ["Masa harina", "Nixtamalized corn", "Lime (calcium hydroxide)", "Tortilla press", "Clay or iron comal", "Thick plastic", "Warm water"],
    steps: [
      "🎯 CHALLENGE: Make 20 tortillas that puff on the comal! Use AI to troubleshoot.",
      "📘 Prepare Masa: 2 cups masa harina + 1¼ cups warm water. Play-Doh consistency. 🤖 Ask AI: 'Masa cracking/sticking, what do I do?'.",
      "📘 Press: 35g ball, even pressure, 2mm thick. 🤖 Ask AI: 'Alternatives without a tortilla press'.",
      "📘 Comal: 30s → flip → 1min → flip → 30s. Should puff! 🤖 Ask AI: 'Tortillas not puffing, what do I do?'.",
      "📘 Variations: Blue, white and yellow corn. 🤖 Ask AI: 'Flavor difference between corn types'.",
      "🏆 All puffed? You've mastered the ancestral art of the tortilla!"
    ],
    description: "🎯 CHALLENGE: Tortillas that puff on the comal! Nixtamalization and pressing with AI as guide."
  },
  "tecnica-molhos-salsas": {
    name: "🔥 Challenge: 10 Salsas in 1 Day",
    ingredients: ["Tomato (1kg)", "Tomatillo (500g)", "Chiles: ancho, guajillo, chipotle, habanero, serrano, árbol", "Molcajete", "Blender", "Fresh cilantro", "Garlic and onion", "Peanuts"],
    steps: [
      "🎯 CHALLENGE: 10 different salsas in one day! AI adjusts flavors.",
      "📘 Salsa 1 — Pico de Gallo: Tomato + onion + jalapeño + cilantro + lime, diced.",
      "📘 Salsa 2 — Roasted Red: Roast tomatoes and chiles on comal, crush in molcajete. 🤖 Ask AI: 'Perfect point for roasting tomatoes'.",
      "📘 Salsa 3 — Green: Cooked tomatillos + serranos + cilantro.",
      "📘 Salsa 4 — Macha: Fried chiles in oil + peanuts. 🤖 Ask AI: 'Authentic Veracruz salsa macha'.",
      "📘 Salsas 5-10: Guacamole, habanero-mango, borracha, morita, creamy chipotle, quick mole. 🤖 Ask AI: 'Quick recipes for salsas 5 to 10'.",
      "🏆 Made all 10? Salsa master! Set up a tasting with chips."
    ],
    description: "🎯 CHALLENGE: 10 salsas in 1 day! From pico de gallo to quick mole. AI adjusts each recipe."
  },
  "uso-pimentas-pro": {
    name: "🌶️ Challenge: Chile Master",
    ingredients: ["Ancho chile", "Guajillo chile", "Chipotle chile", "Habanero chile", "Serrano chile", "Poblano chile", "Pasilla chile", "Árbol chile", "Cascabel chile", "Morita chile"],
    steps: [
      "🎯 CHALLENGE: Identify, toast and cook with 10 chiles! AI guides flavors.",
      "📘 Identification: Organize and note each chile's flavor profile. 🤖 Ask AI: 'Flavor profile of the 10 main chiles'.",
      "📘 Toasting: Comal 15-30s each side until flexible. Don't burn! 🤖 Ask AI: 'How do I know it's toasted right?'.",
      "📘 Soaking: Hot water (not boiling) 20-30 min. Save the water! 🤖 Ask AI: 'Uses for soaking water'.",
      "📘 3 Preparations: Adobo (ancho+guajillo+pasilla), tinga (chipotle+tomato), habanero salsa. 🤖 Ask AI: '5 classic chile combinations'.",
      "📘 Balance: Sweetness + acidity + smokiness. 🤖 Ask AI: 'Salsa too spicy, how to balance?'.",
      "🏆 Used all 10? Chile Master! 🌶️"
    ],
    description: "🎯 CHALLENGE: Master 10 Mexican chiles! Toasting, soaking, combinations with AI."
  },
  "fermentacoes-mex": {
    name: "🔥 Challenge: Ancestral Fermentations",
    ingredients: ["Pineapple peels", "Piloncillo", "Cloves and cinnamon", "Fresh jalapeño chiles", "White vinegar", "Carrot and onion"],
    steps: [
      "🎯 CHALLENGE: 3 fermentations in 7 days! AI monitors the process.",
      "📘 Tepache (3 days): Pineapple peels + piloncillo + spices in jar. 🤖 Ask AI: 'Is foam on tepache normal?'.",
      "📘 Pickled Chiles (5 days): Jalapeños + carrot + onion in vinegar with spices. 🤖 Ask AI: 'Chiles en escabeche that last months'.",
      "📘 Fermented Salsa (7 days): Tomato + chile + garlic + 3% salt. 🤖 Ask AI: 'Lacto-fermented habanero salsa'.",
      "📘 Safety: Sterilize jars. Black/pink mold = discard. 🤖 Ask AI: 'Signs of dangerous fermentation'.",
      "🏆 Completed all 3? You've mastered 2,000-year-old techniques!"
    ],
    description: "🎯 CHALLENGE: 3 fermentations in 7 days! Tepache, escabeche and fermented salsa with AI."
  },
  "processos-tradicionais": {
    name: "🔥 Challenge: Ancestral Tools",
    ingredients: ["Volcanic stone molcajete", "Tomato, chile and garlic", "Mexican chocolate tablet", "Wooden molinillo", "Hot milk", "Clay or iron comal"],
    steps: [
      "🎯 CHALLENGE: Cook with 3 ancestral tools! AI teaches each technique.",
      "📘 Molcajete: Season by grinding rice. Then salsa: garlic+salt → roasted chile → tomato. 🤖 Ask AI: 'How to season molcajete and make authentic salsa?'.",
      "📘 Molinillo: Dissolve chocolate in hot milk, spin between palms until foamy. 🤖 Ask AI: 'Molinillo technique for foamy chocolate'.",
      "📘 Comal: Roast chiles, tomatoes and onion for tatemada salsa. 🤖 Ask AI: 'How to season a new clay comal?'.",
      "🏆 Used all 3? You cooked like 3,000 years ago!"
    ],
    description: "🎯 CHALLENGE: Molcajete, molinillo and comal — ancient techniques with AI!"
  },
  "conservacao-alimentos": {
    name: "🔥 Challenge: Mexican Preservation",
    ingredients: ["Various dried chiles", "Meat for cecina (thin cut)", "Coarse salt", "Fresh jalapeño chiles", "Vinegar and spices", "Fruits for crystallizing"],
    steps: [
      "🎯 CHALLENGE: 3 ancestral preservation techniques! AI guides each process.",
      "📘 Dehydrate Chiles: Oven 80°C for 4-6h, door ajar. 🤖 Ask AI: 'Perfect dehydration point for chiles'.",
      "📘 Salting (cecina): Thin slices + coarse salt, dry 2-3 days. 🤖 Ask AI: 'Yecapixtla-style cecina at home'.",
      "📘 Escabeche: Boiling vinegar with spices over vegetables in jars. 🤖 Ask AI: 'Classic Mexican escabeche for 6 months'.",
      "📘 Shelf life: Chiles 1 year, escabeche 6 months, cecina 2 weeks refrigerated.",
      "🏆 Mastered all 3? Preservation like the Mesoamericans!"
    ],
    description: "🎯 CHALLENGE: Dehydrate, salt and preserve! Ancestral techniques with AI."
  },
  "producao-artesanal": {
    name: "🔥 Challenge: Artisanal Producer",
    ingredients: ["Cacao beans or nibs", "Piloncillo and cinnamon", "Fresh milk for cheese", "Pork for chorizo", "Dried chiles for chorizo", "Masa harina"],
    steps: [
      "🎯 CHALLENGE: 3 artisanal Mexican products from scratch! AI guides each step.",
      "📘 Mexican Chocolate: Toast cacao 130°C/25min, grind with cinnamon and piloncillo. 🤖 Ask AI: 'Artisanal chocolate with cacao beans'.",
      "📘 Mexican Chorizo: Meat + soaked chiles + vinegar + spices. Rest 24h. 🤖 Ask AI: 'Ideal meat/fat/chile ratio for chorizo'.",
      "📘 Oaxaca Cheese: Milk + citric acid + rennet, heat to 70°C, stretch and roll. 🤖 Ask AI: 'Homemade Oaxaca cheese — stretching point'.",
      "📘 Pricing: Cost + 100-150% margin. 🤖 Ask AI: 'Pricing artisanal products for sale'.",
      "🏆 Produced all 3? True Mexican artisan!"
    ],
    description: "🎯 CHALLENGE: Artisanal chocolate, chorizo and Oaxaca cheese! AI teaches each technique."
  },
};
