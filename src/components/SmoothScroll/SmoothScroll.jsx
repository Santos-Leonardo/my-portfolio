import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = ({ children }) => {

    const scrollRef = useRef(null);

    useEffect(() => {

        const scroll = new LocomotiveScroll({

            el: scrollRef.current,
            smooth: true,
            // multiplier: 0.5, // Adjust speed (1 = normal, <1 = slower, >1 = faster)
            // lerp: 0.2, // Controls the smoothing effect (default is 0.1)
            // smartphone: { smooth: true },
            // tablet: { smooth: true },
        });

        return () => {
            scroll.destroy();
        };
        
    }, []);

    return <div ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;
