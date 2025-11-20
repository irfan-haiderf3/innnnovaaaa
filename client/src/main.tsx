import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyInnovacareTheme } from "./styles/innovacare-theme";

// Initialize Innovacare theme on app startup
applyInnovacareTheme();

createRoot(document.getElementById("root")!).render(<App />);
