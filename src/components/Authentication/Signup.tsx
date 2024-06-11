import authService from "@/appwrite/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { login } from "@/store/authSlice";

const signUpSchema = z
	.object({
		name: z.string().min(4, "Name must be 4 or more characters long"),
		email: z.string().email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(8, "Password must contain at least 8 character(s)"),
		confirm: z
			.string()
			.min(8, "Password must contain at least 8 character(s)"),
	})
	.refine((data) => data.password === data.confirm, {
		message: "Passwords don't match",
		path: ["confirm"],
	});

type FormFields = z.infer<typeof signUpSchema>;

function Signup() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<FormFields>({ resolver: zodResolver(signUpSchema) });

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
			const userData = await authService.createAccount(data);

			if (userData) {
				const userData = await authService.getCurrentUser();
				if (userData) dispatch(login(userData));
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
				<CardTitle>Create an account</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2">
				{errors.root && (
					<div className="text-red-500 text-sm">
						{errors.root.message}
					</div>
				)}

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-2">
						<div className="space-y-2">
							<Label htmlFor="name">Full Name</Label>
							<Input
								{...register("name")}
								id="name"
								placeholder="e.g Surendra Manjhi"
							/>
							{errors.name && (
								<div className="text-red-500 text-sm">
									{errors.name.message}
								</div>
							)}
						</div>
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
								type="password"
								id="password"
								placeholder="********"
							/>
							{errors.password && (
								<div className="text-red-500 text-sm">
									{errors.password.message}
								</div>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirm">Confirm Password</Label>
							<Input
								{...register("confirm")}
								type="password"
								id="confirm"
								placeholder="********"
							/>
							{errors.confirm && (
								<div className="text-red-500 text-sm">
									{errors.confirm.message}
								</div>
							)}
						</div>
					</div>

					<Button
						disabled={isSubmitting}
						type="submit"
						className="w-full mt-6"
					>
						Sign Up
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}

export default Signup;
