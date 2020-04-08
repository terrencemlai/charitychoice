import * as TeacherAPIUtil from '../util/teacher_api_util';

export const RECEIVE_TEACHER = "RECEIVE_TEACHER";

const receiveTeacher = (teacher) => ({
    type: RECEIVE_TEACHER,
    teacher: teacher
})

export const createTeacher = (user, teacher) => dispatch => (
    TeacherAPIUtil.createTeacher({user, teacher})
    .then( teacher => dispatch(receiveTeacher(teacher)))
)
    