import Link from "next/link";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

export default function Card({ type }) {
  const { data } = useSelector((state) => state.products);
  return (
    <div className="container px-5 py-24 mx-auto">
      {type !== "shop" ? (
        <div className="flex justify-end mb-6">
          <Link href="/shop" className="text-lg font-semibold">
            {" "}
            See All
          </Link>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-wrap -m-4">
        {type === "shop"
          ? data?.map((item) => <CardItem card={item} key={item?.id} />)
          : data
              ?.slice(0, 8)
              .map((item) => <CardItem card={item} key={item?.id} />)}
      </div>
    </div>
  );
}
