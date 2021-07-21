import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";



const AuthContext = createContext();




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
    async function loginService(username, password) {
        const loginServiceResponse = await axios.post('https://video-lib-backend.herokuapp.com/users/login',
            {
                user: {
                    username: username,
                    password: password
                }
            });
        return loginServiceResponse
    }

    async function loginUserWithCredentials(username, password) {
        // console.log("inside login user with creds")
        try {
            const response = await loginService(username, password);
            // console.log(response)
            if (response.status === 200) {
                // console.log("response 200")
                loginUser(response.data.token)
                return true;
            }
        } catch (error) {
            console.log("Invalid credentials")
        }
    }

    function logoutUser() {
        // console.log("Loging out");
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