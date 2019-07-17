import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {PopularesEnTaquillaContainer} from "../containers/PopularesEnTaquillaContainer";
import {BannerContainer} from "../containers/BannerContainer";
import {GenreContainer} from "../containers/GenreContainer";
import {SliderContainer} from "../containers/SliderContainer";
//Redux
import {Provider} from 'react-redux';
import store from '../store/store';


const Home = () => (
    <Provider store={store}>
        <Header/>
        <SliderContainer/>
        <BannerContainer/>
        <PopularesEnTaquillaContainer/>
        <GenreContainer/>
        <Footer/>
    </Provider>

);

export default Home;
