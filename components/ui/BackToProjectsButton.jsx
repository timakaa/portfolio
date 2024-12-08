"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackToProjectsButton = () => {
  const router = useRouter();

  return (
    <Button variant='shine' onClick={() => router.back()}>
      <div className='flex items-center gap-2'>
        <ChevronLeft size={16} />
        Back to projects
      </div>
    </Button>
  );
};

export default BackToProjectsButton;
