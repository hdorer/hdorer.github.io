import { ReactNode, useRef, useLayoutEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import HeightGetter from './HeightGetter';
import './Card.css';

interface Props {
    title?: string;
    thumbnail?: string;
    linkTo?: string;
    children?: ReactNode;
};

function Card({ title, thumbnail, linkTo, children }: Props) {
    const bodyDiv = useRef<HTMLDivElement>(null);

    const [screenWidth, recordScreenWidth] = useState(0);
    const [bodyDivHeight, recordBodyDivHeight] = useState(0);
    
    const desktopLayout = (
        <>
            <div className="card">
                { thumbnail && (
                    <div className="card-thumbnail">
                        {/* <img src={thumbnail} style={{ maxHeight: `${bodyDivHeight}px` }} /> */}
                        {/* <img src={thumbnail} /> */}
                    </div>
                )}
                <HeightGetter setHeight={recordBodyDivHeight}>
                    <div ref={bodyDiv} className={`card-body ${thumbnail ? 'partial-width' : 'full-width'}`}>
                        { title && (
                            <div className="card-title">
                                {title}
                            </div>
                        )}
                        <div className="card-text">
                            {children}
                        </div>
                    </div>
                </HeightGetter>
            </div>
            <p>Height: {bodyDivHeight}</p>
        </>
    );

    const mobileLayout = (
        <div className="card">
            { title && (
                <div className="card-title">
                    {title}
                </div>
            )}            
            { thumbnail && (
                <div className="card-thumbnail">
                    <img src={thumbnail} />
                </div>
            )}
            <div className="card-text">
                {children}
            </div>
        </div>
    );

    useLayoutEffect(() => {
        const resized = () => {
            recordScreenWidth(window.innerWidth);
        }

        resized();

        window.addEventListener('resize', resized);

        return () => {
            window.removeEventListener('resize', resized);
        };
    });

    console.log(`bodyDivHeight: ${bodyDivHeight}`);

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