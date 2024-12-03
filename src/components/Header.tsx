import { MapPin, Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: "/services", label: "Serviços" },
    { path: "/professionals", label: "Profissionais" },
    { path: "/companies", label: "Empresas" },
    { path: "/technology", label: "Tecnologia" },
    { path: "/beauty", label: "Beleza" },
    { path: "/consulting", label: "Consultoria" },
    { path: "/construction", label: "Construção" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-2">
        <div className="flex items-center h-16 justify-between">
          {/* Left section: Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="pl-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-blue-700 to-blue-200 bg-clip-text text-transparent">
                Expace
              </span>
            </Link>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary relative py-4 ${
                    isActive(item.path)
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center section: Search */}
          <div className="hidden md:flex relative max-w-md w-full mx-4">
            <input
              type="text"
              placeholder="Encontre serviços, empresas ou produtos..."
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>

          {/* Right section: Location, Profile, Cart */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm">São Paulo</span>
            </Button>
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