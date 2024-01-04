"use client";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 via-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hi, I am <br />
            <span className="text-accent">Anurag Sawant</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Hey there, Anurag here. Coding to me, isn&apos;t just a skill;
            it&apos;s my language of expression, a medium to breathe life into
            ideas. With each line of code, I shape my perspective into digital
            reality, creating a unique and dynamic online presence. In the world
            of bits and pixels, I am the storyteller, weaving narratives through
            the language of the web.
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:flex hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full mix-blend-color-dodge h-full absolute translate-z-0"></div>

        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[0%] flex items-center justify-center flex-col gap-5"
        >
          <h1 className="h3">View Me On</h1>
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/annuraggg/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/annuraggg"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.instagram.com/annuraggg/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://twitter.com/annuragggg"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
