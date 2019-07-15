import React from 'react';
import '../css/genre.css';

export const Genre = ({images}) => {

    const list = [];

    images.map((image) => {
        list.push(
            <div className="limit">
                <img src={image.src} alt="" width={95}/>
                <p>{image.name}</p>
            </div>
        )
    });

    return (
        <div className="section-list">
            <h2>Genre</h2>
            <div className="container-list">
                <div id='container-genre' className="img-size">
                    {list}
                </div>
            </div>
        </div>
    )

};

export default Genre;
