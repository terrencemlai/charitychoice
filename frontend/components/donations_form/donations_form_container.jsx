import { connect } from 'react-redux';
import DonationsForm from './donations_form';
import { fetchProject } from '../../actions/project_actions';
import { NavLink } from 'react-router-dom';
import { selectProject, selectSchool, selectTeacher, selectCategories } from '../../reducers/selectors';



const mapStateToProps = ({entities, session, ui}, ownProps) => {
    const projectId = parseInt(ownProps.match.params.id);
    const project = selectProject(entities, projectId);
    const teacher = selectTeacher(entities, project.teacher_id);
    const school = selectSchool(entities, project.school_id);
    const categories = selectCategories(entities, project.categoryIds);


    return {
        project: project,
        teacher: teacher,
        school: school,
        donations: Object.values(entities.donations),
        categories: categories,
        session: session,
        cart: ui.cart,
    }
};

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DonationsForm);