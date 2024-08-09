import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, BrowserRouter, Routes } from "react-router-dom";
import Root from "./routes/Root";
import AboutMe from "./routes/AboutMe";
import Projects from "./routes/Projects";

function App() {
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Root />}>
					<Route index element={<AboutMe />} />
					<Route path="projects/" element={<Projects />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;