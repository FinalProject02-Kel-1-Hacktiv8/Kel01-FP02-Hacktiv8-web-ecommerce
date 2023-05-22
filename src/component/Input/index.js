import React from "react";

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <>
      <label className="leading-7 text-sm text-gray-400">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </>
  );
}
