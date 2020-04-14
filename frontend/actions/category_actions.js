import * as CategoryAPIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
})


export const fetchCategories = (categories) => dispatch => (
    CategoryAPIUtil.fetchCategories()
    .then(categories => (dispatch(receiveCategories(categories)) 
)))
