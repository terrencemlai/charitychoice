import { combineReducers } from 'redux';
import teachersErrorsReducer from './teachers_errors_reducer';


const errorsReducer = combineReducers({
    teachers: teachersErrorsReducer,
});

export default errorsReducer;