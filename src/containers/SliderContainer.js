import React from 'react';
import Slider from '../components/Slider';

export class SliderContainer extends React.Component {


    constructor(props) {
        super(props);


        this.plusSlides = this.plusSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.showSlides = this.showSlides.bind(this);
        this.lessSlides = this.lessSlides.bind(this);

    }

    componentDidMount() {

        let slideIndex = 0;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        console.log(slides.length);
        for (let i = 0; i < slides.lenght; i++) {
            this.slides[this.i].style.display = "none";
        }
        this.slideIndex++;
        if (slideIndex > slides.length) {
            this.slideIndex = 1
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(this.componentDidMount, 3000); // Change image every 3 seconds
    }

    plusSlides() {
        const dots = 0;
        const slides = 0;
        let slideIndex = 0;
        slideIndex += 1;
        if (slideIndex > slides.length) {
            slideIndex = 1
        } else if (slideIndex < 1) {
            slideIndex = slides.length
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");

        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    lessSlides() {
        const dots = 0;
        const slides = 0;
        let slideIndex = 0;
        slideIndex += -1;
        if (slideIndex > slides.length) {
            slideIndex = 1
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");

        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    currentSlide(index) {

        const slides = 0;
        const dots = 0;
        if (index > slides.length) {
            index = 1
        } else if (index < 1) {
            index = slides.length
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[index - 1].style.display = "block";
        dots[index - 1].className += " active";
    }

    render() {
        return (
            <Slider currentSlide={this.currentSlide} plusSlides={this.plusSlides} lessSlides={this.lessSlides}/>
        )
    }

}


