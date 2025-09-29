{
interface PaymentProcessor {
  processPayment(amount: number): void;
}

class PayPalProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of ${amount}`);
  }
}

class BankPassProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing BankPass payment of ${amount}`);
  }
}

class TikkieProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Tikkie payment of ${amount}`);
  }
}


class PaymentService {
  private paymentProcessor: PaymentProcessor;
  
  constructor(paymentProcessor: PaymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  processPayment(amount: number): void {
    this.paymentProcessor.processPayment(amount);
  }
}

const paypalService = new PaymentService(new PayPalProcessor());
paypalService.processPayment(100);

}