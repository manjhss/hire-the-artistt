import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ThemeProvider } from "@/components/theme-provider";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import AddGig from "./pages/AddGig";

import { Protected } from "@/components/index.ts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: (
					<Protected authentication={false}>
						<Login />
					</Protected>
				),
			},
			{
				path: "/explore",
				element: <Explore />,
			},
			{
				path: "/profile/:id",
				element: <Profile />,
			},
			{
				path: "/create-gig",
				element: (
					<Protected>
						<AddGig />
					</Protected>
				),
			},
		],
	},
]);

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</ThemeProvider>
);
