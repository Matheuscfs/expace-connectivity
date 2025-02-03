import { toast } from "@/components/ui/use-toast";

export const validatePaymentInfo = (paymentData: any) => {
  const { method, cardNumber, cardName, expiryDate, cvv } = paymentData;
  
  if (method === "credit" || method === "debit") {
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      return false;
    }
    // Basic card number validation (Luhn algorithm)
    return validateCardNumber(cardNumber);
  }
  
  return true;
};

const validateCardNumber = (cardNumber: string) => {
  const digits = cardNumber.replace(/\D/g, '');
  if (digits.length < 13 || digits.length > 19) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

export const processPayment = async (paymentData: any, orderData: any) => {
  try {
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (Math.random() > 0.1) { // 90% success rate for simulation
      return {
        success: true,
        transactionId: `TX-${Date.now()}`
      };
    } else {
      throw new Error("Payment declined");
    }
  } catch (error) {
    console.error("Payment processing error:", error);
    throw error;
  }
};