import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import teachersReducer from './teachers_reducer';


const entitiesReducer = combineReducers({
    teachers: teachersReducer,
    users: usersReducer,
});

export default entitiesReducer;


