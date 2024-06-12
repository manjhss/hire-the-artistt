import { Trending, Hero, Services, RecommArtists } from "@/components/index";

function Explore() {
	return (
		<div className="space-y-12 pb-12">
			<Trending />
			<Hero />
			<Services />
			<RecommArtists/>
		</div>
	);
}

export default Explore;
