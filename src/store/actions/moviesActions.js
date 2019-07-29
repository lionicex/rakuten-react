import {SHOW_MOVIES_CATEGORIES, SHOW_MOVIES_TITLES, SHOW_FILMS, CREATE_URL, CLICK_LEFT, CLICK_RIGHT} from "./types";
import axios from 'axios';

export const createUrl = (categories) => dispatch => {
    let url = [];
    Object.keys(categories).map(index => {
        url[index] = `https://gizmo.rakuten.tv/v3/lists/${categories[index]}?classification_id=5&device_identifier=web&locale=es&market_code=es`;
    });
    dispatch({
        type: CREATE_URL,
        payload: url
    })
};
export const getCategories = () => {
    return {
        type: SHOW_MOVIES_CATEGORIES
    }
};
export const getTitles = (categories) => dispatch => {
    let newStr = [];
    Object.keys(categories).map(index => {
        newStr[index] = categories[index].replace(/\-/g, ' ');
        newStr[index] = newStr[index].charAt(0).toUpperCase() + newStr[index].slice(1);
    });
    dispatch({
        type: SHOW_MOVIES_TITLES,
        payload: newStr
    })

};
export const showFilms = (url) => async dispatch => {
    const response = await axios.get(`${url}`);
    dispatch({
        type: SHOW_FILMS,
        payload: response.data.data.contents.data
    })


};
export const clickRight = (id) => dispatch => {
    console.log("HOLA", id);
    const clientWidth = document.documentElement.clientWidth;
    const container = document.getElementById(id);
    const childWidth = container.children.item(0).offsetWidth;
    const childPaddingLeft = window.getComputedStyle(container.children.item(0)).getPropertyValue('padding-left');
    const childsInView = Math.round(clientWidth / (childWidth + childPaddingLeft * 2));
    const nextItem = container.children.item(childsInView);
    container.scrollLeft = nextItem.offsetLeft - childPaddingLeft;
    dispatch({
        type: CLICK_RIGHT
    })

};
