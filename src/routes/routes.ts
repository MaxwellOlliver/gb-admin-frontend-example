import { lazy } from "react";

export interface RouteConfig {
  element: React.FC<any>;
  isPrivate?: boolean;
  isIndex?: boolean;
  path?: string;
  childrens?: Omit<RouteConfig, "isPrivate">[];
}

export const dashboardPathPrefix = "/dashboard";

const routes: RouteConfig[] = [
  {
    isIndex: true,
    element: lazy(() => import("@/pages/Home")),
    isPrivate: false,
  },
  {
    path: "dashboard",
    element: lazy(() => import("@/pages/Dashboard")),
    childrens: [
      {
        isIndex: true,
        element: lazy(() => import("@/pages/Panel")),
      },
      {
        path: "panel",
        element: lazy(() => import("@/pages/Panel")),
      },
      {
        path: "user",
        element: lazy(() => import("@/pages/User")),
      },
      {
        path: "products",
        element: lazy(() => import("@/pages/Products")),
      },
    ],
  },
];

export default routes;
