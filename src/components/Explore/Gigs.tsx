import { Link } from "react-router-dom";
import { Title } from "../index";
import GigCard from "../GigCard";

function Gigs() {
	return (
		<section className="space-y-8">
			<Title>Gigs</Title>

			<div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:gap-4">
				{Array.from({ length: 4 }).map((_, index) => (
					<Link key={index} to={`/gigs/i-record-a-song`}>
						<GigCard
							img="https://www.rollingstone.com/wp-content/uploads/2023/08/guitar200-Christone-Kingfish-Ingram-GettyImages-1097122460.jpg?w=800"
							title="I will record a professional metal, rock or blues song"
							price="6,969"
						/>
					</Link>
				))}
			</div>
		</section>
	);
}

export default Gigs;
