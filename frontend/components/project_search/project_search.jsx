import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            with_search: false,
            keyword: '',
        }

        this.handleProjectClick = this.handleProjectClick.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.renderResults = this.renderResults.bind(this);
        this.renderSubjectCategories = this.renderSubjectCategories.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        let queryString = new URLSearchParams(this.props.location.search); "?keyword=arts"
        let keyword = queryString.get("keyword");
        
        if (keyword) {
            this.props.fetchProjects({ with_search: true, keyword: keyword })
        } else {
            this.props.fetchProjects();
        }
    }

    handleProjectClick(project){
        this.props.history.push(`${project.id}`);
    }

    handleSearchChange(){
        return e => this.setState({ with_search: true, keyword: e.target.value })
    }

    handleSearchSubmit(e){
        e.preventDefault();
        this.props.fetchProjects(this.state);
        this.setState({ with_search: false, keyword: ''})
        window.scrollTo(0, 0)
    }

    renderSubjectCategories(group) {
        return (
        this.props.categories.map( category => {
            if (category.group === group) {
                return (
                    <li key={category.category}>
                        <input type="checkbox"/>
                        <label>{category.category}</label>
                    </li>
                )
            }})
        )
    }    


    renderResults(){
        return (
            this.props.projectsArray.map( project => {
                const school = `${this.props.schools[project.school_id].name}, ${this.props.schools[project.school_id].city}, ${this.props.schools[project.school_id].state}`
                const stillNeeded = Math.floor(project.goal - project.progress);
                const progressPct = () => (stillNeeded > 0 ? `${Math.floor((project.progress/project.goal)*100)}%` : '100%');
                const meterPct = progressPct();
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
                            { stillNeeded > 0 ? <div><strong>${stillNeeded}</strong> STILL NEEDED</div> : <div><strong>$0</strong> STILL NEEDED</div> }
                        </div>
                    </div>
                )
    }))}


    render() {
        return(
            <div className="search-main">
                <div className="search-bar inputdiv">
                    <form onSubmit={this.handleSearchSubmit}>
                        <input type="text" onChange={this.handleSearchChange()} value={this.state.keyword} placeholder="Search subjects, supplies, teachers and schools"/>
                        <button>Search</button>
                    </form>
                </div>

                <div className="results-grid">
                    <div className="filters-list">
                        <label>SUBJECTS</label>
                        <ul>
                            {this.renderSubjectCategories('subject')}
                        </ul>
                        <label>REQUESTS</label>
                        <ul>
                        {this.renderSubjectCategories('need')}
                        </ul>
                    </div>

                    <div className="results-list">
                        <div className="list-length">Showing {this.props.projectsArray.length} Result(s) {this.props.query === '' ? '' : 'for '}{this.props.query === '' ? '' : <strong>"{this.props.query}"</strong>}</div>
                        {this.renderResults()}
                    </div>


                </div>

            </div>
        )
    }

}

export default withRouter(ProjectSearch)