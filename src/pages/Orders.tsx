import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Package, MessageSquare, Star } from "lucide-react";

const Orders = () => {
  const [orders] = useState([
    {
      id: "1",
      status: "pending",
      date: "2024-02-02",
      total: 299.99,
      items: [
        {
          id: "1",
          name: "Consultoria em TI",
          price: 299.99,
          quantity: 1,
        },
      ],
    },
    {
      id: "2",
      status: "completed",
      date: "2024-01-30",
      total: 899.99,
      items: [
        {
          id: "2",
          name: "Design de Website",
          price: 899.99,
          quantity: 1,
        },
      ],
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Pendente
          </Badge>
        );
      case "completed":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Concluído
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-800">
            {status}
          </Badge>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-2xl font-bold mb-6">Meus Pedidos</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">
                Pedido #{order.id}
                <span className="ml-4 text-sm font-normal text-muted-foreground">
                  {new Date(order.date).toLocaleDateString()}
                </span>
              </CardTitle>
              {getStatusBadge(order.status)}
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Quantidade: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                ))}
                <Separator />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>
                    {order.total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Clock className="mr-2 h-4 w-4" />
                    Acompanhar
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat
                  </Button>
                  {order.status === "completed" && (
                    <Button variant="outline" size="sm">
                      <Star className="mr-2 h-4 w-4" />
                      Avaliar
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Orders;