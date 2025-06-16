import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow">
        <div className="text-xl font-bold">DUPSS</div>
        <div>
          <button onClick={() => router.push('/Login')} className="mr-4 border px-4 py-2 rounded">
            Đăng nhập
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Đăng ký
          </button>
        </div>
      </header>

      {/* Banner */}
      <section className="text-center p-10 bg-blue-50 flex-1">
        <p className="text-blue-500 font-medium">Hệ thống hỗ trợ phòng ngừa ma tuý</p>
        <h1 className="text-4xl font-bold my-4">
          Drug Use Prevention <span className="text-blue-600">Support System</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Xây dựng một cộng đồng mạnh mẽ thông qua truyền thông, đào tạo, sàng lọc nguy cơ và tư vấn chuyên nghiệp
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded mr-4">Tham gia ngay</button>
          <button className="border px-6 py-2 rounded">Tìm hiểu thêm</button>
        </div>
      </section>

      {/* Services */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 text-center">
        {[
          { icon: "📘", title: "Kiến thức & Blog" },
          { icon: "🎓", title: "Khóa học Online" },
          { icon: "🛡️", title: "Sàng lọc nguy cơ" },
          { icon: "❤️", title: "Tư vấn chuyên nghiệp" },
        ].map((s, idx) => (
          <div key={idx} className="p-4 border rounded shadow-sm">
            <div className="text-4xl">{s.icon}</div>
            <h3 className="font-bold mt-2">{s.title}</h3>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8 text-center">
        <p>&copy; 2024 DUPSS. Bản quyền thuộc về hệ thống phòng ngừa ma tuý.</p>
      </footer>
    </div>
  );
}
