import React from "react";

export default function FormField({ label, type = "text", name, value, onChange, error, ...props }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border px-3 py-2 rounded focus:outline-blue-400 ${error ? 'border-red-400' : ''}`}
        {...props}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}
