import React from "react";

export default function AppContainer({ children, className = "" }) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-2 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
