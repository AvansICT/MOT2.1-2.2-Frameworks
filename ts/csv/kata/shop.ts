// Producten in onze webshop
const products: {id: number, name: string, price: number, stock: number}[] = [
  { id: 1, name: "T-shirt", price: 19.99, stock: 100 },
  { id: 2, name: "Jeans", price: 49.99, stock: 30 },
  { id: 3, name: "Schoenen", price: 79.99, stock: 15 }
];

// Winkelwagen als een array van tuples: [product ID, aantal]
const shoppingCart: [number, number][] = [];

// Voeg product toe aan winkelwagen
function addToCart(productId: number, quantity: number): [number, number][] {
  const cartItem = shoppingCart.find(item => item[0] === productId);
  
  if (cartItem) {
    cartItem[1] += quantity;
  } else {
    shoppingCart.push([productId, quantity]);
  }
  
  return shoppingCart;
}

// Bereken het totaal van de winkelwagen
function calculateTotal(): number {
  let total = 0;
  
  shoppingCart.forEach(item => {
    const productId = item[0];
    const quantity = item[1];
    const product = products.find(p => p.id === productId);
    
    if (product) {
      total += product.price * quantity;
    }
  });
  
  return total;
}

// Functie die het programma stopt met een foutmelding
function reportError(errorCode: string): never {
  console.error("Critical error:", errorCode);
  throw new Error(errorCode);
}

// Functie die externe data verwerkt
function processData(data: unknown): {id: number, name: string, price: number, stock: number}[] {
  // We weten niet wat voor data binnenkomt
  if (data !== null && 
      typeof data === "object" && 
      "products" in data && 
      Array.isArray((data as any).products)) {
    return (data as any).products;
  }
  return [];
}

// Voorbeeld gebruik
addToCart(1, 2);    // 2x T-shirt
addToCart(3, 1);    // 1x Schoenen
console.log(`Totaal: €${calculateTotal().toFixed(2)}`);