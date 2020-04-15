import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { NavLink } from 'react-router-dom';
import { selectProject, selectSchool, selectTeacher, selectCategories } from '../../reducers/selectors';

/*
Export a container component for the `PostShow` that maps in the appropriate
post from the store as a `post` prop. Additionally, it should map in
a function that will dispatch `fetchPost` to the store as a prop of the same
name.
*/

const mapStateToProps = ({entities}, ownProps) => {
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
    }
};

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);