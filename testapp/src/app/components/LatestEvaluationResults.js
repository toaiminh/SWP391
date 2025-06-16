// components/LatestEvaluationResults.js
import React from "react";

const ResultTag = ({ label, status }) => {
  const color = status === "Tốt" ? "text-green-600" : "text-yellow-600";
  return (
    <div className="flex items-center space-x-2">
      <span className="font-medium">{label}</span>
      <span className={`text-sm ${color}`}>{status}</span>
    </div>
  );
};

const LatestEvaluationResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>Chưa có kết quả đánh giá gần đây.</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-300">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Kết quả đánh giá gần nhất</h2>
      <div className="space-y-2">
        {results.map((item, index) => (
          <ResultTag key={index} label={item.name} status={item.status} />
        ))}
      </div>
    </div>
  );
};

export default LatestEvaluationResults;
