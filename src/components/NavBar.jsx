import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion, spring } from "motion/react";
function NavBar({ onSearchClick }) {
  const [visible, setVisible] = useState(false);
  const { total_items } = useCart();
  const navigate = useNavigate();

  const delayParentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const delayChildVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease:"easeOut" } },
  };

  const sideBarVariant = {
    closed: {
      opacity: 0,
      width: 0,
  
    },
    open: {
      opacity: 1,
      width: "100%",
      transition: {
        ease:"easeOut",
        duration:0.4,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="flex justify-between items-center py-5 ">
        <NavLink to="/">
          {" "}
          <motion.img
            src={assets.logo}
            className="w-36"
            alt="logo"
            initial={{ opacity: 0, x: -80, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1.05 }}
            transition={{
              type: spring,
              stiffness: 200,
              damping: 50,
            }}
          />
        </NavLink>

        <motion.ul
          variants={delayParentVariants}
          initial="hidden"
          animate="visible"
          className="hidden sm:flex gap-6 text-[#1A1A1A] text-sm"
        >
          {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item, i) => (
            <motion.li
              key={i}
              variants={delayChildVariant}
              className="flex flex-col gap-1 items-center justify-between"
            >
              <NavLink to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}>
                <p>{item}</p>
                <hr className="w-2/4 mx-auto border-none h-[1.5px] bg-[#9C2605] hidden  " />
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={delayParentVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-6"
        >
          <motion.img
            variants={delayChildVariant}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100 }}
            src={assets.search_icon}
            onClick={onSearchClick}
            className="w-5 cursor-pointer "
            alt="search"
          />
          <motion.div className="group relative " variants={delayChildVariant}>
            <Link to='/login'>
         
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100 }}
              src={assets.profile_icon}
              className="w-5 cursor-pointer "
              alt="profile"
            />
               </Link>
            <div className="group-hover:block hidden absolute right-0 pt-4 ">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white rounded-xl text-[#9C2605]">
                <p className="text-md cursor-pointer hover:text-[#701a03]">
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="text-md cursor-pointer hover:text-[#701a03]"
                >
                  Orders
                </p>
                <p className="text-md cursor-pointer hover:text-[#701a03]">
                  Logout
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={delayChildVariant}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Link to="/cart" className="relative">
              <img
                src={assets.cart_icon}
                className="w-5 cursor-pointer "
                alt="cart"
              />
              <span className="absolute right-[-5px] bottom-[-3px] w-4  aspect-square text-center leading-4 bg-[#9C2605] text-white rounded-full text-[8px]">
                {total_items}
              </span>
            </Link>
          </motion.div>
          <motion.img
            whileHover={{ scale: 1.2,}}
            whileTap={{ scale: 0.9, }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={delayChildVariant}
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="sm:hidden w-6 cursor-pointer text-md"
            alt="menu"
          />
        </motion.div>

        {/* side bar menu for small screens*/}

        <motion.div
          variants={sideBarVariant}
          initial="closed"
          whileHover={{ scale: 1.2,}}
            whileTap={{ scale: 0.9, }}
            transition={{ type: "spring", stiffness: 100 }}
          animate={visible ? "open" : "closed"}
          className="mob-nav absolute top-0 right-0 bottom-0 overflow-hidden bg-[#F5EAE5] z-50"
        >
          <div className="flex flex-col">
            <button
              onClick={() => setVisible(false)}
              className="flex items-center gap-3 transition ease-in p-3 text-[#1a1a1a] "
            >
              <img
                src={assets.dropdown_icon}
                className="h-3 rotate-90"
                alt="dropdown-icon"
              />
              <p className="text-lg">Back</p>
            </button>
            {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item, i) => (
              <motion.div key={i} variants={linkVariants}>
                <NavLink
                  onClick={() => setVisible(false)}
                  className="py-4 pl-6 block"
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default NavBar;
