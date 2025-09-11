{
    //primitieve types
    var name_1 = "PowerPoint";
    var age = 37;
    var isMarried = true;
    // arrays
    var keuzeModules = ["MOT", "Web", "Data"];
    var keuzeModules2 = ["MOT", "Web", "Data"];
    // tuples
    var persoon = ["Avans", 37, true];
    var keuzeModules3 = [["AI", 15], ["Security", 5], ["Remote healthcare", 5]];
    // any / unknown / never
    var willekeurig = 5;
    willekeurig = "tekst";
    var onbekend = "iets";
    var tochBekend = onbekend;
    var onbemind = onbekend;
    function gooitFout() {
        throw new Error("Foutmelding");
    }
    var res = gooitFout();
    console.log(res);
    function gooitNietFout() {
        console.log("doet niks");
    }
    var res2 = gooitNietFout();
    console.log(res2);
}
