import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CoffeeCartProvider } from "./contexts/CoffeeCartContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoffeeCartProvider>
        <App />
      </CoffeeCartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
