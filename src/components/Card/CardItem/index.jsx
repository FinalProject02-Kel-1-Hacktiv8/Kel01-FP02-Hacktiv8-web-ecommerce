import { addItem } from "@/redux/slice/slice-cart";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CardItem({ card }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.users);
  // const handleAddCart = (item) => {
  //   if (!token) {
  //     router.push("/signin");
  //   } else {
  //     dispatch(addItem(item));
  //   }
  // };

  const srcImage = `${
    card.image ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;

  return (
    <>
      {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
            <img
              className="peer absolute top-0 right-0 h-full w-full object-cover"
              src={card?.image}
              alt="product image"
            />
          </div>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <Link
                className="text-xl tracking-tight text-white line-clamp-1"
                href={`/shop/${encodeURIComponent(card?.id)}`}
              >
                {card?.title}
              </Link>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-white">
                  $ {card?.price}
                </span>
              </p>
            </div>
            <div
              onClick={() => handleAddCart(card)}
              className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </div>
          </div>
        </div>
      </div> */}

      <section className="text-gray-400 body-font">
        <div className="container relative mx-auto w-auto h-[386px] border-solid border-[1px] rounded-md border-slate-500 border-t-transparent hover:scale-[1.02] hover:duration-300 animate-shadow hover:shadow-lg shadow-sm">
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 w-full ">
              <a className="block relative h-48 rounded-t-md overflow-hidden">
                <Image
                  className="object-cover object-center w-full h-full block"
                  loader={() => srcImage}
                  src={srcImage}
                  width={500}
                  height={500}
                  priority={true}
                  alt={`Product Image ${
                    card.title ?? "Product image is not found"
                  }`}
                />
              </a>

              <div className="p-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {card.category ?? "Product category is not found"}
                </h3>
                <h2 className="line-clamp-3 text-white title-font text-lg font-medium">
                  {card.title ?? "Product title is not found"}
                </h2>
                <p className="mt-1">
                  <i className="fa-solid fa-star text-yellow-400 mr-[5px]"></i>
                  {card.rating.rate ?? "Product rate is not found"} |{" "}
                  {card.rating.count} Sold
                </p>

                <p className="mt-1 font-semibold text-xl">
                  ${card.price ?? "Product price is not found"}
                </p>
              </div>
            </div>
          </div>
          {/* The button to open modal */}
          <label
            htmlFor={card.title}
            className="flex cursor-pointer absolute right-1 bottom-1 items-center gap-1 font-semibold p-2 rounded-full hover:text-slate-600 hover:bg-slate-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-100 "
          >
            <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            <p>BUY</p>
          </label>
        </div>
      </section>
    </>
  );
}
