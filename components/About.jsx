"use client";

import { Timeline } from "./ui/timeline";
import Image from "next/image";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const About = () => {
  const data = [
    {
      title: (
        <span>
          The Beggining <div className='mt-[6px]'>2020</div>
        </span>
      ),
      content: (
        <div>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-medium mb-8'
          >
            The pandemic hit and I was forced to stay home. I started learning
            how to code and build websites.
          </motion.p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-medium mb-2'
          >
            Then I started building simple projects.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-500 text-xs md:text-sm font-normal mb-4'
          >
            Great times.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.3 }}
          >
            <Image
              src='/gstorescreen.png'
              alt='gstore'
              width={500}
              height={340}
              className='rounded-lg h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </motion.div>
        </div>
      ),
    },
    {
      title: "Early 2022",
      content: (
        <div>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-medium mb-2'
          >
            I learned a lot about web development and decided to build something
            more complex. And it was my own social media platform.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-500 text-xs md:text-sm font-normal mb-4'
          >
            The UI was bad back then. This site was bad in general, but it was a
            big step for me.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.3 }}
          >
            <Image
              src='/yoscreen.png'
              alt='Yo messanger'
              width={500}
              height={345}
              className='rounded-lg h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-500 text-xs md:text-sm font-normal mt-4'
          >
            The main thing was integration with the web socket server.
          </motion.p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-200 font-medium text-base md:text-xl mb-2'
          >
            My first production project.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-500 text-xs md:text-sm font-normal mb-4'
          >
            Stripe integration the main thing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.3 }}
          >
            <Image
              src='/bidautoscreen.png'
              alt='Bid auto'
              width={500}
              height={200}
              className='rounded-lg opacity-80 h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-500 text-xs md:text-sm font-normal mt-4'
          >
            Still bad UI, but a lot of work was done.
          </motion.p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-200 font-medium text-base md:text-xl mb-2'
          >
            Here we go. I really learned a lot. I built even more high-quality
            projects.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-500 text-xs md:text-sm font-normal mb-4'
          >
            I told you my passion is back.
          </motion.p>
          <div className='grid grid-cols-2 gap-4'>
            <motion.div
              initial={{ opacity: 0, x: !isMobile ? -20 : 0 }}
              whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
              viewport={{ amount: 0.8 }}
            >
              <Image
                src='/mydisciplinescreen.png'
                alt='My disciplines'
                width={500}
                height={250}
                className='rounded-lg opacity-80 h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
              whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
              viewport={{ amount: 0.8 }}
            >
              <Image
                src='/videoloaderscreen.png'
                alt='Video loader'
                width={500}
                height={250}
                className='rounded-lg opacity-80 h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
              />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, x: !isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: !isMobile ? 0 : 0 }}
            viewport={{ amount: 0.8 }}
            className='text-neutral-800 dark:text-neutral-500 text-xs md:text-sm font-normal mt-4'
          >
            Now my UI is better, I like it.
          </motion.p>
        </div>
      ),
    },
  ];
  return (
    <div
      className='min-h-screen py-28 md:py-20 max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0'
      id='about'
    >
      <Timeline data={data} />
    </div>
  );
};

export default About;
