import Image from "next/image";

export const CheckoutSummary = ({ item }) => {
  const srcImage = `${
    item?.image ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;
  return (
    <div className="flex justify-between text-slate-800 title-font text-md font-semibold py-3 border-b-[1px] border-slate-300">
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
        <div className="px-5">
          <p>{item?.title}</p>
          <p>$ {item?.price}</p>
          <p>
            <span className="font-normal pr-2">Amount:</span>
            {item?.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};
