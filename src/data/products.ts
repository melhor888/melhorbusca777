export interface Product {
  id: string;
  companyId: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  tag?: string;
  description: string;
  type: "imovel" | "veiculo";
  specs: Record<string, string>;
  location?: string;
}

const propertyProducts: Product[] = [
  // emp-1 LocaFácil
  { id: "p-1", companyId: "emp-1", type: "imovel", title: "Apartamento 2 quartos - Vila Mariana", price: 2800, tag: "Aluguel Flex",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop"],
    description: "Apartamento reformado em excelente localização na Vila Mariana, próximo ao metrô. Cozinha americana, varanda e área de serviço. Condomínio com piscina, academia e salão de festas.",
    location: "Rua Domingos de Morais, 1200 - Vila Mariana, São Paulo, SP",
    specs: { "Bairro": "Vila Mariana", "Cidade": "São Paulo, SP", "Quartos": "2", "Banheiros": "1", "Área": "68 m²", "Andar": "8º", "Vagas": "1", "Condomínio": "R$ 650/mês", "IPTU": "R$ 180/mês", "Mobiliado": "Sim" } },
  { id: "p-2", companyId: "emp-1", type: "imovel", title: "Studio mobiliado - Pinheiros", price: 2200, tag: "Pronto para morar",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop"],
    description: "Studio moderno e mobiliado no coração de Pinheiros. Perfeito para jovens profissionais. Próximo a restaurantes, bares e transporte público.",
    location: "Rua dos Pinheiros, 580 - Pinheiros, São Paulo, SP",
    specs: { "Bairro": "Pinheiros", "Cidade": "São Paulo, SP", "Quartos": "1", "Banheiros": "1", "Área": "32 m²", "Andar": "12º", "Vagas": "0", "Condomínio": "R$ 480/mês", "Mobiliado": "Sim, completo" } },
  { id: "p-3", companyId: "emp-1", type: "imovel", title: "Cobertura 3 suítes - Itaim", price: 8500, tag: "Cobertura",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=500&fit=crop"],
    description: "Cobertura duplex de alto padrão no Itaim Bibi. Terraço com churrasqueira e jacuzzi, vista panorâmica da cidade. Acabamento premium em mármore e porcelanato.",
    location: "Rua Joaquim Floriano, 900 - Itaim Bibi, São Paulo, SP",
    specs: { "Bairro": "Itaim Bibi", "Cidade": "São Paulo, SP", "Quartos": "3 suítes", "Banheiros": "4", "Área": "220 m²", "Andar": "Cobertura", "Vagas": "3", "Condomínio": "R$ 2.800/mês", "Piscina": "Privativa", "Churrasqueira": "Sim" } },
  { id: "p-4", companyId: "emp-1", type: "imovel", title: "Flat executivo - Paulista", price: 3200, tag: "Pronto para morar",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop"],
    description: "Flat executivo na Av. Paulista com serviço de hotel incluído. Ideal para executivos e estadias longas.",
    location: "Av. Paulista, 1800 - Bela Vista, São Paulo, SP",
    specs: { "Bairro": "Bela Vista", "Cidade": "São Paulo, SP", "Quartos": "1", "Banheiros": "1", "Área": "45 m²", "Andar": "15º", "Vagas": "1", "Serviços": "Lavanderia, limpeza, concierge" } },
  { id: "p-5", companyId: "emp-1", type: "imovel", title: "Casa 4 quartos - Morumbi", price: 6500, tag: "Vista Panorâmica",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop"],
    description: "Casa espaçosa em rua tranquila do Morumbi. Quintal amplo, churrasqueira e edícula. Próxima a escolas internacionais.",
    location: "Rua Robert Kennedy, 250 - Morumbi, São Paulo, SP",
    specs: { "Bairro": "Morumbi", "Cidade": "São Paulo, SP", "Quartos": "4", "Banheiros": "3", "Área": "280 m²", "Terreno": "400 m²", "Vagas": "4", "Piscina": "Sim" } },
  { id: "p-6", companyId: "emp-1", type: "imovel", title: "Sala comercial 40m² - Faria Lima", price: 4200, tag: "Exclusivo",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop"],
    description: "Sala comercial na Faria Lima com ar-condicionado central. Prédio corporativo com segurança 24h e estacionamento rotativo.",
    location: "Av. Faria Lima, 3500 - Itaim Bibi, São Paulo, SP",
    specs: { "Bairro": "Itaim Bibi", "Cidade": "São Paulo, SP", "Área": "40 m²", "Andar": "6º", "Vagas": "1", "Ar-condicionado": "Central", "Tipo": "Sala comercial" } },

  // emp-4 Casa & Lar
  { id: "p-10", companyId: "emp-4", type: "imovel", title: "Casa 3 quartos - Savassi", price: 780000, tag: "Lançamento",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop"],
    description: "Casa charmosa na Savassi, reformada com acabamento de primeira. Localização privilegiada, a poucos passos de restaurantes e comércio.",
    location: "Rua Pernambuco, 450 - Savassi, Belo Horizonte, MG",
    specs: { "Bairro": "Savassi", "Cidade": "Belo Horizonte, MG", "Quartos": "3", "Banheiros": "2", "Área": "160 m²", "Terreno": "200 m²", "Vagas": "2", "Estado": "Reformado" } },
  { id: "p-11", companyId: "emp-4", type: "imovel", title: "Casa com piscina - Pampulha", price: 1200000, tag: "Luxo",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"],
    description: "Mansão com vista para a Lagoa da Pampulha. Piscina com borda infinita, sauna, espaço gourmet e suíte master com closet.",
    location: "Av. Otacílio Negrão de Lima, 1500 - Pampulha, Belo Horizonte, MG",
    specs: { "Bairro": "Pampulha", "Cidade": "Belo Horizonte, MG", "Quartos": "5 suítes", "Banheiros": "6", "Área": "450 m²", "Terreno": "800 m²", "Vagas": "4", "Piscina": "Borda infinita", "Sauna": "Sim" } },
  { id: "p-12", companyId: "emp-4", type: "imovel", title: "Sobrado 4 suítes - Mangabeiras", price: 950000, tag: "Vista Panorâmica",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=500&fit=crop"],
    description: "Sobrado amplo no bairro Mangabeiras. Rua tranquila, vista para a Serra do Curral. Ótimo para famílias.",
    location: "Rua Professor Moraes, 120 - Mangabeiras, Belo Horizonte, MG",
    specs: { "Bairro": "Mangabeiras", "Cidade": "Belo Horizonte, MG", "Quartos": "4 suítes", "Banheiros": "5", "Área": "320 m²", "Terreno": "500 m²", "Vagas": "3" } },
  { id: "p-13", companyId: "emp-4", type: "imovel", title: "Casa térrea - Buritis", price: 620000, tag: "Pronto para morar",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop"],
    description: "Casa térrea moderna no Buritis, ideal para quem busca praticidade. Ampla área de lazer e acabamento de qualidade.",
    location: "Rua Bernardo Guimarães, 800 - Buritis, Belo Horizonte, MG",
    specs: { "Bairro": "Buritis", "Cidade": "Belo Horizonte, MG", "Quartos": "3", "Banheiros": "2", "Área": "140 m²", "Terreno": "250 m²", "Vagas": "2" } },

  // emp-7 VerticalVip
  { id: "p-20", companyId: "emp-7", type: "imovel", title: "Apto 1 suíte - Consolação", price: 450000, tag: "Lançamento",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop"],
    description: "Apartamento novo em prédio moderno na Consolação. Lazer completo, próximo ao metrô e universidades.",
    location: "Rua da Consolação, 2800 - Consolação, São Paulo, SP",
    specs: { "Bairro": "Consolação", "Cidade": "São Paulo, SP", "Quartos": "1 suíte", "Banheiros": "1", "Área": "42 m²", "Andar": "10º", "Vagas": "1", "Lazer": "Completo" } },
  { id: "p-21", companyId: "emp-7", type: "imovel", title: "Penthouse 200m² - Jardins", price: 3200000, tag: "Cobertura",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop"],
    description: "Penthouse exclusivo nos Jardins. Vista 360° da cidade, acabamento italiano, automação residencial completa.",
    location: "Alameda Lorena, 1200 - Jardins, São Paulo, SP",
    specs: { "Bairro": "Jardins", "Cidade": "São Paulo, SP", "Quartos": "4 suítes", "Banheiros": "5", "Área": "200 m²", "Andar": "Cobertura", "Vagas": "4", "Automação": "Completa" } },
  { id: "p-22", companyId: "emp-7", type: "imovel", title: "Apto 3 quartos - Moema", price: 890000, tag: "Vista Mar",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop"],
    description: "Apartamento bem localizado em Moema, próximo ao Shopping Ibirapuera. Varanda gourmet e 2 vagas.",
    location: "Av. Ibirapuera, 3100 - Moema, São Paulo, SP",
    specs: { "Bairro": "Moema", "Cidade": "São Paulo, SP", "Quartos": "3", "Banheiros": "2", "Área": "110 m²", "Andar": "5º", "Vagas": "2" } },
  { id: "p-23", companyId: "emp-7", type: "imovel", title: "Duplex 2 quartos - Vila Olímpia", price: 720000, tag: "Aluguel Flex",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=500&fit=crop"],
    description: "Duplex moderno na Vila Olímpia, com pé direito duplo na sala. Prédio novo com lazer completo.",
    location: "Rua Funchal, 500 - Vila Olímpia, São Paulo, SP",
    specs: { "Bairro": "Vila Olímpia", "Cidade": "São Paulo, SP", "Quartos": "2", "Banheiros": "2", "Área": "85 m²", "Tipo": "Duplex", "Vagas": "1" } },

  // emp-11 Business Point
  { id: "p-30", companyId: "emp-11", type: "imovel", title: "Sala 80m² - Faria Lima", price: 650000, tag: "Premium",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop"],
    description: "Sala comercial premium na Faria Lima. Piso elevado, ar-condicionado central e infraestrutura de TI.",
    location: "Av. Faria Lima, 4000 - Itaim Bibi, São Paulo, SP",
    specs: { "Bairro": "Itaim Bibi", "Cidade": "São Paulo, SP", "Área": "80 m²", "Andar": "14º", "Vagas": "2", "Tipo": "Sala comercial", "Certificação": "LEED Gold" } },
  { id: "p-31", companyId: "emp-11", type: "imovel", title: "Loja 120m² - Av. Paulista", price: 1100000, tag: "Lançamento",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"],
    description: "Loja de rua na Av. Paulista com alto fluxo de pedestres. Vitrine ampla e pé direito alto.",
    location: "Av. Paulista, 2500 - Bela Vista, São Paulo, SP",
    specs: { "Bairro": "Bela Vista", "Cidade": "São Paulo, SP", "Área": "120 m²", "Tipo": "Loja de rua", "Pé direito": "4,5 m", "Vitrine": "8 m lineares" } },
  { id: "p-32", companyId: "emp-11", type: "imovel", title: "Andar corporativo 500m²", price: 4500000, tag: "Destaque",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop"],
    description: "Andar corporativo inteiro em torre triple A. Ideal para sedes de grandes empresas.",
    location: "Av. Faria Lima, 3900 - Itaim Bibi, São Paulo, SP",
    specs: { "Bairro": "Itaim Bibi", "Cidade": "São Paulo, SP", "Área": "500 m²", "Andar": "22º", "Vagas": "10", "Tipo": "Andar corporativo", "Heliponto": "Sim" } },
];

const vehicleProducts: Product[] = [
  // emp-20 AutoStar (São Paulo, SP)
  { id: "v-1", companyId: "emp-20", type: "veiculo", title: "Toyota Corolla XEi 2024", price: 145000, tag: "Em destaque",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop"],
    description: "Toyota Corolla XEi 2.0 Flex, único dono, todas as revisões na concessionária. IPVA 2024 pago. Bancos em couro, multimídia com Android Auto e Apple CarPlay.",
    specs: { "Marca": "Toyota", "Modelo": "Corolla XEi", "Ano": "2024", "Km": "12.000 km", "Combustível": "Flex", "Câmbio": "Automático CVT", "Cor": "Prata", "Portas": "4", "Final placa": "5", "Cidade": "São Paulo, SP" } },
  { id: "v-2", companyId: "emp-20", type: "veiculo", title: "Honda Civic Touring 2023", price: 168000, tag: "Premium",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=500&fit=crop"],
    description: "Honda Civic Touring 1.5 Turbo com teto solar, bancos em couro, painel digital e sistema de som premium. Carro impecável.",
    specs: { "Marca": "Honda", "Modelo": "Civic Touring", "Ano": "2023", "Km": "25.000 km", "Combustível": "Gasolina", "Câmbio": "Automático CVT", "Cor": "Preto", "Motor": "1.5 Turbo", "Potência": "173 cv", "Cidade": "São Paulo, SP" } },
  { id: "v-3", companyId: "emp-20", type: "veiculo", title: "BMW 320i Sport 2022", price: 225000, tag: "Luxo",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=500&fit=crop"],
    description: "BMW 320i Sport GP com pacote M Sport, interior caramelo, teto solar panorâmico. Garantia de fábrica até 2025.",
    specs: { "Marca": "BMW", "Modelo": "320i Sport GP", "Ano": "2022", "Km": "32.000 km", "Combustível": "Gasolina", "Câmbio": "Automático 8 marchas", "Motor": "2.0 Turbo", "Potência": "184 cv", "Tração": "Traseira", "Cidade": "São Paulo, SP" } },
  { id: "v-4", companyId: "emp-20", type: "veiculo", title: "VW T-Cross Highline 2024", price: 148000, tag: "Oferta",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop"],
    description: "VW T-Cross Highline 1.4 TSI, SUV compacto top de linha. Completo com todos opcionais.",
    specs: { "Marca": "Volkswagen", "Modelo": "T-Cross Highline", "Ano": "2024", "Km": "8.000 km", "Combustível": "Flex", "Câmbio": "Automático 6 marchas", "Motor": "1.4 TSI", "Cidade": "São Paulo, SP" } },
  { id: "v-5", companyId: "emp-20", type: "veiculo", title: "Jeep Compass Limited 2023", price: 185000, tag: "Exclusivo",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=500&fit=crop"],
    description: "Jeep Compass Limited Diesel 4x4, pack high tech. Ideal para quem busca conforto e versatilidade.",
    specs: { "Marca": "Jeep", "Modelo": "Compass Limited", "Ano": "2023", "Km": "40.000 km", "Combustível": "Diesel", "Câmbio": "Automático 9 marchas", "Tração": "4x4", "Cidade": "São Paulo, SP" } },
  { id: "v-6", companyId: "emp-20", type: "veiculo", title: "Chevrolet Onix Premier 2024", price: 95000, tag: "Top",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=500&fit=crop"],
    description: "Onix Plus Premier 1.0 Turbo, Wi-Fi nativo, câmera de ré e sensor de estacionamento. Econômico e completo.",
    specs: { "Marca": "Chevrolet", "Modelo": "Onix Plus Premier", "Ano": "2024", "Km": "15.000 km", "Combustível": "Flex", "Câmbio": "Automático 6 marchas", "Motor": "1.0 Turbo", "Cidade": "São Paulo, SP" } },

  // emp-21 Mega Motors (Sorocaba, SP)
  { id: "v-10", companyId: "emp-21", type: "veiculo", title: "Hyundai HB20 Diamond 2024", price: 108000, tag: "Novo",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop"],
    description: "HB20 Diamond Plus 1.0 TGDI, top de linha, saiu da loja há 3 meses. Multimídia com tela de 8 polegadas.",
    specs: { "Marca": "Hyundai", "Modelo": "HB20 Diamond Plus", "Ano": "2024", "Km": "3.000 km", "Combustível": "Flex", "Câmbio": "Automático 6 marchas", "Motor": "1.0 TGDI", "Cidade": "Sorocaba, SP" } },
  { id: "v-11", companyId: "emp-21", type: "veiculo", title: "Fiat Pulse Impetus 2023", price: 112000, tag: "Limpo",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&h=500&fit=crop"],
    description: "Fiat Pulse Impetus 1.0 Turbo, SUV compacto com design arrojado. Econômico e confortável.",
    specs: { "Marca": "Fiat", "Modelo": "Pulse Impetus", "Ano": "2023", "Km": "22.000 km", "Combustível": "Flex", "Câmbio": "CVT", "Motor": "1.0 Turbo", "Cidade": "Sorocaba, SP" } },
  { id: "v-12", companyId: "emp-21", type: "veiculo", title: "Toyota Yaris XLS 2023", price: 105000, tag: "Prime",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=500&fit=crop"],
    description: "Toyota Yaris XLS sedã, confiabilidade Toyota com tecnologia de ponta. Manutenção em dia.",
    specs: { "Marca": "Toyota", "Modelo": "Yaris XLS", "Ano": "2023", "Km": "18.000 km", "Combustível": "Flex", "Câmbio": "Automático CVT", "Cidade": "Sorocaba, SP" } },
  { id: "v-13", companyId: "emp-21", type: "veiculo", title: "Nissan Kicks Exclusive 2024", price: 135000, tag: "Em destaque",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop"],
    description: "Nissan Kicks Exclusive com teto bicolor, câmera 360° e ProPilot. SUV tecnológico e espaçoso.",
    specs: { "Marca": "Nissan", "Modelo": "Kicks Exclusive", "Ano": "2024", "Km": "5.000 km", "Combustível": "Flex", "Câmbio": "CVT", "Motor": "1.6", "Cidade": "Sorocaba, SP" } },

  // emp-24 MotoSpeed (São Paulo, SP)
  { id: "v-20", companyId: "emp-24", type: "veiculo", title: "Honda CB 500F 2024", price: 38000, tag: "Top",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=500&fit=crop"],
    description: "Honda CB 500F 2024, naked versátil para cidade e estrada. Motor bicilíndrico suave e econômico.",
    specs: { "Marca": "Honda", "Modelo": "CB 500F", "Ano": "2024", "Km": "2.500 km", "Cilindradas": "500 cc", "Combustível": "Gasolina", "Tipo": "Naked", "Cidade": "São Paulo, SP" } },
  { id: "v-21", companyId: "emp-24", type: "veiculo", title: "Yamaha MT-07 2023", price: 45000, tag: "Limited",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=500&fit=crop"],
    description: "Yamaha MT-07 com motor CP2 de 689cc, torque impressionante e posição confortável. Perfeita para o dia a dia.",
    specs: { "Marca": "Yamaha", "Modelo": "MT-07", "Ano": "2023", "Km": "8.000 km", "Cilindradas": "689 cc", "Potência": "74,8 cv", "Tipo": "Naked", "Cidade": "São Paulo, SP" } },
  { id: "v-22", companyId: "emp-24", type: "veiculo", title: "Kawasaki Z400 2024", price: 35000, tag: "Oferta",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=500&fit=crop"],
    description: "Kawasaki Z400 bicilíndrica de 399cc. Leve, ágil e com visual agressivo. Ideal para iniciantes e intermediários.",
    specs: { "Marca": "Kawasaki", "Modelo": "Z400", "Ano": "2024", "Km": "1.200 km", "Cilindradas": "399 cc", "Potência": "45 cv", "Tipo": "Naked", "Cidade": "São Paulo, SP" } },
  { id: "v-23", companyId: "emp-24", type: "veiculo", title: "BMW G310R 2023", price: 32000, tag: "Premium",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=500&fit=crop"],
    description: "BMW G310R, naked premium de entrada. Qualidade BMW com custo acessível. ABS de série.",
    specs: { "Marca": "BMW", "Modelo": "G310R", "Ano": "2023", "Km": "6.000 km", "Cilindradas": "313 cc", "Potência": "34 cv", "Tipo": "Naked", "Cidade": "São Paulo, SP" } },

  // emp-27 Pesados Brasil (Betim, MG)
  { id: "v-30", companyId: "emp-27", type: "veiculo", title: "Volvo FH 540 2022", price: 850000, tag: "Exclusivo",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop"],
    description: "Volvo FH 540 6x4, cavalo mecânico com cabine Globetrotter XL. Ideal para longas distâncias. Contrato de manutenção Volvo.",
    specs: { "Marca": "Volvo", "Modelo": "FH 540", "Ano": "2022", "Km": "180.000 km", "Motor": "D13K 540 cv", "Câmbio": "I-Shift 12v", "Eixos": "6x4", "Tipo": "Cavalo mecânico", "Cidade": "Betim, MG" } },
  { id: "v-31", companyId: "emp-27", type: "veiculo", title: "Scania R450 2023", price: 920000, tag: "Luxo",
    image: "https://images.unsplash.com/photo-1586191582056-e18aa4163fb5?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1586191582056-e18aa4163fb5?w=800&h=500&fit=crop"],
    description: "Scania R450 Streamline, econômico e potente. Cabine com ar-condicionado e cama. Financiamento facilitado.",
    specs: { "Marca": "Scania", "Modelo": "R450", "Ano": "2023", "Km": "95.000 km", "Motor": "DC13 450 cv", "Câmbio": "Opticruise", "Eixos": "6x2", "Cidade": "Betim, MG" } },
  { id: "v-32", companyId: "emp-27", type: "veiculo", title: "Mercedes Actros 2024", price: 980000, tag: "Prime",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop"],
    description: "Mercedes-Benz Actros 2651, o mais tecnológico da categoria. Cabine StreamSpace, câmeras em vez de retrovisores.",
    specs: { "Marca": "Mercedes-Benz", "Modelo": "Actros 2651", "Ano": "2024", "Km": "15.000 km", "Motor": "OM471 510 cv", "Câmbio": "PowerShift 3", "Eixos": "6x4", "Cidade": "Betim, MG" } },

  // emp-30 WorkVan (Joinville, SC)
  { id: "v-40", companyId: "emp-30", type: "veiculo", title: "Fiat Fiorino 2024", price: 85000, tag: "Novo",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop"],
    description: "Fiat Fiorino Endurance 1.4 Flex, utilitário compacto perfeito para entregas urbanas. Porta lateral de correr.",
    specs: { "Marca": "Fiat", "Modelo": "Fiorino Endurance", "Ano": "2024", "Km": "0 km", "Combustível": "Flex", "Câmbio": "Manual 5 marchas", "Carga útil": "650 kg", "Cidade": "Joinville, SC" } },
  { id: "v-41", companyId: "emp-30", type: "veiculo", title: "Renault Kangoo 2023", price: 92000, tag: "Limpo",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&h=500&fit=crop"],
    description: "Renault Kangoo Express 1.6, amplo espaço de carga, ideal para comércio e serviços. Direção hidráulica e ar-condicionado.",
    specs: { "Marca": "Renault", "Modelo": "Kangoo Express", "Ano": "2023", "Km": "12.000 km", "Combustível": "Flex", "Câmbio": "Manual 5 marchas", "Carga útil": "800 kg", "Cidade": "Joinville, SC" } },
  { id: "v-42", companyId: "emp-30", type: "veiculo", title: "VW Saveiro Robust 2024", price: 98000, tag: "Limited",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop"],
    description: "VW Saveiro Robust CS 1.6, picape compacta mais vendida do Brasil. Versátil para trabalho e lazer.",
    specs: { "Marca": "Volkswagen", "Modelo": "Saveiro Robust CS", "Ano": "2024", "Km": "5.000 km", "Combustível": "Flex", "Câmbio": "Manual 5 marchas", "Carga útil": "742 kg", "Cidade": "Joinville, SC" } },
];

export const allProducts = [...propertyProducts, ...vehicleProducts];

export function getProductsByCompany(companyId: string): Product[] {
  return allProducts.filter((p) => p.companyId === companyId);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function getTagLabel(tag: string): string {
  const labels: Record<string, string> = {
    premium: "Premium",
    luxo: "Luxo",
    prime: "Prime",
    novo: "Novo",
    em_destaque: "Em Destaque",
    oferta: "Oferta",
    exclusivo: "Exclusivo",
    top: "Top",
    limited: "Limited",
    lancamento: "Lançamento",
    pronto_para_morar: "Pronto p/ Morar",
    cobertura: "Cobertura",
    vista_panoramica: "Vista Panorâmica",
    aluguel_flex: "Aluguel Flex",
  };
  return labels[tag] || tag;
}

export function getTagStyle(tag: string): string {
  const styles: Record<string, string> = {
    // Display labels
    "Limpo": "bg-emerald-500 text-white",
    "Premium": "bg-gradient-to-r from-[#FFD100] to-[#e5bc00] text-[#002F6C]",
    "Luxo": "bg-gradient-to-r from-purple-600 to-purple-800 text-white",
    "Prime": "bg-gradient-to-r from-[#002F6C] to-[#00AEEF] text-white",
    "Novo": "bg-green-500 text-white",
    "Em destaque": "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    "Oferta": "bg-red-600 text-white",
    "Exclusivo": "bg-gradient-to-r from-indigo-600 to-violet-600 text-white",
    "Top": "bg-[#00AEEF] text-white",
    "Limited": "bg-gradient-to-r from-rose-600 to-pink-600 text-white",
    "Lançamento": "bg-gradient-to-r from-cyan-500 to-blue-600 text-white",
    "Pronto para morar": "bg-gradient-to-r from-emerald-500 to-teal-600 text-white",
    "Cobertura": "bg-gradient-to-r from-amber-500 to-orange-600 text-white",
    "Vista Mar": "bg-gradient-to-r from-sky-400 to-blue-500 text-white",
    "Vista Panorâmica": "bg-gradient-to-r from-indigo-400 to-blue-600 text-white",
    "Aluguel Flex": "bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white",
    "Destaque": "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    "Aluguel": "bg-[#002F6C] text-white",
    // Enum keys (from database)
    "premium": "bg-gradient-to-r from-[#FFD100] to-[#e5bc00] text-[#002F6C]",
    "luxo": "bg-gradient-to-r from-purple-600 to-purple-800 text-white",
    "prime": "bg-gradient-to-r from-[#002F6C] to-[#00AEEF] text-white",
    "novo": "bg-green-500 text-white",
    "em_destaque": "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    "oferta": "bg-red-600 text-white",
    "exclusivo": "bg-gradient-to-r from-indigo-600 to-violet-600 text-white",
    "top": "bg-[#00AEEF] text-white",
    "limited": "bg-gradient-to-r from-rose-600 to-pink-600 text-white",
    "lancamento": "bg-gradient-to-r from-cyan-500 to-blue-600 text-white",
    "pronto_para_morar": "bg-gradient-to-r from-emerald-500 to-teal-600 text-white",
    "cobertura": "bg-gradient-to-r from-amber-500 to-orange-600 text-white",
    "vista_panoramica": "bg-gradient-to-r from-indigo-400 to-blue-600 text-white",
    "aluguel_flex": "bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white",
  };
  return styles[tag] || "bg-primary text-primary-foreground";
}
