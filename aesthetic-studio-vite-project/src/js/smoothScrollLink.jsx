import React from 'react';

const SmoothScrollLink = ({to, children}) =>

{
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.getElementById(to);
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    return (
        <a href={`#${to}`} onClick={handleClick}>
           {children}
        </a>
    );
}

export default SmoothScrollLink;