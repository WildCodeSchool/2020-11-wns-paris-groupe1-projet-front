import React, { lazy } from "react";
import { subRHome } from "./subRoutes";

import { IRoute } from "./config";

export const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    redirect: "/home",
    fallback: <div> Loading... </div>,
  },
  {
    path: "/home",
    component: lazy(() => import("./../pages/home")),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
    routes: subRHome,
  },
  {
    path: "/planning",
    component: lazy(() => import("../pages/planning")),
    exact: false,
    private: true,
    fallback: <div> Loading... </div>,
  },
];
