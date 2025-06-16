// components/QuickActionsPanel.js
"use client";

import React from "react";

function QuickActionsPanel({ actions = [] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-300">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Thao tác nhanh</h3>
      <ul className="space-y-2">
        {actions.map((action, index) => (
          <li key={index}>
            <button
              onClick={action.onClick}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-sm hover:scale-105 hover:bg-gray-100 ${
                action.type === "primary"
                  ? "bg-gray-800 text-white hover:bg-gray-900"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {action.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickActionsPanel;
