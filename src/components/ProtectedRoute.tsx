import * as React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  if (localStorage.getItem("token")) {
    return children;
  } else {
    localStorage.clear();
    return <Navigate to={"/login"} />;
  }
}
