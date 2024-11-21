"use client";
import { motion } from "framer-motion";
import { BentoCard } from "./bento-grid";
import { isMobile } from "react-device-detect";

const ProjectsList = ({ features }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 auto-rows-[22rem] gap-4 w-full mt-10'>
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{
            opacity: 0,
            x: !isMobile ? (idx % 2 === 0 ? -100 : 100) : 0,
          }}
          whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ amount: 0.5 }}
          className='w-full'
        >
          <BentoCard className={"w-full"} {...feature} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsList;
