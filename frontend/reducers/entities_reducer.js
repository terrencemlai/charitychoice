import { combineReducers } from 'redux';
import teachers from './teachers_reducer';
import users from './users_reducer';
import projects from './projects_reducer';
import categories from './categories_reducer';
import schools from './schools_reducer';
import donations from './donations_reducer';


const entitiesReducer = combineReducers({
    projects,
    schools,
    teachers,
    categories,
    donations,
    users,
});

export default entitiesReducer;


