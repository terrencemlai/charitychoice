import * as AutocompleteAPIUtil from '../util/autocomplete_api_util';

export const RECEIVE_AUTO_SCHOOLS = "RECEIVE_AUTO_SCHOOLS";

const receiveAutoSchools = (schools) => ({
    type: RECEIVE_AUTO_SCHOOLS,
    schools: schools
})

export const autocompleteSchools = (searchText) => dispatch => (
    AutocompleteAPIUtil.autocompleteSchools(searchText)
    .then( schools => dispatch(receiveAutoSchools(schools)))
)