import Navbar from "@/components/Navbar";
import Payment from "@/components/Payment";
import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const router = useRouter();
  const { token } = useSelector((state) => state.users);
  useLayoutEffect(() => {
    if (!token) {
      router.replace("/signin");
    }
  }, [token]);
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <Payment />
    </div>
  );
}
