import { combineReducers } from 'redux';
import teachers from './teachers_reducer';
import users from './users_reducer';
import projects from './projects_reducer';
import categories from './categories_reducer';


const entitiesReducer = combineReducers({
    teachers,
    users,
    projects,
    categories,
});

export default entitiesReducer;


