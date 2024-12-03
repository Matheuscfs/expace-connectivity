export type Company = {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  featured: boolean;
};

// Generate 50 test companies
export const companies: Company[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Company ${index + 1}`,
  logo: `https://images.unsplash.com/photo-${1486312338219 + index}`,
  description: `Description for Company ${index + 1}`,
  category: ["Tecnologia", "Alimentação", "Saúde", "Beleza", "Educação", "Serviços Domésticos"][
    index % 6
  ],
  rating: Number((3 + Math.random() * 2).toFixed(1)),
  reviews: Math.floor(50 + Math.random() * 200),
  featured: index % 5 === 0, // Every 5th company is featured
}));

export const categories = [
  "Tecnologia",
  "Alimentação",
  "Saúde",
  "Beleza",
  "Educação",
  "Serviços Domésticos",
];