import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveCurrentUser = ({user}) => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

const receiveUserErrors = (errors) => {
    debugger;
    return (
    {
    type: RECEIVE_USER_ERRORS,
    errors
})
}

export const createUser = (user) => dispatch => (
    UserAPIUtil.createUser(user)
    .then( user => (dispatch(receiveCurrentUser(user))
        ), errors => dispatch(receiveUserErrors(errors.responseJSON)))
)