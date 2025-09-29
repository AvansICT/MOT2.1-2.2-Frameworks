enum PaymentMethod {
  CreditCard,
  PayPal,
  BankTransfer
}

// OCP violation: Adding a new payment method requires modifying this class
class PaymentService {

  processPayment(amount: number, method: PaymentMethod): boolean {
    switch (method) {
      case PaymentMethod.CreditCard:
        console.log(`Processing credit card payment of ${amount}`);
        break;
      case PaymentMethod.PayPal:
        console.log(`Processing PayPal payment of ${amount}`);
        break;
      case PaymentMethod.BankTransfer:
        console.log(`Processing bank transfer payment of ${amount}`);
        break;
      default:
        throw new Error("Unsupported payment method");
    }
    return true;
  }

}