export interface VipDrink {
  id: string;
  name: string;
  category: string;
  image: string;
  ingredients: string[];
  steps: string[];
  difficulty: "Fácil" | "Médio" | "Avançado";
  time: string;
  description: string; // VIP description: history, where consumed, season, pairing
}

export interface VipChefTip {
  glass: string;
  serve: string;
  tip: string;
}
