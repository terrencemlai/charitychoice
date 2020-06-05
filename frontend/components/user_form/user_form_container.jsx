import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import UserForm from './user_form';

const mapStateToProps = (state, ownProps) => ({
    user: {
      email: '',   
      password: '',
      display_name: '',
    },
    cart: state.ui.cart,
    errors: state.errors.users,

});

const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);