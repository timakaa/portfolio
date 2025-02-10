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
      "BidAuto is a feature-rich online car auction platform designed for seamless vehicle bidding, purchasing, and management. Built with a Django backend and a React frontend, it delivers a powerful and user-friendly experience for buyers, sellers, and administrators.",
      "**Key Features**\n- **Car Auctions**: Users can participate in live auctions and place bids on various vehicles.\n- **Integrated Online Store**: A dedicated marketplace for selling cars with categorized listings.\n- **Stripe Payment Integration**: Secure transactions with Stripe for deposits, purchases, and auction payments.\n- **Multilingual Support**: Implements i18n for a fully localized experience, making the platform accessible worldwide.\n- **AI-Powered Customer Support**: Built-in AI chat assistant to help users with inquiries.\n- **Live Support Chat**: Real-time support chat for direct customer assistance.\n- **Admin Panel**: A robust admin dashboard for managing users, orders, store listings, and system settings.\n- **Browser Extension**: In near future",
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
      "**Key Features**\n- **Telegram Integration**: The bot is integrated with Telegram, allowing users to send messages to the bot and receive responses.\n- **Crypto Payment**: The bot can accept cryptocurrency payments from users.\n- **Blockchain Integration**: The bot is integrated with the TRON blockchain, allowing users to send and receive TRX.\n",
    ],
  },
  {
    name: "MyDiscipline",
    description: "A platform for tracking everything.",
    github: "https://github.com/timakaa/mydiscipline",
    icon: (
      <Image
        src={"/infinitylogo.svg"}
        alt='MyDiscipline'
        width={150}
        height={150}
      />
    ),
    projectLink: undefined,
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
      "**MyDiscipline** is a project designed to make working with charts seamless, intuitive, and highly customizable. It allows users to modify multiple parameters to tailor the visual representation of data to their preferences. Whether it’s adjusting the color scheme, tweaking the time intervals, or fine-tuning the display details, this system ensures that users have full control over how their data is presented.",
      "A crucial part of the project is the integration of Docker and Docker Compose, ensuring that the deployment process is smooth and efficient. With the addition of NGINX and Certbot, the project automatically handles SSL certificates, enabling secure HTTPS connections without manual intervention.",
      "Finally, the project is designed for independent deployment on a VPS, allowing users to set up and host their own instances effortlessly. The combination of automation, flexibility, and security makes MyDiscipline a powerful tool for users who need robust charting capabilities in a production-ready environment.",
      "**Key Features**\n- **Flexible and Customizable Charts** – Users can modify multiple parameters to personalize data visualization.\n- **Docker & Docker Compose Setup** – Ensures seamless deployment and environment consistency.\n- **NGINX & Certbot Integration** – Enables secure HTTPS connections with automatic SSL certificate management.\n- **VPS Deployment** – Supports independent project hosting with automated deployment workflows.\n- **Light & Dark Theme Support** – Switch between light and dark modes for a personalized user experience.",
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
    story: [
      "VideoLoader is a web application that allows users to download videos from various platforms quickly and efficiently. Built with Next.js, Tailwind CSS, and MongoDB, it offers a modern and responsive UI with a seamless user experience.",
      "**Key Features**\n- **Video Scraping API**: Uses a scraping API to extract video links from platforms like YouTube, Instagram, Twitter and Facebook.\n- **Download Videos**: Users can download videos in different formats and qualities.\n- **User Authentication**: Implements Auth.js for secure login and registration, ensuring personalized user access.\n- **Sleek UI**: Designed with Tailwind CSS, providing a clean and dark-themed interface.\n- **MongoDB Integration**: Stores user data, download history, and preferences for a personalized experience.",
    ],
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
      "This project is a URL Shortener built with React Native (Expo), featuring a user-friendly mobile interface for managing and tracking shortened links. The app allows users to register and log in, ensuring a personalized experience where they can store and manage their shortened URLs.",
      "The backend is written in Go, without any libraries for creating an api like Gin",
      "**Key Features**\n- **URL Shortening**: Users can generate short links that are easy to share.\n- **User Authentication**: Secure registration and login system to track user-specific links.\n- **Copy & Track Links**: Each generated short link can be copied with a single tap, and the app can track the number of views when someone visits the link.",
    ],
    github: "https://github.com/timakaa/UrlShortener.git",
  },
];

export const projects = [...projectsPreview];
