import { useContext, useEffect, useState } from "react";

import { ShopContext } from "./context/ShopContext";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { useRef } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Lenis from "lenis";
import Homepage from "./pages/Homepage";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";

function App() {
  const { isSearchOpen, setIsSearchOpen } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchClick = () => {
    if (location.pathname !== "/collection") {
      navigate("/collection");
    }
    setIsSearchOpen(true);
  };

  useEffect(() => {
    if (location.pathname !== "/collection") {
      setIsSearchOpen(false);
    }
  }, [location]);

  // lenis setup
  
     const lenisRef = useRef(null);
  useEffect(() => {

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.07, // how smooth (0 - 1)
     
      smoothWheel: true,
      
     
    });
      lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time); // update Lenis each frame
      requestAnimationFrame(raf); // keep looping
    }

    requestAnimationFrame(raf);

    // cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[6vw] lg:px-[7vw] bg-[#F5EAE5] ">
      <NavBar onSearchClick={handleSearchClick} />
    <ScrollToTop lenis={lenisRef.current}/>
      <ToastContainer />
  
     <Routes>
      <Route  path="/" element={<Homepage/>} />
      <Route  path="/collection" element={<Collection/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/cart" element={<Cart/>} />
      <Route  path="/product/:productId" element={<Product/>} />
      <Route  path="/placeOrder" element={<PlaceOrder/>} />
      <Route  path="/orders" element={<Orders/>} />


    
     </Routes>
  

      <Footer />
    </div>
  );
}

export default App;
