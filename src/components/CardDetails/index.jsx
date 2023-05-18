import { addCart } from "@/redux/slice/slice-cart";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function CardDetail({
  id,
  title,
  description,
  category,
  src,
  price,
  rate,
  count,
}) {
  const srcImage = `${
    src ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  let subTotalPrice = Number(Number.parseFloat(price * quantity).toFixed(2));

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtractQuantity = () => {
    if (quantity != 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddCart = () => {
    dispatch(
      addCart({
        productId: id,
        title: title,
        quantity: quantity,
        subTotalPrice: subTotalPrice,
        src: src,
        price: price,
      })
    );
  };

  return (
    <>
      <input type="checkbox" id={title} className="modal-toggle" />
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
              alt={`Product Image ${title ?? "Product image is not found"}`}
            />

            <label
              htmlFor={title}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <div className="card-body bg-[rgb(42,48,60)]">
              <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
                {category ?? "Product category is not found"}
              </h3>
              <h2 className="card-title">{title}</h2>
              <p className="mt-1">
                <i className="fa-solid fa-star text-yellow-400 mr-[5px]"></i>
                {rate ?? "Product rate is not found"} | {count} Sold
              </p>

              <p className="mt-1 font-semibol text-2xl">
                ${price ?? "Product price is not found"}
              </p>
              <p>
                <p className="font-semibold">Product description:</p>
                {description}
              </p>
              <p className="font-semibold">Quantity:</p>
              <div className="flex flex-row items-center">
                <div className="btn-group">
                  <button
                    className="btn text-lg"
                    onClick={handleSubtractQuantity}
                  >
                    -
                  </button>
                  <p className="btn">{quantity}</p>
                  <button className="btn text-lg" onClick={handleAddQuantity}>
                    +
                  </button>
                </div>

                <p className="mt-1 font-semibol text-xl flex justify-between pl-2">
                  <p>Subtotal: </p>${subTotalPrice ?? 0}
                </p>
              </div>

              <div className="card-actions justify-end mt-3">
                <button className="btn btn-primary" onClick={handleAddCart}>
                  <i className="fa-solid fa-cart-shopping pr-2"></i>Add to Cart
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
