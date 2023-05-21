import React from "react";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function Shop() {
  return (
    <div className="container mx-auto max-w-[1000px] mt-5">
      <Navbar />
      <Card type="shop" />
    </div>
  );
}
