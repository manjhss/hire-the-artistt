import { CircleGauge, Home } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import authService from "@/appwrite/auth";
import { logout } from "@/store/authSlice";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
	const { status, userData } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();

	const navItems = [
		{
			name: "Home",
			element: <Home />,
			path: "/",
		},
		{
			name: "Explore",
			element: <CircleGauge />,
			path: "/explore",
		},
	];

	return (
		<header className="border-b">
			<nav className="w-[70%] mx-auto py-4 flex flex-wrap justify-between items-center gap-x-8 gap-y-4">
				<div className="flex gap-2">
					<Input className="w-96" placeholder="Search..." />
				</div>

				<ul className="flex gap-8 items-center">
					{navItems.map((item) => (
						<li key={item.name}>
							<Link to={item.path}>{item.element}</Link>
						</li>
					))}

					{!status && (
						<Button>
							<Link to="/login">Login</Link>
						</Button>
					)}

					{status && (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Avatar className="cursor-pointer">
									<AvatarImage src="" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56">
								<DropdownMenuLabel>
									{userData.email}
								</DropdownMenuLabel>
								<DropdownMenuSeparator />

								<Link to={`/profile/${userData.$id}`}>
									<DropdownMenuItem>Profile</DropdownMenuItem>
								</Link>

								<DropdownMenuItem
									onClick={() => {
										authService.logout();
										dispatch(logout());
									}}
								>
									Log out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
