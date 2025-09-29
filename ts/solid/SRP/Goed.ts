{
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

// CalculateTaxAmount is alleen verantwoordelijk voor het berekenen van de belasting
const CalculateTaxAmount = (products : Product[]) : number => {
  const calculatedPrice : number = products.reduce((a, b) => a + b.price, 0);

  const taxtAmount: number =   calculatedPrice * 0.21;

  return taxtAmount;
}
}