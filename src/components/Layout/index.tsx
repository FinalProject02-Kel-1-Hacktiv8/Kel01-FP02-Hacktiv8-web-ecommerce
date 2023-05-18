import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <main className="container mx-auto max-w-[1000px] mt-5">
      <Navbar />
      {children}
    </main>
  );
};
