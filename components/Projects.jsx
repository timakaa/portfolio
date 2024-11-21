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
  },
  {
    name: "CoinMix",
    description: "A platform for investing and be rewarded.",
    href: "https://coinmix.space",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    technologies: [
      {
        icon: <Image src={"/react.svg"} alt='React' width={20} height={20} />,
        name: "React",
      },
      {
        icon: <Image src={"/js.svg"} alt='JavaScript' width={20} height={20} />,
        name: "JavaScript",
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
  },
  {
    name: "MyDiscipline",
    description: "A platform for tracking your habits.",
    href: "https://mydiscipline.app",
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
  },
];

const Projects = () => {
  return (
    <div className='dot-background py-20' id='projects'>
      <div className='max-w-5xl mx-auto'>
        <ProjectsTitle />
        <ProjectsList features={features} />
      </div>
    </div>
  );
};

export default Projects;
