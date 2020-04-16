import { combineReducers } from 'redux';

import autocomplete from './autocomplete_reducer';
import modal from './modal_reducer';
import search from './search_reducer';

export default combineReducers({
  autocomplete,
  modal,
  search,
});
