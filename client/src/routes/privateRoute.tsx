import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: React.ReactNode; 
  }

const PrivateRoute = ({children}: PrivateRouteProps) => {

    const [authToken, setCookie] = useCookies(["token"]);

    if (!authToken.token) { //se nao logado
        return <Navigate to="/login" />;
      }

    return <>{children}</>

}

export {PrivateRoute}