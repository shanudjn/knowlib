import axios from "axios";
import { useState, useContext, createContext } from "react";
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

    const { initialLoginState, token: savedToken } = JSON.parse(
        localStorage?.getItem("login")
    ) || { initialLoginState: false, savedToken: null }


    const [isUserLoggedIn, setIsUserLoggedIn] = useState(initialLoginState);
    const [token, setToken] = useState(savedToken)




    function loginUser(token) {
        setToken(token);
        setIsUserLoggedIn(true);
        localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: true, token }))

    }

    async function loginUserWithCredentials(username, password) {
        try {
            const response = await loginService(username, password);
            console.log(response)
            if (response.status === 200) {
                loginUser(response.data.token)
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



    return <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, loginUserWithCredentials, logoutUser }}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}