import React from 'react';
import PopularesEnTaquilla from '../components/PopularesEnTaquilla';

export class PopularesEnTaquillaContainer extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.title.bind(this);
        this.lists = ["populares-en-taquilla", "estrenos-para-toda-la-familia", "estrenos-imprescindibles-en-taquilla", "estrenos-espanoles"];
    }

    title(id) {
        const newStr = id.replace(/\-/g, ' ');
        return newStr.charAt(0).toUpperCase() + newStr.slice(1);
    };

    render() {
        return (
            this.lists.map((id) =>
                <PopularesEnTaquilla key={id}
                                     title={this.title(id)}
                                     url={`https://gizmo.rakuten.tv/v3/lists/${id}?classification_id=5&device_identifier=web&locale=es&market_code=es`}/>
            ))
    }

}
