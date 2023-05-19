import { addItem } from "@/redux/slice/slice-cart";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data } = useSelector((state) => state.products);
  const { token } = useSelector((state) => state.users);
  const handleAddCart = (item) => {
    if (!token) {
      router.push("/signin");
    } else {
      dispatch(addItem(item));
    }
  };
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data?.map((item) => (
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
              <div class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <img
                  class="peer absolute top-0 right-0 h-full w-full object-cover"
                  src={item?.image}
                  alt="product image"
                />
              </div>
              <div class="mt-4 px-5 pb-5">
                <a href="#">
                  <Link
                    class="text-xl tracking-tight text-white line-clamp-1"
                    href={`/shop/${encodeURIComponent(item?.id)}`}
                  >
                    {item?.title}
                  </Link>
                </a>
                <div class="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span class="text-3xl font-bold text-white">
                      $ {item?.price}
                    </span>
                  </p>
                </div>
                <div
                  onClick={() => handleAddCart(item)}
                  class="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
