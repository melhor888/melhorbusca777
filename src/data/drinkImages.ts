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
};

export function getDrinkImage(imageKey: string): string {
  return drinkImages[imageKey] || heroMojito;
}
