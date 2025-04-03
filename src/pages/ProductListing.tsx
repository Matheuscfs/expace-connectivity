
import { useState } from "react";
import { ProductList } from "@/components/product/ProductList";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { Footer } from "@/components/home/Footer";

// Mock data - replace with actual data fetching
const mockProducts = [
  {
    productId: "1",
    sellerId: "seller1",
    name: "Consultoria em Marketing Digital",
    description: "Serviço completo de marketing digital para sua empresa",
    price: 1499.99,
    category: "Marketing",
    images: ["/placeholder.svg"],
    status: "active" as const,
    rating: 4.5,
    stock: 999,
    specifications: {
      duration: "3 meses",
      includes: "Análise, Planejamento, Execução",
    },
    serviceType: "fixed" as const,
  },
  {
    productId: "2",
    sellerId: "seller2",
    name: "Desenvolvimento de Website",
    description: "Criação de website profissional e responsivo",
    price: 2999.99,
    category: "Desenvolvimento",
    images: ["/placeholder.svg"],
    status: "active" as const,
    rating: 4.8,
    stock: 999,
    specifications: {
      duration: "1 mês",
      includes: "Design, Desenvolvimento, SEO básico",
    },
    serviceType: "fixed" as const,
  },
  {
    productId: "3",
    sellerId: "seller3",
    name: "Suporte Técnico",
    description: "Suporte técnico especializado para problemas de TI",
    price: 99.99,
    category: "Suporte",
    images: ["/placeholder.svg"],
    status: "active" as const,
    rating: 4.2,
    stock: 999,
    specifications: {
      duration: "1 hora",
      includes: "Diagnóstico, Resolução de problemas",
    },
    serviceType: "hourly" as const,
  }
];

const ProductListing = () => {
  const { toast } = useToast();
  const [products] = useState(mockProducts);

  const handleAddToCart = (productId: string) => {
    toast({
      title: "Produto adicionado ao carrinho",
      description: "O produto foi adicionado ao seu carrinho com sucesso.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">Produtos e Serviços</h1>
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductListing;
