import { Article, ArticleData } from '../components/Article';
import encounterArticleJson from '../assets/articles/data/encounter_system.json';

const encounterArticleData: ArticleData = encounterArticleJson;

function TestPage() {
    return <Article data={encounterArticleData} />;
}

export default TestPage;