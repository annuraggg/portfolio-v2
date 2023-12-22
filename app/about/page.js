/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect } from "react"; // icons
import Image from "next/image";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import BallCanvas from "@/components/Ball";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const techStack = [
  {
    name: "HTML",
    icon: "/stack/html.png",
  },
  {
    name: "CSS",
    icon: "/stack/css.png",
  },
  {
    name: "JavaScript",
    icon: "/stack/js.png",
  },
  {
    name: "MongoDB",
    icon: "/stack/mongo.png",
  },
  {
    name: "Express",
    icon: "/stack/express.png",
  },
  {
    name: "React",
    icon: "/stack/react.png",
  },
  {
    name: "Node",
    icon: "/stack/nodejs.png",
  },
  {
    name: "Redux",
    icon: "/stack/redux.png",
  },
  {
    name: "TypeScript",
    icon: "/stack/ts.png",
  },
  {
    name: "NextJS",
    icon: "/stack/nextjs.png",
  },
  {
    name: "Git",
    icon: "/stack/git.png",
  },
  {
    name: "Figma",
    icon: "/stack/figma.png",
  },
  {
    name: "AWS",
    icon: "/stack/aws.png",
  },
  {
    name: "Firebase",
    icon: "/stack/firebase.png",
  },
  {
    name: "Tailwind",
    icon: "/stack/tailwind.png",
  },
  {
    name: "Chakra",
    icon: "/stack/chakra.png",
  },
  {
    name: "MySQL",
    icon: "/stack/mysql.png",
  },
  {
    name: "php",
    icon: "/stack/php.svg",
  },
  {
    name: "Python",
    icon: "/stack/python.png",
  },
  {
    name: "Flask",
    icon: "/stack/flask.png",
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = React.useState(0);
  const birthDate = new Date("2004-01-17");
  const age = new Date(Date.now() - birthDate.getTime()).getFullYear() - 1970;

  const webDevStartYear = 2020;
  const webDevCurrentYear = new Date().getFullYear();
  const webDevExperience = webDevCurrentYear - webDevStartYear;

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            My <span className="text-accent">Story.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Hello, I&apos;m Anurag Sawant, a passionate web developer with a
            penchant for creating exceptional online experiences. At {age} years
            old, I am currently pursuing a Bachelor&apos;s degree in Information
            Technology and hold a Diploma in IT. From a young age, I&apos;ve
            been captivated by the world of coding and have spent the past years
            honing my skills in web development. It&apos;s a journey that has
            allowed me to explore the limitless possibilities of the digital
            realm and continuously expand my knowledge.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex -flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px]after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={webDevExperience} duration={5} />+
                </div>
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                years of experience
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {index === 0 ? (
              <div className="flex align-middle justify-center">
                <div className="grid grid-cols-4 grid-flow-row gap-9 justify-items-center align-middle justify-center">
                  {techStack.map((item, itemIndex) => {
                    return (
                      <div className="w-[70px] h-[70px]">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={40}
                          height={40}
                          key={itemIndex}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
