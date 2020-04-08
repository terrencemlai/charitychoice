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

    changeField(field){
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

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.changeField('email')}
                        />
                    </label>

                    <label>
                        Full Name
                        <input 
                        type="text"
                        value={this.state.full_name}
                        onChange={this.changeField('full_name')}
                        />
                    </label>

                    <label>
                        School
                    </label>
                        <select onChange={this.changeField('school_id')}>
                            <option value=''>Select School</option>
                            <option value="11">Townsend Harris</option>
                        </select>

                    <label>
                        Honorific
                        <select onChange={this.changeField('honorific')}>
                            {honorifics.map( honorific => (
                                <option value={honorific}>{honorific}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Teacher Name
                        <input 
                        type="text"
                        value={this.state.teacher_name}
                        onChange={this.changeField('teacher_name')}
                        />
                    </label>

                    <button>
                        Create
                    </button>
                </form>
            </div>
        )
    }
}

export default TeacherForm;