"use client"

// components/AuthForm.tsx
import { useState } from "react";
import SignUpForm from "./signupForm";
import LoginForm from "./loginForm";
import '../../styles/globals.css';

export default function AuthForm() {
	const [isRegistered, setIsRegistered] = useState(true); // Track whether the user is logging in or signing up

	const handleSignUpSubmit = (data: any) => {
		console.log("SignUp Data: ", data);
		// Handle sign up submission logic here
	};

	const handleLoginSubmit = (data: any) => {
		console.log("Login Data: ", data);
		// Handle login submission logic here
	};

	const toggleForm = () => {
		setIsRegistered((prev) => !prev); // Toggle between sign up and login
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
				<h2 className="text-2xl font-bold text-center mb-4">
					{isRegistered ? "Login" : "Sign Up"}
				</h2>

				{/* Conditionally render the LoginForm or SignUpForm */}
				{isRegistered ? (
					<LoginForm onSubmit={handleLoginSubmit} />
				) : (
					<SignUpForm onSubmit={handleSignUpSubmit} />
				)}

				{/* Toggle between Login and Sign Up */}
				<div className="mt-4 text-center">
					<button
						onClick={toggleForm} // Call the toggle function to switch forms
						className="text-sm text-blue-600 hover:underline"
					>
						{isRegistered
							? "Don't have an account? Sign up"
							: "Already have an account? Login"}
					</button>
				</div>
			</div>
		</div>
	);
}
