import { Navigate, Route, useParams } from "react-router-dom";
import { useAuth } from "./context/auth-context";

export default function PrivateRoute({ path, ...props }) {
    const { isUserLoggedIn } = useAuth();

    const params = useParams()


    console.log("props", props)
    console.log({ path })

    return isUserLoggedIn ? <Route {...props} path={path} /> : <Navigate state={{ from: path }} replace to="/login" />

}