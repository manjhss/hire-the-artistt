import authService from "@/appwrite/auth";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const signUpSchema = z.object({
	name: z.string().min(4, "Name must be 4 or more characters long"),
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(8, "Password must contain at least 8 character(s)"),
});

type FormFields = z.infer<typeof signUpSchema>;

function Signup() {
	const navigate = useNavigate();

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
		<form onSubmit={handleSubmit(onSubmit)}>
			<Card>
				<CardHeader>
					<CardTitle>Create an account</CardTitle>
					<CardDescription>
						Lorem ipsum, dolor sit amet consectetur.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
					{errors.root && (
						<div className="text-red-500 text-sm">
							{errors.root.message}
						</div>
					)}

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
							id="password"
							placeholder="********"
						/>
						{errors.password && (
							<div className="text-red-500 text-sm">
								{errors.password.message}
							</div>
						)}
					</div>
				</CardContent>
				<CardFooter>
					<Button
						disabled={isSubmitting}
						type="submit"
						className="w-full"
					>
						Sign Up
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
}

export default Signup;
