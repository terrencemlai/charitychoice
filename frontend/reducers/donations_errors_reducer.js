import { RECEIVE_DONATION_ERRORS, COMPLETE_DONATION } from '../actions/donation_actions';
  
  export default (oldState = [], action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
      case RECEIVE_DONATION_ERRORS:
        return action.errors;
      case COMPLETE_DONATION:
        return [];
      default:
        return oldState;
    }
  };
  