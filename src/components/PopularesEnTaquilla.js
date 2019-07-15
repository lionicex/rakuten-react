import React, {Component} from 'react';
import '../css/lists.css';


export class PopularesEnTaquilla extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            peliculas: []
        };
    }

    componentDidMount() {

        console.log(this.state.url);
        const response = fetch(this.state.url, {
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

                    <img key={film.numerical_id} src={film.images.artwork} alt="" className="img-thumbnail"/>

            );
        });

        return (

            <div className="section-list">
                <h2>{this.props.title}</h2>

                <div className="container-list">

                    <div id='contenedor' className="img-size">
                        <a className="prev">&#10094;</a>
                        <a className="next">&#10095;</a>
                        {image}
                    </div>
                </div>
            </div>
        )
    }

}

export default PopularesEnTaquilla;
