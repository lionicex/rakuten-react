import {SHOW_BANNER_IMAGES} from "../actions/types";

const initialState = {
    images: [
        "https://images-3.wuaki.tv/system/images/380/original/nr-video-august-2019-web-1564136195-width308-quality80.jpeg",
        "https://images-3.wuaki.tv/system/images/81/original/family-generic-1560499518-width308-quality80.jpeg",
        "https://images-2.wuaki.tv/system/images/1801/original/sp-middle-banner-aventuras-de-verano-disney-promo-i-1563523239-width308-quality80.jpeg",
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
