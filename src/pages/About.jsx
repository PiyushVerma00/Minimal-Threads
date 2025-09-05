import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";
import { motion } from "motion/react";

function About() {
  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: (delay = 0) => ({
      y: 0,
      opacity: 1,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="flex flex-col border-t border-[#5959596a] pt-10 ">
      <motion.div
        className="text-2xl sm:text-3xl text-center overflow-hidden whitespace-nowrap "
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.2}}
      >
        <Title text1="OUR" text2="STORY" />
      </motion.div>

      <section className="flex flex-col sm:flex-row  gap-4 sm:gap-8 my-3  ">
        {/* left side */}
        <div className="overflow-hidden sm:w-1/2 rounded-md ">
          <motion.img
           loading="eager"
            initial={{ scale: 2 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 60 }}
            viewport={{once:true,amount:0.2}}
            src={assets.About_1}
            alt=""
            className="w-full h-full object-cover   "
          />
        </div>
        {/* right side */}
        <div className="sm:w-1/2 text-center sm:text-left  ">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{once:true,amount:0.2}}
            className="font-semibold text-xl sm:2xl  lg:text-3xl"
          >
            Where Style Meets Simplicity
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{once:true,amount:0.2}}
            className="text-sm sm:text-lg mt-3 sm:mt-6 text-[#595959]"
          >
            In a world overflowing with trends, patterns, and noise, we chose a
            different path{" "}
            <span className="font-medium text-[#1a1a1a] ">
              —a quieter, more refined approach to men’s fashion.
            </span>{" "}
            Minimal Threads was created with a single philosophy:{" "}
            <motion.span
              initial={{ opacity: 0, x:30 }}
              whileInView={{ opacity: 1, x:0}}
              transition={{ delay:1.2, duration: 1, ease: "easeOut" }}
              viewport={{once:true}}
              className="italic font-medium text-[#1a1a1a] inline-block "
            >
            less,but better.
            </motion.span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{once:true,amount:0.2}}
            className="text-sm sm:text-lg mt-3 text-[#595959]"
          >
            We believe that style shouldn’t be complicated.{" "}
            <span className="font-medium text-[#1a1a1a]">
              {" "}
              It should feel effortless.{" "}
            </span>{" "}
            That’s why every piece we create is designed with clean lines,
            premium fabrics, and timeless silhouettes that never go out of
            style. Our clothes are not about chasing seasons—they’re about
            building a wardrobe that lasts.
          </motion.p>
        </div>
      </section>

      {/* Why we started section */}
      <section className="mt-20 text-[#595959]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{once:true,amount:0.2}}
          className="text-2xl sm:text-3xl text-center  "
        >
          <Title text1="WHY WE" text2="STARTED" />
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{once:true,amount:0.2}}
          className="text-center text-sm sm:text-base"
        >
          We noticed a gap in men’s fashion{" "}
          <span className="font-medium text-[#1a1a1a]">
            —too many clothes, but not enough real essentials.
          </span>{" "}
          Wardrobes filled with trends that fade in months, fabrics that lose
          their shape, and designs that lack purpose. Minimal Threads was born
          to change that. We wanted to craft clothing that feels as good as it
          looks, pieces that elevate your everyday without screaming for
          attention. Clothes you can wear to a casual brunch, a work meeting, or
          a night out—{" "}
          <span className="font-medium text-[#1a1a1a]">
            versatile, functional, and timeless.
          </span>
        </motion.p>
      </section>

      {/* built for modern men */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{once:true,amount:0.2}}
        className="text-center  text-2xl sm:text-3xl mt-20"
      >
        <Title text1="BUILT FOR" text2="MODERN MEN" />
      </motion.div>

      <section className="text-[#595959] my-3  flex flex-col sm:flex-row-reverse gap-4 sm:gap-6">
        <div className=" sm:w-1/2 overflow-hidden mb-3 rounded-md">
          <motion.img
           loading="eager"
              initial={{ scale: 2 }}
            whileInView={{ scale: 1 }}
            viewport={{once:true,amount:0.2}}
            transition={{ type: "spring", stiffness: 80, damping: 60 }}
            src={assets.About_2}
            className="w-full h-full   object-cover "
            alt=""
          />
        </div>
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{once:true,amount:0.2}}
            className="text-sm sm:text-base"
          >
            Minimal Threads isn’t just clothing—it’s a mindset. It’s for the man
            who values{" "}
            <span className="font-medium text-[#1a1a1a]">
              {" "}
              subtlety over flash, comfort over complication,{" "}
            </span>
            and Our pieces are designed to transition seamlessly between moments
            —work, travel, leisure—{" "}
            <span className="font-medium text-[#1a1a1a]">
              making your life simpler, while keeping you sharp.
            </span>{" "}
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.3, duration:0.8 , ease: "easeInOut" }}
            viewport={{once:true,amount:0.2}}
            className="text-[#1a1a1a] font-semibold text-lg mt-6 overflow-hidden whitespace-nowrap"
          >
            The Journey Ahead
          </motion.h3>
          <motion.p 
           variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{once:true,amount:0.2}}
          className="text-sm">
            Minimal Threads is more than a brand—it’s a community of men who
            believe in quiet confidence, refined simplicity, and timeless style.
            We’re still growing, still evolving, but our promise remains the
            same:To create clothing that looks good, feels better, and lasts
            longer.
          </motion.p>
        </div>
      </section>

      <div className="mt-10">
        <Newsletter />
      </div>
    </div>
  );
}

export default About;
