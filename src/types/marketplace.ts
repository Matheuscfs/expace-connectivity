export interface Product {
  productId: string;
  sellerId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  status: 'active' | 'inactive';
  rating: number;
  stock: number;
  specifications: Record<string, string>;
}

export interface OrderItem {
  itemId: string;
  productId: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface Order {
  orderId: string;
  buyerId: string;
  sellerId: string;
  items: OrderItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: Date;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Review {
  reviewId: string;
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  images: string[];
  createdAt: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Cart {
  cartId: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
}

export interface Payment {
  paymentId: string;
  orderId: string;
  amount: number;
  method: 'credit_card' | 'debit_card' | 'pix' | 'bank_transfer';
  status: 'pending' | 'completed' | 'failed';
  transactionId: string;
}