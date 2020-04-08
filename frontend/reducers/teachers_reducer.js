import { RECEIVE_TEACHER } from '../actions/teacher_actions';
  
  const teachersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
      case RECEIVE_TEACHER:
        return action.teacher.teacher;
      default:
        return oldState;
    }
  };
  
  export default teachersReducer;