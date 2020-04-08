import { combineReducers } from 'redux';
import teachersReducer from './teachers_reducer';
import schoolsReducer from './schools_reducer';


const rootReducer = combineReducers({
    teachers: teachersReducer,
    schools: schoolsReducer
});

export default rootReducer;
