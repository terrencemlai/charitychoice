import { RECEIVE_PROJECT_ERRORS, RECEIVE_PROJECT } from '../actions/project_actions';
  
export default (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
      case RECEIVE_PROJECT_ERRORS:
        return action.errors;
      case RECEIVE_PROJECT:
        return [];
      default:
        return oldState;
    }
};
  