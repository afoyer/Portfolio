import React from "react";
import { motion } from "framer-motion";
import SlidingName from "./slidingName";
function Banner(props) {
  //Might move this separatly later
  const list = [
    { name: "Je suis Aymeric", color: "red" },
    { name: "私はエメリックです。", color: "#607d8b" },
    { name: "I am Aymeric.", color: "black" },
  ];
  const list2 = [
    { name: "art.", color: "red" },
    { name: "websites.", color: "#607d8b" },
    { name: "cool things.", color: "black" },
  ];

  const container = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        delayChildren: 0.5,
        staggerChildren: list.length * 1.5,
      },
    },

    exit: { opacity: 0 },
  };
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: {
      y: -10,
      opacity: 0,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };
  return (
    <div className="banner-container">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="banner"
        exit="exit"
      >
        <motion.h1 variants={item} exit="exit">
          Hey. <br className="mobile-break" />{" "}
          <SlidingName list={list} duration={0.5} />
        </motion.h1>
        <motion.h2 variants={item}>
          I create <SlidingName list={list2} duration={0.5} />
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 6 } }}
        className="arrow-down"
      >
        <motion.a>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-chevron-down"
            animate={{ y: 10 }}
            transition={{ yoyo: Infinity, duration: 1 }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </motion.svg>{" "}
        </motion.a>
      </motion.div>
    </div>
  );
}
export default Banner;
