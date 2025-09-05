import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import { HashRouter as Router } from "react-router-dom";

const Router = process.env.Node_ENV === "production"
      ? HashRouter
      :BrowserRouter
createRoot(document.getElementById("root")).render(
  <Router>
    <ShopContextProvider>
      <CartContextProvider>
         
        <App />
      </CartContextProvider>
    </ShopContextProvider>
  </Router>
);
