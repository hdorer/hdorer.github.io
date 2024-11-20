import { Route, BrowserRouter, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./components/GlobalContext";
import Root from "./routes/Root";
import AboutMe from "./routes/AboutMe";
import Projects from "./routes/Projects";
import TestPage from "./routes/TestPage";
import { Article, ArticleData } from "./components/Article";
import syncShowcaseJson from "./assets/articles/data/sync_showcase.json";

const syncShowcaseData = syncShowcaseJson as ArticleData;

function App() {
	// Temporary until About Me page is finished
	if(import.meta.env.DEV) {
		return (
			<GlobalContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Root />}>
							<Route index element={<AboutMe />} />
							<Route path="projects/">
								<Route index element={<Projects />} />
								<Route path="sync" element={<Article data={syncShowcaseData} />} />
							</Route>
							<Route path="test-page/" element={<TestPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</GlobalContextProvider>
		);
	} else {
		return (
			<GlobalContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Root />}>
							<Route index element={<Projects />} />
							<Route path="sync" element={<Article data={syncShowcaseData} />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</GlobalContextProvider>
		);
	}
}

export default App;