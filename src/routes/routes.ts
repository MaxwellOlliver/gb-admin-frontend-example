import { lazy } from "react";

export interface RouteConfig {
  element: React.FC<any>;
  isPrivate?: boolean;
  path: string;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: lazy(() => import("../pages/Home")),
    isPrivate: false,
  },
];

export default routes;
