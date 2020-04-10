import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import autocompleteReducer from './autocomplete_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';


const rootReducer = combineReducers({
    entities: entitiesReducer,
    autocomplete: autocompleteReducer,
    session: sessionReducer,
    errors: errorsReducer,
});

export default rootReducer;
