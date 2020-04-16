import { RECEIVE_CURRENT_TEACHER } from '../actions/teacher_actions';
import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project_actions';
  
const teachersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch(action.type) {
    case RECEIVE_CURRENT_TEACHER:
      newState[action.teacher.id] = action.teacher;
      return newState;
    case RECEIVE_PROJECT:
      newState[action.teacher.id] = action.teacher;
      return newState;
    case RECEIVE_PROJECTS:
      newState = Object.assign({}, action.teachers);
      return newState;
    default:
      return oldState;
  }
};

export default teachersReducer;