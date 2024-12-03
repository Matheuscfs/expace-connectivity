import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              X<span className="text-secondary">place</span>
            </h3>
            <h4 className="text-lg font-semibold mb-4">Sobre a Xplace</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Quem somos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Fale conosco</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Profissionais e Empresas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Descubra</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Cadastre seu serviço ou empresa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Xplace Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Orçamentos rápidos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog Xplace Empresas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <Twitter className="w-5 h-5" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Outros</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Ajuda e Suporte</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Xplace. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;