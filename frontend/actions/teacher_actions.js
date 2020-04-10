import * as TeacherAPIUtil from '../util/teacher_api_util';

export const RECEIVE_CURRENT_TEACHER = "RECEIVE_CURRENT_TEACHER";
export const RECEIVE_TEACHER_ERRORS = "RECEIVE_TEACHER_ERRORS";
export const RECEIVE_TEACHER = "RECEIVE_TEACHER";

const receiveCurrentTeacher = ({user, teacher}) => ({
    type: RECEIVE_CURRENT_TEACHER,
    user,
    teacher
})

const receiveTeacherErrors = (errors) => ({
    type: RECEIVE_TEACHER_ERRORS,
    errors
})

export const createTeacher = (user, teacher) => dispatch => (
    TeacherAPIUtil.createTeacher({user, teacher})
    .then( userTeacher => (dispatch(receiveCurrentTeacher(userTeacher))
        ), errors => dispatch(receiveTeacherErrors(errors.responseJSON)))
)
