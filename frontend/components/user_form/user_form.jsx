import React from 'react';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createUser({ user: this.state } );
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
            
        return (
            <div className="createMainContainer">
                <h1>Donor Sign Up</h1>
                <div className="createSubContainer">
                    <p className="createBlurb">If you'd like to make a difference by following or supporting a charity of your choice, join CharityChoice to start giving!</p>
                    <p className="createSubBlurb">Are you a teacher? <Link to='/teachers/new'>Register as a Teacher</Link> to create your first project!</p>                    
                    <form className="createForm" onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <div className="createInputDiv">
                            <label>Email Address</label>
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            />
                        </div>
                        <div className="createInputDiv">
                            <label>Password</label>
                            <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            />
                        </div>
                        <div className="createInputDiv">
                            <label>Display Name (you may still make donations anonymously)</label>
                            <input 
                            type="text"
                            value={this.state.display_name}
                            onChange={this.handleChange('display_name')}
                            />
                        </div>

                        <p className="createDisclaimer">By registering, you agree to our Terms of Use and Privacy Policy</p>
                        <button className="createButton">
                            Register
                        </button>
                    </form>
                
                </div>
            </div>
        )
    }
}

export default UserForm;