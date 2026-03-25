export interface Product {
  id: string;
  companyId: string;
  title: string;
  price: number;
  image: string;
  tag?: string;
}

const propertyProducts: Product[] = [
  // emp-1 LocaFácil
  { id: "p-1", companyId: "emp-1", title: "Apartamento 2 quartos - Vila Mariana", price: 2800, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop", tag: "Aluguel" },
  { id: "p-2", companyId: "emp-1", title: "Studio mobiliado - Pinheiros", price: 2200, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop", tag: "Novo" },
  { id: "p-3", companyId: "emp-1", title: "Cobertura 3 suítes - Itaim", price: 8500, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop", tag: "Premium" },
  { id: "p-4", companyId: "emp-1", title: "Flat executivo - Paulista", price: 3200, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop" },
  { id: "p-5", companyId: "emp-1", title: "Casa 4 quartos - Morumbi", price: 6500, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
  { id: "p-6", companyId: "emp-1", title: "Sala comercial 40m² - Faria Lima", price: 4200, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" },

  // emp-4 Casa & Lar
  { id: "p-10", companyId: "emp-4", title: "Casa 3 quartos - Savassi", price: 780000, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop", tag: "Destaque" },
  { id: "p-11", companyId: "emp-4", title: "Casa com piscina - Pampulha", price: 1200000, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop", tag: "Luxo" },
  { id: "p-12", companyId: "emp-4", title: "Sobrado 4 suítes - Mangabeiras", price: 950000, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop" },
  { id: "p-13", companyId: "emp-4", title: "Casa térrea - Buritis", price: 620000, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" },

  // emp-7 VerticalVip
  { id: "p-20", companyId: "emp-7", title: "Apto 1 suíte - Consolação", price: 450000, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop", tag: "Novo" },
  { id: "p-21", companyId: "emp-7", title: "Penthouse 200m² - Jardins", price: 3200000, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop", tag: "Premium" },
  { id: "p-22", companyId: "emp-7", title: "Apto 3 quartos - Moema", price: 890000, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop" },
  { id: "p-23", companyId: "emp-7", title: "Duplex 2 quartos - Vila Olímpia", price: 720000, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop" },

  // emp-11 Business Point
  { id: "p-30", companyId: "emp-11", title: "Sala 80m² - Faria Lima", price: 650000, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", tag: "Premium" },
  { id: "p-31", companyId: "emp-11", title: "Loja 120m² - Av. Paulista", price: 1100000, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" },
  { id: "p-32", companyId: "emp-11", title: "Andar corporativo 500m²", price: 4500000, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", tag: "Destaque" },
];

const vehicleProducts: Product[] = [
  // emp-20 AutoStar
  { id: "v-1", companyId: "emp-20", title: "Toyota Corolla XEi 2024", price: 145000, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop", tag: "Destaque" },
  { id: "v-2", companyId: "emp-20", title: "Honda Civic Touring 2023", price: 168000, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop", tag: "Turbo" },
  { id: "v-3", companyId: "emp-20", title: "BMW 320i Sport 2022", price: 225000, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop", tag: "Premium" },
  { id: "v-4", companyId: "emp-20", title: "VW T-Cross Highline 2024", price: 148000, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop" },
  { id: "v-5", companyId: "emp-20", title: "Jeep Compass Limited 2023", price: 185000, image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop" },
  { id: "v-6", companyId: "emp-20", title: "Chevrolet Onix Premier 2024", price: 95000, image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop" },

  // emp-21 Mega Motors
  { id: "v-10", companyId: "emp-21", title: "Hyundai HB20 Diamond 2024", price: 108000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop", tag: "Novo" },
  { id: "v-11", companyId: "emp-21", title: "Fiat Pulse Impetus 2023", price: 112000, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop" },
  { id: "v-12", companyId: "emp-21", title: "Toyota Yaris XLS 2023", price: 105000, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop" },
  { id: "v-13", companyId: "emp-21", title: "Nissan Kicks Exclusive 2024", price: 135000, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop", tag: "Destaque" },

  // emp-24 MotoSpeed
  { id: "v-20", companyId: "emp-24", title: "Honda CB 500F 2024", price: 38000, image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=400&fit=crop", tag: "Destaque" },
  { id: "v-21", companyId: "emp-24", title: "Yamaha MT-07 2023", price: 45000, image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop", tag: "Esportiva" },
  { id: "v-22", companyId: "emp-24", title: "Kawasaki Z400 2024", price: 35000, image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop" },
  { id: "v-23", companyId: "emp-24", title: "BMW G310R 2023", price: 32000, image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=400&fit=crop" },

  // emp-27 Pesados Brasil
  { id: "v-30", companyId: "emp-27", title: "Volvo FH 540 2022", price: 850000, image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop", tag: "Seminovo" },
  { id: "v-31", companyId: "emp-27", title: "Scania R450 2023", price: 920000, image: "https://images.unsplash.com/photo-1586191582056-e18aa4163fb5?w=600&h=400&fit=crop", tag: "Premium" },
  { id: "v-32", companyId: "emp-27", title: "Mercedes Actros 2024", price: 980000, image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop" },

  // emp-30 WorkVan
  { id: "v-40", companyId: "emp-30", title: "Fiat Fiorino 2024", price: 85000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop", tag: "Novo" },
  { id: "v-41", companyId: "emp-30", title: "Renault Kangoo 2023", price: 92000, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop" },
  { id: "v-42", companyId: "emp-30", title: "VW Saveiro Robust 2024", price: 98000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop" },
];

export const allProducts = [...propertyProducts, ...vehicleProducts];

export function getProductsByCompany(companyId: string): Product[] {
  return allProducts.filter((p) => p.companyId === companyId);
}

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
