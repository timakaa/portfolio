"use client";

import { motion } from "framer-motion";
import { isMobile, isBrowser } from "react-device-detect";

const FadeIn = ({ children, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: !isMobile ? 10 : 0 }}
      whileInView={{ opacity: 1, y: !isMobile ? 0 : 0 }}
      transition={{
        duration: 0.3,
        delay: isBrowser ? (index % 3) * 0.1 : 0,
      }}
      viewport={{ amount: 0.9 }}
      className='w-full'
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
