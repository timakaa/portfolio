import Image from "next/image";
import ProjectsList from "./ui/ProjectsList";
import ProjectsTitle from "./ui/ProjectsTitle";

const features = [
  {
    name: "BidAuto",
    description: "Make your bids for cars.",
    href: "https://bidauto.online/",
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
  },
  {
    name: "CryptoPay",
    description: "A crypto payment gateway integrated with Telegram.",
    cta: "Learn more",
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
    available: false,
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
  },
  {
    name: "MyDiscipline",
    description: "A platform for tracking everything.",
    cta: "Learn more",
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
    available: false,
  },
  {
    name: "VideoLoader",
    description: "App for loading videos from any platform.",
    cta: "Learn more",
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
    available: false,
  },
];

const Projects = () => {
  return (
    <div className='dot-background py-20' id='projects'>
      <div className='max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0'>
        <ProjectsTitle />
        <ProjectsList features={features} />
      </div>
    </div>
  );
};

export default Projects;
