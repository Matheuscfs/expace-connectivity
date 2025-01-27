import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">The Office</h3>
            <p className="text-gray-600">
              Conectando profissionais e empresas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/professionals" className="text-gray-600 hover:text-primary">
                  Profissionais
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">contato@theoffice.com</li>
              <li className="text-gray-600">(11) 9999-9999</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <p className="text-gray-600">
              Av. Paulista, 1000<br />
              São Paulo - SP<br />
              CEP: 01310-100
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} The Office. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;