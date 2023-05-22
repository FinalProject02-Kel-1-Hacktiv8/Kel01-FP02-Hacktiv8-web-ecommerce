import React from "react";
import { useSelector } from "react-redux";

export default function RekapPenjualan() {
  const { items } = useSelector((state) => state.update);
  const formatNumber = (item) => {
    const pendapatan = item?.price / item?.terjual;
    return pendapatan.toFixed(2);
  };
  return (
    <div className="overflow-x-auto mt-24">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>Harga</th>
            <th>Terjual</th>
            <th>Pendapatan</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((rekap, i) => (
            <tr key={rekap?.id}>
              <th>{i + 1}</th>
              <td>
                <h4>{rekap?.title}</h4>
              </td>
              <td>
                <h4>{rekap?.category}</h4>
              </td>
              <td>{rekap?.price}</td>
              <td>{rekap?.terjual}</td>
              <td>{formatNumber(rekap)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
