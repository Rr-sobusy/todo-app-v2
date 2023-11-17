import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { ContextProvider } from "./context/Provider.tsx";
import { ModalContextProvider } from "./context/ModalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
