"use client";

import { Button } from "./button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Link from "next/link";

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
        className='group'
        initial={{ opacity: 0, x: !isMobile ? 100 : 0 }}
        whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.5 }}
      >
        <Link href='/projects'>
          <Button asChild variant='shine'>
            <div className='flex items-center gap-x-1 w-full'>
              <span className='text-xs md:text-sm'>See All</span>
              <ChevronRight
                className='group-hover:translate-x-0.5 duration-200'
                size={16}
              />
            </div>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectsTitle;
