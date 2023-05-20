import React, { useEffect } from "react";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Signin() {
  const router = useRouter();
  const { token } = useSelector((state) => state.users);
  useEffect(() => {
    if (token) {
      router.back();
    }
  }, [token, router]);
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <Login />
    </div>
  );
}
