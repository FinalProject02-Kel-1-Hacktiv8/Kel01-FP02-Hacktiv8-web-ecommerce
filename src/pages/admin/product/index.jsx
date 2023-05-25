import Navbar from "@/components/Navbar";
import ProductStock from "@/components/Products/product-stock";
import { fetchDataProduct } from "@/redux/slice/slice-products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchDataProduct("/products"));
  }, [dispatch]);
  return (
    <section className="container mx-auto max-w-[1000px] mt-5">
      <Navbar />
      <div className="grid grid-cols-4 gap-5 mt-20">
        {data?.map((item) => (
          <ProductStock item={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
}
