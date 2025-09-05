import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

function Hero() {
  const navigate = useNavigate();

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delay: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20, duration: 1 },
    },
  };

  return (
    <div>
      <div className=" w-full">
        {/* 👉 Mobile-only image (always comes first on small screens) */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <img
            src={assets.hero3}
            loading="eager"
            className="w-full rounded-md md:hidden"
            alt="hero-mobile"
          />
        </motion.div>

        <motion.div
          className=" hidden md:grid md:grid-cols-3 gap-4  mb-4 lg:mb-0  md:h-[500px] lg:h-[600px] overflow-hidden"
          initial={"hidden"}
          whileInView={"visible"}
          variants={containerVariant}
          viewport={{ once: true }}
        >
          <motion.img
            variants={item}
            loading="eager"
            src={assets.hero1}
            className=" w-full rounded-md    "
            alt=""
          />

          <motion.img
            src={assets.hero2}
            variants={item}
            loading="eager"
            className=" w-full rounded-md "
            alt=""
          />

          <motion.img
            src={assets.hero3}
            variants={item}
            loading="eager"
            className=" w-full rounded-md"
            alt=""
          />
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row  justify-between  gap-2 md:gap-8 items-center   ">
        <motion.h1
          className="font-extrabold  text-4xl sm:text-[clamp(2.5rem,6vw,4.5rem)] text-center md:text-left  leading-tight "
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 30 }}
          viewport={{ once: true}}
        >
          WHERE STYLE
          <br />
          <span className="whitespace-nowrap">MEETS SIMPLICITY</span>
        </motion.h1>

        <div className="  text-center md:text-left max-w-md">
          <motion.p
            className=" text-sm  md:text-[clamp(0.75rem,1vw,0.85rem)] leading-relaxed text-[#595959]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 30 }}
            viewport={{ once: true }}
          >
            Discover A Curated Collection Of Fashion-forward Pieces Designed To
            Elevate Your Style. From Everyday Essentials To Statement Looks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 30 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: "#862408" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex place-items-center mt-4 md:mt-2  px-4 py-3  rounded-full bg-[#9C2605]  text-white text-sm md:text-[clamp(0.25rem,1vw,0.85rem)] font-medium "
            
          >
            <Link to="/collection"  className="flex">
              Explore More
              <img
                src={assets.arrow_icon}
                className="w-5 rotate-45"
                alt="icon"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
