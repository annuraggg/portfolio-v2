import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image
        src="/top-left-img.png"
        alt="top-left-img"
        width={400}
        height={300}
        className="w-[400px] h-[300px] cursor-pointer"
        z-index={-1}
      />
    </div>
  );
};

export default TopLeftImg;
