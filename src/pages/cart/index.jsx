import { CardCart } from "@/components/Card/Card-cart";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Cart() {
  const Carts = useSelector((state) => state.cart);
  let totalPrice = Number(
    Number.parseFloat(Carts.subTotal + Carts.shipping).toFixed(2)
  );

  console.log("cart", Carts.items);
  return (
    <div className="flex flex-row justify-between bg-white mt-8 min-h-[600px] rounded-xl shadow-lg">
      <div className="p-5 pr-0">
        <ul className="steps w-[570px] text-slate-500 mb-1">
          <li className="step step-primary">Choose Items</li>
          <li className="step step-primary">Add to Cart</li>
          <li className="step">Checkout</li>
          <li className="step">Payment</li>
        </ul>
        <h2 className="text-slate-800 title-font text-2xl font-bold">Cart</h2>

        {Carts.items.map((item) => {
          return (
            <CardCart
              key={item.productId}
              id={item.productId}
              title={item.title}
              src={item.src}
              quantity={item.quantity}
              price={item.price}
              subTotalPrice={item.subTotalPrice}
            />
          );
        })}
      </div>
      <div className="w-96 p-6">
        {/* CART SUMMARY */}
        <div className="card w-full bg-base-100 shadow-xl h-[400px] p-5 flex flex-col justify-between">
          <h2 className="text-white title-font text-xl font-medium">
            Cart Summary
          </h2>
          <div>
            <p className="flex justify-between text-slate-200 title-font text-md font-semibold py-3 border-b-[1px] border-slate-300">
              Subtotal Price ({Carts.totalQuantity} Items){" "}
              <p>$ {Number(Number.parseFloat(Carts.subTotal).toFixed(2))} </p>
            </p>
            <p className="flex justify-between text-slate-200 title-font text-md font-semibold py-3 border-b-[1px] border-slate-300">
              Shipping <p>$ {Carts.shipping}</p>
            </p>
          </div>

          <div>
            <p className="flex justify-between text-slate-200 title-font text-xl font-semibold py-4">
              Total Price{" "}
              <p>
                <span className=" text-green-500">USD </span> $ {totalPrice}
              </p>
            </p>
            <Link href={"/checkout"} className="w-full">
              <button className="btn btn-primary btn-block">
                Checkout (
                <span className="text-lg px-1">{Carts.totalQuantity}</span>)
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
