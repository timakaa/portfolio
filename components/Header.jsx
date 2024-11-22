"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "./ui/dock";
import {
  HomeIcon,
  BriefcaseBusiness,
  Cpu,
  CircleUserRound,
} from "lucide-react";
import { Button } from "./ui/button";
import { isMobile } from "react-device-detect";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  useEffect(() => {
    if (isScrollLocked) return;

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY >
          document.getElementById("hero-first-word").offsetTop - 100 &&
        currentScrollY > lastScrollY
      ) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollLocked]);

  const handleNavClick = (elementId) => {
    window.clearTimeout(window.scrollTimer);

    setIsScrollLocked(true);
    if (elementId) {
      document
        .getElementById(elementId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.scrollTimer = setTimeout(() => {
      setIsScrollLocked(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(window.scrollTimer);
    };
  }, []);

  return (
    <motion.header
      className='sticky top-0 flex justify-center !z-[9999]'
      initial={{ y: -100, scale: !isMobile ? 0.6 : 1 }}
      animate={{
        y: isHidden ? -100 : 0,
        scale: !isMobile ? (isHidden ? 0.6 : 1) : 1,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Dock direction='middle'>
        <DockIcon>
          <Button
            onClick={() => handleNavClick()}
            variant='ghost'
            className='p-3 rounded-full'
          >
            <HomeIcon size={18} />
          </Button>
        </DockIcon>
        <DockIcon>
          <Button
            onClick={() => handleNavClick("tech-stack")}
            variant='ghost'
            className='p-3 rounded-full'
          >
            <Cpu size={18} />
          </Button>
        </DockIcon>
        <DockIcon>
          <Button
            onClick={() => handleNavClick("projects")}
            variant='ghost'
            className='p-3 rounded-full'
          >
            <BriefcaseBusiness size={18} />
          </Button>
        </DockIcon>
        <DockIcon>
          <Button
            onClick={() => handleNavClick("about")}
            variant='ghost'
            className='p-3 rounded-full flex justify-center items-center'
          >
            <CircleUserRound size={18} />
          </Button>
        </DockIcon>
      </Dock>
    </motion.header>
  );
};

export default Header;
