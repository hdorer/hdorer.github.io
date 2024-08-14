import { ReactNode } from 'react';
import './Card.css';

interface Props {
    title?: string;
    thumbnail?: string;
    children: ReactNode;
}

function Card({ title, thumbnail, children }: Props) {
    return (
        <div className="card">
            <div className="card-thumbnail">
                <img src={thumbnail} />
            </div>
            <div className="card-content">
                <h1>{title}</h1>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;