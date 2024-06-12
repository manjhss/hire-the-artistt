import { Outlet } from "react-router-dom";
import { Header } from "./components/index";

function App() {
	return (
		<div className="w-full h-screen">
			<Header />

			<div className="w-[70%] h-full mx-auto">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
