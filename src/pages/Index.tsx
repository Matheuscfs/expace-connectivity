
import { useState, useEffect } from 'react';
import { Star, Check, ArrowRight, Phone, Mail, Building, Search, Heart, Clock, Shield, Trophy, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'mensal' | 'anual'>('mensal');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '10k+', label: 'Empresas Cadastradas' },
    { number: '50k+', label: 'Serviços Realizados' },
    { number: '98%', label: 'Clientes Satisfeitos' },
    { number: '4.8', label: 'Avaliação Média' }
  ];

  const plans = {
    mensal: {
      starter: { price: 'R$ 99', period: '/mês' },
      professional: { price: 'R$ 199', period: '/mês' },
      enterprise: { price: 'R$ 399', period: '/mês' }
    },
    anual: {
      starter: { price: 'R$ 79', period: '/mês' },
      professional: { price: 'R$ 159', period: '/mês' },
      enterprise: { price: 'R$ 319', period: '/mês' }
    }
  };

  const testimonials = [
    {
      name: "João Silva",
      company: "Tech Solutions",
      image: "https://cdn.coverr.co/videos/coverr-typing-on-computer-1584/preview",
      rating: 5,
      text: "Encontramos os melhores fornecedores para nossa empresa. O processo foi simples e rápido."
    },
    {
      name: "Maria Santos",
      company: "Design Studio",
      image: "https://cdn.coverr.co/videos/coverr-typing-on-computer-1584/preview",
      rating: 5,
      text: "A plataforma revolucionou nossa forma de contratar serviços. Altamente recomendado!"
    },
    {
      name: "Pedro Costa",
      company: "Startup Inc",
      image: "https://cdn.coverr.co/videos/coverr-typing-on-computer-1584/preview",
      rating: 5,
      text: "Economia de tempo e dinheiro. Os fornecedores são muito profissionais."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          background: `linear-gradient(135deg, #6e8efb, #a777e3)`,
          transform: `translateY(${scrollPosition * 0.3}px)`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Encontre os Melhores Serviços para sua Empresa
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in delay-200">
            Conectamos você com profissionais qualificados e empresas confiáveis em um só lugar
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
            <Button 
              size="lg"
              className="bg-white text-[#6e8efb] hover:bg-white/90 px-8 py-6 text-lg font-semibold"
              onClick={() => navigate('/company/register')}
            >
              Cadastrar Empresa
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              onClick={() => navigate('/search-companies')}
            >
              Buscar Serviços
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in delay-400">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section 
        className="py-24 bg-white"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600">Veja como é fácil encontrar o serviço ideal para sua empresa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Busque Serviços", description: "Use filtros avançados para encontrar exatamente o que precisa" },
              { icon: Building, title: "Compare Empresas", description: "Analise avaliações, preços e portfólio das empresas" },
              { icon: Check, title: "Contrate com Segurança", description: "Pagamento seguro e garantia de satisfação em todos os serviços" }
            ].map((step, index) => (
              <div key={index} className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon size={32} className="text-[#6e8efb]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section 
        className="py-24 bg-gray-50"
        style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planos para Sua Empresa</h2>
            <p className="text-xl text-gray-600">Escolha o plano ideal para expandir seus negócios</p>
            
            <div className="inline-flex bg-gray-100 rounded-lg p-1 mt-8">
              <button 
                className={`px-6 py-2 rounded-md transition-all ${
                  selectedPlan === 'mensal' ? 'bg-white shadow-md' : ''
                }`}
                onClick={() => setSelectedPlan('mensal')}
              >
                Mensal
              </button>
              <button 
                className={`px-6 py-2 rounded-md transition-all ${
                  selectedPlan === 'anual' ? 'bg-white shadow-md' : ''
                }`}
                onClick={() => setSelectedPlan('anual')}
              >
                Anual
                <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "starter",
                displayName: "Starter",
                description: "Perfeito para pequenas empresas",
                features: [
                  "Até 10 serviços publicados",
                  "5 cotações por mês",
                  "Perfil básico da empresa",
                  "Suporte por email"
                ]
              },
              {
                name: "professional",
                displayName: "Professional",
                description: "Para empresas em crescimento",
                features: [
                  "Até 50 serviços publicados",
                  "20 cotações por mês",
                  "Perfil destacado",
                  "Suporte prioritário",
                  "Relatórios básicos"
                ]
              },
              {
                name: "enterprise",
                displayName: "Enterprise",
                description: "Para grandes operações",
                features: [
                  "Serviços ilimitados",
                  "Cotações ilimitadas",
                  "Perfil premium",
                  "Suporte 24/7",
                  "API personalizada"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  index === 1 
                    ? 'transform scale-105 shadow-xl border-2 border-[#6e8efb]' 
                    : 'shadow-lg'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.displayName}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    {plans[selectedPlan][plan.name].price}
                  </span>
                  <span className="text-gray-500">
                    {plans[selectedPlan][plan.name].period}
                  </span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-6 text-lg font-semibold ${
                    index === 1 
                      ? 'bg-[#6e8efb] hover:bg-[#5d7dea] text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Começar Agora
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-24 bg-white"
        style={{ transform: `translateY(-${scrollPosition * 0.3}px)` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-xl text-gray-600">Milhares de empresas já confiam em nossa plataforma</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        className="py-24 bg-gray-50"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Somos uma plataforma inovadora que conecta empresas a profissionais qualificados. 
            Nosso objetivo é simplificar o processo de contratação de serviços, oferecendo 
            segurança, transparência e eficiência.
          </p>
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.coverr.co/videos/coverr-typing-on-computer-1584/preview"
                alt="Platform Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 bg-gradient-to-r from-[#6e8efb] to-[#a777e3] text-white"
        style={{ transform: `translateY(-${scrollPosition * 0.1}px)` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para Crescer?</h2>
          <p className="text-xl mb-8">
            Cadastre sua empresa agora e comece a encontrar os melhores serviços!
          </p>
          <Button 
            size="lg"
            className="bg-white text-[#6e8efb] hover:bg-white/90 px-8 py-6 text-lg font-semibold"
            onClick={() => navigate('/company/register')}
          >
            Cadastrar Empresa
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
