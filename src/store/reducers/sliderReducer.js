import {SHOW_SLIDER_IMAGES} from "../actions/types";

const initialState = {
    images: [
        "https://images-3.wuaki.tv/system/images/46/original/register-slider-generic-1562229457-width1920-quality80.jpeg",
        "https://images-0.wuaki.tv/system/images/1868/original/sp-slider-capitana-marvel-1561559790-width1920-quality80.jpeg",
        "https://images-2.wuaki.tv/system/images/1849/original/sp-slider-taxi-a-gibraltar-1562312188-width1920-quality80.jpeg"
    ]
};

export default function (state = initialState, action) {
    if (action.type === SHOW_SLIDER_IMAGES) {
        return {
            ...state
        }
    } else {
        return state;
    }
}

