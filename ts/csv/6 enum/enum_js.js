// Type annotations
// in js gebruiken we JSDoc comments om type annotaties toe te voegen
// dit wordt niet door de browser gevalideerd maar wel door editors zoals VSCode
// vind je het leesbaar en handig?

const levels = Object.freeze({
    NLQF4: "NLQF4",
    NLQF5: "NLQF5"
});


levels.NLQF4 = "Aangepaste waarde"; // Dit heeft geen effect vanwege Object.freeze

/**
 * @typedef {number | string} ID
 * Een unieke identifier voor een gebruiker of object.
 **/


/**
 * @type {{  id: ID, name: string, studycredit: number, location: string, level: string, interests_match_score: number, available_spots: number, start_date: string }}
 */
let vkmModule = {
    id : 159,
    name : "Kennismaking met Psychologie,Brein, gedragsbeinvloeding, ontwikkelingspsychologie, gespreksvoering en ontwikkelingsfasen.",
    studycredit : 15,
    location : "Den Bosch",
    level : levels.NLQF5,
    interests_match_score : 0.54,
    available_spots : 79,
    start_date : "2025-12-24"
}

let vkmModules = [
vkmModule, 
]

// ik kan uit dit stuk code niet halen wat nodig is. 
// Waar voldoet id aan? een nummer of een string?
// Wat is het return type van de functie?
/**
 * @param {ID} id
 * @returns {number}
 **/
const GetStudyCredits = (id) =>{
    let idToSearch = id;

    if (typeof idToSearch === "string") {
        idToSearch = parseInt(idToSearch);
    }

    const module = vkmModules.find(m => m.id == idToSearch);
    return module ? module.studycredit : 0;
}

// dit zou nooit moeten mogen. Maar ik krijg geen foutmelding
console.log(GetStudyCredits({ id: "13131" }));