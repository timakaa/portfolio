"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackToProjectsButton = () => {
  const router = useRouter();

  return (
    <Button className='group' variant='shine' onClick={() => router.back()}>
      <div className='flex items-center gap-x-1'>
        <ChevronLeft
          className='group-hover:-translate-x-0.5 duration-200'
          size={16}
        />
        <span className='text-xs md:text-sm'>Back to projects</span>
      </div>
    </Button>
  );
};

export default BackToProjectsButton;
