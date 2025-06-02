// components/LoginForm.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for Login
const loginSchema = z.object({
	email: z
		.string()
		.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm({
	onSubmit,
}: {
	onSubmit: SubmitHandler<LoginFormData>;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

			<button
				type="submit"
				className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
			>
				Login
			</button>
		</form>
	);
}
