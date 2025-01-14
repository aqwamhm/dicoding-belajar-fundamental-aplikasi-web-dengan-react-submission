import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <LocaleProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </LocaleProvider>
        </AuthProvider>
    </BrowserRouter>
);
