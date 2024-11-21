"use client";

import { Button } from "./button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const ProjectsTitle = () => {
  return (
    <div className='flex justify-between items-center'>
      <motion.h2
        className='text-4xl md:text-6xl font-bold bg-gradient-to-r flex justify-center'
        initial={{ opacity: 0, x: !isMobile ? -100 : 0 }}
        whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: !isMobile ? 100 : 0 }}
        whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.5 }}
      >
        <Button variant='shine'>
          <span>See All</span>
          <ChevronRight className='ml-2 h-4 w-4' />
        </Button>
      </motion.div>
    </div>
  );
};

export default ProjectsTitle;
