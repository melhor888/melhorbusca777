/**
 * Blog post translations for EN and ES.
 * Each key maps to a blog post ID with translated fields.
 */
export interface BlogTranslation {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: string;
  categoryLabel?: string;
}

type BlogTranslations = Record<string, Record<string, BlogTranslation>>;

export const blogTranslations: BlogTranslations = {
  en: {
    "blog-1": {
      title: "The History of Tacos al Pastor: From the Spit to the Trompo",
      slug: "history-tacos-al-pastor",
      excerpt: "Discover how Lebanese immigrants in Mexico created one of the world's most iconic tacos, fusing shawarma with Mexican ingredients.",
      readTime: "12 min",
      content: `
<h2>The Lebanese Origin that Transformed Mexican Cuisine</h2>

<p>Few dishes in the world have as fascinating a history as tacos al pastor. This culinary creation, now considered a gastronomic heritage of Mexico City, was born from an unlikely encounter between cultures: the Arab tradition of shawarma and the richness of Mexican ingredients. To understand how this happened, we need to go back to the early 20th century, when waves of Lebanese immigrants arrived on Mexican shores fleeing Ottoman rule.</p>

<p>Between 1880 and 1930, thousands of Lebanese families settled in cities like Puebla, Veracruz, and Mexico City. They brought with them their culinary traditions, including the technique of cooking meat on a vertical spit — the famous shawarma. However, in Mexico, they couldn't find the traditional ingredients of the Levant. There was no abundant pita bread, nor the exact spices they used at home. What they found was an abundance of chiles, pineapple, corn tortillas, and a vibrant culinary culture ready to absorb influences.</p>

<h2>The Transformation: From Shawarma to Trompo</h2>

<p>The genius of tacos al pastor lies precisely in this adaptation. The immigrants replaced lamb with pork — a much more accessible and popular meat in Mexico. The original marinade of Arab spices was replaced with a paste of dried chiles (guajillo, ancho, and pasilla) with achiote, which gave the meat that characteristic vibrant red color. And the great revolution: instead of serving in pita bread, they used corn tortillas.</p>

<p>The vertical spit, called "shawarma" or "döner" in the Arab world, got the name "trompo" in Mexico — due to its visual similarity to a spinning top (trompo in Spanish). And thus was born a technique that would become ubiquitous on Mexican streets: layers of marinated meat stacked vertically, slowly rotating next to a flame, cooking on the outside while the internal juices redistribute.</p>

<h2>The Role of Pineapple</h2>

<p>One of the most distinctive elements of tacos al pastor is the slice of pineapple placed on top of the trompo. This addition is not merely decorative — it's a stroke of culinary genius. Pineapple contains bromelain, an enzyme that helps tenderize the meat as the trompo spins. The pineapple juices drip down the meat, creating a caramelized layer that is pure gustatory magic. When the taquero cuts thin slices from the trompo, each piece carries a touch of tropical sweetness that perfectly contrasts with the spice of the chiles and the acid of the lime.</p>

<p>The cutting technique is an art in itself. The taquero holds a tortilla in one hand and, with the other, uses a sharp knife or special instrument to slice the meat directly onto the tortilla. The best taqueros can cut wafer-thin, uniform pieces at impressive speed, finishing with a slice of pineapple that falls perfectly onto the meat. It's a spectacle that draws crowds on CDMX corners.</p>

<h2>The Perfect Marinade: Masters' Secrets</h2>

<p>The marinade is where each taquero guards their most precious secrets. The universal base includes guajillo chiles (for color and fruity flavor), ancho chile (for depth and sweetness), and achiote (for that unmistakable red color). But it's in the details that each trompo differs. Some add pineapple juice to the marinade, others use vinegar. There are those who add cumin, Mexican oregano, allspice, or even a touch of cinnamon.</p>

<p>Marinating time is also crucial. At least 4 hours, ideally 12 to 24 hours. The meat should be cut into thin, uniform slices before marinating, so each piece absorbs the flavors equally. The ratio of lean meat to fat also matters — too much fat and the trompo collapses; too little and the meat dries out. The perfect balance is about 80% lean meat and 20% fat.</p>

<h2>The Geopolitics of Tacos al Pastor</h2>

<p>Tacos al pastor are not uniform across Mexico — each region developed its version. In Mexico City, the classic version uses small corn tortillas with diced onion, cilantro, and green or red salsa. In Puebla, where Lebanese influence was strongest, "tacos árabes" use pita bread instead of tortillas and are served with chipotle. In Monterrey, influenced by norteña culture, flour tortillas are preferred.</p>

<p>In Jalisco, the local version substitutes part of the chile with pure achiote, creating a more earthy flavor. In the Bajío (Guanajuato, Querétaro), it's common to find tacos al pastor with melted cheese. And in Oaxaca, the influence of mole is felt in marinades that include bitter chocolate and complex spices.</p>

<h2>The Trompo Technique at Home</h2>

<p>Reproducing authentic tacos al pastor at home is a challenge, but not impossible. Without the vertical trompo, the best alternative is to use a very hot grill or griddle. The key is to slice the meat very thin after marinating and cook it quickly over high heat, creating that caramelized crust (called "costra") that is the dish's signature. Another home technique is to stack the marinated slices in a baking pan and roast in a high oven (220°C/425°F), turning every 15 minutes and cutting the crispy edges.</p>

<p>The secret that taqueros never openly share is the "trompo salsa" — the liquid that drips during cooking, a mixture of meat fat, caramelized pineapple juice, and concentrated spices. Many taqueros collect this liquid and use it to brush the meat or as a base for their exclusive salsas.</p>

<h2>Cultural and Economic Impact</h2>

<p>Today, tacos al pastor are considered the most consumed taco in Mexico and one of the most popular street foods in the world. In 2019, Taste Atlas elected tacos al pastor as the best dish in the world. In Mexico City, it's estimated that more than 20,000 trompos are spinning simultaneously on any Friday night. The tacos al pastor market moves billions of pesos annually and supports hundreds of thousands of families.</p>

<p>More than a dish, tacos al pastor are a symbol of Mexican identity — living proof that culinary greatness is born when different cultures meet, respect each other, and create something new together. From the Lebanese diaspora to the busiest corner of CDMX, each taco al pastor tells this story of fusion, adaptation, and culinary genius.</p>

<h2>Related Recipes to Practice</h2>

<p>Now that you know the complete history, it's time to get hands-on. In our collection, you'll find the traditional Tacos al Pastor recipe with the classic 3-chile marinade, the homemade trompo assembly technique, and salsas that perfectly complement the dish. Click the links below to explore each recipe in detail and begin your journey as a tacos al pastor master.</p>
`
    },
    "blog-2": {
      title: "Mole Poblano: The Symphony of 30 Ingredients",
      slug: "mole-poblano-symphony-ingredients",
      excerpt: "Learn the history of the world's most complex sauce and discover the secrets that make each mole unique and unforgettable.",
      readTime: "14 min",
      content: `
<h2>The Most Complex Sauce in the World</h2>

<p>If there's one dish that encapsulates all the complexity, history, and soul of Mexican cuisine in a single preparation, it's mole. And among all moles — there are hundreds of variations — Mole Poblano occupies the throne as the most emblematic, celebrated, and possibly the most complex sauce ever created by humanity. With its 30 or more ingredients, including dried chiles, chocolate, spices, fruits, seeds, and hours of meticulous work, mole poblano is a true gastronomic symphony.</p>

<p>The word "mole" comes from the Nahuatl "molli," which simply means "sauce" or "mixture." But calling mole a "sauce" is like calling Beethoven's Ninth Symphony "a little noise." Mole is an entire category of Mexican cuisine, with variations ranging from the intense black of Oaxaca to the herbal green of Guerrero, from the yellow of Oaxaca to the pink of Michoacán.</p>

<h2>The Legend of the Nuns</h2>

<p>The most popular story about the origin of mole poblano takes us to the Convent of Santa Rosa in Puebla in the 17th century. According to legend, the Dominican nuns received news that the viceroy would visit the city and needed to prepare a worthy banquet. In desperation, Sister Andrea de la Asunción gathered all available ingredients — dried chiles of different types, chocolate, spices brought from Europe and Asia via the Manila Galleon, native seeds, fruits, and more — and began combining them in an epic preparation.</p>

<p>The result was a dark, thick sauce with seemingly infinite layers of flavor: the heat of chiles, the bitterness of chocolate, the sweetness of fruits, the earthiness of seeds, the pungency of spices. The viceroy was so impressed that the dish became Puebla's specialty and eventually one of Mexico's national dishes.</p>

<p>Gastronomic historians, however, point out that the truth is probably more complex. Simpler versions of moles existed before the arrival of the Spanish — the Aztecs prepared chile sauces with pumpkin seeds and cacao. What the nuns did was sophisticate and enrich these preparations with European and Asian ingredients, creating the baroque version we know today.</p>

<h2>The Ingredients: A Deep Analysis</h2>

<p>An authentic mole poblano can contain 20 to 35 ingredients, each with a specific function. Let's analyze the main groups:</p>

<p><strong>Chiles (the backbone):</strong> Ancho chile (dried poblano) — sweet, fruity, dark red color. Mulato chile — similar to ancho but more bitter and chocolatey. Pasilla chile — delicate, with dried fruit notes. Chipotle chile — smoky, deep. Each chile is deveined, lightly toasted on the griddle, and hydrated in hot water. The proportion between them defines the flavor profile — more ancho for sweetness, more pasilla for elegance, more chipotle for depth.</p>

<p><strong>Chocolate and seeds:</strong> Mexican bitter chocolate (with cinnamon), not milk chocolate. Toasted almonds or peanuts. Pumpkin pepitas. Sesame (fundamental — it's the signature of mole poblano). Seeds are toasted until golden, releasing oils and aromas that give body and creaminess to the sauce.</p>

<p><strong>Spices:</strong> Cinnamon (Ceylon, not cassia), clove, allspice, cumin, Mexican oregano, black pepper, bay leaf. Each spice should be toasted individually — each has its ideal point. Burning is unacceptable, as it brings irreversible bitterness.</p>

<p><strong>Fruits and vegetables:</strong> Raisins (sweetness and body), fried plantain, roasted tomato, roasted onion, roasted garlic. Fruits balance the acidity of tomatoes and the pungency of chiles.</p>

<h2>The Process: Patience as the Main Ingredient</h2>

<p>Making mole is an exercise in patience and attention. The process takes 4 to 8 hours — there's no shortcut that doesn't compromise the result. Each group of ingredients is prepared separately: chiles are hydrated, spices are toasted, seeds are toasted, fruits are fried. Then everything is blended in batches with chicken broth until it forms a thick paste.</p>

<p>The crucial step is frying the mole. In a large pot with lard or oil, the paste is fried over medium heat for at least 30-40 minutes, stirring constantly. This process caramelizes the sugars, integrates the flavors, and darkens the sauce. The mole is ready when it "changes color" — visibly darkens — and when a drop placed on the back of the hand doesn't run. The consistency should be velvety, neither liquid nor pasty.</p>

<p>Chocolate is added only in the last few minutes to prevent burning. And salt is always the last ingredient — adjust carefully, as an overly salty mole is irreversible.</p>

<h2>The 7 Moles of Oaxaca</h2>

<p>If Puebla has its mole poblano, Oaxaca — called "The Land of Seven Moles" — has an entire family. The seven traditional Oaxacan moles are: Negro (the most complex, with black chilhuacle chile), Rojo (ancho and guajillo chile), Coloradito (sweeter, with banana), Amarillo (with chilcostle chile), Verde (fresh herbs and pepitas), Manchamanteles (with fruits, "tablecloth stainer"), and Chichilo (the rarest, smoky and intense).</p>

<p>Each is served on specific occasions. Negro is for weddings and major celebrations. Coloradito for Sunday family gatherings. Amarillo for weekdays. Verde for informal occasions. This social coding of moles reveals how Mexican cuisine is intertwined with communal and ritualistic life.</p>

<h2>The Philosophy of Mole</h2>

<p>Mole teaches something profound about Mexican cuisine: greatness doesn't come from simplicity or expensive ingredients, but from patience, knowledge accumulated over generations, and the ability to harmonize seemingly contradictory elements. Chocolate and chile. Sweet and salty. Bitter and fruity. Spicy and comforting. Mole is proof that complexity, when well executed, creates something greater than the sum of its parts.</p>

<p>If you want to venture into mole preparation, start with mole rojo (simpler) before tackling the full poblano. And remember: the best mole in the world is one made with patience, quality ingredients, and above all, love. As they say in Mexico: "El mole se hace con las manos y con el corazón."</p>
`
    },
    "blog-3": {
      title: "Mexican Chiles: The Definitive Guide to Varieties and Uses",
      slug: "definitive-guide-mexican-chiles",
      excerpt: "From mild poblano to fiery habanero — learn about 50+ chile varieties and when and how to use each one.",
      readTime: "15 min",
      content: `
<h2>Chile is the Soul of Mexican Cuisine</h2>

<p>There is no Mexican cuisine without chile. Period. While other world cuisines use pepper as a secondary seasoning, in Mexico chile is the main ingredient, the protagonist, the reason for being of hundreds of dishes. Mexico domesticated chiles over 7,000 years ago — long before Europeans knew this continent existed. And in those millennia of experimentation, Mexicans developed a relationship with chile that goes far beyond heat: it's flavor, aroma, color, texture, and cultural identity.</p>

<p>To understand Mexican chiles, you must first abandon the idea that chile = hot pepper. In Mexico, there are chiles that don't burn at all (poblano has 1,000-2,000 on the Scoville scale, practically nothing), chiles used for their color (ancho), for their smoky aroma (chipotle), for their fruity flavor (guajillo), or for their bitter complexity (pasilla). Heat is just one of many dimensions of Mexican chile.</p>

<h2>Fresh Chiles: The Living Ones</h2>

<p><strong>Chile Poblano (1,000-2,000 SHU):</strong> The most versatile. Large, wide, dark green color. Mild, with herbaceous and earthy flavor. It's the chile for chiles rellenos (stuffed with cheese or picadillo and fried in egg). Also used in rajas (strips) with cream, in green rice, and soups. When dried, it becomes ancho chile. When toasted and peeled, it reveals a delicate smoky flavor.</p>

<p><strong>Chile Serrano (10,000-25,000 SHU):</strong> Small, thin, bright green. The "everyday" chile — used in raw green salsas, pico de gallo, and guacamole. Hotter than jalapeño but with a cleaner, fresher flavor. In Mexico, it's chopped raw and added directly to dishes. The smaller, the hotter.</p>

<p><strong>Chile Jalapeño (2,500-8,000 SHU):</strong> The most famous internationally, but in Mexico it's considered "mild." Used in escabeche (pickled with carrot and onion), stuffed with cheese, or sliced for nachos. When smoked and dried, it becomes chipotle — one of the most valued dried chiles.</p>

<p><strong>Chile Habanero (100,000-350,000 SHU):</strong> The king of Mexican heat. Originating from Yucatán, it's small, lantern-shaped, in vibrant colors (orange, red, yellow). Despite extreme heat, it has an incomparable fruity and floral flavor. Used in xni-pec salsa (raw, with onion and sour orange) and Yucatecan sauces. Handle with gloves.</p>

<h2>Dried Chiles: The Transformed</h2>

<p>Drying completely transforms the chile — concentrating flavors, developing notes of caramel, dried fruits, and earth, and even changing the name. This duality is one of the beauties of Mexican cuisine.</p>

<p><strong>Chile Ancho:</strong> The dried poblano. Dark red, almost black color, wrinkled skin. Sweet, fruity flavor with notes of plum and chocolate. It's the base of mole poblano, adobos, and red salsas. The most used dried chile in Mexico.</p>

<p><strong>Chile Guajillo:</strong> Bright red-orange color, smooth skin. Fruity, slightly acidic flavor with green tea notes. Used in salsas, birria, pozole, and marinades. Gives vibrant color to dishes without much heat.</p>

<p><strong>Chile Chipotle:</strong> Jalapeño smoked over oak or mesquite wood. Deeply smoky flavor with medium heat. Sold dried or canned (chipotles en adobo). Transforms any sauce with its unique character. A little goes a long way.</p>

<h2>How to Prepare Dried Chiles: The Universal Technique</h2>

<p>1. <strong>Devein:</strong> Open the chile with your hands, remove stem, seeds, and internal veins. Veins contain capsaicin — removing them reduces heat. 2. <strong>Toast:</strong> On a dry, hot griddle, press the chile for 15-30 seconds on each side. It should slightly change color and release aroma. NEVER burn — irreversible bitterness. 3. <strong>Hydrate:</strong> Cover with hot water and let sit for 15-20 minutes until pliable. 4. <strong>Blend:</strong> In blender with some of the hydration water.</p>

<p>This basic technique applies to any dried chile and is the foundation of hundreds of Mexican salsas, moles, adobos, and stews. Master this technique and you'll have access to an entire universe of flavors.</p>

<h2>The Scoville Scale and the Mexican Palate</h2>

<p>The Scoville Scale measures heat units (SHU) — the higher, the hotter. But for Mexicans, spiciness isn't about machismo or endurance. It's about flavor. Each level of heat activates different taste receptors and releases endorphins that modify the perception of all other flavors in the dish.</p>

<p>If you're beginning your journey with chiles, start with poblano and ancho. They're mild, flavorful, and forgiving of errors. Gradually explore guajillo, then chipotle, and when confident, venture into serrano and habanero. The palate adapts — what seems impossible today becomes pleasurable in months.</p>

<h2>Storage and Buying</h2>

<p>Fresh chiles should be firm, shiny, and spotless. Store in the fridge for up to 2 weeks. Dried chiles should be flexible (not brittle — that indicates old age). Store in a dry, dark place for up to 6 months. Never buy pre-ground when you can buy whole — the flavor difference is abysmal. And remember: in the world of Mexican chiles, each variety is a universe of possibilities waiting to be explored.</p>
`
    },
    "blog-4": {
      title: "Street Food in Mexico City: A Complete Gastronomic Guide",
      slug: "street-food-mexico-city-guide",
      excerpt: "From the corners of Coyoacán to the markets of Tepito — a complete guide to the best street food in CDMX.",
      readTime: "13 min",
      content: `
<h2>The World Capital of Street Food</h2>

<p>Mexico City is, without exaggeration, the world capital of street food. In no other metropolis on the planet will you find such diversity, quality, and accessibility of food prepared outdoors. There are more than 500,000 street vendors (conservative estimate) serving a hungry population that learned from childhood that the best meals aren't in restaurants — they're on corners, in markets, and at improvised stands that appear when the sun goes down.</p>

<p>Mexican street food is not fast food — it's "slow food served fast." Every taquero operating his trompo at night carries decades of technique passed down through generations. Every señora making gorditas in the morning knows the exact temperature of the comal and the perfect consistency of the masa without needing a thermometer or scale. It's empirical knowledge refined by centuries of collective practice.</p>

<h2>Morning (6am-11am): The Street Breakfast</h2>

<p>The day in CDMX starts early and hungry. On the corners of the Historic Center and in practically every neighborhood, you'll find tamale and atole stands. Tamaleros start assembling their steamers (giant steam pots) at 5am. The tamales — green (green salsa with chicken), mole (chicken in mole poblano), rajas (poblano with cheese), and sweet (strawberry, pineapple, or chocolate) — are wrapped in corn husks or banana leaves and steamed for hours.</p>

<p>The mandatory accompaniment is atole — a thick drink made from corn masa with flavors like champurrado (chocolate), guava, vanilla, or strawberry. And here's a habit that shocks foreigners: the "guajolote" or "torta de tamal" — a tamale inside a bolillo (bread roll). Carb inside carb. Seems crazy, but the contrasting textures (soft tamale with crunchy bread) create something surprisingly satisfying.</p>

<h2>Midday (12pm-3pm): La Comida</h2>

<p>Lunch in Mexico is the main meal — called simply "la comida" (the food, singular, definitive). On the streets, this translates to stew stands where enormous cazuelas (clay pots) display 10, 15, 20 different stews: chicharrón en salsa verde, pollo en mole, tinga de res, picadillo, rajas con crema, albóndigas en caldillo. You choose two or three, and they're served with rice, beans, tortillas, and salsa.</p>

<p>Markets are the epicenter of this experience. Mercado de la Merced, CDMX's largest market, has an entire floor dedicated to prepared food. Each puesto (stall) specializes: one does only broths, another only birria, another dedicates exclusively to seafood. Competition is fierce and quality extraordinary.</p>

<h2>Night (6pm onwards): The Kingdom of Tacos</h2>

<p>When the sun goes down, CDMX transforms into the world's largest open-air taquería. Pastor trompos start spinning, suadero griddles are heated, carne asada grills are lit. Every corner becomes a gastronomic meeting point.</p>

<p>Suadero tacos (meat from the region between the rib and the skin of cattle, slowly fried in its own fat until crispy outside and tender inside) are a CDMX obsession. The best ones are at improvised stands on sidewalks, with just a griddle, a bucket of green salsa, and another of red salsa. The line is the thermometer — if there's a line, it's good.</p>

<p>Canasta tacos (basket tacos) are a unique category: pre-assembled tacos (bean, potato, chicharrón, or mole) stacked in a basket lined with wax paper and a blanket, marinating in melted lard. Served at warm temperature and costing almost nothing. It's Mexico's most democratic taco.</p>

<h2>The Must-Visit Markets</h2>

<p>Mercado de San Juan: the gourmet market. Exotic meats (crocodile, wild boar, ostrich), artisanal cheeses, premium seafood. Mercado de Jamaica: flowers and tropical fruits in absurd quantities. Mercado de Coyoacán: churros, tostadas, and a bohemian atmosphere. Mercado de Tepito: chaotic, intense, but with incredibly authentic food.</p>

<p>Each market is a microcosm of Mexican diversity. In the same corridor you'll find an Oaxacan señora selling tlayudas, a Yucatecan family with panuchos, and a don from Jalisco with birria. It's all of Mexico concentrated in a few blocks.</p>

<h2>Practical Tips for the Gastronomic Traveler</h2>

<p>1. Go where locals eat — a line of Mexicans is the best Michelin guide. 2. Don't be afraid of "humble" stands — appearance doesn't indicate quality. 3. Start mild: ask for salsa on the side and add gradually. 4. Carry coins — many stands are cash only. 5. Timing matters: each street food has its moment of the day. 6. Try the aguas frescas: jamaica, horchata, tamarind — refreshing and delicious. 7. Talk to the taquero — Mexicans love talking about food and will proudly recommend their best dishes.</p>

<p>CDMX's street food isn't just nutrition — it's cultural, social, and sensory experience. It's gastronomic democracy: the businessman in a suit and the sweating construction worker eat side by side at the same stand, sharing the same salsa. No starred restaurant will ever replicate this experience. And that's what makes CDMX the culinary capital of the world.</p>
`
    },
    "blog-5": {
      title: "Artisanal Corn Tortillas: From Nixtamalization to Table",
      slug: "artisanal-corn-tortillas-nixtamalization",
      excerpt: "Learn the complete nixtamalization process and artisanal tortilla production — the foundation of all Mexican cuisine.",
      readTime: "14 min",
      content: `
<h2>The Tortilla is the Heart of Mexico</h2>

<p>If Mexico were a house, the tortilla would be its foundation. No other food in the world has the cultural, nutritional, and culinary importance that the corn tortilla has for Mexicans. They're consumed at every meal — breakfast, lunch, dinner, and snacks. Estimates indicate that Mexico produces more than 12 million tons of tortillas per year. It's the most consumed food in the country, surpassing even rice and bread. And behind every authentic tortilla is an ancestral process over 3,500 years old: nixtamalization.</p>

<p>Before talking about production techniques, we need to understand why nixtamalization is so revolutionary. Mesoamerican peoples discovered, millennia before modern science, that cooking corn in water with lime (calcium hydroxide) fundamentally transformed the grain. The lime dissolves the outer shell (pericarp), releases niacin (vitamin B3) that would otherwise be inaccessible, increases the availability of essential amino acids, and makes the starch more digestible.</p>

<h2>The Nixtamalization Process: Step by Step</h2>

<p><strong>Step 1 — Cooking:</strong> Place 1kg of corn in 3 liters of water with 1-2 tablespoons of slaked lime (cal for nixtamal). Heat until boiling. Cooking time varies: soft corn (1-2h), hard corn (2-3h), old criollo corn (up to 4h). The corn is ready when the shell starts to peel off easily when rubbed between fingers.</p>

<p><strong>Step 2 — Resting (nejayote):</strong> Turn off heat and let the corn rest in the lime water (called "nejayote") for 8-12 hours, ideally overnight. During this time, the lime continues working, softening the grain and developing complex flavors.</p>

<p><strong>Step 3 — Washing:</strong> Drain the nejayote and wash the nixtamal under running water, rubbing the grains between your hands to remove shell remnants. The water should run clear. Don't over-wash — a bit of residual lime gives flavor and texture.</p>

<p><strong>Step 4 — Grinding:</strong> Traditionally, nixtamal is ground on the metate — a flat basalt stone. Today, most use an industrial mill. At home, a powerful food processor works — add small amounts of water as needed. The masa should be moist, pliable, and not sticky.</p>

<h2>Forming and Cooking: The Tortillera's Dance</h2>

<p>Tortilla forming can be done by hand (palmeando — the traditional technique requiring years of practice) or with a tortilla press. For the press: cut two pieces of plastic, place one on the base, position a masa ball (30-35g), cover with the other plastic, and press. The tortilla should be about 15cm in diameter with uniform thickness.</p>

<p>The comal (cast iron or clay griddle) should be very hot — no oil or fat. Place the tortilla and cook 45-60 seconds on the first side until the edge starts to dry and lifts easily. Flip and cook 60 more seconds. Flip again — if the masa is good and the comal at the right temperature, the tortilla will puff up, forming a steam bubble. This "poof" is the sign of perfection — it means the internal layers are cooked and the structure is correct.</p>

<h2>Masa Harina vs Fresh Masa</h2>

<p>Masa harina (industrialized nixtamalized corn flour like Maseca or Minsa) is convenient — just add water and it's ready. But the difference from fresh masa is like comparing instant coffee with freshly ground bean coffee. Fresh masa has natural moisture, preserved essential corn oils, more complex texture, and incomparably superior flavor.</p>

<p>However, masa harina is a viable alternative outside Mexico where fresh nixtamal is rare. The classic proportion is 2 cups flour to 1¼ cups warm water. Mix, knead for 2-3 minutes, and rest 15 minutes covered with a damp cloth.</p>

<h2>Regional Variations</h2>

<p>In Mexico, each region has its tortilla particularities. In Oaxaca, tlayudas are giant tortillas (30cm+) cooked on a clay comal until semi-crispy. In Sonora, wheat flour tortillas are enormous and thin as paper. In central Mexico, memelas are thick tortillas pinched at the edges. In Guerrero, blue corn tortillas are especially valued.</p>

<p>The tortilla isn't just a base for tacos — it's plate, utensil, side dish, and ingredient. When fried, it becomes tostada. When cut and fried, it becomes totopos (chips). When aged and cooked in salsa, it becomes chilaquiles. When rolled with filling and covered in sauce, it becomes enchilada. The tortilla's versatility is infinite — and it all starts with a grain of corn, a handful of lime, and thousands of years of accumulated wisdom.</p>

<h2>Final Tips for the Perfect Tortilla</h2>

<p>Comal temperature is everything: too cold and the tortilla sticks; too hot and it burns before cooking inside. The ideal point is when a water drop evaporates in 2 seconds. Don't press the tortilla on the comal — resist the temptation. Pressing expels the steam that should inflate it. And finally: a fresh tortilla is better than a perfect tortilla. Even a slightly irregular tortilla, homemade with quality masa, will be infinitely superior to any industrial supermarket tortilla. Imperfection is the signature of artisanal.</p>
`
    },
  },
  es: {
    "blog-1": {
      title: "La Historia de los Tacos al Pastor: Del Espetón al Trompo",
      slug: "historia-tacos-al-pastor",
      excerpt: "Descubre cómo los inmigrantes libaneses en México crearon uno de los tacos más icónicos del mundo, fusionando el shawarma con ingredientes mexicanos.",
      readTime: "12 min",
      content: `
<h2>El Origen Libanés que Transformó la Cocina Mexicana</h2>

<p>Pocos platillos en el mundo poseen una historia tan fascinante como los tacos al pastor. Esta creación culinaria, que hoy es considerada patrimonio gastronómico de la Ciudad de México, nació de un encuentro improbable entre culturas: la tradición árabe del shawarma y la riqueza de los ingredientes mexicanos. Para entender cómo sucedió, debemos regresar al inicio del siglo XX, cuando oleadas de inmigrantes libaneses llegaron a las costas mexicanas huyendo del dominio otomano.</p>

<p>Entre 1880 y 1930, miles de familias libanesas se establecieron en ciudades como Puebla, Veracruz y la Ciudad de México. Trajeron consigo sus tradiciones culinarias, incluyendo la técnica de cocinar carne en un espetón vertical — el famoso shawarma. Sin embargo, en México no encontraban los ingredientes tradicionales del Levante. No había pan pita abundante ni las especias exactas que usaban en casa. Lo que había era abundancia de chiles, piña, tortillas de maíz y una cultura culinaria vibrante dispuesta a absorber influencias.</p>

<h2>La Transformación: Del Shawarma al Trompo</h2>

<p>La genialidad de los tacos al pastor radica justamente en esta adaptación. Los inmigrantes sustituyeron el cordero por cerdo — carne mucho más accesible y popular en México. La marinada original de especias árabes fue reemplazada por una pasta de chiles secos (guajillo, ancho y pasilla) con achiote, que le daba a la carne ese color rojo vibrante característico. Y la gran revolución: en lugar de servir en pan pita, usaron tortillas de maíz.</p>

<p>El espetón vertical, que en el mundo árabe se llama "shawarma" o "döner", recibió en México el nombre de "trompo" — por su semejanza visual con un trompo de juguete. Y así nació una técnica que se volvería omnipresente en las calles mexicanas: capas de carne marinada apiladas verticalmente, girando lentamente junto a una flama, cocinándose por fuera mientras los jugos internos se redistribuyen.</p>

<h2>El Papel de la Piña</h2>

<p>Uno de los elementos más distintivos de los tacos al pastor es la rebanada de piña colocada en la cima del trompo. Esta adición no es meramente decorativa — es un golpe de genialidad culinaria. La piña contiene bromelina, una enzima que ayuda a suavizar la carne mientras el trompo gira. Los jugos de la piña escurren por la carne, creando una capa caramelizada que es pura magia gustativa. Cuando el taquero corta rebanadas delgadas del trompo, cada pedazo trae consigo un toque de dulzura tropical que contrasta perfectamente con la especiería de los chiles y la acidez del limón.</p>

<p>La técnica de corte es un arte en sí misma. El taquero sostiene una tortilla en una mano y con la otra usa un cuchillo afilado para rebanar la carne directamente sobre la tortilla. Los mejores taqueros pueden cortar pedazos finísimos y uniformes a velocidad impresionante, finalizando con una rebanada de piña que cae perfectamente sobre la carne. Es un espectáculo que atrae multitudes en las esquinas de la CDMX.</p>

<h2>La Marinada Perfecta: Secretos de los Maestros</h2>

<p>La marinada es donde cada taquero guarda sus secretos más preciados. La base universal incluye chiles guajillo (para color y sabor afrutado), chile ancho (para profundidad y dulzura), y achiote (para ese color rojo inconfundible). Pero es en los detalles donde cada trompo se diferencia. Algunos agregan jugo de piña a la marinada, otros usan vinagre. Hay quienes ponen comino, orégano mexicano, pimienta gorda o hasta un toque de canela.</p>

<p>El tiempo de marinado también es crucial. Mínimo 4 horas, idealmente de 12 a 24 horas. La carne debe cortarse en rebanadas delgadas y uniformes antes de marinar, para que cada pieza absorba los sabores de manera uniforme. La proporción de carne magra a grasa también importa — demasiada grasa y el trompo se desmorona; muy poca y la carne queda seca. El equilibrio perfecto es aproximadamente 80% carne magra y 20% grasa.</p>

<h2>La Geopolítica del Taco al Pastor</h2>

<p>Los tacos al pastor no son uniformes en todo México — cada región desarrolló su versión. En la Ciudad de México, la versión clásica usa tortilla pequeña de maíz con cebolla picada, cilantro y salsa verde o roja. En Puebla, donde la influencia libanesa fue más fuerte, los "tacos árabes" usan pan pita en lugar de tortilla y se sirven con chipotle. En Monterrey, influenciados por la cultura norteña, prefieren tortilla de harina.</p>

<p>En Jalisco, la versión local sustituye parte del chile por achiote puro, creando un sabor más terroso. En el Bajío (Guanajuato, Querétaro), es común encontrar tacos al pastor con queso derretido. Y en Oaxaca, la influencia del mole se siente en marinadas que incluyen chocolate amargo y especias complejas.</p>

<h2>La Técnica del Trompo en Casa</h2>

<p>Reproducir tacos al pastor auténticos en casa es un desafío, pero no imposible. Sin el trompo vertical, la mejor alternativa es usar una parrilla o comal bien caliente. La clave está en rebanar la carne muy delgada después de marinarla y cocinarla rápidamente a fuego alto, creando esa costra caramelizada que es la firma del platillo. Otra técnica casera es apilar las rebanadas marinadas en una charola y asar en horno alto (220°C), volteando cada 15 minutos y cortando los bordes crujientes.</p>

<p>El secreto que los taqueros nunca comparten abiertamente es la "salsa del trompo" — el líquido que escurre durante la cocción, una mezcla de grasa de la carne, jugo de piña caramelizado y especias concentradas. Muchos taqueros recolectan este líquido y lo usan para barnizar la carne o como base para sus salsas exclusivas.</p>

<h2>Impacto Cultural y Económico</h2>

<p>Hoy, los tacos al pastor son considerados el taco más consumido en México y uno de los platillos callejeros más populares del mundo. En 2019, Taste Atlas eligió los tacos al pastor como el mejor platillo del mundo. En la Ciudad de México, se estima que más de 20,000 trompos giran simultáneamente cualquier viernes por la noche. El mercado de tacos al pastor mueve miles de millones de pesos anualmente y sostiene a cientos de miles de familias.</p>

<p>Más que un platillo, los tacos al pastor son un símbolo de la identidad mexicana — prueba viviente de que la grandeza culinaria nace cuando culturas diferentes se encuentran, se respetan y crean algo nuevo juntas. Desde la diáspora libanesa hasta la esquina más concurrida de la CDMX, cada taco al pastor cuenta esta historia de fusión, adaptación y genialidad culinaria.</p>

<h2>Recetas Relacionadas para Practicar</h2>

<p>Ahora que conoces la historia completa, es hora de poner manos a la obra. En nuestro acervo encontrarás la receta tradicional de Tacos al Pastor con la marinada clásica de 3 chiles, la técnica de montaje del trompo casero, y salsas que complementan perfectamente el platillo. Haz clic en los enlaces a continuación para explorar cada receta en detalle y comenzar tu camino como maestro de los tacos al pastor.</p>
`
    },
    "blog-2": {
      title: "Mole Poblano: La Sinfonía de 30 Ingredientes",
      slug: "mole-poblano-sinfonia-ingredientes",
      excerpt: "Conoce la historia de la salsa más compleja del mundo y aprende los secretos que hacen único e inolvidable a cada mole.",
      readTime: "14 min",
      content: `
<h2>La Salsa Más Compleja del Mundo</h2>

<p>Si existe un platillo que encapsula toda la complejidad, la historia y el alma de la cocina mexicana en una sola preparación, ese platillo es el mole. Y entre todos los moles — son cientos de variaciones — el Mole Poblano ocupa el trono como el más emblemático, el más celebrado y posiblemente la salsa más compleja jamás creada por la humanidad. Con sus 30 o más ingredientes, que incluyen chiles secos, chocolate, especias, frutas, semillas y horas de trabajo meticuloso, el mole poblano es una verdadera sinfonía gastronómica.</p>

<p>La palabra "mole" viene del náhuatl "molli", que significa simplemente "salsa" o "mezcla". Pero llamar al mole "salsa" es como llamar a la Novena Sinfonía de Beethoven "ruidito". El mole es toda una categoría de la cocina mexicana, con variaciones que van del negro intenso de Oaxaca al verde herbal de Guerrero, del amarillo de Oaxaca al rosado de Michoacán.</p>

<h2>La Leyenda de las Monjas</h2>

<p>La historia más popular sobre el origen del mole poblano nos lleva al Convento de Santa Rosa, en Puebla, en el siglo XVII. Según la leyenda, las monjas dominicas recibieron la noticia de que el virrey visitaría la ciudad y necesitaban preparar un banquete digno. En su desesperación, Sor Andrea de la Asunción reunió todos los ingredientes disponibles — chiles secos de diferentes tipos, chocolate, especias traídas de Europa y Asia por la Nao de Manila, semillas nativas, frutas y más — y comenzó a combinarlos en una preparación épica.</p>

<p>El resultado fue una salsa oscura, espesa, con capas de sabor aparentemente infinitas: el calor de los chiles, la amargura del chocolate, la dulzura de las frutas, lo terroso de las semillas, el picante de las especias. El virrey quedó tan impresionado que el platillo se convirtió en la especialidad de Puebla y eventualmente en uno de los platillos nacionales de México.</p>

<h2>Los Ingredientes: Un Análisis Profundo</h2>

<p>Un mole poblano auténtico puede contener de 20 a 35 ingredientes, cada uno con función específica. Analicemos los principales grupos:</p>

<p><strong>Chiles (la columna vertebral):</strong> Chile ancho (seco del poblano) — dulce, afrutado, color rojo oscuro. Chile mulato — similar al ancho pero más amargo y achocolatado. Chile pasilla — delicado, con notas de frutas secas. Chile chipotle — ahumado, profundo. Cada chile se desvena, se tuesta ligeramente en el comal y se hidrata en agua caliente.</p>

<p><strong>Chocolate y semillas:</strong> Chocolate amargo mexicano (con canela), no chocolate con leche. Almendras o cacahuates tostados. Pepitas de calabaza. Ajonjolí (fundamental — es la firma del mole poblano). Las semillas se tuestan hasta dorar, liberando aceites y aromas que darán cuerpo y cremosidad a la salsa.</p>

<p><strong>Especias:</strong> Canela (ceilán, no cassia), clavo, pimienta gorda, comino, orégano mexicano, pimienta negra, laurel. Cada especia debe tostarse individualmente.</p>

<h2>El Proceso: La Paciencia como Ingrediente Principal</h2>

<p>Hacer mole es un ejercicio de paciencia y atención. El proceso lleva entre 4 y 8 horas — no existe atajo que no comprometa el resultado. Cada grupo de ingredientes se prepara por separado: los chiles se hidratan, las especias se tuestan, las semillas se tuestan, las frutas se fríen. Después, todo se licua en tandas con caldo de pollo hasta formar una pasta espesa.</p>

<p>La etapa crucial es la fritura del mole. En una olla grande con manteca o aceite, la pasta se fríe a fuego medio por al menos 30-40 minutos, moviendo constantemente. Este proceso carameliza los azúcares, integra los sabores y oscurece la salsa. El mole está listo cuando "cambia de color" — oscurece visiblemente — y cuando una gota colocada en el dorso de la mano no escurre.</p>

<p>El chocolate se agrega solo en los últimos minutos para que no se queme. Y la sal siempre es el último ingrediente — ajustar con cuidado, pues un mole excesivamente salado es irreversible.</p>

<h2>Los 7 Moles de Oaxaca</h2>

<p>Si Puebla tiene su mole poblano, Oaxaca — llamada "La Tierra de los Siete Moles" — tiene toda una familia. Los siete moles tradicionales oaxaqueños son: Negro (el más complejo), Rojo, Coloradito (más dulce), Amarillo, Verde, Manchamanteles y Chichilo (el más raro, ahumado e intenso).</p>

<p>Cada uno se sirve en ocasiones específicas. El negro es para bodas y fiestas grandes. El coloradito para domingos en familia. El amarillo para días de semana. Esta codificación social de los moles revela cómo la cocina mexicana está entrelazada con la vida comunitaria y ritualista.</p>

<h2>La Filosofía del Mole</h2>

<p>El mole enseña algo profundo sobre la cocina mexicana: la grandeza no viene de la simplicidad o de ingredientes caros, sino de la paciencia, del conocimiento acumulado por generaciones y de la capacidad de armonizar elementos aparentemente contradictorios. Chocolate y chile. Dulce y salado. Amargo y afrutado. Picante y reconfortante. El mole es la prueba de que la complejidad, cuando está bien ejecutada, crea algo mayor que la suma de sus partes.</p>

<p>Si quieres aventurarte en la preparación de mole, comienza por el mole rojo (más sencillo) antes de enfrentar el poblano completo. Y recuerda: el mejor mole del mundo es aquel hecho con paciencia, ingredientes de calidad y, principalmente, con amor. Como dicen en México: "El mole se hace con las manos y con el corazón."</p>
`
    },
    "blog-3": {
      title: "Chiles Mexicanos: La Guía Definitiva de Variedades y Usos",
      slug: "guia-definitiva-chiles-mexicanos",
      excerpt: "Del suave poblano al ardiente habanero — conoce más de 50 variedades de chiles y aprende cuándo y cómo usar cada uno.",
      readTime: "15 min",
      content: `
<h2>El Chile es el Alma de la Cocina Mexicana</h2>

<p>No existe cocina mexicana sin chile. Punto. Mientras otras cocinas del mundo usan el picante como condimento secundario, en México el chile es el ingrediente principal, el protagonista, la razón de ser de cientos de platillos. México domesticó los chiles hace más de 7,000 años. Y en esos milenios de experimentación, los mexicanos desarrollaron una relación con el chile que va mucho más allá del picor: es sabor, aroma, color, textura e identidad cultural.</p>

<p>Para entender los chiles mexicanos, primero hay que abandonar la idea de que chile = picante. En México existen chiles que no pican nada (el poblano tiene 1,000-2,000 en la escala Scoville), chiles usados por su color (el ancho), por su aroma ahumado (el chipotle), por su sabor afrutado (el guajillo) o por su complejidad amarga (el pasilla).</p>

<h2>Chiles Frescos: Los Vivos</h2>

<p><strong>Chile Poblano (1,000-2,000 SHU):</strong> El más versátil. Grande, ancho, color verde oscuro. Suave, con sabor herbáceo y terroso. Es el chile de los chiles rellenos. También se usa en rajas con crema, arroz verde y sopas. Cuando se seca se convierte en chile ancho.</p>

<p><strong>Chile Serrano (10,000-25,000 SHU):</strong> Pequeño, delgado, verde brillante. El chile "de diario" — se usa en salsas verdes crudas, pico de gallo y guacamole. Más picante que el jalapeño pero con sabor más limpio y fresco.</p>

<p><strong>Chile Jalapeño (2,500-8,000 SHU):</strong> El más famoso internacionalmente, pero en México se considera "suave". Se usa en escabeche, relleno de queso, o rebanado para nachos. Cuando se ahúma y se seca se convierte en chipotle.</p>

<p><strong>Chile Habanero (100,000-350,000 SHU):</strong> El rey del picor mexicano. Originario de Yucatán, es pequeño, en forma de linterna, en colores vibrantes. A pesar del ardor extremo, tiene sabor afrutado y floral incomparable.</p>

<h2>Chiles Secos: Los Transformados</h2>

<p>El secado transforma completamente al chile — concentra sabores, desarrolla notas de caramelo, frutas secas y tierra, y hasta cambia el nombre.</p>

<p><strong>Chile Ancho:</strong> El poblano seco. Color rojo oscuro casi negro. Sabor dulce, afrutado, con notas de ciruela y chocolate. Es la base del mole poblano, adobos y salsas rojas.</p>

<p><strong>Chile Guajillo:</strong> Color rojo-anaranjado brillante, piel lisa. Sabor afrutado, ligeramente ácido. Se usa en salsas, birria, pozole y marinadas.</p>

<p><strong>Chile Chipotle:</strong> Jalapeño ahumado en madera de encino o mezquite. Sabor profundamente ahumado, con calor medio. Un poco rinde mucho.</p>

<h2>Cómo Preparar Chiles Secos: La Técnica Universal</h2>

<p>1. <strong>Desvena:</strong> Abre el chile con las manos, quita rabo, semillas y venas internas. 2. <strong>Tuesta:</strong> En comal seco y caliente, presiona el chile 15-30 segundos de cada lado. NUNCA quemes. 3. <strong>Hidrata:</strong> Cubre con agua caliente 15-20 minutos. 4. <strong>Licua:</strong> Con un poco del agua de hidratación.</p>

<p>Esta técnica básica aplica para cualquier chile seco y es la base de cientos de salsas, moles, adobos y guisados mexicanos. Domina esta técnica y tendrás acceso a todo un universo de sabores.</p>

<h2>La Escala Scoville y el Paladar Mexicano</h2>

<p>La Escala Scoville mide unidades de calor (SHU). Pero para los mexicanos, el picor no es sobre machismo o resistencia. Es sobre sabor. Cada nivel de calor activa diferentes receptores gustativos y libera endorfinas que modifican la percepción de todos los demás sabores del platillo.</p>

<p>Si estás comenzando tu camino con los chiles, empieza por el poblano y el ancho. Son suaves, sabrosos y perdonan errores. Gradualmente explora el guajillo, luego el chipotle, y cuando te sientas seguro, aventúrate con el serrano y el habanero.</p>

<h2>Conservación y Compra</h2>

<p>Los chiles frescos deben estar firmes, brillantes y sin manchas. Guárdalos en refrigeración hasta 2 semanas. Los chiles secos deben ser flexibles (no quebradizos). Guárdalos en lugar seco y oscuro hasta 6 meses. Nunca compres molidos cuando puedes comprar enteros — la diferencia de sabor es abismal.</p>
`
    },
    "blog-4": {
      title: "Street Food en la Ciudad de México: Un Recorrido Gastronómico Completo",
      slug: "street-food-ciudad-mexico-recorrido",
      excerpt: "De las esquinas de Coyoacán a los mercados de Tepito — una guía completa por la mejor comida callejera de la CDMX.",
      readTime: "13 min",
      content: `
<h2>La Capital Mundial de la Comida Callejera</h2>

<p>La Ciudad de México es, sin exageración, la capital mundial de la comida callejera. En ninguna otra metrópolis del planeta encontrarás tanta diversidad, calidad y accesibilidad de alimentos preparados al aire libre. Son más de 500,000 vendedores ambulantes sirviendo a una población hambrienta que aprendió desde la infancia que las mejores comidas no están en los restaurantes — están en las esquinas, en los mercados y en los puestos improvisados que aparecen cuando el sol se oculta.</p>

<p>La comida callejera mexicana no es fast food — es "slow food servido rápido". Cada taquero que opera su trompo de noche carga décadas de técnica transmitida por generaciones. Cada señora que hace gorditas por la mañana sabe la temperatura exacta del comal y la consistencia perfecta de la masa sin necesidad de termómetro o báscula.</p>

<h2>Mañana (6am-11am): El Desayuno Callejero</h2>

<p>El día en la CDMX comienza temprano y con hambre. En las esquinas del Centro Histórico y en prácticamente todas las colonias se encuentran los puestos de tamales y atole. Los tamaleros comienzan a armar sus vaporeras a las 5am. Los tamales — de verde (salsa verde con pollo), de mole (pollo en mole poblano), de rajas (poblano con queso) y dulces (fresa, piña o chocolate) — se envuelven en hoja de maíz o plátano y se cuecen al vapor por horas.</p>

<p>El acompañamiento obligado es el atole — bebida espesa de masa de maíz con sabores como champurrado (chocolate), guayaba, vainilla o fresa. Y aquí viene un hábito que sorprende a los extranjeros: el "guajolote" o "torta de tamal" — un tamal dentro de un bolillo. Carbohidrato dentro de carbohidrato. Parece locura, pero las texturas contrastantes crean algo sorprendentemente satisfactorio.</p>

<h2>Mediodía (12pm-3pm): La Comida</h2>

<p>La comida en México es la comida principal — llamada simplemente "la comida". En las calles, esto se traduce en puestos de guisados donde enormes cazuelas exhiben 10, 15, 20 guisados diferentes: chicharrón en salsa verde, pollo en mole, tinga de res, picadillo, rajas con crema, albóndigas en caldillo. Escoges dos o tres y te los sirven con arroz, frijoles, tortillas y salsa.</p>

<p>Los mercados son el epicentro de esta experiencia. El Mercado de la Merced tiene un piso entero dedicado a comida preparada. Cada puesto se especializa: uno hace solo caldos, otro solo birria, otro se dedica exclusivamente a mariscos.</p>

<h2>Noche (6pm en adelante): El Reino de los Tacos</h2>

<p>Cuando el sol se oculta, la CDMX se transforma en la taquería al aire libre más grande del mundo. Los trompos de pastor empiezan a girar, los comales de suadero se calientan, las parrillas de carne asada se encienden. Cada esquina se vuelve un punto de encuentro gastronómico.</p>

<p>Los tacos de suadero son una obsesión de la CDMX. Los mejores están en puestos improvisados en banquetas, con solo un comal, un balde de salsa verde y otro de salsa roja. La fila es el termómetro — si hay fila, es bueno.</p>

<p>Los tacos de canasta son una categoría única: tacos ya armados apilados en una canasta forrada con papel encerado y cobija, marinándose en manteca derretida. Se sirven tibios y cuestan casi nada. Es el taco más democrático de México.</p>

<h2>Los Mercados Imperdibles</h2>

<p>Mercado de San Juan: el mercado gourmet. Carnes exóticas, quesos artesanales, mariscos premium. Mercado de Jamaica: flores y frutas tropicales en cantidad absurda. Mercado de Coyoacán: churros, tostadas y un ambiente bohemio. Mercado de Tepito: caótico, intenso, pero con comida increíblemente auténtica.</p>

<p>Cada mercado es un microcosmos de la diversidad mexicana. En un mismo pasillo encuentras señora oaxaqueña vendiendo tlayudas, familia yucateca con panuchos y don de Jalisco con birria. Es todo México concentrado en unas cuantas cuadras.</p>

<h2>Tips Prácticos para el Viajero Gastronómico</h2>

<p>1. Ve donde comen los locales — fila de mexicanos es la mejor guía Michelin. 2. No tengas miedo de puestos "humildes" — la apariencia no indica calidad. 3. Empieza suave: pide salsa aparte. 4. Carga monedas — muchos puestos son solo efectivo. 5. El horario importa: cada comida callejera tiene su momento. 6. Prueba las aguas frescas: jamaica, horchata, tamarindo. 7. Platica con el taquero — a los mexicanos les encanta hablar de comida.</p>

<p>La comida callejera de la CDMX no es solo alimentación — es experiencia cultural, social y sensorial. Es democracia gastronómica: el empresario de traje y el albañil sudado comen lado a lado en el mismo puesto, compartiendo la misma salsa. Ningún restaurante con estrellas jamás replicará esta experiencia.</p>
`
    },
    "blog-5": {
      title: "Tortillas de Maíz Artesanales: De la Nixtamalización a la Mesa",
      slug: "tortillas-maiz-artesanales-nixtamalizacion",
      excerpt: "Aprende el proceso completo de nixtamalización y producción de tortillas artesanales — la base de toda la cocina mexicana.",
      readTime: "14 min",
      content: `
<h2>La Tortilla es el Corazón de México</h2>

<p>Si México fuera una casa, la tortilla sería su cimiento. Ningún otro alimento en el mundo tiene la importancia cultural, nutricional y culinaria que la tortilla de maíz tiene para los mexicanos. Se consumen en todas las comidas — desayuno, comida, cena y entre comidas. Se estima que México produce más de 12 millones de toneladas de tortillas al año. Es el alimento más consumido del país. Y detrás de cada tortilla auténtica está un proceso ancestral de más de 3,500 años: la nixtamalización.</p>

<p>Los pueblos mesoamericanos descubrieron, milenios antes de la ciencia moderna, que cocinar maíz en agua con cal (hidróxido de calcio) transformaba fundamentalmente el grano. La cal disuelve la cáscara exterior, libera niacina (vitamina B3), aumenta la disponibilidad de aminoácidos esenciales y hace el almidón más digestible.</p>

<h2>El Proceso de Nixtamalización: Paso a Paso</h2>

<p><strong>Paso 1 — Cocción:</strong> Coloca 1kg de maíz en 3 litros de agua con 1-2 cucharadas de cal apagada. Calienta hasta hervir. El tiempo varía: maíz suave (1-2h), maíz duro (2-3h), maíz criollo viejo (hasta 4h). El maíz está listo cuando la cáscara se desprende fácilmente al frotar entre los dedos.</p>

<p><strong>Paso 2 — Reposo (nejayote):</strong> Apaga el fuego y deja el maíz reposando en el agua con cal (llamada "nejayote") por 8-12 horas, idealmente de un día para otro.</p>

<p><strong>Paso 3 — Lavado:</strong> Escurre el nejayote y lava el nixtamal bajo agua corriente, frotando los granos para eliminar restos de cáscara.</p>

<p><strong>Paso 4 — Molienda:</strong> Tradicionalmente se muele en metate. Hoy la mayoría usa molino. En casa, un procesador de alimentos potente funciona. La masa debe quedar húmeda, maleable y no pegajosa.</p>

<h2>Formado y Cocción: La Danza de la Tortillera</h2>

<p>El formado puede ser a mano (palmeando — técnica tradicional que requiere años de práctica) o con prensa de tortillas. Para la prensa: corta dos plásticos, coloca uno en la base, posiciona una bolita de masa (30-35g), cubre con el otro plástico y presiona. La tortilla debe tener unos 15cm de diámetro.</p>

<p>El comal debe estar bien caliente — sin aceite ni grasa. Coloca la tortilla y cocina 45-60 segundos del primer lado. Voltea y cocina 60 segundos más. Voltea de nuevo — si la masa está bien y el comal a la temperatura correcta, la tortilla se inflará formando una burbuja de vapor. Ese "poof" es la señal de perfección.</p>

<h2>Masa Harina vs Masa Fresca</h2>

<p>La masa harina (harina de maíz nixtamalizado industrializada como Maseca o Minsa) es conveniente — solo agrega agua. Pero la diferencia con la masa fresca es como comparar café soluble con café de grano recién molido. La proporción clásica es 2 tazas de harina por 1¼ tazas de agua tibia.</p>

<h2>Variaciones Regionales</h2>

<p>En México cada región tiene sus particularidades. En Oaxaca las tlayudas son tortillas gigantes (30cm+) cocidas en comal de barro. En Sonora las tortillas de harina de trigo son enormes y delgadas como papel. En el centro las memelas son tortillas gruesas pellizcadas en los bordes. En Guerrero las tortillas de maíz azul son especialmente valoradas.</p>

<p>La tortilla no es solo base para tacos — es plato, cubierto, acompañamiento e ingrediente. Cuando se fríe se convierte en tostada. Cortada y frita en totopos. Envejecida y cocida en salsa en chilaquiles. Enrollada con relleno y bañada en salsa en enchilada. La versatilidad de la tortilla es infinita — y todo comienza con un grano de maíz, un puñado de cal y miles de años de sabiduría acumulada.</p>

<h2>Tips Finales para la Tortilla Perfecta</h2>

<p>La temperatura del comal es todo: muy frío y la tortilla se pega; muy caliente y se quema. El punto ideal es cuando una gota de agua se evapora en 2 segundos. No presiones la tortilla en el comal — resiste la tentación. Y finalmente: una tortilla fresca es mejor que una tortilla perfecta. Incluso una tortilla un poco irregular, hecha en casa con masa de calidad, será infinitamente superior a cualquier tortilla industrial de supermercado. La imperfección es la firma de lo artesanal.</p>
`
    },
  },
};

/**
 * Get a translated blog post.
 * Falls back to the original pt-BR data if no translation is found.
 */
export function getTranslatedBlogPost(
  post: { id: string; title: string; slug: string; excerpt: string; content: string; readTime: string },
  lang: string
): { title: string; slug: string; excerpt: string; content: string; readTime: string } {
  if (lang === "pt-BR" || !blogTranslations[lang]?.[post.id]) {
    return post;
  }
  const t = blogTranslations[lang][post.id];
  return {
    title: t.title,
    slug: t.slug,
    excerpt: t.excerpt,
    content: t.content,
    readTime: t.readTime,
  };
}

/** Translated blog category labels */
export const blogCategoryTranslations: Record<string, Record<string, { label: string }>> = {
  en: {
    historia: { label: "History & Culture" },
    tecnicas: { label: "Techniques" },
    ingredientes: { label: "Ingredients" },
    regionais: { label: "Regional Cuisine" },
    receitas: { label: "Recipes & Tips" },
  },
  es: {
    historia: { label: "Historia y Cultura" },
    tecnicas: { label: "Técnicas" },
    ingredientes: { label: "Ingredientes" },
    regionais: { label: "Cocina Regional" },
    receitas: { label: "Recetas y Tips" },
  },
};
