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
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [scrollTimer, setScrollTimer] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isScrollLocked) return;

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const element =
        pathname !== "/" ? null : document.getElementById("hero-first-word");

      if (
        element
          ? currentScrollY > element?.offsetTop - 100 &&
            currentScrollY > lastScrollY
          : true && currentScrollY > lastScrollY
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
    if (pathname !== "/") {
      router.push("/");
      return;
    }

    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }

    setIsScrollLocked(true);
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const timer = setTimeout(() => {
      setIsScrollLocked(false);
    }, 1000);
    setScrollTimer(timer);
  };

  useEffect(() => {
    return () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, [scrollTimer]);

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
