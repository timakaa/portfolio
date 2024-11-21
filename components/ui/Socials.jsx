"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import EmailLogo from "./EmailLogo";
import GithubLogo from "./GithubLogo";
import TelegramLogo from "./TelegramLogo";

const Socials = () => {
  return (
    <div className='gap-x-2 flex'>
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
                  window.open("https://www.instagram.com/ulquiyy/", "_blank")
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
  );
};

export default Socials;
