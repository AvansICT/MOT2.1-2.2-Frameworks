// Dynamic typing vs Static typing

// In JavaScript is alles dynamic
// Je kan een variabele eerst een nummer geven en daarna een string
// Dit kan leiden tot fouten die moeilijk te vinden zijn
let vkmModule = {
    id : 159,
    name : "Kennismaking met Psychologie,Brein, gedragsbeinvloeding, ontwikkelingspsychologie, gespreksvoering en ontwikkelingsfasen.",
    studycredit : 15,
    location : "Den Bosch",
    level : "NLQF5",
    interests_match_score : 0.54,
    available_spots : 79,
    start_date : "2025-12-24"
}

// Nu is mijn hele structuur invalide.
vkmModul.id = "guid-1234";




console.log(vkmModule)

