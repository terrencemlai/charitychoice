import { RECEIVE_CURRENT_TEACHER } from '../actions/teacher_actions';
  
const teachersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)

  switch(action.type) {
    case RECEIVE_CURRENT_TEACHER:
      return Object.assign({}, oldState, { [action.teacher.id]: action.teacher })
    default:
      return oldState;
  }
};

export default teachersReducer;