import * as ProjectAPIUtil from '../util/projects_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

const receiveProject = ({project, teacher, school, donations, categories }) => ({
    type: RECEIVE_PROJECT,
    project,
    teacher,
    school,
    donations,
    categories,
})

const receiveProjectErrors = (errors) => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
})

export const createProject = (project, categories) => dispatch => (
    ProjectAPIUtil.createProject({project, categories})
    .then(project => (dispatch(receiveProject(project))
    ), errors => dispatch(receiveProjectErrors(errors.responseJSON)))    
)

export const fetchProject = (id) => dispatch => (
    ProjectAPIUtil.fetchProject(id)
    .then(payload => (dispatch(receiveProject(payload)) 
)))
