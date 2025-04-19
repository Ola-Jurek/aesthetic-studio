import React from 'react';
import '../css/_desktopSlider.scss';
import {MobileSlider} from '../js/mobileSlider.jsx';
import {DesktopSlider} from '../js/desktopSlider.jsx';
import {useIsMobile} from '../js/isMobile.jsx';



export function ImgSliderApp() {

    const isMobile = useIsMobile();

    return isMobile ? <MobileSlider /> : <DesktopSlider />;


}

