import Card from "@/components/Card";
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

  console.log("data", products);
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <Card />
    </div>
  );
}
