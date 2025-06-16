import React from "react";

export default function Illustration({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full max-w-xs md:max-w-md mx-auto drop-shadow-xl animate-float ${className}`}
      style={{ animation: 'float 3s ease-in-out infinite' }}
    />
  );
}

// Thêm keyframes vào global CSS:
// @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
