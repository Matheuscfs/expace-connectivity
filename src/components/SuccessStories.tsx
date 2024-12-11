import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const stories = [
  {
    name: "Maria Silva",
    role: "CEO, Transportadora Express",
    content: "Desde que nos juntamos ao Expace, aumentamos nossa eficiência em 40% e reduzimos custos operacionais.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "João Santos",
    role: "Diretor, Indústria Inovadora",
    content: "A plataforma revolucionou nossa logística. Agora temos acesso a transportadoras confiáveis em todo o país.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Ana Costa",
    role: "Proprietária, Revenda Sustentável",
    content: "O Expace nos ajudou a encontrar fornecedores comprometidos com práticas sustentáveis.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-gray-600">
            Conheça quem já está transformando seus negócios através do Expace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={story.image} alt={story.name} />
                    <AvatarFallback>{story.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{story.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;