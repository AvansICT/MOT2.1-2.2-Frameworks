{
// Soms willen we bepaalde eigenschappen van een object hergebruiken
// Dan is het handig om een type alias te maken
// neem bijvoorbeeld een identificatie nummer
type IDts = string | number;

type start_date = string | Date;
// nu kan ik overal in mijn code ID gebruiken in plaats van number

enum levels{
    NLQF4 = "NLQF4",
    NLQF5 = "NLQF5",
}

// ik zie hier duidelijk welke waarde elke property moet hebben
let vkmModuleTS :{
    id: IDts,
    name: string,
    studycredit: number,
    location: string,
    level: string,
    interests_match_score: number,
    available_spots: number,
    start_date: start_date
}

// vul ik hier wat anders in dan wat ik hierboven heb gedefinieerd
// dan krijg ik een foutmelding
vkmModuleTS = {
    id : "159",
    name : "Kennismaking met Psychologie,Brein, gedragsbeinvloeding, ontwikkelingspsychologie, gespreksvoering en ontwikkelingsfasen.",
    studycredit : 15,
    location : "Den Bosch",
    level : levels.NLQF5,
    interests_match_score : 0.54,
    available_spots : 79,
    start_date : new Date("2025-12-24")
}

// een array van vkmModules
let vkModulesTS: Array<typeof vkmModuleTS> = [vkmModuleTS];

// ik kan uit de code hale wat nodig is
// Weet ook wat ik terug krijg
const GetStudyCreditsTS = (id: IDts): number => {
    let idToSearch: IDts = id;

    if (typeof idToSearch === "string") {
        idToSearch = parseInt(idToSearch);
    }

    const module = vkModulesTS.find(m => m.id === idToSearch);
    return module ? module.studycredit : 0;
}

// nette foutmelding als ik iets fout doe
console.log(GetStudyCreditsTS("159"));
}