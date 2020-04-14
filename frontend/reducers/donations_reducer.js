import { RECEIVE_PROJECT } from '../actions/project_actions';

const donationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    // let newState = Object.assign({}, oldState)
  
    switch(action.type) {
      case RECEIVE_PROJECT:
        let newState = {};
        action.donations.map( donation => {
            newState[donation.id] = donation;
        })
        return newState;
      default:
        return oldState;
    }
  };



export default donationsReducer;