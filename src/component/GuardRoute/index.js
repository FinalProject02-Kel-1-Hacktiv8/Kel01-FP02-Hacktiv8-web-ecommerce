import { Navigate, Outlet } from "react-router-dom";

export default function GuardRoute({ children }) {
  const tkn = localStorage.getItem("tkn");
  if (!tkn) return <Navigate to="/signin" replace={true} />;
  return children || <Outlet />;
}
