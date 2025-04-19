import React, {useEffect, useState} from 'react';
import {Col} from 'react-grid-system';
import '../css/_mobileSlider.scss';

import team2 from "../assets/marta_i_bartek1.jpg";
import marta from "../assets/marta4.jpg";
import team3 from "../assets/marta_i_bartek3.jpg";
import bartek from "../assets/bartek2.jpg";

export function MobileSlider() {
    const photos = [team2, marta, team3, bartek];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Col sm={12}>
            <div className='slider-app-mobile'>
                <div className='slider-container-app-mobile'>
                    {photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt={`Slide ${index}`}
                            className={`slider-image-app-mobile ${index === currentIndex ? 'fade-in' : ''}`}
                            style={{
                                opacity: index === currentIndex ? 1 : 0,
                                transition: 'opacity 4s ease-in-out',
                                position: 'absolute',
                                width: '100%',
                            }}
                        />
                    ))}


                </div>

                <div className='slider-background-app-mobile'>
                    <p className='slider-text-app-mobile-p-scrollable'>
                        Od 2020 roku prowadzimy Studio Estetyki w którym zapewniamy Państwu najlepsze usługi,
                        połączenie wiedzy, indywidualnego podejścia, a przede wszystkim bezpieczeństwa
                        wykonywanych
                        zabiegów. Nie wykonujemy „zabiegów na życzenie”, nie będących w wachlarzu naszych usług.
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

                    {/*<div className="dots-container-app">*/}
                    {/*    {photos.map((_, index) => (*/}
                    {/*        <span*/}
                    {/*            key={index}*/}
                    {/*            className={`dot-app ${index === currentIndex ? 'active' : ''}`}*/}
                    {/*            onClick={() => setCurrentIndex(index)}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>


            </div>
        </Col>
    );
}