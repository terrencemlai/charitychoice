import * as SessionAPIUtil from '../util/session_api_util';
import { closeModal } from './modal_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = ({user}) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


export const signin = (user) => dispatch => (
  SessionAPIUtil.signin(user)
  .then(user => (dispatch(receiveCurrentUser(user))), 
        errors => (dispatch(receiveErrors(errors.responseJSON))))
  .then(() => dispatch(closeModal()))
)


export const logout = () => dispatch => (
  SessionAPIUtil.logout()
  .then(user => (dispatch(logoutCurrentUser())))
)

