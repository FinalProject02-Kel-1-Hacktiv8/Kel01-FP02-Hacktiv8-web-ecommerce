import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Payment from "@/components/Payment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Checkout() {
  const router = useRouter();
  const { token } = useSelector((state) => state.users);
  useEffect(() => {
    if (!token) {
      router.push("/signin");
    }
  }, [token, router]);
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <Payment />
    </div>
  );
}
