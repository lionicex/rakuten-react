import {SHOW_GENRE_ICONS, FETCH_CATEGORIES, SHOW_SLIDER_IMAGES, SHOW_BANNER_IMAGES} from "../actions/types";

const initialState = {
    sliderImages: [],
    bannerImages: [],
    categories: [],
    genreIcons: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_SLIDER_IMAGES:
            return null;
        case SHOW_BANNER_IMAGES:
            return null;
        case FETCH_CATEGORIES:
            return null;
        case SHOW_GENRE_ICONS:
            return null;
        default:
            return state;
    }
}
