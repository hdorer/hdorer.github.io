import { RefObject, useContext, useRef, useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import SizeGetter from './SizeGetter';
import globalContext from './GlobalContext';
import articles from '../modules/ArticleLoader';
import './Article.css';

interface ArticleMedia {
    type: string;
    src: string;
    paragraph: number;
    caption?: string;
}

export interface ArticleData {
    filename: string;
    title: string
    date: string;
    media: ArticleMedia[];
}

interface ParagraphIframeProps {
    src: string;
    mediaColumn: RefObject<HTMLDivElement>;
    mediaOnly: boolean;
}

interface ParagraphProps {
    text: string;
    media?: ArticleMedia;
}

interface Props {
    data: ArticleData;
}

function ParagraphIframe({ src, mediaColumn, mediaOnly }: ParagraphIframeProps) {
    const maxWidth = 1280;

    const [mediaColumnSize, recordMediaColumnSize] = useState({ width: 0, height: 0});
    const [iframeSize, setIframeSize] = useState({ width: 0, height: 0 });
    
    useEffect(() => {
        console.log("mediaColumnSize.width: " + mediaColumnSize.width);
        let iframeWidth = mediaColumnSize.width;
        if(iframeWidth > maxWidth) {
            iframeWidth = maxWidth;
        }

        let iframeHeight = iframeWidth / 16 * 9;
        
        if(!mediaOnly && iframeHeight > mediaColumnSize.height) {
            iframeHeight = mediaColumnSize.height;
            iframeWidth = iframeHeight / 9 * 16;
        }

        setIframeSize({ width: iframeWidth, height: iframeHeight });
    }, [mediaColumnSize]);

    return(
        <>
            <SizeGetter elementRef={mediaColumn} setSize={recordMediaColumnSize} />
            <iframe
                width={iframeSize.width}
                height={iframeSize.height}
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
            />
        </>
    )
}

function Paragraph({ text, media }: ParagraphProps) {
    const imageMinHeight = 240;
    const mediaOnlyFlag = "$MEDIA_ONLY$";

    const context = useContext(globalContext);
    if(!context) {
        throw new Error("Missing context (is the component you're trying to use this in inside a GlobalContextProvider?)");
    }

    const mediaColumnRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const captionRef = useRef<HTMLParagraphElement>(null);

    const [textSize, recordTextSize] = useState({ width: 0, height: 0 });
    const [captionSize, recordCaptionSize] = useState({ width: 0, height: 0 });

    const { screenWidth } = context;

    const mediaColumnContents = () => {
        if(!media) {
            return <></>;
        }

        switch(media?.type) {
            case "IMAGE":
                return (
                    <>
                        <img src={`/src/assets/images/${media.src}`} style={{ maxHeight: `${screenWidth >= 768 ? Math.max(textSize.height - captionSize.height, imageMinHeight) : imageMinHeight}px`}} />
                        {media.caption && <p ref={captionRef} className="image-caption">{media.caption}</p>}
                    </>
                );
            case "VIDEO":
                return <ParagraphIframe src={media.src} mediaColumn={mediaColumnRef} mediaOnly={text === mediaOnlyFlag} />;
        }       
    }

    return (
        <div className="paragraph">
            <SizeGetter elementRef={textRef} setSize={recordTextSize} />
            <SizeGetter elementRef={captionRef} setSize={recordCaptionSize} />
            {text !== mediaOnlyFlag && (
                <div className={`${media ? "text-column" : "text-column no-image"}`}>
                    <div ref={textRef} className="text-wrapper">
                        <Markdown className="article-text">{text}</Markdown>
                    </div>
                </div>
            )}
            <div ref={mediaColumnRef} className={text === mediaOnlyFlag ? "media-column no-text" : "media-column"}>
                {media && mediaColumnContents()}
            </div>
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
            <div className="article-header">
                <h1 className="article-title">{data.title}</h1>
                <p className="article-date">{new Intl.DateTimeFormat('en-US').format(new Date(data.date))}</p>
            </div>
            {paragraphStrings?.map((paragraph, index) => {
                const mediaObj = data.media.find(obj => obj.paragraph === index);
                if(mediaObj) {
                    return <Paragraph key={index} text={paragraph} media={mediaObj} />;
                }
                return <Paragraph key={index} text={paragraph} />;
            })}
        </article>
    );
}