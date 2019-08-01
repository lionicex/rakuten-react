import React from 'react';
import '../css/genre.css';
import PropTypes from "prop-types";

export const Genre = ({images, clickLeft, clickRight}) => {

    return (
        <div className="container-section">
            <div className="title-bar">
                <h2>Genre</h2>
            </div>
            <div className="container-movies">
                <div id="genre" className="container-img">
                    {images.map(image => (
                        <div key={image.src + image.name} className="limit">
                            <img src={image.src} className="clip" alt=""/>
                            <p>{image.name}</p>
                        </div>
                    ))}
                    <div className="genre-back-bg"></div>
                    <div className="genre-forward-bg"></div>
                    <a className="genre-back" onClick={() => clickLeft("genre")}>&#10094;</a>
                    <a className="genre-forward" onClick={() => clickRight("genre")}>&#10095;</a>
                </div>
            </div>
        </div>
    )

};
Genre.propTypes = {
    images: PropTypes.array.isRequired,
    clickRight: PropTypes.func.isRequired,
    clickLeft: PropTypes.func.isRequired

};

export default Genre;
