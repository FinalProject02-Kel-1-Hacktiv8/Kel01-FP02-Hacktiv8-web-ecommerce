import React from "react";
import Detail from "./Detail";

export default function CardDetails() {
  return (
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://dummyimage.com/400x400"
      />
      <Detail />
    </div>
  );
}
