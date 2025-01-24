export type Company = {
  id: number;
  name: string;
  logo: string;
  banner?: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  featured: boolean;
  location: string;
  workingHours?: string;
  contact?: {
    phone: string;
    email: string;
    website?: string;
  };
  socialMedia?: {
    website?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  address?: string;
  highlights?: string[];
  certifications?: Array<{
    name: string;
    icon: string;
  }>;
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

const generateCompanyDetails = () => ({
  workingHours: "Segunda a Sexta, 9h às 18h",
  contact: {
    phone: `(${Math.floor(Math.random() * 90) + 10}) ${Math.floor(Math.random() * 90000) + 10000}-${Math.floor(Math.random() * 9000) + 1000}`,
    email: "contato@empresa.com.br",
    website: "www.empresa.com.br"
  },
  socialMedia: {
    website: "https://www.empresa.com.br",
    instagram: "https://instagram.com/empresa",
    facebook: "https://facebook.com/empresa",
    linkedin: "https://linkedin.com/company/empresa"
  },
  address: "Av. Principal, 1000 - Centro",
  highlights: [
    "Atendimento personalizado",
    "Equipe especializada",
    "Suporte 24/7",
    "Garantia de qualidade"
  ],
  certifications: [
    { name: "ISO 9001", icon: "award" },
    { name: "Empresa Verde", icon: "leaf" }
  ]
});

const generateCompanies = (category: string, names: string[], logos: string[], banners: string[], startId: number): Company[] => {
  return names.map((name, index) => ({
    id: startId + index,
    name,
    logo: logos[index % logos.length],
    banner: banners[index % banners.length],
    description: `${name} é uma empresa líder em ${category.toLowerCase()}, oferecendo soluções inovadoras e atendimento personalizado para nossos clientes. Com anos de experiência no mercado, nos destacamos pela qualidade e compromisso com resultados.`,
    category,
    rating: Number((3 + Math.random() * 2).toFixed(1)),
    reviews: Math.floor(50 + Math.random() * 200),
    featured: index < 3,
    location: getRandomLocation(),
    ...generateCompanyDetails()
  }));
};

const cascavelCompanies = generateCompanies(
  "Tecnologia",
  [
    "TechCascavel Solutions",
    "CascavelTech Systems",
    "WebCascavel Pro",
    "DataCascavel Tech",
    "CascavelApp Creators",
    "InnovaCascavel Digital",
    "CodeCascavel Labs",
    "FutureCascavel Systems",
    "DigitalCascavel Services",
    "TechExpertCascavel",
    "GlobalCascavel Tech",
    "PremiumCascavel Labs",
    "EliteCascavel Digital",
    "CascavelSoft Solutions",
    "TechMasterCascavel",
    "CascavelCloud Pro",
    "WebDevCascavel",
    "AppCascavel Tech",
    "TechInnovaCascavel",
    "CodeMasterCascavel",
    "TechFutureCascavel",
    "DigitalProCascavel",
    "TechExpertCascavel",
    "TechGlobalCascavel",
    "TechPremiumCascavel",
    "TechEliteCascavel",
    "CascavelTech Pro",
    "DataTechCascavel",
    "CloudCascavel Master",
    "WebDevCascavel Solutions",
    "AppCreatorsCascavel",
    "TechInovaCascavel",
    "CodeMasterCascavel Labs",
    "TechFutureCascavel Systems",
    "DigitalProCascavel Services",
    "TechExpertCascavel Solutions",
    "TechGlobalCascavel Systems",
    "TechPremiumCascavel Labs",
    "TechEliteCascavel Digital",
    "CascavelTech Solutions",
    "DataTechCascavel Systems",
    "CloudCascavel Pro",
    "WebDevCascavel Tech",
    "AppCreatorsCascavel Tech",
    "TechInovaCascavel Digital",
    "CodeMasterCascavel Pro",
    "TechFutureCascavel Labs",
    "DigitalProCascavel Tech",
    "TechExpertCascavel Pro",
    "TechGlobalCascavel Digital"
  ],
  [
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  ],
  [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    "https://images.unsplash.com/photo-1518770660439-4636190af475"
  ],
  200
);

const contabilidadeCompanies = generateCompanies(
  "Contabilidade",
  [
    "ContaFácil Solutions",
    "ContaExpress Digital",
    "ContaMaster Pro",
    "ContaDigital Plus",
    "ContaPro Services",
    "ContaMax Enterprise",
    "ContaVip Business",
    "ContaSmart Tech",
    "ContaPlus Solutions",
    "ContaFlex Digital",
    "ContaGlobal Services",
    "ContaPremium Pro",
    "ContaElite Business"
  ],
  [
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
  ],
  [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    "https://images.unsplash.com/photo-1497366216548-37526070297c",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174"
  ],
  1
);

const tecnologiaCompanies = generateCompanies(
  "Tecnologia",
  [
    "TechSolutions Innovation",
    "DataTech Systems",
    "CloudMaster Pro",
    "WebDev Solutions",
    "AppCreators Tech",
    "TechInova Digital",
    "CodeMaster Labs",
    "TechFuture Systems",
    "DigitalPro Services",
    "TechExpert Solutions",
    "TechGlobal Systems",
    "TechPremium Labs",
    "TechElite Digital"
  ],
  [
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  ],
  [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    "https://images.unsplash.com/photo-1518770660439-4636190af475"
  ],
  20
);

const alimentacaoCompanies = generateCompanies(
  "Alimentação",
  [
    "FoodExpress Delivery",
    "GourmetKitchen Pro",
    "HealthyBites Fresh",
    "FreshMeal Solutions",
    "TasteMakers Gourmet",
    "FoodArt Cuisine",
    "ChefPrime Services",
    "GourmetPro Kitchen",
    "FoodMaster Express",
    "CulinaryArt Pro",
    "FoodGlobal Services",
    "FoodPremium Delivery",
    "FoodElite Gourmet"
  ],
  [
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5",
    "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94"
  ],
  [
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94"
  ],
  40
);

const saudeCompanies = generateCompanies(
  "Saúde",
  [
    "HealthCare Plus",
    "MedCenter Pro",
    "VitaCare Health",
    "WellnessHub Medical",
    "LifeClinic Services",
    "MedPro Health",
    "HealthLife Center",
    "MedExpert Clinic",
    "VitaPro Health",
    "HealthMaster Medical",
    "HealthGlobal Center",
    "HealthPremium Care",
    "HealthElite Clinic"
  ],
  [
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842"
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
    "BeautySpace Studio",
    "GlamourStyle Pro",
    "EleganceSpa Beauty",
    "BeautyZone Plus",
    "StyleStudio Pro",
    "BeautyPro Services",
    "GlamourPro Studio",
    "BeautyMaster Spa",
    "StyleExpert Plus",
    "BeautyArt Studio",
    "BeautyGlobal Spa",
    "BeautyPremium Pro",
    "BeautyElite Studio"
  ],
  [
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
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
  ...belezaCompanies,
  ...cascavelCompanies
];

export const categories = [
  "Contabilidade",
  "Tecnologia",
  "Alimentação",
  "Saúde",
  "Beleza"
];
