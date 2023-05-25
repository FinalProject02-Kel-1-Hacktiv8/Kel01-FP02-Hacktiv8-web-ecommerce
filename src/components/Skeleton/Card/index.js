import React from "react";
import { useSelector } from "react-redux";

export default function SkeletonCard() {
  const { loading } = useSelector((state) => state.products);
  return (
    <>
      {loading === true &&
        Array(8)
          .fill()
          .map((_) => (
            <section className="body-font bg-gray-700 animate-pulse rounded-lg">
              <div className="container relative mx-auto w-auto h-[386px] rounded-md ">
                <div className="flex flex-wrap -m-4 ">
                  <div className="p-4 w-full ">
                    <div className="block relative h-48 rounded-t-md overflow-hidden">
                      <div className="w-[500px] h-[500px] bg-gray-600"></div>
                    </div>
                    <div className="p-4">
                      <div className="w-[130px] h-[16px] bg-gray-600 rounded-lg mb-1"></div>
                      <div className="w-[201px] h-[84px] bg-gray-600 rounded-lg"></div>
                      <div className=" mt-1 w-[130px] h-[24px] bg-gray-600 rounded-lg"></div>

                      <div className="w-[201px] mt-1 h-[28px] bg-gray-600 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
    </>
  );
}
