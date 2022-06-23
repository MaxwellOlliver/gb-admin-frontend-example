import { Navigate } from "react-router-dom";
import { RouteConfig } from "./routes";

const PrivateRoute = ({
  isPrivate = false,
  children,
}: RouteConfig & { children: any }) => {
  const { isAuth, loading } = { isAuth: false, loading: false };

  if (!isAuth && isPrivate) {
    return (
      <>
        {loading && <h1>loading user</h1>}
        <Navigate to="/" />
      </>
    );
  }

  return children;
};

export default PrivateRoute;
