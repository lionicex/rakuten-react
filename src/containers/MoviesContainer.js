import React, {Component, Fragment} from 'react';
import Movies from '../components/Movies';
import {connect} from "react-redux";
import {clickLeft, clickRight, getTitles, showFilms} from "../store/actions/moviesActions";

export class MoviesContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.url.map((url) => {
            this.props.showFilms(url);

        });

    }

    render() {
        return (
            Object.keys(this.props.films).map(index => (
                <Movies key={index}
                        clickRight={this.props.clickRight}
                        clickLeft={this.props.clickLeft}
                        id={this.props.titles[index].toLowerCase().replace(/\s/g, '')}
                        title={this.props.titles[index]}
                        data={this.props.films[index]}
                />
            ))
        )
    }
}

const mapStateToProps = state => ({
    categories: state.movies.categories,
    titles: state.movies.titles,
    url: state.movies.url,
    films: state.movies.films
});

export default connect(mapStateToProps, {getTitles, showFilms, clickRight, clickLeft})(MoviesContainer);


