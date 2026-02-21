// Individual tip images - imported as ES6 modules
import arrozPerfeito from "@/assets/tips/arroz-perfeito.jpg";
import corteSashimi from "@/assets/tips/corte-sashimi.jpg";
import dashiFundamento from "@/assets/tips/dashi-fundamento.jpg";
import fermentacaoJaponesa from "@/assets/tips/fermentacao-japonesa.jpg";
import tecnicaTempura from "@/assets/tips/tecnica-tempura.jpg";
import tiposArroz from "@/assets/tips/tipos-arroz.jpg";
import tiposShoyu from "@/assets/tips/tipos-shoyu.jpg";
import wasabiVerdadeiro from "@/assets/tips/wasabi-verdadeiro.jpg";
import algasJaponesas from "@/assets/tips/algas-japonesas.jpg";
import etiquetaMesa from "@/assets/tips/etiqueta-mesa.jpg";
import historiaSushi from "@/assets/tips/historia-sushi.jpg";
import culinariaKaiseki from "@/assets/tips/culinaria-kaiseki.jpg";
import culinariaIzakaya from "@/assets/tips/culinaria-izakaya.jpg";
import tradicionalVsModerna from "@/assets/tips/tradicional-vs-moderna.jpg";
import cerimoniaCha from "@/assets/tips/cerimonia-cha.jpg";
import arteBento from "@/assets/tips/arte-bento.jpg";
import facasJaponesas from "@/assets/tips/facas-japonesas.jpg";
import tamagoyaki from "@/assets/tips/tamagoyaki.jpg";
import tsukemono from "@/assets/tips/tsukemono.jpg";
import guiaSake from "@/assets/tips/guia-sake.jpg";
import tecnicaGrelhados from "@/assets/tips/tecnica-grelhados.jpg";
import wagashi from "@/assets/tips/wagashi.jpg";
import toppingsRamen from "@/assets/tips/toppings-ramen.jpg";
import mundoTofu from "@/assets/tips/mundo-tofu.jpg";
import mirinVinagre from "@/assets/tips/mirin-vinagre.jpg";
import artePrato from "@/assets/tips/arte-prato.jpg";
import konbini from "@/assets/tips/konbini.jpg";
import curryJapones from "@/assets/tips/curry-japones.jpg";
import mercadoPeixe from "@/assets/tips/mercado-peixe.jpg";
import culinariaRegional from "@/assets/tips/culinaria-regional.jpg";
import shunSazonalidade from "@/assets/tips/shun-sazonalidade.jpg";
import festivaisGastronomicos from "@/assets/tips/festivais-gastronomicos.jpg";
import massaArtesanal from "@/assets/tips/massa-artesanal.jpg";
import cienciaUmami from "@/assets/tips/ciencia-umami.jpg";

export const tipImages: Record<string, string> = {
  "arroz-perfeito": arrozPerfeito,
  "corte-sashimi": corteSashimi,
  "dashi-fundamento": dashiFundamento,
  "fermentacao-japonesa": fermentacaoJaponesa,
  "tecnica-tempura": tecnicaTempura,
  "tipos-arroz": tiposArroz,
  "tipos-shoyu": tiposShoyu,
  "wasabi-verdadeiro": wasabiVerdadeiro,
  "algas-japonesas": algasJaponesas,
  "etiqueta-mesa": etiquetaMesa,
  "historia-sushi": historiaSushi,
  "culinaria-kaiseki": culinariaKaiseki,
  "culinaria-izakaya": culinariaIzakaya,
  "tradicional-vs-moderna": tradicionalVsModerna,
  "cerimonia-cha": cerimoniaCha,
  "arte-bento": arteBento,
  "facas-japonesas": facasJaponesas,
  "tamagoyaki-perfeito": tamagoyaki,
  "tsukemono": tsukemono,
  "guia-sake": guiaSake,
  "tecnica-grelhados": tecnicaGrelhados,
  "wagashi-arte": wagashi,
  "toppings-ramen": toppingsRamen,
  "mundo-tofu": mundoTofu,
  "mirin-vinagre": mirinVinagre,
  "arte-prato": artePrato,
  "konbini-food": konbini,
  "curry-japones": curryJapones,
  "mercado-peixe": mercadoPeixe,
  "culinaria-regional": culinariaRegional,
  "shun-sazonalidade": shunSazonalidade,
  "festivais-gastronomicos": festivaisGastronomicos,
  "massa-artesanal": massaArtesanal,
  "ciencia-umami": cienciaUmami,
};

export function getTipImage(tipId: string, category?: string, themeTag?: string): string {
  if (tipImages[tipId]) {
    return tipImages[tipId];
  }
  // Fallback to first available image
  return arrozPerfeito;
}
