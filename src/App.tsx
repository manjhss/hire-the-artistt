import { Outlet } from "react-router-dom";
import { Header } from "./components/index";

function App() {
	return (
		<div className="w-full h-screen">
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
