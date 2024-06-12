import { Title } from "../index";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

function RecommArtists() {
	const artistLists = [
		{
			id: "2401",
			name: "manjhss",
			img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=ais_user",
		},

		{
			id: "2501",
			name: "deepu",
			img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1718150400&semt=ais_user",
		},
		{
			id: "2103",
			name: "supraa",
			img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg",
		},
		{
			id: "1206",
			name: "ractor",
			img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=ais_user",
		},
		{
			id: "1608",
			name: "norbhayy",
			img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1718150400&semt=ais_user",
		},
		{
			id: "2702",
			name: "rupa",
			img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg",
		},
		{
			id: "2207",
			name: "vishaal",
			img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=ais_user",
		},
	];

	return (
		<section className="space-y-8">
			<Title>Artists</Title>

			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full"
			>
				<CarouselContent>
					{artistLists.map((item, index) => (
						<CarouselItem
							key={index}
							className="md:basis-1/4 lg:basis-1/5"
						>
							<Link to={`/profile/${item.id}`}>
								<Card className="overflow-hidden">
									<div className="aspect-square">
										<img src={item.img} alt="" />
									</div>
								</Card>
								<div className="px-4 py-1 text-lg font-medium">
									@{item.name}
								</div>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}

export default RecommArtists;
