import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchProjects } from '../../actions/project_actions';
import GreetingMobile from './greeting_mobile';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchProjects: (data) => dispatch(fetchProjects(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GreetingMobile);
