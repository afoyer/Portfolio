import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

//MenuItem is just an Anchor animated tag. Can set href and name

//Framer Motion Variants. May remove if I want to make it a prop
const itemVariants = {
  open: {
    x: 0,
    y: 0,
    opacity: 1,

    color: "#FFFFFF",
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
  collapsed: {
    opacity: 1,

    color: "#212121",
    transition: { delay: 0.1, duration: 0.2 },
  },
};

function MenuItem(props) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link to={props.link}>
        <motion.a
          variants={itemVariants}
          href={props.link}
          className="menuItem"
        >
          {props.name}
        </motion.a>
      </Link>
    </motion.div>
  );
}
export default MenuItem;
