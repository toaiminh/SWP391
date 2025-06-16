import React from "react";

export default function Navbar({ guestMode }) {
  // Scroll to section by id (only for guest)
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 h-12 flex items-center px-4 justify-between transition-all duration-300 border-b border-gray-300">
      <div className="text-lg font-bold text-gray-800 tracking-wide flex items-center gap-2 drop-shadow-sm">
        <span className="text-2xl">🎯</span> Community Drug Use Prevention System
      </div>
      <div className="flex gap-2 items-center">
        {guestMode && (
          <>
            <button
              className="px-3 py-1 bg-transparent text-gray-800 rounded-lg hover:bg-gray-100 transition font-semibold text-sm"
              onClick={() => handleScroll("about")}
            >
              Giới thiệu
            </button>
            <button
              className="px-3 py-1 bg-transparent text-gray-800 rounded-lg hover:bg-gray-100 transition font-semibold text-sm"
              onClick={() => handleScroll("blog")}
            >
              Blog
            </button>
            <button
              className="px-3 py-1 bg-transparent text-gray-800 rounded-lg hover:bg-gray-100 transition font-semibold text-sm"
              onClick={() => handleScroll("contact")}
            >
              Liên hệ
            </button>
          </>
        )}
        {guestMode ? (
          <>
            <button
              className="px-3 py-1 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition-all font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              onClick={() => window.location.pathname !== "/register" ? window.location.href = "/register" : null}
            >
              Register
            </button>
            <button
              className="px-3 py-1 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition-all font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              onClick={() => window.location.pathname !== "/Login" ? window.location.href = "/Login" : null}
            >
              Log in
            </button>
          </>
        ) : (
          <button
            className="px-3 py-1 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition-all font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
            onClick={() => (window.location.href = "/guest")}
          >
            Log out
          </button>
        )}
      </div>
    </nav>
  );
}
