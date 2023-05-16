import React from "react";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";

export default function Signin() {
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <Login />
    </div>
  );
}
