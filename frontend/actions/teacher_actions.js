import * as TeacherAPIUtil from '../util/teacher_api_util';
import { RECEIVE_PROJECTS } from './project_actions';

export const RECEIVE_CURRENT_TEACHER = "RECEIVE_CURRENT_TEACHER";
export const RECEIVE_TEACHER_ERRORS = "RECEIVE_TEACHER_ERRORS";
export const RECEIVE_TEACHER = "RECEIVE_TEACHER";


const receiveCurrentTeacher = ({user, teacher}) => ({
    type: RECEIVE_CURRENT_TEACHER,
    user,
    teacher,
})

const receiveTeacherErrors = (errors) => ({
    type: RECEIVE_TEACHER_ERRORS,
    errors
})

const receiveMyProjects = ({projects, teachers, schools, donations, categories, query }) => ({
    type: RECEIVE_PROJECTS,
    projects,
    teachers,
    schools,
    donations,
    categories,
    query,
})

export const createTeacher = (user, teacher) => dispatch => (
    TeacherAPIUtil.createTeacher({user, teacher})
    .then( userTeacher => (dispatch(receiveCurrentTeacher(userTeacher))
        ), errors => dispatch(receiveTeacherErrors(errors.responseJSON)))
)

export const fetchMyProjects = () => dispatch => (
    TeacherAPIUtil.fetchMyProjects()
    .then(payload => (dispatch(receiveMyProjects(payload))))
)

