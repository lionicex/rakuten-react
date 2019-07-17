import React, {Component} from 'react';
import Banner from "../components/Banner";

export class BannerContainer extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Banner images={this.images}/>
        )
    }
}


