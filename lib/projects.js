import Image from "next/image";

export const projectsPreview = [
  {
    name: "BidAuto",
    description: "Platform for making bids for cars.",
    href: "/projects/bidauto",
    icon: <Image src={"/bidauto.png"} alt='BidAuto' width={150} height={150} />,
    projectLink: "https://bidauto.online",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    technologies: [
      {
        icon: <Image src={"/react.svg"} alt='React' width={20} height={20} />,
        name: "React",
      },
      {
        icon: <Image src={"/ts.svg"} alt='TypeScript' width={20} height={20} />,
        name: "TypeScript",
      },
      {
        icon: (
          <Image src={"/tailwind.svg"} alt='Tailwind' width={20} height={20} />
        ),
        name: "Tailwind",
      },
      {
        icon: <Image src={"/python.svg"} alt='Python' width={20} height={20} />,
        name: "Python",
      },
    ],
    background: (
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={"/bidautoscreen.png"}
          alt='BidAuto'
          className='object-cover w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300'
          width={0}
          height={0}
          unoptimized
        />
      </div>
    ),
    story: [
      "It was a team effort, the main integrations were multilingualism with i18n and Stripe.",
    ],
  },
  {
    name: "CryptoPay",
    github: "https://github.com/timakaa/cryptopay",
    href: "/projects/cryptopay",
    description: "A crypto payment gateway integrated with Telegram.",
    cta: "Learn more",
    icon: (
      <Image
        src={"/bitcoinlogo.svg"}
        alt='CryptoPay'
        width={150}
        height={150}
      />
    ),
    className: "col-span-3 lg:col-span-1",
    technologies: [
      {
        icon: <Image src={"/nest.svg"} alt='Nest' width={20} height={20} />,
        name: "Nest.js",
      },
      {
        icon: (
          <Image
            src={"/postgres.svg"}
            alt='PostgreSQL'
            width={20}
            height={20}
          />
        ),
        name: "PostgreSQL",
      },
    ],
    background: (
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={"/cryptopayscreen.png"}
          alt='CryptoPay'
          className='object-cover w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300'
          width={0}
          height={0}
          unoptimized
        />
      </div>
    ),
    story: [
      "I was interested in how to work with the blockchain and therefore I decided to try to create a bot that can accept cryptocurrency (it cannot return it). Integration is made only with the TRON blockchain.",
    ],
  },
  {
    name: "MyDiscipline",
    description: "A platform for tracking everything.",
    icon: (
      <Image
        src={"/infinitylogo.svg"}
        alt='MyDiscipline'
        width={150}
        height={150}
      />
    ),
    projectLink: "https://mydiscipline.online",
    cta: "Learn more",
    href: "/projects/mydiscipline",
    className: "col-span-3 lg:col-span-1",
    technologies: [
      {
        icon: (
          <Image src={"/nextjs.svg"} alt='Next.js' width={20} height={20} />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <Image src={"/tailwind.svg"} alt='Tailwind' width={20} height={20} />
        ),
        name: "Tailwind",
      },
      {
        icon: (
          <Image
            src={"/postgres.svg"}
            alt='PostgreSQL'
            width={20}
            height={20}
          />
        ),
        name: "PostgreSQL",
      },
    ],
    background: (
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={"/mydisciplinescreen.png"}
          alt='MyDiscipline'
          className='object-cover w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300'
          width={0}
          height={0}
          unoptimized
        />
      </div>
    ),
    story: [
      "This project was created just to understand how to work with UI and charts.",
      "I also learned how to deploy a project on a VPS via Docker and configure SSL via CertBot & Let's encrypt along with a reverse proxy using NginX",
    ],
  },
  {
    name: "VideoLoader",
    github: "https://github.com/timakaa/videoloader",
    description: "App for loading videos from any platform.",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    icon: (
      <Image
        src={"/videologo.svg"}
        alt='VideoLoader'
        width={150}
        height={150}
      />
    ),
    href: "/projects/videoloader",
    technologies: [
      {
        icon: (
          <Image src={"/nextjs.svg"} alt='Next.js' width={20} height={20} />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <Image src={"/tailwind.svg"} alt='Tailwind' width={20} height={20} />
        ),
        name: "Tailwind",
      },
      {
        icon: (
          <Image src={"/mongodb.svg"} alt='MongoDB' width={20} height={20} />
        ),
        name: "MongoDB",
      },
    ],
    background: (
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={"/videoloaderscreen.png"}
          alt='VideoLoader'
          className='object-cover w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300'
          width={0}
          height={0}
          unoptimized
        />
      </div>
    ),
    story: ["Working with web scrapers and creating API with them."],
  },
  {
    name: "Moon",
    description: "Moon is framework for algorithmic trading.",
    href: "/projects/moon",
    icon: <Image src={"/moonlogo.png"} alt='Moon' width={150} height={150} />,
    iconClassName: "rounded-xl overflow-hidden",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    technologies: [
      {
        icon: <Image src={"/python.svg"} alt='Python' width={20} height={20} />,
        name: "Python",
      },
    ],
    background: (
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={"/moonscreen.png"}
          alt='Moon'
          className='object-cover w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300'
          width={0}
          height={0}
          unoptimized
        />
      </div>
    ),
    story: [
      "Moon is a framework for algorithmic trading. It is a Python app that allows you to create trading bots for any ctypro exchange.",
      "I wouldn't say that it's a framework though, in fact I just combined 2 main libraries backtesting.py and ccxt, but even so this application dictates a strict structure and automates everything through config in the strategy",
      "Also, there are useful functions that are not in ccxt, like can_trade, which checks whether it is safe to trade this coin, checks the spread, how much money is on the balance, whether the daily limit of trades has been suspended, etc. There is also an automatic data collector of pairs from any exchange and for any period of time, and other useful things.",
    ],
    scrollStory: [
      {
        title: "Kernel",
        description:
          "This is how you create a bot, you just create a config, and a couple of functions that describe the logic by which the bot will work, and then everything works by itself, just call the Moon class and insert these functions there. All checks for security, timely execution of transactions, etc.",
        content: (
          <Image
            src={"/moon_kernel.png"}
            alt='Moon'
            className='object-contain bg-[#1E2021] h-full rounded-xl border border-border'
            width={500}
            height={500}
          />
        ),
      },
      {
        title: "Moon CLI",
        description:
          "Let's say you need to run a bot on different coins, so as not to change the config and run the file each time, you can immediately change everything you need in Moon CLI",
        content: (
          <Image
            src={"/moon_cli.png"}
            alt='Moon'
            className='object-contain bg-[#1E2021] h-full rounded-xl border border-border'
            width={500}
            height={500}
          />
        ),
      },
      {
        title: "Test Mode",
        description:
          "You can run a bot in test mode (last option in Moon CLI) and save transactions in a database. After that you can call .report() and see the statistics of the strategy.",
        content: (
          <Image
            src={"/moon_test_mode.png"}
            alt='Moon'
            className='object-contain bg-[#1E2021] h-full rounded-xl border border-border'
            width={500}
            height={500}
          />
        ),
      },
      {
        title: "Reports",
        description:
          "After running the bot (for now only in test mode), you can call .report() and see the statistics of the strategy.",
        content: (
          <Image
            src={"/moon_stats.png"}
            alt='Moon'
            className='object-contain bg-[#1E2021] h-full rounded-xl border border-border'
            width={500}
            height={500}
          />
        ),
      },
      {
        title: "Logs",
        description:
          "You can see the logs of the bot in the console, and also in the logs folder, where the bot will save the logs of the strategy (for test mode and real mode).",
        content: (
          <Image
            src={"/moon_logs.png"}
            alt='Moon'
            className='object-contain bg-[#1E2021] h-full rounded-xl border border-border'
            width={500}
            height={500}
          />
        ),
      },
    ],
  },
  {
    name: "Url Shortener",
    description: "Url Shortener is a mobile appfor shortening urls.",
    href: "/projects/url-shortener",
    icon: (
      <Image
        src={"/url_shortener_logo.png"}
        alt='Url Shortener'
        width={150}
        height={150}
      />
    ),
    iconClassName: "rounded-xl overflow-hidden",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    technologies: [
      {
        name: "Postgres",
        icon: (
          <Image src={"/postgres.svg"} alt='Postgres' width={20} height={20} />
        ),
      },
      {
        icon: <Image src={"/go_icon.svg"} alt='GO' width={20} height={20} />,
        name: "Go",
      },
      {
        icon: (
          <Image src={"/react.svg"} alt='React Native' width={20} height={20} />
        ),
        name: "React Native",
      },
    ],
    background: (
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={"/url_shortener_iphone.png"}
          alt='Moon'
          className='object-contain w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300'
          width={0}
          height={0}
          unoptimized
        />
      </div>
    ),
    story: [
      'This is a mobile app for shortening urls. Just write the url, click "Create" and you will get a short url which you can just open in your browser.',
      "The backend is written in Go, without any libraries for creating an api like Gin",
    ],
    github: "https://github.com/timakaa/UrlShortener.git",
  },
];

export const projects = [...projectsPreview];
