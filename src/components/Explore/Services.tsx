import { Title } from "../index";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Brush, Clapperboard, Music, Video } from "lucide-react";
import { Link } from "react-router-dom";

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
			name: "Video Editing",
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
			name: "Video Editing",
			path: "/explore",
			icon: <Video size={32} />,
		},
	];

	return (
		<section className="space-y-8">
			<Title>Services</Title>

			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full"
			>
				<CarouselContent>
					{serviceItems.map((item, index) => (
						<CarouselItem
							key={index}
							className="md:basis-1/4 lg:basis-1/6"
						>
							<div className="p-1 cursor-pointer">
								<Link to={item.path}>
									<Card className="hover:bg-muted transition-all duration-200 ease-linear">
										<div className="aspect-square flex gap-4 flex-col justify-center items-center">
											<div>{item.icon}</div>
											<div className="font-medium">
												{item.name}
											</div>
										</div>
									</Card>
								</Link>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}

export default Services;
