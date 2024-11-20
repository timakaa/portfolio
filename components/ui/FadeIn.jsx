"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children, index = 0 }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Replace useLayoutEffect with useEffect and add safety check
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Remove window.innerWidth from dependencies

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: windowWidth > 768 ? (index % 3) * 0.1 : 0,
      }}
      viewport={{ amount: 0.9 }}
      className='w-full'
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
