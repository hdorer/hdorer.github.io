import { RefObject, useEffect } from 'react';

interface Props {
    elementRef: RefObject<HTMLElement>;
    setHeight?: (height: number) => void;
}

function HeightGetter({ elementRef, setHeight }: Props) {
    useEffect(() => {
        if(!elementRef.current || !setHeight) {
            return;
        }
        
        setHeight(elementRef.current.offsetHeight);
    }, []);
    
    return <></>;
}

export default HeightGetter;