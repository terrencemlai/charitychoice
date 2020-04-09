//React
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as TeacherAPIUtil from './util/teacher_api_util';
import * as AutocompleteAPIUtil from './actions/autocomplete_actions';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  //TESTING
  window.createTeacher = TeacherAPIUtil.createTeacher;
  window.autocompleteSchools = AutocompleteAPIUtil.autocompleteSchools;
  window.store = store;
  //TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
