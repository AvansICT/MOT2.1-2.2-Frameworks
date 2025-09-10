{
// typeannotations

// ik zie hier duidelijk welke waarde elke property moet hebben
let vkmModuleTS :{
    id: number,
    name: string,
    studycredit: number,
    location: string,
    level: string,
    interests_match_score: number,
    available_spots: number,
    start_date: string  
}

// vul ik hier wat anders in dan wat ik hierboven heb gedefinieerd
// dan krijg ik een foutmelding
vkmModuleTS = {
    id : 159,
    name : "Kennismaking met Psychologie,Brein, gedragsbeinvloeding, ontwikkelingspsychologie, gespreksvoering en ontwikkelingsfasen.",
    studycredit : 15,
    location : "Den Bosch",
    level : "NLQF5",
    interests_match_score : 0.54,
    available_spots : 79,
    start_date : "2025-12-24"
}

// een array van vkmModules
let vkModules: Array<typeof vkmModuleTS> = [vkmModuleTS];



// ik kan uit de code hale wat nodig is
// Weet ook wat ik terug krijg
const GetStudyCreditsTS = (id: number): number => {
    const module = vkmModules.find(m => m.id == id);
    return module ? module.studycredit : 0;
}

// nette foutmelding als ik iets fout doe
console.log(GetStudyCreditsTS("ada"));
}