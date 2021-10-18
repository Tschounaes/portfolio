import React, { useState, useEffect, useCallback } from 'react';
import Posts from '../../components/Posts';
import { BlogWrapper } from './styled';
import StretchTitle from '../../components/StretchTitle';
import SearchInput from '../../components/SearchInput';
import useZustand from '../../store_zustand';

const Blog = () => {
    const { searchInputs } = useZustand();
    const [scroll, setScroll] = useState(0);
    const [cacheTouch, setCacheTouch] = useState(0);
    const [colums, setColums] = useState(
        window.innerWidth > 1024 ? [0,1,2] :
        window.innerWidth > 512 ? [0,1] :
        [0])

    const handleBlogScroll = useCallback((e) => {
        const windowHeight = window.innerHeight;

        // Event type handling wheel or touch
        let deltaY;
        if (e.type === 'wheel') {
            deltaY = e.deltaY;
        } else {
            const handleTouch = (e) => {
                // extract the y position of the current touch without error
                let currentTouch;
                try {
                    currentTouch = e.changedTouches[0].clientY;
                } catch (err) {
                    currentTouch = cacheTouch;
                }
        
                let deltaY;
                switch (e.type) {
                    case 'touchstart': 
                        deltaY = 0
                        setCacheTouch(currentTouch);
                        break;
                    case 'touchend':
                        deltaY = 0
                        setCacheTouch(0);
                        break;
                    case 'touchmove':
                        deltaY =  cacheTouch - currentTouch;
                        setCacheTouch(currentTouch);
                        break;     
                    default: 
                        deltaY = e.deltaY;
                }
                return deltaY;
            }
            deltaY = handleTouch(e);
        }

        // Calculate scroll throug blog posts
        const content = document.getElementById('column-0-effect');
        const newScroll = scroll - deltaY;
        const scrollMax = 3 * windowHeight-content.scrollHeight;
        newScroll > scrollMax ? 
        newScroll < 0 ? setScroll(newScroll) : setScroll(0) :
        scrollMax < 0 ? setScroll(scrollMax) : setScroll(0);

        // Hide elements if they are less than 50% on the screen
        Array.from(document.getElementsByClassName('blog')).forEach(entry => {
            const rect = entry.getBoundingClientRect()
            const ceY = rect.top + rect.height * 0.5;
            entry.style.opacity = ceY < 0 || ceY > windowHeight ? '0' : '1';
            entry.style.transform = ceY < 0 || ceY > windowHeight ? 'scale(20%)' : 'scale(100%)';
            if (entry.lastChild.firstChild.tagName === 'VIDEO') {
                entry.lastChild.firstChild.preload = ceY < 0 || ceY > windowHeight ? 'none' : 'metadata';
            }
        });

        //Hide the StretchTitle
        const blogTitle = Array.from(document.getElementsByClassName('blog-title-container'))[0];
        blogTitle.style.opacity = scroll <= -200 ? '0' : '1';
       
    },[scroll, cacheTouch])

    useEffect(() => {
        //handleBlogScroll({deltaY: 0});
        // Handle scrolling properties with adjusted window height
        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                handleBlogScroll({deltaY: 0});
                if (window.innerWidth > 1024) {
                    setColums([0,1,2]);
                } else if (window.innerWidth > 512) {
                    setColums([0,1]);
                } else {
                    setColums([0])
                }
            }, 100);
        }

        window.addEventListener('resize', resizeListener)
        return () => window.removeEventListener('resize', resizeListener);
    }, [handleBlogScroll]);

    return (
        <BlogWrapper
            onLoad={() => handleBlogScroll({type: 'wheel', deltaY: 0})}
            onWheel={handleBlogScroll}
            onTouchMove={handleBlogScroll}
            onTouchStart={handleBlogScroll}
            onTouchEnd={handleBlogScroll}>
        <section 
            className='blog-title-container'
            style={{
                width: `${colums.length > 2 ? 33 : colums.length > 1 ? 50 : 100}%`
            }}>
            <StretchTitle 
                title={'Blog'}
                maxWidth={window.innerWidth > 1200 ? 400 :
                colums.length > 2 ? (window.innerWidth / 3) : 
                colums.length > 1 ? (window.innerWidth / 2) : 
                window.innerWidth}/>
            <SearchInput inputId='mainBolgFilter'/>
        </section>
        {
        colums.map((col) => {
            return (
                <div
                    className='gen-column'
                    key={'column-' + col}
                    id={'column-' + col + '-effect'}
                    style={{ 
                        position: 'absolute', 
                        width: `${colums.length > 2 ? 33 : colums.length > 1 ? 50 : 100}%`,
                        transform:`
                            translateX(${col*100}%)
                            translateX(${colums.length > 2 ? col*6 : 0}px)
                            translateY(${-100*col}vh)
                            translateY(${scroll}px)
                            `}}>
                    <Posts 
                        wrapper='blog' 
                        projectId='blog'
                        filter={searchInputs.mainBolgFilter} />
                </div>
            ) 
        })
        }
        </BlogWrapper>
    )
}

export default Blog;
