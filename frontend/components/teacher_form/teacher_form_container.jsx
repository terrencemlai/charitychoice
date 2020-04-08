import { connect } from 'react-redux';

import { createTeacher } from '../../actions/teacher_actions';
import { getSchools } from '../../actions/school_actions';
import TeacherForm from './teacher_form';

const mapStateToProps = (state) => ({
    userTeacher: {
        email: '',
        full_name: '',
        honorific: '',
        teacher_name: '',
        school_id: '',
    }
});

const mapDispatchToProps = dispatch => ({
  createTeacher: (user, teacher) => dispatch(createTeacher(user, teacher)),
  getSchools: () => dispatch(getSchools())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherForm);