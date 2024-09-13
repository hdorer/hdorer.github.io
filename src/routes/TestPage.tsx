import { Article, ArticleData } from '../components/Article';
import articleJson from '../assets/articles/data/encounter_system.json';

const articleData: ArticleData = articleJson;

function TestPage() {
    return <Article data={articleData} />;
}

export default TestPage;