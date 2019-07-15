import React from 'react';
import Slider from '../components/Slider';

export class SliderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
        this.state = {
            currentSlide: 0
        };
        this.images = [
            "https://images-3.wuaki.tv/system/images/46/original/register-slider-generic-1562229457-width1920-quality80.jpeg",
            "https://images-0.wuaki.tv/system/images/1868/original/sp-slider-capitana-marvel-1561559790-width1920-quality80.jpeg",
            "https://images-2.wuaki.tv/system/images/1849/original/sp-slider-taxi-a-gibraltar-1562312188-width1920-quality80.jpeg"
        ];


    }

    updateCurrentSlide(index) {
        if (index !== this.state.currentSlide) {
            this.setState({
                currentSlide: index
            });
        }

    }

    render() {
        return (
            <Slider updateCurrentSlide={this.updateCurrentSlide} currentSlide={this.state.currentSlide}
                    images={this.images}/>
        )
    }
}


