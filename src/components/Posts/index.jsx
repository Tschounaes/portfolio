import React, { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import Markdown from 'markdown-to-jsx';

import BlogTable from '../../assets/tabels/blog.csv';
import csvBeautyDate from '../../helpers/csvBeautyfyDate';
import useMonths from '../../hooks/useMonths';

import { PostsWrapper } from './styled';


const Posts = ({wrapper, projectId}) => {
    const [ blogData, setBlogData ] = useState([]);
    const months = useMonths()
    const testType = new RegExp('mp4');

    const handleActiveArticle = (e) => {
        const media = e.target.parentNode.lastChild.firstChild;
        if (media.tagName === 'VIDEO') {
            switch (e.type) {
                case 'mouseenter':
                    media.play();
                    break;
                case 'mouseleave':
                    media.pause();
                    break;
                default:
                    return null;
            }
        }
    }

    useEffect(() => {
        const getBlogData = () => {
            csv(BlogTable).then(data => {
                const filtered = data.filter(post => {
                    const tags = post.tags.split(', ');
                    let result = false;
                    tags.forEach(tag => {
                        if (tag === projectId) {
                            result = true;
                        }   
                    });
                    return result;
                });
                setBlogData(filtered);
            });
        }
        getBlogData();
    },[projectId]);

    return (
        <PostsWrapper>
            <div className={wrapper + '-start'}></div>
            {blogData.map((post, index) => {
                return(
                    <article
                        onMouseEnter={handleActiveArticle}
                        onMouseLeave={handleActiveArticle}
                        key={ 'post_' + index }
                        id={ 'post_' + index }
                        className={wrapper}>
                        <div className='hover-box'></div>
                        <div className='blog_content' >
                            <h3>{post.title}</h3>
                            <p className='post-date'>{csvBeautyDate(post.date, 'en', months)}</p>
                            <Markdown options={{ wrapper: 'div', forceWrapper: true }}>{post.text}</Markdown> 
                        </div>

                        <div className='blog_media'>
                        {
                        post.media.search(testType) !== -1 ? 
                            <video preload='none' playsInline loop poster={post.poster}>
                                <source src={post.media} type='video/mp4' />
                            </video>
                            : 
                            <img src={post.media} alt={post.title + '_asset'}/>
                        } 
                        </div>
                    </article>
                )
            })}
            <div className={wrapper + '-end'}></div>
        </PostsWrapper>
    )
}

export default Posts;
