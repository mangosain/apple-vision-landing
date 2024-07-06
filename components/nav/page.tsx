"use client";

import { motion } from "framer-motion";

const Nav = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/3 z-20 fixed sm:left-1/2 sm:transform sm:-translate-x-1/2 my-10 flex gap-2 flex-col sm:flex-row px-5 md:px-0">
      <nav className="flex-1 bg-white/40 h-10 py-2 md:py-0 px-7 rounded-full backdrop-blur-md shadow-lg">
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

      <div className="flex gap-2">
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
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="text-black rounded-full px-6 bg-white/40 backdrop-blur-md flex-1 sm:flex-none py-2 md:py-0 shadow-lg"
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
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="text-white bg-indigo-600 rounded-full px-6 flex-1 sm:flex-none py-2 md:py-0 shadow-lg"
        >
          Buy
        </motion.button>
      </div>
    </div>
  );
};

export default Nav;
