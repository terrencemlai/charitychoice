import React from 'react';

class TeacherForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.userTeacher;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAutocompleteOptions = this.handleAutocompleteOptions.bind(this);
        this.handleAutocompleteSelect = this.handleAutocompleteSelect.bind(this);
        this.autoListListener = this.autoListListener.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.autoListListener)
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.autoListListener)
    }
    
    autoListListener(e) {
        if (e.target.tagName !== 'LI') {
            this.setState({ searchHidden: ' createAutoHidden'})
        }
    }

    handleAutocompleteOptions(e) {
        e.preventDefault();
        this.setState({ school_id: '',
                        searchText: e.target.value,
                        searchHidden: '' })
        this.props.autocompleteSchools( { searchText: e.target.value })
    }

    handleAutocompleteSelect(e) {
        e.preventDefault();
        debugger;
        this.setState({ school_id: e.target.value, 
                        searchText: e.target.id,
                        searchHidden: ' createAutoHidden' })
    }

    handleChange(field){
        return e => this.setState({ [field]: e.target.value,
                                    searchHidden: ' createAutoHidden'})
    }

    handleSubmit(e){
        e.preventDefault();
        const user = { email: this.state.email };
        const teacher = {   full_name: this.state.full_name,
                            school_id: this.state.school_id,
                            honorific: this.state.honorific,
                            teacher_name: this.state.teacher_name}
        this.props.createTeacher(user, teacher)
    }

    renderAutocompleteList() {
        if (typeof this.props.autocomplete.schools !== 'undefined' && this.props.autocomplete.schools.length > 0 ) {
            return this.props.autocomplete.schools.map( school => (
            <li onClick={this.handleAutocompleteSelect} value={school.id} id={school.name} key={school.name}>
                {school.name}
            </li>))
        } else {
            return <li id="createAutoNoMatches">No Matches</li>
        }
    }

    renderErrors() {
        if (typeof this.props.errors !== undefined) {
            return (
                <div className="createErrors">
                    <ul>
                    {this.props.errors.map( error => (
                        <li key={error}>- {error}</li>
                    ))}
                    </ul>
                </div>
            )
        }
    }

    render () {
        const honorifics = ["Coach", "Dr.", "Mr.", "Mrs.", "Ms.", "Mx."];
            
        return (
            <div className="createMainContainer">
                <h1>Teacher Sign Up</h1>
                <div className="createSubContainer">
                    <p className="createBlurb">If you're a teacher or a full-time educator who works directly with students, CharityChoice is for you!</p>
                    <form className="createForm" onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <div className="createInputDiv">
                            <label>Your personal email address</label>
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            />
                        </div>
                        <div className="createInputDiv">
                            <label>Full name</label>
                            <input 
                            type="text"
                            value={this.state.full_name}
                            onChange={this.handleChange('full_name')}
                            />
                        </div>

                        <div className="createInputDiv">
                            <label>Find your school</label>
                            <input
                            type="text"
                            onChange={this.handleAutocompleteOptions}
                            value={this.state.searchText}
                            />
                            <div className={`createAutoListContainer${this.state.searchHidden}`}>
                                <ul className="createAutoList">
                                    {this.renderAutocompleteList()}
                                </ul>
                            </div>
                        </div>

                        <div className="createInputDiv">
                            <label>What do your students call you?</label>
                            <div id="teacherDisplayNameInput">
                                <select onChange={this.handleChange('honorific')}>
                                    <option></option>
                                    {honorifics.map( honorific => (
                                        <option key={honorific} value={honorific}>{honorific}</option>
                                        ))}
                                </select>
                                <input 
                                type="text"
                                value={this.state.teacher_name}
                                onChange={this.handleChange('teacher_name')}
                                />
                            </div>
                        </div>
                        <p className="createDisclaimer">By registering, you agree to our Terms of Use and Privacy Policy</p>
                        <button className="createButton">
                            Register & start my first project!
                        </button>
                    </form>
                
                </div>
            </div>
        )
    }
}

export default TeacherForm;



