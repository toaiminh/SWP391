'use client';
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import AppFooter from "../components/AppFooter";
import FormField from "../components/FormField";

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.username || !form.email || !form.password || !form.confirmPassword || !form.dob) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }
    setSuccess("Đăng ký thành công! (Demo)");
    setError("");
    // Reset form sau khi đăng ký thành công (demo)
    setForm({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
    });
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <Navbar />
      <AppContainer>
        <section className="w-full max-w-2xl bg-white rounded-xl shadow p-8 mt-24 mb-12 flex flex-col items-center mx-auto">
          <SectionTitle className="text-center mb-4">Đăng ký tài khoản</SectionTitle>
          <form onSubmit={handleSubmit} className="w-full">
            <FormField label="Họ tên đầy đủ" name="fullName" value={form.fullName} onChange={handleChange} />
            <FormField label="Tên đăng nhập" name="username" value={form.username} onChange={handleChange} />
            <FormField label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
            <FormField label="Mật khẩu" type="password" name="password" value={form.password} onChange={handleChange} />
            <FormField label="Nhập lại mật khẩu" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
            <FormField label="Ngày sinh" type="date" name="dob" value={form.dob} onChange={handleChange} />
            {error && <div className="text-red-500 mb-3 text-center">{error}</div>}
            {success && <div className="text-green-600 mb-3 text-center">{success}</div>}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Đăng ký</button>
          </form>
        </section>
      </AppContainer>
      <AppFooter />
    </main>
  );
}
