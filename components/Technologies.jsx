"use client";

import Image from "next/image";
import IconCloud from "./ui/icon-cloud";
import Technology from "./ui/technology";
import { motion } from "framer-motion";
import { technologies } from "@/lib/technologies";
import { slugs } from "@/lib/slugs";
import FadeIn from "./ui/FadeIn";
import { isMobile } from "react-device-detect";

const Technologies = () => {
  return (
    <section
      className='max-w-2xl lg:max-w-5xl py-28 md:py-20 px-4 md:px-0 mx-auto'
      id='tech-stack'
    >
      <div className='flex justify-center items-center gap-x-32'>
        <motion.h2
          initial={{ opacity: 0, x: !isMobile ? -100 : 0 }}
          whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ amount: 0.5 }}
          className={
            "text-4xl md:text-6xl font-bold bg-gradient-to-r flex justify-center"
          }
        >
          Tech Stack
        </motion.h2>
        <div className='hidden justify-center lg:flex'>
          <motion.div
            initial={{ opacity: 0, x: !isMobile ? 100 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 0.5 }}
            className='relative flex max-w-md size-full items-center justify-center overflow-hidden rounded-lg bg-background '
          >
            <IconCloud iconSlugs={slugs} />
          </motion.div>
        </div>
      </div>
      <div className=''>
        <div>
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, y: !isMobile ? 20 : 0 }}
                whileInView={{ opacity: 1, y: !isMobile ? 0 : 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ amount: 0.9 }}
                className='text-center text-2xl font-bold mb-6 mt-10'
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.div>
              <div className='grid grid-cols-2 lg:grid-cols-3 w-full gap-2'>
                {items.map((technology, index) => (
                  <FadeIn key={technology.name} index={index}>
                    <Technology
                      {...technology}
                      icon={
                        <Image
                          src={technology.icon}
                          alt={technology.name}
                          className='object-contain w-[42px] h-[42px]'
                          width={42}
                          height={42}
                        />
                      }
                    />
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
