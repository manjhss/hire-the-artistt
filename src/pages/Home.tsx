import authService from "@/appwrite/auth";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

function Home() {
	return (
		<div className="my-4 flex gap-4 justify-center items-center">
			<h1 className="text-3xl font-bold">Home Page</h1>
			<ModeToggle />
			<Button
				onClick={() => {
					authService.logout();
				}}
			>
				<LogOut />
			</Button>
		</div>
	);
}

export default Home;
