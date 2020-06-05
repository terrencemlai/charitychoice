import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import { receiveCartItem } from '../../actions/cart_actions';
import SigninForm from './signin_form';

const mapStateToProps = (state) => ({
    user: {
      email: '',   
      password: '',
    },

    errors: state.errors.sessions,

});

const mapDispatchToProps = dispatch => ({
    signin: (user) => dispatch(signin(user)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);