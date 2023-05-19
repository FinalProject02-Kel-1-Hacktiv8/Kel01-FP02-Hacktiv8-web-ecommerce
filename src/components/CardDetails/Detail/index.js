import { addItem } from "@/redux/slice/slice-cart";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Detail({ item }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.users);
  const router = useRouter();

  const handleAddItem = (i) => {
    if (!token) {
      router.push("/signin");
    } else {
      dispatch(addItem(i));
      router.prefetch("/checkout");
    }
  };
  return (
    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      <h2 className="text-sm title-font text-gray-500 tracking-widest">
        BRAND NAME
      </h2>
      <h1 className="text-white text-3xl title-font font-medium mb-1">
        {item?.title}
      </h1>
      <div className="flex mb-4">
        <span className="flex items-center mt-5">
          {/* <span className="">Stock</span>
          <span className="ml-3">4</span> */}
        </span>
      </div>
      <p className="leading-relaxed">{item?.description}</p>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-white">
          $ {item?.price}
        </span>
        <button
          type="button"
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          onClick={() => handleAddItem(item)}
        >
          Add To Cart
        </button>
        <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
