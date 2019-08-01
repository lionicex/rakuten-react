import React, {Component} from 'react';
import Banner from "../components/Banner";
import {connect} from "react-redux";

export class BannerContainer extends Component {

    render() {
        return (
            <Banner images={this.props.images}/>
        )
    }
}

const mapStateToProps = state => ({
    images: state.bannerImages.images
});
export default connect(mapStateToProps)(BannerContainer);

