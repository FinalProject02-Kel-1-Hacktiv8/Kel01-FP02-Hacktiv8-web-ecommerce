import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStock } from "../../redux/slice/update-slice";

export default function Updated({ item }) {
  // console.log("item", item);
  const dispatch = useDispatch();
  const [stock, setStock] = useState(0);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const handleChange = () => {
    setModal(!modal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      id: item?.id,
      stock,
    };
    dispatch(updateStock(payload));
    setModal(false);
    setIsMutating(false);
  };
  return (
    <div className="my-4">
      <button className="btn" onClick={handleChange}>
        Updated
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Stock</label>
              <input
                type="text"
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="input w-full input-bordered"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              ) : (
                <button type="button" disabled className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
