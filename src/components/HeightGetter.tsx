import { ReactNode, useRef, useEffect } from 'react';

interface Props {
    className?: string
    setHeight?: (height: number) => void;
    children?: ReactNode
}

function HeightGetter({ className, setHeight, children }: Props) {
    const divRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        if(!divRef.current) {
            return;
        }
        
        if(!setHeight) {
            return;
        }
        
        setHeight(divRef.current.clientHeight);
    }, []);
    
    return (
        <div ref={divRef} className={className}>
            {children}
        </div>
    );
}

export default HeightGetter;