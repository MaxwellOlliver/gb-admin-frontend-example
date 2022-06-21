import { Suspense } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./PrivateRoute";
import SuspenseLoader from "../components/SuspenseLoader";

const Routes = (): JSX.Element => (
  <Suspense fallback={<SuspenseLoader />}>
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) =>
          route.isPrivate ? (
            <PrivateRoute {...route} key={index}>
              <Route path={route.path} element={<route.element />} />
            </PrivateRoute>
          ) : (
            <Route path={route.path} element={<route.element />} key={index} />
          )
        )}
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Routes;
