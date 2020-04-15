import { RECEIVE_CATEGORIES } from '../actions/category_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';

const categoriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)

    switch(action.type) {
      case RECEIVE_CATEGORIES:
        return action.categories;
      case RECEIVE_PROJECT:
        action.categories.map( category => {
          newState[category.id] = category;
        })
        return newState;
      

      default:
        return oldState;
    }
  };
  
  export default categoriesReducer;