import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Pathname } from "./Pathname";

let accessToken = localStorage.getItem("t_id");

export const PrivateRoute = () => {
    const auth = accessToken;
    return auth ? <Outlet /> : <Navigate to={Pathname.LANDING_PAGE} />;
};

export default PrivateRoute;