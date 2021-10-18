import React, { useCallback, useState, useRef, useEffect } from 'react';
import useResize from '../../../hooks/useResize';
//import useFrame from '../../../hooks/useFrame';
import CollapseComponentWrapper from './styled';


const CollapseComponent = ( { children, collapseHeight } ) => {
    const [ collapsed, setCollapsed ] = useState(false);
    const [ contentHeight, setContentHeight ] = useState();
    const [ maskOpacity, setMaskOpacity ] = useState(0);
    // 60 frames per second;
    const freq = 16;
    const speed = 0.4;
    const content = useRef();
    const size = useResize();

    const handleCollapsed = () => {
        setContentHeight(content.current.scrollHeight);
        setCollapsed(!collapsed);
    };

    const handleSize = useCallback(() => {
        setContentHeight(content.current.scrollHeight);
        return size.width;
    },[size.width]);


    useEffect(() => {
        if (collapsed && maskOpacity < 100) {
            const curr = maskOpacity + (freq/(1000 * speed)) * 100;
            const t = setTimeout(() => setMaskOpacity(curr), freq)
            return () => clearTimeout(t)
        }
        if (!collapsed && maskOpacity > 0) {
            const curr = maskOpacity - (freq/(1000 * speed)) * 100;
            const t = setTimeout(() => setMaskOpacity(curr), freq)
            return () => clearTimeout(t)
        } else {
            return null;
        }
    },[collapsed, maskOpacity])

    return (
        <CollapseComponentWrapper 
            onClick={handleCollapsed}
            ref={handleSize}
            style={ { 
                height: !collapsed ? `${collapseHeight ? collapseHeight : 60}px` : `${contentHeight}px`,
                WebkitMask: `linear-gradient(to top, rgba(255,255,255,${maskOpacity/100}) 0%, rgba(255,255,255,1) 100%)`,
                mask: `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%)`
                } }
            collapsed={ collapsed }>
            <div 
                className='collapse-component-measure-box' ref={content}>{ children }</div>
        </CollapseComponentWrapper>
    )
}

export default CollapseComponent;
