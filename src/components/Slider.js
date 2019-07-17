import React from 'react';
import '../css/slider.css';
import {connect} from "react-redux";

const Slider = ({currentSlide, updateCurrentSlide, images, arrowClick}) => {

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
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    images: state.sliderImages.images
});
export default connect(mapStateToProps)(Slider);
