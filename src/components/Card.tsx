import { ReactNode, useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SizeGetter from './SizeGetter';
import globalContext from './GlobalContext';
import './Card.css';

interface Props {
    title?: string;
    thumbnail?: string;
    linkTo?: string;
    children?: ReactNode;
}

function Card({ title, thumbnail, linkTo, children }: Props) {
    const context = useContext(globalContext);
    if(!context) {
        throw new Error("Missing context (is the component you're trying to use this in inside a GlobalContextProvider?)");
    }

    const bodyDiv = useRef<HTMLDivElement>(null);

    const [bodyDivSize, recordBodyDivSize] = useState({ width: 0, height: 0 });
    
    const desktopLayout = (
        <div className="card">
            <SizeGetter elementRef={bodyDiv} setSize={recordBodyDivSize} />
            { thumbnail && (
                <div className="card-thumbnail">
                    <img src={thumbnail} style={{ maxHeight: `${bodyDivSize.height}px` }} />
                </div>
            )}
            <div ref={bodyDiv} className={thumbnail ? "card-body" : "card-body no-thumbnail"}>
                { title && (
                    <div className="card-title">
                        {title}
                    </div>
                )}
                <div className="card-text">
                    {children}
                </div>
            </div>
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
                <div className="card-thumbnail">
                    <img src={thumbnail} />
                </div>
            )}
            <div className="card-text">
                {children}
            </div>
        </div>
    );

    const { screenWidth } = context;

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