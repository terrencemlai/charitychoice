import * as ProjectAPIUtil from '../util/projects_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

const receiveProject = (project) => ({
    type: RECEIVE_PROJECT,
    project
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

