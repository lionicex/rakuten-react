import React, {Component} from 'react';
import Genre from "../components/Genre";
import {connect} from "react-redux";

export class GenreContainer extends Component {

    render() {
        return (
            <Genre images={this.props.images}/>
        )
    }
}
const mapStateToProps = state => ({
    images: state.genreImages.images
});
export default connect(mapStateToProps)(GenreContainer);


