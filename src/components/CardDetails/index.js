import React from "react";
import Detail from "./Detail";
import Image from "next/image";

export default function CardDetails({ data }) {
  console.log("data", data);
  return (
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      {/* <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://dummyimage.com/400x400"
      /> */}
      <Image
        src={data?.image}
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        width={400}
        height={400}
      />
      <Detail item={data} />
    </div>
  );
}
