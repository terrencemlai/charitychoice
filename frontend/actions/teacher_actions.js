import * as TeacherAPIUtil from '../util/teacher_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_TEACHER_ERRORS = "RECEIVE_TEACHER_ERRORS";
export const RECEIVE_TEACHER = "RECEIVE_TEACHER";

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const receiveTeacherErrors = (errors) => ({
    type: RECEIVE_TEACHER_ERRORS,
    errors
})

export const createTeacher = (user, teacher) => dispatch => (
    TeacherAPIUtil.createTeacher({user, teacher})
    .then( user => (dispatch(receiveCurrentUser(user))
        ), errors => dispatch(receiveTeacherErrors(errors.responseJSON)))
)
