import React, {Component} from 'react';
import Slider from '../components/Slider';
import {connect} from "react-redux";
import {nextPrevButton, showSliderImages, updateCurrentSlide} from "../store/actions/sliderActions";

export class SliderContainer extends Component {

    constructor(props) {
        super(props);
        this.changeImage = this.changeImage.bind(this);
    }
    componentDidMount() {
        showSliderImages();
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
    render() {
        return (
            <Slider images={this.props.images}
                    currentSlide={this.props.currentSlide}
                    updateCurrentSlide={this.props.updateCurrentSlide}
                    nextPrevButton={this.props.nextPrevButton}/>
        )
    }
}
const mapStateToProps = state => ({
    images: state.sliderImages.images,
    currentSlide: state.sliderImages.currentSlide,
    updateCurrentSlide: updateCurrentSlide(),
    nextPrevButton: nextPrevButton(),
    showSliderImages: showSliderImages()
});

export default connect(mapStateToProps, {showSliderImages, updateCurrentSlide, nextPrevButton})(SliderContainer);

