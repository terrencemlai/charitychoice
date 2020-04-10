import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Splash from './splash/splash';
import TeacherFormContainer from './teacher_form/teacher_form_container';
import UserFormContainer from './user_form/user_form_container';
import Footer from './footer/footer';

const App = () => (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/teachers/new" component={TeacherFormContainer} />
        <Route path="/users/new" component={UserFormContainer} />
        <Route exact path="/" component={Splash} />
      </Switch>
      <Footer/>
    </div>
  );
  
  export default App;