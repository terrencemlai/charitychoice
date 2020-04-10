import { connect } from 'react-redux';

import { createTeacher } from '../../actions/teacher_actions';
import { autocompleteSchools } from '../../actions/autocomplete_actions';
import TeacherForm from './teacher_form';

const mapStateToProps = (state) => ({
    userTeacher: {
      email: '',   
      password: '',
      full_name: '',
      honorific: '',
      teacher_name: '',
      school_id: '',
      searchText: '',
      searchHidden: ' createAutoHidden'
    },

    errors: state.errors.teachers,

    autocomplete: state.autocomplete

});

const mapDispatchToProps = dispatch => ({
  createTeacher: (user, teacher) => dispatch(createTeacher(user, teacher)),
  autocompleteSchools: (searchText) => dispatch(autocompleteSchools(searchText))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherForm);