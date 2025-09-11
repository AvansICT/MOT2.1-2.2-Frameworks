{
//primitieve types
const name : string = "PowerPoint";
const age : number = 37;
const isMarried : boolean = true;

// arrays
const keuzeModules : string[] = ["MOT", "Web", "Data"];
const keuzeModules2 : Array<string> = ["MOT", "Web", "Data"];

// tuples
const persoon : [string, number, boolean] = ["Avans", 37, true];
const keuzeModules3 : [string, number][] = [["AI", 15], ["Security", 5], ["Remote healthcare", 5]];

// any / unknown / never
let willekeurig: any = 5;
willekeurig = "tekst";

let onbekend: unknown = "iets";

const tochBekend : any = onbekend;

const onbemind : string = onbekend as string; 


function gooitFout(): never {
  throw new Error("Foutmelding");
}

const res = gooitFout();

console.log(res);

function gooitNietFout(): void {
  console.log("doet niks");
}

const res2 = gooitNietFout();

console.log(res2);
}