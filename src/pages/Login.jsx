import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="flex flex-col border-t border-[#5959596a] pt-10">
      <div className="flex items-center justify-center bg-[#F5EAE5] px-4 py-6 min-h-[80vh]">
        <motion.div
          layout
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8"
        >
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeUp}
                className="flex flex-col"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#1a1a1a]">
                  Welcome Back
                </h2>
                <p className="text-center text-sm text-[#595959] mt-2">
                  Sign in to continue your journey with Minimal Threads.
                </p>

                <form className="mt-6 space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-[#595959] rounded-md outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-[#595959] rounded-md outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#9C2605] text-white py-2 rounded-md font-medium hover:bg-[#7a1e04] transition-colors"
                  >
                    Log In
                  </button>
                </form>

                <div className="flex justify-between text-xs text-[#595959] mt-4">
                  <button
                    className="hover:text-[#1a1a1a] transition-colors"
                    onClick={() => setIsLogin(false)}
                  >
                    Don’t have an account? Sign Up
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeUp}
                className="flex flex-col"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#1a1a1a]">
                  Create Your Account
                </h2>
                <p className="text-center text-sm text-[#595959] mt-2">
                  Join us and embrace a wardrobe that feels effortless.
                </p>

                <form className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border border-[#595959] rounded-md outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-[#595959] rounded-md outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-[#595959] rounded-md outline-none"
                  />
                  <motion.button
                    whileHover={{ backgroundColor: "#7a1e04", scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-[#9C2605] text-white py-2 rounded-md font-medium "
                  >
                    Sign Up
                  </motion.button>
                </form>

                <div className="flex justify-between text-xs text-[#595959] mt-4">
                  <button
                    className="hover:text-[#1a1a1a] transition-colors"
                    onClick={() => setIsLogin(true)}
                  >
                    Already have an account? Log In
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
