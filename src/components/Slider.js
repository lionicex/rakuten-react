import React from 'react';
import '../css/slider.css';

export const Slider = ({currentSlide, updateCurrentSlide, images, arrowClick}) => {
    console.log(currentSlide);
    const dots = [];

    console.log(images[currentSlide]);

    for (let i = 0; i < images.length; i++) {
        dots.push(
            <span key={i} className={`dot ${currentSlide !== i ? 'active' : ''}`}
                  onClick={() => updateCurrentSlide(i)}>

            </span>
        )

    }

    return (
        <div id="slide">
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <img
                        src={images[currentSlide]}
                        alt="película taquillera"/>
                    <div className="dots-group">
                        {dots}
                    </div>
                </div>

                <a className="prev" onClick={() => arrowClick(-1)}>&#10094;</a>
                <a className="next" onClick={() => arrowClick(1)}>&#10095;</a>
            </div>


        </div>
    )


};

export default Slider;
