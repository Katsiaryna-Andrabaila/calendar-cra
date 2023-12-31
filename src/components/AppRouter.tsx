import { Routes, Route, Navigate } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

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
