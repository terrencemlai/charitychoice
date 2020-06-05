import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.project;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.renderSubjectCategories = this.renderSubjectCategories.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchCategories()
    }

    handleCheckbox(e){
        let categories = this.state.categories;
        if (e.target.checked === true && !categories.includes(e.target.value)) {
            categories.push(e.target.value);
        } else if (e.target.checked === false && categories.includes(e.target.value)) {
            categories.splice( categories.indexOf(e.target.value), 1 );
        }
        this.setState({ categories: categories })
    }

    handleChange(field){
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        const project = {   title: this.state.title,
                            blurb: this.state.blurb,
                            about_students: this.state.about_students,
                            description: this.state.description,
                            goal: this.state.goal };
        const categories = this.state.categories;
        this.props.createProject(project, categories).then( () => {this.props.history.push('/teachers/myprojects')})
    }

    renderErrors() {
        if (typeof this.props.errors !== undefined) {
            return (
                <div className="errors">
                    <ul>
                    {this.props.errors.map( error => (
                        <li key={error}>- {error}</li>
                    ))}
                    </ul>
                </div>
            )
        }
    }

    renderSubjectCategories(group) {
        return (
        this.props.categories.map( category => {
            if (category.group === group) {
                return (
                    <li key={category.category}>
                        <input type="checkbox" onClick={this.handleCheckbox} value={category.id}/>
                        <label>{category.category}</label>
                    </li>
                )
            }})
        )
    }

    render () {
            
        return (
            <section className="create-new-project">
            <section className="create-main">
                <h1>Create a New Project</h1>
                <section className="subcontainer">                 
                    <form className="create-form" onSubmit={this.handleSubmit}>
                        
                        <div className="inputdiv">
                            <h2>Project Title</h2>
                            <p className="subblurb">What's the name of your project?</p>
                            <input 
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            />
                        </div>

                        <div className="inputdiv">
                            <h2>Your Elevator Pitch</h2>
                            <p className="subblurb sentence-complete">Briefly describe what you're requesting for your students.</p>
                            <input 
                            className="input-blurb"
                            type="text"
                            value={this.state.blurb}
                            onChange={this.handleChange('blurb')}
                            />
                        </div>

                        <div className="inputdiv">
                            <h2>Your Students</h2>
                            <p className="subblurb">Tell us what you love about your students. What makes them special?</p>
                            <textarea
                            className="input-largertext"
                            type="textarea"
                            value={this.state.about_students}
                            onChange={this.handleChange('about_students')}
                            />
                        </div>

                        <div className="inputdiv">
                            <h2>Your Project</h2>
                            <p className="subblurb">Tell us about your project in more detail. What will the funds be used for?  Why is this project so important for the enrichment of your students?</p>
                            <textarea 
                            className="input-largertext"
                            type="textarea"
                            value={this.state.description}
                            onChange={this.handleChange('description')}
                            />
                        </div>

                        <div className="inputdiv">
                            <h2>Funding Goal</h2>
                            <p className="subblurb">How much are you requesting to raise for this project?</p>
                            <span className="input-funding">
                                <input 
                                type="textarea"
                                value={this.state.goal}
                                onChange={this.handleChange('goal')}
                                />
                            </span>
                        </div>

                        <div className="inputdiv">
                            <h2>Project Tags</h2>
                            <p className="subblurb">Tag your project so that donors can find your project more easily.<br/>Select all that apply.</p>
                            <section className="input-categories">
                                <div>
                                    <label className="input-categories-header">Subjects</label>
                                    <ul>
                                        {this.renderSubjectCategories('subject')}
                                    </ul>
                                </div>
                                <div>
                                    <label className="input-categories-header">Needs</label>
                                    <ul>
                                        {this.renderSubjectCategories('need')}
                                    </ul>
                                </div>
                            </section>
                        </div>

                        {this.renderErrors()}

                        <p className="disclaimer">By submitting this project, you agree to our Terms of Use and Privacy Policy</p>
                        <button>
                            Create Project
                        </button>
                    </form>
                
                </section>
            </section>
            </section>
        )
    }
}

export default withRouter(ProjectForm);