import React, { useState, useEffect } from 'react';
import '../css/_imgSlider-treatments.scss'

import laser from '../assets/zabieg_depilacja.jpg';
import zabieg1 from './../assets/DC1_9744 gotowe z logo.jpg';
import brwi from './../assets/DC1_9766 GOTOWE Z LOGO.jpg';
import peeling from './../assets/DC1_9786 GOTOWE Z LGO.jpg';
import zabieg2 from './../assets/DC1_9605 GOTOWE Z LOOG.jpg';
import zabieg3 from './../assets/DC1_9754 GOTOWE Z LOGO.jpg';
import zabieg4 from './../assets/zabieg_mezoterapia.jpg';
import zabieg5 from '../assets/zabieg_blizny.jpg';

export function ImgSliderTreatments() {
    const images = [laser, zabieg1, brwi, peeling, zabieg2, zabieg3, zabieg4, zabieg5];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000); //

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="slider-treatments">
            <div className="slider-container-treatments">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`slider-image-treatments ${index === currentIndex ? 'fade-in' : ''}`}
                        style={{
                            opacity: index === currentIndex ? 1 : 0,
                            transition: 'opacity 3s ease-in-out',
                        }}
                    />
                ))}
            </div>

            <div className="dots-container-treatments">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot-treatments ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

