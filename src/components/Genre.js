import React from 'react';
import '../css/genre.css';
import {connect} from "react-redux";

export const Genre = ({images}) => {

    return (
        <div className="container-section">
            <div className="title-bar">
                <h2>Genre</h2>
            </div>
            <div className="container-movies">
                <div className="container-img">
                    {Object.keys(images).map(index => (
                        <div className="limit">
                            <img key={index} src={images[index].src} className="clip" alt=""/>
                            <p>{images[index].name}</p>
                        </div>
                    ))}
                    <div className="genre-back-bg"></div>
                    <div className="genre-forward-bg"></div>
                    <a className="genre-back">&#10094;</a>
                    <a className="genre-forward">&#10095;</a>
                </div>
            </div>
        </div>
    )
    /*return (
        <div className="section-list">
            <h2>Genre</h2>
            <div className="container-list">
                <div id='container-genre' className="img-size">
                    {Object.keys(images).map(index => (
                        <div key={index} className="limit">
                            <img src={images[index].src} alt="" width={95}/>
                            <p>{images[index].name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )*/

};

export default Genre;
