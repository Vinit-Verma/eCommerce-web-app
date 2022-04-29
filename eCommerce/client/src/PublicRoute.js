import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  let routeStatus;
  if (localStorage.getItem("token")) routeStatus = true;
  return routeStatus ? <Navigate to="/" /> : <Outlet />;
}
