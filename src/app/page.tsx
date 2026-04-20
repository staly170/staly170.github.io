"use client";

import { useState } from "react";
import ProjectModal, { type ProjectData } from "@/components/ProjectModal";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Expertise from "@/components/sections/Expertise";
import Works from "@/components/sections/Works";
import Startup from "@/components/sections/Startup";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <main>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <Hero />
      <About />
      <Skills />
      <Expertise />
      <Works onSelect={setSelectedProject} />
      <Startup onSelect={setSelectedProject} />
      <Contact />
      <Footer />
    </main>
  );
}
