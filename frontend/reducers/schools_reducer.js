import { RECEIVE_PROJECT } from '../actions/project_actions';

const schoolsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
  
    switch(action.type) {
      case RECEIVE_PROJECT:
        newState[action.school.id] = action.school;
        return newState;
      default:
        return oldState;
    }
  };



export default schoolsReducer;