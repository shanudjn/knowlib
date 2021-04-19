import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./context/auth-context";

export default function PrivateRoute({ path, ...props }) {
    const { login } = useAuth();

    return login ? <Route {...props} path={path} /> : <Navigate state={{ from: path }}
        replace to="/login" />


}