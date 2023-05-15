import React from "react";

export default function Input({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered"
      />
    </div>
  );
}
