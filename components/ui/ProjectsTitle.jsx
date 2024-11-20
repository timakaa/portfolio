"use client";

import { Button } from "./button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsTitle = () => {
  return (
    <div className='flex justify-between items-center'>
      <motion.h2
        className='text-6xl font-bold bg-gradient-to-r flex justify-center'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.5 }}
      >
        <Button variant='shine'>
          <span>View All</span>
          <ChevronRight className='ml-2 h-4 w-4' />
        </Button>
      </motion.div>
    </div>
  );
};

export default ProjectsTitle;
