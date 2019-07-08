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
        const url = 'https://gizmo.rakuten.tv/v3/lists/populares-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es';
        const response = fetch(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => response.text())
            .then((text) => JSON.parse(text))
            .then((json) => {
                this.setState({
                    peliculas: json.data.contents.data
                });
                console.log(this.state.peliculas);
            });
    }

    render() {
        const image = [];
        this.state.peliculas.map((film) => {
          console.log(film.images.artwork);
            image.push(
                <img id={film.numerical_id} src={film.images.artwork} alt="" className="img-thumbnail" width={250}/>
            );
        });


        image.push(
            <img src="" alt="" className="img-thumbnail" width={250}/>
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
