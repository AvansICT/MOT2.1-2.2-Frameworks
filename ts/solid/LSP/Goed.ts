interface Flyable {
  fly(): void;
}

class Bird {
  // bird properties en methodes
}

class Sparrow extends Bird implements Flyable {
  fly(): void {
    console.log("Flying");
  }
}

class Ostrich extends Bird {
  // Ostrich implementeert fly niet omdat struisvogels niet kunnen vliegen
}

//LSP correct: Alleen vogels die kunnen vliegen worden behandeld als Flyable
function makeBirdFly(bird: Flyable) {
  bird.fly();
}

const sparrow = new Sparrow();
makeBirdFly(sparrow); //

const ostrich = new Ostrich();
// makeBirdFly(ostrich); // Compile-time error: Ostrich osterich kan niet vliegen

