import React from 'react';
import '../css/slider.css';
import PropTypes from "prop-types";


const Slider = ({currentSlide, updateCurrentSlide, images, nextPrevButton}) => {
    return (
        <div id="slide">
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <img
                        src={images[currentSlide]}
                        alt=""/>
                    <div className="dots-group">
                        {Object.keys(images).map(index => (
                            <span key={index} className={`dot ${currentSlide !== index ? 'active' : ''}`}
                                  onClick={() => updateCurrentSlide(index)}>
                            </span>
                        ))}
                    </div>
                </div>
                <a className="prev" onClick={() => nextPrevButton("-1")}>&#10094;</a>
                <a className="next" onClick={() => nextPrevButton("1")}>&#10095;</a>
            </div>
        </div>
    )
};
Slider.propTypes = {
    images: PropTypes.array.isRequired,
    currentSlide: PropTypes.number,
    updateCurrentSlide: PropTypes.func.isRequired,
    nextPrevButton: PropTypes.func.isRequired

};
export default Slider;
