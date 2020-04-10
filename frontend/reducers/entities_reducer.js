import { combineReducers } from 'redux';
import teachers from './teachers_reducer';
import users from './users_reducer';


const entitiesReducer = combineReducers({
    teachers,
    users,
});

export default entitiesReducer;


