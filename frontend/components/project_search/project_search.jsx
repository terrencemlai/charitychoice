import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            filters: [],
            page: 1,
        }

        this.handleProjectClick = this.handleProjectClick.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleFilterCheck = this.handleFilterCheck.bind(this);
        this.renderResults = this.renderResults.bind(this);
        this.renderSubjectCategories = this.renderSubjectCategories.bind(this);
        this.renderFilterClear = this.renderFilterClear.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        let queryString = new URLSearchParams(this.props.location.search);
        let keyword = queryString.get("keyword");
        let page = queryString.get("page");
        if (page === null) {page = 1};

        if (keyword) {
            this.props.fetchProjects({ keyword, page})
        } else {
            this.props.fetchProjects(this.state);
        }
    }

    handleProjectClick(project){
        this.props.history.push(`${project.id}`);
    }

    handleSearchChange(){
        return e => this.setState({ keyword: e.target.value })
    }

    handleSearchSubmit(e){
        e.preventDefault();
        let urlParams = new URLSearchParams(this.props.location.search);
        urlParams.set('keyword', this.state.keyword)
        urlParams.set('page', this.state.page)
        this.props.history.push('search?' + urlParams.toString())
        this.props.fetchProjects(this.state);
        this.setState({ keyword: ''})
        window.scrollTo(0, 0)
    }

    handleFilterCheck(categoryId){
        const filters = this.state.filters;
        filters.includes(categoryId) ? filters.splice(filters.indexOf(categoryId), 1) : filters.push(categoryId)
        this.setState({filters})
        this.props.fetchProjects({ keyword: this.props.search.query, page: 1, filters: this.state.filters })
    }

    handleFilterClear(){
        this.setState({filters: []})
        this.props.fetchProjects({ keyword: this.props.search.query, page: 1, filters: [] })
    }

    renderSubjectCategories(group) {
        return (
        this.props.categories.map( category => {
            if (category.group === group) {
                const checkBox = this.state.filters.includes(category.id);
                return (
                    <li key={category.category} onClick={()=> this.handleFilterCheck(category.id)} >
                        <input type="checkbox" checked={checkBox} onChange={()=>{}}/>
                        <label>{category.category}</label>
                    </li>
                )
            }})
        )
    }    

    renderFilterClear(){
        if (this.state.filters.length > 0) {
            return <div className="clear-button" onClick={()=>this.handleFilterClear()}>Clear Filters</div>
        }

        window.scrollTo(0, 0)
    }


    renderResults(){
        return (
            this.props.projectsArray.map(project => {
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

    handlePageChange(dir){
        const urlParams = new URLSearchParams(this.props.location.search)
        let page;
        dir === 'next' ? page = this.props.search.page + 1 : page = this.props.search.page - 1;
        urlParams.set('page', page)
        this.props.history.push('search?' + urlParams.toString())
        this.props.fetchProjects({ keyword: this.props.search.query, filters: this.state.filters, page })
        window.scrollTo(0, 0)
    }

    renderPriorPagination(){ 
        if (this.props.projectsArray.length === 0) {
            return ''
        } else if (this.props.search.page > 1) {
            return <div className="page-arrow-prior" onClick={()=>this.handlePageChange('prior')}>Prior Page</div>
        } else {
            return <div className="page-arrow-prior-disabled">Prior Page</div>
        }
    }

    renderNextPagination(){
        if (this.props.projectsArray.length === 0) {
            return ''
        } else if (this.props.search.page < Math.ceil(this.props.search.projectsTotal / this.props.search.pageLength)) {
            return <div className="page-arrow-next" onClick={()=>this.handlePageChange('next')}>Next Page</div>
        } else {
            return <div className="page-arrow-next-disabled">Next Page</div>
        }
    }

    renderResultsTotals(){
        let query = this.props.search.query !== '' ? this.props.search.query : 'All Projects' 
        if (this.props.projectsArray.length === 0) {
            return <div className="list-length">No matches for <strong>"{this.props.search.query}"</strong> and any selected filters. Please try another search.</div>
        } else {
            const resultsStart = (this.props.search.page-1) * this.props.search.pageLength + 1;
            const resultsEnd = resultsStart - 1 + this.props.projectsArray.length;
            return <div className="list-length">Showing {resultsStart}-{resultsEnd} of {this.props.search.projectsTotal} Result(s) for <strong>"{query}"</strong> and any selected filters</div>
        }
    }


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
                        {this.renderFilterClear()}
                    </div>

                    <div className="results-list">
                        {this.renderResultsTotals()}
                        {this.renderResults()}
                        <div className="pagination-bar">
                            {this.renderPriorPagination()}
                            {this.renderNextPagination()}
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}

export default withRouter(ProjectSearch)