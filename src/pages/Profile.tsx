import { RootState } from "@/store/store";
import { EditIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Profile() {
	const { id } = useParams();

	const [user, setUser] = useState(false);

	const { status } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		if (status) {
			setUser(true);
		}
	}, []);

	return (
		<div className="h-screen flex gap-4 justify-center items-center">
			<div className="flex gap-4 items-center flex-wrap justify-center">
				<h1 className="text-3xl font-bold">@{id}</h1>
				{user && <EditIcon strokeWidth={3} />}
			</div>
		</div>
	);
}

export default Profile;
