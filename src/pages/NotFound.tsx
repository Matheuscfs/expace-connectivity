
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold">Página não encontrada</h2>
        <p className="text-muted-foreground">
          A página que você está procurando não existe ou foi removida.
        </p>
        <div className="space-x-4">
          <Button onClick={() => navigate(-1)}>Voltar</Button>
          <Button variant="outline" onClick={() => navigate("/")}>
            Ir para a página inicial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
