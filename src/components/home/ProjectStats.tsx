
export const ProjectStats = () => {
  const stats = [
    { number: '40+', label: 'Projetos' },
    { number: '540+', label: 'Clientes' },
    { number: '300+', label: 'Serviços' },
    { number: '25+', label: 'Países' },
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="flex justify-center space-x-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold">{stat.number}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
