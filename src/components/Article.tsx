import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import articles from '../modules/ArticleLoader';
import './Article.css';

interface ArticleImage {
    src: string;
    paragraph: number;
    caption?: string;
}

export interface ArticleData {
    filename: string;
    images: ArticleImage[];
}

interface ParagraphProps {
    text: string;
    imageSrc?: string;
    imageCaption?: string;
}

interface Props {
    data: ArticleData;
}

function Paragraph({ text, imageSrc, imageCaption }: ParagraphProps) {
    return (
        <div className="paragraph">
            <div className={imageSrc ? "text-column" : "text-column no-image"}>
                <Markdown className="article-text">{text}</Markdown>
            </div>
            {imageSrc && (
                <div className="media-column">
                    <img src={`/src/assets/images/${imageSrc}`} />
                    {imageCaption && <p className="image-caption">{imageCaption}</p>}
                </div>
            )}
        </div>
    );
}

export function Article({ data }: Props) {
    const [paragraphStrings, setParagraphStrings] = useState<string[]>();
    const [success, setSuccess] = useState<boolean>(true);

    useEffect(() => {
        const loadArticle = async (): Promise<string[]> => {
            const importArticle = articles[`../assets/articles/${data.filename}`];
            if(!importArticle) {
                throw new Error(`Article ${data.filename} not found!`);
            }
            
            const importedArticle = await importArticle();
    
            return importedArticle.split('\n\n');
        }
    
        loadArticle().then(paragraphs => {
            setParagraphStrings(paragraphs);
            setSuccess(true);
        }).catch(error => {
            console.error(`Error loading article ${data.filename}: ` + error);
            setSuccess(false);
        });
    }, []);

    if(!success) {
        return <p className="article-text">There was an error loading this article!</p>;
    }

    return (
        <article>
            {paragraphStrings?.map((paragraph, index) => {
                const imageObj = data.images.find(obj => obj.paragraph === index);
                if(!imageObj) {
                    console.log(`No image object found for paragraph ${index}!`)
                    return <Paragraph key={index} text={paragraph} />;
                }
                
                console.log(imageObj);
                return <Paragraph key={index} text={paragraph} imageSrc={imageObj.src} imageCaption={imageObj.caption} />;
            })}
        </article>
    );
}