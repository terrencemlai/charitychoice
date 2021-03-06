import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
        if (this.props.type === 'generic') {
            this.props.signin(this.state).then( () => {this.props.history.push('/teachers/myprojects')});
        } else {
            this.props.signin(this.state)
        }
    }

    prefillTeacherCreds(){
        this.setState( {email: 'teacher@gmail.com' , password: 'password'} )
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

    renderMessage(){
        if (this.props.type === 'generic') {
            return <h2>Welcome back!</h2>
        } else if (this.props.type === 'donate') {
            return <h2>Sign in to complete your donation</h2>
        }
    }

    render () {
            
        return (
            <div className="modal-main">
                {this.renderMessage()}
                <div className="subcontainer">                  
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
                        <button>
                            Sign In
                        </button>
                        <div className="demo-button" onClick={() => this.prefillTeacherCreds()}>
                            Pre-fill Credentials for Demo Teacher Account
                        </div>
                    </form>
                </div>
                <div className="blurb">
                    <h2>First-timer?</h2>
                    <div className="subblurb">
                        <div>If you're here to donate,</div>
                        <Link className="link" onClick={()=>this.props.closeModal()} to='/users/signup'>register as a donor.</Link>
                    </div>
                    <div className="subblurb">
                        <div>If you're a teacher in need of funding,</div>
                        <Link className="link" onClick={()=>this.props.closeModal()} to='/teachers/signup'>register as a teacher.</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SigninForm);