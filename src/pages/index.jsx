import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import { fetchDataProduct } from "@/redux/slice/slice-products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import loadingImage from "/public/isLoading.gif";
import { DashboardInfo } from "@/components/Dashboard";

export default function Home() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.products);
  const { token, role } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchDataProduct("/products"));
  }, [dispatch]);

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
          <h3 className="text-3xl font-bold text-white">Loading!</h3>
        </div>
      ) : token && role == "admin" ? (
        <DashboardInfo />
      ) : (
        <>
          <Carousel />
          <Card />
        </>
      )}
    </section>
  );
}
