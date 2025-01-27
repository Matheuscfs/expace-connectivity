import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-white bg-clip-text text-transparent">
            The Office
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/services" className="text-gray-600 hover:text-primary">Serviços</Link>
          <Link to="/professionals" className="text-gray-600 hover:text-primary">Profissionais</Link>
          <Link to="/about" className="text-gray-600 hover:text-primary">Sobre</Link>
          <Link to="/contact" className="text-gray-600 hover:text-primary">Contato</Link>
        </nav>
      </div>
    </header>
  );
}