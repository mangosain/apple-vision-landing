"use client";

import { motion } from "framer-motion";

const Nav = () => {
  return (
    <div className="w-1/3 z-20 fixed left-1/2 transform -translate-x-1/2 my-10 flex gap-2">
      <nav className="flex-1 bg-white/40 h-10 px-7 rounded-full backdrop-blur-md">
        <ul className="flex justify-between items-center h-full text-black">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Overview</a>
          </li>
          <li>
            <a href="/">Tech Specs</a>
          </li>
        </ul>
      </nav>

      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: 0.25,
            type: "spring",
            stiffness: 90,
          },
        }}
        className="text-black rounded-full px-6 bg-white/40 backdrop-blur-md"
      >
        Book a demo
      </motion.button>
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: 0.5,
            type: "spring",
            stiffness: 90,
          },
        }}
        className="text-white bg-indigo-600 rounded-full px-6"
      >
        Buy
      </motion.button>
    </div>
  );
};

export default Nav;
