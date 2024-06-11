import authService from "@/appwrite/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const loginSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(8, "Password must contain at least 8 character(s)"),
});

type FormFields = z.infer<typeof loginSchema>;

function Login() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<FormFields>({ resolver: zodResolver(loginSchema) });

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
			const session = await authService.login(data);

			if (session) {
				const userData = await authService.getCurrentUser();
				console.log(userData);
				navigate("/");
			}
		} catch (error: any) {
			setError("root", {
				message: `${error.message}`,
			});
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Welcome Back</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="flex gap-2">
					<Button
						variant="outline"
						className="w-full flex gap-2"
						onClick={() => {
							authService.createAccountWithGoogle();
						}}
					>
						<img
							src="/social-icons/google.svg"
							alt="google-icon"
							width={18}
						/>
						Google
					</Button>
					<Button variant="outline" className="w-full flex gap-2">
						<Github size={22} /> GitHub
					</Button>
				</div>

				<div className="text-center">Or</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-2">
						{errors.root && (
							<div className="text-red-500 text-sm">
								{errors.root.message}
							</div>
						)}

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								{...register("email")}
								id="email"
								placeholder="text@email.com"
							/>
							{errors.email && (
								<div className="text-red-500 text-sm">
									{errors.email.message}
								</div>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								{...register("password")}
								id="password"
								placeholder="********"
							/>
							{errors.password && (
								<div className="text-red-500 text-sm">
									{errors.password.message}
								</div>
							)}
						</div>
					</div>

					<Button
						disabled={isSubmitting}
						type="submit"
						className="w-full mt-6"
					>
						Login
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}

export default Login;
