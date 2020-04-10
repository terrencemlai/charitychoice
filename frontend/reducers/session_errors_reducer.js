import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

  export default (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case RECEIVE_CURRENT_USER:
        return [];
      case CLOSE_MODAL:
        return [];
      default:
        return oldState;
    }
  };