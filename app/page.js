import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main className='mx-auto p-4 overflow-x-hidden'>
      <Hero />
      <Technologies />
      <Projects />
      <About />
    </main>
  );
}
