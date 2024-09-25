import { createContext, useState } from "react";
import {
    getUserLogged,
    login as networkLogin,
    putAccessToken,
} from "../utils/network-data";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    const clearAuth = () => {
        setId(null);
        setName(null);
        setEmail(null);

        setIsLoggedIn(false);
        putAccessToken("");
    };

    const setAuthedUser = async () => {
        const result = await getUserLogged();

        if (result.error) {
            clearAuth();
        } else {
            setId(result.data.id);
            setName(result.data.name);
            setEmail(result.data.email);

            setIsLoggedIn(true);
        }
    };

    const login = async ({ email, password }) => {
        const result = await networkLogin({ email, password });

        if (!result.error) {
            putAccessToken(result.data.accessToken);
            setIsLoggedIn(true);
            await setAuthedUser();
        }
    };

    const logout = () => clearAuth();

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                id,
                name,
                email,
                setAuthedUser,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
