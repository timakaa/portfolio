"use client";

import { BackgroundBeams } from "./ui/BackgroundBeams";
import Socials from "./ui/Socials";

const Footer = () => {
  const handleNavClick = (elementId) => {
    if (elementId) {
      document
        .getElementById(elementId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className='relative px-4 md:px-0'>
      <div className='min-h-[500px] p-14 px-10 relative border border-border mx-auto max-w-2xl lg:max-w-5xl mb-10 rounded-xl'>
        <div className='z-40 relative'>
          <div className='text-3xl font-semibold'>
            Do you want to work with me?
          </div>
          <div className='text-3xl font-semibold mt-1'>
            Reach me out{" "}
            <a
              className='bg-gradient-to-r cursor-pointer inline from-blue-400 via-blue-600 to-blue-800 text-transparent bg-clip-text bg-300% animate-gradient'
              href='mailto:timakaa44@gmail.com'
              target='_blank'
            >
              via Email
            </a>{" "}
            or{" "}
            <a
              className='bg-gradient-to-r cursor-pointer inline from-blue-400 via-blue-600 to-blue-800 text-transparent bg-clip-text bg-300% animate-gradient'
              href='https://t.me/weeaknesss'
              target='_blank'
            >
              Telegram
            </a>
          </div>
          <div className='mt-36 flex justify-between flex-col md:flex-row'>
            <div>
              <div className='text-lg font-semibold'>Timur Djeletyan</div>
              <div className='text-neutral-500 mt-2'>
                © 2024 | All rights reserved
              </div>
              <div className='mt-4'>
                <Socials />
              </div>
            </div>
            <div className='flex pr-2 mt-6 md:mt-0 gap-x-16'>
              <div>
                <div className='text-lg font-semibold'>Navigate</div>
                <div className='flex flex-col mt-1 text-neutral-500'>
                  <span
                    onClick={() => handleNavClick()}
                    className='cursor-pointer'
                  >
                    Home
                  </span>
                  <span
                    onClick={() => handleNavClick("tech-stack")}
                    className='cursor-pointer'
                  >
                    Tech Stack
                  </span>
                  <span
                    onClick={() => handleNavClick("projects")}
                    className='cursor-pointer'
                  >
                    Projects
                  </span>
                  <span
                    onClick={() => handleNavClick("about")}
                    className='cursor-pointer'
                  >
                    About
                  </span>
                </div>
              </div>
              <div>
                <div className='text-lg font-semibold'>Projects</div>
                <div className='flex flex-col mt-1 text-neutral-500'>
                  <a
                    href='https://bidauto.online'
                    target='_blank'
                    className='cursor-pointer'
                  >
                    BidAuto
                  </a>
                  <a
                    href='https://mydiscipline.online'
                    target='_blank'
                    className='cursor-pointer'
                  >
                    MyDiscipline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackgroundBeams className='rounded-xl z-10 h-full' />
      </div>
    </footer>
  );
};

export default Footer;
