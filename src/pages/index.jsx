import { Card } from "@/components/Card";
import CardDetail from "@/components/CardDetails";
import { fetchDataProduct } from "@/redux/slice/slice-products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const homeProducts = useSelector((state) => state.products);

  // let arrayHomeProducts = Object.keys(homeProducts);

  useEffect(() => {
    dispatch(fetchDataProduct("/products"));
  }, [dispatch]);

  // console.log("data", carts);
  return (
    <div className="grid grid-cols-4 gap-5 mt-32">
      {/* CARDS */}
      {homeProducts.data.map((product, id) => {
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
            <CardDetail
              key={product.id}
              id={product.id}
              title={product.title}
              src={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
              rate={product.rating.rate}
              count={product.rating.count}
            />
          </>
        );
      })}
    </div>
  );
}
