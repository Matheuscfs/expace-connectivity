
import { useState, useEffect, useCallback } from 'react';
import {
  Star, Check, Search, Building
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
import styles from '@/styles/ParallaxHome.module.css';
import Header from "@/components/Header";

const Index = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('mensal');

  const handleScroll = useCallback(() => {
    setScrollPosition(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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

  const stats = [
    { number: '10k+', label: 'Empresas Cadastradas' },
    { number: '50k+', label: 'Serviços Realizados' },
    { number: '98%', label: 'Clientes Satisfeitos' },
    { number: '4.8', label: 'Avaliação Média' }
  ];

  const testimonials = [
    {
      name: "João Silva",
      company: "Tech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      rating: 5,
      text: "Encontramos os melhores fornecedores para nossa empresa. O processo foi simples e rápido."
    },
    {
      name: "Maria Santos",
      company: "Design Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 5,
      text: "A plataforma revolucionou nossa forma de contratar serviços. Altamente recomendado!"
    },
    {
      name: "Pedro Costa",
      company: "Startup Inc",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 5,
      text: "Economia de tempo e dinheiro. Os fornecedores são muito profissionais."
    }
  ];

  return (
    <div className={styles.parallaxHome}>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section
        className={styles.heroSection}
        style={{
          transform: `translateY(${scrollPosition * 0.3}px)`
        }}
      >
        <div className={styles.container}>
          <h1>Encontre os Melhores Serviços para sua Empresa</h1>
          <p>Conectamos você com profissionais qualificados e empresas confiáveis em um só lugar</p>
          <div className={styles.ctaButtons}>
            <button 
              className={styles.btnPrimary}
              onClick={() => navigate('/company/register')}
            >
              Cadastrar Empresa
            </button>
            <button 
              className={styles.btnSecondary}
              onClick={() => navigate('/search-companies')}
            >
              Buscar Serviços
            </button>
          </div>
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span>{stat.number}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona - Video Section */}
      <section
        className={styles.howItWorks}
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}
      >
        <div className={styles.container}>
          <h2>Como Funciona</h2>
          <p>Veja como é fácil encontrar o serviço ideal para sua empresa</p>
          <div className={styles.videoContainer}>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop"
              alt="Como funciona"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.steps}>
            {[
              { icon: Search, title: "Busque Serviços", description: "Use filtros avançados para encontrar exatamente o que precisa" },
              { icon: Building, title: "Compare Empresas", description: "Analise avaliações, preços e portfólio das empresas" },
              { icon: Check, title: "Contrate com Segurança", description: "Pagamento seguro e garantia de satisfação em todos os serviços" }
            ].map((step, index) => (
              <div key={index} className={styles.stepItem}>
                <step.icon size={40} />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section
        className={styles.pricingSection}
        style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
      >
        <div className={styles.container}>
          <h2>Planos para Sua Empresa</h2>
          <p>Escolha o plano ideal para expandir seus negócios</p>
          <div className={styles.planSelector}>
            <button
              className={`${styles.planBtn} ${selectedPlan === 'mensal' ? styles.active : ''}`}
              onClick={() => setSelectedPlan('mensal')}
            >
              Mensal
            </button>
            <button
              className={`${styles.planBtn} ${selectedPlan === 'anual' ? styles.active : ''}`}
              onClick={() => setSelectedPlan('anual')}
            >
              Anual -20%
            </button>
          </div>
          <div className={styles.plans}>
            {[
              {
                name: "Starter",
                description: "Perfeito para pequenas empresas",
                features: [
                  "Até 10 serviços publicados",
                  "5 cotações por mês",
                  "Perfil básico da empresa",
                  "Suporte por email"
                ]
              },
              {
                name: "Professional",
                description: "Para empresas em crescimento",
                features: [
                  "Até 50 serviços publicados",
                  "20 cotações por mês",
                  "Perfil destacado",
                  "Suporte prioritário",
                  "Relatórios básicos",
                  "Integração com CRM"
                ]
              },
              {
                name: "Enterprise",
                description: "Para grandes operações",
                features: [
                  "Serviços ilimitados",
                  "Cotações ilimitadas",
                  "Perfil premium",
                  "Suporte 24/7",
                  "Relatórios avançados",
                  "API personalizada",
                  "Gerente de conta dedicado"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={styles.planCard}>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className={styles.price}>
                  <span>{plans[selectedPlan][plan.name.toLowerCase()].price}</span>
                  <span>{plans[selectedPlan][plan.name.toLowerCase()].period}</span>
                </div>
                <ul>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <Check size={16} /> {feature}
                    </li>
                  ))}
                </ul>
                <button className={styles.btnPrimary}>Começar Agora</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section
        className={styles.testimonialsSection}
        style={{ transform: `translateY(-${scrollPosition * 0.3}px)` }}
      >
        <div className={styles.container}>
          <h2>O Que Dizem Nossos Clientes</h2>
          <p>Milhares de empresas já confiam em nossa plataforma</p>
          <div className={styles.testimonials}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <img src={testimonial.image} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.company}</p>
                <div className={styles.rating}>
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" />
                  ))}
                </div>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section
        className={styles.aboutSection}
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
      >
        <div className={styles.container}>
          <h2>Sobre Nós</h2>
          <p>Somos uma plataforma inovadora que conecta empresas a profissionais qualificados. Nosso objetivo é simplificar o processo de contratação de serviços, oferecendo segurança, transparência e eficiência.</p>
          <div className={styles.mockup}>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop"
              alt="Nossa Plataforma em Ação"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section
        className={styles.ctaSection}
        style={{ transform: `translateY(-${scrollPosition * 0.1}px)` }}
      >
        <div className={styles.container}>
          <h2>Pronto para Crescer?</h2>
          <p>Cadastre sua empresa agora e comece a encontrar os melhores serviços!</p>
          <button 
            className={styles.btnPrimary}
            onClick={() => navigate('/company/register')}
          >
            Cadastrar Empresa
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
