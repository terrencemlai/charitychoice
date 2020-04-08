import { RECEIVE_SCHOOLS } from '../actions/school_actions';
  
  const schoolsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
      case RECEIVE_SCHOOLS:
        return action.schools;
      default:
        return oldState;
    }
  };
  
  export default schoolsReducer;