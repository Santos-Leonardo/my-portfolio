import { useRef, useEffect, useState } from 'react';

const useInfiniteScroll = (speed = 1) => {

    const listRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const x = useRef(0);
    const startX = useRef(0);
    const reqId = useRef(null);

    useEffect(() => {

        const el = listRef.current;
        if (!el) return;

        const animate = () => {

            // Move automatically if not dragging
            if (!isDragging) {
                x.current -= speed;
            }

            // Resets position when it scrolls past half the width
            const halfWidth = el.scrollWidth / 2;
            
            if (x.current <= -halfWidth) { x.current += halfWidth; }
            else if (x.current > 0) { x.current -= halfWidth; }
            
            el.style.transform = `translateX(${x.current}px)`;
            reqId.current = requestAnimationFrame(animate);
        };
        
        reqId.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(reqId.current);
        
    }, [isDragging, speed]);

    // Drag Event Handlers
    const startDrag = (pageX) => {

        setIsDragging(true);
        startX.current = pageX - x.current;
    };

    const moveDrag = (pageX) => {

        if (!isDragging) return;
        x.current = pageX - startX.current;
    };

    const stopDrag = () => setIsDragging(false);

    return {

        ref: listRef,
        events: {
            
            onMouseDown: (e) => startDrag(e.pageX),
            onMouseMove: (e) => { if(isDragging) e.preventDefault(); moveDrag(e.pageX); },
            onMouseUp: stopDrag,
            onMouseLeave: stopDrag,
            onTouchStart: (e) => startDrag(e.touches[0].pageX),
            onTouchMove: (e) => moveDrag(e.touches[0].pageX),
            onTouchEnd: stopDrag
        },
        isDragging
    };
};

export default useInfiniteScroll;
