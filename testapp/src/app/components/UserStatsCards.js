"use client";
import React from "react";

const StatCard = ({ title, value, color }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 text-center border border-gray-300 transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  );
};

const UserStatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default UserStatsCards;
