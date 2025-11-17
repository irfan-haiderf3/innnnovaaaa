import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeTheme } from "./lib/theme-switcher";
import { applyBrandTheme } from "./config/branding";

// Initialize healthcare theme on app startup
initializeTheme();
applyBrandTheme();

createRoot(document.getElementById("root")!).render(<App />);
