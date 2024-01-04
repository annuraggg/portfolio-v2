import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[145px] h-[145px] group"
      >
        <h2>My Projects</h2>
        <HiArrowRight className="text-4xl group-hover:translate-x-2 transition-all duration-300 mt-2" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
