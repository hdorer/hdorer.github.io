import { ReactNode, useRef, useEffect, useState } from 'react';
import './Card.css';

interface Props {
    title?: string;
    thumbnail?: string;
    children?: ReactNode;
}

function Card({ title, thumbnail, children }: Props) {
    const thumbnailDiv = useRef<HTMLDivElement>(null);

    const [thumbnailDivDimensions, recordThumbnailDivDimensions] = useState({ width: 0, height: 0 });
    const [screenWidth, recordScreenWidth] = useState(0);

    const updateSizes = () => {
        console.log("updateSizes");

        recordScreenWidth(window.innerWidth);

        if(!thumbnailDiv.current) {
            console.error("thumbnailDiv.current was null in Card.imageLoaded()!");
            return;
        }

        recordThumbnailDivDimensions({
            width: thumbnailDiv.current.offsetWidth,
            height: thumbnailDiv.current.offsetHeight
        });
    };
    
    const desktopLayout = (
        <div className="card">
            <div ref={thumbnailDiv} className="card-thumbnail">
                <img src={thumbnail} style={{ maxWidth: `${thumbnailDivDimensions.width}px`, maxHeight: `${thumbnailDivDimensions.height}px` }} onLoad={updateSizes} />
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

    const mobileLayout = (
        <div className="card">
            <div className="card-title">
                {title}
            </div>            
            <div ref={thumbnailDiv} className="card-thumbnail">
                <img src={thumbnail} onLoad={updateSizes} />
            </div>
            <div className="card-text">
                {children}
            </div>
        </div>
    );

    useEffect(() => {
        updateSizes();

        window.addEventListener('resize', updateSizes);

        return () => {
            window.removeEventListener('resize', updateSizes);
        };
    }, []);

    return screenWidth >= 768 ? desktopLayout : mobileLayout;
}

export default Card;