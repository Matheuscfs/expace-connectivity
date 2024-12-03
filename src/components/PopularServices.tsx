import { Briefcase, Scissors, Home, Code, Camera, Car } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { id: 1, name: "Tecnologia", icon: Code },
  { id: 2, name: "Beleza", icon: Scissors },
  { id: 3, name: "Reformas", icon: Home },
  { id: 4, name: "Negócios", icon: Briefcase },
  { id: 5, name: "Fotografia", icon: Camera },
  { id: 6, name: "Transporte", icon: Car },
];

const PopularServices = () => {
  return (
    <section className="py-16 mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Serviços Populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/companies?category=${service.name}`}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold">{service.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;