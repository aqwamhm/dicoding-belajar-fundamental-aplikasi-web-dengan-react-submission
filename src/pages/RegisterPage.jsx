import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";

export const RegisterPage = () => {
    const [name, handleNameChange] = useInput("");
    const [email, handleEmailChange] = useInput("");
    const [password, handlePasswordChange] = useInput("");
    const [confirmPassword, handleConfirmPasswordChange] = useInput("");
    const navigate = useNavigate();

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
            <h2>Isi form untuk mendaftar akun.</h2>
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
                Sudah punya akun? <Link to="/">Login di sini</Link>
            </p>
        </section>
    );
};
