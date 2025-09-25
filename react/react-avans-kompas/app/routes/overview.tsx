import { useState } from "react";
import type { Route } from "./+types/overview";
import AvansHero, { type AvansHeroProps } from "~/components/avansHero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const choiceModule : AvansHeroProps = {
  period:"P3", ects:15, language:"NL", location:"Den Bosch", courseCode:"M04337-02", courseTitle:"Kennismaking met Psychologie,Brein, gedragsbeinvloeding, ontwikkelingspsychologie, gespreksvoering en ontwikkelingsfasen.", courseDescription:"De module bevat drie leeruitkomsten: Productieautomatisering (7 EC), Productietechnieken (4 EC) en Continu Verbeteren (4 EC). De module heeft een technisch karakter.", imgSrc:"./VKM design.png"
}

export default function Overview() {
  const [isFavorite, setIsFavorite] = useState(false);

  return <AvansHero module={choiceModule} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />;
}
