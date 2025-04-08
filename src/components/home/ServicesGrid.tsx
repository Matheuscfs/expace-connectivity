
export const ServicesGrid = () => {
  const services = [
    { name: 'PWN', color: 'bg-yellow-200' },
    { name: 'KPG', color: 'bg-green-200' },
    // Add more services
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Mostre seus serviços para o mundo, sem barreiras!
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`p-4 ${service.color} rounded-lg flex items-center justify-center`}
          >
            {service.name}
          </div>
        ))}
      </div>
    </section>
  );
};
