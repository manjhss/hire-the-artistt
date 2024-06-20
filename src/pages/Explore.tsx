import {
	Trending,
	Hero,
	Services,
	RecommArtists,
	Gigs,
} from "@/components/index";

function Explore() {
	return (
		<div className="space-y-8 md:space-y-12">
			<Trending />
			<Hero />
			<Services />
			<RecommArtists />
			<Gigs />
		</div>
	);
}

export default Explore;
