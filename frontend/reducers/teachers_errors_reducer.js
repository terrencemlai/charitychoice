import { RECEIVE_TEACHER_ERRORS, RECEIVE_CURRENT_TEACHER } from '../actions/teacher_actions';
  
  export default (oldState = [], action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
      case RECEIVE_TEACHER_ERRORS:
        return action.errors;
      case RECEIVE_CURRENT_TEACHER:
        return [];
      default:
        return oldState;
    }
  };
  