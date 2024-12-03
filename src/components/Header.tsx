import { Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-white bg-clip-text text-transparent">
                Xplace
              </span>
            </Link>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link to="/companies" className="text-gray-700 hover:text-primary">
                Empresas
              </Link>
              <Link to="#" className="text-gray-700 hover:text-primary">
                Sobre
              </Link>
              <Link to="#" className="text-gray-700 hover:text-primary">
                Ajuda
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Encontre serviços, empresas ou produtos..."
                className="w-96 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Link
                      to="/login"
                      className="flex w-full items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
                    >
                      Entrar
                    </Link>
                    <Link
                      to="/register"
                      className="flex w-full items-center gap-2 rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                    >
                      Criar conta
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;