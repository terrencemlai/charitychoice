import * as SchoolAPIUtil from '../util/school_api_util';

export const RECEIVE_SCHOOLS = "RECEIVE_SCHOOLS";

const receiveSchools = (schools) => ({
    type: RECEIVE_SCHOOLS,
    schools: Object.values(schools)
})

export const getSchools = () => dispatch => (
    SchoolAPIUtil.getSchools()
    .then( schools => dispatch(receiveSchools(schools)))
)