import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
