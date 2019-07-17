import {SHOW_BANNER_IMAGES} from "../actions/types";

const initialState = {
    images: [
        "https://images-2.wuaki.tv/system/images/379/original/nr-video-july-2019-web-1561565293-width308-quality80.jpeg",
        "https://images-3.wuaki.tv/system/images/81/original/family-generic-1560499518-width308-quality80.jpeg",
        "https://images-3.wuaki.tv/system/images/1894/original/sp-middle-banner-vacacines-1561968802-width308-quality80.jpeg",
        "https://images-1.wuaki.tv/system/images/85/original/svod-generic-vis-reg-1539871328-width308-quality80.jpeg",
        "https://images-0.wuaki.tv/system/images/88/original/all-genres-generic-web-1539615671-width308-quality80.jpeg"
    ]
};

export default function (state = initialState, action) {
    if (action.type === SHOW_BANNER_IMAGES) {
        return {
            ...state
        }
    } else {
        return state;
    }
}
