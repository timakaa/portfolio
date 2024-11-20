"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import BlurIn from "./ui/blur-in";
import TelegramLogo from "./ui/TelegramLogo";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import EmailLogo from "./ui/EmailLogo";
import GithubLogo from "./ui/GithubLogo";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const Hero = ({ projectsRef }) => {
  return (
    <div className='min-h-[calc(100vh-125px)] px-20 grid place-items-center max-w-6xl mx-auto'>
      <div>
        <h2 className='text-center'>
          <BlurIn
            delay={0.3}
            className={"!text-lg !font-medium"}
            word={"Hello, I'm Timur"}
          />
        </h2>
        <h1 className='text-center'>
          <BlurIn
            delay={0.3}
            className={"text-7xl inline font-bold"}
            word={"Quality "}
          />
          <BlurIn
            className={
              "text-7xl font-bold bg-gradient-to-r inline from-blue-400 via-blue-600 to-blue-800 text-transparent bg-clip-text bg-300% animate-gradient"
            }
            word={"Design & Web Development"}
          />
          <BlurIn
            delay={0.3}
            className={"text-7xl inline font-bold"}
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
            className='px-8'
            variant='shine'
            size='lg'
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className='mr-2'>My Projects</span>
            <ChevronRight size={16} />
          </Button>
        </motion.div>
        <div className='mt-10 space-x-2 flex justify-center'>
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Button
                    onClick={() => {
                      window.open("https://t.me/weeaknesss", "_blank");
                    }}
                    variant='outline'
                    className='p-2 px-3'
                  >
                    <TelegramLogo />
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact me on Telegram</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Button
                    onClick={() =>
                      window.open("mailto:timakaa44@gmail.com", "_blank")
                    }
                    variant='outline'
                    className='p-2 px-3'
                  >
                    <EmailLogo />
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact me via email</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Button
                    onClick={() =>
                      window.open("https://github.com/timakaa", "_blank")
                    }
                    variant='outline'
                    className='p-2 px-3'
                  >
                    <GithubLogo />
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Check my GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/ulquiyy/",
                        "_blank",
                      )
                    }
                    variant='outline'
                    className='p-2 px-3'
                  >
                    <Instagram />
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact me on Instagram</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
