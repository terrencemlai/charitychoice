import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { receiveCartItem } from '../../actions/cart_actions';
import { NavLink } from 'react-router-dom';
import { selectProject, selectSchool, selectTeacher, selectCategories, selectCurrentTeacher } from '../../reducers/selectors';



const mapStateToProps = ({entities, session}, ownProps) => {
    const projectId = parseInt(ownProps.match.params.id);
    const project = selectProject(entities, projectId);
    const teacher = selectTeacher(entities, project.teacher_id);
    const school = selectSchool(entities, project.school_id);
    const categories = selectCategories(entities, project.categoryIds);
    const currentTeacherId = selectCurrentTeacher(session);


    return {
        project: project,
        teacher: teacher,
        school: school,
        donations: Object.values(entities.donations),
        categories: categories,
        currentTeacherId: currentTeacherId,
    }
};

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  receiveCartItem: cartItem => dispatch(receiveCartItem(cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);