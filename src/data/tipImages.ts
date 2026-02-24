const PLACEHOLDER = "/placeholder.svg";

export const tipImages: Record<string, string> = {
  // Técnicas
  "masa-nixtamalizada": "/images/tip-masa-nixtamalizada.jpg",
  "tortillas-a-mao": "/images/tip-tortillas-a-mao.jpg",
  "chiles-secos-guia": "/images/tip-chiles-secos-guia.jpg",
  "molho-mole-basico": "/images/tip-molho-mole-basico.jpg",
  "salsas-mexicanas": "/images/tip-salsas-mexicanas.jpg",
  "tecnica-tacos-al-pastor": "/images/tip-tecnica-tacos-al-pastor.jpg",
  "carnitas-perfeitas": "/images/tip-carnitas-perfeitas.jpg",
  "birria-tecnica": "/images/tip-birria-tecnica.jpg",
  "tamales-tecnica": "/images/tip-tamales-tecnica.jpg",
  "cochinita-pibil-tecnica": "/images/tip-cochinita-pibil-tecnica.jpg",
  "pozole-perfeito": "/images/tip-pozole-perfeito.jpg",
  "enchiladas-variantes": "/images/tip-enchiladas-variantes.jpg",
  "ceviche-aguachile": "/images/tip-ceviche-aguachile.jpg",
  "chiles-rellenos-tecnica": "/images/tip-chiles-rellenos-tecnica.jpg",
  // Harmonização
  "pimentas-escala-scoville": "/images/tip-pimentas-escala-scoville.jpg",
  "queijos-mexicanos": "/images/tip-queijos-mexicanos.jpg",
  "tequila-mezcal-harmonizacao": "/images/tip-tequila-mezcal-harmonizacao.jpg",
  "milho-variedades": "/images/tip-milho-variedades.jpg",
  "ervas-especiarias-mx": "/images/tip-ervas-especiarias-mx.jpg",
  "aguas-frescas": "/images/tip-aguas-frescas.jpg",
  "cerveja-comida-mexicana": "/images/tip-cerveja-comida-mexicana.jpg",
  "chocolate-harmonizacao": "/images/tip-chocolate-harmonizacao.jpg",
  // Apresentação
  "montagem-taco-perfeito": "/images/tip-montagem-taco-perfeito.jpg",
  "mesa-mexicana": "/images/tip-mesa-mexicana.jpg",
  "garnishes-mexicanos": "/images/tip-garnishes-mexicanos.jpg",
  "plating-molcajete": "/images/tip-plating-molcajete.jpg",
  "tortillero-servir": "/images/tip-tortillero-servir.jpg",
  "talavera-servir": "/images/tip-talavera-servir.jpg",
  "bebidas-apresentacao": "/images/tip-bebidas-apresentacao.jpg",
  // História
  "historia-milho-mexico": "/images/tip-historia-milho-mexico.jpg",
  "historia-chile-identidade": "/images/tip-historia-chile-identidade.jpg",
  "historia-mole-7-variedades": "/images/tip-historia-mole-7-variedades.jpg",
  "dia-muertos-comida": "/images/tip-dia-muertos-comida.jpg",
  "historia-tacos-origem": "/images/tip-historia-tacos-origem.jpg",
  "chocolate-mesoamericano": "/images/tip-chocolate-mesoamericano.jpg",
  "street-food-cdmx": "/images/tip-street-food-cdmx.jpg",
  "influencia-espanhola": "/images/tip-influencia-espanhola.jpg",
  "culinaria-oaxaquena": "/images/tip-culinaria-oaxaquena.jpg",
  "culinaria-yucateca": "/images/tip-culinaria-yucateca.jpg",
};

export function getTipImage(tipId: string, category?: string, themeTag?: string): string {
  return tipImages[tipId] || PLACEHOLDER;
}
