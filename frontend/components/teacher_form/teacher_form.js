import React from 'react';

class TeacherForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.userTeacher;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getSchools();
    }

    handleChange(field){
        // debugger;
        return e => this.setState({ [field]: e.target.value })
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

    render () {
        const honorifics = ["Coach", "Dr.", "Mr.", "Mrs.", "Ms.", "Mx."];
        const schoolOptions = () => {
            if (this.props.schools.length > 0 ) {
                return this.props.schools.map( school => (<option value={school.id}>{school.name}, {school.city}, {school.state}</option>))
            } else {
                return <option>No Matches</option>
            }
        }
            
        return (
            <div>
                <form className="createTeacherForm" onSubmit={this.handleSubmit}>
                <div>
                        <label>
                            Your personal email address
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Full name
                            <input 
                            type="text"
                            value={this.state.full_name}
                            onChange={this.handleChange('full_name')}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Find your school
                        </label>
                        <select onChange={this.handleChange('school_id')}>
                            <option value=''>Select School</option>
                            {schoolOptions()}
                        </select>
                    </div>

                    <div>
                        <label>
                        What do your students call you?
                        </label>
                        <div>
                            <select onChange={this.handleChange('honorific')}>
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

                    <button>
                        Create
                    </button>
                </form>
            </div>
        )
    }
}

export default TeacherForm;



