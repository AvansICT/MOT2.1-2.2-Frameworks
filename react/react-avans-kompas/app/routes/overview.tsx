import type { Route } from "./+types/overview";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Overview() {
  return <div className="overview-page">Overview page test</div>;
}
