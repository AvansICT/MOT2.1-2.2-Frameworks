import { type RouteConfig, index ,layout,route} from "@react-router/dev/routes";

export default [
  layout("layouts/basic-layout.tsx", [
      index("routes/home.tsx"),
      route("overview", "routes/overview.tsx")
      ])
] satisfies RouteConfig;
