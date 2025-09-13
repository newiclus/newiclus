import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
