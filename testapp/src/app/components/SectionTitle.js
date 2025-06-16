import React from "react";

export default function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 font-sans tracking-tight ${className}`}
      style={{ fontFamily: 'var(--font-geist-sans), Montserrat, Arial, sans-serif' }}
    >
      {children}
    </h2>
  );
}
