import { getData } from "@/Utils/fetch";
import CardDetails from "@/components/CardDetails";
import Navbar from "@/components/Navbar";
import React from "react";

export default function DetailProduct({ detailPage }) {
  return (
    <div className="container mx-auto mt-5">
      <Navbar />
      <section className="text-gray-400 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <CardDetails data={detailPage} />
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await getData("/products");
  const paths = data.map((item) => ({
    params: {
      id: item?.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const data = await getData(`/products/${id}`);
  return {
    props: {
      detailPage: data,
    },
  };
}
