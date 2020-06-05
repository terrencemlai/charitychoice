import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
        window.scrollTo(0, 0)
        this.setState({ searchHidden: ' autocomplete-list-hidden'})
        document.addEventListener('mousedown', this.autoListListener)
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.autoListListener)
    }
    
    autoListListener(e) {
        if (e.target.tagName !== 'LI') {
            this.setState({ searchHidden: ' autocomplete-list-hidden'})
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
        this.setState({ school_id: e.target.value, 
                        searchText: e.target.id,
                        searchHidden: ' autocomplete-list-hidden' })
    }

    handleChange(field){
        return e => this.setState({ [field]: e.target.value,
                                    searchHidden: ' autocomplete-list-hidden'})
    }

    handleSubmit(e){
        e.preventDefault();
        const user = {  email: this.state.email,
                        password: this.state.password,
                        display_name: this.state.honorific + ' ' + this.state.teacher_name };
        const teacher = {   full_name: this.state.full_name,
                            school_id: this.state.school_id,
                            honorific: this.state.honorific,
                            teacher_name: this.state.teacher_name}
        this.props.createTeacher(user, teacher)
        .then(() => { 
            if (this.props.cart.projectId !== null) {
                this.props.history.push(`/donate/${this.props.cart.projectId}`);
            }
        });
    }

    renderAutocompleteList() {
        if (typeof this.props.autocomplete.schools !== 'undefined' && this.props.autocomplete.schools.length > 0 ) {
            return this.props.autocomplete.schools.map( school => (
            <li onClick={this.handleAutocompleteSelect} value={school.id} id={school.name} key={school.name}>
                {school.name}
            </li>))
        } else {
            return <li id="autocomplete-list-no-matches">No Matches</li>
        }
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

    render () {
        const honorifics = ["Coach", "Dr.", "Mr.", "Mrs.", "Ms.", "Mx."];
            
        return (
            <section className="create-main">
                <h1>Teacher Sign Up</h1>
                <section className="subcontainer">
                    <p className="blurb">If you're a teacher or a full-time educator who works directly with students, CharityChoice is for you!</p>
                    <p className="subblurb">Not a teacher? <Link className="link" to='/users/signup'>Register as a Donor</Link></p>
                    <form className="create-form" onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <div className="inputdiv">
                            <label>Your personal email address</label>
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            />
                        </div>
                        <div className="inputdiv">
                            <label>Password</label>
                            <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            />
                        </div>
                        <div className="inputdiv">
                            <label>Full name</label>
                            <input 
                            type="text"
                            value={this.state.full_name}
                            onChange={this.handleChange('full_name')}
                            />
                        </div>

                        <div className="inputdiv">
                            <label>Find your school</label>
                            <input
                            type="text"
                            onChange={this.handleAutocompleteOptions}
                            value={this.state.searchText}
                            />
                            <div className={`autocomplete-list-container${this.state.searchHidden}`}>
                                <ul className="autocomplete-list">
                                    {this.renderAutocompleteList()}
                                </ul>
                            </div>
                        </div>

                        <div className="inputdiv">
                            <label>What do your students call you?</label>
                            <div id="teacher-displayname-input">
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
                        <p className="disclaimer">By registering, you agree to our Terms of Use and Privacy Policy</p>
                        <button>
                            Register & start my first project!
                        </button>
                    </form>
                
                </section>
            </section>
        )
    }
}

export default withRouter(TeacherForm);



