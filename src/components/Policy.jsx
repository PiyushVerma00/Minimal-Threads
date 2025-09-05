import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

function Policy() {
  return (
    <div className="flex flex-col sm:flex-row gap-12 sm:gap-2 text-center justify-around py-20 text-xs sm:text-sm md:text-base text-[#1a1a1a] ">
      <div>
        <motion.img
           initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          
            transition:  { type: "spring", stiffness: 140, damping: 80 ,delay:0.2},
          }}
          viewport={{amount:0.2, once:true}}
          className="w-12 m-auto mb-5"
          src={assets.exchange_icon}
          alt="exchange-icon"
        />
        <motion.div
        initial={{opacity:0, y:20}}
         viewport={{once:true}}
        whileInView={{opacity:1, y:0 , transition:{ delay:0.3,type:"spring", stiffness:180, damping:40}}}
        >
        <p className="font-semibold ">Easy Exchange Policy</p>
        <p className=" text-[#595959]">We offer hassle free exchange policy</p>
        </motion.div>
      </div>
      <div>
        <motion.img
     initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            
            transition: { type: "spring", stiffness: 140, damping: 80,delay:0.4 },
          }}
          viewport={{amount:0.2,once:true}}
          className="w-12 m-auto mb-5"
          src={assets.quality_icon}
          alt="exchange-icon"
        />
        <motion.div
        initial={{opacity:0, y:20}}
         viewport={{once:true}}
        whileInView={{opacity:1, y:0 , transition:{delay:0.5,type:"spring", stiffness:180, damping:40}}}
        >
        <p className="font-semibold ">7 Days Return Policy</p>
        <p className=" text-[#595959]">We provide 7 days free return policy </p>
        </motion.div>
      </div>
      <div>
        <motion.img
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            
            transition: { type: "spring", stiffness: 140, damping: 80 ,delay:0.6},
          }}
          viewport={{amount:0.2, once:true}}
          
          className="w-12 m-auto mb-5"
          src={assets.support_icon}
          alt="exchange-icon"
        />
        <motion.div
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0 , transition:{delay:0.7,type:"spring", stiffness:180, damping:40}}}
         viewport={{once:true}}
        >

        <p className="font-semibold ">Best Customer Support</p>
        <p className=" text-[#595959]">We Provide 24/7 Customer Support</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Policy;
