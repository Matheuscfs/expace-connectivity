export type Company = {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  featured: boolean;
  location: string;
};

// Cities and states for random distribution
const locations = [
  "São Paulo-SP",
  "Rio de Janeiro-RJ",
  "Curitiba-PR",
  "Florianópolis-SC",
  "Porto Alegre-RS",
  "Belo Horizonte-MG",
  "Salvador-BA",
  "Recife-PE",
  "Fortaleza-CE",
  "Brasília-DF",
  "Manaus-AM",
  "Belém-PA",
  "Cascavel-PR",
  "Londrina-PR",
  "Maringá-PR",
  "Joinville-SC"
];

const getRandomLocation = () => locations[Math.floor(Math.random() * locations.length)];

const generateCompanies = (category: string, names: string[], logos: string[], startId: number): Company[] => {
  return names.map((name, index) => ({
    id: startId + index,
    name,
    logo: logos[index % logos.length],
    description: `Empresa especializada em ${category.toLowerCase()} com foco em qualidade e satisfação do cliente.`,
    category,
    rating: Number((3 + Math.random() * 2).toFixed(1)),
    reviews: Math.floor(50 + Math.random() * 200),
    featured: index < 3, // Changed from 2 to 3 to feature more companies
    location: getRandomLocation()
  }));
};

// Companies by category with more names
const contabilidadeCompanies = generateCompanies(
  "Contabilidade",
  [
    "ContaFácil", "ContaExpress", "ContaMaster", "ContaDigital", "ContaPro",
    "ContaMax", "ContaVip", "ContaSmart", "ContaPlus", "ContaFlex",
    "ContaGlobal", "ContaPremium", "ContaElite"
  ],
  [
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
  ],
  1
);

const tecnologiaCompanies = generateCompanies(
  "Tecnologia",
  [
    "TechSolutions", "DataTech", "CloudMaster", "WebDev Pro", "AppCreators",
    "TechInova", "CodeMaster", "TechFuture", "DigitalPro", "TechExpert",
    "TechGlobal", "TechPremium", "TechElite"
  ],
  [
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  ],
  20
);

const alimentacaoCompanies = generateCompanies(
  "Alimentação",
  [
    "FoodExpress", "GourmetKitchen", "HealthyBites", "FreshMeal", "TasteMakers",
    "FoodArt", "ChefPrime", "GourmetPro", "FoodMaster", "CulinaryArt",
    "FoodGlobal", "FoodPremium", "FoodElite"
  ],
  [
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5",
    "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94"
  ],
  40
);

const saudeCompanies = generateCompanies(
  "Saúde",
  [
    "HealthCare Plus", "MedCenter", "VitaCare", "WellnessHub", "LifeClinic",
    "MedPro", "HealthLife", "MedExpert", "VitaPro", "HealthMaster",
    "HealthGlobal", "HealthPremium", "HealthElite"
  ],
  [
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842"
  ],
  60
);

const belezaCompanies = generateCompanies(
  "Beleza",
  [
    "BeautySpace", "GlamourStyle", "EleganceSpa", "BeautyZone", "StyleStudio",
    "BeautyPro", "GlamourPro", "BeautyMaster", "StyleExpert", "BeautyArt",
    "BeautyGlobal", "BeautyPremium", "BeautyElite"
  ],
  [
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  ],
  80
);

// Combine all companies
export const companies: Company[] = [
  ...contabilidadeCompanies,
  ...tecnologiaCompanies,
  ...alimentacaoCompanies,
  ...saudeCompanies,
  ...belezaCompanies
];

export const categories = [
  "Contabilidade",
  "Tecnologia",
  "Alimentação",
  "Saúde",
  "Beleza"
];
