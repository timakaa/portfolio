"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import BlurIn from "./ui/blur-in";
import { motion } from "framer-motion";
import Socials from "./ui/Socials";

const Hero = () => {
  return (
    <div className='grid-background relative px-6 md:px-20'>
      <div className='min-h-[calc(100vh-110px)] grid place-items-center max-w-2xl md:max-w-5xl mx-auto'>
        <div>
          <h2 className='text-center' id='hero-first-word'>
            <BlurIn
              delay={0.3}
              className={"!text-lg !font-medium"}
              word={"Hello, I'm Tima"}
            />
          </h2>
          <h1 className='text-center'>
            <BlurIn
              delay={0.3}
              className={"text-4xl md:text-7xl inline font-bold"}
              word={
                <span>
                  Fast <br className='md:hidden' />
                </span>
              }
            />
            <BlurIn
              className={
                "text-4xl md:text-7xl font-bold bg-gradient-to-r inline from-blue-400 via-blue-600 to-blue-800 text-transparent bg-clip-text bg-300% animate-gradient"
              }
              word={"Design & Web Development"}
            />
            <BlurIn
              delay={0.3}
              className={"text-4xl md:text-7xl inline font-bold"}
              word={" Solutions"}
            />
          </h1>
          <h2 className='text-center mt-4 text-neutral-400'>
            <BlurIn
              delay={0.3}
              className={"!text-base !font-light"}
              word={
                "I'm a full-stack developer with a passion for creating high-quality websites"
              }
            />
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='flex justify-center mt-10'
          >
            <Button
              iconPlacement='right'
              className='px-8 group flex items-center gap-x-1'
              variant='shine'
              size='lg'
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className='text-xs md:text-sm'>My Projects</span>
              <ChevronRight
                className='group-hover:translate-x-0.5 duration-200'
                size={16}
              />
            </Button>
          </motion.div>
          <div className='mt-10 flex justify-center'>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
