import { useContext, useRef, useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import HeightGetter from './HeightGetter';
import globalContext from './GlobalContext';
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
    const imageMinHeight = 240;

    const context = useContext(globalContext);
    if(!context) {
        throw new Error("Missing context (is the component you're trying to use this in inside a GlobalContextProvider?)");
    }

    const textRef = useRef<HTMLDivElement>(null);
    const captionRef = useRef<HTMLParagraphElement>(null);

    const [textHeight, recordTextHeight] = useState(0);
    const [captionHeight, recordCaptionHeight] = useState(0);

    const { screenWidth } = context;

    return (
        <div className="paragraph">
            <HeightGetter elementRef={textRef} setHeight={recordTextHeight} />
            <HeightGetter elementRef={captionRef} setHeight={recordCaptionHeight} />
            <div className="text-column">
                <div ref={textRef} className="text-wrapper">
                    <Markdown className="article-text">{text}</Markdown>
                </div>
            </div>
            {imageSrc && (
                <div className="media-column">
                    <img src={`/src/assets/images/${imageSrc}`} style={{ maxHeight: `${screenWidth >= 768 ? Math.max(textHeight - captionHeight, imageMinHeight) : imageMinHeight}px` }} />
                    {imageCaption && <p ref={captionRef} className="image-caption">{imageCaption}</p>}
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
    
            return importedArticle.replace(/\r\n/g, '\n').trim().split(/\n\s*\n/);
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