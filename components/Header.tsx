import Socials from "@/components/Socials";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt="Logo"
              priority={true}
              className="w-[220px] h-[48px] cursor-pointer"
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
