import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Card() {
  const { data } = useSelector((state) => state.products);
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data?.map((item) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item?.id}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={item?.image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {item?.category}
                </h3>
                <Link
                  href={`/shop/${item?.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-white title-font text-lg font-medium"
                >
                  {item?.title}
                </Link>
                <p className="mt-1">{item?.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
