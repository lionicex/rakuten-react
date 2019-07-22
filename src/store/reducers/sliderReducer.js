import {NEXT_PREV_BUTTON, SHOW_SLIDER_IMAGES, UPDATE_CURRENT_SLIDE} from "../actions/types";

const initialState = {
    images: [
        "https://images-3.wuaki.tv/system/images/46/original/register-slider-generic-1562229457-width1920-quality80.jpeg",
        "https://images-0.wuaki.tv/system/images/1868/original/sp-slider-capitana-marvel-1561559790-width1920-quality80.jpeg",
        "https://images-2.wuaki.tv/system/images/1849/original/sp-slider-taxi-a-gibraltar-1562312188-width1920-quality80.jpeg"
    ],
    currentSlide: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_SLIDER_IMAGES:
            return {
                ...state
            };
        case UPDATE_CURRENT_SLIDE:
            return {
                ...state,
                currentSlide: parseInt(action.payload)
            };
        case NEXT_PREV_BUTTON:
            let current = state.currentSlide;
            if (action.payload === "1") {
                if (state.currentSlide !== state.images.length - 1) {
                    current++;
                } else {
                    current = 0;
                }
            }
            if (action.payload === "-1") {
                if (current !== 0) {
                    current--;
                } else {
                    current = state.images.length - 1;
                }
            }
            return {
                ...state,
                currentSlide: current
            };
        default:
            return state;
    }
}
