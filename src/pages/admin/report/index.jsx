import { CardReport } from "@/components/Card/CardReport";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import reportEmpty from "/public/report-not-found.gif";

export default function SellsReport() {
  const router = useRouter();

  const { subTotal, totalQuantity, items } = useSelector((state) => state.cart);
  const { token, role } = useSelector((state) => state.users);

  useEffect(() => {
    if (!token) {
      router.push("/signin");
    } else if (role != "admin") {
      router.push("/");
    }
  }, [token, router, role]);

  return (
    <section className="container mx-auto max-w-[1000px] mt-5">
      <Navbar />
      <h3 className="text-2xl text-slate-200 font-semibold py-3">
        Sells Report
      </h3>
      <div className="overflow-y-auto max-h-[570px]">
        <table className="table w-[980px] ">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th>Price</th>
              <th>Sold</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {totalQuantity == 0 ? (
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={reportEmpty}
                  width={300}
                  height={300}
                  alt="reportEmpty"
                  priority={true}
                />
                <h3 className="text-2xl font-bold text-white">
                  Oops! You have no sells yet!
                </h3>
              </div>
            ) : (
              items?.map((item, index) => (
                <CardReport item={item} number={index} />
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="w-[1000px] text-end pt-2 pr-10">
        <p className="text-pink-400 font-bold text-lg">
          TOTAL INCOME:{" "}
          <span className="pl-5 text-white text-xl">
            $ {Number(subTotal).toFixed(2)}
          </span>{" "}
        </p>
      </div>
    </section>
  );
}
