import { addItem, removeItem } from "@/redux/slice/slice-cart";
import { addItemCheckout, removeCheckout } from "@/redux/slice/slice-checkout";
import { addStock } from "@/redux/slice/slice-update";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export default function CardDetails({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const existingItem = items.find((item) => item?.id === data?.id);
  const { token, role } = useSelector((state) => state.users);

  const handleAddCart = () => {
    if (!token && role != "user") {
      router.push("/signin");
    } else {
      let payload = {
        id: data?.id,
        quantity: 1,
        stock: 20 - 1,
      };
      if (existingItem?.stock <= 0) {
        alert("Out of Stock!");
      } else {
        dispatch(
          addItem({ ...data, quantity: payload.quantity, stock: payload.stock })
        );
        dispatch(addStock({ id: payload.id, stock: payload.stock }));
      }
    }
  };

  const handleSubtractCart = (itemQuantity) => {
    if (itemQuantity > 0) {
      dispatch(removeItem(data));
      // dispatch(removeCheckout(data));
    }
  };

  const srcImage = `${
    data.image ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;

  return (
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
              <h2 className="card-title text-slate-100">{data.title}</h2>
              <p className="mt-1 text-gray-400">
                <i className="fa-solid fa-star text-yellow-400 mr-[5px]"></i>
                {data.rating.rate ?? "Product rate is not found"} |{" "}
                {data.rating.count} Sold
              </p>

              <p className="mt-1 font-semibol text-2xl text-slate-300">
                ${data.price ?? "Product price is not found"}
              </p>
              <p className="text-gray-400">
                <p className="font-semibold">Product description:</p>
                {data?.description}
              </p>
              <p className="font-semibold text-gray-400">Quantity:</p>
              <div className="flex flex-row items-center">
                {existingItem ? (
                  items?.map((item) =>
                    item?.id === data?.id && token ? (
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
                          <p className="btn text-slate-300">{item?.quantity}</p>
                          <button
                            className="btn text-lg"
                            onClick={handleAddCart}
                          >
                            +
                          </button>
                        </div>
                        <p className="mt-1 font-semibol text-xl text-slate-300 flex justify-between pl-2">
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
                      <p className="btn">{0}</p>
                    </div>
                    <p className="mt-1 font-semibol text-xl flex text-end gap-3">
                      <p>Subtotal: </p> ${0}
                    </p>
                  </>
                )}
              </div>

              <div className="card-actions justify-end mt-3">
                <button className="btn btn-primary" onClick={handleAddCart}>
                  <i className="fa-solid fa-cart-shopping pr-2"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
