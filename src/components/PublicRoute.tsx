import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  if (localStorage.getItem("token")) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
}
