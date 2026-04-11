import { Navigate, Outlet, useLocation } from "react-router-dom";

function isTokenValid(token) {
  if (!token || token === "undefined" || token === "null") {
    return false;
  }

  try {
    const [, payload] = token.split(".");

    if (!payload) {
      return false;
    }

    const decodedPayload = JSON.parse(atob(payload));

    if (!decodedPayload.exp) {
      return true;
    }

    return decodedPayload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!isTokenValid(token)) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children ?? <Outlet />;
}
