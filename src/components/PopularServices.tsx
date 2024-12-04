import { Calculator, Code, Utensils, Heart, Scissors, Briefcase, Palette, LineChart, Laptop, Book, GraduationCap, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { id: 1, name: "Tecnologia", icon: Laptop, description: "Desenvolvimento e suporte" },
  { id: 2, name: "Design", icon: Palette, description: "Criação visual profissional" },
  { id: 3, name: "Consultoria", icon: LineChart, description: "Assessoria empresarial" },
  { id: 4, name: "Educação", icon: GraduationCap, description: "Ensino e capacitação" },
  { id: 5, name: "Contabilidade", icon: Calculator, description: "Gestão financeira" },
  { id: 6, name: "Marketing", icon: LineChart, description: "Estratégias digitais" },
  { id: 7, name: "Saúde", icon: Heart, description: "Cuidados especializados" },
  { id: 8, name: "Outros", icon: MoreHorizontal, description: "Diversos serviços" },
];

const PopularServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Categorias Populares
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/companies?category=${service.name}`}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 text-center">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;