import React, { useReducer } from 'react';
import { connect, useStore } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchMyProjects } from '../../actions/teacher_actions';

class MyProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            with_search: false,
            keyword: '',
        }

        this.handleProjectClick = this.handleProjectClick.bind(this);
        this.renderResults = this.renderResults.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchMyProjects();
    }

    handleProjectClick(project){
        this.props.history.push(`/projects/${project.id}`);
    }


    renderResults(){
        return (
            this.props.projectsArray.map( project => {
                const school = `${this.props.schools[project.school_id].name}, ${this.props.schools[project.school_id].city}, ${this.props.schools[project.school_id].state}`
                const meterPct = project.progressPct+'%';
                const meterWidthStyle = {
                    width: meterPct,
                };

                return (
                    <div className="project-tile" key={project.id} onClick={()=> this.handleProjectClick(project)}>
                        <div className="classroom-photo col-1-3"></div>
                        <div className="project-summary col-2-3">
                            <h3>{project.title}</h3>
                            <p>{project.blurb}</p>
                            <div className="teacher">{this.props.teachers[project.teacher_id].display_name}</div>
                            <div className="school">{school}</div>
                        </div>
                        <div className="project-progress col-3-3">
                            <div className="meter-frame">
                                <div className="meter" style={meterWidthStyle}></div>
                            </div>
                            <div><strong>{project.donors}</strong> DONORS SO FAR</div>
                            <div><strong>${project.needed}</strong> STILL NEEDED</div>
                        </div>
                    </div>

                )
    }))}

    render() {
        const teacherName = this.props.teacherName;

        return(
            <div className="myprojects-main">
                <div className="greeting-headline">
                    <span className="material-icons">school</span>
                    { typeof teacherName !== 'undefined' ? <h2>Welcome back, {teacherName}</h2> : ''}
                </div>
                <div className="results-grid">

                    <div className="results-list">
                        <Link className="link" to="/projects/create">
                            <div className="create-pseudo-button">
                                <span className="material-icons">add_circle</span>
                                <h3>Create a Project</h3>
                            </div>
                        </Link>
                        {this.renderResults()}
                    </div>


                </div>

            </div>
        )
    }

}



const mapStateToProps = ({entities, ui, session}, ownProps) => ({
    projectsArray: Object.values(entities.projects),
    projects: entities.projects,
    teachers: entities.teachers,
    schools: entities.schools,
    categories: Object.values(entities.categories),
    query: ui.search.query,
    teacherName: session.display_name,
});

const mapDispatchToProps = dispatch => ({
    fetchMyProjects: () => dispatch(fetchMyProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);