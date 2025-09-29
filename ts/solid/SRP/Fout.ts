interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}


//calculateTaxAmount is verantwoordelijk voor het berekenen van de belasting, het bijvullen van de voorraad en het in de winkelwagen plaatsen van producten.
// Dit is een schending van het Single Responsibility Principle (SRP)
const CalculateTaxAmount = (products : Product[]) : number => {
  const calculatedPrice : number = products.reduce((a, b) => a + b.price, 0);

  const taxtAmount: number =   calculatedPrice * 0.21;

  Restock(products);
  PutProductsInCart(products);

  return taxtAmount;
}