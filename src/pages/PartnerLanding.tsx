import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Building2, Target, Headphones, TrendingUp, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  storeName: z.string().min(2, "Nome da loja deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter no mínimo 10 dígitos"),
});

export default function PartnerLanding() {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Cadastro recebido!",
      description: "Em breve entraremos em contato.",
    });
    navigate("/company-register");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">Expace</div>
          <Button asChild>
            <a href="#cadastro">Seja um Parceiro</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Amplie seu alcance com a Expace
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Cadastre sua loja agora e comece a vender para milhares de clientes!
          </p>
          <Button size="lg" asChild className="animate-fade-in">
            <a href="#cadastro">Cadastre-se Grátis</a>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que ser parceiro da Expace?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-accent hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mais Visibilidade</h3>
              <p className="text-gray-600">
                Seu negócio na vitrine para milhares de clientes diariamente.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-accent hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Marketing Inteligente</h3>
              <p className="text-gray-600">
                Ferramentas e promoções para impulsionar suas vendas.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-accent hover:shadow-lg transition-shadow">
              <Headphones className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suporte Especializado</h3>
              <p className="text-gray-600">
                Equipe pronta para ajudar no que você precisar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Planos e Taxas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Plano Básico",
                commission: "10%",
                price: "R$ 99,00",
                icon: Building2,
              },
              {
                title: "Plano Avançado",
                commission: "8%",
                price: "R$ 199,00",
                icon: TrendingUp,
              },
              {
                title: "Plano Premium",
                commission: "5%",
                price: "R$ 299,00",
                icon: Zap,
              },
            ].map((plan) => (
              <div key={plan.title} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <plan.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Comissão: {plan.commission}</p>
                  <p>Mensalidade: {plan.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Depoimentos de Parceiros
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-accent rounded-lg">
              <p className="text-gray-700 mb-4">
                "A Expace me ajudou a aumentar minhas vendas em 50% em apenas 3 meses!"
              </p>
              <span className="text-gray-600">- João, Loja X</span>
            </div>
            <div className="p-6 bg-accent rounded-lg">
              <p className="text-gray-700 mb-4">
                "O suporte da equipe é incrível, sempre prontos para ajudar."
              </p>
              <span className="text-gray-600">- Maria, Restaurante Y</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="cadastro" className="py-20 bg-primary">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Cadastre-se Agora</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="storeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nome da Loja" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="E-mail" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="tel" placeholder="Telefone" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Quero me Cadastrar
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Expace. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}