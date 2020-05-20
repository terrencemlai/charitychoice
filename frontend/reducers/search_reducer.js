import { RECEIVE_PROJECTS } from '../actions/project_actions';
  
  const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState)

    switch(action.type) {
      case RECEIVE_PROJECTS:
        return Object.assign({}, action.search);
        
      default:
        return oldState;
    }
  };
  
  export default searchReducer;