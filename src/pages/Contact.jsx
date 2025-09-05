import React from 'react'
import { motion } from 'motion/react'
import Title from "../components/Title";
import { assets } from '../assets/assets';

function Contact() {
   

  

  return (
    <div className="flex flex-col border-t border-[#5959596a] pt-10">
       <motion.div
            initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
          className="text-2xl sm:text-3xl text-center mb-8"
        >
          <Title text1={"Contact"} text2={"Us"} />
        </motion.div>

            <div className=" flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col sm:flex-row w-full max-w-5xl">
          <div className="sm:w-1/2 w-full h-64 sm:h-auto">
            <motion.img
            loading="lazy"
              initial={{  x: -40 }}
            whileInView={{  x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
              src={assets.hero2}
              className="w-full h-full object-cover "
              alt=""
            />
          </div>

          {/* right side */}

          <motion.div
          initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          className="sm:w-1/2 w-full p-8 flex flex-col justify-center ">
                <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
                className="text-2xl font-semibold text-[#1a1a1a] mb-2">
            Get in Touch
          </motion.h2>
          <motion.p
         initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
          className="text-sm text-[#595959] mb-6">
            Have questions or want to collaborate? Drop us a message — we’d love
            to hear from you.
          </motion.p>
          <form className='space-y-4'>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-[#595959] rounded-md outline-none "
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-[#595959] rounded-md outline-none"
            />

            <motion.textarea
            whileFocus={{scale:1.02}}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border border-[#595959] rounded-md outline-none "
            ></motion.textarea>

            <motion.button
              whileHover={{backgroundColor :"#7a1e04", scale: 1.02}}
           
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#9C2605] text-white py-2 rounded-md font-medium "
            >
              Send Message
            </motion.button>
          </form>
          </motion.div>
        </div>
      </div>

    
   
        </div>
  )
}

export default Contact