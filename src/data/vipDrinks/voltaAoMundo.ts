import { VipDrink } from "./types";

export const voltaAoMundo: VipDrink[] = [
  {
    id: "vm-oaxaca",
    name: "Oaxaca: Terra dos 7 Moles",
    category: "Regiões do México",
    image: "vm-oaxaca",
    ingredients: [
      "Mezcal Artesanal",
      "Mole Negro",
      "Tlayudas",
      "Chapulines (gafanhotos)",
      "Quesillo (Queijo Oaxaca)",
      "Chocolate de Água"
    ],
    steps: [
      "A capital gastronômica do México.",
      "Beba Mezcal em jícaras, acompanhado de sal de gusano e laranja.",
      "Prove os 7 moles (Negro, Rojo, Amarillo, Verde, Coloradito, Chichilo, Manchamanteles).",
      "Coma uma Tlayuda no mercado à noite.",
      "Finalize com chocolate quente batido."
    ],
    difficulty: "Informativo",
    time: "N/A",
    description: "Oaxaca é o coração indígena do México. Sua cozinha zapoteca e mixteca é complexa e ancestral. O milho, o cacau e o agave são sagrados aqui."
  },
  {
    id: "vm-jalisco",
    name: "Jalisco: Berço da Tequila",
    category: "Regiões do México",
    image: "vm-jalisco",
    ingredients: [
      "Tequila (Vale e Altos)",
      "Birria de Chivo (ou Res)",
      "Tortas Ahogadas",
      "Carne en su Jugo",
      "Pozole Rojo"
    ],
    steps: [
      "Visite os campos de agave azul em Tequila.",
      "Coma uma Torta Ahogada (sanduíche 'afogado' em salsa picante) em Guadalajara.",
      "Prove a Birria original (de cabrito) em tlaquepaque.",
      "Escute Mariachi enquanto bebe tequila bandera (limão, tequila, sangrita)."
    ],
    difficulty: "Informativo",
    time: "N/A",
    description: "Jalisco é a imagem do México para o mundo: Mariachis, Tequila e Charros. Sua cozinha é vibrante, picante e festiva. Guadalajara é a capital moderna com alma tradicional."
  },
  {
    id: "vm-yucatan",
    name: "Yucatán: O Mundo Maia",
    category: "Regiões do México",
    image: "dish-cochinita-pibil",
    ingredients: [
      "Cochinita Pibil",
      "Sopa de Lima",
      "Papadzules",
      "Panuchos",
      "Recado Negro (Relleno Negro)",
      "Licor Xtabentún"
    ],
    steps: [
      "A cozinha yucateca é diferente do resto do México (influência maia + caribenha + europeia).",
      "O Achiote e a Laranja Azeda são os temperos base.",
      "O Habanero é o rei das pimentas aqui.",
      "Prove a Cochinita Pibil assada no pib (forno de terra).",
      "Beba Xtabentún (licor de mel e anis) como digestivo."
    ],
    difficulty: "Informativo",
    time: "N/A",
    description: "Isolada do resto do país por selvas, Yucatán desenvolveu uma culinária única. É uma fusão de técnicas maias ancestrais com ingredientes trazidos pelos espanhóis e holandeses."
  },
  {
    id: "vm-michoacan",
    name: "Michoacán: Alma da Cozinha",
    category: "Regiões do México",
    image: "dish-carnitas-michoacan-chef",
    ingredients: [
      "Carnitas (Uruapan/Quiroga)",
      "Sopa Tarasca",
      "Corundas e Uchepos (Tamales)",
      "Pescado Blanco de Pátzcuaro",
      "Charanda (Rum de cana local)",
      "Ate de Membrillo"
    ],
    steps: [
      "A cozinha tradicional de Michoacán foi a base para a UNESCO declarar a comida mexicana Patrimônio da Humanidade.",
      "As Carnitas (porco confitado) são as melhores do mundo.",
      "Visite Pátzcuaro no Día de Muertos.",
      "Beba Charanda, a denominação de origem local para o destilado de cana."
    ],
    difficulty: "Informativo",
    time: "N/A",
    description: "Terra dos lagos e florestas. A cozinha Purépecha é rústica e profunda. Michoacán é onde o milho, o feijão e o chile encontram sua expressão mais caseira e autêntica."
  },
  {
    id: "vm-puebla",
    name: "Puebla: O Barroco Mexicano",
    category: "Regiões do México",
    image: "dish-mole-poblano",
    ingredients: [
      "Mole Poblano",
      "Chiles en Nogada",
      "Cemitas",
      "Tacos Árabes",
      "Rompope (Licor de ovo conventual)",
      "Camote (Doces)"
    ],
    steps: [
      "A cozinha conventual: freiras espanholas criaram pratos complexos misturando novo e velho mundo.",
      "Mole Poblano: chocolate, chiles, especiarias.",
      "Chiles en Nogada: o prato nacional sazonal.",
      "Prove Tacos Árabes (influência libanesa que criou o Pastor).",
      "Coma doces de camote e beba Rompope."
    ],
    difficulty: "Informativo",
    time: "N/A",
    description: "Puebla é a cozinha sofisticada dos conventos coloniais. Aqui nasceram os pratos mais barrocos e elaborados do México, misturando influências árabes, espanholas e indígenas."
  },
  {
    id: "vm-baja",
    name: "Baja California: Vinho e Mar",
    category: "Regiões do México",
    image: "dish-tacos-pescado",
    ingredients: [
      "Vinho do Valle de Guadalupe",
      "Tacos de Pescado (Ensenada)",
      "Lagosta (Puerto Nuevo)",
      "Cozinha Baja Med",
      "Cerveja Artesanal"
    ],
    steps: [
      "A fronteira inovadora.",
      "Percorra a Ruta del Vino no Valle de Guadalupe (90% do vinho mexicano).",
      "Coma Tacos de Pescado empanados em Ensenada.",
      "Prove a Lagosta com feijão e arroz em Puerto Nuevo.",
      "Experimente a cozinha Baja Med: fusão mediterrânea-mexicana."
    ],
    difficulty: "Informativo",
    time: "N/A",
    description: "O Mediterrâneo mexicano. Baja é moderna, focada em frutos do mar frescos, azeite, vinho e vegetais orgânicos. É onde a tradição encontra a inovação californiana."
  },
  {
    id: "vm-cdmx",
    name: "CDMX: O Umbigo da Lua",
    category: "Regiões do México",
    image: "dish-tacos-suadero",
    ingredients: [
      "Tacos de Suadero",
      "Tacos de Canasta",
      "Guajolota (Torta de Tamal)",
      "Esquites",
      "Pulque",
      "Alta Gastronomia (Pujol, Quintonil)"
    ],
    steps: [
      "A capital tem tudo de todas as regiões.",
      "Café da manhã: Guajolota (carboidrato sobre carboidrato).",
      "Almoço: Fonda ou restaurante premiado.",
      "Jantar: Tacos de rua (Suadero é rei na CDMX).",
      "Beba Pulque em uma pulquería tradicional.",
      "Visite Xochimilco e coma nas trajineras."
    ],
    difficulty: "Informativo",
    time: "N/A",
    description: "A Cidade do México (antiga Tenochtitlán) é uma das maiores capitas gastronômicas do mundo. Da comida de rua mais humilde aos melhores restaurantes do planeta, a CDMX vibra comida 24h por dia."
  }
];
