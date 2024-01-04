import { skillsData } from "@/components/DataComponent";
import { motion } from "framer-motion";

const Skills = ({ techStack }) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

/*} <div>
      <div className="flex align-middle justify-center">
        <div className="grid grid-cols-4 grid-flow-row gap-9 justify-items-center align-middle justify-center ">
          {techStack.map((item, itemIndex) => {
            return (
              <>
                <div className="w-[70px] h-[70px]" key={itemIndex}>
                  <Image
                    src={item.imageURL}
                    alt={item.name}
                    width={30}
                    height={30}
                    className="w-auto h-auto"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
        </div> {*/

export default Skills;
