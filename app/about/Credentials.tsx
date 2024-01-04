import { credentialsData } from "@/components/DataComponent";
import Image from "next/image";
import { RxArrowRight } from "react-icons/rx";

const Crendentials = () => {
  return (
    <div className="flex gap-2 flex-wrap mt-[-20px]">
      {credentialsData.map((credential, index) => (
        <div
          key={index}
          className="w-[250px] bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
        >
          <div className="text-4xl text-accent mb-4">
            <Image src={credential.image} width={40} height={40} alt={credential.name} />
          </div>
          <div>
            <div className="mb-2 text-lg">{credential.name}</div>
            <p className="max-w-[350px] leading-normal">{credential.date}</p>
          </div>
          <a className="text-3xl mt-5" href={credential.link} target="_blank">
            <RxArrowRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Crendentials;
