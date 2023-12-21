"use client";
import { Sora } from "@next/font/google";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import { usePathname } from "next/navigation";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}`}
    >
      <Nav />
      <Header />
      <TopLeftImg />

      {children}
    </div>
  );
};

export default Layout;
