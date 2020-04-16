import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project_actions';

const projectsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
  
    switch(action.type) {
      case RECEIVE_PROJECT:
        newState[action.project.id] = action.project;
        return newState;
      case RECEIVE_PROJECTS:
        newState = Object.assign({}, action.projects);
        return newState;
      default:
        return oldState;
    }
  };
  
  export default projectsReducer;