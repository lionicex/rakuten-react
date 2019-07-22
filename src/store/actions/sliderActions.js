import {NEXT_PREV_BUTTON, SHOW_SLIDER_IMAGES, UPDATE_CURRENT_SLIDE} from "./types";

export const showSliderImages = () => {
    return {
        type: SHOW_SLIDER_IMAGES
    }
};
export const updateCurrentSlide = (index) => {
    return {
        type: UPDATE_CURRENT_SLIDE,
        payload: index
    }
};
export const nextPrevButton = (event) => {
    return {
        type: NEXT_PREV_BUTTON,
        payload: event
    }
};
