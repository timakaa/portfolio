"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "./ui/dock";
import {
  HomeIcon,
  BriefcaseBusiness,
  Send,
  CircleUserRound,
} from "lucide-react";

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
          <HomeIcon />
        </DockIcon>
        <DockIcon>
          <CircleUserRound />
        </DockIcon>
        <DockIcon>
          <BriefcaseBusiness />
        </DockIcon>
        <DockIcon>
          <Send />
        </DockIcon>
      </Dock>
    </motion.header>
  );
};

export default Header;
