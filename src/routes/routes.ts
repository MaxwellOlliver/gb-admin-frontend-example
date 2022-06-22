import { lazy } from "react";

export interface RouteConfig {
  element: React.FC<any>;
  isPrivate?: boolean;
  path: string;
  childrens?: Omit<RouteConfig, "isPrivate">[];
}

export const dashboardPathPrefix = "/dashboard";

const routes: RouteConfig[] = [
  {
    path: "/",
    element: lazy(() => import("@/pages/Home")),
    isPrivate: false,
  },
  {
    path: "/dashboard",
    element: lazy(() => import("@/pages/Dashboard")),
    childrens: [
      {
        path: "panel",
        element: lazy(() => import("@/pages/Panel")),
      },
    ],
  },
];

export default routes;
