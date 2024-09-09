import { Route, BrowserRouter, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./components/GlobalContext";
import Root from "./routes/Root";
import AboutMe from "./routes/AboutMe";
import Projects from "./routes/Projects";
import TestPage from "./routes/TestPage";

function App() {
    return (
		<GlobalContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<AboutMe />} />
						<Route path="projects/" element={<Projects />} />
						{import.meta.env.DEV && <Route path="test-page/" element={<TestPage />} />}
					</Route>
				</Routes>
			</BrowserRouter>
		</GlobalContextProvider>
	);
}

export default App;