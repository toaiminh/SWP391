'use client';

import React from "react";
import UserInfoHeader from "../components/UserInfoHeader";
import UserStatsCards from "../components/UserStatsCards";
import QuickActionsPanel from "../components/QuickActionsPanel";
import LatestEvaluationResults from "../components/LatestEvaluationResults";
import EnrolledCourses from "../components/EnrolledCourses";
import UpcomingSchedule from "../components/UpcomingSchedule";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import AppFooter from "../components/AppFooter";

export default function MemberDashboard() {
	// Demo data
	const user = {
		// Sử dụng avatarUrl là một URL ảnh hợp lệ để tránh lỗi Next.js Image
	
		name: "Nguyễn Văn A",
		role: "Thành viên",
		description: "Tham gia từ 2024 | Đã xác thực email",
	};
	const stats = [
		{ title: "Khóa học đã học", value: 3, color: "text-green-600" },
		{ title: "Lịch hẹn tư vấn", value: 2, color: "text-blue-600" },
		{ title: "Bài khảo sát", value: 1, color: "text-yellow-500" },
		{ title: "Chứng nhận", value: 1, color: "text-purple-600" },
	];
	const actions = [
		{
			label: "Đặt lịch hẹn tư vấn",
			onClick: () => (window.location.href = "/member/appointments"),
			type: "primary",
		},
		{
			label: "Tham gia khóa học",
			onClick: () => (window.location.href = "/member/courses"),
		},
		{
			label: "Làm khảo sát",
			onClick: () => (window.location.href = "/member/surveys"),
		},
	];
	const results = [
		{ name: "Khảo sát ASSIST", status: "Tốt" },
		{ name: "Khảo sát CRAFFT", status: "Cần chú ý" },
	];
	const enrolledCourses = [
		{
			title: "Nhận thức về ma túy",
			progress: 80,
			status: "Đang học",
			buttonLabel: "Tiếp tục học",
			onButtonClick: () => {},
		},
		{
			title: "Kỹ năng phòng tránh",
			progress: 100,
			status: "Hoàn thành",
			buttonLabel: "Xem lại bài học",
			onButtonClick: () => {},
		},
	];
	const events = [
		{
			title: "Tư vấn cá nhân",
			date: "2025-06-20",
			time: "14:00",
			color: "#2563eb",
		},
		{
			title: "Hội thảo cộng đồng",
			date: "2025-07-01",
			time: "09:00",
			color: "#22c55e",
		},
	];

	return (
		<>
			<Navbar hideLogin />
			<main className="min-h-screen bg-white pt-28 pb-12 px-2 flex flex-col items-center animate-fade-in">
				<AppContainer>
					<UserInfoHeader {...user} />
					<UserStatsCards stats={stats} />
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
						<div className="md:col-span-2 space-y-8">
							<EnrolledCourses courses={enrolledCourses} />
							<LatestEvaluationResults results={results} />
						</div>
						<div className="space-y-8">
							<QuickActionsPanel actions={actions} />
							<UpcomingSchedule events={events} />
						</div>
					</div>
				</AppContainer>
			</main>
			<AppFooter />
		</>
	);
}
