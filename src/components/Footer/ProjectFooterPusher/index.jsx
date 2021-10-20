import React, { useRef, useEffect } from 'react';
import useZustand from '../../../store_zustand';

const ProjectFooterPusher = ({ height }) => {
    const pushHeight = height ? height : 120;
    const pusher = useRef();
    const { footerOpen, setFooterOpen, aboutOpen } = useZustand();

    useEffect(() => {
        const measureTop = () => {
            const windowHeight = window.innerHeight;
            const top = pusher.current.getBoundingClientRect().top;
            const diff = windowHeight - top;
            if (diff > pushHeight - 10 && diff < pushHeight + 50) {
                if (footerOpen === false) { setFooterOpen(true) } else return null;
            } else if (diff < pushHeight - 10) {
                if (footerOpen === true) { setFooterOpen(false) } else return null;
            } else return null;
        }

        if (!aboutOpen) {
            measureTop();
            window.addEventListener('wheel', measureTop);
        }

        return () => window.removeEventListener('wheel', measureTop);
    },[ footerOpen, setFooterOpen, pushHeight, aboutOpen ])

    return (
        <div 
            ref={pusher}
            style={ { height: `${pushHeight}px`, width: '100%'} }>
        </div>
    )
}

export default ProjectFooterPusher;
