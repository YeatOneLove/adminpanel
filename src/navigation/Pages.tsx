import { allowedRoutes, routes } from "assets/constants/routes";
import AppLayout from "components/layout/AppLayout";
import AuthLayout from "components/layout/AuthLayout";
import LoadingComponent from "components/loading/LoadingComponent";
import Games from "pages/games/Games";
import Login from "pages/Login/Login";
import Users from "pages/Users/User";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Pages = (): React.ReactElement => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <AppLayout>
        <Routes>
          <Route path={routes.index} element={<Navigate to={routes.users} />} />
          <Route path={routes.users} element={<Users />} />
          <Route path={routes.games} element={<Games />} />
        </Routes>
      </AppLayout>
      {/* <AuthLayout>
        <Routes>
          <Route path={allowedRoutes.login} element={<Login />} />
          <Route path={routes.index} element={<Navigate to={allowedRoutes.login} />} />
        </Routes>
      </AuthLayout> */}
    </Suspense>
  );
};
export default Pages;
