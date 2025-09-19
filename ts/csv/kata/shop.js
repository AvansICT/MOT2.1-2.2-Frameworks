// Online Shop TypeScript Opdracht
// 
// Deze JavaScript code moet worden omgezet naar TypeScript waarbij je de volgende concepten toepast:
// 1. Statische typering van variabelen
// 2. Typering van functieparameters en return waarden
// 3. Tuples voor winkelwagen items
// 4. Het any type (alleen waar echt nodig)
// 5. Het never type voor de error functie
// 6. Het unknown type voor externe data
// 7. Arrays met specifieke types

// --- Oorspronkelijke JavaScript code ---

// Producten in onze webshop
const products = [
  { id: 1, name: "T-shirt", price: 19.99, stock: 100 },
  { id: 2, name: "Jeans", price: 49.99, stock: 30 },
  { id: 3, name: "Schoenen", price: 79.99, stock: 15 }
];

// Winkelwagen als een array van [product ID, aantal]
const shoppingCart = [];

// Voeg product toe aan winkelwagen
function addToCart(productId, quantity) {
  const cartItem = shoppingCart.find(item => item[0] === productId);
  
  if (cartItem) {
    cartItem[1] += quantity;
  } else {
    shoppingCart.push([productId, quantity]);
  }
  
  return shoppingCart;
}

// Bereken het totaal van de winkelwagen
function calculateTotal() {
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
function reportError(errorCode) {
  console.error("Critical error:", errorCode);
  throw new Error(errorCode);
}

// Functie die externe data verwerkt
function processData(data) {
  // We weten niet wat voor data binnenkomt
  if (data && data.products) {
    return data.products;
  }
  return [];
}

// Voorbeeld gebruik
addToCart(1, 2);    // 2x T-shirt
addToCart(3, 1);    // 1x Schoenen
console.log(`Totaal: €${calculateTotal().toFixed(2)}`);

// --- Einde JavaScript code ---

// OPDRACHT:
// 1. Maak een nieuw bestand met de naam shop.ts
// 2. Zet de bovenstaande JavaScript code om naar TypeScript
// 3. Voeg type annotaties toe aan:
//    - De products array (geef aan wat voor objecten erin zitten)
//    - De shoppingCart array (maak hier een tuple array van)
//    - Alle functies (parameters en return types)
// 4. Zorg dat reportError het never type teruggeeft
// 5. Gebruik het unknown type voor de data parameter in processData
// 6. Gebruik GEEN type aliases of interfaces

// Let op: Gebruik primitive types (number, string, boolean) en object types 
// ({}) met inline annotaties voor de typering.