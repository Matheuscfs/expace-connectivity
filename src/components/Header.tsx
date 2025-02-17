
import { MapPin, Search, User, LogOut, Settings, List, Bell, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: "/companies", label: "Empresas" },
    { path: "/professionals", label: "Profissionais" },
    { path: "/search-companies", label: "Procurar Empresas" },
  ];

  const profileMenuItems = [
    { icon: User, label: "Perfil", path: "/profile" },
    { icon: Settings, label: "Configurações", path: "/settings" },
    { icon: List, label: "Pedidos", path: "/orders" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 justify-between gap-4">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu menuItems={menuItems} />
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-blue-700 to-blue-200 bg-clip-text text-transparent">
              Contratto
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 hidden sm:block">
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Encontre serviços, empresas ou produtos..."
                className="w-full pr-10"
              />
              <button type="submit" className="absolute right-3 top-2.5">
                <Search className="text-gray-400 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <div className="space-y-4">
                  <h3 className="font-medium">Notificações</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-2 hover:bg-accent rounded-lg transition-colors">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Nova mensagem recebida</p>
                        <p className="text-xs text-muted-foreground">Há 5 minutos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-2 hover:bg-accent rounded-lg transition-colors">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Settings className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Atualização do sistema</p>
                        <p className="text-xs text-muted-foreground">Há 1 hora</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/notifications">Ver todas as notificações</Link>
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  {user ? (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-2">
                {user ? (
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 p-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm font-medium">{user.name}</div>
                    </div>
                    <div className="border-t my-1" />
                    {profileMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-2 p-2 text-sm hover:bg-accent rounded-md transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t my-1" />
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 p-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Sair
                    </button>
                  </div>
                ) : (
                  <div className="grid gap-2">
                    <Link
                      to="/login"
                      className="flex w-full items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
                    >
                      Entrar como Cliente
                    </Link>
                    <Link
                      to="/company-login"
                      className="flex w-full items-center gap-2 rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                    >
                      Entrar como Empresa
                    </Link>
                    <div className="relative my-2">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          ou
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/company-register"
                      className="flex w-full items-center gap-2 rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                    >
                      Cadastrar empresa
                    </Link>
                  </div>
                )}
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
