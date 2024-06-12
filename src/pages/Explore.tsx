import { Trending, Hero, Services } from "@/components/index";

function Explore() {
	return (
		<div className="space-y-12 pb-12">
			<Trending />
			<Hero />
			<Services />
		</div>
	);
}

export default Explore;
