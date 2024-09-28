import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import { useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";

export const RegisterPage = () => {
    const [name, handleNameChange] = useInput("");
    const [email, handleEmailChange] = useInput("");
    const [password, handlePasswordChange] = useInput("");
    const [confirmPassword, handleConfirmPasswordChange] = useInput("");
    const navigate = useNavigate();
    const { locale } = useContext(LocaleContext);

    const handleRegsiterSubmit = async () => {
        if (password !== confirmPassword) {
            alert("Password and password confirm must be same.");
            return;
        }

        const result = await register({
            name,
            email,
            password,
            confirmPassword,
        });

        if (!result.error) {
            navigate("/");
        }
    };

    return (
        <section className="regsiter-page">
            <h2>
                {locale == "id"
                    ? "Isi form untuk mendaftar akun."
                    : "Fill the form to register an account"}
            </h2>
            <div className="input-register">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                <button type="button" onClick={handleRegsiterSubmit}>
                    Register
                </button>
            </div>
            <p>
                {locale == "id"
                    ? "Sudah punya akun?"
                    : "Already have an account"}{" "}
                <Link to="/">
                    {locale == "id" ? "Login di sini" : "Login here"}
                </Link>
            </p>
        </section>
    );
};
