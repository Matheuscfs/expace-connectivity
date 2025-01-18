import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, CheckCircle2, Globe2, Target, TrendingUp, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Plans = () => {
  const plans = [
    {
      name: "Plano Autônomo",
      description: "Perfeito para profissionais independentes.",
      price: "R$ 99,00/mês",
      features: [
        "Perfil profissional personalizado",
        "Listagem nos resultados de busca",
        "Chat com clientes",
        "Suporte por email"
      ]
    },
    {
      name: "Plano Básico",
      description: "Ideal para quem está começando.",
      price: "R$ 149,00/mês",
      features: [
        "Todas as features do plano Autônomo",
        "Destaque nos resultados de busca",
        "Relatórios básicos",
        "Suporte prioritário"
      ]
    },
    {
      name: "Plano Profissional",
      description: "Para quem quer aumentar suas vendas.",
      price: "R$ 249,00/mês",
      features: [
        "Todas as features do plano Básico",
        "Analytics avançado",
        "Integração com APIs",
        "Suporte 24/7"
      ]
    },
    {
      name: "Plano Avançado",
      description: "O melhor para grandes vendedores.",
      price: "R$ 449,00/mês",
      features: [
        "Todas as features do plano Profissional",
        "Consultoria personalizada",
        "Ferramentas de marketing",
        "Acesso antecipado a novidades"
      ]
    }
  ];

  const benefits = [
    {
      icon: Globe2,
      title: "Alcance Global",
      description: "Conecte-se com clientes em qualquer lugar. Sua empresa ganha visibilidade na vitrine digital mais inovadora do mercado."
    },
    {
      icon: Target,
      title: "Clientes Ideais, Sempre",
      description: "A inteligência do Expace conecta seus serviços às pessoas certas, no momento certo."
    },
    {
      icon: TrendingUp,
      title: "Impulsione Seus Resultados",
      description: "Nossa plataforma foi projetada para destacar o que você tem de melhor. Mais visibilidade, mais clientes, mais crescimento."
    },
    {
      icon: Briefcase,
      title: "Cresça sem complicações",
      description: "Fácil de usar, com suporte dedicado e ferramentas intuitivas para gerenciar sua presença na plataforma."
    }
  ];

  const testimonials = [
    {
      quote: "Nunca imaginei que poderia alcançar tantos clientes em tão pouco tempo. Expace Connectivity foi a melhor decisão para meu negócio!",
      author: "Mariana Silva",
      role: "Designer Gráfica"
    },
    {
      quote: "Uma verdadeira transformação. O primeiro mês grátis foi decisivo para que eu conhecesse o potencial da plataforma. Hoje, sou cliente fiel!",
      author: "João Mendes",
      role: "Consultor de TI"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Escolha o plano ideal para vender na Expace</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Onde seu negócio ganha o mundo e seus serviços encontram os clientes certos.
          </p>
        </section>

        {/* Promotional Section */}
        <section className="bg-accent rounded-lg p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Mostre seus serviços para o mundo, sem barreiras!</h2>
          <p className="text-lg mb-4">
            No Expace Connectivity, seu negócio não tem limites! Cadastre sua empresa e faça parte da nossa Cidade Virtual,
            um espaço inovador onde oportunidades encontram soluções.
          </p>
          <p className="text-xl font-semibold text-primary">
            🔑 O primeiro mês é totalmente GRÁTIS!
          </p>
        </section>

        {/* Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Por que fazer parte da Cidade Virtual Expace?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-accent">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">🌟 Quem já faz parte da Cidade Virtual Expace?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-primary/5">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="font-semibold">
                    {testimonial.author}
                    <span className="block text-sm text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Steps Section */}
        <section className="bg-accent rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Entre Agora Mesmo e Transforme o Futuro do Seu Negócio!</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Cadastre-se gratuitamente!",
                description: "Crie sua conta em menos de 5 minutos e tenha acesso a uma rede de clientes."
              },
              {
                step: 2,
                title: "Personalize sua vitrine digital",
                description: "Adicione fotos, vídeos e descrições para destacar o que você faz de melhor."
              },
              {
                step: 3,
                title: "Conquiste novos clientes",
                description: "Com nossa tecnologia, sua empresa estará sempre na frente."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/company-register">CADASTRAR MINHA EMPRESA</Link>
            </Button>
          </div>
        </section>

        {/* Plans Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary mt-2">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-4 mb-2">
            <span>📞 (11) 1234-5678</span>
            <span>📧 suporte@expaceconnectivity.com.br</span>
            <span>📍 Av. Paulista, 1000, São Paulo</span>
          </p>
          <p>&copy; 2025 Expace. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default Plans;