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

// Dit is nu een type
type IvkmModuleTS = {
    id: IDts,
    name: string,
    studycredit: number,
    location: string,
    level: string,
    interests_match_score: number,
    available_spots: number,
    start_date: start_date
}

type Minor = IvkmModuleTS & {
    OutsideAvans: boolean,
    international: boolean
} & {hello: string};

// vul ik hier wat anders in dan wat ik hierboven heb gedefinieerd
// dan krijg ik een foutmelding
let vkmModuleTS : IvkmModuleTS  = {
    id : "159",
    name : "Kennismaking met Psychologie,Brein, gedragsbeinvloeding, ontwikkelingspsychologie, gespreksvoering en ontwikkelingsfasen.",
    studycredit : 15,
    location : "Den Bosch",
    level : levels.NLQF5,
    interests_match_score : 0.54,
    available_spots : 79,
    start_date : new Date("2025-12-24")
}


}