import { combineReducers } from 'redux';
import teachers from './teachers_reducer';
import users from './users_reducer';
import projects from './projects_reducer';


const entitiesReducer = combineReducers({
    teachers,
    users,
    projects,
});

export default entitiesReducer;


