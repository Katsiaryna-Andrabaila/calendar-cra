import { Routes, Route, Navigate } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../router";

export const AppRouter = () => {
  const isAuth = false;

  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route
        path="/*"
        element={<Navigate to={RouteNames.CALENDAR} replace />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="/*" element={<Navigate to={RouteNames.LOGIN} replace />} />
    </Routes>
  );
};
