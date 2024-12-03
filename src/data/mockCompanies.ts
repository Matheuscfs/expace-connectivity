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

// Generate 50 test companies
export const companies: Company[] = Array.from({ length: 50 }, (_, index) => {
  const categories = [
    "Contabilidade",
    "Tecnologia",
    "Alimentação",
    "Saúde",
    "Beleza"
  ];
  const category = categories[index % categories.length];
  
  // Generate company name based on category
  let name = "";
  switch (category) {
    case "Contabilidade":
      name = ["ContaFácil", "ContaExpress", "ContaMaster", "ContaDigital", "ContaPro"][index % 5];
      break;
    case "Tecnologia":
      name = ["TechSolutions", "DataTech", "CloudMaster", "WebDev Pro", "AppCreators"][index % 5];
      break;
    case "Alimentação":
      name = ["FoodExpress", "GourmetKitchen", "HealthyBites", "FreshMeal", "TasteMakers"][index % 5];
      break;
    case "Saúde":
      name = ["HealthCare Plus", "MedCenter", "VitaCare", "WellnessHub", "LifeClinic"][index % 5];
      break;
    case "Beleza":
      name = ["BeautySpace", "GlamourStyle", "EleganceSpa", "BeautyZone", "StyleStudio"][index % 5];
      break;
  }

  // Generate appropriate logo URL based on category
  const logoUrls = {
    "Contabilidade": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
    ],
    "Tecnologia": [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    ],
    "Alimentação": [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5",
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94"
    ],
    "Saúde": [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842"
    ],
    "Beleza": [
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    ]
  };

  const categoryLogos = logoUrls[category];
  const logo = categoryLogos[index % categoryLogos.length];

  return {
    id: index + 1,
    name: `${name} ${Math.floor(index / 5) + 1}`,
    logo,
    description: `Empresa especializada em ${category.toLowerCase()} com foco em qualidade e satisfação do cliente.`,
    category,
    rating: Number((3 + Math.random() * 2).toFixed(1)),
    reviews: Math.floor(50 + Math.random() * 200),
    featured: index % 5 === 0,
    location: getRandomLocation()
  };
});

export const categories = [
  "Contabilidade",
  "Tecnologia",
  "Alimentação",
  "Saúde",
  "Beleza"
];