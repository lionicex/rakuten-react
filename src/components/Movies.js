import React from 'react';
import '../css/lists.css';
import PropTypes from "prop-types";

const Movies = ({data, title}) => {

    return (
        <div className="container-section">
            <div className="title-bar">
                <h2>{title}</h2>
                <h4>Ver todo > </h4>
            </div>

            <div className="container-movies">


                <div className="container-img">

                    {data.map(film => (
                        <div className="image">
                            <img key={film.numerical_id} src={film.images.artwork} alt=""
                                 className="img-thumbnail"/>
                            <div className="rating">
                                <span className="rating-text">
                                    <ion-icon name="star">
                                    </ion-icon>
                                    {film.highlighted_score.score}
                                </span>
                                <span className="views-text">
                                    <ion-icon name="person">
                                    </ion-icon>
                                    {film.highlighted_score.formatted_amount_of_votes}
                                </span>
                            </div>
                        </div>
                    ))}
                    <div className="back-bg"></div>
                    <div className="forward-bg"></div>
                    <a className="back">&#10094;</a>
                    <a className="forward">&#10095;</a>

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
