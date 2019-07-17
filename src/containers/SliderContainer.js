import React, {Component} from 'react';
import Slider from '../components/Slider';

export class SliderContainer extends Component {

    constructor(props) {
        super(props);
        this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
        this.arrowClick = this.arrowClick.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.state = {
            currentSlide: 0
        };
    }


    changeImage() {
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

    arrowClick(element) {
        if (element === 1) {
            if (this.state.currentSlide !== this.image.length - 1) {
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
                    currentSlide: this.image.length - 1
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
                    arrowClick={this.arrowClick}/>
        )
    }
}

export default SliderContainer;

