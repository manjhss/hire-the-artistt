import { Card } from "./ui/card";

type Artist = { img: string; name: string };

function ArtistCard({ img, name }: Artist) {
	return (
		<>
			<Card className="overflow-hidden">
				<div className="aspect-square">
					<img src={img} alt="artist-img" />
				</div>
			</Card>

			<div className="md:px-4 py-1 inline-block lg:text-lg font-medium hover:underline">
				@{name}
			</div>
		</>
	);
}

export default ArtistCard;
