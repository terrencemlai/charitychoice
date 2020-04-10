//React
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {logout} from './actions/session_actions';
import { openModal, closeModal } from './actions/modal_actions';


document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id,
                 is_teacher: window.currentUser.is_teacher },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  //TESTING
  window.logout = logout;
  window.store = store;
  window.openModal = openModal;
  window.closeModal = closeModal;
  //TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
