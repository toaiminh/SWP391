'use client';


import React, { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    note: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("Đặt lịch thành công! (Demo)");
    setForm({ name: "", date: "", time: "", note: "" });
  };

  return (
    <main className="min-h-screen bg-white py-10 px-2 flex flex-col items-center">
      <form onSubmit={handleSubmit} className="bg-white max-w-2xl w-full rounded-xl shadow p-8 py-10 mx-auto">
        <h1 className="text-xl font-bold text-center mb-8 text-blue-700">Đặt lịch hẹn tư vấn</h1>
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">Tên thành viên</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nhập tên của bạn..."
            className="w-full border px-3 py-2 rounded focus:outline-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">Chọn ngày</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">Chọn giờ</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">Ghi chú thêm</label>
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Ghi chú thêm (nếu có)..."
            className="w-full border px-3 py-2 rounded focus:outline-blue-400 min-h-[80px]"
          />
        </div>
        {success && <div className="text-green-600 mb-3 text-center">{success}</div>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Đặt lịch</button>
      </form>
    </main>
  );
}
