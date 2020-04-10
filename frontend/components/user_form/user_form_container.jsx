import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import UserForm from './user_form';

const mapStateToProps = (state) => ({
    user: {
      email: '',   
      password: '',
      display_name: '',
    },

    errors: state.errors.users,

});

const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);