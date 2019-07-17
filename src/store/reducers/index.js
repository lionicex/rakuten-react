import {combineReducers} from "redux";
import sliderReducer from './sliderReducer';
import bannerReducer from './bannerReducer';
import genreReducer from "./genreReducer";

export default combineReducers({
    sliderImages: sliderReducer,
    bannerImages: bannerReducer,
    genreImages: genreReducer
});

