
import { RECEIVE_CURRENT_TEACHER } from '../actions/teacher_actions';
import { RECEIVE_CURRENT_USER } from '../actions/user_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null,
    is_teacher: false
});

const sessionsReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState)

    switch(action.type) {
        case RECEIVE_CURRENT_TEACHER:
            return { id: action.user.id, 
                     teacherId: action.user.teacher_id,
                     is_teacher: action.user.is_teacher, 
                     display_name: action.user.display_name,
                     funds: 50};
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id, 
                    teacherId: action.user.teacher_id,
                    is_teacher: action.user.is_teacher, 
                    display_name: action.user.display_name,
                    funds: 50};
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return oldState;
    }
};

export default sessionsReducer;

