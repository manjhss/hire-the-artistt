import { Title } from "../index";
import { Link } from "react-router-dom";
import ArtistCard from "../ArtistCard";

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

			<div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:gap-4">
				{Array.from({ length: 7 }).map((_, index) => (
					<Link key={index} to={`/profile/${artistLists[index]?.id}`}>
						<ArtistCard
							img={artistLists[index].img}
							name={artistLists[index].name}
						/>
					</Link>
				))}
			</div>
		</section>
	);
}

export default RecommArtists;
