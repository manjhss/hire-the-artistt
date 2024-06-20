import { Card } from "./ui/card";

type Gigs = {
	img: string;
	title: string;
	price: string;
};

function GigCard({ img, title, price }: Gigs) {
	return (
		<>
			<Card className="overflow-hidden">
				<div className="aspect-video">
					<img src={img} alt="gig-img" />
				</div>
			</Card>

			<div className="mt-2 md:px-4 space-y-1">
				<div className="lg:text-lg">{title}</div>
				<div className="lg:text-lg font-medium">
					₹ {price}
				</div>
			</div>
		</>
	);
}

export default GigCard;
