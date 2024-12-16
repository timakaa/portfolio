"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ProjectsPageTitle = () => {
  const router = useRouter();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: !isMobile ? -100 : 0 }}
        whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.5 }}
        className='flex gap-x-2 items-center'
      >
        <h2
          className='text-4xl md:text-5xl font-bold bg-gradient-to-r flex justify-start'
          initial={{ opacity: 0, x: !isMobile ? -100 : 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ amount: 0.5 }}
        >
          Projects
        </h2>
        <Button variant='shine' className='group' onClick={() => router.back()}>
          <div className='flex items-center gap-x-1'>
            <ChevronLeft
              className='group-hover:-translate-x-0.5 duration-200 size-[16px]'
              size={16}
            />
            <span className='text-xs md:text-sm'>Back</span>
          </div>
        </Button>
      </motion.div>
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
