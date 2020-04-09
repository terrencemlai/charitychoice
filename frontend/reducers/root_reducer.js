import { combineReducers } from 'redux';
import teachersReducer from './teachers_reducer';
import autocompleteReducer from './autocomplete_reducer';


const rootReducer = combineReducers({
    teachers: teachersReducer,
    autocomplete: autocompleteReducer
});

export default rootReducer;
