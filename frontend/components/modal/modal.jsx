import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SigninFormContainer from '../signin_form/signin_form_container';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'signin':
      component = <SigninFormContainer type="generic"/>
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <section className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
