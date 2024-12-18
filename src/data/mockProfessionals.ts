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
  specialties: string[];
  languages: string[];
  experience: number;
  education: string;
  availability: string;
  portfolio?: {
    title: string;
    description: string;
    image: string;
  }[];
  certifications?: string[];
};

const professions = [
  {
    title: "Contador Autônomo",
    specialties: ["Contabilidade Fiscal", "Imposto de Renda", "Consultoria Financeira"],
    description: "Profissional especializado em contabilidade com foco em pequenas e médias empresas."
  },
  {
    title: "Desenvolvedor Freelancer",
    specialties: ["Frontend", "Backend", "Mobile"],
    description: "Desenvolvedor full-stack com experiência em projetos web e mobile."
  },
  {
    title: "Chef Particular",
    specialties: ["Culinária Internacional", "Confeitaria", "Eventos"],
    description: "Chef especializado em gastronomia internacional e eventos particulares."
  },
  {
    title: "Personal Trainer",
    specialties: ["Musculação", "Funcional", "Crossfit"],
    description: "Personal trainer certificado com experiência em treinamento personalizado."
  },
  {
    title: "Cabeleireiro(a)",
    specialties: ["Cortes", "Coloração", "Tratamentos"],
    description: "Profissional especializado em técnicas modernas de corte e coloração."
  },
  {
    title: "Maquiador(a)",
    specialties: ["Maquiagem Social", "Maquiagem Artística", "Noivas"],
    description: "Maquiador(a) profissional com experiência em eventos sociais e editoriais."
  },
  {
    title: "Consultor Financeiro",
    specialties: ["Investimentos", "Planejamento Financeiro", "Aposentadoria"],
    description: "Consultor financeiro certificado com foco em planejamento patrimonial."
  },
  {
    title: "Designer Gráfico",
    specialties: ["Identidade Visual", "Social Media", "UI/UX"],
    description: "Designer criativo com experiência em branding e design digital."
  },
  {
    title: "Nutricionista",
    specialties: ["Emagrecimento", "Nutrição Esportiva", "Reeducação Alimentar"],
    description: "Nutricionista especializado em alimentação saudável e performance."
  },
  {
    title: "Fisioterapeuta",
    specialties: ["Ortopedia", "Pilates", "Reabilitação"],
    description: "Fisioterapeuta com experiência em reabilitação e tratamentos específicos."
  }
];

const languages = ["Português", "Inglês", "Espanhol", "Francês", "Alemão"];
const availabilities = [
  "Segunda a Sexta, 8h às 18h",
  "Horário Flexível",
  "Fins de Semana",
  "Período Integral",
  "Meio Período"
];

const generatePortfolio = (profession: string) => {
  return [
    {
      title: "Projeto 1",
      description: `${profession} - Caso de sucesso com cliente corporativo`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "Projeto 2",
      description: `${profession} - Transformação completa`,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Projeto 3",
      description: `${profession} - Inovação e resultados`,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    }
  ];
};

const generateProfessionals = (location: string, count: number, startId: number): Professional[] => {
  return Array.from({ length: count }, (_, index) => {
    const professionInfo = professions[Math.floor(Math.random() * professions.length)];
    const yearsOfExperience = Math.floor(3 + Math.random() * 15);
    const selectedLanguages = languages
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(1 + Math.random() * 3));

    return {
      id: startId + index,
      name: `${["Ana", "João", "Maria", "Pedro", "Lucas", "Julia"][Math.floor(Math.random() * 6)]} ${
        ["Silva", "Santos", "Oliveira", "Souza", "Ferreira", "Costa"][Math.floor(Math.random() * 6)]
      }`,
      avatar: `https://i.pravatar.cc/150?img=${startId + index}`,
      profession: professionInfo.title,
      description: professionInfo.description,
      rating: Number((3 + Math.random() * 2).toFixed(1)),
      reviews: Math.floor(10 + Math.random() * 50),
      location,
      hourlyRate: Math.floor(50 + Math.random() * 200),
      specialties: professionInfo.specialties,
      languages: selectedLanguages,
      experience: yearsOfExperience,
      education: "Graduação em " + professionInfo.title.split(" ")[0],
      availability: availabilities[Math.floor(Math.random() * availabilities.length)],
      portfolio: generatePortfolio(professionInfo.title),
      certifications: [
        `Certificação ${professionInfo.title}`,
        "Especialização Profissional",
        "Curso Avançado"
      ]
    };
  });
};

export const professionals: Professional[] = [
  ...generateProfessionals("São Paulo-SP", 8, 1),
  ...generateProfessionals("Rio de Janeiro-RJ", 6, 9),
  ...generateProfessionals("Belo Horizonte-MG", 4, 15),
  ...generateProfessionals("Curitiba-PR", 4, 19),
  ...generateProfessionals("Porto Alegre-RS", 4, 23),
  ...generateProfessionals("Salvador-BA", 4, 27)
];