import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function Home() {
	const { userData } = useSelector((state: RootState) => state.auth);

	console.log(userData);

	return (
		<div className="h-full flex gap-4 justify-center items-center">
			<h1 className="text-3xl font-bold">Home Page</h1>
		</div>
	);
}

export default Home;
