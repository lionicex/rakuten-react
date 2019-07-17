import React from 'react';
import '../css/banner.css';
import {connect} from "react-redux";

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

const mapStateToProps = state => ({
    images: state.bannerImages.images
});
export default connect(mapStateToProps)(Banner);

