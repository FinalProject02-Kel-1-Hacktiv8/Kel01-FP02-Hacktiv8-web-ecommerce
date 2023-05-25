import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import { fetchDataProduct } from "@/redux/slice/slice-products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchDataProduct("/products"));
  }, [dispatch]);

  return (
    <div className="container mx-auto max-w-[1000px] mt-5">
      <Navbar />
      <Carousel />
      <Card />
    </div>
  );
}