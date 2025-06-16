"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Illustration from "../components/Illustration";
import AppContainer from "../components/AppContainer";
import AppFooter from "../components/AppFooter";
import FormField from "../components/FormField";

export default function GuestPage() {
  const [search, setSearch] = useState("");

  const courses = [
    { id: 1, title: "Nhận thức về ma túy", ageGroup: "Học sinh" },
    { id: 2, title: "Kỹ năng phòng tránh", ageGroup: "Phụ huynh" },
    { id: 3, title: "Kỹ năng từ chối", ageGroup: "Sinh viên" },
    { id: 4, title: "Kỹ năng giao tiếp và ứng xử", ageGroup: "Thanh thiếu niên" },
    { id: 5, title: "Phòng ngừa ma túy trong gia đình", ageGroup: "Phụ huynh" },
    { id: 6, title: "Nhận diện nguy cơ và hỗ trợ bạn bè", ageGroup: "Học sinh, Sinh viên" },
    { id: 7, title: "Tư duy tích cực và xây dựng lối sống lành mạnh", ageGroup: "Mọi lứa tuổi" },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <Navbar guestMode />
      <AppContainer>
        {/* Banner */}
        <section className="text-center py-16 mt-20 bg-white rounded-xl shadow mb-12 px-4 flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 opacity-80 pointer-events-none rounded-xl" />
          <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 font-sans tracking-tight" style={{ fontFamily: 'var(--font-geist-sans), Montserrat, Arial, sans-serif' }}>
                Phần mềm hỗ trợ phòng ngừa sử dụng ma túy
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Tổ chức phi lợi nhuận hỗ trợ cộng đồng phòng ngừa sử dụng ma túy thông qua giáo dục, tư vấn, truyền thông và các chương trình cộng đồng.
              </p>
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <a
                  href="#courses"
                  className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-900 transition text-lg animate-bounce"
                >
                  Khám phá khóa học
                </a>
                <a
                  href="#about"
                  className="border border-gray-800 text-gray-800 bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
                >
                  Tìm hiểu thêm
                </a>
                <a
                  href="/register"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition text-lg"
                >
                  Đăng ký
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Illustration src="/globe.svg" alt="Globe" />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-12 w-full max-w-6xl mx-auto bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <SectionTitle>Giới thiệu tổ chức</SectionTitle>
          <p className="text-gray-700 text-lg text-center">
            Tổ chức ABC là tổ chức phi lợi nhuận hỗ trợ cộng đồng phòng ngừa sử dụng ma túy thông qua giáo dục, tư vấn, và truyền thông. Chúng tôi hướng tới xây dựng một cộng đồng khỏe mạnh, an toàn và không có ma túy.<br /><br />
            Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cung cấp các chương trình đào tạo, hội thảo, khóa học kỹ năng và các hoạt động truyền thông nhằm nâng cao nhận thức, trang bị kiến thức và kỹ năng phòng tránh cho mọi đối tượng trong xã hội. Ngoài ra, tổ chức còn phối hợp với các trường học, gia đình và cộng đồng để xây dựng môi trường sống lành mạnh, hỗ trợ tư vấn tâm lý, can thiệp sớm và đồng hành cùng những người có nguy cơ hoặc đã từng sử dụng ma túy trên hành trình tái hòa nhập cộng đồng.
          </p>
        </section>

        {/* Blog */}
        <section id="blog" className="mb-12 w-full max-w-6xl mx-auto">
          <SectionTitle className="text-center">Blog chia sẻ</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          { [
              {
                title: "Câu chuyện vượt qua cám dỗ của một bạn trẻ",
                desc: "Hành trình vượt qua cám dỗ và xây dựng cuộc sống mới.",
                img: "https://source.unsplash.com/400x250/?youth,success",
              },
              {
                title: "Vai trò của gia đình trong phòng chống ma túy",
                desc: "Gia đình là nền tảng vững chắc giúp con trẻ tránh xa ma túy.",
                img: "https://source.unsplash.com/400x250/?family,care",
              },
              {
                title: "Top 5 kỹ năng giúp thanh thiếu niên từ chối cám dỗ",
                desc: "Những kỹ năng thực tế giúp bạn trẻ tự tin nói không với ma túy.",
                img: "https://source.unsplash.com/400x250/?skills,teenager",
              },
              {
                title: "Những dấu hiệu nhận biết sớm nguy cơ sử dụng ma túy",
                desc: "Cách phát hiện sớm các biểu hiện bất thường ở thanh thiếu niên.",
                img: "https://source.unsplash.com/400x250/?warning,teenager",
              },
              {
                title: "Chia sẻ từ chuyên gia tư vấn tâm lý",
                desc: "Lời khuyên thực tế từ các chuyên gia trong lĩnh vực phòng ngừa ma túy.",
                img: "https://source.unsplash.com/400x250/?psychologist,advice",
              },
              {
                title: "Cộng đồng cùng hành động",
                desc: "Vai trò của cộng đồng trong việc hỗ trợ phòng ngừa và can thiệp sớm.",
                img: "https://source.unsplash.com/400x250/?community,help",
              },
            ].map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col h-full border border-gray-300"
              >
                <img
                  src={blog.img}
                  alt="blog"
                  className="rounded-lg mb-3 h-40 object-cover w-full"
                />
                <h3 className="font-bold text-lg mb-1 text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 text-base mb-2 flex-1">
                  {blog.desc}
                </p>
                <button className="mt-auto px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition">
                  Tìm hiểu thêm
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="mb-12 w-full max-w-6xl mx-auto">
          <SectionTitle className="text-center">Khóa học phổ biến</SectionTitle>
          <FormField
            label="Tìm kiếm khóa học"
            placeholder="Nhập tên khóa học..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col h-full border border-gray-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎓</span>
                  <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Đối tượng: <span className="font-medium text-gray-800">{course.ageGroup}</span>
                </p>
                <button
                  className="mt-auto px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.assign('/register');
                  }}
                >
                  Đăng ký (Chỉ dành cho thành viên)
                </button>
              </div>
            ))}
            {filteredCourses.length === 0 && <p>Không tìm thấy khóa học nào.</p>}
          </div>
        </section>
      </AppContainer>
      {/* Section Liên hệ */}
      <section id="contact" className="w-full bg-gray-100 border-t border-gray-200 py-10 px-4 flex flex-col items-center mt-8">
        <SectionTitle>Liên hệ</SectionTitle>
        <div className="text-gray-700 text-base text-center space-y-2 max-w-md">
          <div><span className="font-semibold">Email:</span> lienhe@abc.org.vn</div>
          <div><span className="font-semibold">Hotline:</span> 1800 1234</div>
          <div><span className="font-semibold">Địa chỉ:</span> 123 Đường ABC, Quận 1, TP.HCM</div>
        </div>
      </section>
      <AppFooter />
    </main>
  );
}
