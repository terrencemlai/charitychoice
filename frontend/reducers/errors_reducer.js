import { combineReducers } from 'redux';
import teachersErrorsReducer from './teachers_errors_reducer';
import usersErrorsReducer from './users_errors_reducer';


const errorsReducer = combineReducers({
    teachers: teachersErrorsReducer,
    users: usersErrorsReducer,
});

export default errorsReducer;