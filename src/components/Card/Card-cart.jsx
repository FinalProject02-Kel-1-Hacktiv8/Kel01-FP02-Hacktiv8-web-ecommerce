import Image from "next/image";
import { addCart, clearItem, removeItem } from "@/redux/slice/slice-cart";
import { useDispatch } from "react-redux";

export const CardCart = ({
  id,
  src,
  title,
  quantity,
  price,
  subTotalPrice,
}) => {
  const dispatch = useDispatch();

  const handleAddQuantity = () => {
    dispatch(
      addCart({
        productId: id,
        title: title,
        quantity: 1,
        subTotalPrice: price,
        src: src,
        price: price,
      })
    );
  };

  const handleSubtractQuantity = () => {
    if (quantity > 1) {
      dispatch(
        removeItem({
          productId: id,
          title: title,
          quantity: 1,
          subTotalPrice: price,
          src: src,
          price: price,
        })
      );
    }
  };

  const handleClearItem = () => {
    dispatch(clearItem({ productId: id }));
  };

  const srcImage = `${
    src ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;
  return (
    <div className="flex justify-between text-base-100 title-font text-md font-semibold py-3 border-b-[1px] border-slate-300">
      <div className="flex">
        <Image
          className="object-contain object-center relative"
          loader={() => srcImage}
          src={srcImage}
          width={50}
          height={50}
          priority={true}
          alt={`Product Image ${title ?? "Product image is not found"}`}
        />
        <div className="px-5">
          <p>{title}</p>
          <p>$ {price}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <div className="btn-group">
          <button
            className="btn btn-sm text-lg bg-base-100"
            onClick={handleSubtractQuantity}
          >
            -
          </button>
          <p className="btn btn-sm bg-base-300 text-white">{quantity}</p>
          <button
            className="btn btn-sm text-lg bg-base-100"
            onClick={handleAddQuantity}
          >
            +
          </button>
        </div>
        <button className="text-lg text-center w-5" onClick={handleClearItem}>
          <i class="fa-regular fa-trash-can text-slate-500"></i>
        </button>
      </div>
    </div>
  );
};
