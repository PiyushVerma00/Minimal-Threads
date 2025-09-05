import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Lenis from "lenis";

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
      <AnimatedRoutes />

      <Footer />
    </div>
  );
}

export default App;
