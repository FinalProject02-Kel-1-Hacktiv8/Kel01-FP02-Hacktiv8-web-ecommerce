import CardDetails from "@/components/CardDetails";
import Navbar from "@/components/Navbar";
import React from "react";

export default function DetailProduct() {
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <section class="text-gray-400 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <CardDetails />
        </div>
      </section>
    </div>
  );
}
