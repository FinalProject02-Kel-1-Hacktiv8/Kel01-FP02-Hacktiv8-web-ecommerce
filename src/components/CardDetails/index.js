import React from "react";
import Detail from "./Detail";
import Image from "next/image";

export default function CardDetails({ data }) {
  return (
    <div className="lg:w-4/5 lg:justify-center mx-auto flex flex-wrap">
      <Image
        src={data?.image}
        className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
        width={400}
        height={400}
        alt="detailsImage"
      />
      <Detail item={data} />
    </div>
  );
}
