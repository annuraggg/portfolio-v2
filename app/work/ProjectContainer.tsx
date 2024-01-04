"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Project = {
  title: string;
  desc: string;
  stack: string[];
  image: string;
  demo?: string;
  github?: string;
};

const ProjectContainer = ({ project }: { project: Project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {project.desc}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {project.stack.map((stack, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {stack}
              </li>
            ))}
          </ul>

          <div className="flex mt-3 gap-3  underline">
            {project.github ? (
              <a
                className="text-gray-300 hover:text-blue-500 transition-all duration-200"
                href={project.github}
                target="_blank"
              >
                Github
              </a>
            ) : null}

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                className="text-gray-300 hover:text-blue-500 transition-all duration-200"
              >
                Demo
              </a>
            ) : null}
          </div>
        </div>

        <Image
          src={project.image}
          alt={project.image}
          quality={95}
          height={400}
          width={600}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
    transition 
    group-hover:scale-[1.04]
    group-hover:-translate-x-3
    group-hover:translate-y-3
    group-hover:-rotate-2

    group-even:group-hover:translate-x-3
    group-even:group-hover:translate-y-3
    group-even:group-hover:rotate-2

    group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default ProjectContainer;
