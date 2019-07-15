import React from 'react';
import '../css/initialList.css';

export const InitialList = ({images}) => {
    const list = [];
    images.map((image) => {
        list.push(
            <a href="#">
                <img src={image} alt="" className="img-thumbnail grid-item"/>
            </a>
        )
    });

    return (
        <div className="grid-container">
            {list}
        </div>
    )

};

export default InitialList;
