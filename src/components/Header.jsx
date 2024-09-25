import { useContext } from "react";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Header = () => {
    const { logout, name } = useContext(AuthContext);

    return (
        <header>
            <h1>
                <Link to="/">Aplikasi Catatan</Link>
            </h1>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/archives">Terarsip</Link>
                    </li>
                </ul>
            </nav>
            <button className="button-logout" type="button" onClick={logout}>
                <LuLogOut />
                {name}
            </button>
        </header>
    );
};

export default Header;
