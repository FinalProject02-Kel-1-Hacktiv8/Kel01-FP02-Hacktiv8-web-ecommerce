import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../../redux/slice/product-slice";
import { addItem } from "../../redux/slice/update-slice";
import { useQuery } from "react-query";
import { getData } from "../../utils/fetch";
import Updated from "../../component/Updated";

export default function Update() {
  const dispatch = useDispatch();
  const { updateId } = useParams();
  const { items } = useSelector((state) => state.update);

  const fetchProduct = async () => {
    const res = await getData(`/products/${updateId}`);
    return res;
  };
  const { data } = useQuery("product", fetchProduct);
  const item = items?.find((el) => el?.id === data?.id);
  // useEffect(() => {
  //   dispatch(addItem(data));
  // }, []);
  return (
    <div className="overflow-x-auto mt-24">
      <table className="table w-full">
        {/* head*/}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
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
              <h4>category</h4>
            </td>
            <td>
              <h4>{item?.category}</h4>
            </td>
            <td>{item?.stock}</td>
            <td>
              <Updated item={data} />
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
}
