import { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { useVideo } from '../../context/video-context';
import './Login.css';


export function Login() {

    const { isUserLoggedIn, loginUserWithCredentials, logoutUser } = useAuth();

    const [username, setUserName] = useState("test");
    const [password, setPassword] = useState("qwerty");
    const [loginButtonText, setLoginButtonText] = useState("Login")

    const [isLoggingIn, setIsLogginIn] = useState(false)

    const { state } = useLocation();
    const navigate = useNavigate();

    const { videoId } = useParams()
    const { playlist } = useVideo()

    async function handleUserLogin(e) {
        e.preventDefault();
        setLoginButtonText("Logging In...")
        // console.log("indie handle login")
        await loginUserWithCredentials(username, password)
        // console.log(isUserLoggedIn)
        setIsLogginIn(true)
        navigate(state?.from ? state.from : "/");
        // navigate(-1)

    }

    // console.log(isLoggingIn)
    return (
        <>

            {
                !isUserLoggedIn && <div className="div-login-container" onSubmit={(e) => handleUserLogin(e)}>

                    <div className="div-login-form">
                        <p>Login</p>

                        <form className="form-login" action="">
                            <input className="form-input" type="text" placeholder="Username : test" id="username" onChange={(e) => setUserName(e.target.value)} value={username} />
                            <input className="form-input" type="password" placeholder="Password : qwerty" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <button className="login-button">{loginButtonText}</button>
                        </form>
                        <p className="signup-section">New user ? <Link to={`/signup`}>Signup</Link> here</p>
                    </div>
                </div>
            }


        </>
    )
}