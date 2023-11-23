import React,{Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { ContextProvider } from "./context/Provider.tsx";
import { ModalContextProvider } from "./context/ModalContext.tsx";

const DynamicApp = lazy(()=>import('./App.tsx'))

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <ModalContextProvider>
        <Suspense fallback={<p>Loading.....</p>}>
           <DynamicApp />
        </Suspense>
      </ModalContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
