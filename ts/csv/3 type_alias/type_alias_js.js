// type alias in JSDoc
// Soms willen we bepaalde eigenschappen van een object hergebruiken
// Dan is het handig om een type alias te maken
// neem bijvoorbeeld een identificatie nummer
{

/**
 * @typedef {number} ID
 * Een unieke identifier voor een gebruiker of object.
 **/


/**
 * @type {{ id: ID, name: string, studycredit: number, location: string, level: string, interests_match_score: number, available_spots: number, start_date: string }}
 */
let vkmModule = {
    id : "afsfsaf",
    name : "Kennismaking met Psychologie,Brein, gedragsbeinvloeding, ontwikkelingspsychologie, gespreksvoering en ontwikkelingsfasen.",
    studycredit : 15,
    location : "Den Bosch",
    level : "NLQF5",
    interests_match_score : 0.54,
    available_spots : 79,
    start_date : "2025-12-24"
}


let vkmModules = [
vkmModule, 
]
// ik kan hem wel naar een string veranderen. Dus geen type veiligheid. Alleen voor de leesbaarheid.
vkmModules[0].id = "assfas";

// ik kan uit dit stuk code niet halen wat nodig is. 
// Waar voldoet id aan? een nummer of een string?
// Wat is het return type van de functie?
/**
 * @param {ID} id
 * @returns {number}
 **/ 
const GetStudyCredits = (id) =>{
    const module = vkmModules.find(m => m.id == id);
    return module ? module.studycredit : 0;
}

// dit zou nooit moeten mogen. Maar ik krijg geen foutmelding
console.log(GetStudyCredits({ id: "13131" }));
}