import { updateStockCart } from "@/redux/slice/slice-cart";
import { addStock, updateStock } from "@/redux/slice/slice-update";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateDetails({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { productItems } = useSelector((state) => state.updateProduct);
  const existingItem = items.find((item) => item.id === data.id);
  const existingStock = productItems.find((item) => item.id === data.id);
  const { token, role } = useSelector((state) => state.users);
  const [stock, setStock] = useState("Update Stock");

  useEffect(() => {
    if (!token) {
      router.push("/signin");
    } else if (role != "admin") {
      router.push("/");
    }
  }, [token, router, role]);

  const handleAddStock = (e) => {
    !token ? router.push("/signin") : e.preventDefault();
    let payload = {
      id: data?.id,
      stock: Number(stock),
    };
    dispatch(addStock(payload));
  };

  const handleUpdateStock = (e) => {
    e.preventDefault();
    let payload = {
      id: data?.id,
      stock,
    };
    dispatch(updateStock(payload));
    dispatch(updateStockCart(payload));
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

              {existingItem ? (
                <>
                  {" "}
                  <div className="flex flex-row items-center">
                    {" "}
                    {items?.map((item, index) =>
                      item?.id === data?.id ? (
                        <>
                          <div
                            className="btn-group flex items-center"
                            key={item?.id}
                          >
                            <p className="font-semibold text-gray-40 pr-3 text-lg">
                              Stock:
                            </p>
                            <p className="btn text-slate-300">
                              {Number(item?.stock)}
                            </p>
                            <p className="font-semibold text-gray-40 px-3 text-lg">
                              Sold:
                            </p>
                            <p className="btn text-slate-300">
                              {Number(item?.quantity)}
                            </p>
                          </div>
                        </>
                      ) : (
                        <></>
                      )
                    )}{" "}
                  </div>{" "}
                  <form
                    onSubmit={handleUpdateStock}
                    className="card-actions justify-between mt-3 text-white"
                  >
                    <input
                      type="number"
                      placeholder="Update Stock"
                      name="stock"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      className="input input-bordered input-primary w-52 max-w-xs"
                    />
                    <button type="submit" className="btn btn-warning font-bold">
                      <i className="fas fa-edit pr-2" aria-hidden="true"></i>
                      Update
                    </button>
                  </form>{" "}
                </>
              ) : existingStock?.id === data?.id ? (
                <>
                  {" "}
                  <div className="flex flex-row items-center">
                    {" "}
                    {productItems?.map((item) =>
                      item?.id === data?.id ? (
                        <>
                          <div
                            className="btn-group flex items-center"
                            key={item.id}
                          >
                            <p className="font-semibold text-gray-40 pr-3 text-lg">
                              Stock:
                            </p>
                            <p className="btn text-slate-300">
                              {Number(item.stock)}
                            </p>
                          </div>
                        </>
                      ) : (
                        <></>
                      )
                    )}{" "}
                  </div>{" "}
                  <form
                    onSubmit={handleUpdateStock}
                    className="card-actions justify-between mt-3 text-white"
                  >
                    <input
                      type="number"
                      placeholder="Update Stock"
                      name="stock"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      className="input input-bordered input-primary w-52 max-w-xs"
                    />
                    <button type="submit" className="btn btn-warning font-bold">
                      <i className="fas fa-edit pr-2" aria-hidden="true"></i>
                      Update
                    </button>
                  </form>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <form
                    onSubmit={handleAddStock}
                    className="card-actions justify-between mt-3 text-white"
                  >
                    <input
                      type="number"
                      placeholder="Update Stock"
                      name="stock"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      className="input input-bordered input-primary w-52 max-w-xs"
                    />
                    <button type="submit" className="btn btn-warning font-bold">
                      <i className="fas fa-edit pr-2" aria-hidden="true"></i>
                      Add Stock
                    </button>
                  </form>{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
