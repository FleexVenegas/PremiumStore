import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Styles
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

//Components
import Visitors from "./routes/visitors/Visitors";
import { ContextProvider } from "./context/ContextProvider";

export default function RootRoute() {
    return (
        <main>
            <BrowserRouter>
                <Visitors />
            </BrowserRouter>
        </main>
    );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ContextProvider>
            <RootRoute />
        </ContextProvider>
    </React.StrictMode>
);
