import { Link } from "react-router-dom";
import { Title } from "../index";
import { Brush, Clapperboard, Music, Video } from "lucide-react";
import ServiceCard from "../ServiceCard";

function Services() {
	const serviceItems = [
		{
			name: "Music",
			path: "/explore",
			icon: <Music size={32} />,
		},
		{
			name: "Drawing",
			path: "/explore",
			icon: <Brush size={32} />,
		},
		{
			name: "Animation",
			path: "/explore",
			icon: <Clapperboard size={32} />,
		},
		{
			name: "Editing",
			path: "/explore",
			icon: <Video size={32} />,
		},
		{
			name: "Music",
			path: "/explore",
			icon: <Music size={32} />,
		},
		{
			name: "Drawing",
			path: "/explore",
			icon: <Brush size={32} />,
		},
		{
			name: "Animation",
			path: "/explore",
			icon: <Clapperboard size={32} />,
		},
		{
			name: "Editing",
			path: "/explore",
			icon: <Video size={32} />,
		},
	];

	return (
		<section className="space-y-8">
			<Title>Services</Title>

			<div className="grid grid-cols-4 gap-2 md:grid-cols-6 lg:gap-4">
				{Array.from({ length: 8 }).map((_, index) => (
					<Link key={index} to={serviceItems[index].path}>
						<ServiceCard
							icon={serviceItems[index].icon}
							name={serviceItems[index].name}
						/>
					</Link>
				))}
			</div>
		</section>
	);
}

export default Services;
