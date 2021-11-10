import React, { useRef, useEffect, useState } from 'react';
import useZustand from '../../../store_zustand';

const ProjectFooterPusher = ({ height }) => {
    const pushHeight = height ? height : 120;
    const pusher = useRef();
    const { footerOpen, setFooterOpen, aboutOpen } = useZustand();
    const [ queryWidth, setQueryWidth ] = useState(window.innerWidth)

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

    useEffect(() => {
        const mainElem = queryWidth >= 1143 ? document.getElementsByTagName('main')[0] : window;
        if (!aboutOpen) {
            measureTop();
            mainElem.addEventListener('scroll', measureTop);
        } else mainElem.removeEventListener('scroll', measureTop);

        return () => {
            mainElem.removeEventListener('scroll', measureTop);
        };
    },[ footerOpen, setFooterOpen, pushHeight, aboutOpen, queryWidth ]);

    useEffect(() => {
        const windowWidthQuery = () => {
            setQueryWidth(window.innerWidth);
        }
        windowWidthQuery()
        window.addEventListener('resize', windowWidthQuery);
        return () => {
            window.removeEventListener('resize', windowWidthQuery);
        }
    },[]);

    

    return (
        <div 
            ref={pusher}
            style={ { height: `${pushHeight}px`, width: '100%'} }>
        </div>
    )
}

export default ProjectFooterPusher;
