import React, {Fragment} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {SliderContainer} from "../containers/SliderContainer";
import {PopularesEnTaquillaContainer} from "../containers/PopularesEnTaquillaContainer";
import {InitialListContainer} from "../containers/InitialListContainer";
import {GenreContainer} from "../containers/GenreContainer";

const Home = () => (
    <Fragment>
        <Header/>
        <SliderContainer/>
        <InitialListContainer/>
        <PopularesEnTaquillaContainer/>
        <GenreContainer/>
        <Footer/>
    </Fragment>

);

export default Home;
