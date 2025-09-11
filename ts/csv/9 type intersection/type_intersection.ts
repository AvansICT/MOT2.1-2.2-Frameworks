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

// Dit is nu een interface
interface IvkmModuleTS {
    id: IDts,
    name: string,
    studycredit: number,
    location: string,
    level: string,
    interests_match_score: number,
    available_spots: number,
    start_date: start_date
}

interface IMinor {
    name: string,
    facility: string,
    abroad: boolean,
    country?: string
}

// Dit is een type intersection
// hierbij moet alles van IvkmModuleTS en IMinor aanwezig zijn
type Minor = IvkmModuleTS & IMinor;

// Dit is een type union
// hierbij moet alles van IvkmModuleTS of IMinor aanwezig zijn
type VKModuleOrMinor = IvkmModuleTS | Minor;

let aiMinor: Minor = {
    id : "159",
    name : "Kennismaking met AI",
    studycredit : 15,
    location : "Den Bosch",
    level : levels.NLQF5,
    interests_match_score : 0.54,
    available_spots : 79,
    start_date : new Date("2025-12-24"),
    facility: "Avans",
    abroad: false
}

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

class VKModules{
    private vkmodules: Array<IvkmModuleTS>;
    
    constructor(vkmodules: Array<IvkmModuleTS>){
        this.vkmodules = vkmodules;
    }

    getVKModuleById(id: IDts): IvkmModuleTS | undefined {
        let idToSearch: IDts = id;

        if (typeof idToSearch === "string") {
            idToSearch = parseInt(idToSearch);
        }

        const module = this.vkmodules.find(m => m.id === idToSearch);
        return module;
    }
}

let vkModulesInstance = new VKModules([vkmModuleTS]);

// nette foutmelding als ik iets fout doe
console.log(vkModulesInstance.getVKModuleById("159"));

}