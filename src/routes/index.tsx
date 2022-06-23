import { Suspense } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./PrivateRoute";
import SuspenseLoader from "@/components/SuspenseLoader";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) =>
          route.isPrivate ? (
            <PrivateRoute {...route} key={index}>
              <Route
                path={route.path}
                element={
                  <Suspense
                    fallback={
                      route.useSuspenseLoader ? <SuspenseLoader /> : null
                    }
                  >
                    <route.element />
                  </Suspense>
                }
                index={route.isIndex}
              >
                {route.childrens &&
                  route.childrens.length > 0 &&
                  route.childrens.map((childrenRoute, index) => (
                    <Route
                      key={index}
                      path={childrenRoute.path}
                      element={
                        <Suspense
                          fallback={
                            childrenRoute.useSuspenseLoader ? (
                              <SuspenseLoader />
                            ) : null
                          }
                        >
                          <childrenRoute.element />
                        </Suspense>
                      }
                      index={childrenRoute.isIndex}
                    />
                  ))}
              </Route>
            </PrivateRoute>
          ) : (
            <Route
              path={route.path}
              element={
                <Suspense
                  fallback={route.useSuspenseLoader ? <SuspenseLoader /> : null}
                >
                  <route.element />
                </Suspense>
              }
              key={index}
              index={route.isIndex}
            >
              {route.childrens &&
                route.childrens.length > 0 &&
                route.childrens.map((childrenRoute, index) => (
                  <Route
                    key={index}
                    path={childrenRoute.path}
                    element={
                      <Suspense
                        fallback={
                          childrenRoute.useSuspenseLoader ? (
                            <SuspenseLoader />
                          ) : null
                        }
                      >
                        <childrenRoute.element />
                      </Suspense>
                    }
                    index={childrenRoute.isIndex}
                  />
                ))}
            </Route>
          )
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
