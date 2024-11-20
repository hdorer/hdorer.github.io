import { RefObject, useEffect } from 'react';

interface Props {
    elementRef: RefObject<HTMLElement>;
    setSize?: (size: {width: number, height: number}) => void;
}

function SizeGetter({ elementRef, setSize }: Props) {
    useEffect(() => {
        if(!elementRef.current || !setSize) {
            return;
        }

        const width = elementRef.current.offsetWidth;
        const height = elementRef.current.offsetHeight;
        
        setSize({ width, height });
    }, [elementRef.current?.offsetWidth, elementRef.current?.offsetHeight]);
    
    return <></>;
}

export default SizeGetter;