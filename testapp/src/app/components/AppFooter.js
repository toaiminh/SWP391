import React from "react";

export default function AppFooter() {
  return (
    <footer className="w-full text-center py-6 text-gray-500 bg-white border-t border-gray-200 mt-12">
      &copy; {new Date().getFullYear()} Community Drug Use Prevention System
    </footer>
  );
}
