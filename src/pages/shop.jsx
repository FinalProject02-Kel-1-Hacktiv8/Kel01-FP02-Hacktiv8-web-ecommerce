import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useSelector } from "react-redux";
import loadingImage from "/public/isLoading.gif";

export default function Shop() {
  const { loading } = useSelector((state) => state.products);

  return (
    <section className="container mx-auto max-w-[1000px] mt-5">
      <Navbar />
      {loading == true ? (
        <div className="flex flex-col justify-center items-center mt-40">
          <Image
            src={loadingImage}
            width={300}
            height={300}
            alt="loading"
            priority={true}
          />
          <h3 className="text-3xl font-bold">Loading!</h3>
        </div>
      ) : (
        <Card type="shop" />
      )}
    </section>
  );
}
