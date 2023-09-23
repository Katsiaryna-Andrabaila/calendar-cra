import { ComponentType } from "react";
import Login from "../pages/Login";
import Calendar from "../pages/Calendar";

export interface Route {
  path: string;
  component: ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  CALENDAR = "/",
}

export const publicRoutes: Route[] = [
  { path: RouteNames.LOGIN, component: Login },
];

export const privateRoutes: Route[] = [
  { path: RouteNames.CALENDAR, component: Calendar },
];
