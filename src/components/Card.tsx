import { ReactNode, useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Card.css';

interface Props {
    title?: string;
    thumbnail?: string;
    linkTo?: string;
    children?: ReactNode;
}

function Card({ title, thumbnail, linkTo, children }: Props) {
    const thumbnailDiv = useRef<HTMLDivElement>(null);

    const [thumbnailDivDimensions, recordThumbnailDivDimensions] = useState({ width: 0, height: 0 });
    const [screenWidth, recordScreenWidth] = useState(0);

    const location = useLocation();

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
        console.log("useEffect()");

        updateSizes();

        window.addEventListener('resize', updateSizes);

        return () => {
            window.removeEventListener('resize', updateSizes);
        };
    }, [location]);

    if(linkTo) {
        return (
            <Link to={linkTo} style={{ textDecoration: 'none', color: 'inherit' }}>
                {screenWidth >= 768 ? desktopLayout : mobileLayout}
            </Link>
        );
    } else {
        return screenWidth >= 768 ? desktopLayout : mobileLayout;
    }
}

export default Card;