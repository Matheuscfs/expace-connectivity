
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface MobileMenuProps {
  menuItems: Array<{
    path: string;
    label: string;
  }>;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const MobileMenu = ({ menuItems, searchQuery, onSearchChange }: MobileMenuProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        
        {/* Mobile Search */}
        <div className="mt-6">
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar..."
              className="w-full pr-10"
            />
            <button type="submit" className="absolute right-3 top-2.5">
              <Search className="text-gray-400 h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Additional Links */}
        <div className="mt-6 border-t pt-6">
          <h3 className="text-sm font-medium text-muted-foreground px-4 mb-2">
            Links Rápidos
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/help"
                className="flex items-center px-4 py-3 text-sm text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                Central de Ajuda
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center px-4 py-3 text-sm text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
