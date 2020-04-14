import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_actions';
import ProjectForm from './project_form';

const mapStateToProps = ({entities, errors}) => ({
    project: {
        title: '',
        blurb: '',
        about_students: '',
        description: '',
        goal: '',
        categories: [],
    },

    categories: Object.values(entities.categories),

    errors: errors.projects,

});

const mapDispatchToProps = dispatch => ({
    createProject: (project, categories) => dispatch(createProject(project, categories)),
    fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);