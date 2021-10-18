import { useState, useEffect } from 'react'

const useFrame = () => {
    const [frame, setFrame] = useState(0);

    useEffect(() => { 
        const i = setInterval(()=> setFrame(frame+1), 100);
        return () => clearInterval(i);
    },[frame])

    return frame;
}

export default useFrame;
