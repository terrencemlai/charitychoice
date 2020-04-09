import { RECEIVE_AUTO_SCHOOLS } from '../actions/autocomplete_actions';
  
  const autocompleteReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState);

    switch(action.type) {
      case RECEIVE_AUTO_SCHOOLS:
        newState["schools"] = action.schools;
        return newState;
      default:
        return oldState;
    }
  };
  
  export default autocompleteReducer;