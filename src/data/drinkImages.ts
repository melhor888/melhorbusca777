import heroMojito from "@/assets/hero-mojito.jpg";
import caipirinha from "@/assets/drink-caipirinha.jpg";
import margarita from "@/assets/drink-margarita.jpg";
import cosmopolitan from "@/assets/drink-cosmopolitan.jpg";
import oldFashioned from "@/assets/drink-old-fashioned.jpg";
import pinaColada from "@/assets/drink-pina-colada.jpg";
import ginTonic from "@/assets/drink-gin-tonic.jpg";
import moscowMule from "@/assets/drink-moscow-mule.jpg";
import daiquiri from "@/assets/drink-daiquiri.jpg";
import virginMojito from "@/assets/drink-virgin-mojito.jpg";
import negroni from "@/assets/drink-negroni.jpg";
import tequilaSunrise from "@/assets/drink-tequila-sunrise.jpg";
import bloodyMary from "@/assets/drink-bloody-mary.jpg";
import screwdriver from "@/assets/drink-screwdriver.jpg";
import whiteRussian from "@/assets/drink-white-russian.jpg";
import blackRussian from "@/assets/drink-black-russian.jpg";
import cubaLibre from "@/assets/drink-cuba-libre.jpg";
import maiTai from "@/assets/drink-mai-tai.jpg";
import tomCollins from "@/assets/drink-tom-collins.jpg";
import ginFizz from "@/assets/drink-gin-fizz.jpg";
import paloma from "@/assets/drink-paloma.jpg";
import whiskySour from "@/assets/drink-whisky-sour.jpg";
import manhattan from "@/assets/drink-manhattan.jpg";
import mintJulep from "@/assets/drink-mint-julep.jpg";
import martini from "@/assets/drink-martini.jpg";
import french75 from "@/assets/drink-french-75.jpg";
import sexOnBeach from "@/assets/drink-sex-on-beach.jpg";
import blueLagoon from "@/assets/drink-blue-lagoon.jpg";
import shirleyTemple from "@/assets/drink-shirley-temple.jpg";
import smoothieFrutas from "@/assets/drink-smoothie-frutas.jpg";
import limonadaTropical from "@/assets/drink-limonada-tropical.jpg";
import jagerbomb from "@/assets/drink-jagerbomb.jpg";
import b52 from "@/assets/drink-b52.jpg";
import kamikaze from "@/assets/drink-kamikaze.jpg";
import lemonDrop from "@/assets/drink-lemon-drop.jpg";
import aperolSpritz from "@/assets/drink-aperol-spritz.jpg";
import piscoSour from "@/assets/drink-pisco-sour.jpg";
import sangria from "@/assets/drink-sangria.jpg";
import caipiroska from "@/assets/drink-caipiroska.jpg";
import espressoMartini from "@/assets/drink-espresso-martini.jpg";
import seaBreeze from "@/assets/drink-sea-breeze.jpg";
import zombie from "@/assets/drink-zombie.jpg";
import darkNStormy from "@/assets/drink-dark-n-stormy.jpg";
import bramble from "@/assets/drink-bramble.jpg";
import irishCoffee from "@/assets/drink-irish-coffee.jpg";
import hurricane from "@/assets/drink-hurricane.jpg";
import sidecar from "@/assets/drink-sidecar.jpg";
import aviation from "@/assets/drink-aviation.jpg";
import penicillin from "@/assets/drink-penicillin.jpg";
import longIsland from "@/assets/drink-long-island.jpg";
import tequilaShot from "@/assets/drink-tequila-shot.jpg";
import fruitPunch from "@/assets/drink-fruit-punch.jpg";
import arnoldPalmer from "@/assets/drink-arnold-palmer.jpg";
import michelada from "@/assets/drink-michelada.jpg";

const drinkImages: Record<string, string> = {
  "hero-mojito": heroMojito,
  caipirinha,
  margarita,
  cosmopolitan,
  "old-fashioned": oldFashioned,
  "pina-colada": pinaColada,
  "gin-tonic": ginTonic,
  "moscow-mule": moscowMule,
  daiquiri,
  "virgin-mojito": virginMojito,
  negroni,
  "tequila-sunrise": tequilaSunrise,
  "bloody-mary": bloodyMary,
  screwdriver,
  "white-russian": whiteRussian,
  "black-russian": blackRussian,
  "cuba-libre": cubaLibre,
  "mai-tai": maiTai,
  "tom-collins": tomCollins,
  "gin-fizz": ginFizz,
  paloma,
  "whisky-sour": whiskySour,
  manhattan,
  "mint-julep": mintJulep,
  martini,
  "french-75": french75,
  "sex-on-beach": sexOnBeach,
  "blue-lagoon": blueLagoon,
  "shirley-temple": shirleyTemple,
  "smoothie-frutas": smoothieFrutas,
  "limonada-tropical": limonadaTropical,
  jagerbomb,
  b52,
  kamikaze,
  "lemon-drop": lemonDrop,
  "aperol-spritz": aperolSpritz,
  "pisco-sour": piscoSour,
  sangria,
  caipiroska,
  "espresso-martini": espressoMartini,
  "sea-breeze": seaBreeze,
  zombie,
  "dark-n-stormy": darkNStormy,
  bramble,
  "irish-coffee": irishCoffee,
  hurricane,
  sidecar,
  aviation,
  penicillin,
  "long-island": longIsland,
  "tequila-shot": tequilaShot,
  "fruit-punch": fruitPunch,
  "arnold-palmer": arnoldPalmer,
  michelada,
  // Aliases for drinks reusing similar images
  "harvey-wallbanger": screwdriver,
  "vodka-martini": martini,
  "rum-punch": maiTai,
  "bahama-mama": pinaColada,
  "singapore-sling": tomCollins,
  gimlet: ginTonic,
  "bees-knees": lemonDrop,
  batanga: cubaLibre,
  "mexican-mule": moscowMule,
  "tequila-sour": whiskySour,
  "el-diablo": darkNStormy,
  cantarito: paloma,
  "ranch-water": ginTonic,
  "rusty-nail": oldFashioned,
  "rob-roy": manhattan,
  boulevardier: negroni,
  godfather: blackRussian,
  sazerac: oldFashioned,
  americano: negroni,
  "corpse-reviver": french75,
  "last-word": aviation,
  "pina-colada-sa": pinaColada,
  "agua-fresca": limonadaTropical,
  "cha-gelado": arnoldPalmer,
  "suco-verde": smoothieFrutas,
  "limonada-suica": smoothieFrutas,
  "purple-rain": blueLagoon,
  "absinthe-drip": aviation,
  "irish-car-bomb": jagerbomb,
  "fireball-shot": tequilaShot,
  "sake-bomb": jagerbomb,
  "surfer-rosa": seaBreeze,
  "bahia-breeze": seaBreeze,

  // ===== VODKA EXTRAS =====
  appletini: cosmopolitan,
  "cape-codder": seaBreeze,
  madras: sexOnBeach,
  greyhound: screwdriver,
  "salty-dog": screwdriver,
  "vodka-collins": tomCollins,
  "chi-chi": pinaColada,
  vesper: martini,
  "bay-breeze": seaBreeze,
  "woo-woo": sexOnBeach,

  // ===== RUM EXTRAS =====
  "rum-runner": hurricane,
  painkiller: pinaColada,
  "planters-punch": maiTai,
  "hemingway-daiquiri": daiquiri,
  "jungle-bird": maiTai,
  "navy-grog": zombie,
  "ti-punch": caipirinha,
  "corn-n-oil": darkNStormy,
  caipirissima: caipirinha,
  "hot-buttered-rum": irishCoffee,

  // ===== GIN EXTRAS =====
  "gin-rickey": ginTonic,
  "clover-club": cosmopolitan,
  "ramos-gin-fizz": ginFizz,
  southside: ginFizz,
  "gin-basil-smash": bramble,
  "pegu-club": french75,
  "white-lady": french75,
  "monkey-gland": cosmopolitan,
  "gin-gin-mule": moscowMule,
  "negroni-sbagliato": negroni,

  // ===== TEQUILA EXTRAS =====
  "tommys-margarita": margarita,
  "naked-and-famous": aviation,
  "oaxaca-old-fashioned": oldFashioned,
  matador: margarita,
  "brave-bull": blackRussian,
  vampiro: bloodyMary,
  "juan-collins": tomCollins,
  "mezcal-margarita": margarita,

  // ===== WHISKY EXTRAS =====
  "gold-rush": whiskySour,
  "paper-plane": sidecar,
  toronto: oldFashioned,
  "vieux-carre": manhattan,
  "brown-derby": whiskySour,
  "blood-and-sand": manhattan,
  "new-york-sour": whiskySour,
  "whisky-smash": mintJulep,

  // ===== CLÁSSICOS EXTRAS =====
  "champagne-cocktail": french75,
  "brandy-alexander": espressoMartini,
  grasshopper: blueLagoon,
  stinger: martini,
  "jack-rose": cosmopolitan,
  "angel-face": aviation,
  "between-the-sheets": sidecar,
  "hanky-panky": negroni,

  // ===== TROPICAIS EXTRAS =====
  "pornstar-martini": cosmopolitan,
  "swimming-pool": blueLagoon,
  "mango-tango": smoothieFrutas,
  "tropical-storm": hurricane,
  "jungle-juice": fruitPunch,
  "tiki-torch": zombie,
  "lava-flow": pinaColada,
  "caribbean-sunset": tequilaSunrise,

  // ===== NÃO ALCOÓLICOS EXTRAS =====
  nojito: virginMojito,
  cinderella: fruitPunch,
  "safe-sex-on-beach": sexOnBeach,
  "roy-rogers": shirleyTemple,
  "italian-soda": limonadaTropical,
  "cranberry-spritzer": seaBreeze,
  "cucumber-cooler": ginTonic,
  "mango-lassi": smoothieFrutas,

  // ===== SHOTS EXTRAS =====
  "mind-eraser": blackRussian,
  "buttery-nipple": b52,
  "washington-apple": kamikaze,
  "green-tea-shot": kamikaze,
  "surfer-on-acid": jagerbomb,

  // ===== EXÓTICOS EXTRAS =====
  "hugo-spritz": aperolSpritz,
  carajillo: espressoMartini,
  "mezcal-negroni": negroni,
  canchanchara: caipirinha,
  "paloma-italiana": aperolSpritz,
  "espresso-romano": espressoMartini,
  "moscow-mule-thai": moscowMule,
};

export function getDrinkImage(imageKey: string): string {
  return drinkImages[imageKey] || heroMojito;
}
