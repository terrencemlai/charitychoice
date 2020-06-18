import { connect } from 'react-redux';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_actions';
import ProjectEditForm from './project_edit';
import { selectProject, selectCategories } from '../../reducers/selectors';


const mapStateToProps = ({entities, errors}, ownProps) => {
    const projectId = parseInt(ownProps.match.params.id);
    const project = selectProject(entities, projectId);

    return {
        project: project,
        categories: Object.values(entities.categories),
        errors: errors.projects,
    }
};

const mapDispatchToProps = dispatch => ({
    fetchProject: id => dispatch(fetchProject(id)),
    updateProject: (project, categories) => dispatch(updateProject(project, categories)),
    fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditForm);