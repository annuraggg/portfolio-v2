import { FaDatabase, FaServer } from "react-icons/fa";
import {
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";
import { IoMdBriefcase } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
import {
  Credentials,
  Experience,
  NavLink,
  Project,
  Service,
} from "./DataComponentTypes";

export const skillsData: string[] = [
  "AWS",
  "Chakra UI",
  "CSS",
  "Docker",
  "ExpressJS",
  "Figma",
  "Firebase",
  "Flask",
  "Git",
  "GitHub",
  "HTML",
  "JavaScript",
  "JWT",
  "Linux",
  "MongoDB",
  "Next.js",
  "Node.js",
  "OAuth",
  "OAuth2",
  "Python",
  "React",
  "Redux",
  "RESTful API",
  "SQL",
  "Tailwind CSS",
  "Typescript",
  "WebSockets",
];

export const experienceData: Experience[] = [
  {
    title: "Sahu Technologies",
    subtitle: "Internship",
    description:
      "Developed website clones with HTML, CSS, JavaScript, and Bootstrap.",
    date: "July - Oct 2021",
    icon: <IoMdBriefcase />,
  },
  {
    title: "Symbiosis Protech 2022",
    subtitle: "Runner Up",
    description:
      "Emotion Detection App: Developed an app using machine learning to monitor employee emotions, improving well-being and productivity.",
    date: "July 2022",
    icon: <SiHackthebox />,
  },
  {
    title: "Quasar 2023",
    subtitle: "Runner Up",
    description:
      "App using HTML, CSS, JS, Node.js, Express.js, and Flutter for farmer-laborer connections in agriculture sector.",
    date: "April 2023",
    icon: <SiHackthebox />,
  },
  {
    title: "VCET Hackathon",
    subtitle: "Participant",
    description:
      "Developed a website using HTML, CSS, JS, Node.js, Express.js, and MongoDB for a online doctor appointment booking platform.",
    date: "Sept 2023",
    icon: <SiHackthebox />,
  },
];

export const credentialsData: Credentials[] = [
  {
    name: "CCNA: Introduction to Networks",
    date: "Mar 2023",
    image: "/creds/ccna.png",
    link: "https://www.credly.com/badges/174e21aa-00fb-4012-ad42-60937120f90b/public_url",
  },
  {
    name: "Cisco Cybersecurity Essentials",
    date: "Oct 2023",
    image: "/creds/ccs.png",
    link: "https://www.credly.com/badges/3c1da57e-ccd2-4707-bb36-cf075168817b/public_url",
  },
  {
    name: "AWS Academy Cloud Foundations",
    date: "May 2023",
    image: "/creds/awscf.png",
    link: "https://www.credly.com/badges/174e21aa-00fb-4012-ad42-60937120f90b/public_url",
  },
  {
    name: "AWS Academy Cloud Architecting",
    date: "May 2023",
    image: "/creds/awsca.png",
    link: "https://www.credly.com/badges/cba488c9-c618-472f-9bcd-b20cd1ea91ee/public_url",
  },
];

export const serviceData: Service[] = [
  {
    icon: <MdOutlineDesignServices />,
    title: "Frontend Development",
    description:
      "From Basic HTML CSS to ReactJS and NextJS, eveything at one place.",
  },
  {
    icon: <FaDatabase />,
    title: "Database",
    description: "Using MongoDB and MySQL, I can create databases for you.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Using NodeJS, ExpressJS, PHP, Python, and NextJS.",
  },
];

export const navData: NavLink[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  // { name: "testimonials",path: "/testimonials",icon: <HiChatBubbleBottomCenterText />, },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

export const projects: Project[] = [
  {
    title: "Spycrop",
    desc: "This web application utilizes computer vision to detect whether a person is wearing a mask. If the app detects the absence of a mask, it triggers an alert mechanism",
    stack: ["Python", "Flask", "HTML", "CSS", "JS", "OpenCV"],
    image: "/projects/spycrop.png",
    github: "https://github.com/annuraggg/Spycrop-Desktop-App",
  },

  {
    title: "CallMaven",
    desc: "A web solution designed to manage and optimize call center operations. It provides a centralized platform for managing customer interactions",
    stack: ["Python", "Flask", "HTML", "CSS", "JS"],
    image: "/projects/callmaven.png",
    github: "https://github.com/annuraggg/CallMaven",
  },

  {
    title: "Chatup",
    desc: "A chat application that allows users to create chat rooms and chat with their friends. It also supports real-time chat functionality",
    stack: ["MongoDB", "Express", "React", "Node", "Socket.io"],
    image: "/projects/chatup.png",
    github: "https://github.com/annuraggg/chatup",
    demo: "https://chatup.anuragsawant.tech",
  },

  {
    title: "Scriptopia",
    desc: "A Institute Certicate Management Helper that allows users to upload and verify certificates. Ready to use for any institute",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Socket.io",
      "Firebase",
      "Vite",
    ],
    image: "/projects/scriptopia.png",
    github: "https://github.com/annuraggg/Scriptopia",
    demo: "https://scriptopia.anuragsawant.tech",
  },

  {
    title: "AlgoVis",
    desc: "A web application that allows users to visualize DSA sorting algorithms. It also provides a detailed explanation of each algorithm",
    stack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    image: "/projects/algovis.png",
    github: "https://github.com/annuraggg/AlgoVis",
    demo: "https://algovis.anuragsawant.tech",
  },
];
