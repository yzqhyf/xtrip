// components/SignUpForm.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for Sign Up
const signUpSchema = z
	.object({
		name: z.string().min(1, "Name is required"),
		email: z
			.string()
			.email("Invalid email address"),
		password: z.string().min(6, "Password must be at least 6 characters"),
		confirmPassword: z
			.string()
			.min(6, "Confirm Password must be at least 6 characters"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUpForm({
	onSubmit,
}: {
	onSubmit: SubmitHandler<SignUpFormData>;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email Address
				</label>
				<input
					id="email"
					{...register("email")}
					className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
					placeholder="Enter your email address"
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

			<button
				type="submit"
				className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
			>
				Sign Up
			</button>
		</form>
	);
}
