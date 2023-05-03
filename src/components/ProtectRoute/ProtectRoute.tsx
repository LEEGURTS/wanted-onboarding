import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

interface ProtectedRouteProps {
  path: string;
  shouldLogin?: boolean;
}

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ({
  path,
  shouldLogin = false,
}) => {
  const [token, setToken] = useState(
    localStorage.getItem("access_token") || ""
  );
  const currentLocation = useLocation();

  useEffect(() => {
    const handleLogin = () => {
      console.log("login");
      setToken(localStorage.getItem("access_token") || "");
    };
    document.addEventListener("SignIn", handleLogin);
    return () => {
      document.removeEventListener("SignIn", handleLogin);
    };
  }, []);

  return !!token.length === shouldLogin ? (
    <Outlet />
  ) : (
    <Navigate to={path} replace state={{ redirectedFrom: currentLocation }} />
  );
};

export default ProtectedRoute;
