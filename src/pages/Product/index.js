import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/product-slice";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../redux/slice/update-slice";

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchData("/products"));
  }, [dispatch]);

  const handleClick = (item) => {
    navigate(`update/${item?.id}`);
    dispatch(addItem(item));
  };
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
          {/* row 1 */}
          {data?.map((item, i) => (
            <tr key={item?.id}>
              <th>{i + 1}</th>
              <td>
                <img src={item?.image} alt="" />
              </td>
              <td>
                <h4>{item?.title}</h4>
                {/* <h4>{item?.description}</h4> */}
              </td>
              <td>
                <h4>category</h4>
              </td>
              <td>
                <h4>{item?.category}</h4>
              </td>
              <td>20</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => handleClick(item)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
