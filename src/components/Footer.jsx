import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavLink = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <div className="text-[#595959] grid md:grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm mt-30 ">
        {/*company brief */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.4, ease: "easeOut" },
          }}
          viewport={{ amount: 0.2,once:true }}
        >
          <button onClick={() => handleNavLink("/")}>
            {" "}
            <img className="w-36 mb-5" src={assets.logo} alt="logo" />
          </button>
          <p className="w-full leading-relaxed  lg:w-3/4 ">
            Minimal Threads is a modern clothing brand rooted in timeless design
            and effortless elegance. Each piece is thoughtfully crafted with
            premium fabrics, clean silhouettes, and subtle details that elevate
            the everyday. Designed for those who value quality, comfort, and
            style that transcends trends.
          </p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
             viewport={{ once:true }}
         

            
            className="flex gap-3 mt-3"
          >
            <Link to="#" aria-label="Facebook">
              <motion.img
                whileHover={{ scale: 1.2,}}
            whileTap={{ scale: 0.9, }}
            transition={{ type: "spring", stiffness: 100 }}
                src={assets.facebook_icon}
                className=" w-10 cursor-pointer"
                alt=""
              />
            </Link>
            <Link to="#" aria-label="Twitter">
              <motion.img
               whileHover={{ scale: 1.2,}}
            whileTap={{ scale: 0.9, }}
            transition={{ type: "spring", stiffness: 100 }}
                className=" w-10  cursor-pointer"
                src={assets.twitter_icon}
                alt=""
              />
            </Link>
            <Link to="#" aria-label="Linkedin">
              <motion.img
               whileHover={{ scale: 1.2,}}
            whileTap={{ scale: 0.9, }}
            transition={{ type: "spring", stiffness: 100 }}
                className="w-10 cursor-pointer "
                src={assets.linkedin_icon}
                alt=""
              />
            </Link>
          </motion.div>
        </motion.div>

        {/*company details */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.4, ease: "easeOut" },
          }}
          viewport={{ amount: 0.2,once:true }}
        >
          <p className="font-semibold text-lg mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2">
            <Link to='/'>
              <button
                
                className="hover:text-[#1a1a1a]"
              >
                Home
              </button>
            </Link>
            <Link to='/about'>
              <button
                
                className="hover:text-[#1a1a1a]"
              >
                About
              </button>
            </Link>
            <Link>
              <button className="hover:text-[#1a1a1a]">Delivery</button>
            </Link>
            <Link>
              <button className="hover:text-[#1a1a1a]">Privacy policy</button>
            </Link>
          </ul>
        </motion.div>
        {/*contact details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.4, ease: "easeOut" },
          }}
         viewport={{ amount: 0.2,once:true }}
        >
          <p className="font-semibold text-lg mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 ">
            <li>
              <a className="hover:text-[#1a1a1a]">+91-7854416500</a>
            </li>
            <li>
              <a
                href="mailto:contact@minimalthreads.com"
                className="hover:text-[#1a1a1a]"
              >
                contact@minimalthreads.com
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
      {/*copyright */}
      <div>
        <hr className=" bg-[#5959596a] border-none h-[1px]" />
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4  , duration: 0.4, ease: "easeOut" },
          }}
          viewport={{amount:0.2, once:true}}
        className="text-center py-3 text-[#595959] text-xs sm:text-base">
          CopyRight &copy; {new Date().getFullYear()} Minimal Threads. All
          rights reserved.
        </motion.p >
      </div>
    </>
  );
}

export default Footer;
