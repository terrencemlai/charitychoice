import { RECEIVE_TEACHER_ERRORS, RECEIVE_CURRENT_USER } from '../actions/teacher_actions';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_TEACHER_ERRORS:
        return action.errors;
      case RECEIVE_CURRENT_USER:
        return [];
      default:
        return state;
    }
  };
  