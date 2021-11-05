import { useState, useEffect } from "react";

const useResize = () => {
    const [innerSize, setInnerSize] = useState({width: window.outerWidth, height: window.outerHeight});

    useEffect(()=> {
        const updateSize = () => setInnerSize({width: window.outerWidth, height: window.outerHeight});
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    
    return innerSize;
};

export default useResize;