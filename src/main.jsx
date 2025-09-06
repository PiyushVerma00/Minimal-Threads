import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";


const isProd = import.meta.env.MODE === "production"; 
const Router = isProd ? HashRouter : BrowserRouter;
createRoot(document.getElementById("root")).render(
  <Router basename={isProd? "/Minimal-Threads" :'/'}>
    <ShopContextProvider>
      <CartContextProvider>
         
        <App />
      </CartContextProvider>
    </ShopContextProvider>
  </Router>
);
