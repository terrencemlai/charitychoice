import { combineReducers } from 'redux';
import teachersReducer from './teachers_reducer';
import autocompleteReducer from './autocomplete_reducer';
import errorsReducer from './errors_reducer';


const rootReducer = combineReducers({
    teachers: teachersReducer,
    autocomplete: autocompleteReducer,
    errors: errorsReducer
});

export default rootReducer;
