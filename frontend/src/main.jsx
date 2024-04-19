import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Context/StoreContext";
import RecommendContextProvider from "./Context/RecommendContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <RecommendContextProvider>
        <App />
      </RecommendContextProvider>
    </StoreContextProvider>
  </BrowserRouter>
);
