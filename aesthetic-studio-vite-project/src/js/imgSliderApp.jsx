import React, { useState, useEffect } from 'react';
import '../css/_imgSlider_app.scss';
import {Row, Col} from "react-grid-system"


import laser from '../assets/zabieg_depilacja.jpg';
import zabieg1 from './../assets/DC1_9744 gotowe z logo.jpg';
import brwi from './../assets/DC1_9766 GOTOWE Z LOGO.jpg';
import peeling from './../assets/DC1_9786 GOTOWE Z LGO.jpg';
import zabieg2 from './../assets/DC1_9605 GOTOWE Z LOOG.jpg';
import zabieg3 from './../assets/DC1_9754 GOTOWE Z LOGO.jpg';
import zabieg4 from '../assets/zabieg_mezoterapia.jpg';
import zabieg5 from '../assets/zabieg_blizny.jpg';

export function ImgSliderApp() {
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
        <Col sm={12}>
            <div className="slider-app">
            <div className="slider-container-app">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`slider-image-app ${index === currentIndex ? 'fade-in' : ''}`}
                        style={{
                            opacity: index === currentIndex ? 1 : 0,
                            transition: 'opacity 3s ease-in-out',
                        }}
                    />
                ))}
                <div className='slider-background-app'>
                    <div className='slider-text-app'>
                        <p className='slider-text-app-p'> Od 2020 roku prowadzimy Studio Estetyki w którym zapewniamy Państwu najlepsze usługi,
                            połączenie wiedzy, indywidualnego podejścia, a przede wszystkim bezpieczeństwa wykonywanych
                            zabiegów. Nie wykonujemy „zabiegów na życzenie”, nie będących w wachlarzu naszych usług.
                            Ofertę
                            jaką Państwo przedstawiamy, zbudowaliśmy na bazie wielogodzinnych szkoleń, rozmów,
                            dobierania
                            sprzętu i testowania go na długo przed zakupem. Posiadamy sprzęt najwyżej klasy, tylko
                            sprawdzonych producentów, gwarantujących swoją marką i doświadczeniem najwyższe parametry.
                            Stosujemy zasadę opieki nad klientem w trakcie całego procesu zabiegowego.
                            Będzie nam niezmiernie miło spotkać się z Państwem w naszych gabinetach i wspólnie iść drogą
                            piękna, higieny i zdrowego życia! </p>
                    </div>

                </div>

            </div>

                <div className="dots-container-app">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot-app ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </Col>
    );
}

