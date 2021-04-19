import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import './Login.css';


export function Login() {

    const { login, setLogin } = useAuth();
    const { state } = useLocation();
    const navigate = useNavigate();

    function handleLogin() {
        setLogin((login) => !login)
        navigate(state?.from ? state.from : "/")
    }
    console.log(state)
    return (
        <>
            <div className="div-login-container">
                This is Login Page
                <button onClick={handleLogin}>{login ? "Logout" : "Login"}</button>

            </div>

        </>
    )
}