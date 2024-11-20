"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "./ui/dock";
import { HomeIcon, BriefcaseBusiness, Send, Cpu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250 && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className='sticky top-0 flex justify-center !z-50'
      initial={{ y: -100, scale: 0.6 }}
      animate={{
        y: isHidden ? -100 : 0,
        scale: isHidden ? 0.6 : 1,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Dock direction='middle'>
        <DockIcon>
          <Button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            variant='ghost'
            className='p-3 rounded-full'
          >
            <HomeIcon size={18} />
          </Button>
        </DockIcon>
        <DockIcon>
          <Button
            onClick={() => {
              document
                .getElementById("tech-stack")
                .scrollIntoView({ behavior: "smooth" });
            }}
            variant='ghost'
            className='p-3 rounded-full'
          >
            <Cpu size={18} />
          </Button>
        </DockIcon>
        <DockIcon>
          <Button
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
            variant='ghost'
            className='p-3 rounded-full'
          >
            <BriefcaseBusiness size={18} />
          </Button>
        </DockIcon>
        <DockIcon>
          <Button
            variant='ghost'
            className='p-3 rounded-full flex justify-center items-center'
          >
            <Send size={18} className='translate-y-0.5 -translate-x-[1px]' />
          </Button>
        </DockIcon>
      </Dock>
    </motion.header>
  );
};

export default Header;
