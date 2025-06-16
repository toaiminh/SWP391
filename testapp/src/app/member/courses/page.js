'use client';

import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const courses = [
	{
		id: 1,
		title: "Nhận thức về ma túy",
		desc: "Hiểu về tác hại và cách phòng tránh ma túy trong cộng đồng.",
		target: "Học sinh, Giáo viên",
		price: 0,
	},
	{
		id: 2,
		title: "Kỹ năng phòng tránh",
		desc: "Trang bị kỹ năng thực tế để nói không với ma túy.",
		target: "Phụ huynh, Thanh thiếu niên",
		price: 49000,
	},
	{
		id: 3,
		title: "Kỹ năng từ chối",
		desc: "Thực hành các tình huống từ chối cám dỗ hiệu quả.",
		target: "Sinh viên, Học sinh",
		price: 0,
	},
];

export default function MemberCourses() {
	const [selected, setSelected] = useState(null);
	const [paid, setPaid] = useState(false);

	return (
		<>
			<Navbar hideLogin />
			<main className="min-h-screen bg-white pt-28 pb-12 px-2 flex flex-col items-center animate-fade-in">
				<h1 className="text-2xl font-bold text-center mb-10 text-gray-800">
					Danh sách khóa học
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{courses.map((course) => (
						<div
							key={course.id}
							className="bg-white rounded-lg shadow p-6 flex flex-col border border-gray-300"
						>
							<h2 className="font-bold text-lg mb-2 text-gray-800">
								{course.title}
							</h2>
							<p className="text-gray-600 mb-1 line-clamp-2">
								{course.desc}
							</p>
							<p className="text-sm text-gray-500 mb-1">
								Đối tượng:{" "}
								<span className="font-medium text-gray-800">
									{course.target}
								</span>
							</p>
							<p className="text-sm mb-4">
								Giá:{" "}
								{course.price === 0 ? (
									<span className="text-gray-800 font-semibold">
										Miễn phí
									</span>
								) : (
									<span className="text-yellow-700 font-semibold">
										{course.price.toLocaleString()}đ
									</span>
								)}
							</p>
							{selected === course.id ? (
								<div className="mt-2 border-t pt-4">
									<h3 className="font-bold mb-2 text-gray-800">
										Thanh toán khóa học
									</h3>
									<img
										src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=demo"
										alt="QR code"
										className="mx-auto mb-3 rounded"
									/>
									{!paid ? (
										<button
											onClick={() => setPaid(true)}
											className="w-full bg-gray-800 text-white py-2 rounded font-semibold hover:bg-gray-900 transition"
										>
											Tôi đã thanh toán
										</button>
									) : (
										<div className="text-green-600 font-semibold text-center">
											Cảm ơn! Bạn có thể học ngay.
										</div>
									)}
								</div>
							) : (
								<button
									className="mt-auto px-4 py-2 bg-gray-800 text-white rounded font-semibold hover:bg-gray-900 transition"
									onClick={() => {
										setSelected(course.id);
										setPaid(false);
									}}
								>
									Đăng ký học
								</button>
							)}
						</div>
					))}
				</div>
			</main>
		</>
	);
}
