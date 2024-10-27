import { Route, BrowserRouter, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./components/GlobalContext";
import Root from "./routes/Root";
import AboutMe from "./routes/AboutMe";
import Projects from "./routes/Projects";
import TestPage from "./routes/TestPage";
import { Article, ArticleData } from "./components/Article";
import encounterArticleJson from "./assets/articles/data/encounter_system.json";

const encounterArticleData: ArticleData = encounterArticleJson;

function App() {
    return (
		<GlobalContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<AboutMe />} />
						<Route path="projects/">
							<Route index element={<Projects />} />
							<Route path="sync" element={<Article data={encounterArticleData} />} />
						</Route>
						{import.meta.env.DEV && <Route path="test-page/" element={<TestPage />} />}
					</Route>
				</Routes>
			</BrowserRouter>
		</GlobalContextProvider>
	);
}

export default App;