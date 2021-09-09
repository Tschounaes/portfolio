import { useState, useEffect } from "react";

const useResize = () => {
    const [innerSize, setInnerSize] = useState({width: window.innerWidth, height: window.innerHeight});

    useEffect(()=> {
        const updateSize = () => setInnerSize({width: window.innerWidth, height: window.innerHeight});
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    
    return innerSize;
};

export default useResize;