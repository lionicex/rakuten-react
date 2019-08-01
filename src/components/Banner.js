import React from 'react';
import '../css/banner.css';
import PropTypes from "prop-types";

export const Banner = ({images}) => {

    return (
        <div className="grid-container">
            {Object.keys(images).map(index => (
                <a key={index} href="#">
                    <img src={images[index]} alt="" className="img-thumbnail grid-item"/>
                </a>
            ))}
        </div>
    )

};

Banner.propTypes = {
    images: PropTypes.array.isRequired

};
export default Banner;

