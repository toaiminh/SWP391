"use client";
import React from "react";

function CourseCard({
  title,
  description,
  progress,
  duration,
  learners,
  status,
  buttonLabel,
  onButtonClick,
}) {
  return (
    <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-md w-full mb-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <h3 className="font-semibold text-lg mb-1 text-gray-800">{title}</h3>
      {description && <p className="text-sm text-gray-600 mb-2">{description}</p>}
      
      {/* Progress bar */}
      {progress !== undefined && (
        <div className="mb-2">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="bg-gray-800 h-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Hoàn thành {progress}%</p>
        </div>
      )}

      {/* Thông tin phụ */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        {duration && <span>⏱ {duration}</span>}
        {learners !== undefined && <span>👥 {learners} người học</span>}
        {status && <span className="italic">{status}</span>}
      </div>

      {/* Button */}
      {buttonLabel && (
        <button
          className="mt-3 px-4 py-1 bg-gray-800 text-white rounded hover:scale-105 hover:bg-gray-900 transition-all text-sm shadow focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default CourseCard;
