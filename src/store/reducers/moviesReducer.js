import {SHOW_MOVIES_TITLES, CREATE_URL, SHOW_MOVIES_CATEGORIES, SHOW_FILMS, CLICK_RIGHT, CLICK_LEFT} from "../actions/types";

const initialState = {

    categories: [
        "populares-en-taquilla",
        "estrenos-para-toda-la-familia",
        "estrenos-imprescindibles-en-taquilla",
        "estrenos-espanoles"
    ],
    titles: [
        "Populares en taquilla",
        "Estrenos para toda la familia",
        "Estrenos imprescindibles en taquilla",
        "Estrenos espanoles"
    ],
    url: [
        "https://gizmo.rakuten.tv/v3/lists/populares-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es",
        "https://gizmo.rakuten.tv/v3/lists/estrenos-para-toda-la-familia?classification_id=5&device_identifier=web&locale=es&market_code=es",
        "https://gizmo.rakuten.tv/v3/lists/estrenos-imprescindibles-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es",
        "https://gizmo.rakuten.tv/v3/lists/estrenos-espanoles?classification_id=5&device_identifier=web&locale=es&market_code=es"
    ],
    films: []
};

export default function (state = initialState, action) {

    switch (action.type) {
        case CREATE_URL:
            return {
                ...state,
                url: action.payload
            };
        case SHOW_MOVIES_CATEGORIES:
            return {
                ...state,
                ...state.categories
            };
        case SHOW_MOVIES_TITLES:
            return {
                ...state,
                titles: action.payload
            };
        case SHOW_FILMS:
            return {
                ...state,
                films: [...state.films, action.payload]
            };
        case CLICK_RIGHT:
            return {
                ...state
            };
        case CLICK_LEFT:
            return {
                ...state
            };
        default:
            return state;
    }
}

