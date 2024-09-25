import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const LoginPage = () => {
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const { login } = useContext(AuthContext);
    const handleLoginSubmit = async () => {
        await login({ email, password });
    };

    return (
        <section className="login-page">
            <h2>Yuk, login untuk menggunakan aplikasi.</h2>
            <div className="input-login">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={setEmail}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={setPassword}
                />
                <button type="button" onClick={handleLoginSubmit}>
                    Login
                </button>
            </div>
            <p>
                Belum punya akun? <Link to="/register">Daftar di sini</Link>
            </p>
        </section>
    );
};
