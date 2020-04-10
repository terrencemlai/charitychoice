import { combineReducers } from 'redux';

import autocomplete from './autocomplete_reducer';
import modal from './modal_reducer';

export default combineReducers({
  autocomplete,
  modal,
});
