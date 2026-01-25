import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

export function ScrollToTop () {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true
        });
    };

    const buttonStyle = {
        position: 'fixed',
        bottom: isMobile ? '60px' : '40px',
        right: isMobile ? '20px' : '40px',
        zIndex: 9999,
        cursor: 'pointer',

        backgroundColor: 'rgba(195, 163, 122, 0.7)',

        color: 'white',

        width: isMobile ? '40px' : '50px',
        height: isMobile ? '40px' : '50px',

        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease-in-out',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
    };

    return (
        <div onClick={scrollToTop} style={buttonStyle}>
            <FaArrowUp size={isMobile ? 16 : 20} />
        </div>
    );
}





