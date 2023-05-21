import { CartSummary } from "@/components/Payment/Summary/cart-summary";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Cart() {
  const { subTotal, shipping, totalQuantity, items } = useSelector(
    (state) => state.cart
  );

  const totals = parseFloat(subTotal) + shipping;

  return (
    <div className="container mx-auto max-w-[1000px] mt-5">
      <Navbar />
      <div className="flex flex-row justify-between bg-white mt-8 min-h-[600px] rounded-xl shadow-lg">
        <div className="p-5 pr-0">
          <ul className="steps w-[570px] text-slate-500 mb-1">
            <li className="step step-primary">Choose Items</li>
            <li className="step step-primary">Add to Cart</li>
            <li className="step">Checkout</li>
            <li className="step">Payment</li>
          </ul>
          <h2 className="text-slate-800 title-font text-2xl font-bold">Cart</h2>

          {items.map((item) => {
            return <CartSummary key={item.productId} item={item} />;
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
                Subtotal Price ({totalQuantity} Items){" "}
                <p>$ {subTotal.toFixed(2)} </p>
              </p>
              <p className="flex justify-between text-slate-200 title-font text-md font-semibold py-3 border-b-[1px] border-slate-300">
                Shipping <p>$ {shipping}</p>
              </p>
            </div>

            <div>
              <p className="flex justify-between text-slate-200 title-font text-xl font-semibold py-4">
                Total Price{" "}
                <p>
                  <span className=" text-green-500">USD </span> ${" "}
                  {totals.toFixed(2)}
                </p>
              </p>
              <Link href={"/checkout"} className="w-full">
                <button className="btn btn-primary btn-block">
                  Checkout (
                  <span className="text-lg px-1">{totalQuantity}</span>)
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
