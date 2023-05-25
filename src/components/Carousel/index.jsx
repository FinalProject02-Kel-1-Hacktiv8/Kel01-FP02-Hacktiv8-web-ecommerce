import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Carousel() {
  const { data } = useSelector((state) => state.products);

  return (
    <div className="carousel w-full mt-2 rounded-2xl">
      {data?.map((item) => (
        <div
          id={item?.id}
          className={`carousel-item relative w-full`}
          key={item.id}
        >
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <Image
                className="max-w-sm rounded-lg shadow-2xl"
                loader={() => item?.image}
                width={200}
                height={100}
                src={item?.image}
                priority={true}
                alt={`Product Image ${
                  data.title ?? "Product image is not found"
                }`}
              />
              <div>
                <h1 className="text-5xl font-bold">Elegant and Best Price!</h1>
                <p className="py-6">{item?.description}</p>
                <button className="btn btn-primary">Get Now</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#${item?.id - 1}`} className="btn btn-circle">
              ❮
            </a>
            <a href={`#${item?.id + 1}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
