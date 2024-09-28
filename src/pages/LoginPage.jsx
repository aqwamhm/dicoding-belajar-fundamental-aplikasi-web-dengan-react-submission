import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LocaleContext } from "../contexts/LocaleContext";

export const LoginPage = () => {
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const { login } = useContext(AuthContext);
    const handleLoginSubmit = async () => {
        await login({ email, password });
    };

    const { locale } = useContext(LocaleContext);

    return (
        <section className="login-page">
            <h2>
                {locale == "id"
                    ? "Yuk, login untuk menggunakan aplikasi."
                    : "Login to use app, please."}
            </h2>
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
                {locale == "id"
                    ? "Belum punya akun?"
                    : "Do not have an account?"}{" "}
                <Link to="/register">
                    {locale == "id" ? "Daftar di sini" : "Register here"}
                </Link>
            </p>
        </section>
    );
};
