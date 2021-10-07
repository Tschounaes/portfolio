import React, { useState, useEffect, useCallback } from 'react';
import Posts from '../../components/Posts';
import { BlogWrapper } from './styled';
import StretchTitle from '../../components/StretchTitle';

const Blog = () => {
    const [scroll, setScroll] = useState(0);
    const [colums, setColums] = useState(
        window.innerWidth > 1024 ? [0,1,2] :
        window.innerWidth > 512 ? [0,1] :
        [0])

    const handleBlogScroll = useCallback((e) => {
        const windowHeight = window.innerHeight;

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

        // Calculate scroll throug blog posts
        const content = document.getElementById('column-0-effect');
        const newScroll = scroll - e.deltaY;
        const scrollMax = 3 * windowHeight-content.scrollHeight;
        newScroll > scrollMax ? 
        newScroll < 0 ? setScroll(newScroll) : setScroll(0) :
        scrollMax < 0 ? setScroll(scrollMax) : setScroll(0);

        //Hide the StretchTitle
        const blogTitle = Array.from(document.getElementsByClassName('blog-title-container'))[0];
        blogTitle.style.opacity = scroll <= -200 ? '0' : '1';
       
    },[scroll])

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
            onLoad={() => handleBlogScroll({deltaY: 0})}
            onWheel={handleBlogScroll}>
        <div 
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
        </div>
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
                                translateY(${-100*col}vh)
                                translateY(${scroll}px)
                                `}}>
                        <Posts wrapper='blog' projectId='blog' />
                    </div>
                ) 
            })
            }
        </BlogWrapper>
    )
}

export default Blog;
