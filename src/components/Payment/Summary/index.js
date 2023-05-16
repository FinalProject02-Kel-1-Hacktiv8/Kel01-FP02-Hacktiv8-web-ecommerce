import { addCart, removeItem } from "@/redux/slice/slice-cart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Summary() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleAddItem = (i) => {
    dispatch(addCart(i));
  };
  return (
    // <div class="px-4 pt-8">
    //   <p class="text-xl font-medium">Order Summary</p>
    //   <p class="text-gray-400">
    //     Check your items. And select a suitable shipping method.
    //   </p>
    //   <div class="mt-8 space-y-3 rounded-lg border bg-gray-700 border-gray-600 px-2 py-4 sm:px-6">
    //     {items?.map((item) => (
    //       <div class="flex flex-col rounded-lg sm:flex-row">
    //         <img
    //           class="m-2 h-24 w-28 rounded-md border object-cover object-center"
    //           src={item?.image}
    //           alt=""
    //         />
    //         <div class="flex w-full flex-col px-4 py-4">
    //           <span class="font-semibold">{item?.title}</span>
    //           <span class="float-right text-gray-400">{item?.category}</span>
    //           <p class="text-lg font-bold">$ {item?.price}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div class="flow-root">
      <ul class="-my-8">
        {items?.map((item) => (
          <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
            <div class="shrink-0">
              <img
                class="h-24 w-24 max-w-full rounded-lg object-cover"
                src={item?.image}
                alt=""
              />
            </div>

            <div class="relative flex flex-1 flex-col justify-between">
              <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                <div class="pr-8 sm:pr-5">
                  <p class="text-base font-semibold text-gray-900">
                    {item?.title}
                  </p>
                  <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                    {item?.category}
                  </p>
                </div>

                <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                  <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                    $ {item?.price}
                  </p>

                  <div class="sm:order-1">
                    <div class="mx-auto flex h-8 items-stretch text-gray-600">
                      <button
                        class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                        onClick={() => handleRemoveItem(item?.id)}
                      >
                        -
                      </button>
                      <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                        {item?.quantity}
                      </div>
                      <button
                        class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                <button
                  type="button"
                  class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                  onClick={() => handleRemoveItem(item?.id)}
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                      class=""
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
