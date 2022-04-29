import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  let routeStatus;
  if (localStorage.getItem("token")) {
    routeStatus = true;
  }
  return routeStatus ? <Outlet /> : <Navigate to="/login" />;
}
