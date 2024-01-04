"use client";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

import { projects } from "@/components/DataComponent";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import ProjectContainer from "./ProjectContainer";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex flex-col items-center overflow-auto">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-center mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              View All of My Projects Here
            </motion.p>
          </div>
        </div>
      </div>

      <Bulb />
      <div id="projects">
        <div>
          {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
