import React, {Fragment} from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import InitialList from '../components/InitialList';
import PopularesEnTaquilla from '../components/PopularesEnTaquilla';
import Genre from '../components/Genre';
import Footer from '../components/Footer';

const Home = () => (
    <Fragment>
        <Header/>
        <Slider/>
        <InitialList/>
        <PopularesEnTaquilla/>
        <Genre/>
        <Footer/>
    </Fragment>

);

export default Home;
