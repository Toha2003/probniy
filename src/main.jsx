import { createRoot } from "react-dom/client";
import LanguageContexProvider from "./context/LanguageContex.jsx";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <LanguageContexProvider >
    <App />
  </LanguageContexProvider>
);
