import { useContext } from "react";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { MdDarkMode, MdLightMode, MdTranslate } from "react-icons/md";
import { LocaleContext } from "../contexts/LocaleContext";
import { ThemeContext } from "../contexts/ThemeContext";

export const Header = () => {
    const { isLoggedIn, logout, name } = useContext(AuthContext);
    const { locale, toggleLocale } = useContext(LocaleContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header>
            <h1>
                <Link to="/">
                    {locale == "id" ? "Aplikasi Catatan" : "Notes App"}
                </Link>
            </h1>
            {isLoggedIn ? (
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to="/archives">
                                {locale == "id" ? "Terarsip" : "Archived"}
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
            <button
                className="toggle-theme"
                type="button"
                onClick={toggleTheme}
            >
                {theme == "light" ? <MdLightMode /> : <MdDarkMode />}
            </button>
            <button
                className="toggle-locale"
                type="button"
                onClick={toggleLocale}
            >
                <MdTranslate />
            </button>
            {isLoggedIn ? (
                <button
                    className="button-logout"
                    type="button"
                    onClick={logout}
                >
                    <LuLogOut />
                    {name}
                </button>
            ) : null}
        </header>
    );
};

export default Header;
