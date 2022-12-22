import { useAuth } from "./context/auth-context";
import { Route,Routes, useParam, useLocation, Navigate } from "react-router-dom";
export function RequireAuth({children}) {
    const { isUserLoggedIn } = useAuth();
    const location = useLocation();
    if(!isUserLoggedIn){
        return <Navigate to ='/login' state={{ from : location}} replace/>
    }
    return children;
}