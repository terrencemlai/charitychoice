import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';



class Splash extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            keyword: ''
        }

        this.handleProjectClick = this.handleProjectClick.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchProjects();
    }

    handleProjectClick(project){
        this.props.history.push(`${project.id}`);
    }

    handleSearchChange(){
        return e => this.setState({ with_search: true, keyword: e.target.value })
    }
    
    handleSearchSubmit(e){
        e.preventDefault();
        this.props.history.push(`projects/search?keyword=${this.state.keyword}`);
        this.setState({keyword: ''})
    }

    renderWelcome(){
        return (
            <div id="welcome-message">
                <h1>Make a difference.</h1>
                <h1>Give back.</h1>
                <p className="subheader">
                    Teachers and students need your help to transform their classrooms and maximize their educational enrichment. 
                    Fund supplies, equipment, class trips, and more for a classroom project of your choice today.
                </p>
                <Link to="/projects/search" className="link"><div>See classroom projects</div></Link>
                <p className="subblurb">
                    Thank you for considering this demonstration site, inspired by DonorsChoose.org
                </p>
            </div>
        )

    }

    render(){
        return (
            <div className="splash-main">
                <div className="splash-row splash-row-01">
                    <span className="splash-row-01-A">
                        <span className="splash-row-01-B">{this.renderWelcome()}</span>
                    </span>
                    <span className="splash-row-01-C">{this.renderWelcome()}</span>
                </div>

                <div className="splash-row splash-row-02">
                    <div className="search-bar inputdiv">
                        <form className="search-form" onSubmit={this.handleSearchSubmit}>
                            <input type="text" onChange={this.handleSearchChange()} value={this.state.keyword} placeholder="Search subjects, supplies, teachers and schools"/>
                            <button>Search</button>
                        </form>
                    </div>
                </div>
                <div className="splash-row splash-row-03">
                        <span>Are you a school teacher?</span>
                        <Link className="link" to="/teachers/signup"><div>Register to create projects</div></Link>
                </div>
                <div className="splash-row splash-row-04">
                    NEARBY PROJECTS
                </div>
                <div className="splash-row splash-row-05">
                    <h2>
                        About Us
                    </h2>
                    <p className="subheader">
                        Founded in 2020, CharityChoice was created by a data scientist studying software engineering at one of New York's most selective bootcamps. The objective upon graduation is to further develop creative and dynamic analytics solutions for real business challenges.
                    </p>
                    
                    <a className="link" href="https://www.linkedin.com/in/terrencelai/" target="_blank"><div className="responsive-button">LinkedIn</div></a>
                    
                </div>
                {/* <div className="splash-row splash-row-06">
                    MORE INFO
                </div>
                <div className="splash-row splash-row-07">
                    YET MORE INFO
                </div>
                <div className="splash-row splash-row-08">
                    EVEN MORE INFO
                </div> */}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: (data) => dispatch(fetchProjects(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Splash);