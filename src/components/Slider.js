import React from 'react';
import '../css/slider.css';

const Slider = () => (
    <div className="bd-example">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
            </ol>
            <div className="carousel-inner slider">
                <div className="carousel-item active">
                    <img
                        src="https://images-1.wuaki.tv/system/images/46/original/register-slider-generic-1561734347-width1920-quality80.jpeg"
                        className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images-0.wuaki.tv/system/images/1868/original/sp-slider-capitana-marvel-1561559790-width1920-quality80.jpeg"
                        className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images-3.wuaki.tv/system/images/1869/original/sp-slider-mula-1561559905-width1920-quality80.jpeg"
                        className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images-0.wuaki.tv/system/images/1746/original/sp-slider-como-entrenar-a-tu-dragon-3-1560503579-width1920-quality80.jpeg"
                        className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images-0.wuaki.tv/system/images/1905/original/sp-slider-bohemian-rhapsody-a-8-99-1561537996-width1920-quality80.jpeg"
                        className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images-3.wuaki.tv/system/images/1747/original/sp-slider-hasta-el-infinito-y-mas-alla-promo-1561115067-width1920-quality80.jpeg"
                        className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images-0.wuaki.tv/system/images/150/original/svod-generic-vis-reg-1561119751-width1920-quality80.jpeg"
                        className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
               data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
               data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true">
                        </span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
);

export default Slider;
