import React, {Component} from 'react';
import '../css/lists.css';

export class PopularesEnTaquilla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };

    }

    componentDidMount() {
        const response = fetch(`https://gizmo.rakuten.tv/v3/lists/estrenos-imprescindibles-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es`, {
            mode: 'no-cors'
        }).then((response) => {
            console.log(response.text());
            return response.text();
        });
        console.log(response);
    }

    render() {
        const image = [];
        image.push(
            <img crossOrigin="Anonymous" src="" alt="" className="img-thumbnail" width={250}/>
        );
        return (
            <div className="section-list">
                <h4>Populares en taquilla</h4>
                <div className="container-list">
                    <div id='contenedor' className="img-size">
                        {image}
                    </div>
                </div>
            </div>
        )
    }

}

export default PopularesEnTaquilla;
