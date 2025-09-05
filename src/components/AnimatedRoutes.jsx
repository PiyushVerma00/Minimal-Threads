import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import PlaceOrder from "../pages/PlaceOrder";
import { AnimatePresence, motion } from "motion/react";
import Homepage from "../pages/Homepage";
import Orders from "../pages/Orders";

const pageVariants = {
 initial: { opacity: 0, scale: 0.99},
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.99 },
};

const pageTransition = { duration: 0.4, ease: "easeInOut" };

const routesConfig = [
  { path: "/", element: <Homepage/> },
  { path: "/collection", element: <Collection /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/product/:productId", element: <Product /> },
  { path: "/cart", element: <Cart /> },
  { path: "/placeOrder", element: <PlaceOrder /> },
  { path: "/login", element: <Login /> },
  { path: "/orders", element: <Orders /> },
];





function AnimatedRoutes() {
  const location  = useLocation();
 
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routesConfig.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                // initial="initial"
                // animate="animate"
                // exit="exit"
                // variants={pageVariants}
                // transition={pageTransition}
                 
              >
                {element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
