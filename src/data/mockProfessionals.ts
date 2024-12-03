export type Professional = {
  id: number;
  name: string;
  avatar: string;
  profession: string;
  description: string;
  rating: number;
  reviews: number;
  location: string;
  hourlyRate: number;
};

const professions = [
  "Contador Autônomo",
  "Desenvolvedor Freelancer",
  "Chef Particular",
  "Personal Trainer",
  "Cabeleireiro(a)",
  "Maquiador(a)",
  "Consultor Financeiro",
  "Designer Gráfico",
  "Nutricionista",
  "Fisioterapeuta"
];

const generateProfessionals = (location: string, count: number, startId: number): Professional[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: startId + index,
    name: `Profissional ${startId + index}`,
    avatar: `https://i.pravatar.cc/150?img=${startId + index}`,
    profession: professions[Math.floor(Math.random() * professions.length)],
    description: "Profissional experiente com foco em qualidade e satisfação do cliente.",
    rating: Number((3 + Math.random() * 2).toFixed(1)),
    reviews: Math.floor(10 + Math.random() * 50),
    location,
    hourlyRate: Math.floor(50 + Math.random() * 200)
  }));
};

export const professionals: Professional[] = [
  ...generateProfessionals("São Paulo-SP", 8, 1),
  ...generateProfessionals("Rio de Janeiro-RJ", 6, 9),
  ...generateProfessionals("Belo Horizonte-MG", 4, 15),
  ...generateProfessionals("Curitiba-PR", 4, 19),
  ...generateProfessionals("Porto Alegre-RS", 4, 23),
  ...generateProfessionals("Salvador-BA", 4, 27)
];