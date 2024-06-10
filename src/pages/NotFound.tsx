import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="my-4 flex flex-col gap-4 items-center">
			<div className="text-3xl font-bold">Oooops, wrong turn 💀</div>
			<Button>
				<Link to="/">Safe Zone</Link>
			</Button>
		</div>
	);
}

export default NotFound;
