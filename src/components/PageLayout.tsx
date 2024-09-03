import { ReactNode } from "react";
import './PageLayout.css';

interface Props {
    children?: ReactNode;
};

function PageLayout({ children }: Props) {
    return (
        <div className="page-container">
            <div className="content-container">
                {children}
            </div>
        </div>
    );
}

export default PageLayout;