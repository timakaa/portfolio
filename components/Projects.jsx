import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const features = [
  {
    name: "Bidauto",
    description: "Make your bids for cars.",
    href: "https://bidauto.online/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Coinmix",
    description: "A platform for investing and be rewarded.",
    href: "https://coinmix.space",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "MyDiscipline",
    description: "A platform for tracking your habits.",
    href: "https://mydiscipline.app",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
];

const Projects = () => {
  return (
    <div className='dot-background py-20' id='projects'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between items-center'>
          <h2 className='text-6xl font-bold bg-gradient-to-r flex justify-center'>
            Projects
          </h2>
          <div>
            <Button variant='shine'>
              <span>View All</span>
              <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </div>
        <div className='grid grid-cols-2 auto-rows-[22rem] gap-4 w-full mt-10'>
          {features.map((feature, idx) => (
            <BentoCard className={"w-full"} key={idx} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
