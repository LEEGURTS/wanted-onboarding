import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

interface ProtectedRouteProps {
  path: string;
  shouldLogin?: boolean;
}

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ({
  path,
  shouldLogin = true,
}) => {
  const [token, setToken] = useState(
    localStorage.getItem("access_token") || ""
  );
  const currentLocation = useLocation();

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "access_token") {
        setToken(e.newValue || "");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return !token.length === shouldLogin ? (
    <Outlet />
  ) : (
    <Navigate to={path} replace state={{ redirectedFrom: currentLocation }} />
  );
};

export default ProtectedRoute;
