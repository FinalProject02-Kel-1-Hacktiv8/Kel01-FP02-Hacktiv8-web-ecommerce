import Image from "next/image";

export const CardReport = ({ item, number }) => {
  const srcImage = `${
    item?.image ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;
  return (
    <>
      <tr className="hover">
        <th>{number + 1}</th>
        <td>
          <div className="flex items-center">
            <Image
              className="object-contain object-center relative rounded-sm"
              loader={() => srcImage}
              src={srcImage}
              width={50}
              height={50}
              priority={true}
              alt={`Product Image ${
                item?.title ?? "Product image is not found"
              }`}
            />
            <div className="px-5">
              <p className="text-black dark:text-white">{item?.title}</p>
              <p className="font-light">{item?.category}</p>
            </div>
          </div>
        </td>
        <td>
          <h4>$ {item?.price}</h4>
        </td>
        <td>
          <h4>{item?.quantity}</h4>
        </td>
        <td>$ {(item?.price * item?.quantity).toFixed(2)}</td>
      </tr>
    </>
  );
};
