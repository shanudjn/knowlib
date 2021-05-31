import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


const AuthContext = createContext();


async function loginService(username, password) {
    return axios.post('http://localhost:8080/users/login/',
        {
            user: {
                username: username,
                password: password
            }
        });
}

export function AuthProvider({ children }) {


    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [token, setToken] = useState(null)

    useEffect(() => {
        const { isUserLogIn, token } = JSON.parse(localStorage?.getItem("login")) || {}

        isUserLogIn && setIsUserLoggedIn(true);
        token && setToken(token)
    }, [])


    function loginUser(token) {

        setIsUserLoggedIn(true);
        setToken(token);

        localStorage?.setItem("login", JSON.stringify({ isUserLogIn: true, token }))


    }

    async function loginUserWithCredentials(username, password) {

        try {
            const response = await loginService(username, password);
            console.log(response)
            if (response.status === 200) {
                loginUser(response.data.token)
                return true;
            }
        } catch (error) {
            console.log("Invalid credentials")
        }
    }

    function logoutUser() {
        console.log("Loging out");
        localStorage?.removeItem("login")
        setIsUserLoggedIn(false);
        setToken(null)
    }



    return <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, loginUserWithCredentials, logoutUser, token }}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}