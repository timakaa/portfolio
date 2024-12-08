"use client";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const ProjectsPageTitle = () => {
  return (
    <div>
      <motion.h2
        className='text-4xl md:text-6xl font-bold bg-gradient-to-r flex justify-start'
        initial={{ opacity: 0, x: !isMobile ? -100 : 0 }}
        whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.h3
        className='text-xl text-neutral-500 md:text-2xl font-semibold mt-2 bg-gradient-to-r flex justify-start'
        initial={{ opacity: 0, x: !isMobile ? -100 : 0 }}
        whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.5 }}
      >
        These are my projects on which I try to work actively.
      </motion.h3>
    </div>
  );
};

export default ProjectsPageTitle;
