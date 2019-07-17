import React from 'react';
import '../css/genre.css';
import {connect} from "react-redux";

export const Genre = ({images}) => {

    return (
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
    )

};

const mapStateToProps = state => ({
    images: state.genreImages.images
});
export default connect(mapStateToProps)(Genre);
