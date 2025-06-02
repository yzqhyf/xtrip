"use client";

import { useState } from "react";
import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
	.object({
		name: z.string().min(1, "Name is required").optional(),
		email: z
			.string()
			.email("Invalid email address")
			.min(1, "Email is required"),
		password: z.string().min(6, "Password must be at least 6 characters"),
		confirmPassword: z
			.string()
			.min(6, "Confirm Password must be at least 6 characters")
			.optional(),
	})
	.refine(
		(data) => {
			// Ensure password and confirmPassword match for Sign Up
			if (data.password !== data.confirmPassword) {
				return false;
			}
			return true;
		},
		{
			message: "Passwords don't match",
			path: ["confirmPassword"],
		}
	);

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
	const [isRegistered, setIsRegistered] = useState(true);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log("Form Submitted: ", data);
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
				<h2 className="text-2xl font-bold text-center mb-4">
					{isRegistered ? "Login" : "Sign Up"}
				</h2>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					{!isRegistered && (
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Name
							</label>
							<input
								id="name"
								type="text"
								{...register("name")}
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
								placeholder="Enter your full name"
							/>
							{errors.name && (
								<p className="text-red-500 text-xs">
									{errors.name.message}
								</p>
							)}
						</div>
					)}

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email Address
						</label>
						<input
							id="email"
							type="email"
							{...register("email")}
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
							placeholder="john@example.com"
						/>
						{errors.email && (
							<p className="text-red-500 text-xs">
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							{...register("password")}
							className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
							placeholder="Enter your password"
						/>
						{errors.password && (
							<p className="text-red-500 text-xs">
								{errors.password.message}
							</p>
						)}
					</div>

					{!isRegistered && (
						<div>
							<label
								htmlFor="confirmPassword"
								className="block text-sm font-medium text-gray-700"
							>
								Confirm Password
							</label>
							<input
								id="confirmPassword"
								type="password"
								{...register("confirmPassword")}
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
								placeholder="Confirm your password"
							/>
							{errors.confirmPassword && (
								<p className="text-red-500 text-xs">
									{errors.confirmPassword.message}
								</p>
							)}
						</div>
					)}

					<button
						type="submit"
						className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
					>
						{isRegistered ? "Login" : "Sign Up"}
					</button>

					{/* Toggle between Login and Sign Up */}
					<div className="mt-4 text-center">
						<button
							onClick={() => setIsRegistered(!isRegistered)}
							className="text-sm text-blue-600 hover:underline"
						>
							{isRegistered
								? "Don't have an account? Sign up"
								: "Already have an account? Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
