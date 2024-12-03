import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <section className="bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-gray-600 mb-8">
            Receba as melhores ofertas diretamente no seu e-mail!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1"
            />
            <Button type="submit">Inscrever-se</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;