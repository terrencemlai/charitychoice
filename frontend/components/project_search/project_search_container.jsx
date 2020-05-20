import { connect } from 'react-redux';
import ProjectSearch from './project_search';
import { fetchCategories } from '../../actions/category_actions';
import { fetchProjects } from '../../actions/project_actions';


const mapStateToProps = ({entities, ui}, ownProps) => ({
        projectsArray: Object.values(entities.projects),
        projects: entities.projects,
        teachers: entities.teachers,
        schools: entities.schools,
        categories: Object.values(entities.categories),
        search: ui.search,
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: (data) => dispatch(fetchProjects(data)),
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSearch);