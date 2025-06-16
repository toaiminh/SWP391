// components/SuggestedCourses.js
"use client";

import React from "react";
import CourseCard from "./CourseCard";

export default function SuggestedCourses({ courses = [] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-4">Khóa học được đề xuất</h3>
      <p className="text-sm text-gray-500 mb-4">Dựa trên hồ sơ và độ tuổi của bạn</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}
