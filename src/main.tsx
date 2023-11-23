import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { ContextProvider } from "./context/Provider.tsx";
import { ModalContextProvider } from "./context/ModalContext.tsx";
import LoaderComponent from "./components/LoaderComponent.tsx";

const DynamicApp = lazy(() => import("./App.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <ModalContextProvider>
        <Suspense fallback={<LoaderComponent />}>
          <DynamicApp />
        </Suspense>
      </ModalContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
