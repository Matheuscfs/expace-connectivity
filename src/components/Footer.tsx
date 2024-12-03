import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-white bg-clip-text text-transparent">
                Expace
              </span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Fale conosco
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Profissionais e Empresas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Descubra</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Cadastre seu serviço ou empresa
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Expace Shop
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Orçamentos rápidos
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Blog Expace Empresas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-primary flex items-center gap-2"
                >
                  <Facebook size={20} />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-primary flex items-center gap-2"
                >
                  <Twitter size={20} />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-primary flex items-center gap-2"
                >
                  <Instagram size={20} />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-primary flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Outros</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary">
                  Ajuda e Suporte
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;