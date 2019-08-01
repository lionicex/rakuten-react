import React, {Component} from 'react';
import Genre from "../components/Genre";
import {connect} from "react-redux";
import {clickLeft, clickRight} from "../store/actions/moviesActions";

export class GenreContainer extends Component {

    render() {
        return (
            <Genre images={this.props.images} clickRight={this.props.clickRight} clickLeft={this.props.clickLeft}/>
        )
    }
}

const mapStateToProps = state => ({
    images: state.genreImages.images
});
export default connect(mapStateToProps, {clickRight, clickLeft})(GenreContainer);


