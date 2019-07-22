import {combineReducers} from "redux";
import sliderReducer from './sliderReducer';
import bannerReducer from './bannerReducer';
import genreReducer from './genreReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({
    sliderImages: sliderReducer,
    bannerImages: bannerReducer,
    genreImages: genreReducer,
    movies: moviesReducer
});

