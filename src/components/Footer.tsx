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
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-600 hover:text-primary">
                  Empresas
                </Link>
              </li>
              <li>
                <Link to="/professionals" className="text-gray-600 hover:text-primary">
                  Profissionais
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-600 hover:text-primary">
                  Planos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Área do Usuário</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-600 hover:text-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-primary">
                  Cadastro de Usuário
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-600 hover:text-primary">
                  Meu Perfil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Área da Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/company-login" className="text-gray-600 hover:text-primary">
                  Login Empresarial
                </Link>
              </li>
              <li>
                <Link to="/company-register" className="text-gray-600 hover:text-primary">
                  Cadastro Empresarial
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;