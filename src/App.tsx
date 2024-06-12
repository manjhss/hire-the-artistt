import { Outlet } from "react-router-dom";
import { Header } from "./components/index";

function App() {
	return (
		<div className="w-full h-screen">
			<Header />

			<div className="lg:w-[70%] xl:w-[1066px] px-4 h-full mx-auto">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
