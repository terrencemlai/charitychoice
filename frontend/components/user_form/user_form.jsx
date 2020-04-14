import React from 'react';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
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
            
        return (
            <section className="create-main">
                <h1>Donor Sign Up</h1>
                <section className="subcontainer">
                    <p className="blurb">If you'd like to make a difference by following or supporting a charity of your choice, join CharityChoice to start giving!</p>
                    <p className="subblurb">Are you a teacher? <Link className="link" to='/teachers/signup'>Register as a Teacher</Link> to create your first project!</p>                    
                    <form className="create-form" onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <div className="inputdiv">
                            <label>Email Address</label>
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
                            <label>Display Name (you may still make donations anonymously)</label>
                            <input 
                            type="text"
                            value={this.state.display_name}
                            onChange={this.handleChange('display_name')}
                            />
                        </div>

                        <p className="disclaimer">By registering, you agree to our Terms of Use and Privacy Policy</p>
                        <button>
                            Register
                        </button>
                    </form>
                
                </section>
            </section>
        )
    }
}

export default UserForm;