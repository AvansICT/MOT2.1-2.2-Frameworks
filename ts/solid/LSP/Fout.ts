class Bird {
  fly(): void {
    console.log("Flying");
  }
}

class Ostrich extends Bird {
  fly(): void {
    throw new Error("Ostriches can't fly");
  }
}

//LSP overtreding: Ostrich kan niet vliegen, maar wordt behandeld als een Bird
function makeBirdFly(bird: Bird) {
  bird.fly();
}

const ostrich = new Ostrich();
makeBirdFly(ostrich); // Throws error at runtime

