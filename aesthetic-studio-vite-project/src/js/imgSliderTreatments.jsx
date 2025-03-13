import React, { useState, useEffect } from 'react';
import '../css/_imgSlider-treatments.scss'

import zabieg_depilacja from '../assets/zabieg_depilacja.jpg';
import zabieg_btx from '../assets/zabieg_btx.jpg';
import gen_factor from './../assets/gen_factor.jpg';
import brwi from './../assets/brwi.jpg';
import zabieg_blizny from '../assets/zabieg_blizny.jpg';
import mezoterapia_skory_glowy from '../assets/mezoterapia_skory_glowy.jpg';
import laserowe_usuwanie_tatuazu from './../assets/laserowe_usuwanie_tatuazu.jpg';
import zabieg_radiofrekwencja from './../assets/zabieg_radiofrekwencja.jpg';

export function ImgSliderTreatments() {
    const images = [zabieg_depilacja, zabieg_btx, gen_factor, brwi, zabieg_blizny, mezoterapia_skory_glowy, laserowe_usuwanie_tatuazu, zabieg_radiofrekwencja];

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
                        loading="lazy"
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

