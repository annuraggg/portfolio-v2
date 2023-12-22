"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {routing && <Transition />}
          {children}
        </Layout>
      </body>
    </html>
  );
}
