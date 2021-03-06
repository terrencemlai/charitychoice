import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Modal from './modal/modal';
import NavBar from './navbar/navbar';
import Splash from './splash/splash';
import TeacherFormContainer from './teacher_form/teacher_form_container';
import TeacherMyProjects from './teacher_myprojects/teacher_myprojects';
import UserFormContainer from './user_form/user_form_container';
import ProjectFormContainer from './project_form/project_form_container';
import ProjectEditFormContainer from './project_form/project_edit_container';
import ProjectSearchContainer from './project_search/project_search_container';
import ProjectShowContainer from './project_show/project_show_container';
import SigninFormContainer from './signin_form/signin_form_container';
import DonationsFormContainer from './donations_form/donations_form_container';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute, ProtectedTeacherRoute } from '../util/route_util';


const App = () => (
    <div>
      <Modal />
      <header>
        <NavBar/>
      </header>

      <Switch>
        <AuthRoute exact path="/teachers/signup" component={TeacherFormContainer} />
        <AuthRoute exact path="/users/signup" component={UserFormContainer} />
        <ProtectedTeacherRoute path="/teachers/myprojects" component={TeacherMyProjects} />
        <ProtectedTeacherRoute path="/projects/create" component={ProjectFormContainer} />
        <Route path="/projects/search" component={ProjectSearchContainer} />
        <Route path="/projects/:id" component={ProjectShowContainer} />
        <Route path="/edit/:id" component={ProjectEditFormContainer} />
        <Route path="/donate/:id" component={DonationsFormContainer} />
        <Route path="/teachers/myprojects" component={TeacherMyProjects} />
        <Route path="/teachers/signup" component={TeacherFormContainer} />
        <Route path="/users/signup" component={UserFormContainer} />
        <Route path="/signin" component={SigninFormContainer} />
        <Route exact path="/" component={Splash} />
      </Switch>


      <footer>
        <Footer/>
      </footer>
    </div>
  );
  
  export default App;