//React
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as TeacherAPIUtil from './util/teacher_api_util';
import * as SchoolAPIUtil from './util/school_api_util';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  //TESTING
  window.createTeacher = TeacherAPIUtil.createTeacher;
  window.getSchools = SchoolAPIUtil.getSchools;
  //TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
