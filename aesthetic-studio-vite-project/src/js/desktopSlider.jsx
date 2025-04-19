import React, {useState, useEffect} from 'react';
import {Col} from "react-grid-system";

import team from "../assets/marta_i_bartek2.jpg";
import gen_factor_logo from "../assets/gen_factor_logo.jpg";
import radiofrekwencja from "../assets/zabieg_radiofrekwencja.jpg";
import depilacja from "../assets/zabieg_depilacja.jpg";
import creme_bar from "../assets/creme_bar.jpg";

export function DesktopSlider() {

    const images = [team, gen_factor_logo, radiofrekwencja, depilacja, creme_bar];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000); //

        return () => clearInterval(interval);
    }, []);

    return (
        <>
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
                                <p className='slider-text-app-p'>
                                    Od 2020 roku prowadzimy Studio Estetyki w którym zapewniamy Państwu najlepsze usługi,
                                    połączenie wiedzy, indywidualnego podejścia, a przede wszystkim bezpieczeństwa
                                    wykonywanych zabiegów. Nie wykonujemy „zabiegów na życzenie”, nie będących w wachlarzu naszych usług.
                                    Ofertę
                                    jaką Państwo przedstawiamy, zbudowaliśmy na bazie wielogodzinnych szkoleń, rozmów,
                                    dobierania
                                    sprzętu i testowania go na długo przed zakupem. Posiadamy sprzęt najwyżej klasy, tylko
                                    sprawdzonych producentów, gwarantujących swoją marką i doświadczeniem najwyższe
                                    parametry.
                                    Stosujemy zasadę opieki nad klientem w trakcie całego procesu zabiegowego.
                                    Będzie nam niezmiernie miło spotkać się z Państwem w naszych gabinetach i wspólnie iść
                                    drogą
                                    piękna, higieny i zdrowego życia!
                                </p>

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
        </>


    );
}

export default DesktopSlider;