import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Trending() {
	const trendingItems = [
		{
			name: "Music",
			path: "/explore",
		},
		{
			name: "Drawing",
			path: "/explore",
		},
		{
			name: "Animation",
			path: "/explore",
		},
		{
			name: "Video Editing",
			path: "/explore",
		},
		{
			name: "Animation",
			path: "/explore",
		},
		{
			name: "Drawing",
			path: "/explore",
		},
		{
			name: "Animation",
			path: "/explore",
		},
		{
			name: "Video Editing",
			path: "/explore",
		},
		{
			name: "Animation",
			path: "/explore",
		},
		{
			name: "Animation",
			path: "/explore",
		},
		{
			name: "Video Editing",
			path: "/explore",
		},
		{
			name: "Animation",
			path: "/explore",
		},
	];

	return (
		<div className="py-4 flex gap-2 overflow-y-auto">
			{trendingItems.map((item) => (
				<Button key={item.name} variant="outline">
					<Link to={item.path}>{item.name}</Link>
				</Button>
			))}
		</div>
	);
}

export default Trending;
