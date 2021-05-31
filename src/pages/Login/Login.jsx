import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import './Login.css';


export function Login() {

    const { isUserLoggedIn, loginUserWithCredentials, logoutUser } = useAuth();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { state } = useLocation();
    const navigate = useNavigate();


    function handleUserLogin(e) {
        e.preventDefault();
        loginUserWithCredentials(username, password)

        navigate(state?.from ? state.from : "/")

    }

    return (
        <>
            {
                !isUserLoggedIn && <div className="div-login-container" onSubmit={(e) => handleUserLogin(e)}>
                    <div className="div-login-form">
                        <form className="form-login" action="">
                            <input className="form-input" type="text" placeholder="Username" id="username" onChange={(e) => setUserName(e.target.value)} />
                            <input className="form-input" type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
                            <button className="login-button">{isUserLoggedIn ? "Logout" : "Login"}</button>
                        </form>

                    </div>
                </div>

            }
            {
                isUserLoggedIn && <button onClick={() => logoutUser()}>Logout</button>
            }
        </>
    )
}