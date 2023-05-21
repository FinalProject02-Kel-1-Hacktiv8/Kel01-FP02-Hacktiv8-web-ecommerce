import React from "react";
import Detail from "./Detail";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/redux/slice/slice-cart";
import { useRouter } from "next/router";

export default function CardDetails({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const { token } = useSelector((state) => state.users);

  const handleAddCart = () => {
    !token ? router.push("/signin") : dispatch(addItem(data));
  };

  const handleSubtractCart = (itemQuantity) => {
    if (itemQuantity > 0) {
      dispatch(removeItem(data));
    }
  };

  const srcImage = `${
    data.image ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;

  return (
    // <div className="lg:w-4/5 lg:justify-center mx-auto flex flex-wrap">
    //   <Image
    //     src={data?.image}
    //     className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
    //     width={400}
    //     height={400}
    //     alt="detailsImage"
    //   />
    //   <Detail item={data} />
    // </div>
    <>
      <input type="checkbox" id={data.title} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-3xl bg-[rgb(42,48,60)]">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg">
            <Image
              className="object-contain object-center relative rounded-l-xl px-2"
              loader={() => srcImage}
              src={srcImage}
              width={300}
              height={300}
              priority={true}
              alt={`Product Image ${
                data.title ?? "Product image is not found"
              }`}
            />

            <label
              htmlFor={data.title}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <div className="card-body bg-[rgb(42,48,60)]">
              <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
                {data.category ?? "Product category is not found"}
              </h3>
              <h2 className="card-title">{data.title}</h2>
              <p className="mt-1">
                <i className="fa-solid fa-star text-yellow-400 mr-[5px]"></i>
                {data.rating.rate ?? "Product rate is not found"} |{" "}
                {data.rating.count} Sold
              </p>

              <p className="mt-1 font-semibol text-2xl">
                ${data.price ?? "Product price is not found"}
              </p>
              <p>
                <p className="font-semibold">Product description:</p>
                {data?.description}
              </p>
              <p className="font-semibold">Quantity:</p>
              <div className="flex flex-row items-center">
                {items.length >= 0 && token ? (
                  items?.map((item) =>
                    item?.id === data?.id ? (
                      <>
                        <div className="btn-group" key={item.id}>
                          <button
                            className="btn text-lg"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubtractCart(item.quantity);
                            }}
                          >
                            -
                          </button>
                          <p className="btn">{item?.quantity}</p>
                          <button
                            className="btn text-lg"
                            onClick={handleAddCart}
                          >
                            +
                          </button>
                        </div>
                        <p className="mt-1 font-semibol text-xl flex justify-between pl-2">
                          <p>Subtotal: </p>$
                          {Number(item?.price * item?.quantity).toFixed(2) ?? 0}
                        </p>
                      </>
                    ) : (
                      <></>
                    )
                  )
                ) : (
                  <>
                    <div className="btn-group">
                      <button className="btn text-lg">-</button>
                      <p className="btn">{0}</p>
                      <button className="btn text-lg">+</button>
                    </div>
                    <p className="mt-1 font-semibol text-xl flex justify-between pl-2">
                      <p>Subtotal: </p>${0}
                    </p>
                  </>
                )}
              </div>

              <div className="card-actions justify-end mt-3">
                <button className="btn btn-primary" onClick={handleAddCart}>
                  <i className="fa-solid fa-cart-shopping pr-2"></i>
                  Add to Cart
                </button>

                <button className="btn btn-primary">
                  <i className="fa-solid fa-bag-shopping pr-2"></i>Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
