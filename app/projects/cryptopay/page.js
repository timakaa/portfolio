import Image from "next/image";
import BackToProjectsButton from "@/components/ui/BackToProjectsButton";
import TechnologyLegend from "@/components/ui/TechnologyLegend";
import projects from "@/lib/projects";

const cryptoPayProject = projects.find(
  (project) => project.name.toLowerCase() === "cryptopay",
);

const CryptoPay = () => {
  return (
    <div className='max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0 my-20'>
      <BackToProjectsButton />
      <div className='relative mt-10'>
        <Image
          src='/cryptopayscreen.png'
          width={1000}
          height={1000}
          alt='CryptoPay'
          className='rounded-xl w-full object-cover border-border border'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black/20'></div>
      </div>
      <div className='mt-10'>
        <TechnologyLegend {...cryptoPayProject} />
      </div>
      <div className='mt-10 max-w-xl md:max-w-4xl mx-auto text-xl'>
        I was interested in how to work with the blockchain and therefore I
        decided to try to create a bot that can accept cryptocurrency (it cannot
        return it). Integration is made only with the TRON blockchain.
      </div>
    </div>
  );
};

export default CryptoPay;
