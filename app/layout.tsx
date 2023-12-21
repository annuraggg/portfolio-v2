"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div key={pathname} className="h-full">
              <Transition />
              {children}
            </motion.div>
          </AnimatePresence>
        </Layout>
      </body>
    </html>
  );
}
