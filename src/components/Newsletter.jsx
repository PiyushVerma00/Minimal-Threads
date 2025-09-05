import React from "react";

import { motion } from "motion/react";

function Newsletter() {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const delayParentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2} },
  };

  const delayChildVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={delayParentVariants}
      initial={"hidden"}
      whileInView="visible"
      viewport={{amount:0.2,once:true}}
      className="text-center text-[#1a1a1a] py-5"
    >
      <motion.p
        variants={delayChildVariant}
        className="font-medium text-lg md:text-xl lg:text-2xl mb-2 "
      >
        Subscribe Now & Get 20% Off
      </motion.p>
      <motion.p  variants={delayChildVariant} className="text-[#595959] text-xs sm:text-sm ">
        Sign up to receive exclusive previews, style edits, and timeless pieces
        straight to your inbox.
      </motion.p>
      <motion.form
       variants={delayChildVariant}
        onSubmit={SubmitHandler}
        className="flex w-full sm:w-1/2 mx-auto my-6 border items-center pl-3"
      >
        <input
          type="email"
          placeholder="enter your email"
          required
          className="w-full outline-none  text-sm  "
        />
        <motion.button
        whileHover={{backgroundColor:"#862408"}}
          type="submit"
          className="text-white bg-[#9C2605] cursor-pointer text-xs px-8 py-3 "
        >
          SUBSCRIBE
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Newsletter;
