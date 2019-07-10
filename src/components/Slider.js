import React from 'react';
import '../css/slider.css';




const Slider = (plusSlides, currentSlide, lessSlides) => (

    <div id="slide">
        <div className="slideshow-container">
            <div className="mySlides fade">
                <img
                    src="https://images-1.wuaki.tv/system/images/46/original/register-slider-generic-1561734347-width1920-quality80.jpeg"
                    alt=""/>
            </div>
            <div className="mySlides fade">
                <img
                    src="https://images-0.wuaki.tv/system/images/1868/original/sp-slider-capitana-marvel-1561559790-width1920-quality80.jpeg"
                    alt=""/>
            </div>
            <div className="mySlides fade">
                <img
                    src="https://images-3.wuaki.tv/system/images/1869/original/sp-slider-mula-1561559905-width1920-quality80.jpeg"
                    alt=""/>
            </div>
            <div className="mySlides fade">
                <img
                    src="https://images-0.wuaki.tv/system/images/1746/original/sp-slider-como-entrenar-a-tu-dragon-3-1560503579-width1920-quality80.jpeg"
                    alt=""/>
            </div>
            <div className="mySlides fade">
                <img
                    src="https://images-0.wuaki.tv/system/images/1905/original/sp-slider-bohemian-rhapsody-a-8-99-1561537996-width1920-quality80.jpeg"
                    alt=""/>
            </div>
            <div className="mySlides fade">
                <img
                    src="https://images-3.wuaki.tv/system/images/1747/original/sp-slider-hasta-el-infinito-y-mas-alla-promo-1561115067-width1920-quality80.jpeg"
                    alt=""/>
            </div>
            <div className="mySlides fade">
                <img
                    src="https://images-0.wuaki.tv/system/images/150/original/svod-generic-vis-reg-1561119751-width1920-quality80.jpeg"
                    alt=""/>
            </div>
            <a className="prev" onClick={lessSlides(-1)}>&#10094;</a>
            <a className="next" onClick={plusSlides(1)}>&#10095;</a>
        </div>
        <br/>
        <div style="text-align:center">
            <span className="dot" onClick={currentSlide(1)}></span>
            <span className="dot" onClick={currentSlide(2)}></span>
            <span className="dot" onClick={currentSlide(3)}></span>
            <span className="dot" onClick={currentSlide(4)}></span>
            <span className="dot" onClick={currentSlide(5)}></span>
            <span className="dot" onClick={currentSlide(6)}></span>
            <span className="dot" onClick={currentSlide(7)}></span>

        </div>
    </div>

);

export default Slider;
