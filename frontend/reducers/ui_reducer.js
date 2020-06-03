import { combineReducers } from 'redux';

import autocomplete from './autocomplete_reducer';
import modal from './modal_reducer';
import search from './search_reducer';
import cart from './cart_reducer';

export default combineReducers({
  autocomplete,
  modal,
  search,
  cart,
});
