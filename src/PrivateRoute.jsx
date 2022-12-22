import { Route,Routes, useParams } from "react-router-dom";
import { useAuth } from "./context/auth-context";

export default function PrivateRoute({ path, ...props }) {
    const { isUserLoggedIn } = useAuth();
    // return <Routes>
    //     {
    //         isUserLoggedIn ? <Route {...props} path={path} /> : <Route state={{ from: path }} replace to="/login" />
    //     }
    // </Routes>
    return  <Routes><Route {...props} path={path} /></Routes>
}