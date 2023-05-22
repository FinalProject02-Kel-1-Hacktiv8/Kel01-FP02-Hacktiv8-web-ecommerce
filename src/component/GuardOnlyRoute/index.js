import { Navigate, Outlet } from "react-router-dom";

export default function GuestOnlyRoute({ children }) {
  const tkn = localStorage.getItem("tkn");
  if (tkn) return <Navigate to="/" replace={true} />;
  return children || <Outlet />;
}
