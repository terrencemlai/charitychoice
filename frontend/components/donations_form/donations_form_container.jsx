import { connect } from 'react-redux';
import DonationsForm from './donations_form';

const mapStateToProps = (state) => ({
    session: state.session
});

const mapDispatchToProps = dispatch => ({
    signin: (user) => dispatch(signin(user)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);