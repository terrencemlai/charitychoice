import { connect } from 'react-redux';
import DonationsForm from './donations_form';
import { fetchProject } from '../../actions/project_actions';
import { createDonation } from '../../actions/donation_actions';
import { openModal } from '../../actions/modal_actions';
import { NavLink } from 'react-router-dom';
import { selectProject, selectSchool, selectTeacher, selectCategories } from '../../reducers/selectors';



const mapStateToProps = ({entities, session, ui, errors}, ownProps) => {
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
        errors: errors.donations,
    }
};

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  createDonation: donation => dispatch(createDonation(donation)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DonationsForm);