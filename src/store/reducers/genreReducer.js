import {CLICK_LEFT, CLICK_RIGHT, SHOW_GENRE_IMAGES} from "../actions/types";

const initialState = {
    images: [
        {
            src: "https://images-2.wuaki.tv/system/brandable_photos/6231/original/1453732413-1453732413.png",
            name: "Acción",
        },
        {
            src: "https://images-2.wuaki.tv/system/brandable_photos/6349/original/1461242197-1461242197.png",
            name: "Animación"
        },
        {
            src: "https://images-0.wuaki.tv/system/brandable_photos/6351/original/1461242480-1461242480.png",
            name: "Autor Indie"
        },
        {
            src: "https://images-1.wuaki.tv/system/brandable_photos/6352/original/1461242555-1461242555.png",
            name: "Aventuras"
        },
        {
            src: "https://images-3.wuaki.tv/system/brandable_photos/6353/original/1461242646-1461242646.png",
            name: "Bélico"
        },
        {
            src: "https://images-0.wuaki.tv/system/brandable_photos/6354/original/1461243145-1461243145.png",
            name: "Ciencia Ficción"
        },
        {
            src: "https://images-1.wuaki.tv/system/brandable_photos/6356/original/1461243368-1461243368.png",
            name: "Cine Español"
        },
        {
            src: "https://images-2.wuaki.tv/system/brandable_photos/6357/original/1461243437-1461243437.png",
            name: "Cine Familiar"
        },
        {
            src: "https://images-0.wuaki.tv/system/brandable_photos/6358/original/1461243499-1461243499.png",
            name: "Clásicos"
        },
        {
            src: "https://images-1.wuaki.tv/system/brandable_photos/6359/original/1461243667-1461243667.png",
            name: "Comedia"
        },
        {
            src: "https://images-2.wuaki.tv/system/brandable_photos/6360/original/1461243740-1461243740.png",
            name: "Comedia Romántica"
        },
        {
            src: "https://images-3.wuaki.tv/system/brandable_photos/6362/original/1461244009-1461244009.png",
            name: "Disney"
        },
        {
            src: "https://images-3.wuaki.tv/system/brandable_photos/6363/original/1461244445-1461244445.png",
            name: "Documental"
        },
        {
            src: "https://images-2.wuaki.tv/system/brandable_photos/6364/original/1461244827-1461244827.png",
            name: "Drama"
        },
        {
            src: "https://images-1.wuaki.tv/system/brandable_photos/6365/original/1461244898-1461244898.png",
            name: "Drama romántico"
        },
        {
            src: "https://images-2.wuaki.tv/system/brandable_photos/6371/original/1461246537-1461246537.png",
            name: "Terror"
        },
        {
            src: "https://images-0.wuaki.tv/system/brandable_photos/6372/original/1461246595-1461246595.png",
            name: "Thriller"
        },
        {
            src: "https://images-1.wuaki.tv/system/brandable_photos/6373/original/1461246654-1461246654.png",
            name: "Western"
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {

        case SHOW_GENRE_IMAGES:
            return {
                ...state
            };
        case CLICK_LEFT:
            return {
                ...state
            };
        case CLICK_RIGHT:
            return {
                ...state
            };
        default:
            return state;
    }
}
