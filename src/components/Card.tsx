import { ReactNode, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeightGetter from './HeightGetter';
import './Card.css';

interface Props {
    title?: string;
    thumbnail?: string;
    linkTo?: string;
    children?: ReactNode;
}

function Card({ title, thumbnail, linkTo, children }: Props) {
    const thumbnailDiv = useRef<HTMLDivElement>(null);

    const [screenWidth, recordScreenWidth] = useState(0);
    const [bodyDivHeight, recordBodyDivHeight] = useState(0);
    
    const desktopLayout = (
        <div className="card">
            { thumbnail && (
                <div ref={thumbnailDiv} className="card-thumbnail">
                    <img src={thumbnail} style={{ maxHeight: `${bodyDivHeight}px` }} />
                </div>
            )}
            <HeightGetter className={thumbnail ? "card-body" : "card-body no-thumbnail"} setHeight={recordBodyDivHeight}>
                { title && (
                    <div className="card-title">
                        {title}
                    </div>
                )}
                <div className="card-text">
                    {children}
                </div>
            </HeightGetter>
        </div>
    );

    const mobileLayout = (
        <div className="card">
            { title && (
                <div className="card-title">
                    {title}
                </div>
            )}            
            { thumbnail && (
                <div ref={thumbnailDiv} className="card-thumbnail">
                    <img src={thumbnail} />
                </div>
            )}
            <div className="card-text">
                {children}
            </div>
        </div>
    );

    useEffect(() => {
        const resized = () => {
            recordScreenWidth(window.innerWidth);
        };

        resized();

        window.addEventListener('resize', resized);
        
        return () => {
            window.addEventListener('resize', resized);
        }
    }, []);

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