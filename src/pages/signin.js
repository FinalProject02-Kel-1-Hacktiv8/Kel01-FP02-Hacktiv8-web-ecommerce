import React, { useLayoutEffect } from "react";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Signin() {
  const router = useRouter();
  const { token } = useSelector((state) => state.users);
  useLayoutEffect(() => {
    if (token) {
      router.back();
    }
  }, [token]);
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <Login />
    </div>
  );
}
