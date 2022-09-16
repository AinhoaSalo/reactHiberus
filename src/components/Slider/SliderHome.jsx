import React from 'react'
import Slider from 'react-slick'
import img1 from '../../assets/images/rickMorty1.jpg'
import img2 from '../../assets/images/rickMorty2.png'
import img3 from '../../assets/images/rickMorty3.jpg'
import img4 from '../../assets/images/rickMorty4.jpg'
import './SliderHome.css'


export function SliderHome() {

    const configuracion = {
        className: 'colorSlider',
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'Linear'
    
    }

    return (
        <Slider {...configuracion}>
            <img className='imgSlider' src={img1} />
            <img className='imgSlider' src={img2} />
            <img className='imgSlider' src={img3} />
            <img className='imgSlider' src={img4} />
        </Slider>
    );

}

