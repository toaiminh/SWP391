"use client";
import React from "react";

const UserInfoHeader = ({ name, role, description }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow border border-gray-300 mb-6 transition-all duration-300 hover:shadow-lg">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
        {description && (
          <p className="text-sm text-gray-700 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default UserInfoHeader;
