
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Aqui você pode implementar a lógica de inscrição na newsletter
    toast.success("Inscrição realizada com sucesso!");
    form.reset();
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/search-companies" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-400 hover:text-white transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, url: "https://facebook.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Youtube, url: "https://youtube.com" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Receba nossas novidades!
            </p>
            <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Button type="submit">Assinar</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="mailto:contato@marketplace.com" className="hover:text-white transition-colors">
                  E-mail: contato@marketplace.com
                </a>
              </p>
              <p>
                <a href="tel:+551112345678" className="hover:text-white transition-colors">
                  Telefone: (11) 1234-5678
                </a>
              </p>
              <p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Av. Paulista, 1000
                  <br />
                  São Paulo - SP
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Marketplace de Marketing. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
