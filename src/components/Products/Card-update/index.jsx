import Image from "next/image";

export default function CardUpdate({ item }) {
  const srcImage = `${
    item.image ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;

  return (
    <section className="text-gray-400 body-font">
      <div className="container relative mx-auto w-auto h-[386px] border-solid border-[1px] rounded-md border-slate-500 border-t-transparent hover:scale-[1.02] hover:duration-300 animate-shadow hover:shadow-lg shadow-sm">
        <div className="flex flex-wrap -m-4 ">
          <div className="p-4 w-full ">
            <a className="block relative h-48 rounded-t-md overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                loader={() => srcImage}
                src={srcImage}
                width={500}
                height={500}
                priority={true}
                alt={`Product Image ${
                  item.title ?? "Product image is not found"
                }`}
              />
            </a>

            <div className="p-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {item.category ?? "Product category is not found"}
              </h3>
              <h2 className="line-clamp-3 text-white title-font text-lg font-medium">
                {item.title ?? "Product title is not found"}
              </h2>
              <p className="mt-1">
                <i className="fa-solid fa-star text-yellow-400 mr-[5px]"></i>
                {item.rating.rate ?? "Product rate is not found"} |{" "}
                {item.rating.count} Sold
              </p>

              <p className="mt-1 font-semibold text-xl">
                ${item.price ?? "Product price is not found"}
              </p>
            </div>
          </div>
        </div>
        {/* The button to open modal */}
        <label
          htmlFor={item.title}
          className="flex cursor-pointer absolute right-1 bottom-1 items-center gap-1 font-semibold p-2 rounded-full hover:text-slate-600 hover:bg-slate-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-100 "
        >
          <i className="fas fa-edit" aria-hidden="true"></i>
          <p>UPDATE</p>
        </label>
      </div>
    </section>
  );
}
