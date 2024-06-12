import { useParams } from "react-router-dom";

function Profile() {
	const { id } = useParams();

	return (
		<div className="h-full flex gap-4 justify-center items-center">
			<h1 className="text-3xl font-bold">Profile {id}</h1>
		</div>
	);
}

export default Profile;
