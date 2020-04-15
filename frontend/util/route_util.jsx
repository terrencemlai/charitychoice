import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);


const ProtectedTeacher = ({ component: Component, path, loggedIn, isTeacher, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn && isTeacher ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id),
  isTeacher: state.session.is_teacher
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const ProtectedTeacherRoute = withRouter(connect(mapStateToProps)(ProtectedTeacher));

