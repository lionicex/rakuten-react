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

const scrolls = [];
const moveSmooth = (container, to) => {
    const from = container.scrollLeft;
    let current = from;
    let interval = null;
    if (from < to) {
        interval = setInterval(() => {
            current += 20;
            if (current > to) {
                clearInterval(interval);
            } else {
                container.scrollLeft = current;
            }
        }, 10);
    } else {
        interval = setInterval(() => {
            current -= 20;
            if (current < to) {
                clearInterval(interval);
            } else {
                container.scrollLeft = current;
            }
        }, 10);
    }
};

export const clickRight = (id) => dispatch => {

    const clientWidth = document.documentElement.clientWidth;
    const container = document.getElementById(id);
    const childWidth = container.children.item(0).offsetWidth;
    const childPaddingLeft = parseInt(window.getComputedStyle(container.children.item(0).children.item(0), null).getPropertyValue('padding-left').replace(/px/g, ''));
    const childsInView = Math.round(clientWidth / (childWidth + childPaddingLeft * 2));
    const nextItem = container.children.item(childsInView);
    const index = scrolls.findIndex((item) => item.id === id);
    const scrolled = index !== -1;

    if (!scrolled) {
        moveSmooth(container, nextItem.offsetLeft - childPaddingLeft);
        scrolls.push({id, count: 1});
    } else {
        if ((scrolls[index].count + 1) * childsInView > container.children.length - 4) return;
        scrolls[index].count += 1;
        moveSmooth(container, (nextItem.offsetLeft - childPaddingLeft) * scrolls[index].count);
    }
    dispatch({
        type: CLICK_RIGHT
    })
};

export const clickLeft = (id) => dispatch => {

    const clientWidth = document.documentElement.clientWidth;
    const container = document.getElementById(id);
    const childWidth = container.children.item(0).offsetWidth;
    const childPaddingLeft = parseInt(window.getComputedStyle(container.children.item(0).children.item(0), null).getPropertyValue('padding-left').replace(/px/g, ''));
    const childsInView = Math.round(clientWidth / (childWidth + childPaddingLeft * 2));
    const nextItem = container.children.item(childsInView);
    const index = scrolls.findIndex((item) => item.id === id);
    const scrolled = index !== -1;

    if (!scrolled) {
        scrolls.push({id, count: 1});
    } else {
        if (scrolls[index].count === 0) return;
        scrolls[index].count -= 1;
        moveSmooth(container, (nextItem.offsetLeft - childPaddingLeft) * scrolls[index].count);
    }
    dispatch({
        type: CLICK_LEFT
    })
};

