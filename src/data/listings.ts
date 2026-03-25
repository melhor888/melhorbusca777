export type ListingType = "car" | "property";

export interface CarListing {
  id: string;
  type: "car";
  title: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  price: number;
  location: string;
  image: string;
  images: string[];
  description: string;
  whatsapp: string;
  featured: boolean;
  createdAt: string;
}

export interface PropertyListing {
  id: string;
  type: "property";
  title: string;
  propertyType: "apartment" | "house" | "land" | "commercial";
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  location: string;
  neighborhood: string;
  image: string;
  images: string[];
  description: string;
  whatsapp: string;
  featured: boolean;
  createdAt: string;
}

export type Listing = CarListing | PropertyListing;

export const carBrands = ["Toyota", "Honda", "Chevrolet", "Volkswagen", "Ford", "Hyundai", "Fiat", "Jeep", "BMW", "Mercedes-Benz"];
export const fuelTypes = ["Flex", "Gasolina", "Diesel", "Elétrico", "Híbrido"];
export const transmissionTypes = ["Manual", "Automático", "CVT"];
export const propertyTypes = ["apartment", "house", "land", "commercial"] as const;

const carImages = [
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
];

const propertyImages = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
];

export const sampleCars: CarListing[] = [
  {
    id: "car-1", type: "car", title: "Toyota Corolla XEi 2.0", brand: "Toyota", model: "Corolla",
    year: 2023, mileage: 15000, fuel: "Flex", transmission: "Automático", price: 135000,
    location: "São Paulo, SP", image: carImages[0], images: [carImages[0], carImages[1]],
    description: "Único dono, revisões na concessionária, IPVA pago.", whatsapp: "5511999999999", featured: true, createdAt: "2024-01-15"
  },
  {
    id: "car-2", type: "car", title: "Honda Civic Touring 1.5 Turbo", brand: "Honda", model: "Civic",
    year: 2022, mileage: 28000, fuel: "Gasolina", transmission: "CVT", price: 165000,
    location: "Rio de Janeiro, RJ", image: carImages[1], images: [carImages[1], carImages[2]],
    description: "Teto solar, bancos em couro, multimídia completa.", whatsapp: "5521999999999", featured: true, createdAt: "2024-01-10"
  },
  {
    id: "car-3", type: "car", title: "Volkswagen T-Cross Highline", brand: "Volkswagen", model: "T-Cross",
    year: 2024, mileage: 5000, fuel: "Flex", transmission: "Automático", price: 145000,
    location: "Curitiba, PR", image: carImages[2], images: [carImages[2], carImages[3]],
    description: "Zero km de loja, completo com todos opcionais.", whatsapp: "5541999999999", featured: false, createdAt: "2024-02-01"
  },
  {
    id: "car-4", type: "car", title: "Chevrolet Onix Plus Premier", brand: "Chevrolet", model: "Onix",
    year: 2023, mileage: 20000, fuel: "Flex", transmission: "Automático", price: 89000,
    location: "Belo Horizonte, MG", image: carImages[3], images: [carImages[3], carImages[4]],
    description: "Wi-Fi nativo, câmera de ré, sensor de estacionamento.", whatsapp: "5531999999999", featured: false, createdAt: "2024-01-20"
  },
  {
    id: "car-5", type: "car", title: "BMW 320i Sport GP", brand: "BMW", model: "320i",
    year: 2021, mileage: 35000, fuel: "Gasolina", transmission: "Automático", price: 215000,
    location: "São Paulo, SP", image: carImages[4], images: [carImages[4], carImages[5]],
    description: "Pacote M Sport, interior caramelo, teto solar panorâmico.", whatsapp: "5511988888888", featured: true, createdAt: "2024-01-05"
  },
  {
    id: "car-6", type: "car", title: "Jeep Compass Limited Diesel", brand: "Jeep", model: "Compass",
    year: 2022, mileage: 42000, fuel: "Diesel", transmission: "Automático", price: 175000,
    location: "Brasília, DF", image: carImages[5], images: [carImages[5], carImages[6]],
    description: "4x4, pack high tech, garantia de fábrica até 2025.", whatsapp: "5561999999999", featured: false, createdAt: "2024-02-10"
  },
  {
    id: "car-7", type: "car", title: "Hyundai HB20 Diamond Plus", brand: "Hyundai", model: "HB20",
    year: 2024, mileage: 2000, fuel: "Flex", transmission: "Automático", price: 105000,
    location: "Salvador, BA", image: carImages[6], images: [carImages[6], carImages[7]],
    description: "Carro novo, saiu da loja há 2 meses.", whatsapp: "5571999999999", featured: false, createdAt: "2024-02-15"
  },
  {
    id: "car-8", type: "car", title: "Fiat Pulse Impetus Turbo", brand: "Fiat", model: "Pulse",
    year: 2023, mileage: 18000, fuel: "Flex", transmission: "CVT", price: 110000,
    location: "Porto Alegre, RS", image: carImages[7], images: [carImages[7], carImages[0]],
    description: "SUV compacto turbo, design moderno, econômico.", whatsapp: "5551999999999", featured: false, createdAt: "2024-01-25"
  },
];

export const sampleProperties: PropertyListing[] = [
  {
    id: "prop-1", type: "property", title: "Apartamento 3 quartos - Vila Mariana",
    propertyType: "apartment", bedrooms: 3, bathrooms: 2, area: 95, price: 750000,
    location: "São Paulo, SP", neighborhood: "Vila Mariana",
    image: propertyImages[0], images: [propertyImages[0], propertyImages[1]],
    description: "Apartamento reformado, varanda gourmet, 2 vagas de garagem.", whatsapp: "5511999999999", featured: true, createdAt: "2024-01-12"
  },
  {
    id: "prop-2", type: "property", title: "Casa com piscina - Alphaville",
    propertyType: "house", bedrooms: 4, bathrooms: 3, area: 280, price: 1500000,
    location: "Barueri, SP", neighborhood: "Alphaville",
    image: propertyImages[1], images: [propertyImages[1], propertyImages[2]],
    description: "Casa em condomínio fechado, 4 suítes, área gourmet completa.", whatsapp: "5511988888888", featured: true, createdAt: "2024-01-08"
  },
  {
    id: "prop-3", type: "property", title: "Cobertura duplex - Leblon",
    propertyType: "apartment", bedrooms: 4, bathrooms: 4, area: 320, price: 4500000,
    location: "Rio de Janeiro, RJ", neighborhood: "Leblon",
    image: propertyImages[2], images: [propertyImages[2], propertyImages[3]],
    description: "Vista mar, terraço com jacuzzi, 3 vagas.", whatsapp: "5521999999999", featured: true, createdAt: "2024-01-03"
  },
  {
    id: "prop-4", type: "property", title: "Terreno 500m² - Condomínio Fechado",
    propertyType: "land", bedrooms: 0, bathrooms: 0, area: 500, price: 350000,
    location: "Campinas, SP", neighborhood: "Barão Geraldo",
    image: propertyImages[3], images: [propertyImages[3]],
    description: "Terreno plano, pronto para construir, condomínio com lazer.", whatsapp: "5519999999999", featured: false, createdAt: "2024-02-01"
  },
  {
    id: "prop-5", type: "property", title: "Sala Comercial 60m² - Centro",
    propertyType: "commercial", bedrooms: 0, bathrooms: 1, area: 60, price: 280000,
    location: "Curitiba, PR", neighborhood: "Centro",
    image: propertyImages[4], images: [propertyImages[4], propertyImages[5]],
    description: "Sala em edifício comercial, ar-condicionado, 1 vaga.", whatsapp: "5541999999999", featured: false, createdAt: "2024-01-18"
  },
  {
    id: "prop-6", type: "property", title: "Apartamento 2 quartos - Savassi",
    propertyType: "apartment", bedrooms: 2, bathrooms: 1, area: 65, price: 480000,
    location: "Belo Horizonte, MG", neighborhood: "Savassi",
    image: propertyImages[5], images: [propertyImages[5], propertyImages[6]],
    description: "Localização privilegiada, próximo a tudo, prédio novo.", whatsapp: "5531999999999", featured: false, createdAt: "2024-02-05"
  },
  {
    id: "prop-7", type: "property", title: "Casa 3 quartos - Jardim Europa",
    propertyType: "house", bedrooms: 3, bathrooms: 2, area: 180, price: 620000,
    location: "Goiânia, GO", neighborhood: "Jardim Europa",
    image: propertyImages[6], images: [propertyImages[6], propertyImages[7]],
    description: "Casa ampla, quintal grande, rua tranquila.", whatsapp: "5562999999999", featured: false, createdAt: "2024-01-28"
  },
  {
    id: "prop-8", type: "property", title: "Studio 35m² - Pinheiros",
    propertyType: "apartment", bedrooms: 1, bathrooms: 1, area: 35, price: 420000,
    location: "São Paulo, SP", neighborhood: "Pinheiros",
    image: propertyImages[7], images: [propertyImages[7], propertyImages[0]],
    description: "Studio moderno, mobiliado, próximo ao metrô.", whatsapp: "5511977777777", featured: false, createdAt: "2024-02-12"
  },
];

export const allListings: Listing[] = [...sampleCars, ...sampleProperties];

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatMileage(km: number): string {
  return km.toLocaleString("pt-BR") + " km";
}
