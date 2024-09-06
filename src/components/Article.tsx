import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import articles from '../modules/ArticleLoader';
import portrait from '../assets/images/portrait.jpg';
import './Article.css';

export interface ArticleData {
    filename: string
}

interface Props {
    data: ArticleData;
}

export function Article({ data }: Props) {
    const [articleParagraphs, setArticleParagraphs] = useState<string[]>();
    const [success, setSuccess] = useState<boolean>();

    useEffect(() => {
        const loadArticle = async (): Promise<string[]> => {
            const importArticle = articles[`../assets/articles/${data.filename}`];
            if(!importArticle) {
                throw new Error(`Article ${data.filename} not found!`);
            }
            
            const articleText = await importArticle();

            return articleText.split('\n\n');
        }

        loadArticle().then(paragraphs => {
            setArticleParagraphs(paragraphs);
            setSuccess(true);
        }).catch(error => {
            console.error(`Error loading article ${data.filename}: ` + error);
            setSuccess(false);
        });
    }, []);

    if(!success) {
        return <p className="article-text">There was an error loading this article!</p>
    }

    return (
        <article>
            <div className="text-column">
                {articleParagraphs?.map((paragraph, index) => (
                    <Markdown key={index} className="article-text">{paragraph}</Markdown>
                ))}
            </div>
            <div className="media-column">
                <img src={portrait} />
                <p className="image-caption">Image caption</p>
            </div>
        </article>
    );
}