import { ReactNode, useRef, useEffect } from 'react';

interface Props {
    setHeight?: (height: number) => void;
    children?: ReactNode
}

function HeightGetter({ setHeight, children }: Props) {
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
        <div ref={divRef} style={{ width: `100%` }}>
            {children}
        </div>
    );
}

export default HeightGetter;