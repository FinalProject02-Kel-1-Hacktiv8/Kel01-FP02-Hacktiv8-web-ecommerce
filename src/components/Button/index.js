import React from "react";

export default function Button({ children, type, onClick }) {
  return (
    <button className="btn btn-primary" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
