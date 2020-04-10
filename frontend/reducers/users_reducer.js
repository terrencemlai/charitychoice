import { RECEIVE_CURRENT_TEACHER } from '../actions/teacher_actions';
import { RECEIVE_CURRENT_USER } from '../actions/user_actions';
  
const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)

  switch(action.type) {
    case RECEIVE_CURRENT_TEACHER:
      return Object.assign({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
        return Object.assign({}, oldState, { [action.user.id]: action.user });
    default:
      return oldState;
  }
};

export default usersReducer;