import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./routes/AboutMe"
import Projects from "./routes/Projects";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AboutMe />
	},
	{
		path: "projects/",
		element: <Projects />
	}
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;