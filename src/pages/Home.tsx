import { ModeToggle } from "@/components/mode-toggle";

function Home() {
	return (
		<div className="my-4 flex gap-4 justify-center">
			<h1 className="text-3xl font-bold">Home Page</h1>
			<ModeToggle />
		</div>
	);
}

export default Home;
