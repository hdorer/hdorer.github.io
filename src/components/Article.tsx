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
    const [articleText, setArticleText] = useState('');

    useEffect(() => {
        const loadArticle = async () => {
            try {
                const importArticle = articles[`../assets/articles/${data.filename}`];
                if(importArticle) {
                    const articleText = await importArticle();
                    setArticleText(articleText);
                } else {
                    setArticleText(`Error: Article ${data.filename} not found!`);
                }
            } catch(error) {
                console.error(`Error loading article ${data.filename}: `, error);
                setArticleText(`Error loading article ${data.filename}!`);
            }
        }

        loadArticle();
    }, [data.filename, articles]);

    return (
        <article>
            <div className="text-column">
                <Markdown className="article-text">{articleText}</Markdown>
            </div>
            <div className="media-column">
                <img src={portrait} />
                <p>Image caption</p>
            </div>
        </article>
    );
}