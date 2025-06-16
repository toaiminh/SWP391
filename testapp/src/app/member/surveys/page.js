'use client';

import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const filters = [
  { label: "Tất cả", value: "all" },
  { label: "Học sinh", value: "student" },
  { label: "Sinh viên", value: "university" },
  { label: "Phụ huynh", value: "parent" },
  { label: "Giáo viên", value: "teacher" },
];

const surveys = [
  {
    id: 1,
    title: "Khảo sát ASSIST",
    desc: "Đánh giá nguy cơ sử dụng chất gây nghiện cho học sinh, sinh viên.",
    icon: "📝",
    age: ["student", "university", "parent", "teacher"],
  },
  {
    id: 2,
    title: "Khảo sát CRAFFT",
    desc: "Sàng lọc nguy cơ sử dụng ma túy ở thanh thiếu niên.",
    icon: "📊",
    age: ["student", "university"],
  },
  {
    id: 3,
    title: "Khảo sát dành cho phụ huynh",
    desc: "Đánh giá nhận thức và kỹ năng phòng ngừa cho phụ huynh.",
    icon: "👨‍👩‍👧‍👦",
    age: ["parent"],
  },
  {
    id: 4,
    title: "Khảo sát dành cho giáo viên",
    desc: "Khảo sát kỹ năng phát hiện và hỗ trợ học sinh nguy cơ.",
    icon: "👩‍🏫",
    age: ["teacher"],
  },
  {
    id: 5,
    title: "Khảo sát nhận thức chung",
    desc: "Đánh giá kiến thức cơ bản về phòng ngừa ma túy.",
    icon: "💡",
    age: ["all", "student", "university", "parent", "teacher"],
  },
];

export default function SurveyList() {
  const [filter, setFilter] = useState("all");

  // Responsive: nếu mobile, filter dạng tab ngang
  // Lọc survey theo filter
  const filteredSurveys =
    filter === "all"
      ? surveys
      : surveys.filter((s) => s.age.includes(filter));

  return (
    <>
      <Navbar hideLogin />
      <main className="min-h-screen bg-white pt-28 pb-12 px-2 flex flex-col items-center animate-fade-in">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 mx-auto">
          {/* Sidebar filter */}
          <aside className="md:w-1/5 w-full mb-4 md:mb-0">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 md:sticky top-10 border border-gray-300">
              <h2 className="font-bold text-lg mb-2 text-gray-800">Lọc theo độ tuổi</h2>
              <div className="flex md:flex-col flex-row gap-2 md:gap-3">
                {filters.map((f) => (
                  <button
                    key={f.value}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all
                      ${filter === f.value ? 'bg-gray-800 text-white border-gray-800 shadow' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                    onClick={() => setFilter(f.value)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>
          {/* Survey grid */}
          <section className="md:w-4/5 w-full">
            <h1 className="text-2xl font-bold mb-8 text-gray-800">Chọn bài khảo sát phù hợp</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSurveys.map((s) => (
                <div
                  key={s.id}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 group border border-gray-300"
                >
                  <div className="text-5xl mb-3 animate-float">{s.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{s.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{s.desc}</p>
                  <button
                    className="mt-auto px-5 py-2 rounded-xl font-semibold bg-gray-800 text-white shadow hover:bg-gray-900 transition group-hover:scale-105"
                    onClick={() => window.location.href = `/member/surveys/${s.id}`}
                  >
                    Bắt đầu khảo sát
                  </button>
                </div>
              ))}
              {filteredSurveys.length === 0 && (
                <div className="col-span-full text-center text-gray-500">Không có khảo sát phù hợp.</div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
