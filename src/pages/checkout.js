import Navbar from "@/components/Navbar";
import Payment from "@/components/Payment";
import React from "react";

export default function Checkout() {
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <Payment />
    </div>
  );
}
