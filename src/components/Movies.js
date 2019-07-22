import React from 'react';
import '../css/lists.css';

import PropTypes from "prop-types";

const Movies = ({data, title}) => {

    return (
        <div className="section-list">
            <h2>{title}</h2>
            <div className="container-list">
                <div id='contenedor' className="img-size">
                    {data.map(film => (
                        <img key={film.numerical_id} src={film.images.artwork} alt=""
                             className="img-thumbnail"/>
                    ))}
                </div>
            </div>
        </div>
    )


};

Movies.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired

};

export default Movies;
