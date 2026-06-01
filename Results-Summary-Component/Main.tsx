import { createRoot } from "react-dom/client";
import App from "./Components/App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Can't find Root element in DOM");
}

createRoot(rootElement).render(<App />);