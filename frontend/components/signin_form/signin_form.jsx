import React from 'react';
import { Link } from 'react-router-dom';


class SigninForm extends React.Component {
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
        this.props.signin(this.state);
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
            <div className="modalMainContainer">
                <h2>Welcome back!</h2>
                <div className="modalSubContainer">                  
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
                        <button className="createButton">
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="modalBlurb">
                    <h2>First-timer?</h2>
                    <div className="modalSubBlurb">
                        <div>If you're here to donate,</div>
                        <Link className="modalLink" onClick={()=>this.props.closeModal()} to='/users/new'>register as a donor.</Link>
                    </div>
                    <div className="modalSubBlurb">
                        <div>If you're a teacher in need of funding,</div>
                        <Link className="modalLink" onClick={()=>this.props.closeModal()} to='/teachers/new'>register as a teacher.</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SigninForm;