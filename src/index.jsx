import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
);
