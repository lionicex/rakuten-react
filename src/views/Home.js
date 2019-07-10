import React, {Fragment} from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import InitialList from '../components/InitialList';
import Genre from '../components/Genre';
import Footer from '../components/Footer';
import {PopularesEnTaquillaContainer} from "../containers/PopularesEnTaquillaContainer";

const Home = () => (
    <Fragment>
        <Header/>
        <Slider/>
        <InitialList/>
        <PopularesEnTaquillaContainer/>
        <Genre/>
        <Footer/>
    </Fragment>

);

export default Home;
