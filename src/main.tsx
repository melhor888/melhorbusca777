import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { startNotificationScheduler } from "./utils/notifications";

createRoot(document.getElementById("root")!).render(<App />);

// Start push notifications if enabled
startNotificationScheduler();
