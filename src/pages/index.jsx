import { Card } from "@/components/Card";
import Detail from "@/components/CardDetails/Detail";
import Navbar from "@/components/Navbar";
import { fetchDataProduct } from "@/redux/slice/slice-products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const homeProducts = useSelector((state) => state.products);

  // let title = homeProducts.productDetails;

  // let arrayHomeProducts = Object.keys(homeProducts);

  useEffect(() => {
    dispatch(fetchDataProduct("/products"));
  }, [dispatch]);

  console.log("data", homeProducts);
  return (
    <div className="container mx-auto max-w-[1000px] mt-5">
      <Navbar />

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-5 mt-32">
        {homeProducts.data.map((product) => {
          return (
            <>
              <Card
                key={product.id}
                id={product.title}
                title={product.title}
                category={product.category}
                src={product.image}
                price={product.price}
                rate={product.rating.rate}
                count={product.rating.count}
              />
              {/* THIS IS THE MODAL CARDS PLACE FOR DETAILS */}
              <Detail
                title={product.title}
                src={product.image}
                description={product.description}
                category={product.category}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
