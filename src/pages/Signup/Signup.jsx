import axios from 'axios';
import { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';




function Signup() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state } = useLocation();
    const navigate = useNavigate();


    async function signupService() {
        // console.log(username, email, password)
        try {
            const signupServiceResponse = await axios.post('https://video-lib-backend.herokuapp.com/users/register',
                {
                    user: {
                        username: username,
                        email: email,
                        password: password,
                    }
                });
            // console.log(signupServiceResponse)
            return signupServiceResponse
        } catch (error) {
            // console.log(error)
        }

    }

    async function handleUserSignup(e) {
        e.preventDefault();
        const response = await signupService()
        // console.log(response)

        if (response.status === 201) {
            navigate(state?.from ? state.from : "/");

        }


    }


    return (
        <>
            {
                <div className="div-login-container">

                    <div className="div-login-form">
                        <p>Signup</p>
                        <form className="form-login" action="" onSubmit={(e) => handleUserSignup(e)}>
                            <input className="form-input" type="text" placeholder="Username" id="username" onChange={(e) => setUserName(e.target.value)} />
                            <input className="form-input" type="text" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} />

                            <input className="form-input" type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
                            <button className="login-button">{"Signup"}</button>
                        </form>
                    </div>
                </div>
            }
            {/* onChange={(e) => setUserName(e.target.value)} value={"test"} */}
            {/* onChange={(e) => setPassword(e.target.value)} value={"qwerty"} */}

        </>
    )
}

export default Signup
