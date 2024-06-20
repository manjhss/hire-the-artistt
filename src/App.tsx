import { Outlet } from "react-router-dom";
import { Container, Header } from "./components/index";

function App() {
	return (
		<div className="w-full">
			<Header />

			<div className="px-4">
				<Container>
					<Outlet />
				</Container>
			</div>
		</div>
	);
}

export default App;
