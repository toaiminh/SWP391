'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AppContainer from '../components/AppContainer';
import AppFooter from '../components/AppFooter';
import FormField from '../components/FormField';

const DEMO_USERS = [
	{ email: 'member@demo.com', password: 'member123', role: 'member', redirect: '/member' },
	{ email: 'staff@demo.com', password: 'staff123', role: 'staff', redirect: '/staff' },
	{ email: 'admin@demo.com', password: 'admin123', role: 'admin', redirect: '/admin' },
	{ email: 'guest@demo.com', password: 'guest123', role: 'guest', redirect: '/guest' },
	{ email: 'consultant@demo.com', password: 'consultant123', role: 'consultant', redirect: '/consultant' },
];

export default function LoginPage() {
	const router = useRouter();
	const [form, setForm] = useState({ email: '', password: '' });
	const [error, setError] = useState('');

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setError('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = DEMO_USERS.find(
			(u) => u.email === form.email && u.password === form.password
		);
		if (user) {
			router.push(user.redirect);
		} else {
			setError('Sai email hoặc mật khẩu demo!');
		}
	};

	const goToRegister = () => {
		router.push('/register');
	};

	return (
		<main className="min-h-screen bg-white py-10 px-2 flex flex-col items-center">
			<AppContainer>
				<form
					onSubmit={handleSubmit}
					style={{
						backgroundColor: 'white',
						padding: '2rem',
						borderRadius: '8px',
						boxShadow: '0 0 10px rgba(0,0,0,0.1)',
						minWidth: '320px',
					}}
				>
					<h2 className="text-center mb-4" style={{ color: 'black' }}>
						Đăng nhập
					</h2>
					<FormField label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
					<FormField label="Mật khẩu" type="password" name="password" value={form.password} onChange={handleChange} />
					<div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
						<input type="checkbox" id="remember" name="remember" style={{ marginRight: '0.5rem' }} />
						<label htmlFor="remember" style={{ color: 'black' }}>Ghi nhớ mật khẩu</label>
					</div>
					{error && (
						<div className="text-red-500 mb-3 text-center">{error}</div>
					)}
					<div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
						>
							Đăng nhập
						</button>
						<button
							type="button"
							onClick={goToRegister}
							className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition"
						>
							Đăng ký
						</button>
					</div>
					<div className="mt-6 text-gray-600 text-sm">
						<b>Tài khoản demo:</b>
						<ul className="list-disc ml-6 mt-2">
							<li>Member: member@demo.com / member123</li>
							<li>Staff: staff@demo.com / staff123</li>
							<li>Admin: admin@demo.com / admin123</li>
							<li>Guest: guest@demo.com / guest123</li>
							<li>Consultant: consultant@demo.com / consultant123</li>
						</ul>
					</div>
				</form>
			</AppContainer>
			<AppFooter />
		</main>
	);
}