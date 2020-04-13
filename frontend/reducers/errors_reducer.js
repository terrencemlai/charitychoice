import { combineReducers } from 'redux';
import teachers from './teachers_errors_reducer';
import users from './users_errors_reducer';
import sessions from './session_errors_reducer';
import projects from './projects_errors_reducer';



const errorsReducer = combineReducers({
    teachers,
    users,
    sessions,
    projects,
});

export default errorsReducer;