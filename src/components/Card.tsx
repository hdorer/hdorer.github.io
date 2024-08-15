import { ReactNode, useRef, useEffect, useState } from 'react';
import './Card.css';

interface Props {
    title?: string;
    thumbnail?: string;
    children: ReactNode;
}

function Card({ title, thumbnail, children }: Props) {
    const thumbnailDiv = useRef<HTMLDivElement>(null);

    const [thumbnailDivDimensions, recordThumbnailDivDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if(!thumbnailDiv.current) {
                console.error("thumbnailDiv.current was null in Card.imageLoaded()!");
                return;
            }

            recordThumbnailDivDimensions({
                width: thumbnailDiv.current.offsetWidth,
                height: thumbnailDiv.current.offsetHeight
            });
        };

        updateDimensions();

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div className="card">
            <div ref={thumbnailDiv} className="card-thumbnail">
                <img src={thumbnail} style={{ maxWidth: `${thumbnailDivDimensions.width}px`, maxHeight: `${thumbnailDivDimensions.height}px` }} />
            </div>
            <div className="card-body">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-text">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;