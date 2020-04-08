import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Splash from './splash/splash';
import TeacherFormContainer from './teacher_form/teacher_form_container';

const App = () => (
    <div>
      <header>
          <h1>Coming Soon</h1>
          <Link to="/teachers/new">Sign Up As Teacher</Link>
      </header>
      <Switch>
        <Route path="/teachers/new" component={TeacherFormContainer} />
        <Route exact path="/" component={Splash} />
      </Switch>
    </div>
  );
  
  export default App;