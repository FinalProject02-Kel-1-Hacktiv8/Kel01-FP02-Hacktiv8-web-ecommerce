import { addItem, removeCart, removeItem } from "@/redux/slice/slice-cart";
import Image from "next/image";
import { useDispatch } from "react-redux";

export const CartSummary = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    if (item?.stock >= 1) {
      dispatch(addItem(item));
    }
  };

  const handleSubtractCart = (itemQuantity) => {
    if (itemQuantity > 0) {
      dispatch(removeItem(item));
    }
  };

  const srcImage = `${
    item?.image ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;
  return (
    <div className="flex justify-between dark:text-slate-300 text-slate-800 title-font text-md font-semibold py-3 border-b-[1px] border-slate-300">
      <div className="flex">
        <Image
          className="object-contain object-center relative"
          loader={() => srcImage}
          src={srcImage}
          width={50}
          height={50}
          priority={true}
          alt={`Product Image ${item?.title ?? "Product image is not found"}`}
        />
        <div className="px-5 text-base-100">
          <p>{item?.title}</p>
          <p>$ {item?.price}</p>
          <p>Stock {item?.stock}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <div className="btn-group">
          <button
            className="btn btn-sm text-lg bg-slate-800"
            onClick={(e) => {
              e.preventDefault();
              handleSubtractCart(item.quantity);
            }}
          >
            -
          </button>
          <p className="btn btn-sm bg-slate-800 text-white">{item?.quantity}</p>
          <button
            className="btn btn-sm text-lg bg-slate-800"
            onClick={handleAddCart}
          >
            +
          </button>
        </div>
        <button
          className="text-lg text-center w-5"
          onClick={() => dispatch(removeCart(item?.id))}
        >
          <i className="fa-regular fa-trash-can text-slate-500 hover:text-red-500"></i>
        </button>
      </div>
    </div>
  );
};
