import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./Login.css";

export function Login() {
  const { loginUserWithCredentials } = useAuth();

  const [username, setUserName] = useState("test");
  const [password, setPassword] = useState("qwerty");
  const [loginButtonText, setLoginButtonText] = useState("Login");


  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  async function handleUserLogin(e) {
    e.preventDefault();
    setLoginButtonText("Logging In...");
    await loginUserWithCredentials(username, password);
    navigate(from, { replace: true });
  }
  return (
    <>
      <div className="div-login-container" onSubmit={(e) => handleUserLogin(e)}>
        <div className="div-login-form">
          <p>Login</p>

          <form className="form-login" action="">
            <input
              className="form-input"
              type="text"
              placeholder="Username : test"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
            <input
              className="form-input"
              type="password"
              placeholder="Password : qwerty"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="login-button">{loginButtonText}</button>
          </form>
          <p className="signup-section">
            New user ? <Link to={`/signup`}>Signup</Link> here
          </p>
        </div>
      </div>
    </>
  );
}
