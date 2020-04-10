import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Modal from './modal/modal';
import NavBar from './navbar/navbar';
import Splash from './splash/splash';
import TeacherFormContainer from './teacher_form/teacher_form_container';
import UserFormContainer from './user_form/user_form_container';
import SigninFormContainer from './signin_form/signin_form_container';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
      <Modal />
      <header>
        <NavBar/>
      </header>


      <Switch>
        <AuthRoute exact path="/teachers/new" component={TeacherFormContainer} />
        <AuthRoute exact path="/users/new" component={UserFormContainer} />
        <Route path="/teachers/new" component={TeacherFormContainer} />
        <Route path="/users/new" component={UserFormContainer} />
        <Route path="/signin" component={SigninFormContainer} />
        <Route exact path="/" component={Splash} />
      </Switch>

      <Footer/>
    </div>
  );
  
  export default App;