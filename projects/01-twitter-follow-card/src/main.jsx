import React, { StrictMode } from "react";  // Asegúrate de importar React
import { createRoot } from "react-dom/client";
import { App } from "./App";
import './index.css'

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
