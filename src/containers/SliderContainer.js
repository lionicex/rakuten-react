import React from 'react';
import Slider from '../components/Slider';

export class SliderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
        this.arrowClick = this.arrowClick.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.state = {
            currentSlide: 0
        };
        this.images = [
            "https://images-3.wuaki.tv/system/images/46/original/register-slider-generic-1562229457-width1920-quality80.jpeg",
            "https://images-0.wuaki.tv/system/images/1868/original/sp-slider-capitana-marvel-1561559790-width1920-quality80.jpeg",
            "https://images-2.wuaki.tv/system/images/1849/original/sp-slider-taxi-a-gibraltar-1562312188-width1920-quality80.jpeg"
        ];

    }

    componentDidMount() {

        this.changeImage()
    }

    changeImage(){
        if (this.state.currentSlide !== this.images.length - 1) {
            this.setState({
                currentSlide: this.state.currentSlide + 1
            })
        } else {
            this.setState({
                currentSlide: 0
            })
        }

            setInterval(this.changeImage, 3000);


    }

    arrowClick(element) {
        if (element === 1) {
            if (this.state.currentSlide !== this.images.length - 1) {
                this.setState({
                    currentSlide: this.state.currentSlide + 1
                })
            } else {
                this.setState({
                    currentSlide: 0
                })
            }
        }
        if (element === -1) {
            if (this.state.currentSlide !== 0) {
                this.setState({
                    currentSlide: this.state.currentSlide - 1
                })
            } else {
                this.setState({
                    currentSlide: this.images.length - 1
                })
            }
        }

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
                    images={this.images} arrowClick={this.arrowClick}/>
        )
    }
}


