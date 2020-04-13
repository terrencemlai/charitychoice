//React
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { logout } from './actions/session_actions';
import { createProject } from './actions/project_actions';


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
  window.store = store;
  window.logout = logout;
  window.createProject = createProject;
  //TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

// window.createProject({project: {title: 'a', blurb: 'a', description: 'a', about_students:'a', goal: 1.00}, categories: []})(store.dispatch)
// window.createProject({title: 'a', blurb: 'a', description: 'a', about_students:'a', goal: 1.00}, ["Books", "Art Supplies"])(store.dispatch)
// window.createProject({project: {title: 'a', blurb: 'a', description: 'a', about_students:'a', goal: 1.00}, categories: ["Books", "Art Supplies"]})