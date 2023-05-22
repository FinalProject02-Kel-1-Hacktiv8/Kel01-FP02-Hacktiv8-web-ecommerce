import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Updated from "../../component/Updated";
import { deleteMessage } from "../../redux/slice/update-slice";
import { getData } from "../../utils/fetch";

export default function Update() {
  const dispatch = useDispatch();
  const { updateId } = useParams();
  const { items, message } = useSelector((state) => state.update);

  const fetchProduct = async () => {
    const res = await getData(`/products/${updateId}`);
    return res;
  };
  const { data } = useQuery("product", fetchProduct);
  const item = items?.find((el) => el?.id === data?.id);

  setTimeout(() => {
    dispatch(deleteMessage());
  }, 2000);
  return (
    <div className="overflow-x-auto mt-24">
      {message !== "" ? (
        <div className="flex justify-center mb-10">
          <div className="alert alert-success  shadow-lg w-1/2">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{message}</span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{item?.id}</th>
            <td>
              <img src={item?.image} alt="" />
            </td>
            <td>
              <h4>{item?.title}</h4>
            </td>
            <td>
              <h4>{item?.category}</h4>
            </td>
            <td>{item?.stock}</td>
            <td>
              <Updated item={data} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
