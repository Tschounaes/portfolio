import { useState, useEffect } from 'react';

const useRootOverflow = () => {
    const [ overflow, setOverflow ] = useState(null);

    useEffect(() => {
        const getOverflow = () => {
            const rootOverflowOnLoad = document.getElementById('root').getBoundingClientRect().height - window.innerHeight;
            setOverflow(rootOverflowOnLoad)
        }

        document.addEventListener('touchstart', () => setTimeout(getOverflow, 0));
        document.addEventListener('touchend', () => setTimeout(getOverflow, 0));
        document.addEventListener('touchmove', (e) => e.preventDefault())
        getOverflow()
        return () => {
            document.removeEventListener('touchstart',() => setTimeout(getOverflow, 0));
            document.removeEventListener('touchend', () => setTimeout(getOverflow, 0));
            document.removeEventListener('touchmove', (e) => e.preventDefault())
        }
        
      },[]);


    return overflow;
}

export default useRootOverflow;
