import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: React.ReactNode; 
  }

const PublicRoute = ({children}: PublicRouteProps) => {

    const [authToken, setCookie] = useCookies(["token"]);

    if (authToken.token) { //se logado
        return <Navigate to="/dashboard" />;
      }

    return <>{children}</>

}

// <Navigate to="/login"/>
export {PublicRoute}