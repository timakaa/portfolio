"use client";

import Image from "next/image";
import IconCloud from "./ui/icon-cloud";
import Technology from "./ui/technology";
import { motion } from "framer-motion";
import { technologies } from "@/lib/technologies";
import { useState, useEffect } from "react";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "jest",
  "docker",
  "git",
  "gitlab",
  "figma",
  "graphql",
  "python",
  "sass",
  "jquery",
  "nestjs",
  "mongodb",
  "redis",
  "mysql",
  "tailwindcss",
  "npm",
  "redux",
  "reactquery",
  "linux",
  "ubuntu",
  "fastapi",
  "webpack",
  "sqlite",
  "nginx",
  "mobx",
];

const Technologies = () => {
  return (
    <section className='max-w-7xl my-20'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.9 }}
        className='text-center text-5xl font-bold'
      >
        Tech Stack
      </motion.h2>
      <div className='flex flex-col items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ amount: 0.5 }}
          className='relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 '
        >
          <IconCloud iconSlugs={slugs} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.9 }}
          className='text-center text-2xl font-bold mb-6'
        >
          Frontend
        </motion.div>
        <div className='grid grid-cols-3 gap-2'>
          {technologies.frontend.map((technology, index) => (
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
        <div className='text-center text-2xl font-bold mb-6 mt-10'>Backend</div>
        <div className='grid grid-cols-3 gap-2'>
          {technologies.backend.map((technology, index) => (
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
        <div className='text-center text-2xl font-bold mb-6 mt-10'>DevOps</div>
        <div className='grid grid-cols-3 gap-2'>
          {technologies.devops.map((technology, index) => (
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
        <div className='text-center text-2xl font-bold mb-6 mt-10'>
          Databases
        </div>
        <div className='grid grid-cols-3 gap-2'>
          {technologies.database.map((technology, index) => (
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
    </section>
  );
};

export default Technologies;

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
    >
      {children}
    </motion.div>
  );
};
