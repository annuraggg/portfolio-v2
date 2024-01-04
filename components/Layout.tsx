"use client";
import Transition from "@/components/Transition";
import { Sora } from "@next/font/google";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [routing, setRouting] = useState(false);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== pathname) {
      setRouting(true);
    }
  }, [pathname, prevPath]);

  useEffect(() => {
    if (routing) {
      setPrevPath(pathname);
      const timeout = setTimeout(() => {
        setRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [pathname, routing]);

  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}`}
    >
      {routing && <Transition />}
      <Nav />
      <Header />

      {children}
    </div>
  );
};

export default Layout;
