export interface Company {
  id: string;
  name: string;
  logo: string;
  address: string;
  rating: number;
  reviewCount: number;
  category: string;
  segment: "imoveis" | "veiculos";
  featured: boolean;
  deliveryTime?: string;
  whatsapp: string;
}

export const propertyCompanies: Company[] = [
  { id: "emp-1", name: "LocaFácil Imóveis", logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop", address: "Av. Paulista, 1500 - São Paulo, SP", rating: 4.8, reviewCount: 342, category: "aluguel", segment: "imoveis", featured: true, whatsapp: "5511999990001" },
  { id: "emp-2", name: "Morar Bem Locações", logo: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=200&fit=crop", address: "Rua das Flores, 220 - Rio de Janeiro, RJ", rating: 4.5, reviewCount: 187, category: "aluguel", segment: "imoveis", featured: false, whatsapp: "5521999990002" },
  { id: "emp-3", name: "AlugueJá", logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=200&fit=crop", address: "Rua XV de Novembro, 80 - Curitiba, PR", rating: 4.6, reviewCount: 95, category: "aluguel", segment: "imoveis", featured: false, whatsapp: "5541999990003" },
  { id: "emp-4", name: "Casa & Lar Imobiliária", logo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop", address: "Av. Brasil, 3200 - Belo Horizonte, MG", rating: 4.9, reviewCount: 520, category: "casas", segment: "imoveis", featured: true, whatsapp: "5531999990004" },
  { id: "emp-5", name: "Sonho Meu Casas", logo: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=200&h=200&fit=crop", address: "Rua do Sol, 45 - Salvador, BA", rating: 4.3, reviewCount: 210, category: "casas", segment: "imoveis", featured: false, whatsapp: "5571999990005" },
  { id: "emp-6", name: "Prime Houses", logo: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=200&h=200&fit=crop", address: "Av. Iguaçu, 890 - Porto Alegre, RS", rating: 4.7, reviewCount: 156, category: "casas", segment: "imoveis", featured: false, whatsapp: "5551999990006" },
  { id: "emp-7", name: "VerticalVip Imóveis", logo: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop", address: "Rua Augusta, 1200 - São Paulo, SP", rating: 4.8, reviewCount: 430, category: "apartamentos", segment: "imoveis", featured: true, whatsapp: "5511999990007" },
  { id: "emp-8", name: "Alto Padrão Aptos", logo: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&h=200&fit=crop", address: "Av. Atlântica, 500 - Rio de Janeiro, RJ", rating: 4.6, reviewCount: 288, category: "apartamentos", segment: "imoveis", featured: false, whatsapp: "5521999990008" },
  { id: "emp-9", name: "TerraVerde Lotes", logo: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=200&h=200&fit=crop", address: "Rod. Anhanguera, km 45 - Campinas, SP", rating: 4.4, reviewCount: 78, category: "terrenos", segment: "imoveis", featured: false, whatsapp: "5519999990009" },
  { id: "emp-10", name: "Lotes & Chácaras", logo: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=200&h=200&fit=crop", address: "Estrada Rural, 12 - Goiânia, GO", rating: 4.2, reviewCount: 42, category: "terrenos", segment: "imoveis", featured: false, whatsapp: "5562999990010" },
  { id: "emp-11", name: "Business Point", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop", address: "Av. Faria Lima, 4000 - São Paulo, SP", rating: 4.7, reviewCount: 165, category: "comerciais", segment: "imoveis", featured: true, whatsapp: "5511999990011" },
  { id: "emp-12", name: "Espaço Comercial BR", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop", address: "SCS Quadra 7 - Brasília, DF", rating: 4.5, reviewCount: 93, category: "comerciais", segment: "imoveis", featured: false, whatsapp: "5561999990012" },
];

export const vehicleCompanies: Company[] = [
  { id: "emp-20", name: "AutoStar Veículos", logo: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=200&fit=crop", address: "Av. dos Automóveis, 800 - São Paulo, SP", rating: 4.9, reviewCount: 612, category: "carros", segment: "veiculos", featured: true, whatsapp: "5511999990020" },
  { id: "emp-21", name: "Mega Motors", logo: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=200&h=200&fit=crop", address: "Rod. Raposo Tavares, 1200 - Sorocaba, SP", rating: 4.7, reviewCount: 340, category: "carros", segment: "veiculos", featured: true, whatsapp: "5515999990021" },
  { id: "emp-22", name: "CarroZero Multimarcas", logo: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=200&fit=crop", address: "Rua das Concessionárias, 55 - Curitiba, PR", rating: 4.5, reviewCount: 198, category: "carros", segment: "veiculos", featured: false, whatsapp: "5541999990022" },
  { id: "emp-23", name: "Elite Cars Premium", logo: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=200&fit=crop", address: "Av. Europa, 350 - São Paulo, SP", rating: 4.8, reviewCount: 275, category: "carros", segment: "veiculos", featured: false, whatsapp: "5511999990023" },
  { id: "emp-24", name: "MotoSpeed Center", logo: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=200&h=200&fit=crop", address: "Av. Tiradentes, 500 - São Paulo, SP", rating: 4.6, reviewCount: 230, category: "motos", segment: "veiculos", featured: true, whatsapp: "5511999990024" },
  { id: "emp-25", name: "Duas Rodas Motos", logo: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=200&h=200&fit=crop", address: "Rua dos Motociclistas, 100 - Manaus, AM", rating: 4.4, reviewCount: 145, category: "motos", segment: "veiculos", featured: false, whatsapp: "5592999990025" },
  { id: "emp-26", name: "Honda & Yamaha Store", logo: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=200&h=200&fit=crop", address: "Av. JK, 780 - Goiânia, GO", rating: 4.3, reviewCount: 88, category: "motos", segment: "veiculos", featured: false, whatsapp: "5562999990026" },
  { id: "emp-27", name: "Pesados Brasil", logo: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=200&h=200&fit=crop", address: "Rod. Fernão Dias, km 90 - Betim, MG", rating: 4.7, reviewCount: 167, category: "caminhoes", segment: "veiculos", featured: true, whatsapp: "5531999990027" },
  { id: "emp-28", name: "TruckCenter Log", logo: "https://images.unsplash.com/photo-1586191582056-e18aa4163fb5?w=200&h=200&fit=crop", address: "Av. Industrial, 2200 - Campinas, SP", rating: 4.5, reviewCount: 92, category: "caminhoes", segment: "veiculos", featured: false, whatsapp: "5519999990028" },
  { id: "emp-29", name: "UtilCar Veículos", logo: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=200&h=200&fit=crop", address: "Av. das Nações, 1500 - Brasília, DF", rating: 4.4, reviewCount: 110, category: "utilitarios", segment: "veiculos", featured: false, whatsapp: "5561999990029" },
  { id: "emp-30", name: "WorkVan Comerciais", logo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=200&h=200&fit=crop", address: "Rua do Comércio, 330 - Joinville, SC", rating: 4.6, reviewCount: 74, category: "utilitarios", segment: "veiculos", featured: true, whatsapp: "5547999990030" },
];

export const allCompanies = [...propertyCompanies, ...vehicleCompanies];

export const propertyCategories = [
  { slug: "aluguel", name: "Aluguel", icon: "Key", color: "from-[#00AEEF] to-[#0090c5]", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop" },
  { slug: "casas", name: "Casas", icon: "Home", color: "from-[#002F6C] to-[#004a9f]", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop" },
  { slug: "apartamentos", name: "Apartamentos", icon: "Building2", color: "from-[#00AEEF] to-[#002F6C]", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop" },
  { slug: "terrenos", name: "Terrenos", icon: "Landmark", color: "from-[#FFD100] to-[#e5bc00]", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop" },
  { slug: "comerciais", name: "Comerciais", icon: "Store", color: "from-[#002F6C] to-[#00AEEF]", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop" },
];

export const vehicleCategories = [
  { slug: "carros", name: "Carros", icon: "Car", color: "from-[#FFD100] to-[#e5bc00]", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=250&fit=crop" },
  { slug: "motos", name: "Motos", icon: "Bike", color: "from-[#00AEEF] to-[#0090c5]", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=250&fit=crop" },
  { slug: "caminhoes", name: "Caminhões", icon: "Truck", color: "from-[#002F6C] to-[#004a9f]", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop" },
  { slug: "utilitarios", name: "Utilitários", icon: "Cog", color: "from-[#FFD100] to-[#00AEEF]", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=250&fit=crop" },
];
